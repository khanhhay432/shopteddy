import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { FaStar, FaHeart, FaEye, FaShoppingCart, FaTh, FaList, FaFilter } from 'react-icons/fa';
import { products, categories, sizes, colors } from '../data/products';
import './Products.css';

const Products = ({ addToCart }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products || []);
  const [viewMode, setViewMode] = useState('grid');
  
  const [filters, setFilters] = useState({
    category: 'all',
    size: 'all',
    color: 'all',
    priceMin: '',
    priceMax: '',
    inStock: false,
    isNew: false,
    isBestSeller: false
  });

  const [sortBy, setSortBy] = useState('default');

  useEffect(() => {
    const searchQuery = searchParams.get('search');
    let filtered = products ? [...products] : [];

    if (searchQuery) {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (filters.category !== 'all') {
      filtered = filtered.filter(p => p.category === filters.category);
    }

    if (filters.size !== 'all') {
      filtered = filtered.filter(p => p.size === filters.size);
    }

    if (filters.color !== 'all') {
      filtered = filtered.filter(p => p.color === filters.color);
    }

    if (filters.priceMin) {
      filtered = filtered.filter(p => p.price >= parseInt(filters.priceMin));
    }

    if (filters.priceMax) {
      filtered = filtered.filter(p => p.price <= parseInt(filters.priceMax));
    }

    if (filters.inStock) {
      filtered = filtered.filter(p => p.stock > 0);
    }

    if (filters.isNew) {
      filtered = filtered.filter(p => p.isNew);
    }

    if (filters.isBestSeller) {
      filtered = filtered.filter(p => p.isBestSeller);
    }

    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => b.isNew - a.isNew);
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
  }, [filters, sortBy, searchParams]);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      category: 'all',
      size: 'all',
      color: 'all',
      priceMin: '',
      priceMax: '',
      inStock: false,
      isNew: false,
      isBestSeller: false
    });
    setSortBy('default');
  };

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div className="products-page">
      <div className="products-container">
        <div className="products-page-header">
          <h1>Bộ Sưu Tập Thú Nhồi Bông</h1>
          <p>Khám phá hàng trăm mẫu thú bông đáng yêu với chất lượng cao cấp</p>
        </div>

        <div className="products-layout">
          <aside className="filters-sidebar">
            <div className="filter-section">
              <h3><FaFilter /> Bộ lọc</h3>
            </div>

            <div className="filter-section">
              <h3>Danh mục</h3>
              <div className="filter-options">
                {categories.map(cat => (
                  <div key={cat.id} className="filter-option">
                    <input
                      type="radio"
                      id={`cat-${cat.id}`}
                      name="category"
                      checked={filters.category === cat.value}
                      onChange={() => handleFilterChange('category', cat.value)}
                    />
                    <label htmlFor={`cat-${cat.id}`}>{cat.name}</label>
                  </div>
                ))}
              </div>
            </div>

            <div className="filter-section">
              <h3>Kích thước</h3>
              <div className="filter-options">
                {sizes.map(size => (
                  <div key={size.id} className="filter-option">
                    <input
                      type="radio"
                      id={`size-${size.id}`}
                      name="size"
                      checked={filters.size === size.value}
                      onChange={() => handleFilterChange('size', size.value)}
                    />
                    <label htmlFor={`size-${size.id}`}>{size.name}</label>
                  </div>
                ))}
              </div>
            </div>

            <div className="filter-section">
              <h3>Màu sắc</h3>
              <div className="filter-options">
                {colors.map(color => (
                  <div key={color.id} className="filter-option">
                    <input
                      type="radio"
                      id={`color-${color.id}`}
                      name="color"
                      checked={filters.color === color.value}
                      onChange={() => handleFilterChange('color', color.value)}
                    />
                    <label htmlFor={`color-${color.id}`}>{color.name}</label>
                  </div>
                ))}
              </div>
            </div>

            <div className="filter-section">
              <h3>Khoảng giá</h3>
              <div className="price-range">
                <input
                  type="number"
                  placeholder="Từ"
                  className="price-input"
                  value={filters.priceMin}
                  onChange={(e) => handleFilterChange('priceMin', e.target.value)}
                />
                <span>-</span>
                <input
                  type="number"
                  placeholder="Đến"
                  className="price-input"
                  value={filters.priceMax}
                  onChange={(e) => handleFilterChange('priceMax', e.target.value)}
                />
              </div>
            </div>

            <div className="filter-section">
              <h3>Khác</h3>
              <div className="filter-options">
                <div className="filter-option">
                  <input
                    type="checkbox"
                    id="inStock"
                    checked={filters.inStock}
                    onChange={(e) => handleFilterChange('inStock', e.target.checked)}
                  />
                  <label htmlFor="inStock">Còn hàng</label>
                </div>
                <div className="filter-option">
                  <input
                    type="checkbox"
                    id="isNew"
                    checked={filters.isNew}
                    onChange={(e) => handleFilterChange('isNew', e.target.checked)}
                  />
                  <label htmlFor="isNew">Sản phẩm mới</label>
                </div>
                <div className="filter-option">
                  <input
                    type="checkbox"
                    id="isBestSeller"
                    checked={filters.isBestSeller}
                    onChange={(e) => handleFilterChange('isBestSeller', e.target.checked)}
                  />
                  <label htmlFor="isBestSeller">Bán chạy</label>
                </div>
              </div>
            </div>

            <div className="filter-buttons">
              <button className="btn-clear-filter" onClick={clearFilters}>
                Xóa bộ lọc
              </button>
            </div>
          </aside>

          <div className="products-main">
            <div className="products-toolbar">
              <div className="products-count">
                Hiển thị <strong>{filteredProducts.length}</strong> sản phẩm
              </div>

              <div className="sort-options">
                <label>Sắp xếp:</label>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                  <option value="default">Mặc định</option>
                  <option value="newest">Mới nhất</option>
                  <option value="price-asc">Giá: Thấp đến cao</option>
                  <option value="price-desc">Giá: Cao đến thấp</option>
                  <option value="name">Tên A-Z</option>
                  <option value="rating">Đánh giá cao nhất</option>
                </select>
              </div>

              <div className="view-toggle">
                <button 
                  className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                  onClick={() => setViewMode('grid')}
                >
                  <FaTh />
                </button>
                <button 
                  className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                  onClick={() => setViewMode('list')}
                >
                  <FaList />
                </button>
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className={`products-grid ${viewMode === 'list' ? 'list-view' : ''}`}>
                {filteredProducts.map(product => (
                  <div 
                    key={product.id} 
                    className="product-card"
                    onClick={() => handleProductClick(product.id)}
                  >
                    <div className="product-image-wrapper">
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
                    </div>
                    
                    <div className="product-info">
                      <div className="product-category">{product.category}</div>
                      <h3 className="product-name">{product.name}</h3>
                      <p className="product-description">{product.description}</p>
                      
                      <div className="product-rating">
                        <span className="stars">
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} style={{ opacity: i < Math.floor(product.rating) ? 1 : 0.3 }} />
                          ))}
                        </span>
                        <span>({product.reviews})</span>
                      </div>

                      <div className="product-meta">
                        <span>📏 {product.size}</span>
                        <span>🎨 {product.color}</span>
                        <span>📦 Còn {product.stock}</span>
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
                          <FaShoppingCart /> Thêm vào giỏ
                        </button>
                        <button className="btn-wishlist" onClick={(e) => e.stopPropagation()}>
                          <FaHeart />
                        </button>
                        <button className="btn-quick-view" onClick={(e) => e.stopPropagation()}>
                          <FaEye />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-products">
                <div className="no-products-icon">🔍</div>
                <h3>Không tìm thấy sản phẩm</h3>
                <p>Vui lòng thử lại với bộ lọc khác</p>
                <button className="btn-primary" onClick={clearFilters}>
                  Xóa bộ lọc
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
