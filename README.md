# TK Computer Landing Page

Landing page chuẩn conversion rate optimization (CRO) cho **TK Computer - TIVI - LAPTOP - PC - CAMERA**.

## 🚀 Chạy local (Development)

```bash
npm install
npm run dev
```

Website chạy tại: `http://localhost:5173`

## 🐳 Chạy Production bằng Docker

```bash
docker compose up -d --build
```

Website serve qua Nginx tại: `http://localhost:8080`

## ⚙️ Cấu hình thông tin cửa hàng & Analytics

Chỉnh sửa tại `src/config/business.js`:
- Phone
- Zalo
- Địa chỉ
- Social links

Tạo file `.env` từ `.env.example` để điền Tracking IDs (GA4, Pixel, TikTok, Google Ads).
