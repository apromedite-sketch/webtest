import React, { useState } from 'react';
import { useRouter } from './RouterContext';
import { 
  ArrowLeft, Upload, FileText, LayoutGrid, Eye, Languages, CheckSquare, Download, 
  RefreshCw, Play, Info, AlertTriangle, CheckCircle, ArrowRight
} from 'lucide-react';

export const PdfTranslator: React.FC = () => {
  const { navigateTo } = useRouter();
  const [currentStep, setCurrentStep] = useState<number>(0); // 0 to 5 (6 steps)
  const [uploadedFile, setUploadedFile] = useState<{ name: string; size: string } | null>(null);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [progressLog, setProgressLog] = useState<string[]>([]);

  const steps = [
    { title: 'Upload PDF', desc: 'Chọn tệp tài liệu nguyên bản', icon: Upload },
    { title: 'Phân tích bố cục', desc: 'Bóc tách cấu trúc cột, bảng biểu', icon: LayoutGrid },
    { title: 'Nhận diện hình ảnh', desc: 'OCR ký tự và trích xuất sơ đồ', icon: Eye },
    { title: 'Dịch tiếng Việt', desc: 'Dịch thuật chuyên ngành mô hình', icon: Languages },
    { title: 'Review song song', desc: 'Hiệu đính đối chiếu bản dịch', icon: CheckSquare },
    { title: 'Xuất PDF mới', desc: 'Đóng gói định dạng chuẩn gốc', icon: Download },
  ];

  const handleSimulateUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setUploadedFile({
        name: file.name,
        size: (file.size / (1024 * 1024)).toFixed(2) + ' MB'
      });
      setCurrentStep(1); // Auto advance to Step 2
    }
  };

  const triggerMockUpload = () => {
    setUploadedFile({
      name: 'Tamiya_Challenger_2_1-35_Instruction_Manual.pdf',
      size: '14.20 MB'
    });
    setCurrentStep(1);
  };

  const handleNextStep = () => {
    if (currentStep < 5) {
      setIsProcessing(true);
      setTimeout(() => {
        setCurrentStep(prev => prev + 1);
        setIsProcessing(false);
      }, 800);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const resetWorkspace = () => {
    setUploadedFile(null);
    setCurrentStep(0);
  };

  return (
    <div className="min-h-screen bg-brand-charcoal text-brand-ivory font-sans" id="pdf-workspace-page">
      {/* Top mini-bar for app focus */}
      <div className="border-b border-brand-brown/40 bg-brand-charcoal px-6 h-14 flex items-center justify-between" id="workspace-top-bar">
        <button 
          onClick={() => navigateTo('/ung-dung')}
          className="group flex items-center space-x-2 text-brand-gold hover:text-brand-ivory text-xs font-mono uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <span>Quay về Phi Long Studio</span>
        </button>
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-[10px] tracking-widest text-emerald-400 uppercase font-semibold">Workspace Live Beta (Demo UI)</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8" id="workspace-main-grid">
        {/* Left Column: Pipeline Process (6 steps) */}
        <div className="lg:col-span-3 space-y-6" id="workspace-sidebar">
          <div className="bg-brand-charcoal border border-brand-brown/50 p-5 rounded-sm space-y-4">
            <h3 className="font-serif text-lg text-brand-gold font-medium border-b border-brand-brown/30 pb-2">
              Quy Trình 6 Bước
            </h3>
            
            <div className="space-y-4">
              {steps.map((step, idx) => {
                const StepIcon = step.icon;
                const isCompleted = idx < currentStep;
                const isActive = idx === currentStep;
                return (
                  <div 
                    key={idx}
                    className={`flex items-start space-x-3 transition-colors ${
                      isActive ? 'text-brand-gold' : isCompleted ? 'text-brand-gold/60' : 'text-brand-ivory/30'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-sm border flex items-center justify-center shrink-0 text-xs font-mono font-bold ${
                      isActive 
                        ? 'border-brand-gold bg-brand-brown/20 text-brand-gold' 
                        : isCompleted 
                        ? 'border-brand-gold/50 bg-brand-charcoal text-brand-gold/70' 
                        : 'border-brand-brown/30 bg-brand-charcoal text-brand-ivory/20'
                    }`}>
                      {isCompleted ? <CheckCircle className="w-4 h-4 text-brand-gold" /> : idx + 1}
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider">{step.title}</h4>
                      <p className="text-[10px] font-light leading-snug">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Help Box */}
          <div className="bg-brand-brown/5 border border-brand-brown/40 p-4 rounded-sm space-y-3">
            <h4 className="font-mono text-[10px] tracking-wider text-brand-gold uppercase font-bold flex items-center space-x-1">
              <Info className="w-3.5 h-3.5" />
              <span>Hướng dẫn trải nghiệm</span>
            </h4>
            <p className="text-[11px] text-brand-ivory/60 leading-relaxed">
              Bạn có thể mô phỏng tải lên bằng cách kéo tệp PDF thật hoặc bấm vào nút <strong>"Sử dụng tệp mô phỏng"</strong> để trải nghiệm nhanh từng bước thiết kế.
            </p>
          </div>
        </div>

        {/* Right Column: Work Canvas */}
        <div className="lg:col-span-9 space-y-6" id="workspace-canvas">
          {/* Main Workspace Frame */}
          <div className="border border-brand-brown/50 bg-brand-charcoal/30 rounded-sm p-6 min-h-[60vh] flex flex-col justify-between glow-subtle relative overflow-hidden">
            
            {/* Absolute Watermark/Background decoration */}
            <div className="absolute inset-0 bg-cover bg-center opacity-[0.02] mix-blend-luminosity pointer-events-none" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1581092160607-ee22621dd758')` }} />
            
            {/* Dynamic Step Panels */}
            <div className="relative z-10 flex-1 flex flex-col justify-center">
              
              {/* Step 0: Upload File */}
              {currentStep === 0 && (
                <div className="space-y-6 text-center py-8" id="step-0-upload">
                  <div className="max-w-md mx-auto border-2 border-dashed border-brand-brown/60 hover:border-brand-gold/60 p-8 rounded-sm bg-brand-charcoal/80 transition-all flex flex-col items-center justify-center space-y-4">
                    <Upload className="w-12 h-12 text-brand-gold/60 animate-bounce" />
                    <div>
                      <label className="cursor-pointer text-brand-gold hover:text-brand-ivory font-semibold text-sm transition-colors block">
                        <span>Nhấp để tải lên tài liệu PDF</span>
                        <input 
                          type="file" 
                          accept=".pdf" 
                          className="hidden" 
                          onChange={handleSimulateUpload} 
                        />
                      </label>
                      <p className="text-brand-ivory/40 text-xs mt-1">hoặc kéo thả tệp tại đây (Hỗ trợ tối đa 50MB)</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-brand-ivory/40 text-xs font-mono">Cách khác, hãy sử dụng tệp hướng dẫn lắp ráp mẫu của chúng tôi:</p>
                    <button 
                      onClick={triggerMockUpload}
                      className="px-5 py-2 border border-brand-gold text-brand-gold hover:bg-brand-brown/10 text-xs font-mono uppercase tracking-widest rounded-sm transition-colors"
                    >
                      Sử dụng tệp mô phỏng
                    </button>
                  </div>
                </div>
              )}

              {/* Step 1: Layout Analysis */}
              {currentStep === 1 && (
                <div className="space-y-6 max-w-2xl mx-auto py-6" id="step-1-layout">
                  <div className="flex items-center space-x-3 text-brand-gold">
                    <LayoutGrid className="w-6 h-6 shrink-0" />
                    <h3 className="font-serif text-2xl font-medium text-brand-ivory">Bóc tách bố cục dữ liệu</h3>
                  </div>
                  <p className="text-brand-ivory/70 text-sm">
                    Mô hình bóc tách tài liệu thông minh đang quét tài liệu <strong>{uploadedFile?.name}</strong>. Hệ thống phân tích văn bản theo cấu trúc lưới, phân định các khối nội dung như cột văn bản đôi, bảng chú thích kỹ thuật, và các ô ảnh sơ đồ.
                  </p>
                  
                  {/* Mock layout diagram representing analyzed zones */}
                  <div className="border border-brand-brown/60 p-4 bg-brand-charcoal/90 rounded-sm space-y-3 font-mono text-[10px]">
                    <div className="flex items-center justify-between border-b border-brand-brown/30 pb-1 text-brand-gold">
                      <span>Cơ sở dữ liệu quét khối:</span>
                      <span>Đang sẵn sàng</span>
                    </div>
                    <div className="grid grid-cols-12 gap-2 text-center">
                      <div className="col-span-12 border border-brand-gold/40 p-2 bg-brand-brown/10 text-brand-gold font-bold">Khối Header (Tên tài liệu & Thương hiệu)</div>
                      <div className="col-span-4 border border-emerald-500/40 p-6 bg-emerald-500/5 text-emerald-400">Khối Hình Ảnh A (Sơ đồ mặt cắt)</div>
                      <div className="col-span-8 border border-sky-500/40 p-6 bg-sky-500/5 text-sky-400">Khối Cột Văn Bản 1 (Mô tả kỹ thuật bằng tiếng Anh)</div>
                      <div className="col-span-12 border border-brand-gold/40 p-2 bg-brand-brown/10 text-brand-gold font-bold">Khối Chú Thích Mép Trang (Tỷ lệ xích 1:35)</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Image OCR Extraction */}
              {currentStep === 2 && (
                <div className="space-y-6 max-w-2xl mx-auto py-6" id="step-2-ocr">
                  <div className="flex items-center space-x-3 text-brand-gold">
                    <Eye className="w-6 h-6 shrink-0" />
                    <h3 className="font-serif text-2xl font-medium text-brand-ivory">Nhận diện hình ảnh & Trích xuất ký tự</h3>
                  </div>
                  <p className="text-brand-ivory/70 text-sm">
                    AI tiến hành tách các hình ảnh minh họa độ phân giải cao và thực hiện OCR (Nhận dạng ký tự quang học) đối với mọi văn bản nằm lồng trong hình vẽ hoặc sơ đồ lắp ráp cơ học.
                  </p>
                  
                  {/* Image extractor list simulation */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="border border-brand-brown/50 bg-brand-charcoal p-4 rounded-sm space-y-2 text-xs">
                      <span className="font-mono text-[9px] text-brand-gold uppercase tracking-wider">Hình Ảnh Extracted #1</span>
                      <div className="relative aspect-[4/3] bg-brand-brown/5 overflow-hidden border border-brand-brown/30 flex items-center justify-center">
                        <img src="https://images.unsplash.com/photo-1509869175650-a1d979e25595" alt="Extracted" className="w-full h-full object-cover grayscale opacity-50" />
                        <div className="absolute inset-0 bg-brand-gold/5 flex flex-col justify-end p-2 font-mono text-[9px] text-brand-gold">
                          <span>Sơ đồ hệ động cơ đồng thau</span>
                        </div>
                      </div>
                      <p className="font-mono text-[10px] text-brand-ivory/40 pt-1">Đã OCR: "Figure 2.1: Brass gear assembly details..."</p>
                    </div>

                    <div className="border border-brand-brown/50 bg-brand-charcoal p-4 rounded-sm space-y-2 text-xs">
                      <span className="font-mono text-[9px] text-brand-gold uppercase tracking-wider">Hình Ảnh Extracted #2</span>
                      <div className="relative aspect-[4/3] bg-brand-brown/5 overflow-hidden border border-brand-brown/30 flex items-center justify-center">
                        <img src="https://images.unsplash.com/photo-1599707367072-cd6ada2bc375" alt="Extracted 2" className="w-full h-full object-cover grayscale opacity-50" />
                        <div className="absolute inset-0 bg-brand-gold/5 flex flex-col justify-end p-2 font-mono text-[9px] text-brand-gold">
                          <span>Bản rập hoa văn trống đồng</span>
                        </div>
                      </div>
                      <p className="font-mono text-[10px] text-brand-ivory/40 pt-1">Đã OCR: "Mặt hoa văn chim lạc hướng quay..."</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Vietnamese Translation Engine */}
              {currentStep === 3 && (
                <div className="space-y-6 max-w-2xl mx-auto py-6" id="step-3-translation">
                  <div className="flex items-center space-x-3 text-brand-gold">
                    <Languages className="w-6 h-6 shrink-0" />
                    <h3 className="font-serif text-2xl font-medium text-brand-ivory">Dịch thuật máy song ngữ chuyên sâu</h3>
                  </div>
                  <p className="text-brand-ivory/70 text-sm">
                    Từ điển chuyên ngành mô hình, cơ học và nghệ thuật cổ Việt Nam của Phi Long Studio được sử dụng để dịch nghĩa bản văn bản. Từ ngữ kỹ thuật được dịch chuẩn xác, tự nhiên, không bị ngô nghê như các công cụ dịch đại trà.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-[11px] leading-relaxed">
                    <div className="border border-brand-brown/50 p-4 bg-brand-charcoal/80 rounded-sm">
                      <span className="text-brand-gold border-b border-brand-brown/30 pb-1 block mb-2 font-bold uppercase tracking-wider">Bản Tiếng Anh (English Source)</span>
                      <p className="text-brand-ivory/50">"Carefully sand down the sprue attachment points before fitting the armor plate onto the main chassis hull. Use a thin cement to secure."</p>
                    </div>
                    <div className="border border-brand-gold/30 p-4 bg-brand-brown/10 rounded-sm">
                      <span className="text-brand-gold border-b border-brand-gold/20 pb-1 block mb-2 font-bold uppercase tracking-wider">Bản Tiếng Việt (Phi Long AI Translated)</span>
                      <p className="text-brand-gold">"Mài mịn cẩn thận các đầu chốt tháo vỉ (sprue points) trước khi lắp ghép tấm giáp lên khung sườn xe chính. Khuyên dùng keo dán nhựa mỏng chuyên dụng."</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Side-by-side Review */}
              {currentStep === 4 && (
                <div className="space-y-6 max-w-4xl mx-auto py-4" id="step-4-review">
                  <div className="flex items-center space-x-3 text-brand-gold">
                    <CheckSquare className="w-6 h-6 shrink-0" />
                    <h3 className="font-serif text-2xl font-medium text-brand-ivory">Hiệu đính và Duyệt song song</h3>
                  </div>
                  <p className="text-brand-ivory/70 text-xs">
                    Giao diện đối chiếu cho phép nghệ nhân kiểm tra bố cục trang sau khi dịch. Các đoạn văn dịch được xếp khít khao đúng vị trí cũ, bao quanh các hình ảnh nguyên trạng gốc.
                  </p>

                  {/* Interactive mock browser workspace double-page */}
                  <div className="border border-brand-brown/50 bg-brand-charcoal p-4 rounded-sm grid grid-cols-1 sm:grid-cols-2 gap-4 text-[10px] font-mono leading-normal">
                    {/* Page 1 (English original Layout) */}
                    <div className="border border-brand-brown/40 p-4 rounded-sm bg-brand-charcoal/40 space-y-3 opacity-60">
                      <div className="flex items-center justify-between border-b border-brand-brown/20 pb-1">
                        <span className="font-bold">PAGE 4 (ORIGINAL ORIGINAL)</span>
                        <span>Tamiya Co.</span>
                      </div>
                      <div className="h-10 bg-brand-brown/20 rounded-sm flex items-center justify-center">[Image: Chassis Front Assembly]</div>
                      <p>1. Attach parts A12 and A13 to the suspension arm.</p>
                      <p>2. Ensure proper alignment before gluing.</p>
                    </div>

                    {/* Page 2 (Vietnamese final Layout) */}
                    <div className="border border-brand-gold/30 p-4 rounded-sm bg-brand-brown/5 space-y-3">
                      <div className="flex items-center justify-between border-b border-brand-gold/20 pb-1 text-brand-gold font-bold">
                        <span>PAGE 4 (BẢN DỊCH HOÀN THIỆN)</span>
                        <span>Đã định vị trí</span>
                      </div>
                      <div className="h-10 bg-brand-brown/20 rounded-sm flex items-center justify-center text-brand-gold">[Ảnh: Khung gầm đằng trước]</div>
                      <p className="text-brand-gold">1. Ghép nối cấu kiện A12 và A13 vào tay đòn hệ thống treo.</p>
                      <p className="text-brand-gold">2. Đảm bảo căn chỉnh thẳng hàng trước khi tra keo dán.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 5: Pack & Export */}
              {currentStep === 5 && (
                <div className="space-y-6 max-w-2xl mx-auto py-6 text-center" id="step-5-export">
                  <div className="w-16 h-16 bg-brand-brown/20 border border-brand-gold/40 flex items-center justify-center rounded-full mx-auto animate-pulse">
                    <CheckCircle className="w-8 h-8 text-brand-gold" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl font-medium text-brand-ivory">Quá Trình Số Hóa Hoàn Tất</h3>
                    <p className="text-brand-ivory/70 text-sm leading-relaxed font-light">
                      Hệ thống đã bóc tách, dịch thuật chuyên từ vựng và tự động gói định dạng tệp PDF mới trùng khớp 100% tỷ lệ xích trang sách gốc của bạn.
                    </p>
                  </div>

                  <div className="p-4 bg-brand-brown/5 border border-brand-gold/20 rounded-sm max-w-md mx-auto space-y-2">
                    <span className="font-mono text-[9px] text-brand-gold block uppercase tracking-wider">Tệp PDF đầu ra sẵn sàng:</span>
                    <h4 className="font-mono text-xs text-brand-ivory font-bold">{uploadedFile?.name || 'Manual_Translated_Vietnamese.pdf'}</h4>
                    <p className="text-brand-ivory/40 text-[10px] font-mono">Dung lượng: {uploadedFile?.size || '14.20 MB'} • Định dạng: PDF Bảo Lưu Vector</p>
                  </div>

                  <div className="pt-4 flex justify-center gap-4">
                    <button 
                      onClick={() => alert('⚠️ PHIÊN BẢN THỬ NGHIỆM: Chức năng xuất PDF bị vô hiệu hóa vì đây chỉ là Giao diện mô phỏng UI.')}
                      className="px-6 py-2.5 bg-brand-gold text-brand-charcoal hover:bg-transparent hover:text-brand-gold border border-brand-gold font-mono text-xs uppercase tracking-widest font-bold rounded-sm transition-all flex items-center space-x-2 mx-auto"
                    >
                      <Download className="w-4 h-4" />
                      <span>Tải tài liệu dịch (.pdf)</span>
                    </button>
                  </div>
                </div>
              )}

            </div>

            {/* Bottom Actions Row */}
            <div className="pt-6 border-t border-brand-brown/30 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10" id="workspace-actions">
              {uploadedFile ? (
                <div className="flex items-center space-x-2 text-xs font-mono">
                  <FileText className="w-4 h-4 text-brand-gold" />
                  <span className="text-brand-ivory/50">Đang tải:</span>
                  <span className="text-brand-gold max-w-[200px] truncate font-semibold">{uploadedFile.name}</span>
                  <span className="text-brand-ivory/30">({uploadedFile.size})</span>
                  <button onClick={resetWorkspace} className="text-rose-400 hover:text-rose-300 text-[10px] font-bold uppercase tracking-wider pl-2 hover:underline">Huỷ</button>
                </div>
              ) : (
                <div className="text-xs text-brand-ivory/40 font-mono">Chưa chọn tài liệu đầu vào</div>
              )}

              {uploadedFile && (
                <div className="flex items-center space-x-3 w-full sm:w-auto justify-end">
                  {currentStep > 0 && (
                    <button 
                      onClick={handlePrevStep}
                      disabled={isProcessing}
                      className="px-4 py-2 border border-brand-brown/60 text-brand-ivory/70 hover:border-brand-gold hover:text-brand-gold text-xs font-mono uppercase tracking-widest rounded-sm transition-colors"
                    >
                      Quay lại
                    </button>
                  )}
                  {currentStep < 5 ? (
                    <button 
                      onClick={handleNextStep}
                      disabled={isProcessing}
                      className="px-6 py-2 bg-brand-gold text-brand-charcoal hover:bg-transparent hover:text-brand-gold border border-brand-gold text-xs font-mono uppercase tracking-widest font-bold rounded-sm transition-all flex items-center space-x-1.5"
                    >
                      {isProcessing ? (
                        <>
                          <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                          <span>Đang nạp...</span>
                        </>
                      ) : (
                        <>
                          <span>Tiếp tục</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  ) : (
                    <button 
                      onClick={resetWorkspace}
                      className="px-6 py-2 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-charcoal text-xs font-mono uppercase tracking-widest rounded-sm transition-all"
                    >
                      Dịch tài liệu khác
                    </button>
                  )}
                </div>
              )}
            </div>

          </div>

          {/* Large prominent disclaimer bar */}
          <div className="bg-red-950/20 border border-red-900/40 p-5 rounded-sm flex items-start space-x-3" id="demo-disclaimer-box">
            <AlertTriangle className="w-5 h-5 shrink-0 text-rose-400 animate-pulse mt-0.5" />
            <div className="space-y-1 text-xs text-brand-ivory/70">
              <span className="font-mono font-bold text-rose-300 uppercase block tracking-wider">⚠️ Ghi chú phát triển (Technical Disclosure)</span>
              <p className="font-sans font-light leading-relaxed">
                Độ lớn của các tệp PDF thật chưa thể xử lý thực tế do hệ thống chưa cài đặt máy chủ GPU dịch thuật hoặc kết nối API ngoài. Toàn bộ thông số, hình ảnh minh họa, quy trình bóc tách màng cột bên trên là kịch bản giả lập (Interactive Mockup UI) nhằm chứng minh năng lực UX/UI sáng tạo tối tân 2026 của Phi Long Studio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
