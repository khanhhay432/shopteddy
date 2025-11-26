import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <h1>Liên Hệ Với Chúng Tôi</h1>
        <p>Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn</p>
      </div>

      <div className="contact-container">
        <div className="contact-info-cards">
          <div className="info-card">
            <div className="info-icon">📞</div>
            <h3>Điện thoại</h3>
            <p>0123 456 789</p>
            <p>0987 654 321</p>
          </div>

          <div className="info-card">
            <div className="info-icon">✉️</div>
            <h3>Email</h3>
            <p>contact@teddyshop.vn</p>
            <p>support@teddyshop.vn</p>
          </div>

          <div className="info-card">
            <div className="info-icon">📍</div>
            <h3>Địa chỉ</h3>
            <p>123 Đường ABC</p>
            <p>Quận 1, TP.HCM</p>
          </div>

          <div className="info-card">
            <div className="info-icon">🕐</div>
            <h3>Giờ làm việc</h3>
            <p>T2 - T7: 8:00 - 22:00</p>
            <p>CN: 9:00 - 21:00</p>
          </div>
        </div>

        <div className="contact-content">
          <div className="contact-form-section">
            <h2>Gửi tin nhắn cho chúng tôi</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Họ và tên *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    placeholder="Nguyễn Văn A"
                  />
                </div>
                <div className="form-group">
                  <label>Email *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Số điện thoại</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="0123456789"
                  />
                </div>
                <div className="form-group">
                  <label>Chủ đề *</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    required
                  >
                    <option value="">Chọn chủ đề</option>
                    <option value="product">Hỏi về sản phẩm</option>
                    <option value="order">Đơn hàng</option>
                    <option value="complaint">Khiếu nại</option>
                    <option value="other">Khác</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Nội dung *</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  placeholder="Nhập nội dung tin nhắn..."
                  rows="6"
                />
              </div>

              <button type="submit" className="btn-submit">Gửi tin nhắn</button>
            </form>
          </div>

          <div className="contact-map">
            <h2>Vị trí cửa hàng</h2>
            <div className="map-placeholder">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4967!2d106.6!3d10.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQyJzAwLjAiTiAxMDbCsDM2JzAwLjAiRQ!5e0!3m2!1svi!2s!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: '15px' }}
                allowFullScreen=""
                loading="lazy"
                title="Store Location"
              ></iframe>
            </div>

            <div className="social-connect">
              <h3>Kết nối với chúng tôi</h3>
              <div className="social-buttons">
                <a href="https://facebook.com" className="social-btn facebook">
                  <FaFacebook /> Facebook
                </a>
                <a href="https://instagram.com" className="social-btn instagram">
                  <FaInstagram /> Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
