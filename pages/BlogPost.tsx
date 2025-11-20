import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { Language } from '../types';

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
      // In production, you would fetch the markdown file
      // For now, using placeholder
      setPost({
        title: lang === 'en' ? 'Welcome to My Blog' : '欢迎来到我的博客',
        date: '2025-01-15',
        tags: ['Meta', 'Introduction'],
        content: lang === 'en' 
          ? `# Welcome to My Blog\n\nThis is my personal blog where I share thoughts on research, technology, and life.\n\n## What to Expect\n\nI'll be writing about:\n- Research insights and paper reviews\n- Data science and machine learning topics\n- Academic life experiences\n- Tech explorations\n\nStay tuned for more content!`
          : `# 欢迎来到我的博客\n\n这是我的个人博客，我将在这里分享关于研究、技术和生活的思考。\n\n## 期待内容\n\n我会写关于：\n- 研究见解和论文评论\n- 数据科学和机器学习话题\n- 学术生活经验\n- 技术探索\n\n敬请期待更多内容！`
      });
      setLoading(false);
    } catch (error) {
      console.error('Error loading post:', error);
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
          prose-h1:text-3xl prose-h1:mb-4
          prose-h2:text-2xl prose-h2:mb-3 prose-h2:mt-8
          prose-h3:text-xl prose-h3:mb-2 prose-h3:mt-6
          prose-p:text-zinc-700 prose-p:leading-relaxed prose-p:mb-4
          prose-a:text-black prose-a:underline hover:prose-a:no-underline
          prose-strong:text-black prose-strong:font-bold
          prose-code:bg-zinc-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
          prose-pre:bg-zinc-900 prose-pre:text-zinc-100 prose-pre:p-4 prose-pre:rounded-none prose-pre:border-2 prose-pre:border-black
          prose-ul:my-4 prose-ul:list-disc prose-ul:pl-6
          prose-ol:my-4 prose-ol:list-decimal prose-ol:pl-6
          prose-li:text-zinc-700 prose-li:mb-2
          prose-blockquote:border-l-4 prose-blockquote:border-black prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-zinc-600
          prose-img:border-2 prose-img:border-black
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

