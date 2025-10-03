# Lab 4-2: Food API

## 📋 Overview
API สำหรับจัดการข้อมูลอาหาร พร้อมระบบค้นหา กรองข้อมูล และการจัดการข้อมูลแบบ CRUD

## 📁 Project Structure
```
lab-4-2-food-api/
├── server.js                # เซิร์ฟเวอร์หลัก
├── package.json            # ข้อมูลโปรเจกต์และ dependencies
├── data/
│   └── foods.json          # ข้อมูลอาหารตัวอย่าง
├── routes/
│   └── foods.js           # API routes สำหรับอาหาร
├── middleware/
│   └── logger.js          # Middleware สำหรับ logging
└── public/
    ├── index.html         # หน้าเว็บทดสอบ API
    ├── style.css          # ไฟล์ CSS
    └── script.js          # JavaScript สำหรับ frontend
```

## 🚀 Getting Started

### 1. ติดตั้ง Dependencies
```bash
cd lab-4-2-food-api
npm install
```

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

### 🍽️ Foods API

#### GET /api/foods
ดึงรายการอาหารทั้งหมด (พร้อม filtering)

**Query Parameters:**
- `search` - ค้นหาจากชื่อหรือคำอธิบาย
- `category` - กรองตามประเภทอาหาร  
- `maxSpicy` - กรองระดับความเผ็ดสูงสุด
- `vegetarian` - กรองอาหารเจ (true/false)
- `available` - กรองอาหารที่มีจำหน่าย (true/false)
- `maxPrice` - กรองราคาสูงสุด

**ตัวอย่าง:**
```bash
GET /api/foods
GET /api/foods?search=ผัด
GET /api/foods?category=แกง
GET /api/foods?maxSpicy=3
GET /api/foods?vegetarian=true
GET /api/foods?maxPrice=100
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "ผัดไทย",
      "category": ["ก๋วยเตี๋ยว", "อาหารจานเดียว"],
      "price": 60,
      "description": "ก๋วยเตี๋ยวผัดรสชาติดั้งเดิม",
      "spicyLevel": 2,
      "vegetarian": false,
      "available": true,
      "ingredients": ["เส้นก๋วยเตี๋ยว", "ไข่", "ถั่วงอก", "กุ้งแห้ง"]
    }
  ],
  "total": 1,
  "filters": {
    "search": "ผัด",
    "category": null,
    "maxSpicy": null,
    "vegetarian": null,
    "available": null,
    "maxPrice": null
  }
}
```

#### GET /api/foods/:id
ดึงข้อมูลอาหารตาม ID

**ตัวอย่าง:**
```bash
GET /api/foods/1
```

#### GET /api/foods/category/:category
ดึงอาหารตามประเภท

**ตัวอย่าง:**
```bash
GET /api/foods/category/แกง
GET /api/foods/category/ก๋วยเตี๋ยว
```

### 📊 Statistics API

#### GET /api/stats
ดึงสถิติข้อมูลอาหาร

**Response:**
```json
{
  "success": true,
  "data": {
    "totalFoods": 12,
    "categories": {
      "แกง": 4,
      "ก๋วยเตี๋ยว": 3,
      "อาหารจานเดียว": 5
    },
    "averagePrice": 75.5,
    "spicyLevels": {
      "1": 2,
      "2": 4,
      "3": 3,
      "4": 2,
      "5": 1
    },
    "vegetarianCount": 3,
    "availableCount": 10
  }
}
```

## 🌐 Web Interface

เปิดเบราว์เซอร์ไปที่ `http://localhost:3000` เพื่อใช้งานหน้าเว็บทดสอบ API

**คุณสมบัติ:**
- ทดสอบ API endpoints
- แสดงผลข้อมูลแบบ real-time
- ระบบค้นหาและกรองข้อมูล
- หน้าตาที่สวยงามและใช้งานง่าย

## 📊 Sample Data

ไฟล์ `data/foods.json` มีข้อมูลอาหารตัวอย่าง:

```json
[
  {
    "id": 1,
    "name": "ผัดไทย",
    "category": ["ก๋วยเตี๋ยว", "อาหารจานเดียว"],
    "price": 60,
    "description": "ก๋วยเตี๋ยวผัดรสชาติดั้งเดิม",
    "image": "https://example.com/padthai.jpg",
    "spicyLevel": 2,
    "vegetarian": false,
    "available": true,
    "ingredients": ["เส้นก๋วยเตี๋ยว", "ไข่", "ถั่วงอก", "กุ้งแห้ง", "น้ำตาลปี๊บ"],
    "cookingTime": 15,
    "calories": 400,
    "rating": 4.5
  }
]
```

