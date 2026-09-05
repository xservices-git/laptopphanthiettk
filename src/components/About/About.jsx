import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import './About.css';

export const About = () => {
  const reasons = [
    {
      title: "Tư vấn tận tình",
      desc: "Đúng nhu cầu, hợp ngân sách. Gợi ý phương án tối ưu nhất cho mục đích sử dụng của bạn."
    },
    {
      title: "Kỹ thuật hỗ trợ tận tâm",
      desc: "Hỗ trợ cài đặt, cấu hình, xử lý sự cố nhanh chóng tại cửa hàng hoặc tận nơi cho khách hàng."
    },
    {
      title: "Sản phẩm & Linh kiện chọn lọc",
      desc: "Chỉ bán các dòng sản phẩm, linh kiện có nguồn gốc rõ ràng, hoạt động bền bỉ và ổn định."
    },
    {
      title: "Hỗ trợ chu đáo sau bán hàng",
      desc: "Luôn đồng hành hỗ trợ kỹ thuật khi khách hàng gặp khó khăn trong quá trình sử dụng."
    }
  ];

  return (
    <section id="about" className="section about">
      <div className="container about-container">
        <div className="about-image-side">
          <div className="about-img-grid">
            <div className="about-img-main">
              <picture>
                <source type="image/avif" srcSet="/storefront.avif" />
                <source type="image/webp" srcSet="/storefront.webp" />
                <img
                  src="/storefront.jpg"
                  alt="Cửa hàng Chợ Điện Tử Phan Thiết"
                  className="about-img"
                  width="600"
                  height="320"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <span className="about-img-badge">Cửa hàng thực tế</span>
            </div>
            <div className="about-img-subgrid">
              <div className="about-img-sub">
                <picture>
                  <source type="image/avif" srcSet="/laptop-repair.avif" />
                  <source type="image/webp" srcSet="/laptop-repair.webp" />
                  <img
                    src="/laptop-repair.jpg"
                    alt="Sửa chữa phần cứng máy tính"
                    className="about-img"
                    width="300"
                    height="160"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
                <span className="sub-caption">Kỹ thuật tay nghề cao</span>
              </div>
              <div className="about-img-sub">
                <picture>
                  <source type="image/avif" srcSet="/camera-install.avif" />
                  <source type="image/webp" srcSet="/camera-install.webp" />
                  <img
                    src="/camera-install.jpg"
                    alt="Thi công camera và màn hình"
                    className="about-img"
                    width="300"
                    height="160"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
                <span className="sub-caption">Lắp đặt tận nơi</span>
              </div>
            </div>
          </div>
        </div>

        <div className="about-content-side">
          <h2 className="section-title left-align">Vì sao khách hàng lựa chọn Chợ Điện Tử Phan Thiết?</h2>
          <p className="about-intro">
            Chúng tôi tập trung vào trải nghiệm thực tế và sự an tâm của khách hàng tại địa phương khi cần sửa chữa hoặc nâng cấp thiết bị công nghệ.
          </p>

          <div className="reasons-list">
            {reasons.map((r, index) => (
              <div key={index} className="reason-item">
                <CheckCircle2 className="reason-icon" size={22} />
                <div>
                  <h3 className="reason-title">{r.title}</h3>
                  <p className="reason-desc">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
