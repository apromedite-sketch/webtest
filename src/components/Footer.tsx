import React from 'react';
import { useRouter } from './RouterContext';
import { Mail, Phone, MapPin, Compass, ShieldAlert } from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigateTo } = useRouter();

  return (
    <footer className="bg-[#171512] text-[#F4F0E6] border-t border-[#C9A86A]/30 py-16 px-6 mt-auto" id="phi-long-footer">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand & Philosophy */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="font-serif text-lg tracking-widest text-[#C9A86A] uppercase">
              PHI LONG STUDIO
            </h3>
            <p className="text-[#F4F0E6]/60 text-sm max-w-md leading-relaxed">
              Nơi di sản vật chất gặp gỡ trí tuệ số hóa. Chúng tôi chế tác các tác phẩm mô hình nghệ thuật cao cấp, bảo tồn các di sản vật thể và phát triển các công cụ hỗ trợ sáng tạo tích hợp AI.
            </p>
            <p className="text-[#C9A86A]/60 text-xs font-mono tracking-wider">
              TRIẾT LÝ: SLOW CRAFTING • MODERN TECH
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs tracking-widest uppercase text-[#C9A86A]/80">
              Liên kết chính
            </h4>
            <ul className="space-y-2 text-sm text-[#F4F0E6]/70 font-mono">
              <li>
                <button onClick={() => navigateTo('/gioi-thieu')} className="hover:text-[#C9A86A] transition-colors text-xs uppercase tracking-wider text-left">
                  Giới thiệu
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('/du-an')} className="hover:text-[#C9A86A] transition-colors text-xs uppercase tracking-wider text-left">
                  Danh mục dự án
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('/tap-chi')} className="hover:text-[#C9A86A] transition-colors text-xs uppercase tracking-wider text-left">
                  Tạp chí chuyên ngành
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('/ung-dung')} className="hover:text-[#C9A86A] transition-colors text-xs uppercase tracking-wider text-left">
                  Cổng ứng dụng AI
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Info */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs tracking-widest uppercase text-[#C9A86A]/80">
              Thông tin liên hệ
            </h4>
            <ul className="space-y-3 text-xs text-[#F4F0E6]/60 font-mono">
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-[#C9A86A]/80 shrink-0" />
                <span>Số 26, Phố Hàng Khay, Quận Hoàn Kiếm, Hà Nội</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#C9A86A]/80 shrink-0" />
                <span>contact@philongstudio.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#C9A86A]/80 shrink-0" />
                <span>+84 (0) 974 081 047</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="pt-8 border-t border-[#C9A86A]/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-[#F4F0E6]/40 text-xs font-mono">
            &copy; 2026 PHI LONG STUDIO. BẢO LƯU MỌI QUYỀN.
          </div>
          <div className="flex items-center space-x-4 text-[10px] text-[#C9A86A]/50 font-mono tracking-wider">
            <span className="flex items-center space-x-1">
              <ShieldAlert className="w-3 h-3" />
              <span>Phiên bản chính thức 1.0 (Editorial 2026)</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
