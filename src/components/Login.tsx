import React, { useState } from 'react';
import { ShieldCheck, Lock, Mail, ArrowRight } from 'lucide-react';

export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="max-w-md mx-auto px-6 py-16 md:py-24 space-y-8 animate-fade-in" id="phi-long-login">
      {isSubmitted ? (
        <div className="text-center bg-[#171512] text-[#F4F0E6] border border-[#C9A86A]/30 p-8 rounded-sm shadow-xl space-y-6" id="login-success-card">
          <div className="w-16 h-16 bg-[#C9A86A]/20 border border-[#C9A86A] flex items-center justify-center rounded-full mx-auto">
            <ShieldCheck className="w-8 h-8 text-[#C9A86A]" />
          </div>
          <div className="space-y-2">
            <h3 className="font-serif text-2xl text-[#F4F0E6] font-medium">Đăng Nhập Thành Công</h3>
            <p className="text-[#F4F0E6]/70 text-xs font-mono max-w-sm mx-auto leading-relaxed">
              Chào mừng bạn trở lại, hệ thống demo đang khởi tạo không gian làm việc của bạn.
            </p>
          </div>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="px-6 py-2 border border-[#C9A86A] text-[#C9A86A] hover:bg-[#C9A86A] hover:text-[#171512] text-xs font-mono uppercase tracking-widest rounded-sm transition-all"
          >
            Quay lại
          </button>
        </div>
      ) : (
        <div className="bg-[#171512] text-[#F4F0E6] border border-[#C9A86A]/30 p-8 rounded-sm shadow-xl space-y-6" id="login-form-card">
          <div className="text-center space-y-2">
            <span className="font-mono text-[9px] tracking-[0.3em] text-[#C9A86A] uppercase block">CỔNG BẢO MẬT</span>
            <h2 className="font-serif text-2xl text-[#F4F0E6] font-medium tracking-wide">Đăng Nhập Hệ Thống</h2>
            <p className="text-[#F4F0E6]/60 text-xs font-light">Truy cập tài nguyên & trợ lý phục dựng số</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-mono text-[#C9A86A] uppercase tracking-wider block">Thư điện tử hoặc tên tài khoản *</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#F4F0E6]/40" />
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@philongstudio.com" 
                  className="w-full bg-[#F4F0E6]/5 border border-[#C9A86A]/30 focus:border-[#C9A86A] rounded-sm py-2.5 pl-10 pr-4 text-xs text-[#F4F0E6] focus:outline-none transition-colors font-mono"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label className="text-[10px] font-mono text-[#C9A86A] uppercase tracking-wider block">Mật khẩu *</label>
                <a href="#" className="text-[9px] font-mono text-[#C9A86A]/60 hover:text-[#C9A86A] transition-colors uppercase tracking-wider">Quên mật khẩu?</a>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#F4F0E6]/40" />
                <input 
                  type="password" 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••" 
                  className="w-full bg-[#F4F0E6]/5 border border-[#C9A86A]/30 focus:border-[#C9A86A] rounded-sm py-2.5 pl-10 pr-4 text-xs text-[#F4F0E6] focus:outline-none transition-colors font-mono"
                />
              </div>
            </div>

            {/* Remember me and helper info */}
            <div className="flex items-center space-x-2">
              <input 
                type="checkbox" 
                id="remember" 
                className="w-3.5 h-3.5 accent-[#C9A86A] border-[#C9A86A]/30 rounded bg-[#171512]"
              />
              <label htmlFor="remember" className="text-[10px] font-mono text-[#F4F0E6]/50 uppercase tracking-wider cursor-pointer">Ghi nhớ thiết bị này</label>
            </div>

            {/* Submit button */}
            <button 
              type="submit"
              className="w-full py-3 bg-[#C9A86A] hover:bg-transparent hover:text-[#C9A86A] text-[#171512] border border-[#C9A86A] font-mono text-xs uppercase tracking-widest font-bold rounded-sm transition-all flex items-center justify-center space-x-2 shadow-lg"
            >
              <span>Xác nhận đăng nhập</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
