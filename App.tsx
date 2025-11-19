import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { SITE_DATA } from './constants';
import { Github, Mail, MapPin, Globe, FileText, User, Calendar, BookOpen, Linkedin, Lock, LogOut, Database, Terminal, Cpu, ChevronDown, BarChart3, ArrowDown } from 'lucide-react';
import Timeline from './components/Timeline';
import PublicationCard from './components/PublicationCard';
import VisitorStats from './components/VisitorStats';
import ResourceLibrary from './components/ResourceLibrary';
import BlogSection from './components/BlogSection';

// Custom Icons
const ResearchGateIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.54 6.57c-1.02 0-1.96.21-2.79.6l-.62-1.71c.89-.37 1.94-.57 3.11-.57 1.94 0 3.47.5 4.39 1.35.84.76 1.27 1.74 1.27 2.87 0 1.27-.4 2.29-1.23 3.07-.84.77-1.95 1.17-3.43 1.17H19v5.34h-2.6V13.3h-2v-1.8h2V9.09c0-.7.15-1.22.46-1.55.3-.34.78-.5 1.52-.5.47 0 .92.08 1.31.23l.85-1.8zm-10 4.93h1.53v6.84h-2.4l-.27-1.24c-.73.99-1.7 1.48-2.96 1.48-1.2 0-2.2-.42-2.93-1.24-.7-.82-1.06-1.92-1.06-3.29 0-1.38.36-2.48 1.07-3.29.72-.81 1.69-1.22 2.92-1.22 1.25 0 2.22.46 2.91 1.38l.24-1.42H9.54v6zm-1.42 4.27c.53 0 .93-.2 1.21-.57.29-.4.42-.92.42-1.61 0-1.44-.54-2.15-1.63-2.15-.53 0-.94.19-1.22.57-.29.39-.43.92-.43 1.61 0 .68.14 1.2.43 1.58.28.38.69.57 1.22.57z"/>
  </svg>
);

const GoogleScholarIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M5.242 13.769L0.5 9.5 12 1l11.5 9-4.742 4.269C18.623 15.597 17.078 16 15.5 16c-2.69 0-4.968-1.162-5.258-2.231zM12 3.5L3.5 9.5 12 15.5l8.5-6L12 3.5z"/>
    <path d="M12 17c-3.822 0-7.114-1.392-7.938-4.287C4.018 12.856 4 13.023 4 13.2C4 16.954 7.582 20 12 20s8-3.046 8-6.8c0-.177-.018-.344-.062-.487C19.114 15.608 15.822 17 12 17z"/>
  </svg>
);

const NAV_ITEMS = [
  { id: 'about', label: { en: '~/about', zh: '~/关于' }, icon: Terminal },
  { id: 'publications', label: { en: '~/research', zh: '~/研究' }, icon: BookOpen },
  { id: 'timeline', label: { en: '~/history', zh: '~/历史' }, icon: Calendar },
  { id: 'resources', label: { en: '~/stash', zh: '~/收藏' }, icon: Database },
  { id: 'blog', label: { en: '~/logs', zh: '~/日志' }, icon: FileText },
];

