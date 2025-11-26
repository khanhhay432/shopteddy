import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">
              <span className="logo-icon">🧸</span>
              Teddy Shop
            </h3>
            <p className="footer-description">
              Cửa hàng thú nhồi bông uy tín hàng đầu Việt Nam. 
              Chất lượng cao, giá cả hợp lý, giao hàng toàn quốc.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
                <FaInstagram />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="social-icon tiktok">
                <FaTiktok />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon youtube">
                <FaYoutube />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Về chúng tôi</h4>
            <ul>
              <li><Link to="/about">Giới thiệu</Link></li>
              <li><Link to="/products">Sản phẩm</Link></li>
              <li><Link to="/contact">Liên hệ</Link></li>
              <li><Link to="/faq">Câu hỏi thường gặp</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Chính sách</h4>
            <ul>
              <li><a href="#policy">Chính sách đổi trả</a></li>
              <li><a href="#policy">Chính sách bảo mật</a></li>
              <li><a href="#policy">Điều khoản dịch vụ</a></li>
              <li><a href="#policy">Hướng dẫn mua hàng</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Liên hệ</h4>
            <ul className="contact-info">
              <li>
                <FaMapMarkerAlt />
                <span>123 Đường ABC, Quận 1, TP.HCM</span>
              </li>
              <li>
                <FaPhone />
                <span>0123 456 789</span>
              </li>
              <li>
                <FaEnvelope />
                <span>contact@teddyshop.vn</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Teddy Shop. All rights reserved.</p>
          <p>Made with ❤️ in Vietnam</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
