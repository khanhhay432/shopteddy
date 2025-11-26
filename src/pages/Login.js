import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaGoogle, FaFacebook } from 'react-icons/fa';
import './Auth.css';

const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ name: 'Người dùng', email: formData.email });
    navigate('/');
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <h1>Đăng Nhập</h1>
            <p>Chào mừng bạn trở lại!</p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
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

            <div className="form-options">
              <label className="checkbox-label">
                <input type="checkbox" />
                <span>Ghi nhớ đăng nhập</span>
              </label>
              <Link to="/forgot-password" className="forgot-link">Quên mật khẩu?</Link>
            </div>

            <button type="submit" className="btn-auth-primary">
              Đăng nhập
            </button>
          </form>

          <div className="auth-divider">
            <span>Hoặc đăng nhập với</span>
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
            Chưa có tài khoản? <Link to="/register">Đăng ký ngay</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
