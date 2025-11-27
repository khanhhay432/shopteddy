# 🧸 Teddy Shop - Website Bán Thú Nhồi Bông

Website thương mại điện tử hiện đại và đẹp mắt chuyên bán thú nhồi bông với đầy đủ tính năng.

## ✨ Tính năng chính

### 1. Giao diện người dùng (UI/UX)
- ✅ **Trang chủ**: Banner đẹp, sản phẩm nổi bật, khuyến mãi
- ✅ **Menu điều hướng**: Dễ sử dụng, responsive
- ✅ **Trang sản phẩm**: Bộ lọc và sắp xếp đa dạng
- ✅ **Chi tiết sản phẩm**: Hình ảnh zoom, mô tả chi tiết, đánh giá
- ✅ **Hiệu ứng**: Animations mượt mà, transitions đẹp mắt

### 2. Giỏ hàng & Thanh toán
- ✅ **Giỏ hàng**: Quản lý sản phẩm, cập nhật số lượng
- ✅ **Thanh toán**: Nhiều phương thức (COD, Banking, MoMo, ZaloPay)
- ✅ **Xác nhận đơn hàng**: Thông báo thành công

### 3. Tài khoản khách hàng
- ✅ **Đăng ký/Đăng nhập**: Form đẹp với social login
- ✅ **Trang cá nhân**: Quản lý thông tin, đơn hàng
- ✅ **Lịch sử mua hàng**: Theo dõi trạng thái đơn

### 4. Hỗ trợ khách hàng
- ✅ **Chat widget**: Hỗ trợ trực tuyến
- ✅ **Trang liên hệ**: Form liên hệ, bản đồ
- ✅ **FAQ**: Câu hỏi thường gặp
- ✅ **Về chúng tôi**: Giới thiệu công ty

### 5. Tối ưu hóa
- ✅ **Responsive**: Hoạt động tốt trên mọi thiết bị
- ✅ **Performance**: Tải trang nhanh
- ✅ **SEO friendly**: Cấu trúc tốt cho SEO
- ✅ **Accessibility**: Thân thiện với người dùng

## 🚀 Cài đặt

### Yêu cầu
- Node.js (v14 trở lên)
- npm hoặc yarn

### Các bước cài đặt

1. Clone repository hoặc giải nén source code

2. Cài đặt dependencies:
```bash
npm install
```

3. Chạy ứng dụng ở chế độ development:
```bash
npm start
```

4. Mở trình duyệt và truy cập:
```
http://localhost:3000
```

## 📦 Build cho production

```bash
npm run build
```

File build sẽ được tạo trong thư mục `build/`

## 🎨 Công nghệ sử dụng

- **React 19.2.0**: Framework chính
- **React Router DOM 7.9.6**: Điều hướng
- **React Icons 5.5.0**: Icon library
- **Framer Motion 12.23.24**: Animation library
- **CSS3**: Styling với animations và transitions

## 📁 Cấu trúc thư mục

```
src/
├── components/          # Các component tái sử dụng
│   ├── Navbar.js       # Thanh điều hướng
│   ├── Footer.js       # Footer
│   └── ChatWidget.js   # Widget chat
├── pages/              # Các trang chính
│   ├── Home.js         # Trang chủ
│   ├── Products.js     # Danh sách sản phẩm
│   ├── ProductDetail.js # Chi tiết sản phẩm
│   ├── Cart.js         # Giỏ hàng
│   ├── Checkout.js     # Thanh toán
│   ├── Login.js        # Đăng nhập
│   ├── Register.js     # Đăng ký
│   ├── Profile.js      # Trang cá nhân
│   ├── Contact.js      # Liên hệ
│   ├── About.js        # Về chúng tôi
│   └── FAQ.js          # Câu hỏi thường gặp
├── data/               # Dữ liệu
│   └── products.js     # Dữ liệu sản phẩm
├── App.js              # Component chính
├── App.css             # Styles chính
└── index.js            # Entry point
```

## 🎯 Các trang chính

1. **Trang chủ** (`/`): Banner, sản phẩm nổi bật, tính năng
2. **Sản phẩm** (`/products`): Danh sách sản phẩm với bộ lọc
3. **Chi tiết sản phẩm** (`/product/:id`): Thông tin chi tiết
4. **Giỏ hàng** (`/cart`): Quản lý giỏ hàng
5. **Thanh toán** (`/checkout`): Xử lý đơn hàng
6. **Đăng nhập** (`/login`): Đăng nhập tài khoản
7. **Đăng ký** (`/register`): Tạo tài khoản mới
8. **Trang cá nhân** (`/profile`): Quản lý tài khoản
9. **Liên hệ** (`/contact`): Form liên hệ
10. **Về chúng tôi** (`/about`): Giới thiệu
11. **FAQ** (`/faq`): Câu hỏi thường gặp

## 🎨 Tính năng giao diện

### Hiệu ứng & Animations
- Smooth scrolling
- Hover effects
- Fade in/out animations
- Slide animations
- Loading states
- Transitions mượt mà

### Responsive Design
- Mobile-first approach
- Breakpoints: 576px, 768px, 968px, 1200px
- Touch-friendly trên mobile
- Adaptive layouts

### Color Scheme
- Primary: #ff6b9d (Pink)
- Secondary: #c06c84 (Rose)
- Accent: #667eea (Purple)
- Background: #fafafa (Light Gray)

## 🔧 Tùy chỉnh

### Thay đổi màu sắc
Chỉnh sửa các biến màu trong file CSS:
```css
/* Primary gradient */
background: linear-gradient(135deg, #ff6b9d 0%, #c06c84 100%);
```

### Thêm sản phẩm
Chỉnh sửa file `src/data/products.js`:
```javascript
{
  id: 9,
  name: "Tên sản phẩm",
  price: 300000,
  image: "URL hình ảnh",
  // ... các thuộc tính khác
}
```

## 📱 Responsive Breakpoints

- **Mobile**: < 576px
- **Tablet**: 576px - 968px
- **Desktop**: > 968px
- **Large Desktop**: > 1200px

## 🌟 Highlights

- ✨ Giao diện hiện đại, đẹp mắt
- 🎨 Nhiều hiệu ứng và animations
- 📱 Responsive hoàn hảo
- 🚀 Performance tối ưu
- 💝 UX thân thiện
- 🛒 Đầy đủ tính năng e-commerce

## 📝 Lưu ý

- Đây là phiên bản frontend only (không có backend)
- Dữ liệu sản phẩm được lưu trong file JavaScript
- Các tính năng thanh toán chỉ là demo UI
- Để sử dụng thực tế cần tích hợp backend API

## 🤝 Đóng góp

Mọi đóng góp đều được chào đón! Vui lòng tạo pull request hoặc issue.

## 📄 License

MIT License - Tự do sử dụng cho mục đích cá nhân và thương mại.

## 👨‍💻 Tác giả

Teddy Shop Team

---

**Made with ❤️ in Vietnam**

