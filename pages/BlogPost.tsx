import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
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

interface Props {
  lang: Language;
}

interface BlogPostData {
  content: string;
  title: string;
  date: string;
  tags: string[];
}

const BlogPost: React.FC<Props> = ({ lang }) => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPost();
  }, [slug, lang]);

  const loadPost = async () => {
    try {
      // Import markdown file dynamically
      const modules = import.meta.glob('../content/blog/*.md', { query: '?raw', import: 'default' });
      
      // Find the file matching the slug
      const matchingPath = Object.keys(modules).find(path => path.includes(`/${slug}.md`));
      
      if (!matchingPath) {
        console.error('Post not found:', slug);
        setPost(null);
        setLoading(false);
        return;
      }
      
      const content = await modules[matchingPath]() as string;
      
      // Parse frontmatter
      const { data, content: body } = parseFrontmatter(content);
      
      const title = lang === 'en' ? data.title : (data.title_zh || data.title);
      
      // Split content by language separator (---) - must have empty lines around it
      const sections = body.split(/\n\s*---\s*\n/);
      let markdownContent = '';
      
      if (sections.length >= 2) {
        // Has both English and Chinese sections
        markdownContent = lang === 'en' ? sections[0] : sections[1];
      } else {
        // Only one section
        markdownContent = sections[0];
      }
      
      // Fix image paths - convert relative paths to work with vite
      markdownContent = markdownContent.replace(
        /!\[([^\]]*)\]\(\.\/([^)]+)\)/g,
        (match, alt, filename) => {
          // Import the image and get its URL
          return `![${alt}](/content/blog/${filename})`;
        }
      );
      
      setPost({
        title,
        date: data.date,
        tags: data.tags || [],
        content: markdownContent.trim()
      });
      setLoading(false);
    } catch (error) {
      console.error('Error loading post:', error);
      setPost(null);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-zinc-600">Loading...</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <Link to="/blog" className="text-blue-600 hover:underline">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="py-24 min-h-screen bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        
        {/* Back Button */}
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 text-sm mb-8 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          {lang === 'en' ? 'Back to Blog' : '返回博客'}
        </Link>

        {/* Post Header */}
        <header className="mb-12 pb-8 border-b-2 border-black">
          <h1 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-600 mb-4">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span 
                key={tag} 
                className="flex items-center gap-1 text-xs px-2 py-1 bg-zinc-100 border border-zinc-300"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Post Content */}
        <div className="prose prose-lg max-w-none
          prose-headings:font-bold prose-headings:text-black
          prose-h1:text-3xl prose-h1:mb-6 prose-h1:mt-8
          prose-h2:text-2xl prose-h2:mb-4 prose-h2:mt-10
          prose-h3:text-xl prose-h3:mb-3 prose-h3:mt-8
          prose-p:text-zinc-700 prose-p:leading-loose prose-p:mb-6
          prose-a:text-black prose-a:underline hover:prose-a:no-underline
          prose-strong:text-black prose-strong:font-bold
          prose-code:bg-zinc-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
          prose-pre:bg-zinc-900 prose-pre:text-zinc-100 prose-pre:p-4 prose-pre:rounded-none prose-pre:border-2 prose-pre:border-black
          prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
          prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
          prose-li:text-zinc-700 prose-li:mb-3 prose-li:leading-loose
          prose-blockquote:border-l-4 prose-blockquote:border-black prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-zinc-600 prose-blockquote:my-6
          prose-img:border-2 prose-img:border-black prose-img:my-8 prose-img:rounded
        ">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t-2 border-black">
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white text-sm font-bold hover:bg-zinc-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {lang === 'en' ? 'Back to All Posts' : '返回所有文章'}
          </Link>
        </footer>
      </div>
    </article>
  );
};

export default BlogPost;

