import React from 'react';
import { Language } from '../types';
import Timeline from '../components/Timeline';
import { SITE_DATA } from '../constants';

interface Props {
  lang: Language;
}

const HistoryPage: React.FC<Props> = ({ lang }) => {
  return (
    <section className="py-24 min-h-screen bg-zinc-50">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold text-black mb-4">
            {lang === 'en' ? 'Academic Timeline' : '学术历程'}
          </h1>
          <p className="text-zinc-600 text-sm font-mono mb-2">
            {lang === 'en' ? 'Execution log of career path' : '职业路径执行日志'}
          </p>
          <div className="text-xs text-zinc-500 font-mono">
            [{SITE_DATA.timeline.length} {lang === 'en' ? 'milestones' : '个里程碑'}]
          </div>
        </div>

        {/* Timeline */}
        {SITE_DATA.timeline.length === 0 ? (
          <div className="max-w-2xl mx-auto border-2 border-black p-12 text-center bg-white">
            <p className="text-zinc-600">
              {lang === 'en' ? 'No timeline events added yet.' : '暂无时间线事件'}
            </p>
          </div>
        ) : (
          <Timeline items={SITE_DATA.timeline} lang={lang} />
        )}
      </div>
    </section>
  );
};

export default HistoryPage;

