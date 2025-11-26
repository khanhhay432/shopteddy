import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaSearch, FaBars, FaTimes, FaHeart } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ cartItems, user, setUser }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cartItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${searchQuery}`);
      setSearchQuery('');
    }
  };

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">🧸</span>
          <span className="logo-text">Teddy Shop</span>
        </Link>

        <form className="navbar-search" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Tìm kiếm thú bông..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">
            <FaSearch />
          </button>
        </form>

        <ul className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Trang chủ</Link></li>
          <li><Link to="/products" onClick={() => setIsMobileMenuOpen(false)}>Sản phẩm</Link></li>
          <li><Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>Về chúng tôi</Link></li>
          <li><Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Liên hệ</Link></li>
          <li><Link to="/faq" onClick={() => setIsMobileMenuOpen(false)}>FAQ</Link></li>
        </ul>

        <div className="navbar-actions">
          <Link to="/cart" className="navbar-icon cart-icon">
            <FaShoppingCart />
            {cartItemsCount > 0 && <span className="badge">{cartItemsCount}</span>}
          </Link>
          
          <button className="navbar-icon wishlist-icon">
            <FaHeart />
          </button>

          {user ? (
            <div className="user-menu">
              <Link to="/profile" className="navbar-icon user-icon">
                <FaUser />
              </Link>
              <div className="user-dropdown">
                <Link to="/profile">Tài khoản</Link>
                <button onClick={handleLogout}>Đăng xuất</button>
              </div>
            </div>
          ) : (
            <Link to="/login" className="navbar-icon user-icon">
              <FaUser />
            </Link>
          )}

          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
