import React, { useState, useEffect, useRef } from 'react';
import { Camera, Laptop, Wrench, Wifi, Cpu, ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import './Gallery.css';

const IMGS = {
  storefront:     { webp: '/storefront.webp',     avif: '/storefront.avif',     jpg: '/storefront.jpg' },
  gaming:         { webp: '/gaming-setup.webp',   avif: '/gaming-setup.avif',   jpg: '/gaming-setup.jpg' },
  cctv:           { webp: '/camera-install.webp', avif: '/camera-install.avif', jpg: '/camera-install.jpg' },
  laptopService:  { webp: '/laptop-service.webp', avif: '/laptop-service.avif', jpg: '/laptop-service.jpg' },
  laptopRepair:   { webp: '/laptop-repair.webp',  avif: '/laptop-repair.avif',  jpg: '/laptop-repair.jpg' },
  pcBuild:        { webp: '/pc-build.webp',       avif: '/pc-build.avif',       jpg: '/pc-build.jpg' },
  tvSetup:        { webp: '/tv-setup.webp',       avif: '/tv-setup.avif',       jpg: '/tv-setup.jpg' },
  network:        { webp: '/network-wifi.webp',   avif: '/network-wifi.avif',   jpg: '/network-wifi.jpg' },
  cpu:            { webp: '/cpu-upgrade.webp',    avif: '/cpu-upgrade.avif',    jpg: '/cpu-upgrade.jpg' },
  components:     { webp: '/components.webp',     avif: '/components.avif',     jpg: '/components.jpg' },
};

export const Gallery = () => {
  const items = [
    { title: "Cửa hàng Chợ Điện Tử Phan Thiết", tag: "Cửa hàng", icon: <Laptop size={18} />, imgs: IMGS.storefront, desc: "Không gian trưng bày thiết bị & trung tâm hỗ trợ kỹ thuật khách hàng" },
    { title: "Lắp đặt PC Gaming & Đồ họa", tag: "PC Gaming", icon: <Cpu size={18} />, imgs: IMGS.gaming, desc: "Build cấu hình máy tính theo yêu cầu, đi dây gọn gàng chuyên nghiệp" },
    { title: "Thi công hệ thống Camera an ninh", tag: "Camera", icon: <Camera size={18} />, imgs: IMGS.cctv, desc: "Lắp đặt camera IP quan sát sắc nét cho gia đình & cửa hàng" },
    { title: "Sửa chữa bo mạch & màn hình Laptop", tag: "Sửa máy", icon: <Wrench size={18} />, imgs: IMGS.laptopRepair, desc: "Xử lý triệt để sự cố nguồn, đóng chip, thay phím màn hình lấy nhanh" },
    { title: "Sửa chữa & bảo dưỡng Laptop", tag: "Bảo dưỡng", icon: <Wrench size={18} />, imgs: IMGS.laptopService, desc: "Cài Win, vệ sinh tra keo tản nhiệt mát máy, xử lý sự cố phần cứng" },
    { title: "Lắp ráp thùng máy PC theo yêu cầu", tag: "Lắp ráp PC", icon: <Cpu size={18} />, imgs: IMGS.pcBuild, desc: "Tối ưu linh kiện theo ngân sách, kiểm tra độ bền tối đa trước khi bàn giao" },
    { title: "Sửa Tivi & Lắp đặt giá treo tường", tag: "Tivi", icon: <Laptop size={18} />, imgs: IMGS.tvSetup, desc: "Thay LED tivi tại nhà, gắn khung treo tivi lớn chắc chắn thẩm mỹ" },
    { title: "Tối ưu hệ thống Mạng Wi-Fi", tag: "Mạng Wi-Fi", icon: <Wifi size={18} />, imgs: IMGS.network, desc: "Bấm dây mạng, cấu hình bộ phát Router Wi-Fi 6 tốc độ cao" },
    { title: "Nâng cấp RAM & SSD tốc độ cao", tag: "Linh kiện", icon: <Cpu size={18} />, imgs: IMGS.cpu, desc: "Thay thế linh kiện chính hãng, nâng cấp máy chạy mượt tức thì" },
    { title: "Kho linh kiện & phụ kiện máy tính", tag: "Phụ kiện", icon: <Cpu size={18} />, imgs: IMGS.components, desc: "Đầy đủ nguồn công suất thực, vỏ case, fan LED, phím cơ chuột gaming" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxImg, setLightboxImg] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef(null);

  useEffect(() => {
    if (isPaused || lightboxImg) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, lightboxImg, items.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  return (
    <section className="section gallery" id="gallery">
      <div className="container">
        <h2 className="section-title">Hình ảnh hoạt động thực tế</h2>
        <p className="section-subtitle">Một số hình ảnh thi công, sửa chữa và bàn giao thiết bị thực tế tại Chợ Điện Tử Phan Thiết</p>

        <div
          className="gallery-carousel-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <button className="carousel-nav prev" onClick={handlePrev} aria-label="Previous image">
            <ChevronLeft size={24} />
          </button>

          <div className="gallery-carousel-track" ref={trackRef}>
            {items.map((item, index) => {
              let positionClass = "next-slide";
              if (index === currentIndex) {
                positionClass = "active-slide";
              } else if (
                index === currentIndex - 1 ||
                (currentIndex === 0 && index === items.length - 1)
              ) {
                positionClass = "prev-slide";
              }

              return (
                <div
                  key={index}
                  className={`gallery-card ${positionClass}`}
                  onClick={() => setLightboxImg(item)}
                >
                  <div className="gallery-img-wrapper">
                    <picture>
                      <source type="image/avif" srcSet={item.imgs.avif} />
                      <source type="image/webp" srcSet={item.imgs.webp} />
                      <img
                        src={item.imgs.jpg}
                        alt={item.title}
                        className="gallery-img"
                        width="600"
                        height="400"
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                    <span className="gallery-tag">
                      {item.icon}
                      {item.tag}
                    </span>
                    <div className="gallery-zoom-overlay">
                      <Maximize2 size={24} color="#ffffff" />
                    </div>
                  </div>
                  <div className="gallery-card-info">
                    <h3 className="gallery-card-title">{item.title}</h3>
                    <p className="gallery-card-desc">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <button className="carousel-nav next" onClick={handleNext} aria-label="Next image">
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="carousel-dots">
          {items.map((_, idx) => (
            <button
              key={idx}
              className={`dot ${currentIndex === idx ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {lightboxImg && (
        <div className="gallery-lightbox" onClick={() => setLightboxImg(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightboxImg(null)}>
              <X size={24} />
            </button>
            <picture>
              <source type="image/avif" srcSet={lightboxImg.imgs.avif} />
              <source type="image/webp" srcSet={lightboxImg.imgs.webp} />
              <img src={lightboxImg.imgs.jpg} alt={lightboxImg.title} width="1200" height="800" />
            </picture>
            <div className="lightbox-caption">
              <h3>{lightboxImg.title}</h3>
              <p>{lightboxImg.desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
