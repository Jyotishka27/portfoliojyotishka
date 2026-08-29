import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { KEY_ACHIEVEMENTS } from '../data/achievements';
import { Award, Zap, TrendingUp, CheckCircle, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

export const AchievementsSection: React.FC = () => {
  return (
    <section
      id="achievements"
      className="py-20 md:py-28 bg-[#0A0A0A] border-b border-[#222222]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText="Verified Impact"
          title="Key Engineering Achievements"
          subtitle="Measurable project turnarounds, client acceptance milestones, and scaled automation delivery backed strictly by verified records."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {KEY_ACHIEVEMENTS.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-sm bg-[#0C0C0C] border border-[#222222] hover:border-[#3E3420] transition-all flex flex-col justify-between group shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-sans uppercase tracking-wider font-medium px-2.5 py-0.5 rounded-sm border bg-[#1A1813] text-[#C5A059] border-[#3E3420]">
                    {item.category}
                  </span>
                  <Award className="w-4 h-4 text-[#666] group-hover:text-[#C5A059] transition-colors" />
                </div>

                <div className="text-2xl sm:text-3xl font-serif font-normal text-white mb-2 group-hover:text-[#E0D8D0] transition-colors">
                  {item.metric}
                </div>

                <h4 className="text-sm sm:text-base font-serif font-normal text-[#E0D8D0] mb-2">
                  {item.title}
                </h4>

                <p className="text-xs text-[#C5A059] font-sans font-medium mb-3">
                  {item.transformation}
                </p>

                <p className="text-xs text-[#C0B8AE] leading-relaxed mb-4">
                  {item.context}
                </p>
              </div>

              <div className="pt-4 border-t border-[#1F1F1F]">
                <span className="text-[11px] font-sans uppercase tracking-wider text-[#C5A059] block font-medium mb-1">
                  Business Outcome:
                </span>
                <p className="text-xs text-[#D4CDC5] leading-relaxed">
                  {item.impact}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
