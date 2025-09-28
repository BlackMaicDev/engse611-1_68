const express = require('express');
const app = express();

app.use(express.json());

// Route ที่อาจเกิด error
app.get('/api/divide/:a/:b', (req, res, next) => {
    try {
        const a = parseFloat(req.params.a);
        const b = parseFloat(req.params.b);
        
        if (isNaN(a) || isNaN(b)) {
            const error = new Error('กรุณาใส่ตัวเลข');
            error.status = 400;
            throw error;
        }
        
        if (b === 0) {
            const error = new Error('ไม่สามารถหารด้วยศูนย์ได้');
            error.status = 400;
            throw error;
        }
        
        const result = a / b;
        res.json({ 
            success: true,
            calculation: `${a} ÷ ${b} = ${result}`,
            result: result 
        });
        
    } catch (error) {
        next(error); // ส่งต่อไป error handler
    }
});

// Route ที่ทำให้ server crash (สำหรับทดสอบ)
app.get('/api/crash', (req, res) => {
    // ❌ ไม่มี try-catch
    const data = JSON.parse('invalid json'); // จะ error!
    res.json(data);
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('💥 Error:', err.message);
    
    const statusCode = err.status || 500;
    const message = err.message || 'เกิดข้อผิดพลาดภายในเซิร์ฟเวอร์';
    
    res.status(statusCode).json({
        success: false,
        error: message,
        timestamp: new Date().toISOString()
    });
});

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({
        success: false,
        error: 'ไม่พบหน้าที่ค้นหา',
        path: req.originalUrl
    });
});

app.listen(3000, () => {
    console.log('🚀 Error Demo Server: http://localhost:3000');
});