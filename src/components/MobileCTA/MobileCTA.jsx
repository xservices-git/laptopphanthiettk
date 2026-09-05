import React from 'react';
import { Phone, MessageCircle, MapPin } from 'lucide-react';
import { businessConfig } from '../../config/business';
import { trackEvent } from '../../utils/analytics';
import './MobileCTA.css';

export const MobileCTA = () => {
  const handleCall = () => {
    trackEvent('phone_click', { location: 'mobile_sticky_bar' });
    if (businessConfig.phone) {
      window.location.href = `tel:${businessConfig.phone}`;
    } else {
      window.open(businessConfig.googleMaps, '_blank');
    }
  };

  const handleZalo = () => {
    trackEvent('zalo_click', { location: 'mobile_sticky_bar' });
    if (businessConfig.zalo) {
      window.open(businessConfig.zalo, '_blank');
    } else {
      window.open(businessConfig.googleMaps, '_blank');
    }
  };

  const handleMap = () => {
    trackEvent('map_click', { location: 'mobile_sticky_bar' });
    window.open(businessConfig.googleMaps, '_blank');
  };

  return (
    <div className="mobile-cta-bar">
      <button className="mobile-cta-btn cta-call" onClick={handleCall}>
        <Phone size={18} />
        <span>Gọi điện</span>
      </button>

      <button className="mobile-cta-btn cta-zalo" onClick={handleZalo}>
        <MessageCircle size={18} />
        <span>Zalo</span>
      </button>

      <button className="mobile-cta-btn cta-map" onClick={handleMap}>
        <MapPin size={18} />
        <span>Chỉ đường</span>
      </button>
    </div>
  );
};
