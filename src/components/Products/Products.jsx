import React, { useState } from 'react';
import { 
  Monitor, 
  Cpu, 
  Server, 
  Tv, 
  Video, 
  HardDrive, 
  Check, 
  PhoneCall, 
  MessageSquare,
  ShieldCheck,
  ChevronRight,
  Flame,
  Clock
} from 'lucide-react';
import { businessConfig } from '../../config/business';
import { trackEvent } from '../../utils/analytics';
import './Products.css';

export const Products = () => {
  const [activeTab, setActiveTab] = useState('dell');

  const categories = [
    { id: 'dell', name: 'Máy Tính Đồng Bộ Dell', icon: <Cpu size={18} /> },
    { id: 'hp', name: 'Máy Tính Đồng Bộ HP', icon: <Server size={18} /> },
    { id: 'gaming', name: 'PC Gaming & Đồ Hoạ', icon: <Cpu size={18} /> },
    { id: 'lcd', name: 'Màn Hình LCD', icon: <Monitor size={18} /> },
    { id: 'other', name: 'Camera & Smart Tivi', icon: <Video size={18} /> },
  ];

  const productsData = {
    dell: [
      {
        id: 'dell-3050',
        name: 'Máy bộ Dell Optiplex 3050 SFF + LCD Dell 20 inch Học tập - Văn phòng',
        img: '/products/pc-dell-3050.jpg',
        specs: ['Hàng nhập USA nguyên zin, bền bỉ', 'CPU Core i3/i5/i7 thế hệ 6/7', 'RAM 8GB / 16GB, SSD NVMe siêu tốc', 'Cổng HDMI, DisplayPort, USB 3.0', 'Tặng kèm phím chuột + loa mini'],
        warranty: 'Bảo hành 12 tháng',
        badge: 'Bán chạy'
      },
      {
        id: 'dell-3070',
        name: 'Máy bộ Dell Optiplex 3070 SFF kèm màn Dell 20 inch Chuyên văn phòng',
        img: '/products/pc-dell-3070.jpg',
        specs: ['Thiết kế nhỏ gọn, tiết kiệm không gian', 'CPU Core i3/i5/i7 thế hệ 8/9', 'Đồ hoạ mượt mà, văn phòng kế toán đa nhiệm', 'Đầy đủ cổng kết nối HDMI / DP', 'Cài đặt sẵn Windows & phần mềm'],
        warranty: 'Bảo hành 12 tháng',
        badge: 'Ưa chuộng'
      },
      {
        id: 'dell-5070',
        name: 'Máy bộ Dell Optiplex 5070 SFF + Màn Dell 20 inch học tập ổn định',
        img: '/products/pc-dell-5070.jpg',
        specs: ['Dòng Optiplex doanh nghiệp siêu bền', 'Mainboard Intel Q-series tản nhiệt tốt', 'Hỗ trợ nâng cấp tối đa 64GB RAM', 'Vận hành êm ái 24/7', 'Bảo hành chu đáo tận tâm'],
        warranty: 'Bảo hành 12 tháng',
        badge: 'Bán chạy'
      },
      {
        id: 'aio-aoc',
        name: 'AOC All In One 24 Inch Tối Giản Văn Phòng Hiện Đại (Thay thế PC cồng kềnh)',
        img: '/products/pc-aio-aoc.png',
        specs: ['Màn hình 24 inch Full HD IPS tràn viền', 'Tích hợp tất cả trong 1, không dây nhợ', 'Chip Intel đời mới, RAM cao, SSD siêu tốc', 'Vận hành không nóng, không ồn', 'Tặng phím chuột không dây cao cấp'],
        warranty: 'Bảo hành 12 tháng',
        badge: 'Đặc biệt'
      }
    ],
    hp: [
      {
        id: 'hp-g4',
        name: 'Máy bộ HP 280 G4 SFF + LCD Dell 20 inch - Chuyên văn phòng',
        img: '/products/pc-hp-g4.jpg',
        specs: ['Dòng ProDesk doanh nghiệp cao cấp', 'CPU Intel Core thế hệ mới', 'Thiết kế khung kim loại chắc chắn', 'Cổng VGA, DisplayPort, USB 3.0', 'Tặng phím chuột + lót chuột'],
        warranty: 'Bảo hành 12 tháng',
        badge: 'Bán chạy'
      },
      {
        id: 'hp-g5',
        name: 'Máy bộ HP ProDesk 400 G5 SFF + LCD Dell 20 inch Chuyên học tập',
        img: '/products/pc-hp-g5.jpg',
        specs: ['Mainboard HP bền bỉ chạy liên tục', 'Khả năng xuất đa màn hình', 'SSD tốc độ cao mở máy 5 giây', 'Tối ưu cho văn phòng, bán hàng POS', 'Hỗ trợ cài đặt phần mềm từ xa trọn đời'],
        warranty: 'Bảo hành 12 tháng',
        badge: 'Ưa chuộng'
      },
      {
        id: 'hp-g6',
        name: 'Máy bộ HP ProDesk 400 G6 SFF + LCD 20 inch - Chuyên làm việc - giải trí',
        img: '/products/pc-hp-g6.jpg',
        specs: ['Form máy nhỏ gọn tinh tế để bàn làm việc', 'Nâng cấp mở rộng linh kiện dễ dàng', 'Nguồn chuẩn 80 Plus tiết kiệm điện', 'Đầy đủ kết nối âm thanh và mạng LAN Gbps', 'Lắp đặt tận nơi Phan Thiết'],
        warranty: 'Bảo hành 12 tháng',
        badge: 'Bán chạy'
      }
    ],
    gaming: [
      {
        id: 'gaming-b365',
        name: 'PC Gaming B365 + LCD 24 inch Cong - Chiến game mượt, hiệu năng cao',
        img: '/products/pc-gaming-b365.jpg',
        specs: ['Chiến mượt LOL, FIFA, Valorant, CS2', 'Card đồ hoạ rời VGA GTX / RX', 'Vỏ case LED RGB thoáng khí', 'Tản nhiệt tháp làm mát CPU', 'Màn hình tần số quét cao siêu mượt'],
        warranty: 'Bảo hành 12 - 24 tháng',
        badge: 'Hot Gaming'
      },
      {
        id: 'gaming-h310',
        name: 'PC Gaming H310 Tối Ưu (Intel Gen 8/9) + LCD 24 inch Gaming ngon',
        img: '/products/pc-gaming-h310.jpg',
        specs: ['Cấu hình chuẩn học tập & giải trí kinh tế', 'Nâng cấp VGA và RAM linh hoạt', 'Nguồn công suất thực chuẩn bền bỉ', 'SSD NVMe tốc độ cao', 'Tặng trọn bộ combo phím chuột gaming'],
        warranty: 'Bảo hành 12 - 24 tháng',
        badge: 'Giá tốt'
      }
    ],
    lcd: [
      {
        id: 'lcd-dell-p2417',
        name: 'Màn hình LCD DELL P2417H 23.8 inch IPS - Chuyên đồ hoạ & văn phòng',
        img: '/products/lcd-dell-p2417.png',
        specs: ['Tấm nền IPS góc nhìn rộng 178°', 'Chân đế công thái học xoay dọc Pivot 90°', 'Cổng DP, HDMI, VGA, Hub USB tích hợp', 'Công nghệ chống mỏi mắt ComfortView'],
        warranty: 'Bảo hành 12 tháng',
        badge: 'Đồ họa'
      },
      {
        id: 'lcd-hp-24',
        name: 'Màn hình LCD HP P24h G4 23.8 inch viền siêu mỏng',
        img: '/products/lcd-hp-24.png',
        specs: ['Màn hình tràn 3 cạnh hiện đại', 'Độ phân giải Full HD sắc nét', 'Màu sắc trung thực, phù hợp văn phòng', 'Cổng kết nối đa dạng HDMI, VGA, DP'],
        warranty: 'Bảo hành 12 tháng',
        badge: 'Văn phòng'
      },
      {
        id: 'lcd-dell-24',
        name: 'Màn hình LCD DELL SE2416HM 24 inch Full HD IPS',
        img: '/products/lcd-dell-24.png',
        specs: ['Thiết kế sang trọng, chân đế kim loại', 'Tấm nền IPS chống chói', 'Độ bền tiêu chuẩn Dell', 'Tiết kiệm năng lượng'],
        warranty: 'Bảo hành 12 tháng',
        badge: 'Bền bỉ'
      }
    ],
    other: [
      {
        id: 'camera-ip',
        name: 'Bộ Camera Quan Sát An Ninh Gia Đình & Cửa Hàng (Wifi & Có Dây)',
        img: '/camera-install.jpg',
        specs: ['Hình ảnh sắc nét 2K / Full HD', 'Xoay 360 độ, đàm thoại 2 chiều', 'Báo động hồng ngoại ban đêm', 'Xem mượt trên điện thoại qua App', 'Bảo hành lắp đặt tận nơi'],
        warranty: 'Bảo hành 24 tháng',
        badge: 'An ninh'
      },
      {
        id: 'tv-sua-chua',
        name: 'Dịch Vụ Sửa Chữa Smart Tivi Sony - Samsung - LG Tại Nhà',
        img: '/tv-setup.jpg',
        specs: ['Sửa Tivi mất nguồn, chớp màn hình, hỏng LED', 'Linh kiện chính hãng 100%', 'Báo đúng giá trước khi sửa chữa', 'Kiểm tra tận nhà tại Phan Thiết - Tiến Thành', 'Bảo hành dài hạn sau sửa'],
        warranty: 'Bảo hành 6 - 12 tháng',
        badge: 'Tận nơi'
      }
    ]
  };

  const currentProducts = productsData[activeTab] || [];

  const handleContact = (productName) => {
    trackEvent('product_click', { product: productName });
    if (businessConfig.zalo) {
      window.open(businessConfig.zalo, '_blank');
    } else {
      window.location.href = `tel:${businessConfig.phone}`;
    }
  };

  return (
    <section id="products" className="section products-section">
      <div className="container">
        <div className="lv-header-row">
          <div className="lv-header-left">
            <span className="lv-tag"><Flame size={15} /> SẢN PHẨM NỔI BẬT</span>
            <h2 className="lv-title">MÁY TÍNH ĐỒNG BỘ & THIẾT BỊ ĐIỆN TỬ</h2>
            <p className="lv-subtitle">Ảnh thực tế từng bộ máy kèm màn hình • Hàng tuyển chọn kiểm tra kỹ càng trước khi giao</p>
          </div>
          <div className="lv-header-right">
            <a href={`tel:${businessConfig.phone}`} className="lv-hotline-badge">
              <PhoneCall size={16} />
              <span>Hotline kỹ thuật: <strong>{businessConfig.phoneDisplay}</strong></span>
            </a>
          </div>
        </div>

        {/* LongVu style 2-col layout: Sidebar categories on Desktop, Horizontal Pill on Mobile */}
        <div className="lv-shop-container">
          <aside className="lv-category-sidebar">
            <div className="sidebar-title">
              <span>DANH MỤC SẢN PHẨM</span>
            </div>
            <ul className="sidebar-list">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <button
                    className={`sidebar-btn ${activeTab === cat.id ? 'active' : ''}`}
                    onClick={() => setActiveTab(cat.id)}
                  >
                    <span className="sidebar-btn-icon">{cat.icon}</span>
                    <span className="sidebar-btn-text">{cat.name}</span>
                    <ChevronRight size={16} className="sidebar-arrow" />
                  </button>
                </li>
              ))}
            </ul>

            <div className="sidebar-support-box">
              <p className="support-label">CẦN TƯ VẤN CẤU HÌNH?</p>
              <p className="support-desc">Gửi nhu cầu & mức ngân sách để nhận cấu hình phù hợp nhất.</p>
              <a 
                href={businessConfig.zalo} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-sidebar-zalo"
              >
                <MessageSquare size={16} />
                <span>Chat Zalo báo giá ngay</span>
              </a>
            </div>
          </aside>

          {/* Product Cards Grid */}
          <main className="lv-product-area">
            <div className="lv-product-grid">
              {currentProducts.map((item) => (
                <div key={item.id} className="lv-card">
                  {item.badge && <span className="lv-card-badge">{item.badge}</span>}
                  
                  <div className="lv-card-thumb">
                    <img
                      src={item.img}
                      alt={item.name}
                      width="360"
                      height="240"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div className="lv-card-body">
                    <h3 className="lv-card-name" title={item.name}>{item.name}</h3>

                    <div className="lv-card-price-row">
                      <span className="lv-price-label">Giá bán:</span>
                      <span className="lv-price-value">Liên hệ</span>
                    </div>

                    <ul className="lv-card-specs">
                      {item.specs.slice(0, 4).map((spec, i) => (
                        <li key={i}>
                          <Check size={14} className="spec-check" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="lv-card-warranty">
                      <ShieldCheck size={14} />
                      <span>{item.warranty}</span>
                      <span className="dot-sep">•</span>
                      <Clock size={14} />
                      <span>Có sẵn máy</span>
                    </div>

                    <div className="lv-card-actions">
                      <button
                        className="btn-lv-contact"
                        onClick={() => handleContact(item.name)}
                      >
                        <MessageSquare size={15} />
                        <span>Báo giá qua Zalo</span>
                      </button>
                      <a
                        href={`tel:${businessConfig.phone}`}
                        className="btn-lv-call"
                        title="Gọi trực tiếp"
                      >
                        <PhoneCall size={15} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};
