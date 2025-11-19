import React from 'react';
import { TimelineEvent, Language } from '../types';

interface Props {
  items: TimelineEvent[];
  lang: Language;
}

const Timeline: React.FC<Props> = ({ items, lang }) => {
  return (
    <div className="relative container mx-auto px-4 max-w-3xl">
      {/* Vertical Line */}
      <div className="absolute left-[19px] top-0 bottom-0 w-px bg-zinc-300"></div>

      <div className="space-y-8">
        {items.map((item, index) => {
          return (
            <div key={item.id} className="relative flex items-start group">
              
              {/* Dot */}
              <div className={`absolute left-[15px] top-1.5 w-2 h-2 bg-white border border-black group-hover:bg-black transition-colors z-10`}></div>

              {/* Content */}
              <div className="ml-10 w-full">
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-1">
                    <span className="font-mono text-black font-bold text-sm bg-zinc-200 px-1">
                        {item.year}
                    </span>
                    <h3 className="text-lg font-bold text-black">{item.title[lang]}</h3>
                </div>
                <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
                    [{item.type}]
                </div>
                <p className="text-zinc-600 text-sm border-l border-zinc-300 pl-4 py-1 group-hover:border-black transition-colors">
                  {item.description[lang]}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;