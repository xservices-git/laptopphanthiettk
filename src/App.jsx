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
  X 
} from 'lucide-react';
import { categories, products } from './data/products';
import './App.css';

function App() {
  const [selectedCat, setSelectedCat] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProduct, setActiveModalProduct] = useState(null);

  const filteredProducts = products.filter((p) => {
    const matchCat = selectedCat === 'all' || p.category === selectedCat;
    const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const formatVND = (amount) => {
    return new Intl.NumberFormat('vi-VN').format(amount) + ' đ';
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
            <span>Hỗ trợ kỹ thuật: <strong>0938.988.999</strong></span>
            <span>Kiểm tra đơn hàng</span>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER */}
      <header className="main-header">
        <div className="container">
          <div className="header-row">
            {/* BRAND LOGO */}
            <div className="brand-box">
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
                placeholder="Tìm máy tính Dell, HP, Laptop, Core i5, i7..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
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

      {/* 3. NAVIGATION BAR */}
      <nav className="nav-bar">
        <div className="container">
          <div className="nav-row">
            <div className="category-dropdown-btn">
              <Menu size={20} />
              <span>DANH MỤC SẢN PHẨM</span>
            </div>
            <ul className="nav-links">
              <li className={selectedCat === 'all' ? 'active' : ''}>
                <a href="#all" onClick={() => setSelectedCat('all')}>Trang chủ</a>
              </li>
              <li><a href="#dell" onClick={() => setSelectedCat('dell-dongbo')}>Máy bộ Dell</a></li>
              <li><a href="#hp" onClick={() => setSelectedCat('hp-dongbo')}>Máy bộ HP</a></li>
              <li><a href="#laptop" onClick={() => setSelectedCat('laptop-cu')}>Laptop USA</a></li>
              <li><a href="#gaming" onClick={() => setSelectedCat('gaming-pc')}>PC Gaming</a></li>
              <li><a href="#camera" onClick={() => setSelectedCat('camera-tv')}>Camera & Smart TV</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* 4. HERO SECTION WITH SIDEBAR MENU */}
      <div className="container hero-wrapper">
        <div className="hero-grid">
          {/* Sidebar Menu tương tự longvu.vn */}
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

          {/* Banner quảng cáo công nghệ */}
          <div className="banner-main">
            <img src="/banner-slider-1.jpg" alt="Máy tính văn phòng" className="banner-img" />
            <div className="banner-content">
              <span className="banner-tag">ƯU ĐÃI THÁNG 9</span>
              <h2 className="banner-title">MÁY TÍNH ĐỒNG BỘ DELL & HP NHẬP KHẨU</h2>
              <p className="banner-desc">
                Bền bỉ hoạt động 24/7. Trọn bộ kèm màn hình LCD Full HD giá chỉ từ 6.xxx.xxx đ. Tặng phím chuột + loa vi tính tận nhà!
              </p>
              <a href="tel:0938988999" className="banner-cta-btn">
                <Phone size={18} /> GỌI ĐẶT HÀNG NGAY
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 5. POLICY COMMITMENTS */}
      <div className="container">
        <div className="policy-bar">
          <div className="policy-item">
            <Truck size={28} className="policy-icon" />
            <div>
              <div className="policy-title">Giao Hàng Miễn Phí</div>
              <div className="policy-sub">Lắp đặt tận nhà tại Phan Thiết</div>
            </div>
          </div>
          <div className="policy-item">
            <ShieldCheck size={28} className="policy-icon" />
            <div>
              <div className="policy-title">Bảo Hành 12 - 24 Tháng</div>
              <div className="policy-sub">Lỗi 1 đổi 1 nhanh chóng tận tâm</div>
            </div>
          </div>
          <div className="policy-item">
            <Wrench size={28} className="policy-icon" />
            <div>
              <div className="policy-title">Kỹ Thuật Tận Nơi</div>
              <div className="policy-sub">Cài win & phần mềm trọn đời</div>
            </div>
          </div>
          <div className="policy-item">
            <Clock size={28} className="policy-icon" />
            <div>
              <div className="policy-title">Hỗ Trợ Trả Góp 0%</div>
              <div className="policy-sub">Thủ tục đơn giản lấy máy ngay</div>
            </div>
          </div>
        </div>
      </div>

      {/* 6. PRODUCT SHOWCASE */}
      <main className="container">
        <div className="section-header-box">
          <div className="section-title">
            <Gift size={20} />
            <span>SẢN PHẨM BÁN CHẠY - CÓ KHUYẾN MÃI</span>
          </div>
          <div style={{ fontSize: '0.85rem' }}>Hiển thị {filteredProducts.length} sản phẩm</div>
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
                <span className="price-current">{formatVND(p.price)}</span>
                {p.oldPrice && <span className="price-old">{formatVND(p.oldPrice)}</span>}
              </div>

              {/* Specifications List tương tự longvu.vn */}
              <ul className="product-specs-list">
                {p.specs.slice(0, 4).map((spec, i) => (
                  <li key={i}>
                    <Check size={14} className="spec-check" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>

              {/* Promotion / Gifts Box */}
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
                  onClick={() => setActiveModalProduct(p)}
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

      {/* 7. FOOTER */}
      <footer className="main-footer">
        <div className="container footer-grid">
          <div className="footer-col">
            <h4>LAPTOP PHAN THIẾT TK</h4>
            <p><strong>Cửa hàng:</strong> 85 Nguyễn Phúc Nguyên, P. Phú Thủy, TP. Phan Thiết, Bình Thuận</p>
            <p><strong>Hotline / Zalo:</strong> 0938.988.999 - 0949.951.951</p>
            <p><strong>Email:</strong> kinhdoanh@laptopphanthiettk.vn</p>
            <p>Chuyên cung cấp máy tính đồng bộ Dell, HP, máy trạm Workstation nhập khẩu USA, laptop doanh nhân, lắp ráp PC gaming đồ hoạ và giải pháp an ninh camera.</p>
          </div>

          <div className="footer-col">
            <h4>DANH MỤC HÀNG HÓA</h4>
            <ul className="footer-links">
              <li><a href="#dell">Máy bộ Dell Optiplex</a></li>
              <li><a href="#hp">Máy tính đồng bộ HP</a></li>
              <li><a href="#laptop">Laptop văn phòng nhập khẩu</a></li>
              <li><a href="#pc">Máy tính ráp sẵn Gaming</a></li>
              <li><a href="#camera">Camera an ninh & Smart TV</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>CHÍNH SÁCH BÁN HÀNG</h4>
            <ul className="footer-links">
              <li><a href="#">Chính sách bảo hành 12 tháng</a></li>
              <li><a href="#">Giao hàng & lắp đặt tận nơi</a></li>
              <li><a href="#">Hướng dẫn mua trả góp 0%</a></li>
              <li><a href="#">Chính sách đổi trả trong 7 ngày</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>TỔNG ĐÀI HỖ TRỢ</h4>
            <p>Kinh doanh: <strong>0938.988.999</strong></p>
            <p>Kỹ thuật & bảo hành: <strong>0949.951.951</strong></p>
            <p>Thời gian làm việc: 8:00 - 20:00 tất cả các ngày trong tuần</p>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            © 2026 LAPTOP PHAN THIẾT TK - Hệ Thống Máy Tính & Thiết Bị Số Chuyên Nghiệp.
          </div>
        </div>
      </footer>

      {/* 8. PRODUCT DETAIL MODAL */}
      {activeModalProduct && (
        <div className="modal-overlay" onClick={() => setActiveModalProduct(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveModalProduct(null)}>
              <X size={24} />
            </button>
            <div className="modal-product-header">
              <img src={activeModalProduct.image} alt={activeModalProduct.name} className="modal-thumb" />
              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800 }}>{activeModalProduct.name}</h3>
                <div style={{ color: 'var(--primary-red)', fontSize: '1.3rem', fontWeight: 800, marginTop: 6 }}>
                  {formatVND(activeModalProduct.price)}
                </div>
              </div>
            </div>

            <div style={{ marginBottom: 16 }}>
              <h4 style={{ fontWeight: 800, marginBottom: 8 }}>Chi tiết thông số & cấu hình:</h4>
              <ul style={{ paddingLeft: 18, fontSize: '0.9rem', lineHeight: 1.6 }}>
                {activeModalProduct.specs.map((s, idx) => (
                  <li key={idx}>{s}</li>
                ))}
              </ul>
            </div>

            <div style={{ background: '#f0fdf4', padding: 12, borderRadius: 4, marginBottom: 20 }}>
              <h4 style={{ color: '#15803d', fontWeight: 800, marginBottom: 6 }}>Quà tặng kèm theo máy:</h4>
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
                  fontWeight: 800 
                }}
              >
                GỌI ĐẶT HÀNG NGAY (0938.988.999)
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
