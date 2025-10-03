// Global variables
let isSubmitting = false;

// DOM Elements
const contactForm = document.getElementById('contactForm');
const feedbackForm = document.getElementById('feedbackForm');
const statusMessages = document.getElementById('statusMessages');
const apiResults = document.getElementById('apiResults');
const ratingSlider = document.getElementById('rating');
const ratingValue = document.getElementById('ratingValue');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeForms();
    setupEventListeners();
    loadApiStatus();
});

function initializeForms() {
    // Update rating display
    if (ratingSlider && ratingValue) {
        ratingSlider.addEventListener('input', () => {
            ratingValue.textContent = ratingSlider.value;
        });
    }
}

function setupEventListeners() {
    // Contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            if (validateContactForm()) {
                await submitContactForm();
            }
        });
    }

    // Feedback form submission
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            if (validateFeedbackForm()) {
                await submitFeedbackForm();
            }
        });
    }
    
    // Real-time validation for contact form
    if (contactForm) {
        const contactInputs = contactForm.querySelectorAll('input, textarea, select');
        contactInputs.forEach(input => {
            input.addEventListener('input', () => validateContactField(input));
            input.addEventListener('blur', () => validateContactField(input));
        });
    }
    
    // Real-time validation for feedback form
    if (feedbackForm) {
        const feedbackInputs = feedbackForm.querySelectorAll('input, textarea, select');
        feedbackInputs.forEach(input => {
            input.addEventListener('input', () => validateFeedbackField(input));
            input.addEventListener('blur', () => validateFeedbackField(input));
        });
    }
}

// Client-side validation function
function validateField(fieldName, value) {
    const validators = {
        name: (val) => {
            if (!val || val.length < 2) return { isValid: false, message: 'ชื่อต้องมีอย่างน้อย 2 ตัวอักษร' };
            if (val.length > 100) return { isValid: false, message: 'ชื่อต้องไม่เกิน 100 ตัวอักษร' };
            return { isValid: true, message: '' };
        },
        email: (val) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!val) return { isValid: false, message: 'อีเมลจำเป็นต้องกรอก' };
            if (!emailRegex.test(val)) return { isValid: false, message: 'รูปแบบอีเมลไม่ถูกต้อง' };
            return { isValid: true, message: '' };
        },
        phone: (val) => {
            if (!val) return { isValid: true, message: '' }; // Optional field
            const phoneRegex = /^[0-9]{9,10}$/;
            const cleanPhone = val.replace(/[\s\-\(\)]/g, '');
            if (!phoneRegex.test(cleanPhone)) return { isValid: false, message: 'เบอร์โทรต้องเป็นตัวเลข 9-10 หลัก' };
            return { isValid: true, message: '' };
        },
        subject: (val) => {
            if (!val || val.length < 5) return { isValid: false, message: 'หัวข้อต้องมีอย่างน้อย 5 ตัวอักษร' };
            if (val.length > 200) return { isValid: false, message: 'หัวข้อต้องไม่เกิน 200 ตัวอักษร' };
            return { isValid: true, message: '' };
        },
        message: (val) => {
            if (!val || val.length < 10) return { isValid: false, message: 'ข้อความต้องมีอย่างน้อย 10 ตัวอักษร' };
            if (val.length > 1000) return { isValid: false, message: 'ข้อความต้องไม่เกิน 1000 ตัวอักษร' };
            return { isValid: true, message: '' };
        },
        comment: (val) => {
            if (!val || val.length < 5) return { isValid: false, message: 'ความคิดเห็นต้องมีอย่างน้อย 5 ตัวอักษร' };
            if (val.length > 500) return { isValid: false, message: 'ความคิดเห็นต้องไม่เกิน 500 ตัวอักษร' };
            return { isValid: true, message: '' };
        },
        rating: (val) => {
            const rating = parseInt(val);
            if (!rating || rating < 1 || rating > 5) return { isValid: false, message: 'กรุณาให้คะแนน 1-5' };
            return { isValid: true, message: '' };
        }
    };
    
    const validator = validators[fieldName];
    return validator ? validator(value) : { isValid: true, message: '' };
}

function validateContactField(field) {
    const validation = validateField(field.name, field.value.trim());
    const errorElement = document.getElementById(`${field.name}Error`);
    
    if (errorElement) {
        errorElement.textContent = validation.message;
        errorElement.style.display = validation.isValid ? 'none' : 'block';
    }
    
    field.classList.toggle('invalid', !validation.isValid);
    field.classList.toggle('valid', validation.isValid && field.value.trim());
    
    return validation.isValid;
}

