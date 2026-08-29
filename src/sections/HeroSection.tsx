import React from 'react';
import { ArrowDown, FileText } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  return (
    <section
      id="hero"
      className="relative pt-32 sm:pt-40 pb-20 md:pb-28 overflow-hidden border-b border-[#2A2A2A]"
    >
      {/* Subtle Background Radial Gradients */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 70% 30%, #332A22 0%, transparent 70%), radial-gradient(circle at 20% 80%, #1A1D23 0%, transparent 60%)',
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          {/* Role Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-[#161410] border border-[#3E3420] text-[11px] font-mono uppercase tracking-[0.25em] text-[#C5A059] shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-pulse"></span>
            <span>Senior Automation Consultant / SDET</span>
          </div>

          {/* Name & Core Statement */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-light tracking-tight text-white uppercase">
              {PROFILE_DATA.name}
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-serif italic text-[#C5A059] tracking-normal font-light">
              Automation Engineer building AI-powered engineering tools.
            </p>
            <div className="w-16 h-[1px] bg-[#C5A059] mx-auto mt-4"></div>
          </div>

          {/* Supporting Statement - Max 2 short lines */}
          <p className="text-sm sm:text-base text-[#A8A8A8] font-light max-w-xl mx-auto leading-relaxed">
            7+ years scaling enterprise testing across SAP, Salesforce, and Telecom ecosystems.
            Designing autonomous test generation and local LLM developer architectures.
          </p>

          {/* Primary Action Buttons - Only the 2 most important CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
            <a
              id="hero-cta-explore"
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-sm bg-[#C5A059] hover:bg-[#D8B570] text-black font-sans uppercase tracking-[0.2em] font-semibold text-xs transition-all shadow-md cursor-pointer"
            >
              <span>Explore My Work</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>

            <button
              id="hero-cta-resume"
              onClick={onOpenResume}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-sm bg-[#141414] hover:bg-[#1A1A1A] text-[#E0D8D0] border border-[#2A2A2A] hover:border-[#C5A059] font-mono text-xs uppercase tracking-wider transition-all cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Resume</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
