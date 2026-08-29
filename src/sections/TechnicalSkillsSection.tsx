import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { SKILL_CATEGORIES } from '../data/skills';
import { Terminal, Shield, CheckCircle } from 'lucide-react';

export const TechnicalSkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-20 md:py-28 bg-[#0D0D0D] border-b border-[#222222]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText="Stack & Toolkit"
          title="Technical Skills & Competencies"
          subtitle="Honest, production-tested proficiencies across enterprise ERP suites, modern automation frameworks, and local AI agent tooling."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-sm bg-[#0C0C0C] border border-[#222222] hover:border-[#3E3420] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></span>
                  <h3 className="text-base font-serif font-normal text-white tracking-tight">
                    {cat.title}
                  </h3>
                </div>

                <p className="text-xs text-[#8C8C8C] mb-5 leading-relaxed">
                  {cat.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 text-xs font-mono rounded-sm bg-[#141414] text-[#C0B8AE] border border-[#222222] hover:border-[#C5A059] hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-[#1F1F1F] flex items-center justify-between text-[11px] font-mono text-[#666]">
                <span>{cat.skills.length} Validated Skills</span>
                <span className="text-[#C5A059] flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" />
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
