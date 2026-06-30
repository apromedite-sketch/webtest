import React from 'react';
import { RouterProvider, useRouter } from './components/RouterContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Magazine } from './components/Magazine';
import { AppsHub } from './components/AppsHub';
import { PdfTranslator } from './components/PdfTranslator';
import { AppWorkspacePlaceholder } from './components/AppWorkspacePlaceholder';
import { Contact } from './components/Contact';
import { Login } from './components/Login';
import { Compass } from 'lucide-react';

const MainLayout: React.FC = () => {
  const { currentPath, navigateTo } = useRouter();

  // Route routing mapping logic
  const renderView = () => {
    // 1. Home
    if (currentPath === '/' || currentPath === '') {
      return <Home />;
    }

    // 2. About
    if (currentPath === '/gioi-thieu') {
      return <About />;
    }

    // 3. Projects
    if (currentPath.startsWith('/du-an')) {
      return <Projects />;
    }

    // 4. Magazine
    if (currentPath.startsWith('/tap-chi')) {
      return <Magazine />;
    }

    // 5. PDF Translator workspace (completely isolated, custom layout)
    if (currentPath === '/ung-dung/pdf-translator') {
      return <PdfTranslator />;
    }

    // 6. Other Application Workspaces / Placeholders
    if (
      currentPath.startsWith('/ung-dung/') &&
      (currentPath.includes('model-archive') || 
       currentPath.includes('research-assistant') || 
       currentPath.includes('creative-tools') || 
       currentPath.includes('creative-studio-tools'))
    ) {
      return <AppWorkspacePlaceholder />;
    }

    // 7. Applications Hub
    if (currentPath === '/ung-dung' || currentPath === '/ung-dung/') {
      return <AppsHub />;
    }

    // 8. Contact
    if (currentPath === '/lien-he') {
      return <Contact />;
    }

    // 8.5. Login
    if (currentPath === '/dang-nhap') {
      return <Login />;
    }

    // 9. Custom 404 Not Found Page
    return (
      <div className="max-w-4xl mx-auto px-6 py-24 text-center space-y-6" id="app-404-error">
        <Compass className="w-16 h-16 text-brand-gold mx-auto animate-spin-slow" />
        <span className="font-mono text-xs text-brand-gold uppercase tracking-[0.2em] block">Đường Dẫn Không Hợp Lệ</span>
        <h1 className="font-serif text-4xl text-brand-ivory font-medium">Trang Thất Lạc</h1>
        <p className="text-brand-ivory/60 text-sm max-w-md mx-auto leading-relaxed">
          Đường dẫn "{currentPath}" không khớp với bất kỳ chuyên mục, bài viết tạp chí, dự án, hay ứng dụng AI nào của Phi Long Studio.
        </p>
        <div>
          <button 
            onClick={() => navigateTo('/')}
            className="px-8 py-3 bg-brand-gold text-brand-charcoal hover:bg-transparent hover:text-brand-gold border border-brand-gold text-xs font-mono uppercase tracking-widest font-semibold rounded-sm transition-all"
          >
            Quay về trang chủ
          </button>
        </div>
      </div>
    );
  };

  // Check if current view is the PDF translator workspace or other app mockup (which should have its own isolated workspace headers)
  const isIsolatedWorkspace = currentPath === '/ung-dung/pdf-translator' || 
                             (currentPath.startsWith('/ung-dung/') && !currentPath.endsWith('/ung-dung'));

  const showFooter = !isIsolatedWorkspace && currentPath !== '/' && currentPath !== '';

  return (
    <div className="min-h-screen flex flex-col bg-brand-charcoal text-brand-ivory" id="phi-long-studio-app-root">
      {!isIsolatedWorkspace && <Header />}
      
      {/* Content wrapper with a subtle enter fade-in animation */}
      <main className="flex-1 w-full animate-fade-in">
        {renderView()}
      </main>

      {showFooter && <Footer />}
    </div>
  );
};

export default function App() {
  return (
    <RouterProvider>
      <MainLayout />
    </RouterProvider>
  );
}
