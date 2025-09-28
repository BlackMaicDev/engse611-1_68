const express = require('express');
const app = express();

// Middleware สำหรับ parse JSON
app.use(express.json());

// ข้อมูลจำลอง
let students = [
    { id: 1, name: 'สมชาย', grade: 'A' },
    { id: 2, name: 'สมหญิง', grade: 'B+' }
];

// GET: ดึงข้อมูลนักเรียนทั้งหมด
app.get('/api/students', (req, res) => {
    res.json({
        success: true,
        data: students,
        total: students.length
    });
});

// GET: ดึงข้อมูลนักเรียนตาม ID
app.get('/api/students/:id', (req, res) => {
    const studentId = parseInt(req.params.id);
    const student = students.find(s => s.id === studentId);
    
    if (!student) {
        return res.status(404).json({
            success: false,
            message: 'ไม่พบนักเรียน'
        });
    }
    
    res.json({
        success: true,
        data: student
    });
});

// POST: เพิ่มนักเรียนใหม่
app.post('/api/students', (req, res) => {
    const { name, grade } = req.body;
    
    // Validation
    if (!name || !grade) {
        return res.status(400).json({
            success: false,
            message: 'กรุณาระบุชื่อและเกรด'
        });
    }
    
    const newStudent = {
        id: students.length + 1,
        name,
        grade
    };
    
    students.push(newStudent);
    
    res.status(201).json({
        success: true,
        message: 'เพิ่มนักเรียนสำเร็จ',
        data: newStudent
    });
});

// หน้า HTML สำหรับทดสอบ
app.get('/', (req, res) => {
    res.send(`
        <h1>🎓 Student API</h1>
        <h3>ทดสอบ API:</h3>
        <ul>
            <li><a href="/api/students">GET /api/students</a></li>
            <li><a href="/api/students/1">GET /api/students/1</a></li>
            <li>POST /api/students (ใช้ Postman หรือ curl)</li>
        </ul>
    `);
});

app.listen(3000, () => {
    console.log('🚀 JSON API Server: http://localhost:3000');
});