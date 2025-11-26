import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaShoppingBag, FaHeart, FaCog, FaSignOutAlt } from 'react-icons/fa';
import './Profile.css';

const Profile = ({ user, setUser }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('info');

  if (!user) {
    navigate('/login');
    return null;
  }

  const orders = [
    { id: 'TD12345678', date: '2024-01-15', total: 850000, status: 'Đã giao', items: 2 },
    { id: 'TD12345679', date: '2024-01-10', total: 450000, status: 'Đang giao', items: 1 },
    { id: 'TD12345680', date: '2024-01-05', total: 1200000, status: 'Đã giao', items: 3 }
  ];

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-sidebar">
          <div className="profile-avatar">
            <div className="avatar-circle">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>

          <nav className="profile-nav">
            <button 
              className={`nav-item ${activeTab === 'info' ? 'active' : ''}`}
              onClick={() => setActiveTab('info')}
            >
              <FaUser /> Thông tin cá nhân
            </button>
            <button 
              className={`nav-item ${activeTab === 'orders' ? 'active' : ''}`}
              onClick={() => setActiveTab('orders')}
            >
              <FaShoppingBag /> Đơn hàng của tôi
            </button>
            <button 
              className={`nav-item ${activeTab === 'wishlist' ? 'active' : ''}`}
              onClick={() => setActiveTab('wishlist')}
            >
              <FaHeart /> Yêu thích
            </button>
            <button 
              className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`}
              onClick={() => setActiveTab('settings')}
            >
              <FaCog /> Cài đặt
            </button>
            <button className="nav-item logout" onClick={handleLogout}>
              <FaSignOutAlt /> Đăng xuất
            </button>
          </nav>
        </div>

        <div className="profile-content">
          {activeTab === 'info' && (
            <div className="content-section">
              <h2>Thông tin cá nhân</h2>
              <form className="profile-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Họ và tên</label>
                    <input type="text" defaultValue={user.name} />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" defaultValue={user.email} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Số điện thoại</label>
                    <input type="tel" placeholder="0123456789" />
                  </div>
                  <div className="form-group">
                    <label>Ngày sinh</label>
                    <input type="date" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Địa chỉ</label>
                  <input type="text" placeholder="Nhập địa chỉ của bạn" />
                </div>
                <button type="submit" className="btn-save">Lưu thay đổi</button>
              </form>
            </div>
          )}

          {activeTab === 'orders' && (
            <div className="content-section">
              <h2>Đơn hàng của tôi</h2>
              <div className="orders-list">
                {orders.map(order => (
                  <div key={order.id} className="order-card">
                    <div className="order-header">
                      <div>
                        <h4>Đơn hàng #{order.id}</h4>
                        <p className="order-date">Ngày đặt: {order.date}</p>
                      </div>
                      <span className={`order-status ${order.status === 'Đã giao' ? 'delivered' : 'shipping'}`}>
                        {order.status}
                      </span>
                    </div>
                    <div className="order-body">
                      <p>Số lượng: {order.items} sản phẩm</p>
                      <p className="order-total">Tổng tiền: {order.total.toLocaleString('vi-VN')}đ</p>
                    </div>
                    <div className="order-actions">
                      <button className="btn-view">Xem chi tiết</button>
                      {order.status === 'Đã giao' && (
                        <button className="btn-review">Đánh giá</button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'wishlist' && (
            <div className="content-section">
              <h2>Sản phẩm yêu thích</h2>
              <p className="empty-message">Bạn chưa có sản phẩm yêu thích nào</p>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="content-section">
              <h2>Cài đặt tài khoản</h2>
              <div className="settings-section">
                <h3>Đổi mật khẩu</h3>
                <form className="profile-form">
                  <div className="form-group">
                    <label>Mật khẩu hiện tại</label>
                    <input type="password" />
                  </div>
                  <div className="form-group">
                    <label>Mật khẩu mới</label>
                    <input type="password" />
                  </div>
                  <div className="form-group">
                    <label>Xác nhận mật khẩu mới</label>
                    <input type="password" />
                  </div>
                  <button type="submit" className="btn-save">Đổi mật khẩu</button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
