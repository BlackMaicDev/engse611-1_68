const express = require('express');
const path = require('path');
const app = express();

// Middleware สำหรับ static files
app.use(express.static('public'));

// API endpoint
app.get('/api/message', (req, res) => {
    res.json({ 
        message: 'สวัสดีจาก API!',
        timestamp: new Date().toISOString()
    });
});

app.listen(3000, () => {
    console.log('🚀 Static Server: http://localhost:3000');
});