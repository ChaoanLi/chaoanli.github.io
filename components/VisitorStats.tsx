import React from 'react';
import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { AppData, Language } from '../types';
import { Users, ArrowUpRight } from 'lucide-react';

interface Props {
  stats: AppData['stats'];
  lang: Language;
}

const COLORS = ['#000000', '#404040', '#737373', '#a3a3a3'];

const VisitorStats: React.FC<Props> = ({ stats, lang }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-0 lg:border lg:border-black">
      {/* Total Count - Left Column */}
      <div className="col-span-1 lg:col-span-1 flex flex-col justify-center p-6 bg-white lg:border-r border-black">
         <div className="mb-4">
           <div className="flex items-center gap-2 mb-1 text-zinc-600">
              <Users className="w-4 h-4" />
              <p className="text-xs font-bold uppercase tracking-wider">
                {lang === 'en' ? 'Total Hits' : '总访问次数'}
              </p>
           </div>
           
           <p className="text-4xl font-bold text-black font-mono">
             {(stats.totalVisitors / 1000).toFixed(1)}k
           </p>
           <p className="text-xs text-green-700 mt-2 font-mono flex items-center gap-1 font-bold">
             <ArrowUpRight className="w-3 h-3" />
             <span>+12%</span>
           </p>
         </div>
      </div>

      {/* Charts - Right 3 Columns */}
      <div className="col-span-1 lg:col-span-3 grid grid-cols-1 md:grid-cols-2">
        
        {/* Traffic Bar Chart */}
        <div className="h-56 p-6 border-b md:border-b-0 md:border-r border-black bg-white">
          <h4 className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-4">
             {lang === 'en' ? 'Traffic_Log' : '流量日志'}
          </h4>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={stats.daily}>
              <CartesianGrid strokeDasharray="1 1" vertical={false} stroke="#e5e5e5" />
              <XAxis 
                dataKey="date" 
                axisLine={false} 
                tickLine={false} 
                tick={{fill: '#000', fontSize: 10, fontFamily: 'monospace'}} 
                dy={10} 
              />
              <Tooltip 
                cursor={{fill: '#f4f4f5'}}
                contentStyle={{backgroundColor: '#fff', border: '2px solid #000', color: '#000', fontFamily: 'monospace'}}
                itemStyle={{color: '#000'}}
              />
              <Bar dataKey="visitors" fill="#000000" barSize={10} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Geo Map Pie Chart */}
        <div className="h-56 p-6 bg-white">
           <h4 className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-4 flex items-center gap-2">
              {lang === 'en' ? 'Origin_IPs' : '来源分布'}
           </h4>
           <div className="flex items-center h-full">
              <div className="h-full w-1/2">
                 <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={stats.geo}
                        cx="50%"
                        cy="50%"
                        innerRadius={30}
                        outerRadius={50}
                        paddingAngle={2}
                        dataKey="visitors"
                        stroke="none"
                      >
                        {stats.geo.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{backgroundColor: '#fff', border: '2px solid #000', color: '#000', fontFamily: 'monospace'}}
                      />
                    </PieChart>
                 </ResponsiveContainer>
              </div>
              
              <div className="w-1/2 space-y-2 pl-4">
                 {stats.geo.slice(0, 3).map((item, index) => (
                    <div key={item.country} className="flex items-center gap-2 text-xs font-mono">
                       <div className="w-2 h-2 shrink-0" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                       <div className="flex justify-between w-full text-zinc-600">
                          <span>{item.country.toUpperCase()}</span>
                          <span>{item.visitors}%</span>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default VisitorStats;