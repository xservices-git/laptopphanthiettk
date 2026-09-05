import React from 'react';
import { Star, MapPin, ExternalLink } from 'lucide-react';
import { businessConfig } from '../../config/business';
import { trackEvent } from '../../utils/analytics';
import './Reviews.css';

export const Reviews = () => {
  const handleMapClick = () => {
    trackEvent('map_click', { location: 'reviews' });
    window.open(businessConfig.googleMaps, '_blank');
  };

  const sampleReviews = [
    {
      name: "Nguyễn Văn Hùng",
      detail: "Khách hàng địa phương",
      stars: 5,
      comment: "Sửa máy tính rất nhanh và nhiệt tình. Báo đúng bệnh, giá hợp lý, cài phần mềm đầy đủ."
    },
    {
      name: "Trần Thị Mai",
      detail: "Khách hàng lắp camera",
      stars: 5,
      comment: "Lắp đặt hệ thống camera sắc nét, thi công gọn gàng thẩm mỹ. Hướng dẫn dùng app tận tình."
    },
    {
      name: "Lê Minh Tuấn",
      detail: "Khách hàng mua laptop & TV",
      stars: 5,
      comment: "Tư vấn cấu hình máy vừa tầm tiền, bảo hành chu đáo. Rất yên tâm khi mua tại đây."
    }
  ];

  return (
    <section id="reviews" className="section reviews">
      <div className="container">
        <h2 className="section-title">Khách hàng nói gì về chúng tôi</h2>
        <p className="section-subtitle">
          Đánh giá thực tế từ khách hàng đã trải nghiệm dịch vụ tại Chợ Điện Tử Phan Thiết
        </p>

        <div className="reviews-grid">
          {sampleReviews.map((rev, idx) => (
            <div key={idx} className="review-item-card">
              <div className="stars-wrapper">
                {[...Array(rev.stars)].map((_, i) => (
                  <Star key={i} size={18} className="star-icon" fill="#eab308" color="#eab308" />
                ))}
              </div>
              <p className="review-comment">"{rev.comment}"</p>
              <div className="review-author">
                <strong>{rev.name}</strong>
                <span>{rev.detail}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="reviews-card">
          <h3 className="reviews-card-title">Xem thêm đánh giá trên Google Maps</h3>
          <p className="reviews-card-desc">
            Chúng tôi coi trọng từng nhận xét của khách hàng địa phương để không ngừng nâng cao chất lượng dịch vụ.
          </p>
          <button className="btn btn-primary btn-lg" onClick={handleMapClick}>
            <MapPin size={20} />
            <span>Mở Google Maps xem đánh giá</span>
            <ExternalLink size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};
