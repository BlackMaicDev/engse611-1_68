import React from 'react';
import PropTypes from 'prop-types';

function ProductCard({ 
    product, 
    onAddToCart, 
    onViewDetails, 
    showDiscount = true,
    showStock = true 
}) {
    const { name, price, originalPrice, image, description, inStock } = product;
    const discount = Math.round(((originalPrice - price) / originalPrice) * 100);
    const savings = originalPrice - price;
    
    return (
        <div className={`product-card ${!inStock ? 'out-of-stock' : ''}`}>
            <div className="product-image-container">
                <img 
                    src={image} 
                    alt={name} 
                    className="product-image"
                    onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/250x200/cccccc/666666?text=No+Image';
                    }}
                />
                {showDiscount && discount > 0 && (
                    <div className="discount-badge">-{discount}%</div>
                )}
                {!inStock && <div className="stock-overlay">หมดสินค้า</div>}
            </div>
            
            <div className="product-info">
                <h4 className="product-name">{name}</h4>
                <p className="product-description">{description}</p>
                
                <div className="price-section">
                    <span className="current-price">฿{price.toLocaleString()}</span>
                    {discount > 0 && (
                        <>
                            <span className="original-price">
                                ฿{originalPrice.toLocaleString()}
                            </span>
                            <div className="savings">
                                ประหยัด ฿{savings.toLocaleString()}
                            </div>
                        </>
                    )}
                </div>
                
                {showStock && (
                    <div className={`stock-status ${inStock ? 'in-stock' : 'out-of-stock'}`}>
                        {inStock ? '✅ มีสินค้า' : '❌ หมดสินค้า'}
                    </div>
                )}
                
                <div className="product-actions">
                    <button 
                        onClick={() => onViewDetails(product)} 
                        className="btn-secondary"
                    >
                        👁️ ดูรายละเอียด
                    </button>
                    <button 
                        onClick={() => onAddToCart(product)} 
                        disabled={!inStock}
                        className="btn-primary"
                    >
                        🛒 {inStock ? 'ใส่ตะกร้า' : 'หมดสินค้า'}
                    </button>
                </div>
            </div>
        </div>
    );
}

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        originalPrice: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        inStock: PropTypes.bool.isRequired,
        category: PropTypes.string.isRequired
    }).isRequired,
    onAddToCart: PropTypes.func.isRequired,
    onViewDetails: PropTypes.func.isRequired,
    showDiscount: PropTypes.bool,
    showStock: PropTypes.bool
};

export default ProductCard;