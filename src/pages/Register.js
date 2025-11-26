import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock, FaPhone, FaGoogle, FaFacebook } from 'react-icons/fa';
import './Auth.css';

const Register = ({ setUser }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Mật khẩu không khớp!');
      return;
    }
    setUser({ name: formData.name, email: formData.email });
    navigate('/');
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <h1>Đăng Ký</h1>
            <p>Tạo tài khoản mới để bắt đầu mua sắm</p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label>Họ và tên</label>
              <div className="input-with-icon">
                <FaUser className="input-icon" />
                <input
                  type="text"
                  placeholder="Nguyễn Văn A"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Email</label>
              <div className="input-with-icon">
                <FaEnvelope className="input-icon" />
                <input
                  type="email"
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Số điện thoại</label>
              <div className="input-with-icon">
                <FaPhone className="input-icon" />
                <input
                  type="tel"
                  placeholder="0123456789"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Mật khẩu</label>
              <div className="input-with-icon">
                <FaLock className="input-icon" />
                <input
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Xác nhận mật khẩu</label>
              <div className="input-with-icon">
                <FaLock className="input-icon" />
                <input
                  type="password"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                  required
                />
              </div>
            </div>

            <label className="checkbox-label">
              <input type="checkbox" required />
              <span>Tôi đồng ý với <Link to="/terms">Điều khoản dịch vụ</Link> và <Link to="/privacy">Chính sách bảo mật</Link></span>
            </label>

            <button type="submit" className="btn-auth-primary">
              Đăng ký
            </button>
          </form>

          <div className="auth-divider">
            <span>Hoặc đăng ký với</span>
          </div>

          <div className="social-login">
            <button className="btn-social google">
              <FaGoogle /> Google
            </button>
            <button className="btn-social facebook">
              <FaFacebook /> Facebook
            </button>
          </div>

          <div className="auth-footer">
            Đã có tài khoản? <Link to="/login">Đăng nhập</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
