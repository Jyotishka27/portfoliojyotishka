import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { WORK_EXPERIENCE } from '../data/experience';
import { Calendar, MapPin, CheckCircle2, ChevronDown, ChevronUp, Briefcase } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  // Track which roles have expanded full responsibilities
  const [expandedRoles, setExpandedRoles] = useState<Record<string, boolean>>({});

  const toggleRole = (id: string) => {
    setExpandedRoles((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section
      id="experience"
      className="py-16 md:py-24 bg-[#0D0D0D] border-b border-[#222222]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText="Work History"
          title="Professional Experience"
          subtitle="Delivering continuous value at Wipro across progressive engineering titles, spanning enterprise SAP landscapes, telecom regression ecosystems, and autonomous AI testing pipelines."
          align="center"
        />

        {/* Company Overview Header */}
        <div className="max-w-4xl mx-auto mb-8 p-5 rounded-sm bg-[#121212] border border-[#2A2A2A] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-sm bg-[#1A1813] border border-[#3E3420] flex items-center justify-center text-[#C5A059] font-serif text-lg font-bold">
              W
            </div>
            <div>
              <h3 className="text-base font-serif font-normal text-white">WIPRO LIMITED</h3>
              <p className="text-xs font-mono text-[#8C8C8C]">
                Full-time · Hybrid · Kolkata, West Bengal
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#C5A059] bg-[#1A1813] px-3 py-1.5 rounded-sm border border-[#3E3420]">
            <Calendar className="w-3.5 h-3.5" />
            <span>Jun 2019 – Present (7+ Years)</span>
          </div>
        </div>

        {/* Experience Roles Timeline */}
        <div className="max-w-4xl mx-auto space-y-6">
          {WORK_EXPERIENCE.map((exp) => {
            const isExpanded = !!expandedRoles[exp.id];

            // Flatten all points to know count
            const allPoints = exp.highlights.flatMap((h) =>
              h.points.map((pt) => ({ category: h.category, point: pt }))
            );

            // 3 highlight bullets shown by default
            const initialBullets = allPoints.slice(0, 3);
            const hiddenCount = allPoints.length - initialBullets.length;

            return (
              <div
                key={exp.id}
                className="p-6 sm:p-7 rounded-sm bg-[#0C0C0C] border border-[#222222] hover:border-[#333333] transition-all shadow-sm space-y-5"
              >
                {/* Role Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-[#222222] pb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="font-mono text-xs font-medium text-[#C5A059] bg-[#1A1813] px-2 py-0.5 rounded-sm border border-[#3E3420]">
                        {exp.company}
                      </span>
                      <span className="text-xs font-mono text-[#8C8C8C] flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#666]" />
                        {exp.location}
                      </span>
                    </div>
                    <h4 className="text-xl font-serif font-normal text-white tracking-tight">
                      {exp.role}
                    </h4>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#C5A059] sm:text-right">
                    <Calendar className="w-3.5 h-3.5 text-[#888]" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Role Summary */}
                <p className="text-xs sm:text-sm text-[#A8A8A8] font-light leading-relaxed">
                  {exp.summary}
                </p>

                {/* 3-4 Highlight Bullets (Default view) */}
                <div className="space-y-2.5">
                  <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C5A059] block font-medium">
                    Key Accomplishment Highlights
                  </span>
                  <ul className="space-y-2">
                    {(isExpanded ? allPoints : initialBullets).map((item, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#C0B8AE]">
                        <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">
                          <strong className="text-white font-medium mr-1.5">[{item.category}]</strong>
                          {item.point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Progressive Disclosure Toggle Button */}
                {hiddenCount > 0 && (
                  <div className="pt-2">
                    <button
                      onClick={() => toggleRole(exp.id)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono text-[#C5A059] bg-[#161410] hover:bg-[#1f1b14] border border-[#3E3420] hover:border-[#C5A059] rounded-sm transition-all cursor-pointer"
                    >
                      {isExpanded ? (
                        <>
                          <span>Show Condensed View</span>
                          <ChevronUp className="w-3.5 h-3.5" />
                        </>
                      ) : (
                        <>
                          <span>View Full Responsibilities ({hiddenCount} more)</span>
                          <ChevronDown className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                )}

                {/* Technology Tags (collapsible when expanded, or compact preview) */}
                <div className="pt-3 border-t border-[#1F1F1F] flex flex-wrap items-center gap-1.5">
                  <span className="text-[10px] font-mono text-[#666] mr-1">Stack:</span>
                  {(isExpanded ? exp.technologies : exp.technologies.slice(0, 5)).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 text-[10px] font-mono rounded-sm bg-[#141414] text-[#8C8C8C] border border-[#222222]"
                    >
                      {tech}
                    </span>
                  ))}
                  {!isExpanded && exp.technologies.length > 5 && (
                    <span className="text-[10px] font-mono text-[#555]">
                      +{exp.technologies.length - 5} more
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
