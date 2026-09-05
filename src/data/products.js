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
  // --- MÁY BỘ DELL ---
  {
    id: 1,
    category: 'dell-dongbo',
    badge: 'Bán chạy',
    promoBadge: 'Có khuyến mãi',
    name: 'Máy bộ Dell Optiplex 3050 SFF + LCD DELL 20 inch Học tập, Văn phòng',
    image: '/pc-dell-3050.jpg',
    price: 7150000,
    oldPrice: 8200000,
    specs: [
      'Intel Core i5-6500 (3.2GHz turbo 3.6GHz, 4 nhân 4 luồng)',
      'RAM 8GB DDR4 bus 2400MHz (nâng cấp tối đa 32GB)',
      'Ổ cứng SSD NVMe 256GB siêu nhanh khởi động máy 5 giây',
      'Kèm màn hình LCD Dell 20 inch chống chói chuẩn HD+',
      'Hàng nhập USA zin 100%, bảo hành toàn diện 12 tháng'
    ],
    gifts: [
      'Tặng combo phím chuột văn phòng cao cấp',
      'Tặng lót chuột công thái học',
      'Miễn phí giao hàng & lắp đặt tận nơi tại Phan Thiết'
    ],
    configs: [
      { name: 'Core i3 / 8GB RAM / SSD 256GB / LCD 20"', price: 6200000 },
      { name: 'Core i5 / 8GB RAM / SSD 256GB / LCD 20" (Mặc định)', price: 7150000 },
      { name: 'Core i7 / 16GB RAM / SSD 512GB / LCD 22" IPS', price: 9200000 }
    ]
  },
  {
    id: 2,
    category: 'dell-dongbo',
    badge: 'Bán chạy',
    promoBadge: 'Khuyên dùng',
    name: 'Máy bộ Dell Optiplex 7050 Micro Mini PC + Màn Dell 22 inch IPS',
    image: '/pc-dell-3050.jpg',
    price: 7850000,
    oldPrice: 8900000,
    specs: [
      'Intel Core i5-7500T (tiết kiệm điện năng, chạy cực êm)',
      'RAM 16GB DDR4 đa nhiệm 30-40 tab Chrome không giật',
      'SSD M.2 NVMe 256GB + khe chờ nâng cấp HDD',
      'Tích hợp sẵn Wi-Fi AC 2 băng tần + Bluetooth',
      'Kích thước nhỏ gọn bỏ vừa balo hoặc treo lưng màn hình'
    ],
    gifts: [
      'Tặng bộ chuột phím không dây',
      'Tặng túi chống sốc Mini PC'
    ],
    configs: [
      { name: 'Core i5 / 8GB RAM / SSD 256GB', price: 6900000 },
      { name: 'Core i5 / 16GB RAM / SSD 256GB (Mặc định)', price: 7850000 },
      { name: 'Core i7 / 16GB RAM / SSD 512GB', price: 9500000 }
    ]
  },
  {
    id: 3,
    category: 'dell-dongbo',
    badge: 'Đời mới',
    promoBadge: 'Bán chạy',
    name: 'Máy bộ Dell Optiplex 3070 SFF Core i5 Gen 9 + LCD Dell 24 inch tràn viền',
    image: '/pc-dell-3050.jpg',
    price: 9450000,
    oldPrice: 10800000,
    specs: [
      'Intel Core i5-9500 thế hệ 9 (6 nhân 6 luồng 4.4GHz)',
      'RAM 16GB DDR4 bus 2666MHz tốc độ cao',
      'SSD NVMe 512GB tốc độ đọc 2400MB/s',
      'Màn hình LCD Dell 24 inch IPS tràn viền siêu sắc nét',
      'Win 11 Pro bản quyền vĩnh viễn'
    ],
    gifts: [
      'Tặng loa vi tính 2.0 âm thanh sống động',
      'Tặng phím chuột cơ văn phòng'
    ],
    configs: [
      { name: 'i5 9400 / 8GB / 256GB SSD', price: 8200000 },
      { name: 'i5 9500 / 16GB / 512GB SSD (Mặc định)', price: 9450000 },
      { name: 'i7 9700 / 32GB / 512GB SSD', price: 12500000 }
    ]
  },

  // --- MÁY BỘ HP ---
  {
    id: 4,
    category: 'hp-dongbo',
    badge: 'Khuyên dùng',
    promoBadge: 'Có khuyến mãi',
    name: 'Máy bộ HP ProDesk 400 G6 SFF + LCD HP 22 inch Full HD Doanh Nghiệp',
    image: '/pc-hp-g6.jpg',
    price: 7450000,
    oldPrice: 8500000,
    specs: [
      'Intel Core i5-8500 (6 nhân 6 luồng xung nhịp 4.1GHz)',
      'RAM 8GB DDR4 thế hệ mới, chạy cực mát',
      'SSD 256GB tốc độ cao, khởi động tức thì',
      'Nguồn HP chuẩn 80 Plus tiêu chuẩn tiết kiệm 30% điện',
      'Màn hình HP 22 inch Full HD chống lóa bảo vệ mắt'
    ],
    gifts: [
      'Tặng combo phím chuột HP chính hãng',
      'Cài đặt phần mềm kế toán, văn phòng miễn phí'
    ],
    configs: [
      { name: 'i3 8100 / 8GB / 256GB SSD', price: 6300000 },
      { name: 'i5 8500 / 8GB / 256GB SSD (Mặc định)', price: 7450000 },
      { name: 'i5 8500 / 16GB / 512GB SSD', price: 8350000 }
    ]
  },
  {
    id: 5,
    category: 'hp-dongbo',
    badge: 'Giá tốt',
    promoBadge: 'Học sinh',
    name: 'Máy bộ HP ProDesk 400 G4 SFF + Màn hình HP 20 inch Bền bỉ',
    image: '/pc-hp-g6.jpg',
    price: 5200000,
    oldPrice: 5900000,
    specs: [
      'Intel Core i3-7100 / RAM 8GB DDR4 / SSD 128GB + HDD 500GB',
      'Màn hình 20 inch sắc nét, góc nhìn rộng',
      'Cổng VGA, DisplayPort, USB 3.0 tiện xuất 2 màn hình cùng lúc',
      'Thích hợp quầy thu ngân, quản lý kho, học sinh học online'
    ],
    gifts: [
      'Tặng lót chuột cỡ lớn',
      'Miễn phí lắp đặt tận nơi'
    ],
    configs: [
      { name: 'i3 7100 / 8GB / 128GB + 500GB', price: 5200000 },
      { name: 'i5 7400 / 8GB / 256GB SSD', price: 5900000 }
    ]
  },

  // --- LAPTOP NHẬP KHẨU ---
  {
    id: 6,
    category: 'laptop-cu',
    badge: 'Hot',
    promoBadge: 'Bền bỉ',
    name: 'Laptop Lenovo ThinkPad T480 - Siêu Bền Chuẩn Quân Đội Mỹ',
    image: '/laptop-thinkpad-t480.jpg',
    price: 6800000,
    oldPrice: 7900000,
    specs: [
      'Intel Core i5-8250U 4 nhân 8 luồng siêu khỏe',
      'RAM 16GB DDR4, SSD NVMe 256GB',
      'Màn hình 14 inch Full HD IPS chống mỏi mắt',
      'Bàn phím ThinkPad gõ sướng nhất thế giới, có bảo mật vân tay',
      '2 pin trong ngoài xài thoải mái 5 - 6 tiếng'
    ],
    gifts: [
      'Tặng Balo chống sốc cao cấp',
      'Tặng chuột không dây Fuhlen + Lót chuột'
    ],
    configs: [
      { name: 'i5 8250U / 8GB / 256GB FHD', price: 6200000 },
      { name: 'i5 8250U / 16GB / 256GB FHD (Mặc định)', price: 6800000 },
      { name: 'i7 8550U / 16GB / 512GB FHD', price: 8200000 }
    ]
  },
  {
    id: 7,
    category: 'laptop-cu',
    badge: 'Doanh nhân',
    promoBadge: 'Sang trọng',
    name: 'Laptop Dell XPS 13 9360 Viền Vô Cực Kim Loại Nguyên Khối',
    image: '/laptop-dell-xps.jpg',
    price: 8900000,
    oldPrice: 10500000,
    specs: [
      'Intel Core i5-8250U / RAM 8GB / SSD 256GB NVMe',
      'Màn hình InfinityEdge 13.3 inch Full HD IPS viền siêu mỏng',
      'Vỏ nhôm CNC và sợi carbon chỉ nặng 1.2kg tiện mang đi công tác',
      'Đèn bàn phím làm việc ban đêm, pin 4 - 6 tiếng'
    ],
    gifts: [
      'Tặng túi chống sốc cao cấp da',
      'Tặng chuột Bluetooth không dây'
    ],
    configs: [
      { name: 'i5 8250U / 8GB / 256GB FHD', price: 8900000 },
      { name: 'i7 8550U / 16GB / 512GB Màn 3K Cảm ứng', price: 11500000 }
    ]
  },
  {
    id: 8,
    category: 'laptop-cu',
    badge: 'Chuyên đồ hoạ',
    promoBadge: 'Trả góp 0%',
    name: 'Laptop Gaming ASUS ROG Strix G15 - Core i7 / RTX 3050 / 144Hz',
    image: '/laptop-gaming-asus.jpg',
    price: 15800000,
    oldPrice: 17900000,
    specs: [
      'Intel Core i7-10870H 8 nhân 16 luồng xung nhịp 5.0GHz',
      'RAM 16GB DDR4 3200MHz, SSD NVMe 512GB',
      'Card đồ hoạ rời NVIDIA GeForce RTX 3050 4GB chiến mọi game AAA',
      'Màn hình 15.6 inch 144Hz viền mỏng mượt mà không xé hình',
      'Hệ thống tản nhiệt kim loại lỏng Liquid Metal mát lạnh'
    ],
    gifts: [
      'Tặng balo ROG Gaming chuyên dụng',
      'Tặng chuột gaming RGB DareU + lót chuột speed'
    ],
    configs: [
      { name: 'i7 / 16GB / 512GB / RTX 3050 144Hz (Mặc định)', price: 15800000 },
      { name: 'i7 / 32GB / 1TB SSD / RTX 3060 144Hz', price: 19500000 }
    ]
  },

  // --- PC GAMING / VĂN PHÒNG ---
  {
    id: 9,
    category: 'gaming-pc',
    badge: 'Hot nhất 2026',
    promoBadge: 'Bể Cá LED RGB',
    name: 'Bộ PC Gaming Core i5 12400F • VGA GTX 1660 Super • Vỏ Bể Cá LED RGB',
    image: '/pc-gaming-b365.jpg',
    price: 11800000,
    oldPrice: 13500000,
    specs: [
      'CPU Intel Core i5 12400F (6 nhân 12 luồng) thế hệ 12 siêu mạnh',
      'Mainboard B760M gaming đầy đủ tản nhiệt VRM',
      'RAM 16GB DDR4 Kingston Fury Beast tản nhiệt thép',
      'VGA NVIDIA GeForce GTX 1660 Super 6GB GDDR6',
      'SSD M2 NVMe 500GB Gen 4 siêu tốc 3500MB/s',
      'Vỏ case Bể Cá vô cực kèm 5 quạt LED RGB đổi màu'
    ],
    gifts: [
      'Tặng bộ bàn phím cơ quang học + Chuột Gaming',
      'Bảo hành 36 tháng linh kiện chính hãng'
    ],
    configs: [
      { name: 'i5 12400F / 16GB / GTX 1660 Super (Mặc định)', price: 11800000 },
      { name: 'i5 13400F / 32GB / RTX 3060 12GB', price: 16900000 },
      { name: 'i7 13700F / 32GB / RTX 4060 8GB', price: 23500000 }
    ]
  },
  {
    id: 10,
    category: 'gaming-pc',
    badge: 'Chiến Game AAA',
    promoBadge: 'Cấu hình khủng',
    name: 'Bộ PC Cao Cấp Core i7 13700K • Tản Nhiệt Nước 360 • RTX 4070 12GB',
    image: '/pc-gaming-h310.jpg',
    price: 28500000,
    oldPrice: 31900000,
    specs: [
      'Core i7-13700K 16 nhân 24 luồng xung 5.4GHz ép xung cực mạnh',
      'Tản nhiệt nước AIO 360 ARGB mát rượi',
      'RAM 32GB DDR5 Corsair Vengeance 5600MHz',
      'VGA MSI Gaming RTX 4070 12GB GDDR6X',
      'SSD Samsung 980 Pro 1TB NVMe Gen 4 (7000MB/s)',
      'Nguồn 750W 80 Plus Gold chuẩn ATX 3.0'
    ],
    gifts: [
      'Tặng bàn phím cơ không dây Bluetooth RGB',
      'Tặng giá đỡ card màn hình có LED đồng bộ'
    ],
    configs: [
      { name: 'i7 13700K / 32GB DDR5 / RTX 4070 (Mặc định)', price: 28500000 },
      { name: 'i9 14900K / 64GB DDR5 / RTX 4080 Super', price: 45000000 }
    ]
  },
  {
    id: 11,
    category: 'gaming-pc',
    badge: 'Tiết kiệm',
    promoBadge: 'Văn phòng - Bán hàng',
    name: 'Bộ PC Văn Phòng Intel G6400 / RAM 8GB / SSD 256GB + Màn Hình 22 inch',
    image: '/pc-hp-g4.jpg',
    price: 4950000,
    oldPrice: 5600000,
    specs: [
      'CPU Intel Pentium Gold G6400 (2 nhân 4 luồng 4.0GHz)',
      'RAM 8GB DDR4 bus 2666MHz',
      'SSD 256GB tốc độ cao xử lý hóa đơn, kế toán, văn phòng mượt mà',
      'Màn hình 22 inch Full HD sắc nét, góc nhìn rộng',
      'Vỏ case văn phòng nhỏ gọn lịch sự'
    ],
    gifts: [
      'Tặng bộ phím chuột văn phòng',
      'Cài sẵn Windows 10 và Office trọn đời'
    ],
    configs: [
      { name: 'G6400 / 8GB / 256GB SSD (Mặc định)', price: 4950000 },
      { name: 'Core i3 10100 / 16GB / 512GB SSD', price: 6200000 }
    ]
  },

  // --- WORKSTATION ---
  {
    id: 12,
    category: 'workstation',
    badge: 'Chuyên Render',
    promoBadge: 'Bền bỉ 24/7',
    name: 'Máy trạm HP Workstation Z440 Xeon E5-2680v4 (14 nhân 28 luồng) / 32GB ECC',
    image: '/workstation-hp-z440.jpg',
    price: 9900000,
    oldPrice: 11500000,
    specs: [
      'Intel Xeon E5-2680v4 (14 nhân 28 luồng) chạy giả lập NOX, Render 3D',
      'RAM 32GB ECC Register chống crash và dump xanh màn hình',
      'VGA NVIDIA Quadro M4000 8GB chuyên đồ hoạ 3D kiến trúc',
      'Bộ nguồn máy trạm HP 700W công suất thực chuẩn 90% Platinum',
      'Khung vỏ hợp kim thép nặng 15kg giải nhiệt cực tốt'
    ],
    gifts: [
      'Tặng phím chuột chuyên nghiệp',
      'Cài đặt sẵn bộ Adobe 2024, AutoCad, SketchUp, 3DsMax'
    ],
    configs: [
      { name: 'Xeon 14 nhân / 32GB RAM / Quadro M4000 (Mặc định)', price: 9900000 },
      { name: 'Xeon 28 nhân Dual CPU / 64GB RAM / Quadro P4000', price: 15500000 }
    ]
  },

  // --- MÀN HÌNH LCD ---
  {
    id: 13,
    category: 'screen-lcd',
    badge: 'Chính hãng',
    promoBadge: 'Chân xoay',
    name: 'Màn hình LCD Dell Professional P2419H 24 inch IPS Tràn Viền',
    image: '/lcd-dell-p2417.png',
    price: 2650000,
    oldPrice: 3200000,
    specs: [
      'Kích thước 24 inch tỉ lệ 16:9 tấm nền IPS cao cấp',
      'Độ phân giải Full HD (1920 x 1080), viền 3 cạnh siêu mỏng',
      'Chân đế công thái học xoay dọc 90 độ, nâng hạ cao thấp tiện lợi',
      'Cổng HDMI, DisplayPort, VGA và Hub 4 cổng USB trên màn'
    ],
    gifts: [
      'Tặng cáp HDMI xịn',
      'Bảo hành 1 đổi 1 trong 12 tháng'
    ],
    configs: [
      { name: 'Màn hình Dell P2419H 24 inch IPS', price: 2650000 }
    ]
  },

  // --- CAMERA & SMART TV ---
  {
    id: 14,
    category: 'camera-tv',
    badge: 'Xoay 360 độ',
    promoBadge: 'Hot',
    name: 'Camera Wi-Fi Không Dây EZVIZ H6c Pro 2K+ Xoay 360 Độ Đàm Thoại 2 Chiều',
    image: '/camera-ezviz.jpg',
    price: 650000,
    oldPrice: 850000,
    specs: [
      'Độ phân giải 2K+ siêu nét 4.0 Megapixel',
      'Tự động theo dõi chuyển động bám người thông minh AI',
      'Xem ban đêm có màu sắc nét với đèn trợ sáng',
      'Đàm thoại 2 chiều qua điện thoại to rõ',
      'Lắp đặt đơn giản chỉ cần cắm nguồn và kết nối Wi-Fi'
    ],
    gifts: [
      'Tặng kèm thẻ nhớ Sandisk 64GB ghi hình 10 ngày',
      'Miễn phí cài đặt phần mềm lên điện thoại cả nhà'
    ],
    configs: [
      { name: 'Camera kèm thẻ 64GB', price: 650000 },
      { name: 'Camera kèm thẻ 128GB (lưu 20 ngày)', price: 790000 }
    ]
  },
  {
    id: 15,
    category: 'camera-tv',
    badge: 'Chính hãng',
    promoBadge: 'Trọn gói',
    name: 'Smart Tivi Samsung 55 inch 4K Crystal UHD Viền Mỏng Sang Trọng',
    image: '/tv-samsung-55.jpg',
    price: 8900000,
    oldPrice: 10900000,
    specs: [
      'Màn hình 55 inch độ phân giải 4K Ultra HD (3840 x 2160)',
      'Công nghệ màu sắc Dynamic Crystal Color 1 tỷ sắc màu',
      'Hệ điều hành Tizen OS mượt mà xem YouTube, Netflix không quảng cáo',
      'Hỗ trợ tìm kiếm giọng nói tiếng Việt ba miền chuẩn xác'
    ],
    gifts: [
      'Tặng giá treo tường chịu lực',
      'Miễn phí vận chuyển và lắp đặt cân chỉnh tại Phan Thiết'
    ],
    configs: [
      { name: 'Tivi Samsung 55 inch 4K (Mặc định)', price: 8900000 },
      { name: 'Tivi Samsung 65 inch 4K', price: 11900000 }
    ]
  }
];
