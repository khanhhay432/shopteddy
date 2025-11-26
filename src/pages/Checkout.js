import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaUser, FaCreditCard, FaCheckCircle, FaShieldAlt } from 'react-icons/fa';
import './Checkout.css';

const Checkout = ({ cartItems, clearCart, user }) => {
  const navigate = useNavigate();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');
  
  const [formData, setFormData] = useState({
    fullName: user?.name || '',
    email: user?.email || '',
    phone: '',
    address: '',
    city: '',
    district: '',
    ward: '',
    notes: '',
    paymentMethod: 'cod'
  });

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 500000 ? 0 : 30000;
  const total = subtotal + shipping;

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newOrderNumber = 'TD' + Date.now().toString().slice(-8);
    setOrderNumber(newOrderNumber);
    setOrderPlaced(true);
    clearCart();
  };

  if (cartItems.length === 0 && !orderPlaced) {
    navigate('/cart');
    return null;
  }

  if (orderPlaced) {
    return (
      <div className="checkout-page">
        <div className="checkout-container">
          <div className="order-success">
            <div className="success-icon">✅</div>
            <h2>Đặt Hàng Thành Công!</h2>
            <p>Cảm ơn bạn đã mua sắm tại Teddy Shop</p>
            <div className="order-number">
              Mã đơn hàng: {orderNumber}
            </div>
            <p>Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất để xác nhận đơn hàng.</p>
            <div className="success-actions">
              <Link to="/" className="btn-primary">Về trang chủ</Link>
              <Link to="/products" className="btn-secondary">Tiếp tục mua sắm</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <div className="checkout-header">
          <h1>Thanh Toán</h1>
          <div className="checkout-steps">
            <div className="step active">
              <span className="step-number">1</span>
              <span>Thông tin</span>
            </div>
            <div className="step">
              <span className="step-number">2</span>
              <span>Thanh toán</span>
            </div>
            <div className="step">
              <span className="step-number">3</span>
              <span>Hoàn tất</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="checkout-content">
            <div className="checkout-form">
              <div className="form-section">
                <h2>
                  <FaUser className="form-section-icon" />
                  Thông tin giao hàng
                </h2>
                <div className="form-grid">
                  <div className="form-group full-width">
                    <label>Họ và tên <span className="required">*</span></label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      placeholder="Nguyễn Văn A"
                    />
                  </div>
                  <div className="form-group">
                    <label>Email <span className="required">*</span></label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="email@example.com"
                    />
                  </div>
                  <div className="form-group">
                    <label>Số điện thoại <span className="required">*</span></label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="0123456789"
                    />
                  </div>
                  <div className="form-group full-width">
                    <label>Địa chỉ <span className="required">*</span></label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      placeholder="Số nhà, tên đường"
                    />
                  </div>
                  <div className="form-group">
                    <label>Tỉnh/Thành phố <span className="required">*</span></label>
                    <select
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Chọn Tỉnh/Thành phố</option>
                      <option value="Hồ Chí Minh">TP. Hồ Chí Minh</option>
                      <option value="Hà Nội">Hà Nội</option>
                      <option value="Đà Nẵng">Đà Nẵng</option>
                      <option value="Cần Thơ">Cần Thơ</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Quận/Huyện <span className="required">*</span></label>
                    <input
                      type="text"
                      name="district"
                      value={formData.district}
                      onChange={handleInputChange}
                      required
                      placeholder="Quận/Huyện"
                    />
                  </div>
                  <div className="form-group full-width">
                    <label>Ghi chú đơn hàng</label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      placeholder="Ghi chú về đơn hàng, ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn."
                    />
                  </div>
                </div>
              </div>

              <div className="form-section">
                <h2>
                  <FaCreditCard className="form-section-icon" />
                  Phương thức thanh toán
                </h2>
                <div className="payment-methods">
                  <label className={`payment-option ${formData.paymentMethod === 'cod' ? 'selected' : ''}`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={handleInputChange}
                    />
                    <span className="payment-icon">💵</span>
                    <div className="payment-info">
                      <h4>Thanh toán khi nhận hàng (COD)</h4>
                      <p>Thanh toán bằng tiền mặt khi nhận hàng</p>
                    </div>
                  </label>

                  <label className={`payment-option ${formData.paymentMethod === 'bank' ? 'selected' : ''}`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="bank"
                      checked={formData.paymentMethod === 'bank'}
                      onChange={handleInputChange}
                    />
                    <span className="payment-icon">🏦</span>
                    <div className="payment-info">
                      <h4>Chuyển khoản ngân hàng</h4>
                      <p>Chuyển khoản qua tài khoản ngân hàng</p>
                    </div>
                  </label>

                  <label className={`payment-option ${formData.paymentMethod === 'momo' ? 'selected' : ''}`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="momo"
                      checked={formData.paymentMethod === 'momo'}
                      onChange={handleInputChange}
                    />
                    <span className="payment-icon">📱</span>
                    <div className="payment-info">
                      <h4>Ví MoMo</h4>
                      <p>Thanh toán qua ví điện tử MoMo</p>
                    </div>
                  </label>

                  <label className={`payment-option ${formData.paymentMethod === 'zalopay' ? 'selected' : ''}`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="zalopay"
                      checked={formData.paymentMethod === 'zalopay'}
                      onChange={handleInputChange}
                    />
                    <span className="payment-icon">💳</span>
                    <div className="payment-info">
                      <h4>ZaloPay</h4>
                      <p>Thanh toán qua ví điện tử ZaloPay</p>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            <div className="checkout-summary">
              <h2>Đơn hàng của bạn</h2>
              
              <div className="order-items">
                {cartItems.map(item => (
                  <div key={item.id} className="order-item">
                    <img src={item.image} alt={item.name} className="order-item-image" />
                    <div className="order-item-info">
                      <div className="order-item-name">{item.name}</div>
                      <div className="order-item-meta">
                        Số lượng: {item.quantity} | {item.size}
                      </div>
                      <div className="order-item-price">
                        {(item.price * item.quantity).toLocaleString('vi-VN')}đ
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="summary-divider"></div>

              <div className="summary-row">
                <span>Tạm tính:</span>
                <span>{subtotal.toLocaleString('vi-VN')}đ</span>
              </div>

              <div className="summary-row">
                <span>Phí vận chuyển:</span>
                <span>{shipping === 0 ? 'Miễn phí' : `${shipping.toLocaleString('vi-VN')}đ`}</span>
              </div>

              <div className="summary-row total">
                <span>Tổng cộng:</span>
                <span className="amount">{total.toLocaleString('vi-VN')}đ</span>
              </div>

              <button type="submit" className="place-order-btn">
                <FaCheckCircle /> Đặt hàng
              </button>

              <div className="security-note">
                <FaShieldAlt className="security-icon" />
                <span>Thông tin của bạn được bảo mật 100%</span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
