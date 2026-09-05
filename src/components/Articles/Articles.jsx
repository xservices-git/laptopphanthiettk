import React, { useState } from 'react';
import { BookOpen, Clock, Calendar, ChevronRight, X, Wrench, ShieldCheck, Tv, CheckCircle2 } from 'lucide-react';
import { articlesData } from '../../data/articles';
import { businessConfig } from '../../config/business';
import './Articles.css';

export const Articles = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const getCategoryIcon = (category) => {
    if (category.includes('Laptop') || category.includes('Máy tính')) return <Wrench size={16} />;
    if (category.includes('Camera')) return <ShieldCheck size={16} />;
    return <Tv size={16} />;
  };

  return (
    <section className="articles-section" id="articles">
      <div className="container">
        <div className="section-header text-center">
          <div className="badge-tag">
            <BookOpen size={16} />
            <span>CẨM NANG & HƯỚNG DẪN KỸ THUẬT</span>
          </div>
          <h2 className="section-title">Kinh nghiệm & Hướng dẫn tự xử lý tại nhà</h2>
          <p className="section-subtitle">
            Chia sẻ mẹo bảo dưỡng máy tính, cài đặt tivi và camera an ninh chi tiết từ đội ngũ kỹ thuật {businessConfig.shortName || "Chợ Điện Tử"}.
          </p>
        </div>

        <div className="articles-grid">
          {articlesData.map((art) => (
            <article key={art.id} className="article-card" onClick={() => setSelectedArticle(art)}>
              {art.image && (
                <div className="article-thumb-wrap">
                  <img src={art.image} alt={art.title} className="article-thumb" loading="lazy" decoding="async" />
                </div>
              )}
              <div className="article-card-body">
                <div className="article-category">
                  {getCategoryIcon(art.category)}
                  <span>{art.category}</span>
                </div>
                <h3 className="article-title">{art.title}</h3>
                <p className="article-summary">{art.summary}</p>
                
                <div className="article-meta">
                  <span className="meta-item"><Calendar size={14} /> {art.date}</span>
                  <span className="meta-item"><Clock size={14} /> {art.readTime}</span>
                </div>

                <button className="article-readmore" aria-label={`Đọc bài ${art.title}`}>
                  <span>Xem chi tiết</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Modal đọc chi tiết bài viết (SEO crawl + UX thân thiện) */}
        {selectedArticle && (
          <div className="article-modal-overlay" onClick={() => setSelectedArticle(null)}>
            <div className="article-modal-content" onClick={(e) => e.stopPropagation()}>
              <button 
                className="article-modal-close" 
                onClick={() => setSelectedArticle(null)}
                aria-label="Đóng bài viết"
              >
                <X size={24} />
              </button>

              <div className="article-modal-header">
                <span className="modal-category">{selectedArticle.category}</span>
                <h2 className="modal-title">{selectedArticle.title}</h2>
                <div className="modal-meta">
                  <span>Tác giả: {selectedArticle.author}</span> • <span>{selectedArticle.date}</span> • <span>{selectedArticle.readTime}</span>
                </div>
              </div>

              {selectedArticle.image && (
                <div className="article-modal-banner">
                  <img src={selectedArticle.image} alt={selectedArticle.title} loading="lazy" />
                </div>
              )}

              <div className="article-modal-body">
                <p className="modal-lead">{selectedArticle.summary}</p>

                {selectedArticle.sections.map((sec, idx) => (
                  <div key={idx} className="article-section-block">
                    <h3 className="block-heading">{sec.heading}</h3>
                    {sec.text && <p className="block-text">{sec.text}</p>}
                    {sec.steps && (
                      <ul className="block-steps">
                        {sec.steps.map((st, sIdx) => (
                          <li key={sIdx}>
                            <CheckCircle2 size={18} className="step-icon" />
                            <span>{st}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}

                <div className="article-cta-box">
                  <h4>Cần hỗ trợ kỹ thuật hoặc dịch vụ tận nơi?</h4>
                  <p>Liên hệ ngay {businessConfig.shortName} tại {businessConfig.address} để được kỹ thuật viên hỗ trợ nhanh nhất.</p>
                  <a href={`tel:${businessConfig.phone}`} className="btn-article-call">
                    Gọi hotline: {businessConfig.phoneDisplay || businessConfig.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
