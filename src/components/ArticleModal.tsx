import React, { useEffect } from 'react';
import { X, Clock, Calendar, Bookmark, CheckCircle, Share2 } from 'lucide-react';
import { ArticleItem } from '../types';

interface ArticleModalProps {
  article: ArticleItem | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (article) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [article, onClose]);

  if (!article) return null;

  return (
    <div
      id="article-reading-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/85 backdrop-blur-sm overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="article-reading-container"
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#0C0C0C] border border-[#222222] rounded-sm shadow-2xl flex flex-col overflow-hidden text-[#E0D8D0]"
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#222222] bg-[#0D0D0D]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#C5A059] bg-[#1A1813] px-2 py-0.5 rounded-sm border border-[#3E3420]">
              {article.category}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-[#8C8C8C] font-mono">
              <Clock className="w-3.5 h-3.5 text-[#666]" />
              <span>{article.readTime}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-[#8C8C8C] font-mono hidden sm:flex">
              <Calendar className="w-3.5 h-3.5 text-[#666]" />
              <span>{article.date}</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-sm text-[#8C8C8C] hover:text-white hover:bg-[#1A1A1A] transition-colors cursor-pointer"
            aria-label="Close article"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Article Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <h1 className="text-2xl sm:text-3xl font-serif font-normal text-white tracking-tight leading-snug">
            {article.title}
          </h1>

          <p className="text-[#C0B8AE] text-sm sm:text-base leading-relaxed italic border-l-2 border-[#C5A059] pl-4 py-1">
            {article.summary}
          </p>

          {/* Core Takeaways */}
          <div className="p-4 rounded-sm bg-[#121212] border border-[#222222] space-y-2.5">
            <div className="flex items-center gap-2 text-[#C5A059] font-mono text-xs font-semibold uppercase tracking-wider">
              <Bookmark className="w-4 h-4" />
              Key Engineering Takeaways
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-[#C0B8AE]">
              {article.coreTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Body */}
          <div className="prose prose-invert max-w-none text-xs sm:text-sm text-[#C0B8AE] leading-relaxed space-y-4">
            <div
              className="space-y-4 whitespace-pre-wrap font-sans"
              dangerouslySetInnerHTML={{
                __html: article.contentMarkdown
                  .replace(/### (.*)/g, '<h3 class="text-base sm:text-lg font-serif font-normal text-white mt-6 mb-2">$1</h3>')
                  .replace(/```typescript([\s\S]*?)```/g, '<pre class="p-4 rounded-sm bg-[#141414] border border-[#222222] font-mono text-xs text-[#E0D8D0] overflow-x-auto my-3"><code>$1</code></pre>')
                  .replace(/```python([\s\S]*?)```/g, '<pre class="p-4 rounded-sm bg-[#141414] border border-[#222222] font-mono text-xs text-[#C0B8AE] overflow-x-auto my-3"><code>$1</code></pre>')
                  .replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 rounded-sm bg-[#181818] border border-[#2A2A2A] text-[#C5A059] font-mono text-[11px]">$1</code>')
              }}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-[#222222] bg-[#0D0D0D] flex items-center justify-between text-xs text-[#8C8C8C] font-mono">
          <span>Author: Jyotishka Mukhopadhyay</span>
          <button
            onClick={onClose}
            className="px-3.5 py-1.5 rounded-sm bg-[#181818] hover:bg-[#222222] border border-[#2A2A2A] text-[#E0D8D0] transition-colors cursor-pointer"
          >
            Close Note
          </button>
        </div>
      </div>
    </div>
  );
};
