import React from 'react';
import { Language } from '../types';
import ResourceLibrary from '../components/ResourceLibrary';
import { SITE_DATA } from '../constants';

interface Props {
  lang: Language;
}

const ResourcesPage: React.FC<Props> = ({ lang }) => {
  return (
    <section className="py-24 min-h-screen bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-12 border-b-2 border-black pb-4">
          <h1 className="text-4xl font-bold text-black mb-2">
            {lang === 'en' ? 'Resource Library' : '资源库'}
          </h1>
          <p className="text-zinc-600 text-sm">
            {lang === 'en' 
              ? 'Curated links and tools for research and development' 
              : '精选的研究和开发工具链接'}
          </p>
        </div>
        <ResourceLibrary categories={SITE_DATA.resources} lang={lang} />
      </div>
    </section>
  );
};

export default ResourcesPage;

