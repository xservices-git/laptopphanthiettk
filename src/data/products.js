export const categories = [
  { id: 'all', name: 'TẤT CẢ SẢN PHẨM' },
  { id: 'dell-dongbo', name: 'MÁY TÍNH ĐỒNG BỘ DELL', sub: ['Dell Optiplex SFF', 'Dell Optiplex Micro', 'Dell Vostro'] },
  { id: 'hp-dongbo', name: 'MÁY TÍNH ĐỒNG BỘ HP', sub: ['HP ProDesk Gen 4', 'HP ProDesk Gen 6 & 7', 'HP ProDesk Gen 8 & 9'] },
  { id: 'laptop-cu', name: 'LAPTOP NHẬP KHẨU USA', sub: ['Dell Latitude', 'HP Elitebook', 'ThinkPad'] },
  { id: 'gaming-pc', name: 'MÁY TÍNH RÁP SẴN / GAMING', sub: ['PC Văn Phòng', 'PC Gaming - Đồ Hoạ', 'All In One'] },
  { id: 'workstation', name: 'MÁY TRẠM WORKSTATION', sub: ['Workstation Dell', 'Workstation HP', 'Workstation Lenovo'] },
  { id: 'screen-lcd', name: 'MÀN HÌNH LCD', sub: ['LCD Dell 20 - 24 inch', 'LCD Asus IPS', 'LCD HP Viền mỏng'] },
  { id: 'camera-tv', name: 'CAMERA AN NINH & SMART TV', sub: ['Camera gia đình', 'Camera cửa hàng', 'Giá treo & LED TV'] }
];

