const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const FOODS_FILE = path.join(__dirname, '../data/foods.json');

// Helper function: อ่านข้อมูลอาหาร
const loadFoods = () => {
    try {
        const data = fs.readFileSync(FOODS_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error loading foods:', error);
        return [];
    }
};

// GET /api/foods - ดึงรายการอาหารทั้งหมด (พร้อม filtering)
router.get('/', (req, res) => {
    try {
        let foods = loadFoods();

        const { search, category, maxSpicy, vegetarian, available, maxPrice } = req.query;

        // Filtering logic
        if (search) {
            const keyword = search.toLowerCase();
            foods = foods.filter(f =>
                f.name.toLowerCase().includes(keyword) ||
                (f.description && f.description.toLowerCase().includes(keyword))
            );
        }

        if (category) {
            foods = foods.filter(f => f.category.includes(category));
        }

        if (maxSpicy) {
            foods = foods.filter(f => f.spicyLevel <= parseInt(maxSpicy));
        }

        if (vegetarian) {
            const isVeg = vegetarian === 'true';
            foods = foods.filter(f => f.vegetarian === isVeg);
        }

        if (available) {
            const isAvailable = available === 'true';
            foods = foods.filter(f => f.available === isAvailable);
        }

        if (maxPrice) {
            foods = foods.filter(f => f.price <= parseFloat(maxPrice));
        }

        res.json({
            success: true,
            data: foods,
            total: foods.length,
            filters: {
                search: search || null,
                category: category || null,
                maxSpicy: maxSpicy || null,
                vegetarian: vegetarian || null,
                available: available || null,
                maxPrice: maxPrice || null
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching foods'
        });
    }
});

// GET /api/foods/category/:category - ดึงอาหารตามประเภท (ต้องมาก่อน /:id)
router.get('/category/:category', (req, res) => {
    const foods = loadFoods();
    const filtered = foods.filter(f => f.category.includes(req.params.category));

    if (filtered.length > 0) {
        res.json({ success: true, data: filtered, total: filtered.length });
    } else {
        res.status(404).json({ success: false, message: `ไม่พบเมนูประเภท ${req.params.category}` });
    }
});

// GET /api/foods/:id - ดึงข้อมูลอาหารตาม ID
router.get('/:id', (req, res) => {
    const foods = loadFoods();
    const food = foods.find(f => f.id === parseInt(req.params.id));

    if (food) {
        res.json({ success: true, data: food });
    } else {
        res.status(404).json({ success: false, message: 'ไม่พบเมนูอาหารที่ค้นหา' });
    }
});

// GET /api/foods/random - ดึงอาหารแบบสุ่ม 1 จาน
router.get('/random/one', (req, res) => {
    const foods = loadFoods();
    if (foods.length > 0) {
        const randomFood = foods[Math.floor(Math.random() * foods.length)];
        res.json({ success: true, data: randomFood });
    } else {
        res.status(404).json({ success: false, message: 'ไม่มีข้อมูลอาหาร' });
    }
});

module.exports = router;
