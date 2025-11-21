import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Tag, Archive } from 'lucide-react';
import { Language } from '../types';

// Simple frontmatter parser for browser
function parseFrontmatter(content: string) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    return { data: {}, content: content };
  }
  
  const frontmatterText = match[1];
  const body = match[2];
  const data: any = {};
  
  frontmatterText.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) return;
    
    const key = line.substring(0, colonIndex).trim();
    let value = line.substring(colonIndex + 1).trim();
    
    // Parse arrays [item1, item2, item3]
    if (value.startsWith('[') && value.endsWith(']')) {
      value = value.slice(1, -1).split(',').map(v => v.trim());
    }
    
    data[key] = value;
  });
  
  return { data, content: body };
}

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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [archiveYear, setArchiveYear] = useState<string | null>(null);

  const loadBlogPosts = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Import all markdown files dynamically
      const modules = import.meta.glob('../content/blog/*.md', { query: '?raw', import: 'default' });
      const posts: BlogPost[] = [];
      
      console.log('🔍 Loading blog posts, found:', Object.keys(modules).length, 'files');
      
      for (const path in modules) {
        try {
          const content = await modules[path]() as string;
          const slug = path.split('/').pop()?.replace('.md', '') || '';
          
          console.log(`✅ Loaded ${slug}`);
          
          // Parse frontmatter
          const { data } = parseFrontmatter(content);
          
          const title = lang === 'en' ? data.title : (data.title_zh || data.title);
          const excerpt = lang === 'en' ? data.excerpt : (data.excerpt_zh || data.excerpt);
          
          posts.push({
            slug,
            title,
            date: data.date,
            excerpt,
            tags: data.tags || [],
            lang
          });
        } catch (err) {
          console.error(`❌ Error processing file:`, err);
        }
      }
      
      console.log('✨ All loaded posts:', posts.length);
      
      if (posts.length === 0) {
        setError('No posts could be loaded. Check console for details.');
      }
      
      // Sort by date (newest first)
      posts.sort((a, b) => b.date.localeCompare(a.date));
      setPosts(posts);
    } catch (error) {
      console.error('💥 Error loading blog posts:', error);
      setError(`Error loading posts: ${error}`);
    } finally {
      setLoading(false);
    }
  }, [lang]);

  useEffect(() => {
    // Load blog posts from markdown files
    loadBlogPosts();
  }, [loadBlogPosts]);

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
            {loading ? (
              <div className="border-2 border-black p-8 text-center">
                <p className="text-zinc-600">
                  {lang === 'en' ? 'Loading posts...' : '加载中...'}
                </p>
              </div>
            ) : error ? (
              <div className="border-2 border-red-500 p-8 text-center bg-red-50">
                <p className="text-red-600 font-bold mb-2">
                  {lang === 'en' ? 'Error Loading Posts' : '加载文章出错'}
                </p>
                <p className="text-sm text-red-500">{error}</p>
                <p className="text-xs text-zinc-500 mt-4">
                  {lang === 'en' ? 'Check browser console (F12) for details' : '请查看浏览器控制台(F12)了解详情'}
                </p>
              </div>
            ) : filteredPosts.length === 0 ? (
              <div className="border-2 border-black p-8 text-center">
                <p className="text-zinc-600">
                  {lang === 'en' ? 'No posts found.' : '暂无文章。'}
                </p>
                <p className="text-xs text-zinc-500 mt-2">
                  Total posts loaded: {posts.length}
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

