// src/data/products.js
export const categories = [
    { id: 'all', name: 'ทั้งหมด' },
    { id: 'electronics', name: 'อิเล็กทรอนิกส์' },
    { id: 'clothing', name: 'เสื้อผ้า' },
    { id: 'books', name: 'หนังสือ' }
];
export const products = [
    {
        id: 1,
        name: 'iPhone 15 Pro',
        category: 'electronics',
        price: 45900,
        originalPrice: 49900,
        discount: 8,
        image: 'https://placehold.co/250x200/cccccc/666666?text=iPhone%2015%20Pro',
        description: 'สมาร์ทโฟนล่าสุดจาก Apple',
        inStock: true,
        rating: 5
    },
    {
        id: 2,
        name: 'เสื้อยืดผ้าฝ้าย',
        category: 'clothing',
        price: 299,
        originalPrice: 299,
        discount: 0,
        image: 'https://placehold.co/250x200/cccccc/666666?text=T-Shirt',
        description: 'เสื้อยืดผ้าฝ้าย 100% นุ่มสบาย',
        inStock: true,
        rating: 1.5
    },
    {
        id: 3,
        name: 'หนังสือ React.js Guide',
        category: 'books',
        price: 650,
        originalPrice: 750,
        discount: 13,
        image: 'https://placehold.co/250x200/cccccc/666666?text=React+Book',
        description: 'คู่มือเรียนรู้ React.js ฉบับสมบูรณ์',
        inStock: false,
        rating: 2
    },
    {
        id: 4,
        name: 'หูฟังไร้สาย Sony WH-1000XM4',
        category: 'electronics',
        price: 11990,
        originalPrice: 12990,
        discount: 8,
        image: 'https://placehold.co/250x200/cccccc/666666?text=Sony+WH-1000XM4',
        description: 'หูฟังไร้สายตัดเสียงรบกวนคุณภาพสูงจาก Sony',
        inStock: true,
        rating: 3.5
    },
    {
        id: 5,
        name: 'เสื้อยืดลาย Minimal',
        category: 'fashion',
        price: 390,
        originalPrice: 490,
        discount: 20,
        image: 'https://placehold.co/250x200/cccccc/666666?text=Minimal+T-Shirt',
        description: 'เสื้อยืดคอตตอนเนื้อนุ่ม ดีไซน์เรียบง่าย',
        inStock: true,
        rating: 5
    },
    {
        id: 6,
        name: 'กระเป๋าเป้เดินทาง 30L',
        category: 'accessories',
        price: 1290,
        originalPrice: 1490,
        discount: 13,
        image: 'https://placehold.co/250x200/cccccc/666666?text=Travel+Backpack',
        description: 'กระเป๋าเป้สำหรับเดินทาง พร้อมช่องจัดระเบียบ',
        inStock: false,
        rating: 4.5
    },
    {
        id: 7,
        name: 'เครื่องชงกาแฟพกพา',
        category: 'home-appliances',
        price: 990,
        originalPrice: 1090,
        discount: 9,
        image: 'https://placehold.co/250x200/cccccc/666666?text=Portable+Coffee+Maker',
        description: 'เครื่องชงกาแฟแบบพกพา ใช้งานง่ายทุกที่',
        inStock: true,
        rating: 4
    },
    {
        id: 8,
        name: 'หนังสือ JavaScript Advanced',
        category: 'books',
        price: 720,
        originalPrice: 850,
        discount: 15,
        image: 'https://placehold.co/250x200/cccccc/666666?text=JS+Advanced+Book',
        description: 'หนังสือสำหรับผู้ที่ต้องการเชี่ยวชาญ JavaScript ระดับสูง',
        inStock: true,
        rating: 5
    }
];
