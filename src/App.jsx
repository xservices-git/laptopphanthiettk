import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Search, 
  Menu, 
  Truck, 
  ShieldCheck, 
  Wrench, 
  Clock, 
  Check, 
  Gift, 
  ChevronRight, 
  Laptop, 
  X,
  Tv,
  RefreshCw,
  Info,
  Layers,
  FileText,
  Mail,
  Send,
  Star
} from 'lucide-react';
import { categories, products } from './data/products';
import { newsPosts, services } from './data/content';
import './App.css';

function App() {
  // Navigation tabs: 'home' | 'about' | 'products' | 'services' | 'news' | 'contact'
  const [currentTab, setCurrentTab] = useState('home');
  const [selectedCat, setSelectedCat] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Modal product states
  const [activeModalProduct, setActiveModalProduct] = useState(null);
  const [selectedConfigIdx, setSelectedConfigIdx] = useState(0);

  // Modal news state
  const [activeNewsPost, setActiveNewsPost] = useState(null);

  // Form contact state
  const [contactSuccess, setContactSuccess] = useState(false);

  // Filter products
  const filteredProducts = products.filter((p) => {
    const matchCat = selectedCat === 'all' || p.category === selectedCat;
    const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const formatVND = (amount) => {
    return new Intl.NumberFormat('vi-VN').format(amount) + ' đ';
  };

  const handleOpenProduct = (product) => {
    setActiveModalProduct(product);
    setSelectedConfigIdx(0);
  };

  const handleSelectCategory = (catId) => {
    setSelectedCat(catId);
    setCurrentTab('home');
    window.scrollTo({ top: 380, behavior: 'smooth' });
  };

  return (
    <div className="ecommerce-page">
      {/* 1. TOPBAR */}
      <div className="topbar">
        <div className="container">
          <div className="topbar-left">
            <span><MapPin size={14} style={{ verticalAlign: -2 }} /> 85 Nguyễn Phúc Nguyên, P. Phú Thủy, TP. Phan Thiết</span>
            <span>Giờ mở cửa: 08:00 - 20:00 (Cả CN & Lễ)</span>
          </div>
          <div className="topbar-right">
            <span>Kỹ thuật & bảo hành: <strong>0949.951.951</strong></span>
            <span>Hotline tư vấn: <strong style={{ color: '#ffeb3b' }}>0938.988.999</strong></span>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER */}
      <header className="main-header">
        <div className="container">
          <div className="header-row">
            {/* BRAND LOGO */}
            <div className="brand-box" onClick={() => setCurrentTab('home')} style={{ cursor: 'pointer' }}>
              <div className="brand-logo-icon">
                <Laptop size={28} />
              </div>
              <div>
                <div className="brand-name">LAPTOP PHAN THIẾT TK</div>
                <div className="brand-sub">MÁY TÍNH ĐỒNG BỘ • WORKSTATION • GAMING • CAMERA</div>
              </div>
            </div>

            {/* SEARCH */}
            <div className="search-form">
              <input 
                type="text" 
                className="search-input" 
                placeholder="Tìm Dell Optiplex, HP ProDesk, ThinkPad, PC Gaming..." 
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (currentTab !== 'home') setCurrentTab('home');
                }}
              />
              <button className="search-btn">
                <Search size={18} />
              </button>
            </div>

            {/* HOTLINE */}
            <div className="header-hotline">
              <div className="hotline-icon">
                <Phone size={20} />
              </div>
              <div>
                <div className="hotline-label">Tư vấn bán hàng</div>
                <div className="hotline-phone">0938.988.999</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 3. NAVIGATION MENU (LONGVU STYLE) */}
      <nav className="nav-bar">
        <div className="container">
          <div className="nav-row">
            <div className="category-dropdown-btn">
              <Menu size={20} />
              <span>DANH MỤC SẢN PHẨM</span>
            </div>
            <ul className="nav-links">
              <li className={currentTab === 'home' && selectedCat === 'all' ? 'active' : ''}>
                <a href="#home" onClick={(e) => { e.preventDefault(); setCurrentTab('home'); setSelectedCat('all'); }}>Trang chủ</a>
              </li>
              <li className={currentTab === 'about' ? 'active' : ''}>
                <a href="#about" onClick={(e) => { e.preventDefault(); setCurrentTab('about'); }}>Giới thiệu</a>
              </li>
              <li className={currentTab === 'services' ? 'active' : ''}>
                <a href="#services" onClick={(e) => { e.preventDefault(); setCurrentTab('services'); }}>Dịch vụ</a>
              </li>
              <li className={currentTab === 'news' ? 'active' : ''}>
                <a href="#news" onClick={(e) => { e.preventDefault(); setCurrentTab('news'); }}>Tin tức & Kinh nghiệm</a>
              </li>
              <li className={currentTab === 'contact' ? 'active' : ''}>
                <a href="#contact" onClick={(e) => { e.preventDefault(); setCurrentTab('contact'); }}>Liên hệ</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* 4. CONTENT SWITCHING THEO TABS */}
      {currentTab === 'home' && (
        <>
          {/* HERO SECTION WITH SIDEBAR */}
          <div className="container hero-wrapper">
            <div className="hero-grid">
              {/* Sidebar Categories */}
              <div className="sidebar-categories">
                {categories.map((c) => (
                  <div 
                    key={c.id}
                    className={`sidebar-category-item ${selectedCat === c.id ? 'active' : ''}`}
                    onClick={() => setSelectedCat(c.id)}
                  >
                    <span>{c.name}</span>
                    <ChevronRight size={14} />
                  </div>
                ))}
              </div>

              {/* Main Banner Slider */}
              <div className="banner-main">
                <img src="/banner-slider-1.jpg" alt="Máy tính văn phòng" className="banner-img" />
                <div className="banner-content">
                  <span className="banner-tag">ƯU ĐÃI THÁNG 9/2026</span>
                  <h2 className="banner-title">MÁY TÍNH ĐỒNG BỘ DELL & HP NHẬP KHẨU USA</h2>
                  <p className="banner-desc">
                    Nguyên zin 100% - Siêu bền bỉ hoạt động 24/7. Trọn bộ kèm màn hình LCD giá cực tốt. Tặng phím chuột + lắp đặt tại nhà miễn phí!
                  </p>
                  <a href="tel:0938988999" className="banner-cta-btn">
                    <Phone size={18} /> GỌI TƯ VẤN: 0938.988.999
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* POLICY COMMITMENTS */}
          <div className="container">
            <div className="policy-bar">
              <div className="policy-item">
                <Truck size={28} className="policy-icon" />
                <div>
                  <div className="policy-title">Giao Hàng & Lắp Đặt</div>
                  <div className="policy-sub">Miễn phí tận nhà tại Phan Thiết</div>
                </div>
              </div>
              <div className="policy-item">
                <ShieldCheck size={28} className="policy-icon" />
                <div>
                  <div className="policy-title">Bảo Hành 12 - 24 Tháng</div>
                  <div className="policy-sub">Lỗi 1 đổi 1 nhanh chóng, an tâm</div>
                </div>
              </div>
              <div className="policy-item">
                <Wrench size={28} className="policy-icon" />
                <div>
                  <div className="policy-title">Hỗ Trợ Kỹ Thuật Tận Nơi</div>
                  <div className="policy-sub">Cài win & phần mềm miễn phí trọn đời</div>
                </div>
              </div>
              <div className="policy-item">
                <Clock size={28} className="policy-icon" />
                <div>
                  <div className="policy-title">Hỗ Trợ Trả Góp 0%</div>
                  <div className="policy-sub">Thủ tục duyệt nhanh trong 15 phút</div>
                </div>
              </div>
            </div>
          </div>

          {/* PRODUCT SHOWCASE */}
          <main className="container">
            <div className="section-header-box">
              <div className="section-title">
                <Gift size={20} />
                <span>SẢN PHẨM BÁN CHẠY - CÓ KHUYẾN MÃI</span>
              </div>
              <div style={{ fontSize: '0.85rem' }}>Đang hiển thị {filteredProducts.length} sản phẩm</div>
            </div>

            <div className="product-grid">
              {filteredProducts.map((p) => (
                <div className="product-card" key={p.id}>
                  {/* Badges */}
                  <div className="card-badges">
                    {p.badge && <span className="badge-hot">{p.badge}</span>}
                    {p.promoBadge && <span className="badge-promo">{p.promoBadge}</span>}
                  </div>

                  {/* Thumb */}
                  <div className="product-thumb-wrap">
                    <img src={p.image} alt={p.name} className="product-thumb" />
                  </div>

                  {/* Title & Price */}
                  <h3 className="product-name">{p.name}</h3>
                  <div className="product-price-box">
                    <span className="price-current">Liên hệ</span>
                  </div>

                  {/* Bullet Specs List */}
                  <ul className="product-specs-list">
                    {p.specs.slice(0, 4).map((spec, i) => (
                      <li key={i}>
                        <Check size={14} className="spec-check" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Gifts Box */}
                  {p.gifts && p.gifts.length > 0 && (
                    <div className="product-gift-box">
                      <div className="gift-title">Chương trình khuyến mãi</div>
                      <ul>
                        {p.gifts.map((g, i) => (
                          <li key={i}>{g}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="card-actions">
                    <button 
                      className="btn-select-config"
                      onClick={() => handleOpenProduct(p)}
                    >
                      Chọn cấu hình
                    </button>
                    <a 
                      href="tel:0938988999"
                      className="btn-order-now"
                    >
                      Gọi mua ngay
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </>
      )}

      {/* 5. TAB GIỚI THIỆU */}
      {currentTab === 'about' && (
        <div className="container" style={{ margin: '24px auto' }}>
          <div className="page-box">
            <h1 className="page-title">VỀ CHÚNG TÔI - HỆ THỐNG LAPTOP PHAN THIẾT TK</h1>
            <div className="about-grid">
              <div>
                <img src="/store-front.jpg" alt="Cửa hàng Laptop Phan Thiết TK" className="about-img" />
              </div>
              <div className="about-text">
                <h3>Địa chỉ tin cậy hàng đầu về Máy tính đồng bộ & Thiết bị số tại Bình Thuận</h3>
                <p>
                  <strong>Laptop Phan Thiết TK</strong> tự hào là đơn vị tiên phong chuyên cung cấp các dòng máy tính đồng bộ Dell Optiplex, HP ProDesk, máy trạm Workstation chuyên dụng cho đồ hoạ và render, laptop doanh nhân nhập khẩu từ thị trường Mỹ (USA) và Nhật Bản.
                </p>
                <p>
                  Với triết lý kinh doanh <strong>"Chất lượng thật - Giá trị thật"</strong>, 100% sản phẩm bán ra đều trải qua quy trình kiểm tra gắt gao gồm 18 bước test kỹ thuật trước khi đến tay khách hàng.
                </p>
                <div className="about-highlights">
                  <div className="highlight-item">
                    <Star className="highlight-icon" size={24} />
                    <div>
                      <strong>Hàng tuyển chọn loại 1 (Like New)</strong>
                      <p>Không bán hàng qua sửa chữa mạch, cam kết hoàn tiền 200% nếu phát hiện hàng dựng.</p>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <ShieldCheck className="highlight-icon" size={24} />
                    <div>
                      <strong>Bảo hành siêu tốc 1 đổi 1</strong>
                      <p>Đổi mới linh kiện ngay lập tức khi phát sinh lỗi, không giữ máy lâu làm gián đoạn công việc.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 6. TAB DỊCH VỤ */}
      {currentTab === 'services' && (
        <div className="container" style={{ margin: '24px auto' }}>
          <div className="page-box">
            <h1 className="page-title">DỊCH VỤ KỸ THUẬT CHUYÊN NGHIỆP TẬN NƠI</h1>
            <p style={{ color: '#64748b', marginBottom: 24, textAlign: 'center' }}>
              Đội ngũ kỹ thuật viên lành nghề sẵn sàng hỗ trợ tận nhà, văn phòng và cơ quan tại TP. Phan Thiết
            </p>
            <div className="services-grid">
              {services.map((s) => (
                <div key={s.id} className="service-card">
                  <div className="service-icon-wrap">
                    {s.id === 'repair-pc' && <Wrench size={32} color="var(--primary-red)" />}
                    {s.id === 'camera-install' && <ShieldCheck size={32} color="var(--primary-red)" />}
                    {s.id === 'tv-bracket' && <Tv size={32} color="var(--primary-red)" />}
                    {s.id === 'trade-in' && <RefreshCw size={32} color="var(--primary-red)" />}
                  </div>
                  <h3 className="service-title">{s.title}</h3>
                  <div className="service-price">{s.price}</div>
                  <p className="service-desc">{s.desc}</p>
                  <a href="tel:0949951951" className="btn-call-service">
                    <Phone size={16} /> Liên hệ kỹ thuật: 0949.951.951
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 7. TAB TIN TỨC & KINH NGHIỆM */}
      {currentTab === 'news' && (
        <div className="container" style={{ margin: '24px auto' }}>
          <div className="page-box">
            <h1 className="page-title">TIN TỨC CÔNG NGHỆ & KINH NGHIỆM CHỌN MUA</h1>
            <div className="news-grid">
              {newsPosts.map((post) => (
                <div key={post.id} className="news-card" onClick={() => setActiveNewsPost(post)}>
                  <div className="news-thumb-wrap">
                    <img src={post.image} alt={post.title} className="news-thumb" />
                  </div>
                  <div className="news-info">
                    <span className="news-date">{post.date} • {post.author}</span>
                    <h3 className="news-title">{post.title}</h3>
                    <p className="news-excerpt">{post.excerpt}</p>
                    <span className="news-readmore">Xem chi tiết bài viết →</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 8. TAB LIÊN HỆ */}
      {currentTab === 'contact' && (
        <div className="container" style={{ margin: '24px auto' }}>
          <div className="page-box">
            <h1 className="page-title">LIÊN HỆ VỚI CHÚNG TÔI</h1>
            <div className="contact-grid">
              <div className="contact-info-col">
                <h3>CỬA HÀNG LAPTOP PHAN THIẾT TK</h3>
                <p><strong>Địa chỉ:</strong> 85 Nguyễn Phúc Nguyên, Phường Phú Thủy, TP. Phan Thiết, Tỉnh Bình Thuận</p>
                <p><strong>Hotline bán hàng:</strong> 0938.988.999 (Zalo / Call)</p>
                <p><strong>Hỗ trợ kỹ thuật:</strong> 0949.951.951</p>
                <p><strong>Email:</strong> hotro@laptopphanthiettk.vn</p>
                <p><strong>Thời gian mở cửa:</strong> 08:00 - 20:00 (Từ thứ 2 đến Chủ nhật)</p>
                <div style={{ marginTop: 20, background: '#f8fafc', padding: 16, borderRadius: 6, border: '1px solid #e2e8f0' }}>
                  <h4 style={{ color: 'var(--header-blue)', marginBottom: 8 }}>Chỉ dẫn đường đi:</h4>
                  <p style={{ fontSize: '0.88rem', color: '#475569' }}>
                    Nằm trên đường Nguyễn Phúc Nguyên giao cắt Thủ Khoa Huân và Hùng Vương, gần trường THPT Phan Bội Châu. Có bãi đỗ xe ô tô và xe máy rộng rãi miễn phí.
                  </p>
                </div>
              </div>

              <div className="contact-form-col">
                <h3>Gửi yêu cầu tư vấn báo giá</h3>
                {contactSuccess ? (
                  <div style={{ background: '#f0fdf4', border: '1px solid #86efac', padding: 20, borderRadius: 6, color: '#166534' }}>
                    <h4 style={{ marginBottom: 6 }}>Gửi yêu cầu thành công!</h4>
                    <p>Nhân viên tư vấn sẽ liên hệ lại với bạn qua số điện thoại trong vòng 10 phút.</p>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setContactSuccess(true); }}>
                    <div className="form-group">
                      <label>Họ và tên của bạn (*)</label>
                      <input type="text" required placeholder="Nguyễn Văn A" className="form-ctrl" />
                    </div>
                    <div className="form-group">
                      <label>Số điện thoại liên hệ (*)</label>
                      <input type="tel" required placeholder="09xxxxxxxx" className="form-ctrl" />
                    </div>
                    <div className="form-group">
                      <label>Nhu cầu hoặc dòng máy quan tâm</label>
                      <textarea rows="4" placeholder="VD: Cần tư vấn bộ máy Dell tầm 7 triệu cho con học bài và làm kế toán..." className="form-ctrl"></textarea>
                    </div>
                    <button type="submit" className="btn-submit-contact">
                      <Send size={18} /> GỬI YÊU CẦU TƯ VẤN
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="main-footer">
        <div className="container footer-grid">
          <div className="footer-col">
            <h4>LAPTOP PHAN THIẾT TK</h4>
            <p><strong>Cửa hàng:</strong> 85 Nguyễn Phúc Nguyên, P. Phú Thủy, TP. Phan Thiết, Bình Thuận</p>
            <p><strong>Hotline / Zalo:</strong> 0938.988.999 - 0949.951.951</p>
            <p><strong>Email:</strong> hotro@laptopphanthiettk.vn</p>
            <p>Hệ thống cung cấp máy tính đồng bộ Dell, HP, Workstation đồ hoạ, laptop doanh nhân USA, PC Gaming RGB và giải pháp Camera an ninh hàng đầu tại Bình Thuận.</p>
          </div>

          <div className="footer-col">
            <h4>DANH MỤC HÀNG HÓA</h4>
            <ul className="footer-links">
              <li><a href="#dell" onClick={() => handleSelectCategory('dell-dongbo')}>Máy tính bộ Dell</a></li>
              <li><a href="#hp" onClick={() => handleSelectCategory('hp-dongbo')}>Máy tính bộ HP</a></li>
              <li><a href="#laptop" onClick={() => handleSelectCategory('laptop-cu')}>Laptop doanh nhân USA</a></li>
              <li><a href="#gaming" onClick={() => handleSelectCategory('gaming-pc')}>PC Gaming & Đồ họa</a></li>
              <li><a href="#camera" onClick={() => handleSelectCategory('camera-tv')}>Camera & Smart Tivi</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>CHÍNH SÁCH BÁN HÀNG</h4>
            <ul className="footer-links">
              <li><a href="#about" onClick={() => setCurrentTab('about')}>Chính sách bảo hành 1 đổi 1</a></li>
              <li><a href="#contact" onClick={() => setCurrentTab('contact')}>Vận chuyển & lắp đặt tận nơi</a></li>
              <li><a href="#about" onClick={() => setCurrentTab('about')}>Hướng dẫn mua trả góp 0%</a></li>
              <li><a href="#about" onClick={() => setCurrentTab('about')}>Cam kết hoàn tiền 200% nếu hàng dựng</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>TỔNG ĐÀI HỖ TRỢ</h4>
            <p>Tư vấn bán hàng: <strong>0938.988.999</strong></p>
            <p>Kỹ thuật & bảo hành: <strong>0949.951.951</strong></p>
            <p>Thời gian làm việc: 8:00 - 20:00 hàng ngày</p>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            © 2026 LAPTOP PHAN THIẾT TK - Hệ Thống Máy Tính & Thiết Bị Số Chuyên Nghiệp.
          </div>
        </div>
      </footer>

      {/* POPUP CHI TIẾT SẢN PHẨM & CẤU HÌNH TÙY CHỌN */}
      {activeModalProduct && (
        <div className="modal-overlay" onClick={() => setActiveModalProduct(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveModalProduct(null)}>
              <X size={24} />
            </button>
            <div className="modal-product-header">
              <img src={activeModalProduct.image} alt={activeModalProduct.name} className="modal-thumb" />
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f3057' }}>{activeModalProduct.name}</h3>
                <div style={{ color: 'var(--primary-red)', fontSize: '1.4rem', fontWeight: 900, marginTop: 6 }}>
                  Giá: Liên hệ
                </div>
              </div>
            </div>

            {/* Config Option Selector */}
            {activeModalProduct.configs && activeModalProduct.configs.length > 0 && (
              <div style={{ marginBottom: 16 }}>
                <h4 style={{ fontWeight: 800, marginBottom: 8, fontSize: '0.92rem' }}>Chọn gói cấu hình:</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {activeModalProduct.configs.map((cfg, idx) => (
                    <div 
                      key={idx}
                      onClick={() => setSelectedConfigIdx(idx)}
                      style={{
                        padding: '10px 14px',
                        border: selectedConfigIdx === idx ? '2px solid var(--primary-red)' : '1px solid #cbd5e1',
                        borderRadius: 4,
                        background: selectedConfigIdx === idx ? '#fff5f5' : '#ffffff',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}
                    >
                      <span style={{ fontWeight: selectedConfigIdx === idx ? 700 : 500, fontSize: '0.9rem' }}>
                        {cfg.name}
                      </span>
                      <strong style={{ color: 'var(--primary-red)' }}>Liên hệ</strong>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div style={{ marginBottom: 16 }}>
              <h4 style={{ fontWeight: 800, marginBottom: 8, fontSize: '0.92rem' }}>Thông số chi tiết:</h4>
              <ul style={{ paddingLeft: 18, fontSize: '0.88rem', lineHeight: 1.6, color: '#334155' }}>
                {activeModalProduct.specs.map((s, idx) => (
                  <li key={idx}>{s}</li>
                ))}
              </ul>
            </div>

            <div style={{ background: '#f0fdf4', padding: 12, borderRadius: 4, marginBottom: 20 }}>
              <h4 style={{ color: '#15803d', fontWeight: 800, marginBottom: 6, fontSize: '0.9rem' }}>Quà tặng kèm theo:</h4>
              <ul style={{ paddingLeft: 18, fontSize: '0.85rem', color: '#166534' }}>
                {activeModalProduct.gifts.map((g, idx) => (
                  <li key={idx}>{g}</li>
                ))}
              </ul>
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
              <a 
                href="tel:0938988999" 
                style={{ 
                  flex: 1, 
                  background: 'var(--primary-red)', 
                  color: '#fff', 
                  padding: '12px', 
                  textAlign: 'center', 
                  borderRadius: 4, 
                  fontWeight: 800,
                  fontSize: '0.95rem'
                }}
              >
                GỌI MUA CẤU HÌNH NÀY (0938.988.999)
              </a>
            </div>
          </div>
        </div>
      )}

      {/* POPUP CHI TIẾT BÀI VIẾT TIN TỨC */}
      {activeNewsPost && (
        <div className="modal-overlay" onClick={() => setActiveNewsPost(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveNewsPost(null)}>
              <X size={24} />
            </button>
            <span style={{ fontSize: '0.8rem', color: '#64748b' }}>{activeNewsPost.date} • {activeNewsPost.author}</span>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f3057', margin: '8px 0 16px 0' }}>
              {activeNewsPost.title}
            </h2>
            <img 
              src={activeNewsPost.image} 
              alt={activeNewsPost.title} 
              style={{ width: '100%', height: 260, objectFit: 'cover', borderRadius: 4, marginBottom: 16 }} 
            />
            <div 
              style={{ fontSize: '0.92rem', lineHeight: 1.7, color: '#334155' }}
              dangerouslySetInnerHTML={{ __html: activeNewsPost.content }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
