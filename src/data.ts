export interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  client?: string;
  scale?: string;
  materials: string[];
  shortDescription: string;
  description: string;
  challenge: string;
  solution: string;
  image: string;
  gallery: string[];
}

export interface Article {
  slug: string;
  title: string;
  subtitle: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: string;
  summary: string;
  content: string[];
  image: string;
  featured?: boolean;
}

export interface Application {
  id: string;
  slug: string;
  name: string;
  description: string;
  status: 'Bản Beta' | 'Đang phát triển' | 'Ý tưởng';
  icon: string;
  techStack: string[];
  features: string[];
}

export const PROJECTS: Project[] = [
  {
    slug: 'dong-son-tinh-hoa',
    title: 'Đông Sơn Tinh Hoa',
    category: 'Chế tác Thủ công & CNC',
    year: '2025',
    client: 'Bảo tàng Lịch sử Quốc gia (Trưng bày đặc biệt)',
    scale: 'Tỷ lệ 1:1 (Đường kính 79cm)',
    materials: ['Đồng đỏ tinh luyện', 'Khảm vàng cát #C9A86A', 'Gỗ mun Nam Phi'],
    shortDescription: 'Tái hiện trống đồng Ngọc Lũ nguyên bản bằng phương pháp kết hợp quét liDAR 3D, chạm khắc cơ khí CNC siêu chính xác và kỹ thuật đúc đồng truyền thống Việt Nam.',
    description: 'Dự án "Đông Sơn Tinh Hoa" đại diện cho triết lý cốt lõi của Phi Long Studio: dùng công nghệ tân tiến nhất để giữ gìn và làm hiển lộ những giá trị nghệ thuật cổ xưa bị mờ phai bởi thời gian. Chúng tôi thực hiện quét 3D với độ phân giải micromet chiếc trống đồng cổ Ngọc Lũ, sau đó tiến hành xử lý kỹ thuật số để phục hồi những họa tiết bị mòn xước trước khi đưa vào chế tác khuôn đúc cơ khí.',
    challenge: 'Làm thế nào để tái hiện trung thực các hoa văn chim lạc, người giã gạo, và các đường chỉ mảnh chưa đầy 0.5mm của trống Ngọc Lũ cổ mà không làm mất đi thần thái tự nhiên vốn có của kỹ thuật đúc thủ công.',
    solution: 'Chúng tôi phát triển một quy trình lai (hybrid model): sử dụng máy gia công CNC 5 trục để khắc chìm lõi khuôn thép với độ sai số cực nhỏ (0.02mm), sau đó chuyển giao cho nghệ nhân đúc đồng thủ công lâu đời tại Ý Yên thực hiện kỹ thuật rót đồng nóng chảy và xử lý bề mặt, phủ màu patin tự nhiên giả cổ.',
    image: 'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&fit=crop&q=80&w=600'
    ]
  },
  {
    slug: 'ky-quan-an-nam',
    title: 'Kỳ Quan An Nam',
    category: 'In 3D & Sơn mài',
    year: '2026',
    client: 'Sưu tập tư nhân (Hà Nội)',
    scale: 'Tỷ lệ 1:50',
    materials: ['Sơn ta truyền thống', 'Nhựa Resin sinh học', 'Vàng lá 18K'],
    shortDescription: 'Phục dựng quần thể điện Thái Hòa - Hoàng thành Huế bằng kỹ thuật in SLA độ nét cao kết hợp phủ sơn mài dát vàng lá 18K thủ công bởi nghệ nhân kỳ cựu.',
    description: 'Một nỗ lực táo bạo trong việc kết hợp nhựa polymer kỹ thuật cao với chất liệu sơn ta truyền thống của Việt Nam. Toàn bộ kiến trúc gỗ của điện Thái Hòa được mô phỏng chi tiết từ hệ thống cột gỗ tếch, các vì kèo rường chồng, đến từng viên ngói lưu ly phủ men trên mái.',
    challenge: 'Chất liệu nhựa in 3D hiện đại thường có độ bám dính rất kém với sơn mài tự nhiên (sơn lấy từ cây sơn phú thọ), dẫn đến hiện tượng nứt nẻ và bong tróc sau một thời gian ngắn tiếp xúc với nhiệt ẩm khí hậu Việt Nam.',
    solution: 'Nhóm nghiên cứu vật liệu tại Phi Long Studio đã phát triển một lớp lót trung gian chuyên dụng, sấy hồng ngoại nhiệt độ thấp, giúp liên kết chặt chẽ lớp cốt nhựa SLA và màng nhựa tự nhiên của sơn mài. Kết quả là bề mặt sơn mài phẳng mịn, sâu thẳm, đạt chuẩn mỹ thuật sơn mài truyền thống.',
    image: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?auto=format&fit=crop&q=80&w=600'
    ]
  },
  {
    slug: 'thuong-cang-hoi-an',
    title: 'Thương Cảng Hội An Thế Kỷ XVII',
    category: 'Sa bàn Cơ học & IoT',
    year: '2025',
    scale: 'Kích thước 3.2m x 2.4m',
    materials: ['Gỗ sồi đỏ', 'Đồng thau cơ khí', 'Kính quang học', 'Mạch điều khiển IoT'],
    shortDescription: 'Sa bàn cơ học tương tác mô phỏng đời sống giao thương sầm uất tại thương cảng cổ, vận hành bằng hệ trục bánh răng đồng và cảm biến tiệm cận thông minh.',
    description: 'Sa bàn không tĩnh lặng mà chuyển động không ngừng. Những chiếc thuyền buôn Nhật Bản, Trung Hoa cổ lướt đi trên sông Hoài bằng hệ thống nam châm âm từ điều hướng dưới gầm sa bàn. Ánh sáng của các ngôi nhà cổ thay đổi theo chu kỳ ngày - đêm, tái hiện cảnh phố hội lung linh huyền ảo dưới ánh đèn lồng.',
    challenge: 'Hệ thống vận hành cơ khí dưới sa bàn cần hoạt động liên tục 12 tiếng mỗi ngày tại phòng trưng bày bảo tàng mà không bị kẹt hay gây tiếng ồn máy móc khó chịu.',
    solution: 'Toàn bộ bánh răng truyền động cơ học được chế tạo bằng đồng thau mạ niken tự bôi trơn, cắt laser chính xác và đệm cao su giảm chấn lực. Hệ thống cảm biến thông minh tự động tắt các cụm động cơ nhàn rỗi khi không có khách tham quan tương tác gần sa bàn.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=600'
    ]
  },
  {
    slug: 'phuong-duc-trieu-nghi',
    title: 'Phượng Dực Triều Nghi',
    category: 'Phục dựng Mỹ thuật Tỷ lệ',
    year: '2026',
    scale: 'Tỷ lệ 1:3',
    materials: ['Tơ tằm tự nhiên', 'Đá bán quý', 'Bạc nguyên chất dát mỏng', 'Khung titan siêu nhẹ'],
    shortDescription: 'Phục dựng mô hình mũ miện Phượng Quán của Hoàng hậu triều Nguyễn thông qua việc kết hợp dệt tơ tằm thủ công và in 3D bộ khung xương kim loại.',
    description: 'Tác phẩm phỏng dựng chi tiết mũ miện trang trọng bậc nhất của các bậc mẫu nghi thiên hạ thời nhà Nguyễn. Dựa trên các tư liệu hình ảnh lịch sử ít ỏi và sự cố vấn từ các chuyên gia cổ phục Việt Nam, chúng tôi đã vẽ lại thiết kế và chia nhỏ hàng trăm cấu kiện trang trí phượng hoàng dát bạc để gia công đính kết thủ công.',
    challenge: 'Các sợi lông chim phượng hoàng cổ vô cùng mỏng manh, trong khi tư liệu ảnh trắng đen từ thế kỷ XIX rất mờ nhòe, không rõ các mối nối kim hoàn.',
    solution: 'Sử dụng mô hình thị giác AI để khôi phục chi tiết ảnh tư liệu cổ và phân tách cấu trúc 3D của các họa tiết rồng phượng. Từ bản vẽ phục dựng AI, các nghệ nhân chạm bạc kim hoàn thực hiện gõ thúc, uốn lượn sợi bạc mảnh 0.15mm đạt độ tinh xảo hoàn mỹ.',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=600'
    ]
  },
  {
    slug: 'chien-ham-bach-dang',
    title: 'Chiến Hạm Bạch Đằng Thời Trần',
    category: 'Mô hình Gỗ Hoàn mỹ',
    year: '2025',
    scale: 'Tỷ lệ 1:20 (Dài 1.2m)',
    materials: ['Gỗ mun hoa', 'Gỗ trắc đỏ', 'Đồng thanh cổ', 'Sợi quang học led'],
    shortDescription: 'Mô hình chiến thuyền thời Trần chế tác hoàn toàn từ các loại gỗ quý thuần Việt, tích hợp hệ thống chiếu sáng sợi quang học mô tả sóng nước đầy ấn tượng.',
    description: 'Tác phẩm điêu khắc gỗ tuyệt mỹ mô tả loại thuyền chiến hai tầng sàn độc đáo của quân đội nhà Trần trong các trận chiến chống quân Nguyên Mông. Từ các thớ gỗ mun hoa sẫm màu tự nhiên, phần mạn thuyền được ghép mộng gỗ khít khao kết hợp những chi tiết khiên chắn, mái chèo bằng đồng thanh rỉ sét nghệ thuật.',
    challenge: 'Chế tác hệ thống mái chèo và cấu trúc mạn cong phức tạp bằng các loại gỗ cứng như gỗ mun mà không làm gãy thớ gỗ hay biến dạng chi tiết siêu nhỏ.',
    solution: 'Ứng dụng phương pháp làm mềm thớ gỗ bằng hơi nước áp suất cao truyền thống kết hợp đồ gá uốn thủy lực kỹ thuật số. Giúp định hình đường cong mạn thuyền chính xác tuyệt đối mà giữ nguyên vân gỗ tự nhiên óng ánh của gỗ mun cổ thụ.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600'
    ]
  }
];

