import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { CAPABILITY_AREAS } from '../data/capabilities';
import { ShieldCheck, Cpu, Database, Bot, GitPullRequest, Users, ArrowRight } from 'lucide-react';

export const WhatIDoSection: React.FC = () => {
  const icons = {
    'enterprise-testing': <ShieldCheck className="w-4 h-4 text-[#C5A059]" />,
    'test-automation': <Cpu className="w-4 h-4 text-[#C5A059]" />,
    'api-backend-testing': <Database className="w-4 h-4 text-[#C5A059]" />,
    'ai-engineering': <Bot className="w-4 h-4 text-[#C5A059]" />,
    'test-lifecycle': <GitPullRequest className="w-4 h-4 text-[#C5A059]" />,
    'engineering-delivery': <Users className="w-4 h-4 text-[#C5A059]" />,
  };

  return (
    <section id="what-i-do" className="py-20 md:py-28 bg-[#0D0D0D] border-b border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText="Capabilities"
          title="What I Do"
          subtitle="A comprehensive capability matrix bridging enterprise functional validation, large-scale automation frameworks, and cutting-edge local AI engineering."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAPABILITY_AREAS.map((cap) => (
            <div
              key={cap.id}
              className="p-6 rounded-sm bg-[#121212] border border-[#2A2A2A] hover:border-[#C5A059]/60 hover:bg-[#161616] transition-all flex flex-col justify-between group shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-sm bg-[#161410] border border-[#3E3420] transition-colors">
                    {icons[cap.id as keyof typeof icons]}
                  </div>
                  <span className="text-[9px] font-sans text-[#777] uppercase tracking-[0.25em]">
                    Domain Focus
                  </span>
                </div>

                <h3 className="text-xl font-serif font-normal text-white group-hover:text-[#C5A059] transition-colors">
                  {cap.title}
                </h3>
                <p className="text-xs font-mono text-[#C5A059] mt-1 mb-3">
                  {cap.tagline}
                </p>
                <p className="text-xs sm:text-sm text-[#A8A8A8] font-light leading-relaxed mb-5">
                  {cap.description}
                </p>

                {/* Key Highlights */}
                <div className="space-y-2 mb-5">
                  <span className="text-[9px] font-sans uppercase tracking-[0.25em] text-[#777] block font-medium">
                    Core Delivery Proof:
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#C0B8AE]">
                    {cap.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#C5A059] font-mono text-[10px] mt-0.5">▸</span>
                        <span className="leading-snug">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies footer */}
              <div className="pt-4 border-t border-[#1F1F1F]">
                <div className="flex flex-wrap gap-1.5">
                  {cap.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 text-[10px] font-mono rounded-sm bg-[#161616] text-[#8C8C8C] border border-[#262626]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