## 🧪 การทดสอบ API

### ใช้ curl:
```bash
# ดึงอาหารทั้งหมด
curl http://localhost:3000/api/foods

# ค้นหาอาหาร
curl "http://localhost:3000/api/foods?search=ผัด"

# กรองตามประเภท
curl "http://localhost:3000/api/foods?category=แกง"

# ดึงข้อมูลอาหารตาม ID
curl http://localhost:3000/api/foods/1

# ดึงสถิติ
curl http://localhost:3000/api/stats
```

### ใช้ Postman:
1. Import collection จาก `/api/docs`
2. ทดสอบ endpoints ต่างๆ
3. ดูผลลัพธ์ในรูปแบบ JSON

## 📚 สิ่งที่เรียนรู้

1. **Express Router**: การแยก routes ออกเป็นไฟล์แยก
2. **Query Parameters**: การรับและประมวลผล query string
3. **JSON File**: การอ่าน/เขียนไฟล์ JSON
4. **API Design**: การออกแบบ RESTful API
5. **Error Handling**: การจัดการข้อผิดพลาด
6. **Middleware**: การใช้งาน middleware
7. **Frontend Integration**: การเชื่อมต่อ API กับ frontend

## ⚙️ Requirements

- Node.js version 14+
- Express.js 4+
- สามารถเพิ่ม dependencies อื่นๆ ตามต้องการ

## 🔧 การปรับแต่ง

### เพิ่มข้อมูลอาหาร:
แก้ไขไฟล์ `data/foods.json` โดยเพิ่มออบเจกต์ใหม่:

```json
{
  "id": 13,
  "name": "ต้มยำกุ้ง",
  "category": ["แกง", "ซุป"],
  "price": 120,
  "description": "ซุปรสจัดจ้านสไตล์ไทย",
  "spicyLevel": 4,
  "vegetarian": false,
  "available": true,
  "ingredients": ["กุ้ง", "เห็ด", "มะนาว", "พริก"]
}
```

### เพิ่ม API Endpoint ใหม่:
แก้ไขไฟล์ `routes/foods.js`:

```javascript
// POST /api/foods - เพิ่มอาหารใหม่
router.post('/', (req, res) => {
    // โค้ดสำหรับเพิ่มอาหาร
});

// PUT /api/foods/:id - แก้ไขอาหาร
router.put('/:id', (req, res) => {
    // โค้ดสำหรับแก้ไขอาหาร
});

// DELETE /api/foods/:id - ลบอาหาร
router.delete('/:id', (req, res) => {
    // โค้ดสำหรับลบอาหาร
});
```

## 🐛 Troubleshooting

### ปัญหาทั่วไป:
1. **File not found**: ตรวจสอบว่าไฟล์ `data/foods.json` มีอยู่
2. **JSON parse error**: ตรวจสอบ syntax ของไฟล์ JSON
3. **Port conflict**: เปลี่ยน port ในไฟล์ `server.js`

### การแก้ไข:
```bash
# ตรวจสอบไฟล์ JSON
node -e "console.log(JSON.parse(require('fs').readFileSync('./data/foods.json', 'utf8')))"

# รีสตาร์ทเซิร์ฟเวอร์
Ctrl + C แล้ว node server.js ใหม่
```

## 📝 Assignments

1. **เพิ่ม CRUD Operations**: สร้าง POST, PUT, DELETE endpoints
2. **ระบบค้นหาขั้นสูง**: เพิ่มการค้นหาแบบ fuzzy search
3. **ระบบ Rating**: เพิ่มการให้คะแนนอาหาร
4. **Image Upload**: เพิ่มการอัปโหลดรูปภาพ
5. **Database Integration**: เชื่อมต่อกับ MongoDB หรือ MySQL
6. **Authentication**: เพิ่มระบบล็อกอิน
7. **Unit Testing**: เขียน test cases สำหรับ API

## 📖 References

- [Express.js Routing](https://expressjs.com/en/guide/routing.html)
- [RESTful API Design](https://restfulapi.net/)
- [JSON Format](https://www.json.org/)
- [HTTP Status Codes](https://httpstatuses.com/)