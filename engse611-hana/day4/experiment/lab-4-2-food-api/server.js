const express = require('express');
const cors = require('cors');
const path = require('path');

// import foodRoutes และ logger
const foodRoutes = require('./routes/foods');
const logger = require('./middleware/logger');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use(logger); // ใช้ logger middleware

// Routes
app.get('/', (req, res) => {
    res.json({
        message: '🍜 Welcome to Food API!',
        version: '1.0.0',
        endpoints: {
            foods: '/api/foods',
            search: '/api/foods?search=ผัด',
            category: '/api/foods?category=แกง',
            spicy: '/api/foods?maxSpicy=3',
            vegetarian: '/api/foods?vegetarian=true',
            documentation: '/api/docs',
            stats: '/api/stats'
        }
    });
});

// ใช้ foodRoutes สำหรับ /api/foods
app.use('/api/foods', foodRoutes);

// Route GET /api/docs
app.get('/api/docs', (req, res) => {
    res.json({
        title: "📖 Food API Documentation",
        version: "1.0.0",
        endpoints: [
            { method: "GET", path: "/", description: "Welcome page" },
            { method: "GET", path: "/api/foods", description: "Get all foods (supports query: search, category, maxSpicy, vegetarian)" },
            { method: "GET", path: "/api/foods/:id", description: "Get food by ID" },
            { method: "GET", path: "/api/stats", description: "Get statistics (total foods, count by category, etc.)" },
        ]
    });
});

// Route GET /api/stats
app.get('/api/stats', (req, res) => {
    const foods = require('./data/foods.json'); // สมมติว่ามีไฟล์ data
    const total = foods.length;

    // นับจำนวนหมวดหมู่
    const byCategory = foods.reduce((acc, f) => {
        acc[f.category] = (acc[f.category] || 0) + 1;
        return acc;
    }, {});

    // นับเมนูมังสวิรัติ
    const vegetarianCount = foods.filter(f => f.vegetarian).length;

    res.json({
        totalFoods: total,
        foodsByCategory: byCategory,
        vegetarianCount
    });
});

// 404 handler
app.use(/.*/, (req, res) => {
    res.status(404).json({
        success: false,
        message: 'API endpoint not found',
        requestedUrl: req.originalUrl
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Food API Server running on http://localhost:${PORT}`);
    console.log(`📖 API Documentation: http://localhost:${PORT}/api/docs`);
});
