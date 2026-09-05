import React from 'react';
import { Wrench, Video, Laptop, Tv, Wifi, Settings, Phone } from 'lucide-react';
import { businessConfig } from '../../config/business';
import { trackEvent } from '../../utils/analytics';
import './Services.css';

export const Services = () => {
  const servicesList = [
    {
      icon: <Wrench size={26} />,
      title: "Sửa chữa máy tính & Laptop",
      items: ["Khắc phục sự cố PC/Laptop", "Cài đặt Windows & Phần mềm", "Vệ sinh tra keo tản nhiệt", "Nâng cấp SSD & RAM", "Thay thế linh kiện chính hãng"]
    },
    {
      icon: <Video size={26} />,
      title: "Lắp đặt Camera an ninh",
      items: ["Camera cho gia đình", "Camera cho cửa hàng / shop", "Camera văn phòng & nhà xưởng", "Lắp đặt & cấu hình xem từ xa", "Bảo trì & sửa chữa camera"]
    },
    {
      icon: <Laptop size={26} />,
      title: "Cung cấp Laptop & PC",
      items: ["Tư vấn cấu hình theo ngân sách", "PC văn phòng, học tập", "PC đồ họa & Gaming", "Laptop mới / likenew", "Linh kiện máy tính chọn lọc"]
    },
    {
      icon: <Tv size={26} />,
      title: "Sửa chữa TIVI & Thiết bị giải trí",
      items: ["Sửa tivi tại nhà: mất nguồn, có tiếng mất hình", "Thay LED tivi chính hãng, bảo hành dài", "Lắp đặt khung treo tường, giá xoay", "Cài đặt ứng dụng Android TV / Smart TV", "Thu mua & đổi mới tivi cũ"]
    },
    {
      icon: <Wifi size={26} />,
      title: "Thiết bị mạng & Wi-Fi",
      items: ["Router / Modem Wi-Fi tốc độ cao", "Bộ kích sóng & Mesh Wi-Fi", "Thi công dây mạng gọn gàng", "Tối ưu mạng cho nhà nhiều tầng"]
    },
    {
      icon: <Settings size={26} />,
      title: "Bảo trì & Nâng cấp hệ thống",
      items: ["Bảo trì định kỳ cho doanh nghiệp", "Kiểm tra tổng thể hệ thống", "Xử lý sự cố mạng & máy tính", "Tư vấn mở rộng giải pháp"]
    }
  ];

  const handleContact = () => {
    trackEvent('phone_click', { location: 'services' });
    if (businessConfig.phone) {
      window.location.href = `tel:${businessConfig.phone}`;
    } else {
      window.open(businessConfig.googleMaps, '_blank');
    }
  };

  return (
    <section id="services" className="section services">
      <div className="container">
        <h2 className="section-title">Dịch vụ của chúng tôi</h2>
        <p className="section-subtitle">
          Đáp ứng đầy đủ nhu cầu công nghệ cho cá nhân, gia đình và cửa hàng/doanh nghiệp
        </p>

        <div className="services-grid">
          {servicesList.map((srv, index) => {
            const images = [
              { webp: "/laptop-repair.webp", avif: "/laptop-repair.avif", jpg: "/laptop-repair.jpg" },
              { webp: "/camera-install.webp", avif: "/camera-install.avif", jpg: "/camera-install.jpg" },
              { webp: "/pc-build.webp", avif: "/pc-build.avif", jpg: "/pc-build.jpg" },
              { webp: "/tv-setup.webp", avif: "/tv-setup.avif", jpg: "/tv-setup.jpg" },
              { webp: "/network-wifi.webp", avif: "/network-wifi.avif", jpg: "/network-wifi.jpg" },
              { webp: "/components.webp", avif: "/components.avif", jpg: "/components.jpg" },
            ];
            return (
              <div key={index} className="service-card">
                <div className="service-img-wrapper">
                  <picture>
                    <source type="image/avif" srcSet={images[index].avif} />
                    <source type="image/webp" srcSet={images[index].webp} />
                    <img
                      src={images[index].jpg}
                      alt={srv.title}
                      className="service-card-img"
                      width="800"
                      height="500"
                      loading="lazy"
                      decoding="async"
                    />
                  </picture>
                </div>
                <div className="service-header">
                  <div className="service-icon">{srv.icon}</div>
                  <h3 className="service-title">{srv.title}</h3>
                </div>
                <ul className="service-items">
                  {srv.items.map((item, idx) => (
                    <li key={idx}>• {item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="services-cta">
          <button className="btn btn-call" onClick={handleContact}>
            <Phone size={18} />
            <span>Liên hệ tư vấn dịch vụ</span>
          </button>
        </div>
      </div>
    </section>
  );
};
