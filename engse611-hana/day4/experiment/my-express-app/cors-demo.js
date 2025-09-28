const express = require('express');
const cors = require('cors'); // npm install cors

const app = express();

// ✅ เปิด CORS
app.use(cors());
app.use(express.json());

app.get('/api/external', (req, res) => {
    res.json({ 
        message: 'ข้อมูลจาก External API',
        timestamp: new Date().toISOString()
    });
});

app.listen(3001, () => {
    console.log('🌐 CORS API Server: http://localhost:3001');
});