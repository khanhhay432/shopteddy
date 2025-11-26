import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { FaStar, FaHeart, FaShoppingCart, FaTruck, FaShieldAlt, FaUndo } from 'react-icons/fa';
import { products } from '../data/products';
import './ProductDetail.css';

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products ? products.find(p => p.id === parseInt(id)) : null;
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return <div>Không tìm thấy sản phẩm</div>;
  }

  const relatedProducts = products
    ? products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4)
    : [];

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate('/checkout');
  };

  const discount = product.originalPrice > product.price 
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  return (
    <div className="product-detail">
      <div className="product-detail-container">
        <div className="breadcrumb">
          <Link to="/">Trang chủ</Link>
          <span>/</span>
          <Link to="/products">Sản phẩm</Link>
          <span>/</span>
          <span>{product.name}</span>
        </div>

        <div className="product-detail-content">
          <div className="product-detail-grid">
            <div className="product-gallery">
              <div className="main-image-wrapper">
                <div className="product-badges-detail">
                  {product.isNew && <span className="badge new">Mới</span>}
                  {discount > 0 && <span className="badge sale">-{discount}%</span>}
                  {product.isBestSeller && <span className="badge bestseller">Bán chạy</span>}
                </div>
                <img 
                  src={product.images?.[selectedImage] || product.image} 
                  alt={product.name}
                  className="main-image"
                />
              </div>
              {product.images && product.images.length > 1 && (
                <div className="thumbnail-images">
                  {product.images.map((img, index) => (
                    <div 
                      key={index}
                      className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                      onClick={() => setSelectedImage(index)}
                    >
                      <img src={img} alt={`${product.name} ${index + 1}`} />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="product-detail-info">
              <span className="product-category-tag">{product.category}</span>
              <h1 className="product-title">{product.name}</h1>

              <div className="product-rating-detail">
                <div className="stars-large">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} style={{ opacity: i < Math.floor(product.rating) ? 1 : 0.3 }} />
                  ))}
                </div>
                <span className="rating-text">{product.rating}</span>
                <span className="reviews-count">({product.reviews} đánh giá)</span>
              </div>

              <div className="product-price-detail">
                <span className="current-price-large">
                  {product.price.toLocaleString('vi-VN')}đ
                </span>
                {product.originalPrice > product.price && (
                  <>
                    <span className="original-price-large">
                      {product.originalPrice.toLocaleString('vi-VN')}đ
                    </span>
                    <span className="discount-badge">-{discount}%</span>
                  </>
                )}
              </div>

              <div className="product-description">
                <p>{product.description}</p>
              </div>

              <div className="product-specs">
                <div className="spec-item">
                  <span className="spec-icon">📏</span>
                  <div className="spec-info">
                    <h4>Kích thước</h4>
                    <p>{product.size}</p>
                  </div>
                </div>
                <div className="spec-item">
                  <span className="spec-icon">🎨</span>
                  <div className="spec-info">
                    <h4>Màu sắc</h4>
                    <p>{product.color}</p>
                  </div>
                </div>
                <div className="spec-item">
                  <span className="spec-icon">🧵</span>
                  <div className="spec-info">
                    <h4>Chất liệu</h4>
                    <p>{product.material}</p>
                  </div>
                </div>
                <div className="spec-item">
                  <span className="spec-icon">📦</span>
                  <div className="spec-info">
                    <h4>Tồn kho</h4>
                    <p>Còn {product.stock} sản phẩm</p>
                  </div>
                </div>
              </div>

              <div className="quantity-selector">
                <h4>Số lượng:</h4>
                <div className="quantity-controls">
                  <button 
                    className="quantity-btn"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </button>
                  <div className="quantity-display">{quantity}</div>
                  <button 
                    className="quantity-btn"
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  >
                    +
                  </button>
                  <span className={`stock-info ${product.stock < 10 ? 'low-stock' : ''}`}>
                    {product.stock > 0 ? `Còn ${product.stock} sản phẩm` : 'Hết hàng'}
                  </span>
                </div>
              </div>

              <div className="action-buttons">
                <button className="btn-add-to-cart" onClick={handleAddToCart}>
                  <FaShoppingCart /> Thêm vào giỏ
                </button>
                <button className="btn-buy-now" onClick={handleBuyNow}>
                  Mua ngay
                </button>
                <button className="btn-wishlist-large">
                  <FaHeart />
                </button>
              </div>

              <div className="product-features">
                <div className="feature-item">
                  <span className="feature-item-icon">🚚</span>
                  <div className="feature-item-text">
                    <h5>Giao hàng nhanh</h5>
                    <p>2-3 ngày toàn quốc</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-item-icon">🛡️</span>
                  <div className="feature-item-text">
                    <h5>Chính hãng 100%</h5>
                    <p>Đảm bảo chất lượng</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-item-icon">↩️</span>
                  <div className="feature-item-text">
                    <h5>Đổi trả 7 ngày</h5>
                    <p>Miễn phí đổi trả</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="product-tabs">
          <div className="tabs-header">
            <button 
              className={`tab-button ${activeTab === 'description' ? 'active' : ''}`}
              onClick={() => setActiveTab('description')}
            >
              Mô tả chi tiết
            </button>
            <button 
              className={`tab-button ${activeTab === 'care' ? 'active' : ''}`}
              onClick={() => setActiveTab('care')}
            >
              Hướng dẫn bảo quản
            </button>
            <button 
              className={`tab-button ${activeTab === 'reviews' ? 'active' : ''}`}
              onClick={() => setActiveTab('reviews')}
            >
              Đánh giá ({product.reviews})
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'description' && (
              <div>
                <h3>Thông tin sản phẩm</h3>
                <p>{product.description}</p>
                <p><strong>Chất liệu:</strong> {product.material}</p>
                <p><strong>Kích thước:</strong> {product.size}</p>
                <p><strong>Màu sắc:</strong> {product.color}</p>
                <p>Sản phẩm được làm từ chất liệu cao cấp, an toàn tuyệt đối cho trẻ em. 
                   Thiết kế đáng yêu, màu sắc tươi sáng, phù hợp làm quà tặng cho mọi lứa tuổi.</p>
              </div>
            )}

            {activeTab === 'care' && (
              <div>
                <h3>Hướng dẫn bảo quản</h3>
                <div className="care-instructions">
                  <p><strong>Cách giặt:</strong> {product.care}</p>
                  <p><strong>Bảo quản:</strong> Để nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp</p>
                  <p><strong>Lưu ý:</strong> Không sử dụng chất tẩy mạnh, không vắt mạnh</p>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="reviews-section">
                <h3>Đánh giá từ khách hàng</h3>
                <div className="review-card">
                  <div className="review-header">
                    <div className="reviewer-info">
                      <div className="reviewer-avatar">N</div>
                      <div>
                        <div className="reviewer-name">Nguyễn Văn A</div>
                        <div className="review-date">2 ngày trước</div>
                      </div>
                    </div>
                    <div className="review-rating">
                      {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                    </div>
                  </div>
                  <p className="review-text">
                    Sản phẩm rất đẹp và chất lượng tốt. Gấu bông mềm mại, an toàn cho bé. 
                    Shop giao hàng nhanh, đóng gói cẩn thận. Rất hài lòng!
                  </p>
                </div>

                <div className="review-card">
                  <div className="review-header">
                    <div className="reviewer-info">
                      <div className="reviewer-avatar">T</div>
                      <div>
                        <div className="reviewer-name">Trần Thị B</div>
                        <div className="review-date">5 ngày trước</div>
                      </div>
                    </div>
                    <div className="review-rating">
                      {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                    </div>
                  </div>
                  <p className="review-text">
                    Mua làm quà tặng sinh nhật, bạn rất thích. Chất lượng tốt, giá cả hợp lý.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="related-products">
            <h2>Sản phẩm liên quan</h2>
            <div className="related-products-grid">
              {relatedProducts.map(p => (
                <div 
                  key={p.id}
                  className="product-card"
                  onClick={() => navigate(`/product/${p.id}`)}
                >
                  <div className="product-image-wrapper">
                    <img src={p.image} alt={p.name} className="product-image" />
                  </div>
                  <div className="product-info">
                    <h3 className="product-name">{p.name}</h3>
                    <div className="product-rating">
                      <span className="stars">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} style={{ opacity: i < Math.floor(p.rating) ? 1 : 0.3 }} />
                        ))}
                      </span>
                    </div>
                    <div className="product-price">
                      <span className="current-price">{p.price.toLocaleString('vi-VN')}đ</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
