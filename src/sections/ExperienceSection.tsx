import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { WORK_EXPERIENCE } from '../data/experience';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Layers } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-20 md:py-28 bg-[#0D0D0D] border-b border-[#222222]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText="Work History"
          title="Professional Experience"
          subtitle="Delivering continuous value at Wipro across progressive engineering titles, spanning enterprise SAP landscapes, telecom regression ecosystems, and autonomous AI testing pipelines."
          align="center"
        />

        {/* Company Overview Header */}
        <div className="max-w-4xl mx-auto mb-10 p-5 rounded-sm bg-[#121212] border border-[#2A2A2A] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-sm bg-[#1A1813] border border-[#3E3420] flex items-center justify-center text-[#C5A059] font-serif text-lg">
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
        <div className="max-w-4xl mx-auto space-y-8">
          {WORK_EXPERIENCE.map((exp, idx) => (
            <div
              key={exp.id}
              className="p-6 sm:p-8 rounded-sm bg-[#0C0C0C] border border-[#222222] hover:border-[#333333] transition-all shadow-sm space-y-6"
            >
              {/* Role Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-[#222222] pb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs font-medium text-[#C5A059] bg-[#1A1813] px-2 py-0.5 rounded-sm border border-[#3E3420]">
                      TENURE {WORK_EXPERIENCE.length - idx}
                    </span>
                    <span className="text-xs font-mono text-[#8C8C8C]">{exp.type}</span>
                  </div>
                  <h4 className="text-xl font-serif font-normal text-white tracking-tight">
                    {exp.role}
                  </h4>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-[#8C8C8C] sm:text-right">
                  <Calendar className="w-3.5 h-3.5 text-[#555555]" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Role Summary */}
              <p className="text-xs sm:text-sm text-[#C0B8AE] leading-relaxed">
                {exp.summary}
              </p>

              {/* Structured Accomplishment Bullets */}
              <div className="space-y-4">
                {exp.highlights.map((highlight, hIdx) => (
                  <div
                    key={hIdx}
                    className="p-4 rounded-sm bg-[#121212] border border-[#1F1F1F] space-y-1.5"
                  >
                    <span className="text-xs font-sans uppercase tracking-wider font-semibold text-[#C5A059] block">
                      {highlight.category}
                    </span>
                    {highlight.points.map((pt, pIdx) => (
                      <p key={pIdx} className="text-xs sm:text-sm text-[#C0B8AE] leading-relaxed">
                        {pt}
                      </p>
                    ))}
                  </div>
                ))}
              </div>

              {/* Technology Tags */}
              <div className="pt-4 border-t border-[#222222] flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-mono text-[#666] mr-2">
                  Stack:
                </span>
                {exp.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 text-[11px] font-mono rounded-sm bg-[#141414] text-[#8C8C8C] border border-[#222222]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
