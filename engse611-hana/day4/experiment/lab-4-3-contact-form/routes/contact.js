const express = require('express');
const { validateContact } = require('../middleware/validation');
const { appendToJsonFile, readJsonFile } = require('../middleware/fileManager');

const router = express.Router();

// POST /api/contact - Submit contact form
router.post('/', validateContact, async (req, res) => {
    try {
        const contactData = {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone || '',
            company: req.body.company || '',
            subject: req.body.subject,
            message: req.body.message,
            ip: req.ip,
            userAgent: req.get('User-Agent')
        };

        const savedContact = await appendToJsonFile('contacts.json', contactData);

        if (savedContact) {
            res.status(201).json({
                success: true,
                message: 'Contact form submitted successfully',
                data: {
                    id: savedContact.id,
                    submittedAt: savedContact.createdAt
                }
            });
        } else {
            throw new Error('Failed to save contact');
        }
    } catch (error) {
        console.error('Error submitting contact:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to submit contact form'
        });
    }
});

// GET /api/contact - Get all contacts (admin)
router.get('/', async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const search = req.query.search || '';

        let contacts = await readJsonFile('contacts.json');

        // Search functionality
        if (search) {
            const searchLower = search.toLowerCase();
            contacts = contacts.filter(contact => 
                contact.name.toLowerCase().includes(searchLower) ||
                contact.email.toLowerCase().includes(searchLower) ||
                contact.subject.toLowerCase().includes(searchLower) ||
                contact.message.toLowerCase().includes(searchLower)
            );
        }

        // Sort by most recent first
        contacts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

        // Pagination
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const paginatedContacts = contacts.slice(startIndex, endIndex);

        // Remove sensitive information
        const sanitizedContacts = paginatedContacts.map(contact => ({
            id: contact.id,
            name: contact.name,
            email: contact.email,
            phone: contact.phone,
            company: contact.company,
            subject: contact.subject,
            message: contact.message.substring(0, 100) + (contact.message.length > 100 ? '...' : ''),
            createdAt: contact.createdAt
        }));

        res.json({
            success: true,
            data: sanitizedContacts,
            pagination: {
                currentPage: page,
                totalPages: Math.ceil(contacts.length / limit),
                totalItems: contacts.length,
                itemsPerPage: limit
            }
        });
    } catch (error) {
        console.error('Error fetching contacts:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch contacts'
        });
    }
});

// GET /api/contact/:id - Get specific contact
router.get('/:id', async (req, res) => {
    try {
        const contactId = parseInt(req.params.id);
        const contacts = await readJsonFile('contacts.json');
        
        const contact = contacts.find(c => c.id === contactId);

        if (!contact) {
            return res.status(404).json({
                success: false,
                message: 'Contact not found'
            });
        }

        res.json({
            success: true,
            data: contact
        });
    } catch (error) {
        console.error('Error fetching contact:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch contact'
        });
    }
});

// DELETE /api/contact/:id - Delete contact (admin)
router.delete('/:id', async (req, res) => {
    try {
        const contactId = parseInt(req.params.id);
        const contacts = await readJsonFile('contacts.json');
        
        const contactIndex = contacts.findIndex(c => c.id === contactId);

        if (contactIndex === -1) {
            return res.status(404).json({
                success: false,
                message: 'Contact not found'
            });
        }

        const deletedContact = contacts.splice(contactIndex, 1)[0];
        const success = await require('../middleware/fileManager').writeJsonFile('contacts.json', contacts);

        if (success) {
            res.json({
                success: true,
                message: 'Contact deleted successfully',
                data: { id: deletedContact.id }
            });
        } else {
            throw new Error('Failed to update file');
        }
    } catch (error) {
        console.error('Error deleting contact:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to delete contact'
        });
    }
});

// GET /api/contact/export/csv - Export contacts as CSV
router.get('/export/csv', async (req, res) => {
    try {
        const contacts = await readJsonFile('contacts.json');
        
        if (contacts.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'No contacts to export'
            });
        }

        // Create CSV content
        const headers = ['ID', 'Name', 'Email', 'Phone', 'Company', 'Subject', 'Message', 'Created At'];
        const csvRows = [headers.join(',')];

        contacts.forEach(contact => {
            const row = [
                contact.id,
                `"${contact.name}"`,
                `"${contact.email}"`,
                `"${contact.phone || ''}"`,
                `"${contact.company || ''}"`,
                `"${contact.subject}"`,
                `"${contact.message.replace(/"/g, '""')}"`,
                `"${contact.createdAt}"`
            ];
            csvRows.push(row.join(','));
        });

        const csvContent = csvRows.join('\n');
        const timestamp = new Date().toISOString().split('T')[0];

        res.setHeader('Content-Type', 'text/csv');
        res.setHeader('Content-Disposition', `attachment; filename="contacts_${timestamp}.csv"`);
        res.send(csvContent);
    } catch (error) {
        console.error('Error exporting contacts:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to export contacts'
        });
    }
});

module.exports = router;