import React, { useState } from 'react';
import { BlogPost, Language, LocalizedText } from '../types';
import { Edit, MessageSquare, Plus, Save, Trash2, Send, Terminal } from 'lucide-react';

interface Props {
  initialPosts: BlogPost[];
  lang: Language;
  isAdmin: boolean;
}

const BlogSection: React.FC<Props> = ({ initialPosts, lang, isAdmin }) => {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [newPostMode, setNewPostMode] = useState(false);
  
  const [tempPost, setTempPost] = useState<Partial<BlogPost>>({
    title: { en: '', zh: '' },
    summary: { en: '', zh: '' },
    content: { en: '', zh: '' },
    tags: []
  });

  const [activeCommentPost, setActiveCommentPost] = useState<string | null>(null);
  const [commentForm, setCommentForm] = useState({ name: '', email: '', content: '' });

  const handleLike = (id: string) => {
    setPosts(prev => prev.map(p => 
      p.id === id ? { ...p, likes: p.likes + 1 } : p
    ));
  };

  const handleSavePost = () => {
    if (!tempPost.title?.en || !tempPost.content?.en) return;

    if (newPostMode) {
      const newId = `b${Date.now()}`;
      const newBlogPost: BlogPost = {
        id: newId,
        title: tempPost.title as LocalizedText,
        date: new Date().toISOString().split('T')[0],
        summary: tempPost.summary as LocalizedText,
        content: tempPost.content as LocalizedText,
        tags: tempPost.tags || [],
        likes: 0,
        comments: []
      };
      setPosts([newBlogPost, ...posts]);
      setNewPostMode(false);
    } else if (isEditing) {
      setPosts(prev => prev.map(p => 
        p.id === isEditing ? { ...p, ...tempPost as BlogPost } : p
      ));
      setIsEditing(null);
    }
    setTempPost({ title: { en: '', zh: '' }, summary: { en: '', zh: '' }, content: { en: '', zh: '' }, tags: [] });
  };

  const handleDelete = (id: string) => {
    if (window.confirm('confirm delete? [y/n]')) {
      setPosts(prev => prev.filter(p => p.id !== id));
    }
  };

  const startEdit = (post: BlogPost) => {
    setTempPost({
      title: { ...post.title },
      summary: { ...post.summary },
      content: { ...post.content },
      tags: [...post.tags]
    });
    setIsEditing(post.id);
    setNewPostMode(false);
  };

  const submitComment = (postId: string) => {
    if (!commentForm.content || !commentForm.name) return;
    
    const newComment = {
      id: `c${Date.now()}`,
      author: commentForm.name,
      email: commentForm.email,
      content: commentForm.content,
      date: new Date().toISOString().split('T')[0]
    };

    setPosts(prev => prev.map(p => 
      p.id === postId ? { ...p, comments: [...p.comments, newComment] } : p
    ));
    
    setCommentForm({ name: '', email: '', content: '' });
    setActiveCommentPost(null);
    alert('Done.');
  };

  return (
    <div className="space-y-12">
      {/* Admin Controls */}
      {isAdmin && !newPostMode && !isEditing && (
        <div className="border border-dashed border-zinc-400 p-4 flex justify-between items-center bg-zinc-50">
          <span className="font-mono text-black font-bold text-sm">&gt; SU_ACCESS_GRANTED</span>
          <button 
            onClick={() => setNewPostMode(true)}
            className="flex items-center gap-2 bg-white text-black px-3 py-1 text-xs hover:bg-zinc-100 transition border border-black"
          >
            <Plus className="w-3 h-3" />
            CREATE_ENTRY
          </button>
        </div>
      )}

      {/* Editor */}
      {(newPostMode || isEditing) && (
        <div className="bg-white p-6 border-2 border-black space-y-4 shadow-xl">
           <h3 className="font-bold font-mono text-black mb-4">EDITOR_MODE</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                className="bg-zinc-50 border border-zinc-300 p-2 text-black font-mono text-sm w-full" 
                placeholder="Title (EN)" 
                value={tempPost.title?.en}
                onChange={e => setTempPost({...tempPost, title: {...tempPost.title!, en: e.target.value}})}
              />
              <input 
                className="bg-zinc-50 border border-zinc-300 p-2 text-black font-mono text-sm w-full" 
                placeholder="Title (ZH)" 
                value={tempPost.title?.zh}
                onChange={e => setTempPost({...tempPost, title: {...tempPost.title!, zh: e.target.value}})}
              />
           </div>
           <textarea 
              className="bg-zinc-50 border border-zinc-300 p-2 text-black font-mono text-sm w-full h-40" 
              placeholder="Markdown Content..." 
              value={tempPost.content?.en}
              onChange={e => setTempPost({...tempPost, content: {en: e.target.value, zh: e.target.value}})}
           />
           <div className="flex gap-2">
             <button onClick={handleSavePost} className="bg-black text-white font-bold px-4 py-2 text-sm hover:bg-zinc-800 flex gap-2 items-center">
                <Save className="w-3 h-3" /> WRITE
             </button>
             <button onClick={() => { setIsEditing(null); setNewPostMode(false); }} className="bg-white text-black border border-zinc-300 px-4 py-2 text-sm hover:bg-zinc-100">
                ABORT
             </button>
           </div>
        </div>
      )}

      {/* Post List */}
      <div className="space-y-12">
        {posts.map(post => (
          <article key={post.id} className="group">
            <div className="flex flex-col md:flex-row md:items-baseline gap-4 mb-4 border-b border-zinc-200 pb-2">
                 <span className="font-mono text-zinc-500 text-xs shrink-0">{post.date}</span>
                 <h3 className="text-xl font-bold text-black group-hover:underline decoration-2 underline-offset-4">{post.title[lang]}</h3>
                 <div className="flex-1"></div>
                 <div className="flex gap-2">
                   {post.tags.map(t => <span key={t} className="text-[10px] border border-zinc-300 px-1 text-zinc-500 uppercase bg-zinc-50">{t}</span>)}
                 </div>
                 {isAdmin && (
                   <div className="flex gap-2 ml-4">
                      <button onClick={() => startEdit(post)} className="text-blue-600"><Edit className="w-3 h-3"/></button>
                      <button onClick={() => handleDelete(post.id)} className="text-red-600"><Trash2 className="w-3 h-3"/></button>
                   </div>
                 )}
            </div>

            <div className="prose prose-sm max-w-none text-zinc-700 font-mono mb-4 pl-0 md:pl-24">
                <p>{post.content[lang]}</p>
            </div>

            <div className="flex items-center gap-6 pl-0 md:pl-24">
                 <button 
                    onClick={() => handleLike(post.id)}
                    className="flex items-center gap-2 text-zinc-500 hover:text-black transition-colors text-xs font-mono"
                 >
                    [{post.likes} ACKS]
                 </button>
                 <button 
                    onClick={() => setActiveCommentPost(activeCommentPost === post.id ? null : post.id)}
                    className="flex items-center gap-2 text-zinc-500 hover:text-black transition-colors text-xs font-mono"
                 >
                    <MessageSquare className="w-3 h-3" />
                    <span>REPLY_THREAD ({post.comments.length})</span>
                 </button>
            </div>

            {/* Comments */}
            {(activeCommentPost === post.id || post.comments.length > 0) && (
              <div className="mt-6 pl-0 md:pl-24 border-l-2 border-zinc-200 ml-4">
                 <div className="space-y-4 mb-6">
                    {post.comments.map(comment => (
                       <div key={comment.id} className="bg-zinc-50 p-3 border border-zinc-200">
                          <div className="flex items-baseline justify-between mb-1 text-xs font-mono">
                             <span className="text-black font-bold">{comment.author}</span>
                             <span className="text-zinc-500">{comment.date}</span>
                          </div>
                          <p className="text-zinc-700 text-sm">{comment.content}</p>
                       </div>
                    ))}
                 </div>

                 {activeCommentPost === post.id && (
                    <div className="bg-white border border-black p-4 shadow-lg">
                       <div className="grid grid-cols-2 gap-3 mb-3">
                          <input 
                             placeholder="user"
                             className="bg-white border border-black text-black px-3 py-2 text-xs font-mono focus:bg-zinc-50 outline-none"
                             value={commentForm.name}
                             onChange={e => setCommentForm({...commentForm, name: e.target.value})}
                          />
                          <input 
                             placeholder="email (hidden)"
                             className="bg-white border border-black text-black px-3 py-2 text-xs font-mono focus:bg-zinc-50 outline-none"
                             value={commentForm.email}
                             onChange={e => setCommentForm({...commentForm, email: e.target.value})}
                          />
                       </div>
                       <textarea 
                          placeholder="> input text..."
                          className="w-full bg-white border border-black text-black px-3 py-2 text-xs font-mono min-h-[60px] mb-3 focus:bg-zinc-50 outline-none"
                          value={commentForm.content}
                          onChange={e => setCommentForm({...commentForm, content: e.target.value})}
                       />
                       <div className="flex justify-end">
                          <button 
                             onClick={() => submitComment(post.id)}
                             className="bg-black text-white px-4 py-1 text-xs font-bold font-mono hover:bg-zinc-800 transition-colors flex items-center gap-2"
                          >
                             SEND <Send className="w-3 h-3" />
                          </button>
                       </div>
                    </div>
                 )}
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;