function validateFeedbackField(field) {
    const validation = validateField(field.name, field.value.trim());
    const errorElement = document.getElementById(`${field.name}Error`);
    
    if (errorElement) {
        errorElement.textContent = validation.message;
        errorElement.style.display = validation.isValid ? 'none' : 'block';
    }
    
    field.classList.toggle('invalid', !validation.isValid);
    field.classList.toggle('valid', validation.isValid && field.value.trim());
    
    return validation.isValid;
}

async function submitContactForm() {
    if (isSubmitting) return;
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());
    
    try {
        isSubmitting = true;
        updateSubmitButton('contactSubmit', 'กำลังส่ง...', true);
        
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        
        const result = await response.json();
        
        if (result.success) {
            showStatusMessage('✅ ส่งข้อความสำเร็จ! เราจะติดต่อกลับโดยเร็ว', 'success');
            contactForm.reset();
            clearAllValidationStyles(contactForm);
        } else {
            showStatusMessage(`❌ เกิดข้อผิดพลาด: ${result.message}`, 'error');
            if (result.errors) {
                displayValidationErrors(result.errors);
            }
        }
    } catch (error) {
        showStatusMessage('❌ เกิดข้อผิดพลาดในการเชื่อมต่อ', 'error');
        console.error('Error:', error);
    } finally {
        isSubmitting = false;
        updateSubmitButton('contactSubmit', 'ส่งข้อความ', false);
    }
}

async function submitFeedbackForm() {
    if (isSubmitting) return;
    
    const formData = new FormData(feedbackForm);
    const data = Object.fromEntries(formData.entries());
    data.rating = parseInt(data.rating);
    
    try {
        isSubmitting = true;
        updateSubmitButton('feedbackSubmit', 'กำลังส่ง...', true);
        
        const response = await fetch('/api/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        
        const result = await response.json();
        
        if (result.success) {
            showStatusMessage('✅ ขอบคุณสำหรับความคิดเห็น!', 'success');
            feedbackForm.reset();
            if (ratingValue) ratingValue.textContent = '1';
            if (ratingSlider) ratingSlider.value = '1';
            clearAllValidationStyles(feedbackForm);
        } else {
            showStatusMessage(`❌ เกิดข้อผิดพลาด: ${result.message}`, 'error');
            if (result.errors) {
                displayValidationErrors(result.errors);
            }
        }
    } catch (error) {
        showStatusMessage('❌ เกิดข้อผิดพลาดในการเชื่อมต่อ', 'error');
        console.error('Error:', error);
    } finally {
        isSubmitting = false;
        updateSubmitButton('feedbackSubmit', 'ส่งความคิดเห็น', false);
    }
}

// Validate entire contact form
function validateContactForm() {
    const fields = ['name', 'email', 'subject', 'message'];
    let isValid = true;
    
    fields.forEach(fieldName => {
        const field = contactForm.querySelector(`[name="${fieldName}"]`);
        if (field && !validateContactField(field)) {
            isValid = false;
        }
    });
    
    // Validate optional phone field if it has value
    const phoneField = contactForm.querySelector('[name="phone"]');
    if (phoneField && phoneField.value.trim()) {
        if (!validateContactField(phoneField)) {
            isValid = false;
        }
    }
    
    return isValid;
}

// Validate entire feedback form
function validateFeedbackForm() {
    const fields = ['rating', 'comment'];
    let isValid = true;
    
    fields.forEach(fieldName => {
        const field = feedbackForm.querySelector(`[name="${fieldName}"]`);
        if (field && !validateFeedbackField(field)) {
            isValid = false;
        }
    });
    
    // Validate optional email field if it has value
    const emailField = feedbackForm.querySelector('[name="email"]');
    if (emailField && emailField.value.trim()) {
        if (!validateFeedbackField(emailField)) {
            isValid = false;
        }
    }
    
    return isValid;
}

function clearAllValidationStyles(form) {
    const fields = form.querySelectorAll('input, textarea, select');
    fields.forEach(field => {
        field.classList.remove('valid', 'invalid');
        const errorElement = document.getElementById(`${field.name}Error`);
        if (errorElement) {
            errorElement.textContent = '';
            errorElement.style.display = 'none';
        }
    });
}

function displayValidationErrors(errors) {
    errors.forEach(error => {
        showStatusMessage(`🔸 ${error}`, 'error');
    });
}

function updateSubmitButton(buttonId, text, disabled) {
    const button = document.getElementById(buttonId);
    if (button) {
        button.textContent = text;
        button.disabled = disabled;
        button.classList.toggle('loading', disabled);
    }
}

function showStatusMessage(message, type) {
    if (!statusMessages) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `status-message ${type}`;
    messageDiv.textContent = message;
    
    statusMessages.appendChild(messageDiv);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.remove();
        }
    }, 5000);
}

