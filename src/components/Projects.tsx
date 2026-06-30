import React from 'react';
import { useRouter } from './RouterContext';
import { PROJECTS } from '../data';
import { ArrowLeft, Layers, Calendar, Landmark, Sparkles, Scale, CheckCircle2, ArrowRight } from 'lucide-react';

export const Projects: React.FC = () => {
  const { currentPath, navigateTo } = useRouter();

  // Route matching: parse "/du-an/some-slug"
  const slugMatch = currentPath.match(/^\/du-an\/([^/]+)/);
  const slug = slugMatch ? slugMatch[1] : null;

  // Render project details if a valid slug is found
  if (slug) {
    const project = PROJECTS.find(p => p.slug === slug);

    if (!project) {
      return (
        <div className="max-w-4xl mx-auto px-6 py-24 text-center space-y-6" id="project-not-found">
          <span className="font-mono text-xs text-brand-gold uppercase block">Lỗi Hệ Thống</span>
          <h1 className="font-serif text-3xl text-brand-ivory font-medium">Không Tìm Thấy Dự Án</h1>
          <p className="text-brand-ivory/60 text-sm max-w-md mx-auto">
            Yêu cầu truy cập dự án với đường dẫn "{slug}" không tồn tại trong hệ thống lưu trữ của Phi Long Studio.
          </p>
          <button 
            onClick={() => navigateTo('/du-an')}
            className="px-6 py-2.5 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-charcoal text-xs font-mono uppercase tracking-widest transition-all rounded-sm"
          >
            Quay về danh sách dự án
          </button>
        </div>
      );
    }

    // Find other projects for recommendation
    const otherProjects = PROJECTS.filter(p => p.slug !== slug).slice(0, 2);

    return (
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-16" id={`project-detail-${slug}`}>
        {/* Back navigation */}
        <div>
          <button 
            onClick={() => navigateTo('/du-an')}
            className="group flex items-center space-x-2 text-brand-gold hover:text-brand-ivory text-xs font-mono uppercase tracking-widest focus:outline-none"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Danh sách dự án</span>
          </button>
        </div>

        {/* Project Editorial Title & Stats */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-brand-brown/30 pb-12" id="project-detail-hero">
          {/* Info */}
          <div className="lg:col-span-7 space-y-6">
            <span className="font-mono text-xs tracking-[0.25em] text-brand-gold uppercase block">
              {project.category}
            </span>
            <h1 className="font-serif text-3xl md:text-5xl text-brand-ivory font-medium leading-tight">
              {project.title}
            </h1>
            <p className="text-brand-ivory/80 text-sm md:text-base leading-relaxed font-light">
              {project.description}
            </p>
          </div>

          {/* Metadata panel */}
          <div className="lg:col-span-5 bg-brand-charcoal/85 border border-brand-brown/40 p-6 rounded-sm space-y-4 text-xs font-mono">
            <h3 className="text-[10px] tracking-widest text-brand-gold uppercase border-b border-brand-brown/30 pb-2">Thông Số Chế Tác</h3>
            
            <div className="grid grid-cols-3 gap-2">
              <span className="text-brand-ivory/40">Năm:</span>
              <span className="text-brand-ivory col-span-2">{project.year}</span>
            </div>

            {project.client && (
              <div className="grid grid-cols-3 gap-2">
                <span className="text-brand-ivory/40">Ủy thác:</span>
                <span className="text-brand-ivory col-span-2">{project.client}</span>
              </div>
            )}

            {project.scale && (
              <div className="grid grid-cols-3 gap-2">
                <span className="text-brand-ivory/40">Tỷ lệ xích:</span>
                <span className="text-brand-ivory col-span-2">{project.scale}</span>
              </div>
            )}

            <div className="space-y-1.5 pt-2 border-t border-brand-brown/20">
              <span className="text-brand-ivory/40">Vật liệu sử dụng:</span>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.materials.map((mat, i) => (
                  <span key={i} className="bg-brand-brown/20 border border-brand-brown/55 px-2 py-0.5 text-[9px] tracking-wider text-brand-gold rounded-full">
                    {mat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Big Showcase Image */}
        <section className="relative aspect-[16/9] w-full overflow-hidden bg-brand-brown/10 rounded-sm" id="project-main-image">
          <img 
            src={project.image} 
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-90"
          />
        </section>

        {/* Challenges and Solutions */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12" id="project-technical-analysis">
          {/* Challenge card */}
          <div className="border border-brand-brown/40 bg-brand-charcoal/40 p-8 rounded-sm space-y-4">
            <div className="flex items-center space-x-2 text-brand-gold">
              <Landmark className="w-5 h-5 shrink-0" />
              <h3 className="font-serif text-xl font-medium text-brand-ivory">Thử Thách Kỹ Thuật</h3>
            </div>
            <div className="w-10 h-[1px] bg-brand-brown" />
            <p className="text-brand-ivory/70 text-sm leading-relaxed font-light">
              {project.challenge}
            </p>
          </div>

          {/* Solution card */}
          <div className="border border-brand-gold/20 bg-brand-brown/5 p-8 rounded-sm space-y-4">
            <div className="flex items-center space-x-2 text-brand-gold">
              <Sparkles className="w-5 h-5 shrink-0" />
              <h3 className="font-serif text-xl font-medium text-brand-ivory">Giải Pháp Thực Thi</h3>
            </div>
            <div className="w-10 h-[1px] bg-brand-gold/40" />
            <p className="text-brand-ivory/70 text-sm leading-relaxed font-light">
              {project.solution}
            </p>
          </div>
        </section>

        {/* Gallery Section */}
        {project.gallery && project.gallery.length > 0 && (
          <section className="space-y-6" id="project-gallery">
            <h3 className="font-serif text-2xl text-brand-ivory font-medium">Chi Tiết Tác Phẩm</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {project.gallery.map((img, idx) => (
                <div key={idx} className="relative aspect-[4/3] overflow-hidden bg-brand-brown/10 rounded-sm">
                  <img 
                    src={img} 
                    alt={`${project.title} gallery item ${idx + 1}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover opacity-85 hover:scale-102 hover:opacity-100 transition-all duration-500"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Next recommendations */}
        <section className="border-t border-brand-brown/30 pt-12 space-y-6" id="project-recommendations">
          <h3 className="font-serif text-lg text-brand-gold uppercase tracking-wider font-medium">Dự án khác</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherProjects.map((p) => (
              <div 
                key={p.slug}
                onClick={() => navigateTo(`/du-an/${p.slug}`)}
                className="group border border-brand-brown/30 p-5 rounded-sm flex items-center space-x-4 cursor-pointer hover:border-brand-gold/40 transition-colors bg-brand-charcoal/50"
              >
                <div className="w-20 h-20 bg-brand-brown/10 rounded-sm overflow-hidden shrink-0">
                  <img src={p.image} alt={p.title} referrerPolicy="no-referrer" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                </div>
                <div className="space-y-1">
                  <span className="font-mono text-[9px] text-brand-gold uppercase tracking-widest block">{p.category}</span>
                  <h4 className="font-serif text-base text-brand-ivory group-hover:text-brand-gold transition-colors font-medium">{p.title}</h4>
                  <p className="text-brand-ivory/50 text-xs line-clamp-1 font-light">{p.shortDescription}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  // Otherwise, render full project list
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-16" id="projects-list-view">
      {/* Editorial Header */}
      <div className="space-y-4 max-w-2xl">
        <span className="font-mono text-xs tracking-[0.3em] text-brand-gold uppercase block">DANH MỤC KHẢO CỨU</span>
        <h1 className="font-serif text-4xl md:text-5xl text-brand-ivory font-medium tracking-tight">
          Các Tác Phẩm Phục Dựng
        </h1>
        <p className="text-brand-ivory/60 text-sm leading-relaxed font-light">
          Mỗi tác phẩm là tinh hoa hội tụ từ hàng trăm giờ nghiên cứu cổ bản văn hiến kết hợp chế tác cơ khí và mỹ thuật đỉnh cao. Duyệt qua bộ sưu tập 5 dự án nổi bật của chúng tôi dưới đây.
        </p>
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 gap-12" id="projects-grid">
        {PROJECTS.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <div 
              key={project.slug}
              className={`border border-brand-brown/40 hover:border-brand-gold/40 bg-brand-charcoal/50 p-6 md:p-8 rounded-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center transition-all duration-500 group`}
            >
              {/* Image Column */}
              <div className={`lg:col-span-5 aspect-[16/10] overflow-hidden bg-brand-brown/10 rounded-sm ${isEven ? 'lg:order-first' : 'lg:order-last'}`}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:scale-103 group-hover:opacity-100 transition-all duration-700"
                />
              </div>

              {/* Text/Info Column */}
              <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-brand-gold">
                    <span>{project.category}</span>
                    <span className="px-2 py-0.5 border border-brand-gold/20 text-[10px] uppercase rounded-sm bg-brand-brown/10">{project.year}</span>
                  </div>

                  <h2 className="font-serif text-2xl md:text-3xl text-brand-ivory group-hover:text-brand-gold transition-colors font-medium">
                    {project.title}
                  </h2>

                  <p className="text-brand-ivory/70 text-sm leading-relaxed font-light">
                    {project.shortDescription}
                  </p>

                  <div className="space-y-1.5 pt-2">
                    <span className="font-mono text-[10px] text-brand-ivory/40 uppercase block">Vật liệu nổi bật:</span>
                    <div className="flex flex-wrap gap-2">
                      {project.materials.map((mat, i) => (
                        <span key={i} className="bg-brand-brown/10 border border-brand-brown/40 text-brand-gold text-[10px] px-2.5 py-0.5 rounded-sm font-mono">
                          {mat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-brand-brown/20 flex items-center justify-between">
                  <span className="text-xs text-brand-ivory/50 font-mono">
                    Tỷ lệ: {project.scale || 'Mỹ nghệ cao cấp'}
                  </span>
                  
                  <button
                    onClick={() => navigateTo(`/du-an/${project.slug}`)}
                    className="group px-5 py-2.5 bg-brand-brown/20 hover:bg-brand-gold hover:text-brand-charcoal text-brand-gold text-xs font-mono uppercase tracking-widest border border-brand-gold/30 rounded-sm transition-all flex items-center space-x-2"
                  >
                    <span>Xem khảo khảo cứu</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
