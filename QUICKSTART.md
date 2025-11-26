# 🚀 Hướng Dẫn Chạy Nhanh

## Bước 1: Cài đặt Dependencies

Mở terminal/command prompt tại thư mục dự án và chạy:

```bash
npm install
```

Hoặc nếu bạn dùng yarn:

```bash
yarn install
```

## Bước 2: Chạy Ứng Dụng

```bash
npm start
```

Hoặc:

```bash
yarn start
```

## Bước 3: Mở Trình Duyệt

Ứng dụng sẽ tự động mở tại:
```
http://localhost:3000
```

Nếu không tự động mở, hãy mở trình duyệt và truy cập địa chỉ trên.

## 🎉 Xong!

Website đã sẵn sàng sử dụng với đầy đủ tính năng:

### Các trang có thể truy cập:
- **Trang chủ**: http://localhost:3000/
- **Sản phẩm**: http://localhost:3000/products
- **Giỏ hàng**: http://localhost:3000/cart
- **Đăng nhập**: http://localhost:3000/login
- **Đăng ký**: http://localhost:3000/register
- **Liên hệ**: http://localhost:3000/contact
- **Về chúng tôi**: http://localhost:3000/about
- **FAQ**: http://localhost:3000/faq

### Tính năng có thể thử:
1. ✅ Xem danh sách sản phẩm
2. ✅ Lọc và sắp xếp sản phẩm
3. ✅ Xem chi tiết sản phẩm
4. ✅ Thêm vào giỏ hàng
5. ✅ Quản lý giỏ hàng
6. ✅ Thanh toán (demo)
7. ✅ Đăng ký/Đăng nhập (demo)
8. ✅ Chat widget
9. ✅ Tìm kiếm sản phẩm

## 🛠️ Lỗi thường gặp

### Lỗi: "npm not found"
- Cài đặt Node.js từ: https://nodejs.org/

### Lỗi: Port 3000 đã được sử dụng
- Đóng ứng dụng đang chạy trên port 3000
- Hoặc chạy trên port khác: `PORT=3001 npm start`

### Lỗi: Dependencies không cài được
- Xóa folder `node_modules` và file `package-lock.json`
- Chạy lại `npm install`

## 📝 Ghi chú

- Đây là phiên bản frontend only (không có backend thật)
- Dữ liệu sản phẩm được lưu trong file JavaScript
- Tính năng đăng nhập/thanh toán chỉ là demo UI
- Tất cả dữ liệu sẽ mất khi refresh trang

## 🎨 Tùy chỉnh

Để thay đổi sản phẩm, chỉnh sửa file:
```
src/data/products.js
```

Để thay đổi màu sắc, chỉnh sửa các file CSS trong:
```
src/components/*.css
src/pages/*.css
```

## 💡 Tips

- Mở DevTools (F12) để xem responsive design
- Thử các breakpoint: Mobile (375px), Tablet (768px), Desktop (1200px)
- Tất cả animations và transitions đều mượt mà
- Website hoạt động tốt trên mọi trình duyệt hiện đại

---

**Chúc bạn sử dụng vui vẻ! 🎉**
