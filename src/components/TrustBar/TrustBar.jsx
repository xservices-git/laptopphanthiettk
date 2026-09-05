import React from 'react';
import { ShieldCheck, UserCheck, Wrench, Store } from 'lucide-react';
import './TrustBar.css';

export const TrustBar = () => {
  const trustItems = [
    { icon: <Store size={22} />, title: "Cửa hàng thực tế", desc: "Địa chỉ rõ ràng, an tâm giao dịch" },
    { icon: <UserCheck size={22} />, title: "Tư vấn trung thực", desc: "Đúng nhu cầu, tối ưu chi phí" },
    { icon: <Wrench size={22} />, title: "Kỹ thuật chuyên nghiệp", desc: "Sửa chữa, lắp đặt nhanh chóng" },
    { icon: <ShieldCheck size={22} />, title: "Bảo hành rõ ràng", desc: "Hỗ trợ chu đáo sau bán hàng" }
  ];

  return (
    <section className="trust-bar">
      <div className="container trust-container">
        {trustItems.map((item, index) => (
          <div key={index} className="trust-item">
            <div className="trust-icon">{item.icon}</div>
            <div className="trust-info">
              <h4 className="trust-title">{item.title}</h4>
              <p className="trust-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
