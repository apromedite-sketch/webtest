import React, { useState } from 'react';
import { Mail, Phone, MapPin, Landmark, Clock, Send, ShieldCheck, Heart } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    org: '',
    topic: 'Dự án phục dựng di sản',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Vui lòng điền đầy đủ thông tin bắt buộc (Họ tên, Email và Nội dung).');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      org: '',
      topic: 'Dự án phục dựng di sản',
      message: ''
    });
    setIsSuccess(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-16" id="phi-long-contact">
      {/* Page Title */}
      <section className="space-y-4 max-w-2xl" id="contact-header">
        <span className="font-mono text-xs tracking-[0.3em] text-brand-gold uppercase block">HỢP TÁC KHOA HỌC & NGHỆ THUẬT</span>
        <h1 className="font-serif text-4xl md:text-5xl text-brand-ivory font-medium tracking-tight">
          Kết Nối Cùng Chúng Tôi
        </h1>
        <p className="text-brand-ivory/60 text-sm leading-relaxed font-light">
          Phi Long Studio luôn mở rộng cánh cửa đón nhận các dự án ủy thác phục dựng từ bảo tàng, các bộ sưu tập tư nhân, các đề xuất trao đổi học thuật từ giới học giả và đối tác công nghệ sáng tạo toàn cầu.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12" id="contact-main-grid">
        {/* Left Column: Info & Partnerships */}
        <div className="lg:col-span-5 space-y-8" id="contact-info-panel">
          
          {/* Quick Stats list */}
          <div className="space-y-6">
            <h3 className="font-serif text-xl text-brand-gold font-medium border-b border-brand-brown/30 pb-2">
              Văn phòng đại diện
            </h3>
            
            <ul className="space-y-4 text-sm text-brand-ivory/80 font-mono">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="text-brand-ivory font-semibold block font-sans">Trụ sở chính:</span>
                  <span className="text-brand-ivory/60 text-xs">Số 26, Phố Hàng Khay, Quận Hoàn Kiếm, Hà Nội, Việt Nam</span>
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="text-brand-ivory font-semibold block font-sans">Thư điện tử:</span>
                  <span className="text-brand-ivory/60 text-xs">contact@philongstudio.com</span>
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="text-brand-ivory font-semibold block font-sans">Đường dây nóng:</span>
                  <span className="text-brand-ivory/60 text-xs">+84 (0) 974 081 047</span>
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="text-brand-ivory font-semibold block font-sans">Giờ làm việc:</span>
                  <span className="text-brand-ivory/60 text-xs">Thứ Hai - Thứ Sáu: 09:00 - 18:00 (GMT+7)</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Division list cards */}
          <div className="bg-brand-brown/5 border border-brand-brown/40 p-6 rounded-sm space-y-4">
            <h4 className="font-mono text-xs tracking-wider text-brand-gold uppercase font-bold flex items-center space-x-2">
              <Landmark className="w-4 h-4" />
              <span>Chuyên mục hợp tác trọng điểm:</span>
            </h4>
            
            <div className="space-y-3 text-xs leading-relaxed text-brand-ivory/70 font-light">
              <p>
                <strong>• Ủy thác Bảo tàng:</strong> Phục dựng hiện vật bị hư hại, số hóa tương tác 3D đám mây điểm.
              </p>
              <p>
                <strong>• Bộ sưu tập Tư nhân:</strong> Đặt hàng thiết kế sa bàn động học, chiến hạm cổ, kiến trúc sơn mài độc bản tỷ lệ xích.
              </p>
              <p>
                <strong>• Học giả & Nghiên cứu sinh:</strong> Trao đổi chéo tài liệu cổ văn tự, bia rập, đóng góp dữ liệu huấn luyện AI Trợ lý.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="lg:col-span-7 bg-brand-charcoal/50 border border-brand-brown/40 p-6 md:p-8 rounded-sm" id="contact-form-panel">
          
          {isSuccess ? (
            <div className="text-center py-12 space-y-6" id="contact-success-screen">
              <div className="w-16 h-16 bg-brand-brown/20 border border-brand-gold flex items-center justify-center rounded-full mx-auto">
                <ShieldCheck className="w-8 h-8 text-brand-gold" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-2xl text-brand-ivory font-medium">Đã Tiếp Nhận Thông Điệp</h3>
                <p className="text-brand-ivory/70 text-sm max-w-md mx-auto leading-relaxed font-light">
                  Yêu cầu liên hệ về chuyên đề <strong>"{formData.topic}"</strong> của quý vị đã được lưu giữ bảo mật và chuyển tới hòm thư ban thư ký Phi Long Studio.
                </p>
                <p className="text-brand-gold/80 text-xs font-mono pt-2">
                  Mã số tiếp nhận: PL-{Math.floor(100000 + Math.random() * 900000)}
                </p>
              </div>
              <button 
                onClick={handleReset}
                className="px-6 py-2 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-charcoal text-xs font-mono uppercase tracking-widest rounded-sm transition-all"
              >
                Gửi thông điệp mới
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" id="contact-submission-form">
              <h3 className="font-serif text-2xl text-brand-ivory font-medium">Gửi Đề Xuất Hợp Tác</h3>
              <div className="w-10 h-[1px] bg-brand-gold" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-brand-gold uppercase tracking-wider block">Họ và tên *</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Nguyễn Văn A" 
                    className="w-full bg-brand-charcoal border border-brand-brown/60 focus:border-brand-gold rounded-sm py-2.5 px-3 text-sm text-brand-ivory focus:outline-none transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-brand-gold uppercase tracking-wider block">Thư điện tử *</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="email@vidu.com" 
                    className="w-full bg-brand-charcoal border border-brand-brown/60 focus:border-brand-gold rounded-sm py-2.5 px-3 text-sm text-brand-ivory focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Organization */}
              <div className="space-y-2">
                <label className="text-xs font-mono text-brand-gold uppercase tracking-wider block">Tổ chức / Viện nghiên cứu</label>
                <input 
                  type="text" 
                  value={formData.org}
                  onChange={(e) => setFormData({...formData, org: e.target.value})}
                  placeholder="Ví dụ: Đại học Quốc gia Hà Nội (Không bắt buộc)" 
                  className="w-full bg-brand-charcoal border border-brand-brown/60 focus:border-brand-gold rounded-sm py-2.5 px-3 text-sm text-brand-ivory focus:outline-none transition-colors"
                />
              </div>

              {/* Topic Select */}
              <div className="space-y-2">
                <label className="text-xs font-mono text-brand-gold uppercase tracking-wider block">Lĩnh vực cần liên hệ</label>
                <select 
                  value={formData.topic}
                  onChange={(e) => setFormData({...formData, topic: e.target.value})}
                  className="w-full bg-brand-charcoal border border-brand-brown/60 focus:border-brand-gold rounded-sm py-2.5 px-3 text-sm text-brand-ivory focus:outline-none transition-colors font-mono"
                >
                  <option value="Dự án phục dựng di sản">Dự án phục dựng di sản (Kiến trúc, Sa bàn, Thuyền chiến)</option>
                  <option value="Tạp chí & Biên soạn chuyên đề">Tạp chí & Biên soạn chuyên đề (Trao đổi bài luận)</option>
                  <option value="Ứng dụng AI & Công cụ số hóa">Ứng dụng AI & Công cụ số hóa (Dùng thử, Góp ý)</option>
                  <option value="Đăng ký nhận ấn phẩm bản in">Đăng ký nhận bản in tạp chí Phi Long</option>
                  <option value="Khác">Lĩnh vực hợp tác khác</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-xs font-mono text-brand-gold uppercase tracking-wider block">Thông điệp chi tiết *</label>
                <textarea 
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Mô tả tóm tắt nội dung đề xuất hoặc câu hỏi chuyên ngành lịch sử chế tác..." 
                  className="w-full bg-brand-charcoal border border-brand-brown/60 focus:border-brand-gold rounded-sm py-2.5 px-3 text-sm text-brand-ivory focus:outline-none transition-colors resize-none leading-relaxed"
                />
              </div>

              {/* Submit button */}
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-brand-gold hover:bg-transparent hover:text-brand-gold text-brand-charcoal border border-brand-gold font-mono text-xs uppercase tracking-widest font-bold rounded-sm transition-all flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-brand-charcoal border-t-transparent rounded-full animate-spin" />
                    <span>Đang mã hóa gửi...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Gửi thông điệp đề xuất</span>
                  </>
                )}
              </button>
            </form>
          )}

        </div>
      </div>
    </div>
  );
};
