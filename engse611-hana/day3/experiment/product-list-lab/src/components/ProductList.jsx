import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import ProductCard from "./ProductCard";
import "./ProductList.css";

function ProductList({ products, categories, onAddToCart, onViewDetails }) {
  // 1. State สำหรับเกณฑ์การกรองและการจัดเรียง
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("price_asc"); // 'price_asc', 'price_desc', 'name_asc'

  // --------------------------------------------------------
  // ขั้นตอนที่ 1: กรองตามหมวดหมู่ (Category Filtering)
  // --------------------------------------------------------
  const categoryFilteredProducts = useMemo(() => {
    return selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);
  }, [selectedCategory]);

  // --------------------------------------------------------
  // ขั้นตอนที่ 2: ค้นหา (Search Filtering)
  // --------------------------------------------------------
  const searchFilteredProducts = useMemo(() => {
    const normalizedSearchTerm = String(searchTerm || "")
      .trim()
      .toLowerCase();

    // ถ้าไม่มีคำค้นหา ให้ส่ง Array ที่ถูกกรองตามหมวดหมู่แล้วไปต่อ
    if (!normalizedSearchTerm) {
      return categoryFilteredProducts;
    }

    // ค้นหาจากผลลัพธ์ที่ถูกกรองตามหมวดหมู่แล้วเท่านั้น
    return categoryFilteredProducts.filter((product) => {
      const productName = String(product?.name || "").toLowerCase();
      return productName.includes(normalizedSearchTerm);
    });
  }, [categoryFilteredProducts, searchTerm]);

  // --------------------------------------------------------
  // ขั้นตอนที่ 3: จัดเรียง (Sorting)
  // --------------------------------------------------------
  const finalFilteredAndSortedProducts = useMemo(() => {
    // สร้างสำเนาของ Array ที่ผ่านการค้นหาแล้ว (เพื่อให้ .sort() ไม่เปลี่ยน Array ต้นฉบับ)
    const sortableArray = [...searchFilteredProducts];

    switch (sortBy) {
      case "price_desc":
        // เรียงราคา: มากไปน้อย (แพงไปถูก)
        return sortableArray.sort((a, b) => b.price - a.price);
      case "name_asc":
        // เรียงชื่อ: A-Z (กรณีไม่สนใจตัวพิมพ์ใหญ่-เล็ก และรองรับหลายภาษา)
        return sortableArray.sort((a, b) =>
          String(a.name)
            .toLowerCase()
            .localeCompare(String(b.name).toLowerCase())
        );
      case "price_asc":
      default:
        // เรียงราคา: น้อยไปมาก (ถูกไปแพง)
        return sortableArray.sort((a, b) => a.price - b.price);
    }
  }, [searchFilteredProducts, sortBy]); // Re-sort เมื่อข้อมูลที่ผ่านการค้นหาเปลี่ยน หรือเกณฑ์การเรียงเปลี่ยน

  return (
    <div className="product-list-container">
      {/* Header */}
      <div className="header">
        <h1>🛍️ ร้านค้าออนไลน์</h1>
        <p>Lab 3.2 - การสร้าง Components และ Props</p>
      </div>

      {/* Simple Category Filter */}
      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <label htmlFor="category-select">หมวดหมู่: </label>
        <select
          id="category-select"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{ padding: "5px", fontSize: "16px" }}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <label htmlFor="category-select" style={{ marginLeft: "5px" }}>
          Search:{" "}
        </label>
        <input
          type="text"
          name="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <label htmlFor="sort-select">Sort by:</label>
        <select
          id="sort-select"
          onChange={(e) => setSortBy(e.target.value)}
          value={sortBy}
        >
          <option value="price_asc">ราคา: น้อยไปมาก</option>
          <option value="price_desc">ราคา: มากไปน้อย</option>
          <option value="name_asc">ชื่อสินค้า: A-Z</option>
        </select>
      </div>

      {/* Products Display */}
      <div className="products-grid">
        {finalFilteredAndSortedProducts.length > 0 ? (
          finalFilteredAndSortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              // ... props อื่นๆ
            />
          ))
        ) : (
          <p
            style={{
              gridColumn: "1 / -1",
              textAlign: "center",
              padding: "20px",
            }}
          >
            ไม่พบสินค้าที่ตรงกับเงื่อนไขการค้นหาและการกรอง 😥
          </p>
        )}
      </div>

      {/* TODO: นักศึกษาจะเพิ่ม:
                - Advanced filters (ราคา, rating)
                - Search functionality  
                - Sorting options
                - Empty state handling
                - Loading states
            */}
    </div>
  );
}

// TODO: นักศึกษาจะปรับปรุง PropTypes ให้ละเอียดมากขึ้น
ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onViewDetails: PropTypes.func.isRequired,
};

export default ProductList;
