import React from 'react';
import { Phone, MessageCircle, MapPin } from 'lucide-react';
import { businessConfig } from '../../config/business';
import { trackEvent } from '../../utils/analytics';
import './ContactCTA.css';

export const ContactCTA = () => {
  const handleCall = () => {
    trackEvent('phone_click', { location: 'contact_cta' });
    if (businessConfig.phone) {
      window.location.href = `tel:${businessConfig.phone}`;
    } else {
      window.open(businessConfig.googleMaps, '_blank');
    }
  };

  const handleZalo = () => {
    trackEvent('zalo_click', { location: 'contact_cta' });
    if (businessConfig.zalo) {
      window.open(businessConfig.zalo, '_blank');
    } else {
      window.open(businessConfig.googleMaps, '_blank');
    }
  };

  const handleMap = () => {
    trackEvent('map_click', { location: 'contact_cta' });
    window.open(businessConfig.googleMaps, '_blank');
  };

  return (
    <section className="section contact-cta">
      <div className="container">
        <div className="cta-box">
          <h2 className="cta-title">Bạn đang cần sửa máy, nâng cấp PC hay lắp camera?</h2>
          <p className="cta-desc">
            Liên hệ Chợ Điện Tử Phan Thiết để xem mẫu và nhận bảng giá trả góp 0% — hỗ trợ duyệt nhanh trong ngày.
          </p>

          <div className="cta-buttons">
            <button className="btn btn-call btn-lg" onClick={handleCall}>
              <Phone size={20} />
              <span>Gọi ngay {businessConfig.phoneDisplay}</span>
            </button>
            <button className="btn btn-zalo btn-lg" onClick={handleZalo}>
              <MessageCircle size={20} />
              <span>Nhắn Zalo hỏi giá</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
