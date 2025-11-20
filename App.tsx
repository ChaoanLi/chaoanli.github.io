import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Language } from './types';
import { SITE_DATA } from './constants';
import { Github, Mail, Linkedin, Terminal } from 'lucide-react';

// Pages
import Home from './pages/Home';
import BlogPage from './pages/BlogPage';
import BlogPost from './pages/BlogPost';
import ResourcesPage from './pages/ResourcesPage';
import ListsPage from './pages/ListsPage';
import ProjectsPage from './pages/ProjectsPage';

// Custom Icons
const ResearchGateIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.54 6.57c-1.02 0-1.96.21-2.79.6l-.62-1.71c.89-.37 1.94-.57 3.11-.57 1.94 0 3.47.5 4.39 1.35.84.76 1.27 1.74 1.27 2.87 0 1.27-.4 2.29-1.23 3.07-.84.77-1.95 1.17-3.43 1.17H19v5.34h-2.6V13.3h-2v-1.8h2V9.09c0-.7.15-1.22.46-1.55.3-.34.78-.5 1.52-.5.47 0 .92.08 1.31.23l.85-1.8zm-10 4.93h1.53v6.84h-2.4l-.27-1.24c-.73.99-1.7 1.48-2.96 1.48-1.2 0-2.2-.42-2.93-1.24-.7-.82-1.06-1.92-1.06-3.29 0-1.38.36-2.48 1.07-3.29.72-.81 1.69-1.22 2.92-1.22 1.25 0 2.22.46 2.91 1.38l.24-1.42H9.54v6zm-1.42 4.27c.53 0 .93-.2 1.21-.57.29-.4.42-.92.42-1.61 0-1.44-.54-2.15-1.63-2.15-.53 0-.94.19-1.22.57-.29.39-.43.92-.43 1.61 0 .68.14 1.2.43 1.58.28.38.69.57 1.22.57z"/>
  </svg>
);

const GoogleScholarIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M5.242 13.769L0.5 9.5 12 1l11.5 9-4.742 4.269C18.623 15.597 17.078 16 15.5 16c-2.69 0-4.968-1.162-5.258-2.231zM12 3.5L3.5 9.5 12 15.5l8.5-6L12 3.5z"/>
    <path d="M12 17c-3.822 0-7.114-1.392-7.938-4.287C4.018 12.856 4 13.023 4 13.2 4 16.954 7.582 20 12 20s8-3.046 8-6.8c0-.177-.018-.344-.062-.487C19.114 15.608 15.822 17 12 17z"/>
  </svg>
);

const NAV_ITEMS = [
  { path: '/', label: { en: '~/home', zh: '~/主页' } },
  { path: '/blog', label: { en: '~/blog', zh: '~/博客' } },
  { path: '/projects', label: { en: '~/projects', zh: '~/项目' } },
  { path: '/lists', label: { en: '~/lists', zh: '~/清单' } },
  { path: '/resources', label: { en: '~/resources', zh: '~/资源' } },
];

function AppContent() {
  const [lang, setLang] = useState<Language>('en');
  const location = useLocation();

  const toggleLang = () => setLang(prev => prev === 'en' ? 'zh' : 'en');

  const SocialLinks = ({ className = "", iconSize = "w-5 h-5" }) => (
    <div className={`flex gap-6 ${className}`}>
      {SITE_DATA.profile.email && (
        <a 
          href={`mailto:${SITE_DATA.profile.email}`} 
          className="text-zinc-500 hover:text-black transition-colors"
          title="Email"
        >
          <Mail className={iconSize} />
        </a>
      )}
      {SITE_DATA.profile.github && (
        <a 
          href={SITE_DATA.profile.github} 
          target="_blank" 
          rel="noreferrer" 
          className="text-zinc-500 hover:text-black transition-colors"
          title="GitHub"
        >
          <Github className={iconSize} />
        </a>
      )}
      {SITE_DATA.profile.googleScholar && (
        <a 
          href={SITE_DATA.profile.googleScholar} 
          target="_blank" 
          rel="noreferrer" 
          className="text-zinc-500 hover:text-black transition-colors"
          title="Google Scholar"
        >
          <GoogleScholarIcon className={iconSize} />
        </a>
      )}
      {SITE_DATA.profile.linkedin && (
        <a 
          href={SITE_DATA.profile.linkedin} 
          target="_blank" 
          rel="noreferrer" 
          className="text-zinc-500 hover:text-black transition-colors"
          title="LinkedIn"
        >
          <Linkedin className={iconSize} />
        </a>
      )}
      {SITE_DATA.profile.researchgate && (
        <a 
          href={SITE_DATA.profile.researchgate} 
          target="_blank" 
          rel="noreferrer" 
          className="text-zinc-500 hover:text-black transition-colors"
          title="ResearchGate"
        >
          <ResearchGateIcon className={iconSize} />
        </a>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-mono">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/95 border-b-2 border-black backdrop-blur-sm">
        <div className="container mx-auto px-4 h-14 flex items-center justify-between">
          <Link to="/" className="font-bold text-lg text-black flex items-center gap-2">
            <span className="bg-black text-white px-1">root@chaoan:</span>
            <span className="cursor-blink text-black">~</span>
          </Link>

          <div className="flex items-center gap-1 sm:gap-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`hidden sm:block px-3 py-1 text-xs transition-all border border-transparent hover:border-black ${
                  location.pathname === item.path || (item.path === '/blog' && location.pathname.startsWith('/blog'))
                    ? 'text-white bg-black font-bold border-black' 
                    : 'text-zinc-500 hover:text-black'
                }`}
              >
                {item.label[lang]}
              </Link>
            ))}

            <div className="w-px h-4 bg-zinc-300 mx-2"></div>

            <button 
              onClick={toggleLang}
              className="px-2 py-1 text-xs font-bold border border-zinc-300 hover:border-black hover:bg-black hover:text-white transition-all text-zinc-600"
            >
              {lang === 'en' ? '[EN]' : '[中文]'}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-14">
        <Routes>
          <Route path="/" element={<Home lang={lang} SocialLinks={SocialLinks} />} />
          <Route path="/blog" element={<BlogPage lang={lang} />} />
          <Route path="/blog/:slug" element={<BlogPost lang={lang} />} />
          <Route path="/projects" element={<ProjectsPage lang={lang} />} />
          <Route path="/lists" element={<ListsPage lang={lang} />} />
          <Route path="/resources" element={<ResourcesPage lang={lang} />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-white text-black py-12 border-t-2 border-black">
        <div className="container mx-auto px-4 flex flex-col items-center">
           <div className="flex gap-6 mb-8">
              <SocialLinks className="text-zinc-600" />
           </div>
           <p className="text-xs font-mono mb-2">
             © {new Date().getFullYear()} {SITE_DATA.profile.name.en}
           </p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
