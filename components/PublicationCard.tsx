import React from 'react';
import { ExternalLink, BookOpen, Terminal } from 'lucide-react';
import { Publication, Language } from '../types';

interface Props {
  pub: Publication;
  lang: Language;
}

const PublicationCard: React.FC<Props> = ({ pub, lang }) => {
  return (
    <div className="group relative bg-white border border-black p-6 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 text-xs font-mono text-zinc-500 mb-2">
             <span className="text-black font-bold">[{pub.year}]</span>
             <span>./{pub.venue}</span>
          </div>
          <h3 className="text-xl font-bold text-black mb-2 group-hover:underline decoration-2 underline-offset-4">
            {pub.title}
          </h3>
          <p className="text-zinc-600 text-sm mb-4 font-mono">
            &lt;authors&gt; {pub.authors.join(', ')} &lt;/authors&gt;
          </p>
          <p className="text-zinc-700 text-sm leading-relaxed mb-5 border-l-2 border-zinc-200 pl-4">
            // {pub.abstract[lang]}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {pub.tags.map(tag => (
              <span key={tag} className="text-[10px] uppercase tracking-wider px-2 py-1 border border-zinc-300 text-zinc-600">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-row md:flex-col gap-2 shrink-0 mt-4 md:mt-0">
          {pub.link && (
            <a 
              href={pub.link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2 text-xs font-bold uppercase text-white bg-black hover:bg-zinc-800 transition-colors w-full md:w-auto"
            >
              <ExternalLink className="w-3 h-3" />
              {lang === 'en' ? 'READ_PDF' : '阅读论文'}
            </a>
          )}
           <button className="flex items-center justify-center gap-2 px-4 py-2 text-xs font-bold uppercase text-black border border-black hover:bg-zinc-100 transition-colors w-full md:w-auto">
              <Terminal className="w-3 h-3" />
              BibTeX
           </button>
        </div>
      </div>
    </div>
  );
};

export default PublicationCard;