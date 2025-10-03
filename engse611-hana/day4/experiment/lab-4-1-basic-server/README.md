# Lab 4-1: Basic Server

## 📋 Overview
สำหรับการสร้าง HTTP Server และ Express Server พื้นฐาน เรียนรู้การใช้งาน Node.js ในการสร้างเซิร์ฟเวอร์

## 📁 Project Structure
```
lab-4-1-basic-server/
├── package.json          # ข้อมูลโปรเจกต์และ dependencies
├── http-server.js        # HTTP Server พื้นฐานด้วย Node.js
├── express-server.js     # Express Server
└── README.md            # คู่มือการใช้งาน
```

## 🚀 Getting Started

### 1. ติดตั้ง Dependencies
```bash
cd lab-4-1-basic-server
npm install
```

### 2. รันเซิร์ฟเวอร์

#### Option A: HTTP Server (Node.js พื้นฐาน)
```bash
node http-server.js
```
- เซิร์ฟเวอร์จะทำงานที่ `http://localhost:3000`

#### Option B: Express Server
```bash
node express-server.js
```
- เซิร์ฟเวอร์จะทำงานที่ `http://localhost:3000`

## 📖 การใช้งาน

### HTTP Server (http-server.js)
```javascript
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.end('<h1>Hello from HTTP Server!</h1>');
});

server.listen(3000, () => {
    console.log('HTTP Server running on http://localhost:3000');
});
```

**คุณสมบัติ:**
- HTTP Server พื้นฐานของ Node.js
- Response แบบ HTML
- การจัดการ Request/Response แบบ manual

### Express Server (express-server.js)
```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello from Express Server!</h1>');
});

app.listen(3000, () => {
    console.log('Express Server running on http://localhost:3000');
});
```

**คุณสมบัติ:**
- ใช้ Express.js Framework
- Routing พื้นฐาน
- การจัดการ Request/Response แบบง่าย

## 🧪 การทดสอบ

1. เปิดเบราว์เซอร์ไปที่ `http://localhost:3000`
2. ควรเห็นข้อความ "Hello from HTTP/Express Server!"
3. ลองเปลี่ยน URL หรือเพิ่ม route ใหม่

## 📚 สิ่งที่เรียนรู้

1. **HTTP Module**: การใช้ `http` module ของ Node.js
2. **Express.js**: Framework ที่ทำให้การสร้างเซิร์ฟเวอร์ง่ายขึ้น
3. **Request/Response**: การจัดการ HTTP request และ response
4. **Port & Localhost**: การกำหนด port และการทำงานใน localhost

## ⚙️ Requirements

- Node.js version 14+ 
- Express.js 4+

## 🔧 Troubleshooting

### ปัญหาทั่วไป:
1. **Port already in use**: ถ้า port 3000 ถูกใช้แล้ว ให้เปลี่ยนเป็น port อื่น
2. **Module not found**: ตรวจสอบว่าได้รัน `npm install` แล้ว
3. **Permission denied**: ลองรันด้วย administrator หรือเปลี่ยน port

### การแก้ไข:
```bash
# เปลี่ยน port
const PORT = process.env.PORT || 3001;

# ตรวจสอบ process ที่ใช้ port
netstat -ano | findstr :3000
```

## 📝 Assignment Ideas

1. เพิ่ม route ใหม่ เช่น `/about`, `/contact`
2. ส่งข้อมูล JSON แทน HTML
3. เพิ่มการจัดการ HTTP methods อื่นๆ (POST, PUT, DELETE)
4. เพิ่ม middleware เพื่อ log request
5. สร้าง error handling

## 📖 References

- [Node.js HTTP Module](https://nodejs.org/api/http.html)
- [Express.js Documentation](https://expressjs.com/)
- [npm Documentation](https://docs.npmjs.com/)