import React from 'react';
import { useRouter } from './RouterContext';
import { Hammer, BookOpen, Cpu, Sparkles, ShieldCheck, Heart } from 'lucide-react';

export const About: React.FC = () => {
  const { navigateTo } = useRouter();

  const coreFields = [
    {
      icon: BookOpen,
      title: 'Tạp chí mô hình',
      desc: 'Phát hành các chuyên đề khảo cứu di sản, hướng dẫn kỹ thuật chế tác từ căn bản đến nâng cao. Tạp chí kết hợp phát hành bản in sang trọng và cổng tư liệu số hóa tương tác 3D.',
      accent: 'Cung cấp kiến thức chuẩn xác học thuật'
    },
    {
      icon: Hammer,
      title: 'Công Nghệ Thủ Công',
      desc: 'Hợp nhất in 3D lập thể siêu mịn, gia công cơ khí CNC với kỹ thuật truyền thống như phủ sơn mài mủ cây sơn ta, đúc đồng nguội, khắc mun khảm trai xà cừ tự nhiên.',
      accent: 'Vượt qua giới hạn vật liệu thông thường'
    },
    {
      icon: Cpu,
      title: 'AI Hỗ Trợ',
      desc: 'Nghiên cứu phát triển các trợ lý ngôn ngữ và thị giác AI hỗ trợ dịch tài liệu kỹ thuật phức tạp, phục dựng các nét vẽ cổ bị tàn phá và phân loại niên đại hoa văn di sản.',
      accent: 'Giải phóng nghệ nhân khỏi việc lặp lại'
    },
    {
      icon: Sparkles,
      title: 'Hướng Phát Triển Tương Lai',
      desc: 'Mở rộng cổng tương tác AR/VR di sản, số hóa lưu trữ mây vĩnh viễn các kỳ quan kiến trúc cổ Việt Nam, tiến tới hỗ trợ các bảo tàng thiết lập phòng trưng bày 3D thực tế ảo.',
      accent: 'Mang di sản đi khắp thế giới'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-24" id="phi-long-about">
      {/* 1. Header / Intro */}
      <section className="space-y-6 max-w-4xl" id="about-intro">
        <span className="font-mono text-xs tracking-[0.3em] text-brand-gold uppercase block">HỒ SƠ THƯƠNG HIỆU</span>
        <h1 className="font-serif text-4xl md:text-6xl text-brand-ivory font-medium tracking-tight leading-tight">
          Sự Dung Hợp Giữa <br />
          <span className="italic text-brand-gold font-normal">Tinh Hoa Cổ Bản</span> & <span className="font-mono text-3xl md:text-5xl font-light">Kỹ Thuật 2026</span>
        </h1>
        <div className="w-20 h-[1px] bg-brand-gold my-4" />
        <p className="text-brand-ivory/80 text-base md:text-lg leading-relaxed font-light">
          Phi Long Studio là một doanh nghiệp sáng tạo nghệ thuật & công nghệ chế tác cao cấp thành lập tại Hà Nội. 
          Chúng tôi không theo đuổi làn sóng sản xuất đại trà hay tối ưu hóa lợi nhuận thần tốc. 
          Sứ mệnh của chúng tôi là **khôi phục trọn vẹn vẻ đẹp nguyên sơ** của những hiện vật lịch sử 
          bằng tất cả sự tôn kính, được dẫn lối bởi tư duy phân tích của khoa học dữ liệu hiện đại.
        </p>
      </section>

      {/* 2. Philosophy & Timeline */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="about-philosophy">
        {/* Left Side: Editorial Quote */}
        <div className="lg:col-span-5 bg-brand-brown/10 border border-brand-brown/40 p-8 rounded-sm space-y-6">
          <span className="font-mono text-[10px] tracking-widest text-brand-gold uppercase block">Tuyên Ngôn Thiết Kế</span>
          <p className="font-serif text-xl italic text-brand-ivory leading-relaxed">
            "Chúng tôi gọi triết lý của mình là Slow Crafting - Chế Tác Chậm. Giữa thời đại mà trí tuệ nhân tạo có thể vẽ ra một thế giới ảo trong chớp mắt, chúng tôi dành hàng ngàn giờ mài dũa từng thớ gỗ mun, rải từng hạt cát đồng đỏ để kiến tạo một thực thể vật chất có linh hồn."
          </p>
          <div className="flex items-center space-x-3 pt-4">
            <div className="w-8 h-8 bg-brand-gold/20 flex items-center justify-center rounded-full">
              <Heart className="w-4 h-4 text-brand-gold animate-pulse" />
            </div>
            <div>
              <h4 className="text-sm font-mono text-brand-ivory font-medium">Trần Long Phi</h4>
              <p className="text-[10px] text-brand-gold font-mono uppercase tracking-wider">Sáng lập Phi Long Studio</p>
            </div>
          </div>
        </div>

        {/* Right Side: Philosophy breakdown */}
        <div className="lg:col-span-7 space-y-8 text-brand-ivory/70 text-sm md:text-base leading-relaxed font-light">
          <h3 className="font-serif text-2xl text-brand-ivory font-medium tracking-tight">Quy chuẩn nghệ thuật khắc nghiệt</h3>
          <p>
            Tại Phi Long Studio, mỗi một dự án là một cuộc khảo cứu học thuật nghiêm túc. Chúng tôi không bao giờ chế tác từ sự phỏng đoán chủ quan. Trước khi bắt đầu bất cứ bản vẽ phác thảo nào, bộ phận nghiên cứu của chúng tôi sẽ hợp tác chặt chẽ cùng các chuyên gia lịch sử, dịch thuật cổ văn bản tự, rập bia đá, và phân tích các mẫu cấu trúc gỗ từ bảo tàng di tích.
          </p>
          <p>
            Để tái tạo một chi tiết chạm bạc hay một mảng sơn mài hoàng gia, các nghệ nhân phải thực hiện tới hàng chục mẫu thử nghiệm bề mặt (mockups) để đo độ bóng, độ sâu quang học và độ tương tác với nhiệt độ, độ ẩm phòng trưng bày. Sự chỉn chu này đảm bảo mỗi sản phẩm xuất xưởng đều đạt chuẩn chất lượng bảo tàng, có thể lưu truyền hàng trăm năm mà không bị xuống cấp vật lý.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div className="flex items-start space-x-3 border-l border-brand-gold/40 pl-4">
              <div className="space-y-1">
                <h5 className="font-mono text-xs text-brand-gold uppercase tracking-wider">Chế tác thủ bản</h5>
                <p className="text-xs text-brand-ivory/50">Mỗi tác phẩm là độc bản, đi kèm chứng thư số hóa ghi lại toàn bộ nhật ký sáng tạo từ đầu tới cuối.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 border-l border-brand-gold/40 pl-4">
              <div className="space-y-1">
                <h5 className="font-mono text-xs text-brand-gold uppercase tracking-wider">Chuẩn khoa học</h5>
                <p className="text-xs text-brand-ivory/50">Tỷ lệ xích của các mô hình kiến trúc di sản được đo đạc chính xác tuyệt đối qua dữ liệu đám mây điểm.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Fields of Action */}
      <section className="space-y-12" id="about-sectors">
        <div className="text-center space-y-4">
          <span className="font-mono text-xs tracking-[0.3em] text-brand-gold uppercase">LĨNH VỰC HOẠT ĐỘNG CHÍNH</span>
          <h2 className="font-serif text-3xl md:text-4xl text-brand-ivory font-medium tracking-tight">Hệ Sinh Thái Phi Long</h2>
          <div className="w-12 h-[1px] bg-brand-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreFields.map((field, idx) => {
            const IconComponent = field.icon;
            return (
              <div 
                key={idx}
                className="border border-brand-brown/30 hover:border-brand-gold/40 bg-brand-charcoal/30 p-6 rounded-sm flex flex-col justify-between transition-all group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 border border-brand-brown/50 group-hover:border-brand-gold flex items-center justify-center rounded-sm bg-brand-charcoal text-brand-gold transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl text-brand-ivory group-hover:text-brand-gold transition-colors font-medium">
                    {field.title}
                  </h3>
                  <p className="text-brand-ivory/60 text-xs leading-relaxed font-light">
                    {field.desc}
                  </p>
                </div>
                
                <div className="pt-6 mt-4 border-t border-brand-brown/20">
                  <span className="font-mono text-[9px] text-brand-gold/70 uppercase tracking-wider block">
                    {field.accent}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Values Check & CTA */}
      <section className="border border-brand-gold/10 bg-brand-brown/5 p-8 md:p-12 rounded-sm text-center space-y-6" id="about-cta">
        <ShieldCheck className="w-10 h-10 text-brand-gold mx-auto" />
        <h2 className="font-serif text-2xl md:text-3xl text-brand-ivory font-medium tracking-tight">
          Cổng Di Sản Số Hóa Luôn Chào Đón Bạn
        </h2>
        <p className="text-brand-ivory/70 text-sm max-w-xl mx-auto leading-relaxed font-light">
          Hãy cùng Phi Long Studio khám phá vũ trụ mô hình phục dựng tinh xảo bậc nhất. Trải nghiệm ngay những bài viết tạp chí chuyên sâu, ngắm nhìn chi tiết dự án, hoặc kích hoạt các ứng dụng AI hỗ trợ của chúng tôi.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <button 
            onClick={() => navigateTo('/du-an')}
            className="px-6 py-3 border border-brand-gold bg-brand-gold text-brand-charcoal font-mono text-xs uppercase tracking-widest font-semibold hover:bg-transparent hover:text-brand-gold transition-all duration-300 rounded-sm"
          >
            Xem kho dự án
          </button>
          <button 
            onClick={() => navigateTo('/ung-dung')}
            className="px-6 py-3 border border-brand-gold/30 text-brand-gold hover:border-brand-gold font-mono text-xs uppercase tracking-widest transition-all duration-300 rounded-sm"
          >
            Trải nghiệm AI Hub
          </button>
        </div>
      </section>
    </div>
  );
};