export const ARTICLES: Article[] = [
  {
    slug: 'xu-huong-so-hoa-di-san-vat-the-2026',
    title: 'Xu hướng số hóa di sản vật thể năm 2026',
    subtitle: 'Sự trỗi dậy của công nghệ liDAR tầm ngắn và in 3D nhựa sinh học thân thiện môi trường trong bảo tồn di sản.',
    author: 'Trần Long Phi',
    publishDate: '24/06/2026',
    readTime: '8 phút đọc',
    category: 'CÔNG NGHỆ THỦ CÔNG',
    summary: 'Công nghệ bảo tồn đang bước sang một chương mới khi các công cụ đo đạc kỹ thuật số đạt tới cấp độ nguyên tử, mở ra hướng đi bảo tồn số hóa bền vững cho di tích Việt Nam.',
    content: [
      'Năm 2026 chứng kiến một bước ngoặt lịch sử trong giới khảo cổ và bảo tàng học Việt Nam: số hóa di sản không còn dừng lại ở việc chụp ảnh hay quay phim 3D đơn giản. Nhờ vào sự phổ biến của thiết bị quét liDAR cầm tay độ phân giải cao và các thuật toán nội suy hình ảnh bằng AI, việc lưu giữ toàn bộ hình học của một cổ vật giờ đây có thể thực hiện trong vài phút với sai số chỉ tính bằng micromet.',
      'Tại Phi Long Studio, chúng tôi đã chứng minh tính khả thi của phương pháp này qua dự án phục dựng "Đông Sơn Tinh Hoa". Toàn bộ cấu trúc mặt ngoài phồng cong và các nét chìm nông của trống đồng Ngọc Lũ đã được lưu lại dưới dạng đám mây điểm (point cloud) khổng lồ chứa hơn 1 tỷ tọa độ không gian.',
      'Tuy nhiên, số hóa chỉ là bước đầu. Thử thách thực sự nằm ở việc hiện thực hóa dữ liệu số đó trở lại thế giới vật lý một cách trọn vẹn nhất. Việc ứng dụng nhựa sinh học gốc thực vật (PLA chiết xuất từ tinh bột ngô nâng cấp cấu trúc sợi carbon) cho phép in ra các phôi mô hình có độ cứng hoàn hảo, không bị biến dạng co ngót theo thời gian như các loại nhựa dầu mỏ truyền thống.',
      'Đây chính là tiền đề mở ra kỷ nguyên mới: các bảo tàng lớn có thể trao đổi file số hóa di sản và in phục dựng ngay tại chỗ để phục vụ học tập, nghiên cứu mà không cần vận chuyển cổ vật gốc có tuổi đời hàng ngàn năm đầy rủi ro.'
    ],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1000',
    featured: true
  },
  {
    slug: 'nghe-thuat-son-mai-tren-chat-lieu-in-3d',
    title: 'Nghệ thuật sơn mài trên chất liệu in 3D hiện đại',
    subtitle: 'Làm thế nào nghệ nhân tại Phi Long Studio dung hợp lớp phủ sơn ta truyền thống lên chất cốt nhựa polymer kỹ thuật cao.',
    author: 'Nguyễn Tiến Đức',
    publishDate: '15/05/2026',
    readTime: '6 phút đọc',
    category: 'MỸ THUẬT',
    summary: 'Sự va chạm giữa chất liệu nhựa tổng hợp trơn láng và loại sơn tự nhiên thu hoạch từ mủ cây sơn phú thọ thách thức trí sáng tạo của những nghệ nhân sơn mài.',
    content: [
      'Sơn mài Việt Nam là một di sản vô giá với độ sâu thăm thẳm của các tầng màu sơn xen kẽ vàng lá, bạc thếp, vỏ trứng. Theo truyền thống, cốt của các tác phẩm sơn mài thường là gỗ phủ vải màn tẩm đất phù sa sông Hồng. Thế nhưng, khi chuyển sang làm mô hình kiến trúc hay mô hình mỹ nghệ thu nhỏ có độ chi tiết cực cao, cốt gỗ truyền thống bộc lộ nhược điểm: không thể thể hiện các chi tiết thanh mảnh dưới 1mm.',
      'Giải pháp tối ưu là in 3D nhựa Resin độ phân giải cao. Thế nhưng, nhựa polymer tổng hợp vốn trơn láng, không thấm hút và có xu hướng kháng lại các chất hữu cơ gốc dầu như mủ cây sơn ta. Nếu quét sơn mài trực tiếp, lớp sơn sẽ lập tức bị co cụm hoặc bong tróc thành mảng lớn khi khô.',
      'Sau hơn một năm thử nghiệm tại xưởng thực nghiệm Phi Long Studio, chúng tôi đã tìm ra công thức xử lý bề mặt cốt nhựa độc quyền. Phôi in 3D sau khi làm nguội sẽ được bắn cát nano để tạo độ nhám tế vi siêu nhỏ, sau đó quét một lớp keo lót Epoxy gốc nước biến tính và sấy hồng ngoại trong 4 giờ.',
      'Lớp lót này hoạt động như một cầu nối phân tử bền vững, bám chặt vào cốt nhựa đồng thời tạo ra một bề mặt có gốc phân tử cực kỳ tương thích với các phân tử Urushiol của sơn ta. Nhờ đó, nghệ nhân sơn mài có thể thoải mái mài, thí, dát vàng lá lên mô hình in 3D mà không lo bong tróc.'
    ],
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=1000',
    featured: false
  },
  {
    slug: 'tri-tue-nhan-tao-va-tai-dung-ban-ve-co-ban',
    title: 'Trí tuệ nhân tạo và việc tái dựng bản vẽ cổ bản',
    subtitle: 'Ứng dụng các thuật toán khôi phục hình ảnh thông minh để đọc những văn bia cổ bị bào mòn theo dòng lịch sử.',
    author: 'Phạm Minh Quân',
    publishDate: '02/04/2026',
    readTime: '10 phút đọc',
    category: 'AI HỖ TRỢ',
    summary: 'Công nghệ AI không thay thế con người, mà cung cấp một cặp kính hiển vi thời gian giúp nhìn thấu qua những lớp bụi mờ và vết xước của hàng trăm năm tàn phá.',
    content: [
      'Những bản rập văn bia, những họa tiết điêu khắc trên đá hay gỗ tại các đền chùa cổ Việt Nam thường chịu tổn hại nặng nề do thời tiết nóng ẩm và chiến tranh. Khi phục dựng mô hình lịch sử, việc dựa vào mắt thường và suy đoán cá nhân của nghệ sĩ rất dễ dẫn đến những sai lệch nghiêm trọng về phong cách nghệ thuật từng thời kỳ.',
      'Để giải quyết vấn đề này, Phi Long Studio đã phát triển một công cụ AI nội bộ (tiền thân của AI Research Assistant). Bằng cách huấn luyện mạng nơ-ron CNN trên cơ sở dữ liệu hàng chục ngàn mẫu hoa văn chuẩn của thời Lý, Trần, Lê, Nguyễn, mô hình có khả năng khôi phục các đường nét hoa văn bị vỡ nát trên ảnh tư liệu.',
      'Ví dụ, khi quét một cụm hoa văn lá đề thời Lý bị sứt sẹo trên một bệ tượng Phật bằng đá, AI sẽ phân tích các nét khắc còn sót lại đối chiếu với quy luật đối xứng và tỷ lệ vàng đặc trưng của mỹ thuật thời Lý. Từ đó, nó đề xuất 3 phương án khôi phục đường nét gốc với độ tin cậy được tính toán bằng phần trăm cụ thể.',
      'Nghệ nhân phục dựng sẽ là người quyết định cuối cùng, lựa chọn và tinh chỉnh bản vẽ gợi ý từ AI để đưa vào máy khắc khuôn. Sự cộng tác nhịp nhàng này rút ngắn 70% thời gian nghiên cứu phác thảo thô, đồng thời nâng tầm độ chính xác học thuật của tác phẩm trưng bày.'
    ],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000',
    featured: false
  },
  {
    slug: 'co-khi-dong-thau-linh-hon-sa-ban-chuyen-dong',
    title: 'Cơ khí đồng thau: Linh hồn của những sa bàn chuyển động',
    subtitle: 'Nghệ thuật chế tác hệ truyền động vi cơ học không tiếng động mang lại sức sống cho những mô hình không gian lớn.',
    author: 'Trần Long Phi',
    publishDate: '12/03/2026',
    readTime: '7 phút đọc',
    category: 'CÔNG NGHỆ THỦ CÔNG',
    summary: 'Một sa bàn chuyển động hoàn hảo là một sa bàn hoạt động như thể nó tự vận hành bằng phép thuật, nơi tiếng ồn của động cơ điện bị triệt tiêu hoàn toàn bởi cơ học chính xác.',
    content: [
      'Người xem sa bàn "Thương cảng Hội An" luôn sững sờ trước những chiếc thuyền buôn lướt sóng nhịp nhàng, hay những guồng nước gỗ quay đều tắp lự. Ít ai biết rằng, nằm ẩn mình ngay dưới lớp mặt nước mô phỏng là một thế giới cơ khí bánh răng phức tạp được tính toán chi ly tới từng vòng quay.',
      'Sự lựa chọn kim loại của chúng tôi là đồng thau phốt-pho (Phosphor Bronze). Đây là loại hợp kim đồng có độ bền mỏi cực cao, hệ số ma sát rất thấp và có khả năng chống ăn mòn tuyệt đối trong môi trường độ ẩm cao. Các bánh răng cơ khí được thiết kế riêng bằng phần mềm tối ưu lực cơ học, sau đó được cắt bằng tia nước siêu áp lực hoặc khắc laser CNC.',
      'Bí quyết để đạt được sự "im lặng tuyệt đối" khi sa bàn hoạt động nằm ở biên dạng răng (tooth profile). Chúng tôi áp dụng biên dạng răng dạng thân khai (involute) cải tiến, giúp lực truyền từ bánh răng này sang bánh răng khác diễn ra liên tục, không có điểm va đập gây tiếng lách cách.',
      'Đồng thời, sự kết hợp giữa bánh răng đồng thau và các bánh răng dẫn động bằng nhựa POM y tế giúp hấp thụ hoàn toàn các rung động tần số cao từ động cơ bước điều khiển. Đó là cách công nghệ ẩn mình để nhường chỗ cho cảm xúc nghệ thuật thăng hoa.'
    ],
    image: 'https://images.unsplash.com/photo-1509869175650-a1d979e25595?auto=format&fit=crop&q=80&w=1000',
    featured: false
  },
  {
    slug: 'go-mun-va-ky-thuat-khac-kham-xa-cu-micromet',
    title: 'Gỗ mun và kỹ thuật khắc khảm xà cừ tỷ lệ micromet',
    subtitle: 'Tìm hiểu quy trình đưa vỏ trai ốc tự nhiên lên bề mặt những khối gỗ mun siêu cứng của các mô hình chiến hạm cổ.',
    author: 'Nguyễn Tiến Đức',
    publishDate: '28/02/2026',
    readTime: '9 phút đọc',
    category: 'MỸ THUẬT',
    summary: 'Độ cứng của gỗ mun hoa là cơn ác mộng cho mọi mũi đục cầm tay, nhưng dưới ánh sáng của chùm tia laser CO2, những đường rãnh khảm tinh xảo hiện ra phẳng lỳ.',
    content: [
      'Gỗ mun hoa Nam Phi được xếp vào nhóm gỗ quý có tỷ trọng cực kỳ nặng và độ cứng đứng đầu bảng. Gỗ mun khô có thể làm sứt mẻ những lưỡi đục thép tôi cứng nhất nếu nghệ nhân đi lực không chuẩn. Tuy nhiên, màu đen tuyền xen kẽ vân xanh vàng của mun hoa lại là màu nền hoàn hảo nhất để tôn lên sắc cầu vồng óng ánh của vỏ trai khảm.',
      'Tại Phi Long Studio, thay vì đục tay hoàn toàn theo lối thủ công cũ vốn dễ làm mẻ thớ gỗ mun giòn, chúng tôi sử dụng chùm tia laser CO2 xung cực ngắn được dẫn đường bằng file CAD vector để quét rãnh khảm. Chùm laser đốt cháy thớ gỗ trong tích tắc, tạo ra các rãnh sâu chính xác 0.4mm với vách rãnh thẳng đứng hoàn hảo.',
      'Vỏ trai ốc tự nhiên được chọn lọc từ vùng biển Khánh Hòa, mài mỏng bằng máy mài nước xuống độ dày đồng nhất 0.38mm. Sau đó, vỏ trai được cắt laser sợi quang để tạo ra những mảnh khảm hoa văn nhỏ bằng hạt cát.',
      'Bước cuối cùng vẫn hoàn toàn là đôi tay của nghệ nhân: ghép từng mảnh vỏ ốc vào rãnh gỗ, sử dụng keo mủ thiên nhiên trộn bột đá gỗ mun để trám khít các khe hở siêu nhỏ, rồi mài bóng bằng giấy nhám nước từ thô đến mịn 5000 grit. Sản phẩm hoàn thiện có bề mặt liền lạc như một thể thống nhất, sờ vào không hề có cảm giác gợn tay.'
    ],
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80&w=1000',
    featured: false
  },
  {
    slug: 'thiet-ke-anh-sang-am-ban-thoi-hon-mo-hinh-tinh',
    title: 'Thiết kế ánh sáng âm bản: Nghệ thuật thổi hồn vào mô hình tĩnh',
    subtitle: 'Nhiệt độ màu, góc khuất và nghệ thuật giấu dây dẫn tạo nên chiều sâu điện ảnh cho tác phẩm trưng bày.',
    author: 'Phạm Minh Quân',
    publishDate: '10/02/2026',
    readTime: '5 phút đọc',
    category: 'MỸ THUẬT',
    summary: 'Ánh sáng không chỉ để thắp sáng; ánh sáng trong mô hình cao cấp là một chất liệu điêu khắc vô hình kiến tạo không khí cổ kính và huyền ảo.',
    content: [
      'Một mô hình dù có tinh xảo đến đâu nếu đặt dưới ánh sáng huỳnh quang văn phòng tẻ nhạt sẽ lập tức trông giống như một món đồ chơi nhựa vô hồn. Nhận thức được điều này, mọi tác phẩm xuất xưởng từ Phi Long Studio đều được tích hợp một hệ thống kịch bản chiếu sáng độc lập được thiết kế kỳ công.',
      'Chúng tôi ưu tiên sử dụng kỹ thuật "chiếu sáng âm bản" (negative lighting) - tức là giấu hoàn toàn các nguồn phát sáng vào sâu trong cấu trúc mô hình, để người xem chỉ nhìn thấy quầng sáng khuếch tán chứ không thấy bóng đèn. Sợi quang học dẫn sáng đường kính 0.25mm được luồn lách qua các lỗ rỗng ẩn bên trong cột nhà cổ hoặc vì kèo gỗ.',
      'Nhiệt độ màu lý tưởng được cố định ở mức 2700K (vàng ấm dịu nhẹ như ánh nến hoặc đèn dầu cổ), kết hợp với độ hoàn màu CRI tối thiểu là 95 để giữ trung thực sắc ấm của gỗ và màu sơn mài cổ.',
      'Tại các ô cửa sổ nhỏ của sa bàn, chúng tôi lập trình vi điều khiển chạy hiệu ứng bập bùng ngẫu nhiên cực nhẹ, mô phỏng sinh động ngọn lửa đèn dầu của người xưa đang lay động trong gió đêm. Khoảnh khắc ánh sáng vàng dịu ấy hắt ra từ ô cửa sổ gỗ mun đen thẫm chính là lúc mô hình vượt qua giới hạn của vật lý để chạm tới miền cảm xúc của người thưởng lãm.'
    ],
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1000',
    featured: false
  },
  {
    slug: 'che-tac-mo-hinh-khi-kien-nhan-vuot-qua-ranh-gioi-cong-nghe',
    title: 'Chế tác mô hình: Khi kiên nhẫn vượt qua ranh giới công nghệ',
    subtitle: 'Giữa làn sóng AI tạo hình ảnh trong vài giây, vì sao những nghệ nhân Phi Long vẫn dành hàng ngàn giờ cho một chi tiết thủ công.',
    author: 'Trần Long Phi',
    publishDate: '18/01/2026',
    readTime: '11 phút đọc',
    category: 'MỸ THUẬT',
    summary: 'Sự kiên nhẫn không phải là sự chậm chạp lạc hậu, mà là một tuyên ngôn nghệ thuật kiêu hãnh khẳng định giá trị duy nhất của thời gian và bàn tay con người.',
    content: [
      'Bước vào kỷ nguyên 2026, chỉ với một câu lệnh (prompt) đơn giản, bất cứ ai cũng có thể tạo ra một bức ảnh phối cảnh 3D siêu thực lộng lẫy chỉ sau 3 giây. Trí tuệ nhân tạo dường như đã giải quyết xong bài toán tốc độ và sự hoàn hảo hình ảnh. Vậy, tại sao xưởng Phi Long Studio vẫn chật ních những con người đang cặm cụi mài từng mẩu gỗ nhỏ bằng đầu tăm suốt hàng tuần liền?',
      'Câu trả lời nằm ở "Trọng lực của sự chân thật". Một bức ảnh AI có thể đánh lừa võng mạc trong thoáng chốc, nhưng nó thiếu đi chiều sâu vật lý, không thể chạm vuốt, không có mùi thơm ngọt của gỗ mun hoa, hay cái mát lạnh của lớp sơn mài dát vàng lá thật.',
      'Mỗi giờ lao động thủ công của nghệ nhân là một điểm dữ liệu sống được ghi lại trên tác phẩm. Những vết mài không đều tay siêu nhỏ, những sắc độ patin đồng đỏ biến chuyển ngẫu nhiên theo nhiệt độ phòng đúc chính là dấu vân tay của con người. Đó là thứ duy nhất phân biệt tác phẩm nghệ thuật cao cấp với các sản phẩm công nghiệp sản xuất hàng loạt.',
      'Chúng tôi không chối bỏ công nghệ - ngược lại, chúng tôi yêu thích và làm chủ các công cụ tối tân nhất như in 3D, khắc CNC hay trợ lý AI để giải phóng nghệ nhân khỏi những việc lặp đi lặp lại. Nhưng khi chạm đến công đoạn cuối cùng, nơi cảm xúc giao thoa cùng vật chất, chúng tôi nhường lại sân khấu cho đôi tay và sự kiên nhẫn tuyệt đối.'
    ],
    image: 'https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?auto=format&fit=crop&q=80&w=1000',
    featured: false
  },
  {
    slug: 'bao-tang-so-va-tuong-lai-luu-tru-mo-hinh-di-san',
    title: 'Bảo tàng số và tương lai của lưu trữ mô hình di sản',
    subtitle: 'Làm thế nào thế hệ trẻ tiếp cận lịch sử thông qua các cổng dữ liệu tương tác 3D đa chiều tương lai.',
    author: 'Phạm Minh Quân',
    publishDate: '05/01/2026',
    readTime: '7 phút đọc',
    category: 'CÔNG NGHỆ THỦ CÔNG',
    summary: 'Lưu trữ di sản không chỉ là cất giữ cổ vật trong tủ kính khóa chặt; đó phải là việc đưa di sản hồi sinh và luân chuyển trong dòng chảy đời sống số thường nhật.',
    content: [
      'Bảo tàng truyền thống đang gặp rào cản lớn về địa lý và không gian trưng bày. Hơn 90% hiện vật quý giá của các quốc gia thường phải nằm sâu trong hầm tối bảo quản vì không đủ diện tích trưng bày hoặc trạng thái vật lý quá mong manh để mang ra ánh sáng.',
      'Cổng lưu trữ di sản tương tác 3D (Model Archive) của Phi Long Studio ra đời từ tầm nhìn giải phóng di sản khỏi những căn hầm khóa kín đó. Bằng việc tối ưu hóa định dạng file lưới 3D dung lượng siêu nhẹ nhưng vẫn bảo toàn nguyên vẹn vân rạn sơn mài và thớ gỗ, chúng tôi cho phép bất cứ ai có điện thoại thông minh đều có thể "xoay lật", đặt mô hình ảo lên bàn làm việc qua công nghệ AR.',
      'Một học sinh ở vùng sâu vùng xa hay một học giả tại Paris đều có thể tiếp cận chiếc trống đồng Ngọc Lũ ở cự ly 1cm, phóng to để ngắm từng sợi râu chim lạc hay chi tiết trang phục của người cổ đại trên mặt trống.',
      'Tương lai của di sản Việt Nam nằm ở sự kế thừa tri thức số hóa. Khi những dữ liệu mô hình này được mở rộng tự do, đó sẽ là nguồn cảm hứng vô tận cho các nhà thiết kế thời trang, nhà làm game, và các thế hệ nghệ sĩ tương lai khai thác bản sắc dân tộc một cách tự tin và chuẩn xác nhất.'
    ],
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=1000',
    featured: false
  }
];

