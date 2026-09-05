import React from 'react';
import { CheckCircle, Phone } from 'lucide-react';
import { businessConfig } from '../../config/business';
import { trackEvent } from '../../utils/analytics';
import './Process.css';

export const Process = () => {
  const steps = [
    { num: "01", title: "Liên hệ tư vấn", desc: "Gọi điện hoặc nhắn Zalo mô tả nhu cầu hoặc sự cố máy." },
    { num: "02", title: "Kiểm tra / Báo giá", desc: "Kỹ thuật kiểm tra tình trạng thực tế và báo phương án xử lý tối ưu." },
    { num: "03", title: "Thực hiện dịch vụ", desc: "Tiến hành sửa chữa, lắp đặt hoặc giao hàng chuẩn chỉnh." },
    { num: "04", title: "Bàn giao & Bảo hành", desc: "Khách hàng kiểm tra nghiệm thu, nhận phiếu/tem bảo hành rõ ràng." }
  ];

  const handleCall = () => {
    trackEvent('phone_click', { location: 'process' });
    if (businessConfig.phone) {
      window.location.href = `tel:${businessConfig.phone}`;
    } else {
      window.open(businessConfig.googleMaps, '_blank');
    }
  };

  return (
    <section className="section process">
      <div className="container">
        <h2 className="section-title">Quy trình làm việc</h2>
        <p className="section-subtitle">Minh bạch, nhanh chóng và dễ dàng cho mọi khách hàng</p>

        <div className="process-grid">
          {steps.map((step, index) => (
            <div key={index} className="process-card">
              <span className="step-num">{step.num}</span>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="process-action">
          <button className="btn btn-call" onClick={handleCall}>
            <Phone size={18} />
            <span>Liên hệ ngay để được hỗ trợ</span>
          </button>
        </div>
      </div>
    </section>
  );
};
