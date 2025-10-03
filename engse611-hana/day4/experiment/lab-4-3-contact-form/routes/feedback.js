const express = require('express');
const { validateFeedback } = require('../middleware/validation');
const { appendToJsonFile, readJsonFile } = require('../middleware/fileManager');

const router = express.Router();

// POST /api/feedback - Submit feedback
router.post('/', validateFeedback, async (req, res) => {
    try {
        const feedbackData = {
            rating: parseInt(req.body.rating),
            comment: req.body.comment,
            email: req.body.email || '',
            anonymous: req.body.anonymous === 'true' || req.body.anonymous === true,
            ip: req.ip,
            userAgent: req.get('User-Agent')
        };

        const savedFeedback = await appendToJsonFile('feedback.json', feedbackData);

        if (savedFeedback) {
            res.status(201).json({
                success: true,
                message: 'Feedback submitted successfully',
                data: {
                    id: savedFeedback.id,
                    submittedAt: savedFeedback.createdAt
                }
            });
        } else {
            throw new Error('Failed to save feedback');
        }
    } catch (error) {
        console.error('Error submitting feedback:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to submit feedback'
        });
    }
});

// GET /api/feedback - Get all feedback (admin)
router.get('/', async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const rating = req.query.rating ? parseInt(req.query.rating) : null;

        let feedbacks = await readJsonFile('feedback.json');

        // Filter by rating if specified
        if (rating && rating >= 1 && rating <= 5) {
            feedbacks = feedbacks.filter(feedback => feedback.rating === rating);
        }

        // Sort by most recent first
        feedbacks.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

        // Pagination
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const paginatedFeedbacks = feedbacks.slice(startIndex, endIndex);

        // Remove sensitive information for anonymous feedback
        const sanitizedFeedbacks = paginatedFeedbacks.map(feedback => ({
            id: feedback.id,
            rating: feedback.rating,
            comment: feedback.comment,
            email: feedback.anonymous ? '' : feedback.email,
            anonymous: feedback.anonymous,
            createdAt: feedback.createdAt
        }));

        res.json({
            success: true,
            data: sanitizedFeedbacks,
            pagination: {
                currentPage: page,
                totalPages: Math.ceil(feedbacks.length / limit),
                totalItems: feedbacks.length,
                itemsPerPage: limit
            }
        });
    } catch (error) {
        console.error('Error fetching feedback:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch feedback'
        });
    }
});

// GET /api/feedback/stats - Get feedback statistics
router.get('/stats', async (req, res) => {
    try {
        const feedbacks = await readJsonFile('feedback.json');

        if (feedbacks.length === 0) {
            return res.json({
                success: true,
                data: {
                    totalFeedbacks: 0,
                    averageRating: 0,
                    ratingDistribution: {
                        1: 0, 2: 0, 3: 0, 4: 0, 5: 0
                    },
                    anonymousCount: 0,
                    withEmailCount: 0
                }
            });
        }

        // Calculate statistics
        const totalFeedbacks = feedbacks.length;
        const totalRating = feedbacks.reduce((sum, feedback) => sum + feedback.rating, 0);
        const averageRating = (totalRating / totalFeedbacks).toFixed(2);

        // Rating distribution
        const ratingDistribution = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
        feedbacks.forEach(feedback => {
            ratingDistribution[feedback.rating]++;
        });

        // Anonymous vs with email count
        const anonymousCount = feedbacks.filter(f => f.anonymous).length;
        const withEmailCount = feedbacks.filter(f => !f.anonymous && f.email).length;

        // Recent feedback (last 30 days)
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        const recentFeedbacks = feedbacks.filter(f => new Date(f.createdAt) > thirtyDaysAgo);

        res.json({
            success: true,
            data: {
                totalFeedbacks,
                averageRating: parseFloat(averageRating),
                ratingDistribution,
                anonymousCount,
                withEmailCount,
                recentFeedbacks: recentFeedbacks.length,
                period: {
                    from: feedbacks.length > 0 ? feedbacks[feedbacks.length - 1].createdAt : null,
                    to: feedbacks.length > 0 ? feedbacks[0].createdAt : null
                }
            }
        });
    } catch (error) {
        console.error('Error calculating feedback stats:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to calculate feedback statistics'
        });
    }
});

// GET /api/feedback/:id - Get specific feedback
router.get('/:id', async (req, res) => {
    try {
        const feedbackId = parseInt(req.params.id);
        const feedbacks = await readJsonFile('feedback.json');
        
        const feedback = feedbacks.find(f => f.id === feedbackId);

        if (!feedback) {
            return res.status(404).json({
                success: false,
                message: 'Feedback not found'
            });
        }

        // Respect anonymous feedback privacy
        const sanitizedFeedback = {
            id: feedback.id,
            rating: feedback.rating,
            comment: feedback.comment,
            email: feedback.anonymous ? '' : feedback.email,
            anonymous: feedback.anonymous,
            createdAt: feedback.createdAt
        };

        res.json({
            success: true,
            data: sanitizedFeedback
        });
    } catch (error) {
        console.error('Error fetching feedback:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch feedback'
        });
    }
});

// DELETE /api/feedback/:id - Delete feedback (admin)
router.delete('/:id', async (req, res) => {
    try {
        const feedbackId = parseInt(req.params.id);
        const feedbacks = await readJsonFile('feedback.json');
        
        const feedbackIndex = feedbacks.findIndex(f => f.id === feedbackId);

        if (feedbackIndex === -1) {
            return res.status(404).json({
                success: false,
                message: 'Feedback not found'
            });
        }

        const deletedFeedback = feedbacks.splice(feedbackIndex, 1)[0];
        const success = await require('../middleware/fileManager').writeJsonFile('feedback.json', feedbacks);

        if (success) {
            res.json({
                success: true,
                message: 'Feedback deleted successfully',
                data: { id: deletedFeedback.id }
            });
        } else {
            throw new Error('Failed to update file');
        }
    } catch (error) {
        console.error('Error deleting feedback:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to delete feedback'
        });
    }
});

// GET /api/feedback/export/csv - Export feedback as CSV
router.get('/export/csv', async (req, res) => {
    try {
        const feedbacks = await readJsonFile('feedback.json');
        
        if (feedbacks.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'No feedback to export'
            });
        }

        // Create CSV content
        const headers = ['ID', 'Rating', 'Comment', 'Email', 'Anonymous', 'Created At'];
        const csvRows = [headers.join(',')];

        feedbacks.forEach(feedback => {
            const row = [
                feedback.id,
                feedback.rating,
                `"${feedback.comment.replace(/"/g, '""')}"`,
                feedback.anonymous ? '' : `"${feedback.email || ''}"`,
                feedback.anonymous,
                `"${feedback.createdAt}"`
            ];
            csvRows.push(row.join(','));
        });

        const csvContent = csvRows.join('\n');
        const timestamp = new Date().toISOString().split('T')[0];

        res.setHeader('Content-Type', 'text/csv');
        res.setHeader('Content-Disposition', `attachment; filename="feedback_${timestamp}.csv"`);
        res.send(csvContent);
    } catch (error) {
        console.error('Error exporting feedback:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to export feedback'
        });
    }
});

module.exports = router;