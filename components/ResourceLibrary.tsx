import React, { useState } from 'react';
import { ResourceCategory, Language } from '../types';
import { Folder, ArrowUpRight, Search, Terminal } from 'lucide-react';

interface Props {
  categories: ResourceCategory[];
  lang: Language;
}

const ResourceLibrary: React.FC<Props> = ({ categories, lang }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = categories.map(cat => ({
    ...cat,
    links: cat.links.filter(link => 
      link.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      link.description?.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(cat => cat.links.length > 0);

  return (
    <div className="border-2 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]">
      <div className="p-4 border-b-2 border-black flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-zinc-50">
         <div className="flex items-center gap-2 text-black">
            <Terminal className="w-5 h-5" />
            <h2 className="text-lg font-bold font-mono">
              {lang === 'en' ? "~/resources" : "~/资源库"}
            </h2>
         </div>
         
         <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 text-zinc-500" />
            <input 
              type="text" 
              placeholder={lang === 'en' ? "grep resources..." : "检索..."}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-8 pr-4 py-1.5 bg-white border border-black text-black text-sm font-mono focus:outline-none focus:bg-zinc-100 placeholder-zinc-400"
            />
         </div>
      </div>

      <div className="p-6 bg-white min-h-[300px]">
        {filteredCategories.length === 0 ? (
           <div className="text-center py-12 text-zinc-400 font-mono">
             <p>404: No resources found.</p>
           </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredCategories.map(category => (
              <div key={category.id}>
                <h3 className="flex items-center gap-2 font-bold text-black mb-3 text-sm uppercase tracking-wider border-b border-zinc-200 pb-1">
                  <Folder className="w-4 h-4 text-black" />
                  {category.name[lang]}
                </h3>
                <ul className="space-y-1 ml-1">
                  {category.links.map((link, idx) => (
                    <li key={idx} className="group">
                      <a 
                        href={link.url} 
                        target="_blank" 
                        rel="noreferrer"
                        className="block p-2 hover:bg-zinc-100 transition-colors"
                      >
                        <div className="flex justify-between items-start">
                          <span className="text-blue-700 group-hover:underline decoration-1 underline-offset-2 font-mono text-sm font-bold">
                            ./{link.title}
                          </span>
                          <ArrowUpRight className="w-3 h-3 text-zinc-400 group-hover:text-black" />
                        </div>
                        {link.description && (
                            <p className="text-xs text-zinc-500 mt-1 font-mono truncate">
                              # {link.description}
                            </p>
                          )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourceLibrary;