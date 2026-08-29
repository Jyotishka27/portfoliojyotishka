import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ENGINEERING_ARTICLES } from '../data/articles';
import { ArticleItem } from '../types';
import { Clock, ArrowRight } from 'lucide-react';

interface EngineeringNotesSectionProps {
  onSelectArticle: (article: ArticleItem) => void;
}

export const EngineeringNotesSection: React.FC<EngineeringNotesSectionProps> = ({
  onSelectArticle,
}) => {
  return (
    <section
      id="notes"
      className="py-16 md:py-24 bg-[#0D0D0D] border-b border-[#222222]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText="Technical Writing"
          title="Engineering Notes & Architecture Insights"
          subtitle="Thoughts, architectural trade-offs, and lessons learned from orchestrating enterprise automation and deploying local LLM testing workflows."
          align="center"
        />

        {/* Clean, Scannable Note Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ENGINEERING_ARTICLES.map((article) => (
            <article
              key={article.id}
              className="p-6 rounded-sm bg-[#0C0C0C] border border-[#222222] hover:border-[#3E3420] transition-all flex flex-col justify-between group shadow-sm"
            >
              <div>
                {/* Topic Badge & Read Time */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider font-medium px-2.5 py-0.5 rounded-sm bg-[#1A1813] text-[#C5A059] border border-[#3E3420]">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-[#8C8C8C] font-mono">
                    <Clock className="w-3.5 h-3.5 text-[#666]" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-serif font-normal text-white group-hover:text-[#C5A059] transition-colors leading-snug mb-2.5">
                  {article.title}
                </h3>

                {/* One-Line Summary */}
                <p className="text-xs sm:text-sm text-[#A8A8A8] font-light leading-relaxed mb-4 line-clamp-3">
                  {article.summary}
                </p>
              </div>

              {/* Action Button: Read Article */}
              <div className="pt-4 border-t border-[#1F1F1F] flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#666]">
                  {article.date}
                </span>

                <button
                  onClick={() => onSelectArticle(article)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider font-medium text-[#C5A059] group-hover:text-white transition-colors cursor-pointer"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