export const APPLICATIONS: Application[] = [
  {
    id: 'pdf-translator',
    slug: 'pdf-translator',
    name: 'PDF Vietnamese Translator',
    description: 'Trình dịch tài liệu chuyên sâu dành riêng cho giới mô hình và kỹ thuật. Tự động chuyển đổi ngôn ngữ sang tiếng Việt trong khi giữ nguyên 100% bố cục gốc, vị trí hình ảnh minh họa, bảng vẽ kỹ thuật CAD và sơ đồ lắp ráp 3D.',
    status: 'Bản Beta',
    icon: 'FileText',
    techStack: ['Deep Learning OCR', 'Layout Preservation Engine', 'Chuyên từ vựng kỹ thuật', 'React SPA Workspace'],
    features: [
      'Bảo toàn nguyên vẹn bố cục cột kép và vị trí ảnh minh họa của tạp chí nước ngoài.',
      'Từ điển chuyên ngành mô hình, cơ khí, sơn mài và khảo cổ Việt Nam được tinh chỉnh tối ưu.',
      'Hỗ trợ trích xuất nhanh các chỉ số đo đạc tỷ lệ xích trực tiếp từ sơ đồ lắp ráp.',
      'Giao diện workspace làm việc song song hai màn hình gốc - dịch cực kỳ trực quan.'
    ]
  },
  {
    id: 'model-archive',
    slug: 'model-archive',
    name: 'Model Archive',
    description: 'Thư viện số hóa di sản và lưu trữ mô hình 3D tương tác. Hệ thống tự động phân loại niên đại lịch sử, bóc tách cấu kiện hình học bằng AI và tối ưu hóa file lưới (mesh) cho các trải nghiệm AR/VR mượt mà.',
    status: 'Đang phát triển',
    icon: 'Archive',
    techStack: ['Three.js / WebGL', 'AI Auto-Tagging', 'Cloud Asset Pipeline', 'AR QuickLook SDK'],
    features: [
      'Xem tương tác 3D thời gian thực với công nghệ dựng hình vật lý chân thực (PBR).',
      'Tự động phân loại hiện vật cổ dựa trên phân tích hình ảnh hoa văn khảo cổ.',
      'Xuất bản nhanh sang định dạng USDZ và GLTF tương thích tối đa thiết bị di động.',
      'Bộ lọc niên đại lịch sử từ thời Đông Sơn đến triều Nguyễn vô cùng trực quan.'
    ]
  },
  {
    id: 'research-assistant',
    slug: 'research-assistant',
    name: 'AI Research Assistant',
    description: 'Trợ lý AI chuyên khảo cứu tư liệu cổ bản, văn bia lịch sử, kiến trúc cổ và phương pháp thủ công truyền thống Việt Nam. Tích hợp kho tri thức từ các công trình nghiên cứu chính thống và thư viện số quốc gia.',
    status: 'Ý tưởng',
    icon: 'Sparkles',
    techStack: ['Semantic RAG', 'Vietnamese Ancient NLP', 'Historical Knowledge Graph', 'Vector DB'],
    features: [
      'Trả lời truy vấn lịch sử kèm theo trích dẫn nguồn cổ bản chính xác đến từng trang sách.',
      'Hỗ trợ diễn dịch chữ Nôm, chữ Hán cổ từ các bức rập sắc phong, bia đá đền chùa.',
      'Phân tích tính chuẩn xác lịch sử của trang phục và binh khí mô phỏng theo từng triều đại.',
      'Gợi ý công thức pha chế màu sơn ta và kỹ thuật đúc đồng dựa trên kinh nghiệm nghệ nhân cổ.'
    ]
  },
  {
    id: 'creative-tools',
    slug: 'creative-tools',
    name: 'Creative Studio Tools',
    description: 'Bộ công cụ hỗ trợ nghệ nhân chuyển đổi phác thảo nét tay 2D thành các bản vẽ CAD vector cơ bản. Gợi ý phân chia module cấu kiện tối ưu trước khi đưa vào công đoạn in 3D nhựa hoặc phay cắt cơ khí.',
    status: 'Ý tưởng',
    icon: 'PenTool',
    techStack: ['Sketch-to-CAD Diffusion', 'Module Split Algorithm', 'Slicing Parameter Optimization'],
    features: [
      'Nhận diện bản vẽ chì phác thảo tay và vector hóa đường nét sắc sảo tự động.',
      'Thuật toán đề xuất tách ghép mảnh in 3D đối với các mô hình rỗng lòng phức tạp.',
      'Dự toán vật liệu nhựa in và thời gian thi công dựa trên thông số hình học phôi.',
      'Đề xuất bố trí thanh đỡ (support) thông minh hạn chế tối đa tì vết sau khi làm nguội.'
    ]
  }
];