// Load API status on page load
async function loadApiStatus() {
    try {
        const response = await fetch('/api/status');
        const result = await response.json();
        
        if (apiResults) {
            apiResults.innerHTML = `
                <div class="api-status">
                    <h4>📊 API Status</h4>
                    <div class="status-grid">
                        <div class="status-item">
                            <span class="label">Status:</span>
                            <span class="value ${result.status}">${result.status}</span>
                        </div>
                        <div class="status-item">
                            <span class="label">Total Contacts:</span>
                            <span class="value">${result.data?.totalContacts || 0}</span>
                        </div>
                        <div class="status-item">
                            <span class="label">Total Feedbacks:</span>
                            <span class="value">${result.data?.totalFeedbacks || 0}</span>
                        </div>
                        <div class="status-item">
                            <span class="label">Average Rating:</span>
                            <span class="value">${result.data?.averageRating || 0}/5 ⭐</span>
                        </div>
                        <div class="status-item">
                            <span class="label">Uptime:</span>
                            <span class="value">${result.uptime}</span>
                        </div>
                    </div>
                </div>
            `;
        }
    } catch (error) {
        console.error('Error loading API status:', error);
        if (apiResults) {
            apiResults.innerHTML = '<div class="api-status error">❌ Unable to load API status</div>';
        }
    }
}

// API Testing Functions
async function loadContacts() {
    if (!apiResults) return;
    
    try {
        apiResults.innerHTML = '<div class="loading">Loading contacts...</div>';
        
        const response = await fetch('/api/contact');
        const result = await response.json();
        
        if (result.success) {
            apiResults.innerHTML = `
                <div class="api-result">
                    <h4>📋 Contacts (${result.data.length})</h4>
                    <div class="contacts-list">
                        ${result.data.map(contact => `
                            <div class="contact-item">
                                <strong>${contact.name}</strong> (${contact.email})<br>
                                <small>${contact.subject} - ${new Date(contact.createdAt).toLocaleDateString('th-TH')}</small>
                            </div>
                        `).join('')}
                    </div>
                    <div class="pagination-info">
                        Page ${result.pagination.currentPage} of ${result.pagination.totalPages}
                    </div>
                </div>
            `;
        } else {
            apiResults.innerHTML = `<div class="api-error">Error: ${result.message}</div>`;
        }
    } catch (error) {
        apiResults.innerHTML = `<div class="api-error">Error loading contacts: ${error.message}</div>`;
    }
}

async function loadFeedbackStats() {
    if (!apiResults) return;
    
    try {
        apiResults.innerHTML = '<div class="loading">Loading feedback statistics...</div>';
        
        const response = await fetch('/api/feedback/stats');
        const result = await response.json();
        
        if (result.success) {
            const stats = result.data;
            apiResults.innerHTML = `
                <div class="api-result">
                    <h4>📊 Feedback Statistics</h4>
                    <div class="stats-grid">
                        <div class="stat-item">
                            <span class="label">Total Feedbacks:</span>
                            <span class="value">${stats.totalFeedbacks}</span>
                        </div>
                        <div class="stat-item">
                            <span class="label">Average Rating:</span>
                            <span class="value">${stats.averageRating}/5 ⭐</span>
                        </div>
                        <div class="stat-item">
                            <span class="label">Recent Feedbacks:</span>
                            <span class="value">${stats.recentFeedbacks}</span>
                        </div>
                        <div class="stat-item">
                            <span class="label">Anonymous:</span>
                            <span class="value">${stats.anonymousCount}</span>
                        </div>
                    </div>
                    <div class="rating-distribution">
                        <h5>Rating Distribution:</h5>
                        ${Object.entries(stats.ratingDistribution).map(([rating, count]) => `
                            <div class="rating-bar">
                                <span>${rating}⭐</span>
                                <div class="bar"><div class="fill" style="width: ${(count/stats.totalFeedbacks)*100}%"></div></div>
                                <span>${count}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        } else {
            apiResults.innerHTML = `<div class="api-error">Error: ${result.message}</div>`;
        }
    } catch (error) {
        apiResults.innerHTML = `<div class="api-error">Error loading feedback stats: ${error.message}</div>`;
    }
}

async function loadAPIDocs() {
    if (!apiResults) return;
    
    try {
        const response = await fetch('/api/docs');
        const data = await response.json();
        
        apiResults.innerHTML = `
            <div class="api-result">
                <h4>📖 API Documentation</h4>
                <pre class="json-display">${JSON.stringify(data, null, 2)}</pre>
            </div>
        `;
    } catch (error) {
        apiResults.innerHTML = `<div class="api-error">Error loading API docs: ${error.message}</div>`;
    }
}