export const products = [
  {
    id: 1,
    category: 'dell-dongbo',
    badge: 'Bán chạy',
    promoBadge: 'Có khuyến mãi',
    name: 'Máy bộ Dell Optiplex 3050 SFF + LCD DELL 20 inch Học tập, Văn phòng',
    image: '/dell-optiplex-3050.jpg',
    price: 7150000,
    oldPrice: 8200000,
    specs: [
      'Hàng nhập USA nguyên zin, like new full box. Bảo hành 12 tháng',
      'Thuộc dòng Dell Optiplex siêu bền, chạy 24/7 ổn định',
      'Thiết kế dạng nằm / đứng SFF nhỏ gọn tiết kiệm diện tích bàn làm việc',
      'Cấu hình Intel Core i5 thế hệ mới, RAM 8GB/16GB DDR4, SSD NVMe siêu tốc',
      'Đầy đủ cổng kết nối HDMI, DisplayPort, USB 3.0, LAN Gigabit',
      'Tặng kèm bản quyền Windows 10/11 Pro vĩnh viễn'
    ],
    gifts: [
      'Tặng combo phím chuột văn phòng cao cấp',
      'Tặng lót chuột công thái học',
      'Miễn phí giao hàng & lắp đặt tận nơi tại Phan Thiết'
    ]
  },
  {
    id: 2,
    category: 'dell-dongbo',
    badge: 'Bán chạy',
    promoBadge: 'Có khuyến mãi',
    name: 'Máy bộ Dell Optiplex 7050 Micro siêu nhỏ gọn + LCD Dell 22 inch IPS',
    image: '/dell-optiplex-3050.jpg',
    price: 7850000,
    oldPrice: 8900000,
    specs: [
      'Dòng Micro Mini PC bằng lòng bàn tay, gắn sau lưng màn hình cực gọn',
      'Intel Core i5-7500T, RAM 16GB, SSD NVMe 256GB tốc độ cao',
      'Có sẵn Wi-Fi + Bluetooth tích hợp không cần cắm dây mạng',
      'Bảo hành 1 đổi 1 trong 12 tháng tại cửa hàng'
    ],
    gifts: [
      'Tặng bộ thu Wi-Fi băng tần kép + Chuột không dây',
      'Cài đặt sẵn full ứng dụng văn phòng theo yêu cầu'
    ]
  },
  {
    id: 3,
    category: 'hp-dongbo',
    badge: 'Khuyên dùng',
    promoBadge: 'Có khuyến mãi',
    name: 'Máy bộ HP ProDesk 400 G6 SFF + LCD HP 22 inch Full HD',
    image: '/hp-prodesk-400.jpg',
    price: 7450000,
    oldPrice: 8500000,
    specs: [
      'Hàng nhập khẩu like new, chuẩn văn phòng doanh nghiệp',
      'Bo mạch Intel B360 hỗ trợ CPU Core i3/i5/i7 thế hệ 8 & 9',
      'Bộ nguồn chuẩn 80 Plus tiêu chuẩn tiết kiệm điện năng',
      'Âm thanh vòm tích hợp trong thùng máy tiện lợi'
    ],
    gifts: [
      'Tặng combo bàn phím chuột HP chính hãng',
      'Lắp đặt hoàn thiện, hướng dẫn sử dụng tận nhà'
    ]
  },
  {
    id: 4,
    category: 'laptop-cu',
    badge: 'Hot',
    promoBadge: 'Giảm sốc',
    name: 'Laptop Dell Latitude 7490 Core i5 / RAM 8GB / SSD 256GB / 14 inch FHD IPS',
    image: '/laptop-dell-vostro.jpg',
    price: 6500000,
    oldPrice: 7900000,
    specs: [
      'Vỏ hợp kim Carbon Magie siêu nhẹ 1.4kg, bền chuẩn quân đội Mỹ',
      'Bàn phím gõ cực êm có đèn nền làm việc ban đêm',
      'Pin zin sử dụng liên tục 4-5 tiếng cho công việc di động',
      'Bảo hành toàn diện 06 - 12 tháng, bao test đổi mới'
    ],
    gifts: [
      'Tặng Balo laptop chuyên dụng chống sốc',
      'Tặng chuột không dây cao cấp + Lót chuột'
    ]
  },
  {
    id: 5,
    category: 'gaming-pc',
    badge: 'Hiệu năng cao',
    promoBadge: 'Trả góp 0%',
    name: 'Bộ PC Gaming Core i5 12400F • VGA GTX 1660 Super • Vỏ Bể Cá LED RGB',
    image: '/pc-gaming-rgb.jpg',
    price: 11800000,
    oldPrice: 13500000,
    specs: [
      'Cân mượt GTA V, FiFa Online 4, Valorant, PUBG, CS2 và Edit Video Premiere',
      'Mainboard B760, CPU 6 nhân 12 luồng thế hệ mới nhất',
      'Nguồn 600W công suất thực chuẩn Bronze an toàn',
      'Linh kiện bảo hành 36 tháng chính hãng toàn quốc'
    ],
    gifts: [
      'Tặng combo bàn phím cơ led + Chuột Gaming cao cấp',
      'Tặng kèm 4 quạt LED RGB đổi màu tự động'
    ]
  },
  {
    id: 6,
    category: 'gaming-pc',
    badge: 'Tối giản',
    promoBadge: 'Bán chạy',
    name: 'Máy tính All-In-One 24 inch: Tích hợp CPU + Màn hình Full HD không dây nhợ',
    image: '/aio-office.jpg',
    price: 6850000,
    oldPrice: 7900000,
    specs: [
      'Giải pháp tối giản cho quầy thu ngân, phòng khám, văn phòng công ty',
      'Màn hình 24 inch sắc nét, có sẵn Loa + Webcam học online/họp từ xa',
      'Cấu hình Core i5, RAM 16GB, SSD 256GB lướt web mở 30 tab mượt mà',
      'Chỉ cắm duy nhất 1 sợi dây nguồn là sử dụng ngay'
    ],
    gifts: [
      'Tặng phím chuột không dây đồng bộ',
      'Bảo hành 12 tháng tận nơi'
    ]
  },
  {
    id: 7,
    category: 'workstation',
    badge: 'Đồ hoạ chuyên sâu',
    promoBadge: 'Bảo hành 24T',
    name: 'Máy trạm Workstation Dell Precision T3620 Xeon E3 / VGA Quadro / RAM 16GB ECC',
    image: '/workstation-xeon.jpg',
    price: 8900000,
    oldPrice: 10500000,
    specs: [
      'Chuyên Render AutoCad, Revit, SketchUp, 3DsMax chạy liên tục nhiều ngày',
      'Bộ nhớ RAM ECC tự sửa lỗi, không sợ sập nguồn khi đang làm dự án',
      'Card đồ hoạ chuyên dụng Quadro xuất màu chuẩn xác',
      'Bo nguồn máy trạm đạt chuẩn 80 Plus Gold chịu tải cực cao'
    ],
    gifts: [
      'Tặng bàn phím chuột Dell chính hãng',
      'Hỗ trợ cài đặt đầy đủ các phần mềm đồ họa trọn đời'
    ]
  },
  {
    id: 8,
    category: 'screen-lcd',
    badge: 'Chính hãng',
    promoBadge: 'Giảm sốc',
    name: 'Màn hình LCD Dell Professional P2419H 24 inch IPS tràn viền xoay dọc',
    image: '/screen-dell-24.jpg',
    price: 2650000,
    oldPrice: 3200000,
    specs: [
      'Tấm nền IPS cao cấp góc nhìn 178 độ không đổi màu',
      'Chân đế công thái học nâng hạ độ cao xoay dọc 90 độ tiện đọc code / lướt TikTok',
      'Cổng HDMI, DisplayPort, VGA và Hub 4 cổng USB tiện lợi',
      'Bảo hành 1 đổi 1 nhanh chóng'
    ],
    gifts: [
      'Tặng cáp HDMI/DisplayPort chuẩn',
      'Miễn phí test điểm chết tại chỗ'
    ]
  },
  {
    id: 9,
    category: 'camera-tv',
    badge: 'Lắp đặt tận nơi',
    promoBadge: 'Ưu đãi trọn gói',
    name: 'Trọn gói Bộ Camera An Ninh Gia Đình & Cửa Hàng Dahua / Imou xem điện thoại 24/7',
    image: '/camera-dahua.jpg',
    price: 1850000,
    oldPrice: 2400000,
    specs: [
      'Camera độ phân giải 2K sắc nét, có mic thu âm và còi báo động chống trộm',
      'Hồng ngoại quay ban đêm rõ như ban ngày',
      'Lưu trữ xem lại qua điện thoại dễ dàng mọi lúc mọi nơi',
      'Thi công dây gọn gàng thẩm mỹ, bảo hành tận nhà 24 tháng'
    ],
    gifts: [
      'Tặng thẻ nhớ chuyên dụng ghi hình liên tục',
      'Miễn phí công khảo sát và lắp đặt hoàn thiện'
    ]
  }
];
