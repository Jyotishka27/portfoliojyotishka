import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { PHILOSOPHY_PRINCIPLES } from '../data/pyramid';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const EngineeringPhilosophySection: React.FC = () => {
  const [expandedPrinciples, setExpandedPrinciples] = useState<Record<string, boolean>>({});

  const togglePrinciple = (num: string) => {
    setExpandedPrinciples((prev) => ({ ...prev, [num]: !prev[num] }));
  };

  return (
    <section id="philosophy" className="py-16 md:py-24 bg-[#0D0D0D] border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText="Core Philosophy"
          title="How I Think About Testing & Engineering"
          subtitle="Principled engineering practices balancing execution velocity, maintainability, and regression confidence."
          align="center"
        />

        {/* Main Statement */}
        <div className="max-w-3xl mx-auto mb-12 p-6 sm:p-8 rounded-sm bg-[#121212] border border-[#2A2A2A] text-center space-y-3 shadow-md">
          <span className="font-mono uppercase tracking-widest text-[10px] text-[#C5A059] font-medium px-3 py-1 rounded-sm bg-[#1A1813] border border-[#3E3420] inline-block">
            Foundational Law
          </span>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-normal text-white tracking-tight leading-snug">
            &ldquo;Good automation isn't about automating everything. It's about putting the right validation at the right layer.&rdquo;
          </h3>
        </div>

        {/* 5 Compact Principle Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {PHILOSOPHY_PRINCIPLES.map((p) => {
            const isExpanded = !!expandedPrinciples[p.number];

            return (
              <button
                key={p.number}
                onClick={() => togglePrinciple(p.number)}
                className={`p-5 rounded-sm border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isExpanded
                    ? 'bg-[#161410] border-[#C5A059] shadow-md'
                    : 'bg-[#111111] border-[#222222] hover:border-[#3E3420] hover:bg-[#141414]'
                }`}
                aria-expanded={isExpanded}
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="font-mono text-xs text-[#C5A059] bg-[#1A1813] px-2 py-0.5 rounded-sm border border-[#3E3420]">
                      {p.number}
                    </span>
                    <span className="text-xs font-mono text-[#777] flex items-center gap-1">
                      {isExpanded ? (
                        <>
                          <span>Less</span>
                          <ChevronUp className="w-3.5 h-3.5" />
                        </>
                      ) : (
                        <>
                          <span>Expand</span>
                          <ChevronDown className="w-3.5 h-3.5" />
                        </>
                      )}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-base font-serif font-normal text-white mb-2">
                    {p.title}
                  </h4>

                  {/* One Short Sentence */}
                  <p className="text-xs text-[#C5A059] font-medium font-sans mb-1">
                    {p.statement}
                  </p>
                </div>

                {/* Progressive Disclosure Explanation */}
                {isExpanded ? (
                  <div className="pt-3 mt-3 border-t border-[#3E3420] text-xs text-[#C0B8AE] leading-relaxed font-light animate-fadeIn">
                    {p.explanation}
                  </div>
                ) : (
                  <div className="pt-3 text-[10px] font-mono text-[#555]">
                    Click to reveal engineering rationale
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
