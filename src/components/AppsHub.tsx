import React from 'react';
import { useRouter } from './RouterContext';
import { APPLICATIONS } from '../data';
import * as Icons from 'lucide-react';

export const AppsHub: React.FC = () => {
  const { navigateTo } = useRouter();

  // Helper to dynamically resolve Lucide icons
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileText': return <Icons.FileText className="w-6 h-6" />;
      case 'Archive': return <Icons.Archive className="w-6 h-6" />;
      case 'Sparkles': return <Icons.Sparkles className="w-6 h-6" />;
      case 'PenTool': return <Icons.PenTool className="w-6 h-6" />;
      default: return <Icons.Compass className="w-6 h-6" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Bản Beta': return 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400';
      case 'Đang phát triển': return 'bg-amber-500/10 border-amber-500/30 text-amber-400';
      case 'Ý tưởng': return 'bg-brand-gold/10 border-brand-gold/20 text-brand-gold/80';
      default: return 'bg-brand-brown/10 border-brand-brown/30 text-brand-ivory/60';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-16" id="apps-hub-view">
      {/* Page Header */}
      <section className="space-y-4 max-w-2xl" id="apps-hub-header">
        <span className="font-mono text-xs tracking-[0.3em] text-brand-gold uppercase block">KHÔNG GIAN LÀM VIỆC SỐ</span>
        <h1 className="font-serif text-4xl md:text-5xl text-brand-ivory font-medium tracking-tight">
          Cổng Ứng Dụng AI
        </h1>
        <p className="text-brand-ivory/60 text-sm leading-relaxed font-light">
          Chào mừng quý nghệ nhân và học giả tới Hub công cụ số hóa của Phi Long Studio. 
          Đây là nơi chúng tôi kết tinh các mô hình trí tuệ nhân tạo chuyên sâu nhằm giải quyết các bài toán dịch thuật kỹ thuật, lưu trữ đám mây 3D và tra cứu sử liệu cổ học.
        </p>
      </section>

      {/* Warning Alert: Non-functioning mock disclosure */}
      <section className="bg-brand-brown/10 border border-brand-gold/20 p-5 rounded-sm max-w-4xl flex items-start space-x-3 text-xs font-mono text-brand-gold/90" id="apps-disclosure">
        <Icons.ShieldAlert className="w-5 h-5 shrink-0 text-brand-gold animate-pulse" />
        <div className="space-y-1">
          <span className="font-semibold uppercase tracking-wider block">Lưu ý quan trọng đối với bản xem trước (Preview)</span>
          <p className="text-brand-ivory/70 font-light leading-relaxed font-sans">
            Mọi ứng dụng dưới đây hoạt động hoàn toàn ở chế độ <strong>Giao diện mẫu tương tác (Interactive UI Demo)</strong>. Hệ thống chưa tích hợp liên kết API xử lý đám mây, không lưu dữ liệu cá nhân hay yêu cầu tài khoản thanh toán ở phiên bản thử nghiệm đầu tiên này.
          </p>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8" id="apps-cards-grid">
        {APPLICATIONS.map((app) => {
          return (
            <div 
              key={app.id}
              className="border border-brand-brown/40 hover:border-brand-gold/50 bg-brand-charcoal/40 p-6 md:p-8 rounded-sm flex flex-col justify-between transition-all duration-500 group relative overflow-hidden"
            >
              {/* Status Badge */}
              <div className="absolute top-6 right-6">
                <span className={`text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 border rounded-full ${getStatusColor(app.status)}`}>
                  {app.status}
                </span>
              </div>

              {/* Main Info */}
              <div className="space-y-6">
                {/* Icon Circle */}
                <div className="w-12 h-12 border border-brand-brown/50 group-hover:border-brand-gold flex items-center justify-center rounded-sm bg-brand-charcoal text-brand-gold transition-colors duration-500">
                  {getIcon(app.icon)}
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-2xl text-brand-ivory group-hover:text-brand-gold transition-colors font-semibold">
                    {app.name}
                  </h3>
                  <p className="text-brand-ivory/75 text-xs leading-relaxed font-light">
                    {app.description}
                  </p>
                </div>

                {/* Tech stacks */}
                <div className="space-y-1.5">
                  <span className="font-mono text-[9px] text-brand-ivory/40 uppercase tracking-widest block">Công nghệ cốt lõi:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {app.techStack.map((tech, i) => (
                      <span key={i} className="bg-brand-charcoal border border-brand-brown/55 px-2 py-0.5 text-[9px] text-brand-ivory/70 font-mono rounded-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Core Features list */}
                <div className="space-y-2 pt-2 border-t border-brand-brown/20">
                  <span className="font-mono text-[9px] text-brand-gold uppercase tracking-widest block font-semibold">Tính năng thử nghiệm:</span>
                  <ul className="space-y-1.5">
                    {app.features.map((feat, i) => (
                      <li key={i} className="flex items-start space-x-2 text-xs text-brand-ivory/60 font-light">
                        <Icons.CheckCircle2 className="w-3.5 h-3.5 text-brand-gold/60 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Button launcher */}
              <div className="pt-8 border-t border-brand-brown/20 mt-6">
                <button
                  onClick={() => navigateTo(`/ung-dung/${app.slug}`)}
                  className="w-full py-3 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-charcoal font-mono text-xs uppercase tracking-widest font-semibold rounded-sm transition-all flex items-center justify-center space-x-2"
                >
                  <span>Mở không gian làm việc</span>
                  <Icons.ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};
