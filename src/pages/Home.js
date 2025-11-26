import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaStar, FaHeart, FaShippingFast, FaShieldAlt, FaHeadset, FaGift } from 'react-icons/fa';
import { products } from '../data/products';
import './Home.css';

const Home = ({ addToCart }) => {
  const navigate = useNavigate();
  const featuredProducts = products ? products.filter(p => p.isBestSeller).slice(0, 4) : [];

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div className="home">
      <section className="hero-section">
        <div className="floating-elements">
          <span className="floating-icon">🧸</span>
          <span className="floating-icon">🐰</span>
          <span className="floating-icon">🐻</span>
          <span className="floating-icon">🦄</span>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <h1>Thú Nhồi Bông Đáng Yêu Cho Mọi Lứa Tuổi</h1>
            <p>Khám phá bộ sưu tập thú bông cao cấp, an toàn và siêu mềm mại. Giao hàng toàn quốc, ưu đãi hấp dẫn!</p>
            <div className="hero-buttons">
              <Link to="/products" className="btn-primary">Mua sắm ngay</Link>
              <Link to="/about" className="btn-secondary">Tìm hiểu thêm</Link>
            </div>
          </div>
          <div className="hero-image">
            <img src="https://images.unsplash.com/photo-1558679908-541bcf1249ff?w=500" alt="Teddy Bear" />
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2 className="section-title">Tại Sao Chọn Chúng Tôi?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🚚</div>
            <h3>Giao Hàng Nhanh</h3>
            <p>Giao hàng toàn quốc trong 2-3 ngày. Miễn phí ship cho đơn từ 500k</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🛡️</div>
            <h3>Chất Lượng Đảm Bảo</h3>
            <p>Sản phẩm chính hãng, an toàn tuyệt đối cho trẻ em</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💝</div>
            <h3>Quà Tặng Miễn Phí</h3>
            <p>Đóng gói quà đẹp miễn phí, kèm thiệp chúc mừng</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎧</div>
            <h3>Hỗ Trợ 24/7</h3>
            <p>Đội ngũ tư vấn nhiệt tình, sẵn sàng hỗ trợ mọi lúc</p>
          </div>
        </div>
      </section>

      <section className="products-section">
        <div className="products-header">
          <h2 className="section-title">Sản Phẩm Bán Chạy</h2>
          <Link to="/products" className="btn-secondary">Xem tất cả</Link>
        </div>
        <div className="products-grid">
          {featuredProducts.map(product => (
            <div 
              key={product.id} 
              className="product-card"
              onClick={() => handleProductClick(product.id)}
            >
              <div className="product-badges">
                {product.isNew && <span className="badge new">Mới</span>}
                {product.originalPrice > product.price && (
                  <span className="badge sale">
                    -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                  </span>
                )}
                {product.isBestSeller && <span className="badge bestseller">Bán chạy</span>}
              </div>
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <div className="product-rating">
                  <span className="stars">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} style={{ opacity: i < Math.floor(product.rating) ? 1 : 0.3 }} />
                    ))}
                  </span>
                  <span>({product.reviews})</span>
                </div>
                <div className="product-price">
                  <span className="current-price">{product.price.toLocaleString('vi-VN')}đ</span>
                  {product.originalPrice > product.price && (
                    <span className="original-price">{product.originalPrice.toLocaleString('vi-VN')}đ</span>
                  )}
                </div>
                <div className="product-actions">
                  <button 
                    className="btn-add-cart"
                    onClick={(e) => handleAddToCart(e, product)}
                  >
                    Thêm vào giỏ
                  </button>
                  <button className="btn-wishlist">
                    <FaHeart />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="promo-section">
        <div className="promo-content">
          <h2>Đăng Ký Nhận Ưu Đãi</h2>
          <p>Nhận ngay mã giảm giá 15% cho đơn hàng đầu tiên và cập nhật sản phẩm mới nhất!</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Nhập email của bạn..." />
            <button type="submit">Đăng ký</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
