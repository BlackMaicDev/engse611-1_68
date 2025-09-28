// ไฟล์: server.js
const express = require('express');
const app = express();
const PORT = 3000;

// Route พื้นฐาน
app.get('/', (req, res) => {
    res.send('<h1>🎉 สวัสดี Express.js!</h1>');
});
app.get('/about', (req, res) => {
    res.send('<h1>🎉 About Service!</h1>');
});
app.get('/contact', (req, res) => {
    res.send('<h1>🎉 Contact!</h1>');
});

// เริ่มเซิร์ฟเวอร์
app.listen(PORT, () => {
    console.log(`🚀 Server กำลังทำงานที่ http://localhost:${PORT}`);
});