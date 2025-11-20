import React from 'react';
import { Book, Film, Code, Target } from 'lucide-react';
import { Language, BookItem, MovieItem, SkillItem, GoalItem } from '../types';
import { SITE_DATA } from '../constants';

interface Props {
  lang: Language;
}

const ListsPage: React.FC<Props> = ({ lang }) => {
  return (
    <section className="py-24 min-h-screen bg-zinc-50">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Header */}
        <div className="mb-12 border-b-2 border-black pb-4 bg-white p-6">
          <h1 className="text-4xl font-bold text-black mb-2">
            {lang === 'en' ? 'My Lists' : '我的清单'}
          </h1>
          <p className="text-zinc-600 text-sm">
            {lang === 'en' 
              ? 'Books to read, movies to watch, skills to learn, and goals to achieve' 
              : '想读的书、想看的电影、想学的技能和想实现的目标'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Reading List */}
          <div className="border-2 border-black bg-white">
            <div className="bg-black text-white p-4 flex items-center gap-2">
              <Book className="w-5 h-5" />
              <h2 className="font-bold uppercase tracking-wider">
                {lang === 'en' ? 'Reading List' : '阅读清单'}
              </h2>
            </div>
            <div className="p-4 space-y-2">
              {SITE_DATA.lists.books.length === 0 ? (
                <p className="text-zinc-500 text-sm italic">
                  {lang === 'en' ? 'No books added yet.' : '暂无书籍'}
                </p>
              ) : (
                SITE_DATA.lists.books.map((book, idx) => (
                  <div key={idx} className="flex items-start gap-2 py-2 border-b border-zinc-200 last:border-0">
                    <input 
                      type="checkbox" 
                      checked={book.completed} 
                      readOnly
                      className="mt-1 accent-black"
                    />
                    <div className="flex-1">
                      <p className={`font-medium ${book.completed ? 'line-through text-zinc-500' : 'text-black'}`}>
                        {book.title}
                      </p>
                      {book.author && (
                        <p className="text-xs text-zinc-600">{book.author}</p>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Movies */}
          <div className="border-2 border-black bg-white">
            <div className="bg-black text-white p-4 flex items-center gap-2">
              <Film className="w-5 h-5" />
              <h2 className="font-bold uppercase tracking-wider">
                {lang === 'en' ? 'Watchlist' : '观影清单'}
              </h2>
            </div>
            <div className="p-4 space-y-2">
              {SITE_DATA.lists.movies.length === 0 ? (
                <p className="text-zinc-500 text-sm italic">
                  {lang === 'en' ? 'No movies added yet.' : '暂无电影'}
                </p>
              ) : (
                SITE_DATA.lists.movies.map((movie, idx) => (
                  <div key={idx} className="flex items-start gap-2 py-2 border-b border-zinc-200 last:border-0">
                    <input 
                      type="checkbox" 
                      checked={movie.completed} 
                      readOnly
                      className="mt-1 accent-black"
                    />
                    <div className="flex-1">
                      <p className={`font-medium ${movie.completed ? 'line-through text-zinc-500' : 'text-black'}`}>
                        {movie.title}
                      </p>
                      {movie.year && (
                        <p className="text-xs text-zinc-600">({movie.year})</p>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Skills */}
          <div className="border-2 border-black bg-white">
            <div className="bg-black text-white p-4 flex items-center gap-2">
              <Code className="w-5 h-5" />
              <h2 className="font-bold uppercase tracking-wider">
                {lang === 'en' ? 'Skills to Learn' : '技能学习'}
              </h2>
            </div>
            <div className="p-4 space-y-2">
              {SITE_DATA.lists.skills.length === 0 ? (
                <p className="text-zinc-500 text-sm italic">
                  {lang === 'en' ? 'No skills added yet.' : '暂无技能'}
                </p>
              ) : (
                SITE_DATA.lists.skills.map((skill, idx) => (
                  <div key={idx} className="flex items-start gap-2 py-2 border-b border-zinc-200 last:border-0">
                    <input 
                      type="checkbox" 
                      checked={skill.completed} 
                      readOnly
                      className="mt-1 accent-black"
                    />
                    <div className="flex-1">
                      <p className={`font-medium ${skill.completed ? 'line-through text-zinc-500' : 'text-black'}`}>
                        {skill.name}
                      </p>
                      {skill.progress && (
                        <div className="mt-1">
                          <div className="h-1 bg-zinc-200 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-black transition-all"
                              style={{ width: `${skill.progress}%` }}
                            />
                          </div>
                          <p className="text-xs text-zinc-600 mt-1">{skill.progress}%</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Goals */}
          <div className="border-2 border-black bg-white">
            <div className="bg-black text-white p-4 flex items-center gap-2">
              <Target className="w-5 h-5" />
              <h2 className="font-bold uppercase tracking-wider">
                {lang === 'en' ? 'Goals & Plans' : '目标与计划'}
              </h2>
            </div>
            <div className="p-4 space-y-2">
              {SITE_DATA.lists.goals.length === 0 ? (
                <p className="text-zinc-500 text-sm italic">
                  {lang === 'en' ? 'No goals added yet.' : '暂无目标'}
                </p>
              ) : (
                SITE_DATA.lists.goals.map((goal, idx) => (
                  <div key={idx} className="flex items-start gap-2 py-2 border-b border-zinc-200 last:border-0">
                    <input 
                      type="checkbox" 
                      checked={goal.completed} 
                      readOnly
                      className="mt-1 accent-black"
                    />
                    <div className="flex-1">
                      <p className={`font-medium ${goal.completed ? 'line-through text-zinc-500' : 'text-black'}`}>
                        {goal.title}
                      </p>
                      {goal.deadline && (
                        <p className="text-xs text-zinc-600">Due: {goal.deadline}</p>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ListsPage;

