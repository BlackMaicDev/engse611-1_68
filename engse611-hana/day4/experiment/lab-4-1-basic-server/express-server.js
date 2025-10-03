const express = require('express');
const app = express();
const PORT = 3001;

// สร้างข้อมูลจำลอง students array
const students = [
  { id: 1, name: "สมชาย ใจดี", major: "วิศวกรรมคอมพิวเตอร์", year: 3 },
  { id: 2, name: "สุดา รักเรียน", major: "บริหารธุรกิจ", year: 2 },
  { id: 3, name: "ก้องภพ ตั้งใจ", major: "วิศวกรรมโยธา", year: 4 },
  { id: 4, name: "วรินทร์ ศรีสวัสดิ์", major: "วิศวกรรมคอมพิวเตอร์", year: 1 }
];

// Middleware
app.use(express.json());

// Route GET /
app.get('/', (req, res) => {
  res.json({
    message: "ยินดีต้อนรับสู่ Student API (Express)",
    endpoints: [
      "GET /",
      "GET /students",
      "GET /students/:id",
      "GET /students/major/:major",
      "GET /stats"
    ]
  });
});

// Route GET /students
app.get('/students', (req, res) => {
  res.json(students);
});

// Route GET /students/:id
app.get('/students/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find(s => s.id === id);
  if (student) {
    res.json(student);
  } else {
    res.status(404).json({ error: "ไม่พบนักศึกษาที่ค้นหา" });
  }
});

// Route GET /students/major/:major
app.get('/students/major/:major', (req, res) => {
  const major = req.params.major;
  const filtered = students.filter(s => s.major.includes(major));
  if (filtered.length > 0) {
    res.json(filtered);
  } else {
    res.status(404).json({ error: `ไม่พบนักศึกษาสาขา ${major}` });
  }
});

// Route GET /stats
app.get('/stats', (req, res) => {
  const total = students.length;
  const byMajor = students.reduce((acc, s) => {
    acc[s.major] = (acc[s.major] || 0) + 1;
    return acc;
  }, {});
  
  res.json({
    totalStudents: total,
    studentsByMajor: byMajor
  });
});

// Middleware จัดการ 404
app.use((req, res) => {
  res.status(404).json({ error: "ไม่พบ endpoint ที่เรียก" });
});

app.listen(PORT, () => {
  console.log(`🚀 Express Server running on http://localhost:${PORT}`);
  console.log('Available endpoints:');
  console.log('  GET /');
  console.log('  GET /students'); 
  console.log('  GET /students/:id');
  console.log('  GET /students/major/:major');
  console.log('  GET /stats');
});
