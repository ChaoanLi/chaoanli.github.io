import React from 'react';
import { ExternalLink, Github, Globe } from 'lucide-react';
import { Language } from '../types';
import { SITE_DATA } from '../constants';

interface Props {
  lang: Language;
}

const ProjectsPage: React.FC<Props> = ({ lang }) => {
  return (
    <section className="py-24 min-h-screen bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Header */}
        <div className="mb-12 border-b-2 border-black pb-4">
          <h1 className="text-4xl font-bold text-black mb-2">
            {lang === 'en' ? 'Projects' : '项目'}
          </h1>
          <p className="text-zinc-600 text-sm">
            {lang === 'en' 
              ? 'Side projects and experimental work' 
              : '个人项目和实验性作品'}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SITE_DATA.projects.length === 0 ? (
            <div className="col-span-2 border-2 border-black p-12 text-center">
              <p className="text-zinc-600">
                {lang === 'en' ? 'No projects added yet.' : '暂无项目'}
              </p>
            </div>
          ) : (
            SITE_DATA.projects.map((project) => (
              <div 
                key={project.id} 
                className="border-2 border-black bg-white hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                {/* Project Header */}
                <div className="bg-zinc-100 border-b-2 border-black p-4">
                  <h2 className="text-xl font-bold text-black mb-1">
                    {project.title[lang]}
                  </h2>
                  <p className="text-xs text-zinc-600 uppercase tracking-wider">
                    {project.category}
                  </p>
                </div>

                {/* Project Body */}
                <div className="p-6">
                  <p className="text-zinc-700 mb-4 leading-relaxed">
                    {project.description[lang]}
                  </p>

                  {/* Tech Stack */}
                  {project.tech && project.tech.length > 0 && (
                    <div className="mb-4">
                      <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">
                        {lang === 'en' ? 'Tech Stack' : '技术栈'}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, idx) => (
                          <span 
                            key={idx} 
                            className="text-xs px-2 py-1 bg-white border border-zinc-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Status */}
                  {project.status && (
                    <div className="mb-4">
                      <span className={`inline-block text-xs px-2 py-1 font-bold uppercase border-2 ${
                        project.status === 'active' 
                          ? 'bg-green-100 text-green-800 border-green-800' 
                          : project.status === 'archived'
                          ? 'bg-zinc-100 text-zinc-600 border-zinc-600'
                          : 'bg-yellow-100 text-yellow-800 border-yellow-800'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  )}

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-black text-white text-sm font-bold hover:bg-zinc-800 transition-colors"
                      >
                        <Globe className="w-4 h-4" />
                        {lang === 'en' ? 'Live Demo' : '在线演示'}
                      </a>
                    )}
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 border-2 border-black text-black text-sm font-bold hover:bg-zinc-100 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        {lang === 'en' ? 'Source' : '源码'}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;

