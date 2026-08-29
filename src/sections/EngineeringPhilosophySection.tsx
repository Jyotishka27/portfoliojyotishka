import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { PHILOSOPHY_PRINCIPLES } from '../data/pyramid';
import { Layers, RefreshCw, Cpu, Sparkles, UserCheck, Shield } from 'lucide-react';

export const EngineeringPhilosophySection: React.FC = () => {
  const principleIcons = [
    <Layers className="w-4 h-4 text-[#C5A059]" />,
    <RefreshCw className="w-4 h-4 text-[#C5A059]" />,
    <Cpu className="w-4 h-4 text-[#C5A059]" />,
    <Sparkles className="w-4 h-4 text-[#C5A059]" />,
    <UserCheck className="w-4 h-4 text-[#C5A059]" />,
  ];

  return (
    <section
      id="philosophy"
      className="py-20 md:py-28 bg-[#0D0D0D] border-b border-[#222222]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText="Core Philosophy"
          title="How I Think About Testing & Engineering"
          subtitle="Engineering rigor is defined not by how many scripts are written, but by the architectural wisdom to place the right assertion at the correct tier of the application."
          align="center"
        />

        {/* Big Anchor Statement */}
        <div className="max-w-4xl mx-auto mb-16 p-8 rounded-sm bg-[#121212] border border-[#2A2A2A] shadow-2xl relative overflow-hidden text-center space-y-4">
          <span className="font-sans uppercase tracking-widest text-xs text-[#C5A059] font-medium px-3 py-1 rounded-sm bg-[#1A1813] border border-[#3E3420] inline-block">
            Foundational Law
          </span>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-white tracking-tight leading-tight">
            &ldquo;Good automation isn't about automating everything. It's about putting the right validation at the right layer.&rdquo;
          </h3>
          <p className="text-[#8C8C8C] text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Automating a broken test strategy simply generates failures faster. High-performance teams architect validation with precision, balancing execution velocity against regression confidence.
          </p>
        </div>

        {/* 5 Numbered Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PHILOSOPHY_PRINCIPLES.map((principle, idx) => (
            <div
              key={principle.number}
              className={`p-6 rounded-sm bg-[#0C0C0C] border border-[#222222] hover:border-[#3E3420] transition-all flex flex-col justify-between group ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-3xl font-light text-[#444444] group-hover:text-[#C5A059] transition-colors">
                    {principle.number}
                  </span>
                  <div className="p-2 rounded-sm bg-[#141414] border border-[#222222]">
                    {principleIcons[idx]}
                  </div>
                </div>

                <h4 className="text-lg font-serif font-normal text-white group-hover:text-[#E0D8D0] transition-colors mb-2">
                  {principle.title}
                </h4>

                <p className="text-xs sm:text-sm font-medium text-[#C5A059] font-sans mb-3">
                  {principle.statement}
                </p>

                <p className="text-xs sm:text-sm text-[#C0B8AE] leading-relaxed">
                  {principle.explanation}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#1F1F1F] flex items-center text-[11px] font-mono text-[#666]">
                <span>Principle {principle.number} of 05</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