function App() {
  const [lang, setLang] = useState<Language>('en');
  const [activeSection, setActiveSection] = useState('about');
  const [isAdmin, setIsAdmin] = useState(false);

  const toggleLang = () => setLang(prev => prev === 'en' ? 'zh' : 'en');

  // Admin Login Handler
  const handleAdminLogin = () => {
    if (isAdmin) {
      setIsAdmin(false);
    } else {
      const password = window.prompt("root@system:~$ enter_password");
      if (password === 'admin') {
        setIsAdmin(true);
      } else if (password) {
        alert("Access Denied.");
      }
    }
  };

  // Smooth scroll handler
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  // Active section observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2, rootMargin: '-20% 0px -50% 0px' }
    );

    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

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
      {/* Fixed Navigation - Brutalist White Header */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/95 border-b-2 border-black backdrop-blur-sm">
        <div className="container mx-auto px-4 h-14 flex items-center justify-between">
          <div className="font-bold text-lg text-black flex items-center gap-2">
            <span className="bg-black text-white px-1">root@chaoan:</span>
            <span className="cursor-blink text-black">~</span>
          </div>

          <div className="flex items-center gap-1 sm:gap-4">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`hidden sm:block px-3 py-1 text-xs transition-all border border-transparent hover:border-black ${
                  activeSection === item.id 
                    ? 'text-white bg-black font-bold border-black' 
                    : 'text-zinc-500 hover:text-black'
                }`}
              >
                {item.label[lang]}
              </button>
            ))}
            
            {/* Mobile Nav Icon Only */}
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`sm:hidden p-2 transition-colors ${
                  activeSection === item.id ? 'text-black bg-zinc-100' : 'text-zinc-500'
                }`}
              >
                <item.icon className="w-4 h-4" />
              </button>
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
        
        {/* Hero / About Section */}
        <section id="about" className="relative min-h-screen flex flex-col border-b-2 border-black">
          {/* Profile Content */}
          <div className="flex-1 flex items-center justify-center py-20">
            <div className="container mx-auto px-4">
              <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
                
                {/* Left: Text Info */}
                <div className="flex-1 text-center lg:text-left w-full">
                  <div className="inline-block border border-black bg-zinc-100 text-black px-3 py-1 text-xs font-bold uppercase tracking-widest mb-6">
                    {'>'} {SITE_DATA.profile.title[lang]}
                  </div>
                  
                  <h1 className="text-4xl lg:text-6xl font-bold text-black mb-6 tracking-tighter">
                    {lang === 'en' ? 'Hi, I\'m' : '你好，我是'} <span className="bg-black text-white px-2">{SITE_DATA.profile.name[lang]}</span>
                    <span className="animate-pulse">_</span>
                  </h1>
                  
                  <p className="text-lg text-zinc-700 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 border-l-4 border-black pl-6">
                    {SITE_DATA.profile.bio[lang]}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center gap-4 mb-10 text-zinc-600 text-sm justify-center lg:justify-start font-bold">
                     <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-black" />
                        {SITE_DATA.profile.location[lang]}
                     </div>
                     <div className="hidden sm:block text-zinc-400">|</div>
                     <div className="flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-black" />
                        {SITE_DATA.profile.affiliation[lang]}
                     </div>
                  </div>

                  <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-10">
                    {SITE_DATA.profile.researchInterests.map((interest, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white border border-zinc-400 text-zinc-800 text-xs hover:border-black hover:bg-black hover:text-white transition-all cursor-crosshair">
                        {interest[lang]}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-center lg:justify-start">
                    <SocialLinks iconSize="w-5 h-5" />
                  </div>
                </div>

                {/* Right: Avatar */}
                <div className="relative shrink-0 mb-8 lg:mb-0 group">
                   <div className="absolute inset-0 border-2 border-black translate-x-2 translate-y-2 bg-zinc-200 transition-transform group-hover:translate-x-3 group-hover:translate-y-3"></div>
                   <img 
                    src={SITE_DATA.profile.avatarUrl} 
                    alt="Profile" 
                    className="relative w-64 h-64 lg:w-80 lg:h-80 object-cover grayscale transition-all duration-500 hover:grayscale-0 border-2 border-black bg-white z-10"
                   />
                </div>

              </div>
            </div>
          </div>

          {/* Stats Section - Grid Style */}
          <div className="bg-zinc-50 border-y-2 border-black py-12 relative overflow-hidden">
             {/* Background Grid */}
             <div className="absolute inset-0 opacity-5" 
                  style={{backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px'}}>
             </div>
             <div className="container mx-auto px-4 relative z-10">
                <div className="flex items-center gap-2 mb-8 text-black">
                   <BarChart3 className="w-4 h-4" />
                   <h3 className="text-xs font-bold uppercase tracking-widest">
                     ./system_metrics
                   </h3>
                </div>
                <VisitorStats stats={SITE_DATA.stats} lang={lang} />
             </div>
          </div>
        </section>

        {/* Publications Section */}
        <section id="publications" className="py-24 border-b-2 border-black bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="flex items-end gap-4 mb-12 border-b-2 border-black pb-4">
              <h2 className="text-3xl font-bold text-black">
                {lang === 'en' ? 'Selected Publications' : '精选论文'}
              </h2>
              <span className="text-zinc-500 text-sm font-mono mb-1">[{SITE_DATA.publications.length}]</span>
            </div>
            <div className="grid gap-6">
              {SITE_DATA.publications.map(pub => (
                <PublicationCard key={pub.id} pub={pub} lang={lang} />
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section id="timeline" className="py-24 border-b-2 border-black bg-zinc-50 relative">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold text-black mb-2">
                {lang === 'en' ? 'Execution Log' : '执行日志'}
              </h2>
              <p className="text-zinc-500 text-xs font-mono">Trace route of career path</p>
            </div>
            <Timeline items={SITE_DATA.timeline} lang={lang} />
          </div>
        </section>

        {/* Resources Section */}
        <section id="resources" className="py-24 border-b-2 border-black bg-white">
           <div className="container mx-auto px-4 max-w-5xl">
              <ResourceLibrary categories={SITE_DATA.resources} lang={lang} />
           </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="py-24 bg-zinc-50">
          <div className="container mx-auto px-4 max-w-4xl">
             <div className="flex items-center justify-between mb-12 border-b-2 border-black pb-4">
              <h2 className="text-3xl font-bold text-black">
                {lang === 'en' ? 'Dev Logs' : '开发日志'}
              </h2>
              {isAdmin && (
                 <span className="px-2 py-0.5 bg-red-100 text-red-600 text-xs font-bold uppercase border border-red-600">
                    [SU] Mode
                 </span>
              )}
             </div>

             <BlogSection 
                initialPosts={SITE_DATA.blog} 
                lang={lang} 
                isAdmin={isAdmin}
             />
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white text-black py-12 border-t-2 border-black">
          <div className="container mx-auto px-4 flex flex-col items-center">
             <div className="flex gap-6 mb-8">
                <SocialLinks className="text-zinc-600" />
             </div>
             <p className="text-xs font-mono mb-6">
               © {new Date().getFullYear()} {SITE_DATA.profile.name.en} <span className="text-black font-bold">///</span> END OF LINE
             </p>
             
             {/* Admin Login Trigger */}
             <button 
               onClick={handleAdminLogin} 
               className="group text-[10px] uppercase tracking-widest flex items-center gap-2 text-zinc-500 hover:text-black transition-colors"
             >
               {isAdmin ? <LogOut className="w-3 h-3" /> : <Lock className="w-3 h-3" />}
               {isAdmin ? 'SYSTEM_LOGOUT' : 'AUTH_ROOT'}
             </button>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;