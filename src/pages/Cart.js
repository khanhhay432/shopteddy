import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaTrash, FaShoppingBag, FaTruck, FaShieldAlt, FaUndo } from 'react-icons/fa';
import './Cart.css';

const Cart = ({ cartItems, updateQuantity, removeFromCart }) => {
  const navigate = useNavigate();

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 500000 ? 0 : 30000;
  const total = subtotal + shipping;

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      navigate('/checkout');
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="cart-container">
          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>
            <h2>Giỏ hàng trống</h2>
            <p>Bạn chưa có sản phẩm nào trong giỏ hàng</p>
            <Link to="/products" className="btn-shop-now">
              Mua sắm ngay
            </Link>
          </div>

          <div className="cart-features">
            <div className="cart-feature">
              <div className="cart-feature-icon">🚚</div>
              <h3>Giao hàng nhanh</h3>
              <p>Miễn phí ship đơn từ 500k</p>
            </div>
            <div className="cart-feature">
              <div className="cart-feature-icon">🛡️</div>
              <h3>Thanh toán an toàn</h3>
              <p>Bảo mật thông tin 100%</p>
            </div>
            <div className="cart-feature">
              <div className="cart-feature-icon">↩️</div>
              <h3>Đổi trả dễ dàng</h3>
              <p>Trong vòng 7 ngày</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-container">
        <div className="cart-header">
          <h1>Giỏ Hàng Của Bạn</h1>
          <p>Bạn có {cartItems.length} sản phẩm trong giỏ hàng</p>
        </div>

        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="cart-item-image"
                  onClick={() => navigate(`/product/${item.id}`)}
                />

                <div className="cart-item-info">
                  <h3 
                    className="cart-item-name"
                    onClick={() => navigate(`/product/${item.id}`)}
                  >
                    {item.name}
                  </h3>
                  <div className="cart-item-meta">
                    <span>📏 {item.size}</span>
                    <span>🎨 {item.color}</span>
                  </div>
                  <div className="cart-item-controls">
                    <div className="quantity-control">
                      <button 
                        className="quantity-btn-small"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        -
                      </button>
                      <span className="quantity-value">{item.quantity}</span>
                      <button 
                        className="quantity-btn-small"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    <button 
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>

                <div className="cart-item-price-section">
                  <div className="cart-item-price">
                    {(item.price * item.quantity).toLocaleString('vi-VN')}đ
                  </div>
                  {item.originalPrice > item.price && (
                    <div className="cart-item-original-price">
                      {(item.originalPrice * item.quantity).toLocaleString('vi-VN')}đ
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Tổng đơn hàng</h2>
            
            <div className="summary-row">
              <span>Tạm tính:</span>
              <span>{subtotal.toLocaleString('vi-VN')}đ</span>
            </div>
            
            <div className="summary-row">
              <span>Phí vận chuyển:</span>
              <span>{shipping === 0 ? 'Miễn phí' : `${shipping.toLocaleString('vi-VN')}đ`}</span>
            </div>

            {subtotal < 500000 && (
              <div className="summary-row" style={{ color: '#ff6b9d', fontSize: '0.9rem' }}>
                <span>Mua thêm {(500000 - subtotal).toLocaleString('vi-VN')}đ để được freeship!</span>
              </div>
            )}

            <div className="discount-code">
              <h3>Mã giảm giá</h3>
              <div className="discount-input">
                <input type="text" placeholder="Nhập mã giảm giá" />
                <button>Áp dụng</button>
              </div>
            </div>

            <div className="summary-row total">
              <span>Tổng cộng:</span>
              <span className="amount">{total.toLocaleString('vi-VN')}đ</span>
            </div>

            <button className="checkout-btn" onClick={handleCheckout}>
              <FaShoppingBag /> Thanh toán
            </button>

            <Link to="/products">
              <button className="continue-shopping">
                Tiếp tục mua sắm
              </button>
            </Link>
          </div>
        </div>

        <div className="cart-features">
          <div className="cart-feature">
            <div className="cart-feature-icon">🚚</div>
            <h3>Giao hàng nhanh</h3>
            <p>Miễn phí ship đơn từ 500k</p>
          </div>
          <div className="cart-feature">
            <div className="cart-feature-icon">🛡️</div>
            <h3>Thanh toán an toàn</h3>
            <p>Bảo mật thông tin 100%</p>
          </div>
          <div className="cart-feature">
            <div className="cart-feature-icon">↩️</div>
            <h3>Đổi trả dễ dàng</h3>
            <p>Trong vòng 7 ngày</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
