import React, { useState } from 'react';
import ProductList from './components/ProductList';
import { products, categories } from './data/products';

function App() {
    const [cart, setCart] = useState([]);

    // ฟังก์ชันเพิ่มสินค้าใส่ตะกร้า - พื้นฐาน
    const handleAddToCart = (product) => {
        setCart([...cart, product]);
        alert(`เพิ่ม ${product.name} ในตะกร้าแล้ว!`);
    };

    // ฟังก์ชันดูรายละเอียดสินค้า - พื้นฐาน
    const handleViewDetails = (product) => {
        alert(`ดูรายละเอียด: ${product.name}\nราคา: ฿${product.price}\nคำอธิบาย: ${product.description}`);
    };

    return (
        <div className="app">
            {/* แสดงจำนวนสินค้าในตะกร้า */}
            <div style={{ 
                position: 'fixed', 
                top: '20px', 
                right: '20px', 
                background: '#007bff', 
                color: 'white', 
                padding: '10px', 
                borderRadius: '20px',
                zIndex: 1000
            }}>
                🛒 ตะกร้า: {cart.length} ชิ้น
            </div>

            <ProductList 
                products={products}
                categories={categories}
                onAddToCart={handleAddToCart}
                onViewDetails={handleViewDetails}
            />
        </div>
    );
}

export default App;