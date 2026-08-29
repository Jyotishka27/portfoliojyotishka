import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { KEY_ACHIEVEMENTS } from '../data/achievements';
import { Award, ChevronDown, ChevronUp, ArrowRight, ShieldCheck } from 'lucide-react';

export const AchievementsSection: React.FC = () => {
  const [expandedAchievements, setExpandedAchievements] = useState<Record<string, boolean>>({});

  const toggleAchievement = (id: string) => {
    setExpandedAchievements((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section
      id="achievements"
      className="py-16 md:py-24 bg-[#0A0A0A] border-b border-[#222222]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText="Verified Impact"
          title="Key Engineering Achievements"
          subtitle="Measurable project turnarounds, client acceptance milestones, and scaled automation delivery backed strictly by verified records."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {KEY_ACHIEVEMENTS.map((item) => {
            const isExpanded = !!expandedAchievements[item.id];

            return (
              <div
                key={item.id}
                className={`p-6 rounded-sm border transition-all flex flex-col justify-between ${
                  isExpanded
                    ? 'bg-[#161410] border-[#C5A059] shadow-md'
                    : 'bg-[#111111] border-[#222222] hover:border-[#3E3420] hover:bg-[#141414]'
                }`}
              >
                <div>
                  {/* Top: Category and Award Icon */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider font-medium px-2.5 py-0.5 rounded-sm border bg-[#1A1813] text-[#C5A059] border-[#3E3420]">
                      {item.category}
                    </span>
                    <span className="text-xs font-mono text-[#777]">
                      Wipro · Enterprise
                    </span>
                  </div>

                  {/* Metric / Award Highlight */}
                  <div className="text-2xl font-serif font-light text-white mb-1.5">
                    {item.metric}
                  </div>

                  {/* Title */}
                  <h4 className="text-sm font-serif font-normal text-[#E0D8D0] mb-2">
                    {item.title}
                  </h4>

                  {/* One-Line Explanation */}
                  <p className="text-xs text-[#C5A059] font-mono leading-relaxed mb-3">
                    {item.transformation}
                  </p>
                </div>

                {/* Progressive Disclosure Section */}
                <div>
                  {isExpanded && (
                    <div className="pt-3 border-t border-[#3E3420] space-y-2.5 text-xs animate-fadeIn mb-4">
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#8C8C8C] block mb-1">
                          Project Context:
                        </span>
                        <p className="text-[#C0B8AE] font-light leading-relaxed">
                          {item.context}
                        </p>
                      </div>

                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#C5A059] block mb-1 font-medium">
                          Client & Delivery Impact:
                        </span>
                        <p className="text-[#D4CDC5] font-light leading-relaxed">
                          {item.impact}
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="pt-3 border-t border-[#1F1F1F]">
                    <button
                      onClick={() => toggleAchievement(item.id)}
                      className="w-full inline-flex items-center justify-between text-xs font-mono uppercase tracking-wider text-[#C5A059] hover:text-white transition-colors cursor-pointer py-1"
                    >
                      <span>{isExpanded ? 'Hide Context' : 'View Context'}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ArrowRight className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
