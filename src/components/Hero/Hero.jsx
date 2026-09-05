import React, { useState, useEffect } from 'react';
import { Phone, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { businessConfig } from '../../config/business';
import { trackEvent } from '../../utils/analytics';
import './Hero.css';

export const Hero = () => {
  const slides = [
    {
      title: "CHỢ ĐIỆN TỬ PHAN THIẾT",
      subtitle: "Máy Tính • Laptop • PC Gaming • Smart TV • Camera An Ninh Chuyên Nghiệp",
      badge: "Cửa hàng & Kỹ thuật uy tín tại Phan Thiết",
      image: "/hero-tech-desk.jpg",
      tag: "Cửa hàng thực tế"
    },
    {
      title: "LẮP RÁP PC GAMING & ĐỒ HỌA",
      subtitle: "Tư vấn cấu hình chuẩn ngân sách, đi dây gọn đẹp, linh kiện chính hãng 100%",
      badge: "Cấu hình tối ưu • Hiệu năng đỉnh cao",
      image: "/hero-pc-gaming.jpg",
      tag: "PC Gaming & Đồ họa"
    },
    {
      title: "SỬA CHỮA & NÂNG CẤP LAPTOP",
      subtitle: "Báo giá minh bạch, kiểm tra tận mắt, thay pin màn hình phím và nâng cấp SSD siêu tốc",
      badge: "Kỹ thuật chuyên sâu • Lấy ngay",
      image: "/hero-laptop-fix.jpg",
      tag: "Sửa chữa phần cứng"
    },
    {
      title: "THI CÔNG CAMERA & LẮP TV TREO TƯỜNG",
      subtitle: "Camera an ninh xem điện thoại 24/7, thay LED tivi, gắn giá treo tivi thẩm mỹ tại nhà",
      badge: "Lắp đặt & Bảo hành tận nơi",
      image: "/hero-tv-wall.jpg",
      tag: "Camera & Smart TV"
    },
    {
      title: "CAMERA AN NINH & GIÁM SÁT TẬN NƠI",
      subtitle: "Hình ảnh sắc nét ngày đêm, cảnh báo chuyển động, khảo sát và lắp đặt nhanh chóng",
      badge: "Bảo hành 24 tháng chính hãng",
      image: "/hero-cctv.jpg",
      tag: "Camera an ninh"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length, isPaused]);

  const handleCall = () => {
    trackEvent('phone_click', { location: 'hero' });
    if (businessConfig.phone) {
      window.location.href = `tel:${businessConfig.phone}`;
    } else {
      window.open(businessConfig.googleMaps, '_blank');
    }
  };

  const handleMap = () => {
    trackEvent('map_click', { location: 'hero' });
    window.open(businessConfig.googleMaps, '_blank');
  };

  return (
    <section
      className="hero"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="hero-slider">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`hero-slide ${idx === currentSlide ? 'active' : ''}`}
          >
            <div className="hero-bg-img-wrapper">
              <img
                src={slide.image}
                alt={slide.title}
                className="hero-bg-img"
                width="1920"
                height="720"
                loading={idx === 0 ? "eager" : "lazy"}
              />
              <div className="hero-slide-overlay"></div>
            </div>

            <div className="container hero-container">
              <div className="hero-content">
                <div className="hero-badge">{slide.badge}</div>
                <h1 className="hero-title">{slide.title}</h1>
                <p className="hero-subtitle">{slide.subtitle}</p>

                <div className="hero-actions">
                  <button className="btn btn-call btn-lg" onClick={handleCall}>
                    <Phone size={18} />
                    <span>{businessConfig.phone ? `Gọi ngay: ${businessConfig.phone}` : 'Gọi tư vấn ngay'}</span>
                  </button>

                  <button className="btn btn-outline btn-lg hero-btn-map" onClick={handleMap}>
                    <MapPin size={18} />
                    <span>Xem vị trí Google Maps</span>
                  </button>
                </div>

                <div className="hero-features-bar">
                  <span>✓ Cửa hàng thực tế</span>
                  <span>✓ Trả góp 0%</span>
                  <span>✓ Báo giá trước</span>
                  <span>✓ Kỹ thuật tận nơi</span>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Previous / Next buttons */}
        <button
          className="hero-arrow prev"
          onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
          aria-label="Slide trước"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          className="hero-arrow next"
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          aria-label="Slide sau"
        >
          <ChevronRight size={24} />
        </button>

        {/* Indicators */}
        <div className="hero-dots">
          {slides.map((s, idx) => (
            <button
              key={idx}
              className={`hero-dot ${currentSlide === idx ? 'active' : ''}`}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Slide ${idx + 1}`}
            >
              <span className="hero-dot-label">{s.tag}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
