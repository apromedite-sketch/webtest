import React, { useState } from 'react';
import { useRouter } from './RouterContext';
import { 
  ArrowLeft, Archive, Sparkles, PenTool, Rotate3d, Compass, Maximize2, ShieldAlert,
  Send, Bot, User, Bookmark, CornerDownLeft, Eye, HelpCircle, HardDrive
} from 'lucide-react';

export const AppWorkspacePlaceholder: React.FC = () => {
  const { currentPath, navigateTo } = useRouter();
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'user' | 'bot'; text: string; sources?: string[] }>>([
    { 
      sender: 'bot', 
      text: 'Chào mừng học giả tới với Trợ lý Khảo cứu Sử liệu Phi Long AI. Tôi được tinh chỉnh dữ liệu chuyên sâu để truy vấn cổ bản hoàng gia, bia ký văn hiến và kỹ thuật mỹ nghệ truyền thống Việt Nam. Quý vị cần tra cứu chủ đề lịch sử nào?',
    }
  ]);
  const [selected3DModel, setSelected3DModel] = useState('Trống đồng Ngọc Lũ');
  const [isRotating, setIsRotating] = useState(true);
  const [meshView, setMeshView] = useState<'solid' | 'wireframe' | 'pointcloud'>('solid');

  const getAppInfo = () => {
    if (currentPath.includes('model-archive')) {
      return {
        id: 'model-archive',
        name: 'Model Archive (Thư viện số 3D)',
        subtitle: 'Thư viện di sản số hóa 3D đám mây dành cho nghệ nhân và khảo cổ.',
        icon: Archive,
        status: 'Đang phát triển'
      };
    } else if (currentPath.includes('research-assistant')) {
      return {
        id: 'research-assistant',
        name: 'AI Research Assistant (Trợ lý Khảo cứu)',
        subtitle: 'Trợ lý tra cứu cổ bản lịch sử, văn bia khảo cổ học và công thức nghệ nhân cổ truyền.',
        icon: Sparkles,
        status: 'Ý tưởng'
      };
    } else {
      return {
        id: 'creative-tools',
        name: 'Creative Studio Tools (Bộ Sáng Tạo)',
        subtitle: 'Chuyển đổi phác thảo tay 2D thành CAD vector và tách module in 3D tối ưu.',
        icon: PenTool,
        status: 'Ý tưởng'
      };
    }
  };

  const appInfo = getAppInfo();
  const IconComponent = appInfo.icon;

  const handleSendChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userText = chatInput;
    setChatMessages(prev => [...prev, { sender: 'user', text: userText }]);
    setChatInput('');

    // Simulate smart historical response
    setTimeout(() => {
      let botResponse = '';
      let botSources: string[] = [];

      if (userText.toLowerCase().includes('sơn mài') || userText.toLowerCase().includes('sơn ta')) {
        botResponse = 'Đối với kỹ thuật phủ sơn mài mủ cây sơn ta (thu hoạch từ cây sơn Phú Thọ), thời gian khô lý tưởng của mỗi lớp sơn (hom, lót, thí, mài) là từ 18 đến 24 giờ trong "buồng ủ nhiệt ẩm" chuyên dụng (nhiệt độ duy trì 25-28°C, độ ẩm 80-85%). Mủ cây sơn chứa urushiol khô chậm bằng quá trình oxy hóa tự nhiên dưới tác động của hơi ẩm, khác hoàn toàn sơn PU hóa chất khô bằng bay hơi dung môi.';
        botSources = ['Đại Việt Thủ Công Chí (Chương III - Sơn mài sơn ta)', 'Nhật ký thí nghiệm bề mặt Phi Long Studio 2025'];
      } else if (userText.toLowerCase().includes('trống đồng') || userText.toLowerCase().includes('đông sơn')) {
        botResponse = 'Trống đồng Ngọc Lũ (Niên đại: Văn hóa Đông Sơn, khoảng 2500 năm trước) có kết cấu đồng thau tỷ lệ pha trộn lý tưởng: 70-75% Đồng đỏ nguyên chất, 15-20% Thiếc, 5-8% Chì và lượng nhỏ kẽm sắt. Chì là bí quyết tối quan trọng giúp dòng kim loại lỏng chảy êm, điền đầy các rãnh hoa văn chim lạc siêu mảnh khi đúc khuôn đất sét nung.';
        botSources = ['Khảo cổ học đồng thau Việt Nam (Nhà xuất bản KHXH 1980)', 'Quét cấu trúc liDAR Phi Long Studio'];
      } else {
        botResponse = `Câu hỏi khảo cứu "${userText}" của bạn đã được tiếp nhận. Trong phiên bản chính thức, trợ lý RAG sẽ truy xuất hàng chục ngàn trang tư liệu cổ thư để trích xuất câu trả lời chuẩn xác có dẫn nguồn mốc lịch sử cụ thể.`;
        botSources = ['Thư viện số cổ văn bản quốc gia'];
      }

      setChatMessages(prev => [...prev, { sender: 'bot', text: botResponse, sources: botSources }]);
    }, 1000);
  };

  const selectQuickQuestion = (q: string) => {
    setChatInput(q);
  };

  return (
    <div className="min-h-screen bg-brand-charcoal text-brand-ivory font-sans" id="placeholder-app-workspace">
      {/* Mini-bar */}
      <div className="border-b border-brand-brown/40 bg-brand-charcoal px-6 h-14 flex items-center justify-between" id="app-workspace-topbar">
        <button 
          onClick={() => navigateTo('/ung-dung')}
          className="group flex items-center space-x-2 text-brand-gold hover:text-brand-ivory text-xs font-mono uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <span>Cổng ứng dụng AI</span>
        </button>
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
          <span className="font-mono text-[10px] tracking-widest text-brand-gold uppercase font-semibold">Bản mô phỏng giao diện 2026</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Workspace App Title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-brand-brown/30 pb-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 border border-brand-gold/40 flex items-center justify-center rounded-sm bg-brand-brown/10 text-brand-gold shrink-0">
              <IconComponent className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h1 className="font-serif text-2xl md:text-3xl text-brand-ivory font-semibold">{appInfo.name}</h1>
              <p className="text-brand-ivory/60 text-xs md:text-sm font-light mt-0.5">{appInfo.subtitle}</p>
            </div>
          </div>
          <div>
            <span className="font-mono text-xs tracking-wider uppercase px-3 py-1 bg-brand-brown/30 border border-brand-gold/20 rounded-sm text-brand-gold">
              Trạng thái: {appInfo.status}
            </span>
          </div>
        </div>

        {/* 1. MOCK MODEL ARCHIVE WORKSPACE */}
        {appInfo.id === 'model-archive' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8" id="model-archive-workspace">
            {/* Sidebar list models */}
            <div className="lg:col-span-3 border border-brand-brown/40 bg-brand-charcoal/50 p-5 rounded-sm space-y-4">
              <h3 className="font-serif text-base text-brand-gold font-medium border-b border-brand-brown/20 pb-2 flex items-center space-x-1.5">
                <HardDrive className="w-4 h-4" />
                <span>Thư viện Di sản số</span>
              </h3>
              <div className="space-y-2">
                {['Trống đồng Ngọc Lũ', 'Mái điện Thái Hòa', 'Súng thần cơ Nguyễn', 'Kiệu bát cống gỗ son'].map((model) => (
                  <button
                    key={model}
                    onClick={() => setSelected3DModel(model)}
                    className={`w-full text-left py-2 px-3 text-xs font-mono rounded-sm transition-all border ${
                      selected3DModel === model 
                        ? 'bg-brand-brown/20 border-brand-gold text-brand-gold font-bold' 
                        : 'border-transparent text-brand-ivory/60 hover:text-brand-ivory hover:bg-brand-charcoal'
                    }`}
                  >
                    • {model}
                  </button>
                ))}
              </div>

              <div className="pt-4 border-t border-brand-brown/20 text-[11px] text-brand-ivory/50 space-y-1">
                <p><strong>Cỡ đám mây điểm:</strong> ~2.4 GB</p>
                <p><strong>Lưới đa giác (Polys):</strong> 8.2M Triangles</p>
                <p><strong>Chuẩn phục dựng:</strong> Khảo cổ học quốc gia</p>
              </div>
            </div>

            {/* Core 3D Viewer canvas */}
            <div className="lg:col-span-9 border border-brand-brown/50 bg-black/90 aspect-[16/9] rounded-sm p-4 relative flex flex-col justify-between overflow-hidden">
              {/* Overlay HUD indicators */}
              <div className="flex justify-between items-start font-mono text-[10px] text-brand-gold/80 relative z-10">
                <div className="space-y-1 bg-black/60 p-2.5 rounded-sm border border-brand-brown/30">
                  <p className="font-bold text-brand-ivory">PHI LONG WEBGL CORE 3D</p>
                  <p>Mô hình: {selected3DModel}</p>
                  <p>Trục tọa độ: X: 0.04 Y: 1.15 Z: -0.85</p>
                </div>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => setIsRotating(!isRotating)}
                    className={`px-2.5 py-1 rounded-sm border text-[9px] uppercase tracking-wider ${isRotating ? 'border-brand-gold bg-brand-brown/25 text-brand-gold' : 'border-brand-brown/40 text-brand-ivory/40'}`}
                  >
                    Tự xoay: {isRotating ? 'Bật' : 'Tắt'}
                  </button>
                  <button className="p-1 border border-brand-brown/40 rounded-sm text-brand-ivory/40 hover:text-brand-gold">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Central vector mock model representation */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className={`w-64 h-64 border-2 border-brand-gold/30 rounded-full flex items-center justify-center ${isRotating ? 'animate-spin-slow' : ''}`}>
                  <div className="w-48 h-48 border border-dashed border-brand-gold/25 rounded-full flex items-center justify-center">
                    <div className="w-24 h-24 border border-brand-gold/15 rounded-full flex items-center justify-center">
                      <Rotate3d className="w-8 h-8 text-brand-gold/60 animate-pulse" />
                    </div>
                  </div>
                </div>
                {/* Simulated Point Cloud data overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(199,168,106,0.12)_0%,transparent_60%)]" />
              </div>

              {/* Footer controllers */}
              <div className="flex flex-col sm:flex-row justify-between items-center gap-2 font-mono text-[9px] text-brand-ivory/40 relative z-10 bg-black/60 p-2.5 border border-brand-brown/30 rounded-sm">
                <div className="flex gap-4">
                  <span>Chế độ lưới:</span>
                  {['solid', 'wireframe', 'pointcloud'].map((mode) => (
                    <button 
                      key={mode} 
                      onClick={() => setMeshView(mode as any)}
                      className={`uppercase tracking-wider ${meshView === mode ? 'text-brand-gold font-bold underline' : 'hover:text-brand-ivory'}`}
                    >
                      {mode}
                    </button>
                  ))}
                </div>
                <div>
                  <span>GLTF 2.0 Pack • LiDAR scan v1.0 • Phi Long Studio</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. MOCK AI RESEARCH ASSISTANT WORKSPACE */}
        {appInfo.id === 'research-assistant' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8" id="research-assistant-workspace">
            {/* Quick Questions suggestion */}
            <div className="lg:col-span-4 border border-brand-brown/40 bg-brand-charcoal/50 p-5 rounded-sm space-y-4">
              <h3 className="font-serif text-base text-brand-gold font-medium border-b border-brand-brown/20 pb-2 flex items-center space-x-1.5">
                <Bookmark className="w-4 h-4" />
                <span>Gợi ý tra cứu học thuật</span>
              </h3>
              <p className="text-xs text-brand-ivory/60 leading-relaxed font-light">
                Các câu hỏi tiêu biểu về phương pháp phục chế thủ công nghệ thuật nước nhà:
              </p>
              
              <div className="space-y-2.5">
                {[
                  'Thời gian ủ sơn ta bao lâu thì khô?',
                  'Thành phần đúc trống đồng Ngọc Lũ?',
                  'Kích thước quy chuẩn điện Thái Hòa?',
                  'Hoa văn mây triều Lê khác Nguyễn thế nào?'
                ].map((q) => (
                  <button
                    key={q}
                    onClick={() => selectQuickQuestion(q)}
                    className="w-full text-left p-2.5 border border-brand-brown/50 hover:border-brand-gold/40 text-xs font-mono rounded-sm transition-all text-brand-ivory/80 bg-brand-charcoal hover:bg-brand-brown/10"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            {/* Chat Box Console */}
            <div className="lg:col-span-8 border border-brand-brown/40 bg-brand-charcoal/30 p-5 rounded-sm flex flex-col justify-between h-[65vh]" id="research-chat-panel">
              {/* Message Streams */}
              <div className="flex-1 overflow-y-auto space-y-4 pr-2 scrollbar-thin">
                {chatMessages.map((msg, idx) => {
                  const isBot = msg.sender === 'bot';
                  return (
                    <div 
                      key={idx} 
                      className={`flex items-start space-x-3 max-w-[85%] ${isBot ? 'mr-auto' : 'ml-auto flex-row-reverse space-x-reverse'}`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border ${isBot ? 'border-brand-gold bg-brand-brown/20 text-brand-gold' : 'border-brand-ivory/20 bg-brand-charcoal text-brand-ivory'}`}>
                        {isBot ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                      </div>
                      <div className={`p-4 rounded-sm text-xs md:text-sm leading-relaxed ${isBot ? 'bg-brand-charcoal border border-brand-brown/40 text-brand-ivory' : 'bg-brand-brown/20 border border-brand-gold/20 text-brand-gold'}`}>
                        <p>{msg.text}</p>
                        
                        {/* Sources citations if bot */}
                        {isBot && msg.sources && (
                          <div className="mt-3 pt-2 border-t border-brand-brown/20 text-[10px] font-mono text-brand-gold/60 space-y-0.5">
                            <span className="font-bold block uppercase tracking-wider">Tư liệu trích lục:</span>
                            {msg.sources.map((src, i) => (
                              <span key={i} className="block">• {src}</span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Chat Input Console form */}
              <form onSubmit={handleSendChat} className="pt-4 border-t border-brand-brown/30 mt-4 flex items-center space-x-2">
                <input 
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Hỏi trợ lý sử liệu (Ví dụ: Trống đồng Ngọc Lũ đúc thế nào...)"
                  className="flex-1 bg-brand-charcoal border border-brand-brown/60 rounded-sm py-3 px-4 text-xs font-mono text-brand-ivory focus:outline-none focus:border-brand-gold transition-colors"
                />
                <button 
                  type="submit"
                  className="px-4 py-3 bg-brand-gold text-brand-charcoal hover:bg-transparent hover:text-brand-gold border border-brand-gold rounded-sm transition-colors flex items-center justify-center"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        )}

        {/* 3. MOCK CREATIVE STUDIO TOOLS WORKSPACE */}
        {appInfo.id === 'creative-tools' && (
          <div className="border border-brand-brown/50 bg-brand-charcoal/40 p-8 rounded-sm text-center py-16 space-y-6" id="creative-tools-placeholder">
            <PenTool className="w-12 h-12 text-brand-gold mx-auto animate-bounce" />
            <div className="space-y-2">
              <h2 className="font-serif text-2xl text-brand-ivory font-medium">Bản phác thảo rãnh ghép cơ học (SLA Module Splitter)</h2>
              <p className="text-brand-ivory/60 text-sm max-w-xl mx-auto leading-relaxed font-light">
                Công cụ tự động chia phôi in 3D khổng lồ thành các module khối ăn khớp chính xác với kết cấu ngàm đuôi én (swallow tail joints) chịu lực lớn, giảm thiểu cong vênh vật lý.
              </p>
            </div>
            
            <div className="max-w-md mx-auto border border-dashed border-brand-brown/50 p-6 rounded-sm bg-brand-charcoal/60 space-y-4 text-xs font-mono text-brand-gold">
              <span className="block border border-brand-gold/20 p-2 bg-brand-brown/10 uppercase font-semibold">Tải lên phác thảo thiết kế 2D</span>
              <p className="text-brand-ivory/40 leading-relaxed font-sans">Kéo thả tệp phác thảo tay hoặc sơ đồ kiến trúc mặt bằng của bạn để công nghệ mô hình hóa AI tự động xuất bản vẽ CAD rãnh ghép mẫu.</p>
            </div>
          </div>
        )}

        {/* Technical Disclosure / Warning */}
        <div className="bg-brand-brown/10 border border-brand-gold/25 p-5 rounded-sm flex items-start space-x-3 max-w-4xl text-xs font-mono text-brand-gold/80" id="disclosure-placeholder-apps">
          <ShieldAlert className="w-5 h-5 shrink-0 text-brand-gold animate-pulse" />
          <div className="space-y-1">
            <span className="font-bold uppercase tracking-wider block">⚠️ Minh bạch kỹ thuật (Technical Disclaimer)</span>
            <p className="text-brand-ivory/75 font-sans font-light leading-relaxed">
              Các tính năng tương tác như WebGL 3D Viewer xoay mẫu, hộp chat trả lời tự động và bộ chia cấu kiện cơ khí bên trên hoạt động 100% bằng cơ chế kịch bản giả lập (Interactive UI Mockup Sandbox). Phi Long Studio không liên kết máy chủ tính toán GPU tốn phí hay lưu trữ dữ liệu riêng tư trong bản chạy thử này.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
