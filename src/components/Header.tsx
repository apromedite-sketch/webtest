import React from 'react';
import { useRouter } from './RouterContext';

export const Header: React.FC = () => {
  const { currentPath, navigateTo } = useRouter();

  return (
    <header className="sticky top-0 z-50 bg-[#F4F0E6]/95 backdrop-blur-md border-b border-[#C9A86A]/30 shadow-sm" id="phi-long-header">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col items-center justify-center text-center">
        
        {/* Brand Logo & Title block - perfectly centered */}
        <button 
          onClick={() => navigateTo('/')}
          className="flex flex-col items-center group text-center focus:outline-none"
          id="brand-logo-btn"
        >
          <div className="space-y-1.5">
            <span className="font-serif text-3xl font-bold tracking-[0.15em] text-[#171512] group-hover:text-[#8D6A2C] transition-colors block leading-none uppercase">
              PHI LONG
            </span>
            <span className="font-mono text-xs tracking-[0.35em] text-[#8D6A2C] uppercase block">
              STUDIO
            </span>
          </div>
        </button>

        {/* Centered Navigation Menu below the logo */}
        <nav className="flex items-center justify-center flex-nowrap whitespace-nowrap gap-x-2.5 sm:gap-x-5 mt-5 text-[12px] sm:text-[14px] uppercase tracking-[0.12em] sm:tracking-[0.2em] font-mono border-t border-[#C9A86A]/20 pt-4 w-full max-w-md mx-auto animate-fade-in" id="centered-nav">
          <button
            onClick={() => navigateTo('/')}
            className={`hover:text-[#8D6A2C] transition-colors py-1 focus:outline-none tracking-wider sm:tracking-widest ${
              currentPath === '/' || currentPath === '' ? 'text-[#8D6A2C] font-bold underline decoration-2 underline-offset-4' : 'text-[#171512]/85 font-medium'
            }`}
          >
            Trang chủ
          </button>
          
          <span className="text-[#C9A86A] select-none font-bold px-1">!</span>
          
          <button
            onClick={() => navigateTo('/dang-nhap')}
            className={`hover:text-[#8D6A2C] transition-colors py-1 focus:outline-none tracking-wider sm:tracking-widest ${
              currentPath === '/dang-nhap' ? 'text-[#8D6A2C] font-bold underline decoration-2 underline-offset-4' : 'text-[#171512]/85 font-medium'
            }`}
          >
            Đăng Nhập
          </button>
          
          <span className="text-[#C9A86A] select-none font-bold px-1">!</span>
          
          <button
            onClick={() => navigateTo('/lien-he')}
            className={`hover:text-[#8D6A2C] transition-colors py-1 focus:outline-none tracking-wider sm:tracking-widest ${
              currentPath === '/lien-he' ? 'text-[#8D6A2C] font-bold underline decoration-2 underline-offset-4' : 'text-[#171512]/85 font-medium'
            }`}
          >
            Liên Hệ
          </button>
        </nav>
        
      </div>
    </header>
  );
};
