import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { CAPABILITY_AREAS } from '../data/capabilities';
import { CapabilityArea } from '../types';
import { ShieldCheck, Cpu, Database, Bot, GitPullRequest, ArrowRight } from 'lucide-react';

interface WhatIDoSectionProps {
  onSelectCapability: (capability: CapabilityArea) => void;
}

export const WhatIDoSection: React.FC<WhatIDoSectionProps> = ({ onSelectCapability }) => {
  const icons: Record<string, React.ReactNode> = {
    'enterprise-testing': <ShieldCheck className="w-5 h-5 text-[#C5A059]" />,
    'test-automation': <Cpu className="w-5 h-5 text-[#C5A059]" />,
    'api-backend-testing': <Database className="w-5 h-5 text-[#C5A059]" />,
    'ai-engineering': <Bot className="w-5 h-5 text-[#C5A059]" />,
    'test-lifecycle': <GitPullRequest className="w-5 h-5 text-[#C5A059]" />,
  };

  // 5 core capability cards
  const coreCapabilities = CAPABILITY_AREAS.slice(0, 5);

  return (
    <section id="what-i-do" className="py-16 md:py-24 bg-[#0D0D0D] border-b border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText="Capabilities"
          title="What I Do"
          subtitle="Core engineering domains bridging enterprise manual testing, scaled test automation, and local AI workflows."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreCapabilities.map((cap) => (
            <div
              key={cap.id}
              className="p-6 rounded-sm bg-[#121212] border border-[#242424] hover:border-[#C5A059]/60 hover:bg-[#151515] transition-all flex flex-col justify-between group shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-sm bg-[#161410] border border-[#3E3420]">
                    {icons[cap.id] || <ShieldCheck className="w-5 h-5 text-[#C5A059]" />}
                  </div>
                  {cap.id === 'enterprise-testing' && (
                    <span className="text-[9px] font-mono text-[#C5A059] bg-[#1A1813] px-2 py-0.5 rounded-sm border border-[#3E3420]">
                      Manual + Automation
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-serif font-normal text-white group-hover:text-[#C5A059] transition-colors">
                  {cap.title}
                </h3>
                
                {/* 1-2 sentence concise description */}
                <p className="text-xs sm:text-sm text-[#A8A8A8] font-light leading-relaxed my-3 line-clamp-3">
                  {cap.description}
                </p>

                {/* 3-5 Technology / Domain tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cap.technologies.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 text-[10px] font-mono rounded-sm bg-[#181818] text-[#8C8C8C] border border-[#262626]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button - Explore Details */}
              <div className="pt-4 border-t border-[#1F1F1F]">
                <button
                  onClick={() => onSelectCapability(cap)}
                  className="w-full inline-flex items-center justify-between text-xs font-sans uppercase tracking-wider font-medium text-[#C5A059] hover:text-white transition-colors cursor-pointer py-1"
                >
                  <span>Explore Capability</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
