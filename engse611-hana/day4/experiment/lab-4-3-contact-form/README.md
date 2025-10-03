# Lab 4-3: Contact Form API

## 📋 Overview
ระบบฟอร์มติดต่อและให้ความคิดเห็นแบบครบครัน พร้อม validation, file management, และ API ที่สมบูรณ์

## 📁 Project Structure
```
lab-4-3-contact-form/
├── server.js                    # เซิร์ฟเวอร์หลัก + routing
├── package.json                # ข้อมูลโปรเจกต์และ dependencies
├── data/
│   ├── contacts.json           # ข้อมูลการติดต่อ
│   └── feedback.json           # ข้อมูลความคิดเห็น
├── middleware/
│   ├── validation.js           # ตรวจสอบความถูกต้องของข้อมูล
│   └── fileManager.js          # จัดการไฟล์ JSON
├── routes/
│   ├── contact.js              # API routes สำหรับฟอร์มติดต่อ
│   └── feedback.js             # API routes สำหรับความคิดเห็น
└── public/
    ├── index.html              # หน้าเว็บฟอร์ม
    ├── style.css               # ไฟล์ CSS
    └── script.js               # JavaScript สำหรับ frontend
```

## 🚀 Getting Started

### 1. ติดตั้ง Dependencies
```bash
cd lab-4-3-contact-form
npm install
```

**Dependencies ที่จำเป็น:**
- `express` - Web framework
- `cors` - Cross-origin requests
- `express-rate-limit` - Rate limiting
- `validator` - Input validation

### 2. รันเซิร์ฟเวอร์
```bash
node server.js
```
หรือ
```bash
npm start
```

เซิร์ฟเวอร์จะทำงานที่ `http://localhost:3000`

## 📡 API Endpoints

### 📞 Contact API

#### POST /api/contact
ส่งฟอร์มติดต่อ

**Request Body:**
```json
{
  "name": "สมชาย ใจดี",
  "email": "somchai@example.com",
  "phone": "0812345678",
  "company": "บริษัท ABC จำกัด",
  "subject": "สอบถามเกี่ยวกับสินค้า",
  "message": "ต้องการสอบถามรายละเอียดสินค้าและราคา"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Contact form submitted successfully",
  "data": {
    "id": 1633024800000,
    "submittedAt": "2023-10-01T10:00:00.000Z"
  }
}
```

#### GET /api/contact
ดึงรายการการติดต่อทั้งหมด (สำหรับ admin)

**Query Parameters:**
- `page` - หมายเลขหน้า (default: 1)
- `limit` - จำนวนรายการต่อหน้า (default: 10)
- `search` - ค้นหาจากชื่อ, อีเมล, หัวข้อ, หรือข้อความ

**ตัวอย่าง:**
```bash
GET /api/contact?page=1&limit=5
GET /api/contact?search=สมชาย
```

#### GET /api/contact/:id
ดึงข้อมูลการติดต่อตาม ID

#### DELETE /api/contact/:id
ลบข้อมูลการติดต่อ (สำหรับ admin)

#### GET /api/contact/export/csv
Export ข้อมูลการติดต่อเป็นไฟล์ CSV

### 💬 Feedback API

#### POST /api/feedback
ส่งความคิดเห็น

**Request Body:**
```json
{
  "rating": 5,
  "comment": "บริการดีมาก พนักงานใจดี",
  "email": "user@example.com",
  "anonymous": false
}
```

**Response:**
```json
{
  "success": true,
  "message": "Feedback submitted successfully",
  "data": {
    "id": 1633024800001,
    "submittedAt": "2023-10-01T10:05:00.000Z"
  }
}
```

#### GET /api/feedback
ดึงรายการความคิดเห็นทั้งหมด

**Query Parameters:**
- `page` - หมายเลขหน้า
- `limit` - จำนวนรายการต่อหน้า
- `rating` - กรองตามคะแนน (1-5)

#### GET /api/feedback/stats
ดึงสถิติความคิดเห็น

**Response:**
```json
{
  "success": true,
  "data": {
    "totalFeedbacks": 50,
    "averageRating": 4.2,
    "ratingDistribution": {
      "1": 2,
      "2": 3,
      "3": 8,
      "4": 15,
      "5": 22
    },
    "anonymousCount": 12,
    "withEmailCount": 38,
    "recentFeedbacks": 8
  }
}
```

#### GET /api/feedback/:id
ดึงข้อมูลความคิดเห็นตาม ID

#### DELETE /api/feedback/:id
ลบความคิดเห็น

#### GET /api/feedback/export/csv
Export ความคิดเห็นเป็นไฟล์ CSV

