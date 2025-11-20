import React from 'react';
import { MapPin, Cpu } from 'lucide-react';
import { Language } from '../types';
import { SITE_DATA } from '../constants';
import Timeline from '../components/Timeline';
import PublicationCard from '../components/PublicationCard';

interface Props {
  lang: Language;
  SocialLinks: React.ComponentType<{ className?: string; iconSize?: string }>;
}

const Home: React.FC<Props> = ({ lang, SocialLinks }) => {
  return (
    <>
      {/* Hero / About Section */}
      <section id="about" className="relative min-h-screen flex items-center justify-center border-b-2 border-black">
        <div className="container mx-auto px-4 py-20">
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
    </>
  );
};

export default Home;

