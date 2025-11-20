import React from 'react';
import { Language } from '../types';
import PublicationCard from '../components/PublicationCard';
import { SITE_DATA } from '../constants';

interface Props {
  lang: Language;
}

const ResearchPage: React.FC<Props> = ({ lang }) => {
  return (
    <section className="py-24 min-h-screen bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Header */}
        <div className="mb-12 border-b-2 border-black pb-4">
          <h1 className="text-4xl font-bold text-black mb-2">
            {lang === 'en' ? 'Research & Publications' : '研究与论文'}
          </h1>
          <p className="text-zinc-600 text-sm">
            {lang === 'en' 
              ? 'Selected publications and research work' 
              : '精选论文与研究成果'}
          </p>
          <div className="mt-2 text-sm text-zinc-500 font-mono">
            [{SITE_DATA.publications.length} {lang === 'en' ? 'publications' : '篇论文'}]
          </div>
        </div>

        {/* Publications */}
        <div className="grid gap-6">
          {SITE_DATA.publications.length === 0 ? (
            <div className="border-2 border-black p-12 text-center">
              <p className="text-zinc-600">
                {lang === 'en' ? 'No publications added yet.' : '暂无论文'}
              </p>
            </div>
          ) : (
            SITE_DATA.publications.map(pub => (
              <PublicationCard key={pub.id} pub={pub} lang={lang} />
            ))
          )}
        </div>

        {/* Research Interests Section */}
        <div className="mt-16 border-2 border-black p-8 bg-zinc-50">
          <h2 className="text-xl font-bold text-black mb-4 uppercase tracking-wider">
            {lang === 'en' ? 'Research Interests' : '研究兴趣'}
          </h2>
          <div className="flex flex-wrap gap-3">
            {SITE_DATA.profile.researchInterests.map((interest, idx) => (
              <span 
                key={idx} 
                className="px-4 py-2 bg-white border-2 border-black text-black font-bold text-sm hover:bg-black hover:text-white transition-all cursor-default"
              >
                {interest[lang]}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchPage;

