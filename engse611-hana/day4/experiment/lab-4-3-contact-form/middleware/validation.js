// Contact form validation
const validateContact = (req, res, next) => {
    const { name, email, subject, message, phone, company } = req.body;
    const errors = [];
    
    // Validate name
    if (!name || typeof name !== 'string') {
        errors.push('Name is required and must be a string');
    } else if (name.trim().length < 2) {
        errors.push('Name must be at least 2 characters long');
    } else if (name.trim().length > 100) {
        errors.push('Name must not exceed 100 characters');
    }
    
    // Validate email
    if (!email || typeof email !== 'string') {
        errors.push('Email is required and must be a string');
    } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.trim())) {
            errors.push('Please provide a valid email address');
        }
    }
    
    // Validate subject
    if (!subject || typeof subject !== 'string') {
        errors.push('Subject is required and must be a string');
    } else if (subject.trim().length < 5) {
        errors.push('Subject must be at least 5 characters long');
    } else if (subject.trim().length > 200) {
        errors.push('Subject must not exceed 200 characters');
    }
    
    // Validate message
    if (!message || typeof message !== 'string') {
        errors.push('Message is required and must be a string');
    } else if (message.trim().length < 10) {
        errors.push('Message must be at least 10 characters long');
    } else if (message.trim().length > 1000) {
        errors.push('Message must not exceed 1000 characters');
    }
    
    // Validate phone (optional)
    if (phone && phone.trim().length > 0) {
        if (typeof phone !== 'string') {
            errors.push('Phone must be a string');
        } else {
            const phoneRegex = /^[0-9]{9,10}$/;
            const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
            if (!phoneRegex.test(cleanPhone)) {
                errors.push('Phone number must be 9-10 digits');
            }
        }
    }
    
    // Validate company (optional)
    if (company && company.trim().length > 0) {
        if (typeof company !== 'string') {
            errors.push('Company must be a string');
        } else if (company.trim().length > 100) {
            errors.push('Company name must not exceed 100 characters');
        }
    }
    
    if (errors.length > 0) {
        return res.status(400).json({
            success: false,
            message: 'Validation failed',
            errors: errors
        });
    }
    
    // Sanitize data
    req.body.name = req.body.name ? req.body.name.trim() : '';
    req.body.email = req.body.email ? req.body.email.trim().toLowerCase() : '';
    req.body.subject = req.body.subject ? req.body.subject.trim() : '';
    req.body.message = req.body.message ? req.body.message.trim() : '';
    req.body.phone = req.body.phone ? req.body.phone.trim().replace(/[\s\-\(\)]/g, '') : '';
    req.body.company = req.body.company ? req.body.company.trim() : '';
    
    next();
};

// Feedback validation
const validateFeedback = (req, res, next) => {
    const { rating, comment, email } = req.body;
    const errors = [];
    
    // Validate rating
    if (!rating) {
        errors.push('Rating is required');
    } else {
        const ratingNum = parseInt(rating);
        if (isNaN(ratingNum) || ratingNum < 1 || ratingNum > 5) {
            errors.push('Rating must be a number between 1 and 5');
        }
    }
    
    // Validate comment
    if (!comment || typeof comment !== 'string') {
        errors.push('Comment is required and must be a string');
    } else if (comment.trim().length < 5) {
        errors.push('Comment must be at least 5 characters long');
    } else if (comment.trim().length > 500) {
        errors.push('Comment must not exceed 500 characters');
    }
    
    // Validate email (optional)
    if (email && email.trim().length > 0) {
        if (typeof email !== 'string') {
            errors.push('Email must be a string');
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.trim())) {
                errors.push('Please provide a valid email address');
            }
        }
    }
    
    if (errors.length > 0) {
        return res.status(400).json({
            success: false,
            message: 'Validation failed',
            errors: errors
        });
    }

    // Sanitize feedback data
    req.body.rating = parseInt(req.body.rating);
    req.body.comment = req.body.comment ? req.body.comment.trim() : '';
    req.body.email = req.body.email ? req.body.email.trim().toLowerCase() : '';
    
    next();
};

module.exports = {
    validateContact,
    validateFeedback
};