import React from 'react';
import { Monitor } from 'lucide-react';
import { businessConfig } from '../../config/business';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <Monitor size={24} className="logo-icon" />
            <span className="brand-name">{businessConfig.name}</span>
          </div>
          <p className="footer-tagline">{businessConfig.tagline}</p>
          <p className="footer-desc">{businessConfig.description}</p>
        </div>

        <div className="footer-links">
          <div className="footer-group">
            <h4>Dịch vụ</h4>
            <a href="#services">Sửa chữa máy tính / Laptop</a>
            <a href="#services">Lắp đặt Camera an ninh</a>
            <a href="#services">TIVI & Khung treo</a>
            <a href="#services">Thiết bị mạng & Wi-Fi</a>
          </div>

          <div className="footer-group">
            <h4>Sản phẩm</h4>
            <a href="#products">Laptop Văn Phòng & Gaming</a>
            <a href="#products">Bộ PC Đồ Họa & Văn Phòng</a>
            <a href="#products">Camera & Đầu ghi</a>
            <a href="#products">Linh kiện & Ổ cứng SSD</a>
          </div>

          <div className="footer-group">
            <h4>Hướng dẫn kỹ thuật</h4>
            <a href="#articles">Vệ sinh & tra keo tản nhiệt</a>
            <a href="#articles">Cài đặt Camera Wifi trên điện thoại</a>
            <a href="#articles">Lắp khung treo Tivi & App xem phim</a>
            <a href="#articles">Kinh nghiệm bảo dưỡng máy tính</a>
          </div>

          <div className="footer-group">
            <h4>Liên hệ & Vị trí</h4>
            <a href={businessConfig.googleMaps} target="_blank" rel="noreferrer">Xem Google Maps</a>
            {businessConfig.facebook && <a href={businessConfig.facebook} target="_blank" rel="noreferrer">Facebook Page</a>}
            {businessConfig.tiktok && <a href={businessConfig.tiktok} target="_blank" rel="noreferrer">TikTok</a>}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} {businessConfig.name}. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
};
