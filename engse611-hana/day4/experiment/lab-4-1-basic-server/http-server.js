const http = require('http');
const url = require('url');

const PORT = 3000;

// สร้างข้อมูลจำลอง students array
const students = [
  { id: 1, name: "สมชาย ใจดี", major: "วิศวกรรมคอมพิวเตอร์", year: 3 },
  { id: 2, name: "สุดา รักเรียน", major: "บริหารธุรกิจ", year: 2 },
  { id: 3, name: "ก้องภพ ตั้งใจ", major: "วิศวกรรมโยธา", year: 4 }
];

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const method = req.method;

  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  if (method === "GET") {
    if (pathname === "/") {
      // route GET /
      res.writeHead(200);
      res.end(JSON.stringify({
        message: "ยินดีต้อนรับสู่ Student API",
        endpoints: [
          "GET /",
          "GET /students",
          "GET /students/:id",
          "GET /students/major/:major"
        ]
      }));
    } 
    else if (pathname === "/students") {
      // route GET /students
      res.writeHead(200);
      res.end(JSON.stringify(students));
    } 
    else if (pathname.startsWith("/students/major/")) {
      // route GET /students/major/:major
      const major = decodeURIComponent(pathname.split("/")[3]);
      const filtered = students.filter(s => s.major.includes(major));
      if (filtered.length > 0) {
        res.writeHead(200);
        res.end(JSON.stringify(filtered));
      } else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: `ไม่พบนักศึกษาสาขา ${major}` }));
      }
    } 
    else if (pathname.startsWith("/students/")) {
      // route GET /students/:id
      const id = parseInt(pathname.split("/")[2]);
      const student = students.find(s => s.id === id);
      if (student) {
        res.writeHead(200);
        res.end(JSON.stringify(student));
      } else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: "ไม่พบนักศึกษาที่ค้นหา" }));
      }
    } 
    else {
      // 404 not found
      res.writeHead(404);
      res.end(JSON.stringify({ error: "ไม่พบ endpoint ที่เรียก" }));
    }
  } else {
    // Method not allowed
    res.writeHead(405);
    res.end(JSON.stringify({ error: "Method not allowed" }));
  }
});

server.listen(PORT, () => {
  console.log(`🌐 HTTP Server running on http://localhost:${PORT}`);
  console.log('Available endpoints:');
  console.log('  GET /');
  console.log('  GET /students');
  console.log('  GET /students/:id');
  console.log('  GET /students/major/:major');
});
