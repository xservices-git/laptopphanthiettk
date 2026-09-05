import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { businessConfig } from '../../config/business';
import { trackEvent } from '../../utils/analytics';
import './Header.css';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCall = () => {
    trackEvent('phone_click', { location: 'header' });
    if (businessConfig.phone) {
      window.location.href = `tel:${businessConfig.phone}`;
    } else {
      window.open(businessConfig.googleMaps, '_blank');
    }
  };

  return (
    <header className="header">
      <div className="container header-container">
        <a href="#" className="logo">
          <picture>
            <source type="image/avif" srcSet="/logo.avif" />
            <source type="image/webp" srcSet="/logo.webp" />
            <img
              src="/logo.jpg"
              alt="Chợ Điện Tử Phan Thiết Logo"
              className="logo-img"
              width="50"
              height="50"
              decoding="async"
              fetchpriority="high"
            />
          </picture>
          <div className="logo-text">
            <span className="brand-name">{businessConfig.shortName || "Chợ Điện Tử Phan Thiết"}</span>
            <span className="brand-sub">{businessConfig.tagline}</span>
          </div>
        </a>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#" onClick={() => setIsMenuOpen(false)}>Trang chủ</a>
          <a href="#services" onClick={() => setIsMenuOpen(false)}>Dịch vụ</a>
          <a href="#products" onClick={() => setIsMenuOpen(false)}>Sản phẩm</a>
          <a href="#articles" onClick={() => setIsMenuOpen(false)}>Hướng dẫn</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>Về chúng tôi</a>
          <a href="#reviews" onClick={() => setIsMenuOpen(false)}>Đánh giá</a>
          <a href="#location" onClick={() => setIsMenuOpen(false)}>Ghé cửa hàng</a>
        </nav>

        <div className="header-actions">
          <button className="btn btn-call header-cta" onClick={handleCall}>
            <Phone size={18} />
            <span>{businessConfig.phone ? businessConfig.phone : 'Gọi ngay'}</span>
          </button>
          
          <button 
            className="mobile-toggle" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};
