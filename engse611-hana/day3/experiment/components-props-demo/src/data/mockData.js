// Mock data สำหรับ demo
export const sampleProducts = [
  {
    id: 1,
    name: 'iPhone 15 Pro',
    price: 45900,
    originalPrice: 49900,
    image: 'https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/iphone-15-pro-max.png',
    description: 'สมาร์ทโฟนล่าสุดจาก Apple พร้อมชิป A17 Pro',
    inStock: true,
    category: 'electronics'
  },
  {
    id: 2,
    name: 'MacBook Air M2',
    price: 39900,
    originalPrice: 42900,
    image: 'https://www.istudio.store/cdn/shop/files/IMG-5560653.jpg?v=1730356519&width=823',
    description: 'โน้ตบุ๊คที่บางเบาและทรงพลัง',
    inStock: true,
    category: 'electronics'
  },
  {
    id: 3,
    name: 'เสื้อยืดผ้าฝ้าย',
    price: 299,
    originalPrice: 399,
    image: 'https://via.placeholder.com/250x200/ffc107/000000?text=T-Shirt',
    description: 'เสื้อยืดผ้าฝ้าย 100% นุ่มสบาย',
    inStock: false,
    category: 'clothing'
  },
  {
    id: 4,
    name: 'หนังสือ React.js',
    price: 650,
    originalPrice: 750,
    image: 'https://via.placeholder.com/250x200/17a2b8/ffffff?text=React+Book',
    description: 'คู่มือเรียนรู้ React.js ฉบับสมบูรณ์',
    inStock: true,
    category: 'books'
  }
];

export const sampleStudents = [
  { id: 1, name: 'สมชาย ใจดี', score: 95, grade: 'A', year: 3 },
  { id: 2, name: 'สมศรี สวยงาม', score: 87, grade: 'B+', year: 3 },
  { id: 3, name: 'สมหมาย เก่งมาก', score: 78, grade: 'B', year: 2 },
  { id: 4, name: 'สมหญิง ขยันเรียน', score: 92, grade: 'A-', year: 3 },
  { id: 5, name: 'สมศักดิ์ มานะ', score: 65, grade: 'C+', year: 2 },
  { id: 6, name: 'สมใจ ดีงาม', score: 88, grade: 'B+', year: 4 }
];

export const sampleUsers = [
  { id: 1, isOnline: true, isPremium: true, name: 'Admin' },
  { id: 2, isOnline: true, isPremium: false, name: 'User1' },
  { id: 3, isOnline: false, lastSeen: '5 นาทีที่แล้ว', name: 'User2' },
  { id: 4, isOnline: false, lastSeen: '2 ชั่วโมงที่แล้ว', name: 'User3' },
  null // ผู้ใช้ที่ไม่ได้เข้าสู่ระบบ
];

export const categories = [
  { id: 'all', name: 'ทั้งหมด' },
  { id: 'electronics', name: 'อิเล็กทรอนิกส์' },
  { id: 'clothing', name: 'เสื้อผ้า' },
  { id: 'books', name: 'หนังสือ' }
];