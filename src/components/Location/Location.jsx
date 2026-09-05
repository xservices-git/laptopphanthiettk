import React from 'react';
import { MapPin, Navigation, Phone, Clock } from 'lucide-react';
import { businessConfig } from '../../config/business';
import { trackEvent } from '../../utils/analytics';
import './Location.css';

export const Location = () => {
  const handleMapClick = () => {
    trackEvent('map_click', { location: 'location_section' });
    window.open(businessConfig.googleMaps, '_blank');
  };

  const handleCall = () => {
    trackEvent('phone_click', { location: 'location_section' });
    if (businessConfig.phone) {
      window.location.href = `tel:${businessConfig.phone}`;
    } else {
      window.open(businessConfig.googleMaps, '_blank');
    }
  };

  return (
    <section id="location" className="section location">
      <div className="container">
        <h2 className="section-title">Ghé trực tiếp cửa hàng</h2>
        <p className="section-subtitle">Luôn sẵn sàng đón tiếp và hỗ trợ quý khách hàng</p>

        <div className="location-card">
          <div className="location-info">
            <h3 className="shop-title">{businessConfig.name} - {businessConfig.tagline}</h3>
            
            <div className="info-row">
              <MapPin size={20} className="info-icon" />
              <span>{businessConfig.address}</span>
            </div>

            <div className="info-row">
              <Clock size={20} className="info-icon" />
              <span>{businessConfig.workingHours}</span>
            </div>

            <div className="info-row">
              <Phone size={20} className="info-icon" />
              <span>{businessConfig.phone ? businessConfig.phone : 'Liên hệ qua Google Maps / Zalo'}</span>
            </div>

            <div className="location-buttons">
              <button className="btn btn-primary" onClick={handleMapClick}>
                <Navigation size={18} />
                <span>Chỉ đường Google Maps</span>
              </button>
              <button className="btn btn-call" onClick={handleCall}>
                <Phone size={18} />
                <span>Gọi ngay {businessConfig.phoneDisplay}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
