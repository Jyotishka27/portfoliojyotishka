import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ENGINEERING_ARTICLES } from '../data/articles';
import { ArticleItem } from '../types';
import { BookOpen, Clock, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';

interface EngineeringNotesSectionProps {
  onSelectArticle: (article: ArticleItem) => void;
}

export const EngineeringNotesSection: React.FC<EngineeringNotesSectionProps> = ({
  onSelectArticle,
}) => {
  return (
    <section
      id="notes"
      className="py-20 md:py-28 bg-[#0D0D0D] border-b border-[#222222]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText="Technical Writing"
          title="Engineering Notes & Architecture Insights"
          subtitle="Thoughts, architectural trade-offs, and lessons learned from orchestrating enterprise automation and deploying local LLM testing workflows."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ENGINEERING_ARTICLES.map((article) => (
            <article
              key={article.id}
              className="p-6 sm:p-7 rounded-sm bg-[#0C0C0C] border border-[#222222] hover:border-[#3E3420] transition-all flex flex-col justify-between group shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-sans uppercase tracking-wider font-medium px-2.5 py-0.5 rounded-sm bg-[#1A1813] text-[#C5A059] border border-[#3E3420]">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-[#8C8C8C] font-mono">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="text-lg font-serif font-normal text-white group-hover:text-[#E0D8D0] transition-colors leading-snug mb-2.5">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#C0B8AE] leading-relaxed mb-4">
                  {article.summary}
                </p>

                {/* Core Takeaways preview */}
                <div className="space-y-1.5 pt-3 border-t border-[#1F1F1F] mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#666] block">
                    Core Insights:
                  </span>
                  {article.coreTakeaways.slice(0, 2).map((takeaway, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#8C8C8C]">
                      <span className="text-[#C5A059] text-[10px] font-mono">▸</span>
                      <span className="line-clamp-2 leading-tight">{takeaway}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#222222] flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#666]">
                  {article.date}
                </span>

                <button
                  onClick={() => onSelectArticle(article)}
                  className="inline-flex items-center gap-1 text-xs font-sans uppercase tracking-wider font-medium text-[#C5A059] hover:text-[#E0D8D0] group-hover:translate-x-0.5 transition-all cursor-pointer"
                >
                  <span>Read Note</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
