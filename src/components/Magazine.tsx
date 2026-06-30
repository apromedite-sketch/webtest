import React from 'react';
import { useRouter } from './RouterContext';
import { ARTICLES } from '../data';
import { ArrowLeft, BookOpen, Clock, User, Calendar, ArrowRight } from 'lucide-react';

export const Magazine: React.FC = () => {
  const { currentPath, navigateTo } = useRouter();

  // Route matching: parse "/tap-chi/some-slug"
  const slugMatch = currentPath.match(/^\/tap-chi\/([^/]+)/);
  const slug = slugMatch ? slugMatch[1] : null;

  // Render article details if a valid slug is found
  if (slug) {
    const article = ARTICLES.find(a => a.slug === slug);

    if (!article) {
      return (
        <div className="max-w-4xl mx-auto px-6 py-24 text-center space-y-6" id="article-not-found">
          <span className="font-mono text-xs text-brand-gold uppercase block">Thư mục thất lạc</span>
          <h1 className="font-serif text-3xl text-brand-ivory font-medium">Không Tìm Thấy Bài Viết</h1>
          <p className="text-brand-ivory/60 text-sm max-w-md mx-auto">
            Chúng tôi không tìm thấy bài viết ứng với đường dẫn "{slug}". Có thể bài viết đã được biên tập lại hoặc lưu trữ vào hòm thư mục cũ.
          </p>
          <button 
            onClick={() => navigateTo('/tap-chi')}
            className="px-6 py-2.5 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-charcoal text-xs font-mono uppercase tracking-widest transition-all rounded-sm"
          >
            Quay lại danh mục tạp chí
          </button>
        </div>
      );
    }

    // Recommendation articles (excluding current)
    const recommendedArticles = ARTICLES.filter(a => a.slug !== slug).slice(0, 3);

    return (
      <article className="max-w-4xl mx-auto px-6 py-12 space-y-12" id={`article-view-${slug}`}>
        {/* Back button */}
        <div>
          <button 
            onClick={() => navigateTo('/tap-chi')}
            className="group flex items-center space-x-2 text-brand-gold hover:text-brand-ivory text-xs font-mono uppercase tracking-widest focus:outline-none"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Danh mục tạp chí</span>
          </button>
        </div>

        {/* Article Meta Header */}
        <section className="space-y-6 text-center md:text-left" id="article-header-meta">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-mono text-brand-gold">
            <span className="uppercase tracking-wider px-2.5 py-0.5 border border-brand-gold/30 rounded-full bg-brand-brown/10">{article.category}</span>
            <span className="w-1.5 h-1.5 bg-brand-brown rounded-full" />
            <span className="flex items-center space-x-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{article.publishDate}</span>
            </span>
            <span className="w-1.5 h-1.5 bg-brand-brown rounded-full" />
            <span className="flex items-center space-x-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readTime}</span>
            </span>
          </div>

          <h1 className="font-serif text-3xl md:text-5xl text-brand-ivory font-medium leading-tight tracking-tight">
            {article.title}
          </h1>

          <p className="font-serif text-lg md:text-xl text-brand-ivory/70 italic leading-relaxed font-light">
            {article.subtitle}
          </p>

          <div className="pt-4 border-t border-brand-brown/20 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-2 text-xs font-mono">
              <User className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-ivory/50">Tác giả chuyên môn:</span>
              <span className="text-brand-gold font-semibold">{article.author}</span>
            </div>
          </div>
        </section>

        {/* Feature Image */}
        <section className="relative aspect-[16/9] overflow-hidden bg-brand-brown/10 rounded-sm" id="article-feature-image">
          <img 
            src={article.image} 
            alt={article.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </section>

        {/* Article Summary Box */}
        <section className="border-l-4 border-brand-gold bg-brand-brown/10 p-6 md:p-8 rounded-r-sm" id="article-summary-block">
          <p className="font-serif text-lg text-brand-gold/90 italic leading-relaxed">
            "{article.summary}"
          </p>
        </section>

        {/* Article Content / Paragraphs */}
        <section className="space-y-6 text-brand-ivory/80 text-base leading-relaxed font-light font-sans max-w-3xl mx-auto" id="article-text-content">
          {article.content.map((paragraph, index) => {
            // Apply a nice dropcap styled effect only on the first paragraph
            if (index === 0) {
              return (
                <p key={index} className="first-letter:font-serif first-letter:text-5xl first-letter:float-left first-letter:mr-3 first-letter:text-brand-gold first-letter:font-semibold first-letter:leading-none">
                  {paragraph}
                </p>
              );
            }
            return (
              <p key={index}>
                {paragraph}
              </p>
            );
          })}
        </section>

        {/* Interactive Subscribe Section */}
        <section className="border border-brand-brown/40 p-8 rounded-sm text-center bg-brand-charcoal space-y-4 max-w-3xl mx-auto" id="article-inline-subscribe">
          <BookOpen className="w-8 h-8 text-brand-gold mx-auto" />
          <h4 className="font-serif text-xl font-medium text-brand-ivory">Gìn giữ giá trị cùng Phi Long Studio</h4>
          <p className="text-brand-ivory/60 text-xs max-w-md mx-auto leading-relaxed">
            Các khảo cứu của chúng tôi được đăng tải hàng tuần. Đăng ký để thảo luận và nhận tư liệu giải pháp kỹ thuật in 3D và mài màu sơn mài truyền thống sớm nhất.
          </p>
          <div>
            <button 
              onClick={() => navigateTo('/lien-he')}
              className="px-6 py-2 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-charcoal text-xs font-mono uppercase tracking-widest transition-all rounded-sm font-semibold"
            >
              Liên hệ hợp tác khoa học
            </button>
          </div>
        </section>

        {/* Recommended list */}
        <section className="border-t border-brand-brown/30 pt-12 space-y-6" id="article-recommendations">
          <h3 className="font-serif text-lg text-brand-gold uppercase tracking-widest font-medium text-center md:text-left">Đọc thêm chuyên đề</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendedArticles.map((art) => (
              <div 
                key={art.slug}
                onClick={() => navigateTo(`/tap-chi/${art.slug}`)}
                className="group border border-brand-brown/40 p-4 rounded-sm flex flex-col justify-between h-full cursor-pointer hover:border-brand-gold/45 transition-colors bg-brand-charcoal/40"
              >
                <div className="space-y-3">
                  <div className="relative aspect-[16/10] overflow-hidden bg-brand-brown/10 rounded-sm">
                    <img src={art.image} alt={art.title} referrerPolicy="no-referrer" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <span className="font-mono text-[9px] text-brand-gold uppercase block">{art.category}</span>
                  <h4 className="font-serif text-base text-brand-ivory group-hover:text-brand-gold transition-colors font-medium line-clamp-2">{art.title}</h4>
                </div>
                <div className="pt-4 border-t border-brand-brown/20 flex items-center justify-between text-[10px] font-mono text-brand-ivory/40">
                  <span>{art.publishDate}</span>
                  <span className="text-brand-gold group-hover:translate-x-1 transition-transform">Đọc →</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </article>
    );
  }

  // Otherwise, render full magazine catalog list
  const featuredArticle = ARTICLES.find(a => a.featured) || ARTICLES[0];
  const listArticles = ARTICLES.filter(a => a.slug !== featuredArticle.slug);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-16" id="magazine-catalog-view">
      {/* Editorial Header */}
      <div className="space-y-4 max-w-2xl">
        <span className="font-mono text-xs tracking-[0.3em] text-brand-gold uppercase block">ẤN PHẨM KHẢO CỨU</span>
        <h1 className="font-serif text-4xl md:text-5xl text-brand-ivory font-medium tracking-tight">
          Tạp Chí Phi Long
        </h1>
        <p className="text-brand-ivory/60 text-sm leading-relaxed font-light">
          Nơi tụ hội các bài viết chuyên đề về khoa học chế tác, công nghệ in 3D lập thể màng nhựa và các phân tích khảo cổ phục dựng học thuật sâu sắc tại Việt Nam.
        </p>
      </div>

      {/* Featured Big Article Card */}
      {featuredArticle && (
        <div 
          className="border border-brand-brown/40 hover:border-brand-gold/45 bg-brand-charcoal/50 p-6 md:p-8 rounded-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center cursor-pointer transition-all duration-500 group"
          onClick={() => navigateTo(`/tap-chi/${featuredArticle.slug}`)}
          id="magazine-featured-card"
        >
          {/* Big image */}
          <div className="lg:col-span-6 aspect-[16/10] overflow-hidden bg-brand-brown/10 rounded-sm">
            <img 
              src={featuredArticle.image} 
              alt={featuredArticle.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-80 group-hover:scale-103 group-hover:opacity-100 transition-all duration-700"
            />
          </div>

          {/* Big info */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between h-full py-2">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-xs font-mono text-brand-gold">
                <span className="uppercase tracking-widest font-semibold px-2 py-0.5 border border-brand-gold/30 rounded-sm bg-brand-brown/20">Tiêu Điểm</span>
                <span>{featuredArticle.category}</span>
                <span>•</span>
                <span>{featuredArticle.readTime}</span>
              </div>

              <h2 className="font-serif text-2xl md:text-4xl text-brand-ivory group-hover:text-brand-gold transition-colors font-medium leading-tight">
                {featuredArticle.title}
              </h2>

              <p className="text-brand-ivory/70 text-sm leading-relaxed font-light">
                {featuredArticle.summary}
              </p>
            </div>

            <div className="pt-6 border-t border-brand-brown/20 flex items-center justify-between text-xs font-mono">
              <span className="text-brand-ivory/50">Người viết: <strong className="text-brand-gold font-normal">{featuredArticle.author}</strong></span>
              <span className="text-brand-gold group-hover:translate-x-1.5 transition-transform flex items-center space-x-1 font-semibold uppercase">
                <span>Đọc bài luận</span>
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Grid of Other Articles */}
      <section className="space-y-8" id="other-articles-catalog">
        <h3 className="font-mono text-xs tracking-widest text-brand-gold uppercase border-b border-brand-brown/30 pb-2 block font-semibold">Tất cả bài luận nghiên cứu</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listArticles.map((article) => (
            <div 
              key={article.slug}
              className="group border border-brand-brown/40 hover:border-brand-gold/45 bg-brand-charcoal/40 p-5 rounded-sm flex flex-col justify-between h-full cursor-pointer transition-all duration-500"
              onClick={() => navigateTo(`/tap-chi/${article.slug}`)}
            >
              <div className="space-y-4">
                <div className="relative aspect-[16/10] overflow-hidden bg-brand-brown/10 rounded-sm mb-2">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                  />
                  <div className="absolute bottom-3 left-3 bg-brand-charcoal/90 border border-brand-brown/40 px-2 py-0.5 text-[9px] font-mono tracking-wider text-brand-gold rounded-sm">
                    {article.publishDate}
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-[10px] font-mono text-brand-gold">
                  <span>{article.category}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>

                <h4 className="font-serif text-xl text-brand-ivory group-hover:text-brand-gold transition-colors font-medium leading-snug">
                  {article.title}
                </h4>

                <p className="text-brand-ivory/60 text-xs leading-relaxed font-light line-clamp-3">
                  {article.summary}
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-brand-brown/20 flex items-center justify-between text-xs font-mono">
                <span className="text-brand-ivory/40 text-[10px]">Tác giả: {article.author}</span>
                <span className="text-brand-gold hover:text-brand-ivory transition-colors flex items-center space-x-1">
                  <span>Khảo khảo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