### 🔧 System API

#### GET /api/status
ดึงสถานะระบบและสถิติ

**Response:**
```json
{
  "success": true,
  "status": "online",
  "version": "1.0.0",
  "uptime": "2h 15m 30s",
  "data": {
    "totalContacts": 25,
    "totalFeedbacks": 50,
    "averageRating": "4.2"
  },
  "server": {
    "environment": "development",
    "nodeVersion": "v16.14.0",
    "platform": "win32"
  },
  "timestamp": "2023-10-01T12:30:00.000Z"
}
```

#### GET /api/docs
ดึงเอกสาร API

## 🌐 Web Interface

เปิดเบราว์เซอร์ไปที่ `http://localhost:3000`

### คุณสมบัติ:

#### 📞 ฟอร์มติดต่อ:
- **ชื่อ-นามสกุล** (จำเป็น): 2-100 ตัวอักษร
- **อีเมล** (จำเป็น): รูปแบบอีเมลที่ถูกต้อง
- **เบอร์โทร** (ไม่จำเป็น): 9-10 หลัก
- **บริษัท** (ไม่จำเป็น): ไม่เกิน 100 ตัวอักษร
- **หัวข้อ** (จำเป็น): 5-200 ตัวอักษร
- **ข้อความ** (จำเป็น): 10-1000 ตัวอักษร

#### 💬 ฟอร์มความคิดเห็น:
- **คะแนน** (จำเป็น): 1-5 ดาว
- **ความคิดเห็น** (จำเป็น): 5-500 ตัวอักษร
- **อีเมล** (ไม่จำเป็น): สำหรับติดต่อกลับ
- **ส่งแบบไม่ระบุชื่อ**: ซ่อนข้อมูลส่วนตัว

#### ✨ คุณสมบัติพิเศษ:
- **Real-time Validation**: ตรวจสอบข้อมูลทันทีที่พิมพ์
- **Loading States**: แสดงสถานะการส่งข้อมูล
- **Success/Error Messages**: แจ้งผลการส่งข้อมูล
- **API Status Dashboard**: แสดงสถานะระบบ
- **Responsive Design**: ใช้งานได้ทั้งมือถือและคอมพิวเตอร์

## 🔍 Validation Rules

### Contact Form:
- **name**: required, string, 2-100 characters
- **email**: required, valid email format
- **phone**: optional, 9-10 digits only
- **company**: optional, max 100 characters
- **subject**: required, 5-200 characters
- **message**: required, 10-1000 characters

### Feedback Form:
- **rating**: required, integer 1-5
- **comment**: required, 5-500 characters
- **email**: optional, valid email format if provided
- **anonymous**: boolean

## 🛡️ Security Features

### Rate Limiting:
- **API Endpoints**: 10 requests per 15 minutes per IP
- **Protection**: ป้องกัน spam และ abuse

### Input Validation:
- **Server-side**: ตรวจสอบใน middleware
- **Client-side**: ตรวจสอบใน JavaScript
- **Sanitization**: ทำความสะอาดข้อมูลป้อนเข้า

### Data Privacy:
- **Anonymous Feedback**: ไม่เก็บข้อมูลส่วนตัว
- **Email Masking**: ซ่อนอีเมลในความคิดเห็นแบบไม่ระบุชื่อ

## 📊 Data Management

### File Structure:
```json
// contacts.json
[
  {
    "id": 1633024800000,
    "name": "สมชาย ใจดี",
    "email": "somchai@example.com",
    "phone": "0812345678",
    "company": "บริษัท ABC จำกัด",
    "subject": "สอบถามเกี่ยวกับสินค้า",
    "message": "ต้องการสอบถามรายละเอียดสินค้าและราคา",
    "ip": "127.0.0.1",
    "userAgent": "Mozilla/5.0...",
    "createdAt": "2023-10-01T10:00:00.000Z"
  }
]

// feedback.json
[
  {
    "id": 1633024800001,
    "rating": 5,
    "comment": "บริการดีมาก พนักงานใจดี",
    "email": "user@example.com",
    "anonymous": false,
    "ip": "127.0.0.1",
    "userAgent": "Mozilla/5.0...",
    "createdAt": "2023-10-01T10:05:00.000Z"
  }
]
```

### Automatic Features:
- **Auto ID**: สร้าง unique ID อัตโนมัติ
- **Timestamps**: บันทึกเวลาอัตโนมัติ
- **IP Tracking**: บันทึก IP address
- **User Agent**: บันทึกข้อมูลเบราว์เซอร์

## 🧪 การทดสอบ

### ใช้ curl:

#### ส่งฟอร์มติดต่อ:
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "สมชาย ใจดี",
    "email": "somchai@example.com",
    "subject": "ทดสอบระบบ",
    "message": "นี่คือข้อความทดสอบระบบ"
  }'
```

#### ส่งความคิดเห็น:
```bash
curl -X POST http://localhost:3000/api/feedback \
  -H "Content-Type: application/json" \
  -d '{
    "rating": 5,
    "comment": "ระบบดีมาก ใช้งานง่าย",
    "anonymous": false
  }'
```

#### ดึงสถิติ:
```bash
curl http://localhost:3000/api/feedback/stats
curl http://localhost:3000/api/status
```

### ใช้ Web Interface:
1. เปิด `http://localhost:3000`
2. กรอกฟอร์มติดต่อหรือความคิดเห็น
3. ดูผลลัพธ์ในส่วน API Status
4. ทดสอบ validation โดยกรอกข้อมูลผิด

## 📚 สิ่งที่เรียนรู้

1. **Express Middleware**: การสร้างและใช้งาน custom middleware
2. **Input Validation**: การตรวจสอบข้อมูลทั้ง client และ server
3. **File Management**: การจัดการไฟล์ JSON อย่างมีประสิทธิภาพ
4. **Error Handling**: การจัดการข้อผิดพลาดที่สมบูรณ์
5. **API Design**: การออกแบบ RESTful API ที่มีมาตรฐาน
6. **Security**: การป้องกันและรักษาความปลอดภัย
7. **Frontend Integration**: การเชื่อมต่อ API กับ frontend
8. **Real-time Updates**: การอัปเดตข้อมูลแบบ real-time

## ⚙️ Requirements

- Node.js version 14+
- Express.js 4+
- CORS support
- Rate limiting
- File system access

## 🔧 การปรับแต่ง

### เปลี่ยนการตั้งค่า Rate Limiting:
```javascript
// server.js
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 20, // เพิ่มเป็น 20 requests
    message: {
        success: false,
        message: 'Too many requests, please try again later'
    }
});
```

### เพิ่ม Validation Rules:
```javascript
// middleware/validation.js
if (name.includes('badword')) {
    errors.push('Name contains inappropriate content');
}
```

### เพิ่ม Email Notifications:
```javascript
// routes/contact.js
const nodemailer = require('nodemailer');

// ส่งอีเมลแจ้งเตือนเมื่อมีการติดต่อใหม่
```

## 🐛 Troubleshooting

### ปัญหาทั่วไป:

1. **File Permission**: ไม่สามารถเขียนไฟล์ JSON
   ```bash
   # แก้ไข: ตรวจสอบสิทธิ์การเขียนไฟล์
   chmod 755 data/
   ```

2. **Validation Error**: ข้อมูลไม่ผ่าน validation
   ```javascript
   // ตรวจสอบ validation rules ใน middleware/validation.js
   ```

3. **Rate Limit Exceeded**: ส่ง request เกินขีดจำกัด
   ```bash
   # รอ 15 นาที หรือเปลี่ยน IP
   ```

4. **CORS Error**: ปัญหา cross-origin
   ```javascript
   // ตรวจสอบการตั้งค่า CORS ใน server.js
   app.use(cors());
   ```

### การ Debug:
```bash
# เปิด debug mode
DEBUG=* node server.js

# ตรวจสอบไฟล์ JSON
node -e "console.log(JSON.parse(require('fs').readFileSync('./data/contacts.json', 'utf8')))"
```

## 📝 Assignments

### Basic:
1. เพิ่มฟิลด์ใหม่ในฟอร์ม (เช่น เว็บไซต์, ตำแหน่ง)
2. เพิ่มการ validation แบบ custom
3. เปลี่ยนธีมสี CSS

### Intermediate:
4. เพิ่มระบบ search และ filter
5. สร้างหน้า admin สำหรับจัดการข้อมูล
6. เพิ่มการ export เป็น Excel
7. เพิ่มระบบแจ้งเตือนทาง email

### Advanced:
8. เชื่อมต่อกับ Database (MongoDB/MySQL)
9. เพิ่ม Authentication/Authorization
10. สร้าง Dashboard สำหรับสถิติ
11. เพิ่ม Unit Testing
12. Deploy ไปยัง Cloud

## 📖 References

- [Express.js Documentation](https://expressjs.com/)
- [Input Validation Best Practices](https://owasp.org/www-project-cheat-sheets/cheatsheets/Input_Validation_Cheat_Sheet.html)
- [RESTful API Design](https://restfulapi.net/)
- [Rate Limiting](https://www.npmjs.com/package/express-rate-limit)
- [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)