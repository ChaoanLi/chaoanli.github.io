import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Tag, Archive } from 'lucide-react';
import { Language } from '../types';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  lang: Language;
}

interface Props {
  lang: Language;
}

const BlogPage: React.FC<Props> = ({ lang }) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [archiveYear, setArchiveYear] = useState<string | null>(null);

  useEffect(() => {
    // Load blog posts from markdown files
    loadBlogPosts();
  }, []);

  const loadBlogPosts = async () => {
    // This will be populated with actual markdown files
    // For now, using placeholder data
    const samplePosts: BlogPost[] = [
      {
        slug: 'welcome',
        title: lang === 'en' ? 'Welcome to My Blog' : '欢迎来到我的博客',
        date: '2025-01-15',
        excerpt: lang === 'en' 
          ? 'Introduction to this blog and what to expect.' 
          : '博客介绍和内容预告。',
        tags: ['Meta', 'Introduction'],
        lang: lang
      }
    ];
    setPosts(samplePosts);
  };

  const years = Array.from(new Set(posts.map(p => p.date.substring(0, 4)))).sort().reverse();
  const allTags = Array.from(new Set(posts.flatMap(p => p.tags)));

  const filteredPosts = posts.filter(post => {
    if (selectedTag && !post.tags.includes(selectedTag)) return false;
    if (archiveYear && !post.date.startsWith(archiveYear)) return false;
    return true;
  });

  return (
    <section className="py-24 min-h-screen bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Header */}
        <div className="mb-12 border-b-2 border-black pb-4">
          <h1 className="text-4xl font-bold text-black mb-2">
            {lang === 'en' ? 'Blog' : '博客'}
          </h1>
          <p className="text-zinc-600 text-sm">
            {lang === 'en' 
              ? 'Thoughts on research, tech, and life' 
              : '关于研究、技术和生活的思考'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            
            {/* Archive */}
            <div className="border-2 border-black p-4 bg-zinc-50">
              <h3 className="text-sm font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
                <Archive className="w-4 h-4" />
                {lang === 'en' ? 'Archive' : '归档'}
              </h3>
              <div className="space-y-1">
                <button 
                  onClick={() => setArchiveYear(null)}
                  className={`block w-full text-left text-sm py-1 px-2 transition-colors ${
                    !archiveYear ? 'bg-black text-white' : 'hover:bg-zinc-200'
                  }`}
                >
                  {lang === 'en' ? 'All' : '全部'}
                </button>
                {years.map(year => (
                  <button
                    key={year}
                    onClick={() => setArchiveYear(year)}
                    className={`block w-full text-left text-sm py-1 px-2 transition-colors ${
                      archiveYear === year ? 'bg-black text-white' : 'hover:bg-zinc-200'
                    }`}
                  >
                    {year} ({posts.filter(p => p.date.startsWith(year)).length})
                  </button>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="border-2 border-black p-4 bg-zinc-50">
              <h3 className="text-sm font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
                <Tag className="w-4 h-4" />
                {lang === 'en' ? 'Tags' : '标签'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {allTags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                    className={`text-xs px-2 py-1 border transition-colors ${
                      selectedTag === tag 
                        ? 'bg-black text-white border-black' 
                        : 'bg-white border-zinc-400 hover:border-black'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

          </aside>

          {/* Blog Posts */}
          <div className="lg:col-span-3 space-y-6">
            {filteredPosts.length === 0 ? (
              <div className="border-2 border-black p-8 text-center">
                <p className="text-zinc-600">
                  {lang === 'en' ? 'No posts found.' : '暂无文章。'}
                </p>
              </div>
            ) : (
              filteredPosts.map(post => (
                <article key={post.slug} className="border-2 border-black p-6 bg-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow">
                  <Link to={`/blog/${post.slug}`}>
                    <h2 className="text-2xl font-bold text-black mb-2 hover:underline">
                      {post.title}
                    </h2>
                  </Link>
                  <div className="flex items-center gap-4 text-xs text-zinc-600 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                  </div>
                  <p className="text-zinc-700 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map(tag => (
                      <span key={tag} className="text-xs px-2 py-1 bg-zinc-100 border border-zinc-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default BlogPage;

