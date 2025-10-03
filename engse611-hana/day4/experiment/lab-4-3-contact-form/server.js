const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const path = require('path');

// Import routes
const contactRoutes = require('./routes/contact');
const feedbackRoutes = require('./routes/feedback');
const { readJsonFile } = require('./middleware/fileManager');

const app = express();
const PORT = process.env.PORT || 3000;

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10, // limit each IP to 10 requests per windowMs
    message: {
        success: false,
        message: 'Too many requests, please try again later'
    }
});

// Middleware
app.use(cors());
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Apply rate limiting to API routes
app.use('/api', limiter);

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Use contact and feedback routes
app.use('/api/contact', contactRoutes);
app.use('/api/feedback', feedbackRoutes);

// API documentation
app.get('/api/docs', (req, res) => {
    res.json({
        title: 'Contact Form API Documentation',
        version: '1.0.0',
        endpoints: {
            'POST /api/contact': {
                description: 'Submit contact form',
                requiredFields: ['name', 'email', 'subject', 'message'],
                optionalFields: ['phone', 'company']
            },
            'GET /api/contact': {
                description: 'Get all contact submissions (admin)',
                parameters: {
                    page: 'Page number (default: 1)',
                    limit: 'Items per page (default: 10)'
                }
            },
            'POST /api/feedback': {
                description: 'Submit feedback',
                requiredFields: ['rating', 'comment'],
                optionalFields: ['email']
            },
            'GET /api/feedback/stats': {
                description: 'Get feedback statistics'
            }
        }
    });
});

// API Status endpoint
app.get('/api/status', async (req, res) => {
    try {
        const contacts = await readJsonFile('contacts.json');
        const feedbacks = await readJsonFile('feedback.json');
        
        // Calculate uptime
        const uptime = process.uptime();
        const uptimeFormatted = `${Math.floor(uptime / 3600)}h ${Math.floor((uptime % 3600) / 60)}m ${Math.floor(uptime % 60)}s`;
        
        res.json({
            success: true,
            status: 'online',
            version: '1.0.0',
            uptime: uptimeFormatted,
            data: {
                totalContacts: contacts.length,
                totalFeedbacks: feedbacks.length,
                averageRating: feedbacks.length > 0 
                    ? (feedbacks.reduce((sum, f) => sum + f.rating, 0) / feedbacks.length).toFixed(2)
                    : 0
            },
            server: {
                environment: process.env.NODE_ENV || 'development',
                nodeVersion: process.version,
                platform: process.platform
            },
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        console.error('Error getting API status:', error);
        res.status(500).json({
            success: false,
            status: 'error',
            message: 'Failed to get API status'
        });
    }
});

// TODO: สร้าง route GET /api/status
// ส่งสถานะของ API และจำนวนข้อมูลที่เก็บไว้

// 404 handler
app.use(/.*/, (req, res) => {
    res.status(404).json({
        success: false,
        message: 'API endpoint not found',
        requestedUrl: req.originalUrl
    });
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: 'Internal server error'
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Contact Form API running on http://localhost:${PORT}`);
    console.log(`📖 API Documentation: http://localhost:${PORT}/api/docs`);
});