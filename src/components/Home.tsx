import React from 'react';
import { useRouter } from './RouterContext';

export const Home: React.FC = () => {
  const { navigateTo } = useRouter();

  return (
    <div className="w-full" id="phi-long-home">
      {/* 1. Hero Section */}
      <section className="relative min-h-[calc(100vh-180px)] py-12 sm:py-16 md:py-24 flex flex-col justify-between items-center overflow-hidden bg-[#171512]" id="home-hero">
        {/* Ambient background with fine grid overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,42,29,0.3)_0%,rgba(23,21,18,1)_80%)] z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity filter blur-[1px]" 
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?auto=format&fit=crop&q=80&w=1600')` }}
        />
        <div className="absolute inset-0 editorial-grid opacity-60 z-0" />

        {/* Top dummy spacer to balance the layout on large screens */}
        <div className="hidden sm:block h-2 relative z-20" />

        {/* Content */}
        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center space-y-6 sm:space-y-8 my-auto py-4 sm:py-6">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight text-[#F4F0E6] leading-tight font-medium">
            Quá Khứ Lưu Giữ <br className="hidden md:block" />
            <span className="italic text-[#C9A86A] font-normal">Tại Đây</span>
          </h1>

          <p className="font-sans text-[#F4F0E6]/80 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-light">
            Phi Long Studio là nơi những câu chuyện cũ được kể lại bằng một ngôn ngữ mới. Tôi tin rằng mỗi mô hình, mỗi tư liệu, mỗi chi tiết được phục dựng đều không chỉ là một món đồ chơi trưng bày. Đó là dấu vết của thời gian, là ký ức, là tinh thần của một dân tộc.
          </p>

          <div className="pt-2 flex items-center justify-center">
            <button
              onClick={() => navigateTo('/du-an')}
              className="px-10 py-3.5 border border-[#C9A86A] bg-[#C9A86A] text-[#171512] text-xs font-mono uppercase tracking-widest font-semibold hover:bg-transparent hover:text-[#C9A86A] transition-all duration-300 rounded-sm shadow-md"
            >
              Khám phá
            </button>
          </div>
        </div>

        {/* Subtle Decorative Bottom Accent - Now guarantees no overlap */}
        <div className="relative z-20 mt-8 sm:mt-12 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 font-mono text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] text-[#C9A86A]/60 uppercase text-center px-4">
          <span>Tác phẩm nghệ thuật</span>
          <span className="w-1 h-1 bg-[#C9A86A]/40 rounded-full" />
          <span>Di sản số hóa</span>
          <span className="w-1 h-1 bg-[#C9A86A]/40 rounded-full" />
          <span>Trí tuệ nhân tạo</span>
        </div>
      </section>
    </div>
  );
};
