import React from 'react';
import PropTypes from 'prop-types';
import './productcard.css'

function ProductCard({ product, onAddToCart, onViewDetails }) {
    const renderStars = (rating) => {
    const fullStars = Math.floor(rating); // ดาวเต็ม
    const hasHalfStar = rating % 1 !== 0; // มีดาวครึ่งไหม
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // ดาวว่าง

    const stars = [];

    // เพิ่มดาวเต็ม
    for (let i = 0; i < fullStars; i++) {
        stars.push(<span key={`full-${i}`} style={{color: '#FFD700'}}>★</span>);
    }

    // เพิ่มดาวครึ่ง
    if (hasHalfStar) {
        stars.push(<span key="half" style={{color: '#FFD700'}}>☆</span>); // ☆ แทนดาวครึ่ง, สามารถใช้ไอคอนอื่นได้
    }

    // เพิ่มดาวว่าง
    for (let i = 0; i < emptyStars; i++) {
        stars.push(<span key={`empty-${i}`} style={{color: '#ccc'}}>★</span>);
    }

    return stars;
};

    return (
        <div className="product-card">
            <div className="product-image">
                <img 
                    src={product.image} 
                    alt={product.name}
                    onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/300x300/cccccc/666666?text=No+Image';
                    }}
                />
            </div>
            
            <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                
                {/* TODO: นักศึกษาจะเพิ่ม rating stars ในส่วน Challenge */}
                
                <div className="product-price">
  {product.discount > 0 ? (
    <>
      <span className="original-price">
        ฿{product.originalPrice.toLocaleString()}
      </span>
      <span className="discounted-price">
        ฿{product.price.toLocaleString()}
      </span>
      <span className="discount-tag">-{product.discount}%</span>
    </>
  ) : (
    <span className="discounted-price">
      ฿{product.price.toLocaleString()}
    </span>
  )}
</div>
<div className="product-rating">
    {renderStars(product.rating)}
</div>
                
                <div className="product-actions">
                    <button 
                        className="btn btn-secondary"
                        onClick={() => onViewDetails(product)}
                    >
                        ดูรายละเอียด
                    </button>
                    <button 
                        className="btn btn-primary"
                        onClick={() => onAddToCart(product)}
                        disabled={!product.inStock}
                    >
                        {product.inStock ? 'ใส่ตะกร้า' : 'หมดสินค้า'}
                    </button>
                </div>
            </div>
        </div>
    );
}

// TODO: นักศึกษาจะเพิ่ม PropTypes validation ในส่วน Challenge
ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        originalPrice: PropTypes.number.isRequired,
        discount: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        inStock: PropTypes.bool.isRequired,
        rating: PropTypes.number.isRequired
    }),
    onAddToCart: PropTypes.func.isRequired,
    onViewDetails: PropTypes.func.isRequired
};

export default ProductCard;