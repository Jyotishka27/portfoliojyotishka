import React from 'react';
import { ArrowDown, FileText, ArrowUpRight, Mail, Phone, MapPin, Linkedin, Terminal, ChevronRight, ShieldCheck, Sparkles } from 'lucide-react';
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
        <div className="max-w-4xl mx-auto text-center space-y-7">
          {/* Top Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-[#161410] border border-[#3E3420] text-[10px] font-sans uppercase tracking-[0.35em] text-[#C5A059] shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-pulse"></span>
            <span>{PROFILE_DATA.positioning}</span>
          </div>

          {/* Name & Core Statement */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-light tracking-tight text-white">
              {PROFILE_DATA.name}
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-serif italic text-[#C5A059] tracking-normal font-light">
              {PROFILE_DATA.headline}
            </p>
            <div className="w-16 h-[1px] bg-[#C5A059] mx-auto mt-4"></div>
          </div>

          {/* Supporting Statement */}
          <p className="text-base sm:text-lg text-[#A8A8A8] font-light max-w-2xl mx-auto leading-relaxed">
            {PROFILE_DATA.subHeadline}
          </p>

          {/* Professional Narrative Trajectory Bar */}
          <div className="py-4 px-5 rounded-sm bg-[#121212] border border-[#2A2A2A] max-w-3xl mx-auto">
            <p className="text-[9px] font-sans text-[#777] uppercase tracking-[0.3em] mb-3">
              Engineering Progression Trajectory
            </p>
            <div className="flex items-center justify-center flex-wrap gap-1.5 sm:gap-2 text-xs font-mono">
              {PROFILE_DATA.progressionSteps.map((step, idx) => (
                <React.Fragment key={idx}>
                  <span
                    className={`px-2.5 py-1 rounded-sm border ${
                      idx >= 4
                        ? 'bg-[#1C1811] text-[#C5A059] border-[#453316] font-semibold'
                        : 'bg-[#161616] text-[#8C8C8C] border-[#262626]'
                    }`}
                  >
                    {step}
                  </span>
                  {idx < PROFILE_DATA.progressionSteps.length - 1 && (
                    <ChevronRight className="w-3.5 h-3.5 text-[#444] shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <a
              id="hero-cta-explore"
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-sm bg-[#C5A059] hover:bg-[#D8B570] text-black font-sans uppercase tracking-[0.25em] font-semibold text-xs transition-all shadow-md cursor-pointer"
            >
              <span>Explore My Work</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>

            <button
              id="hero-cta-resume"
              onClick={onOpenResume}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm bg-[#141414] hover:bg-[#1A1A1A] text-[#E0D8D0] border border-[#2A2A2A] hover:border-[#C5A059] font-mono text-xs uppercase tracking-wider transition-all cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>View Resume (CV)</span>
            </button>

            <a
              id="hero-cta-contact"
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-3.5 rounded-sm bg-transparent hover:bg-[#161616] text-[#8C8C8C] hover:text-white border border-transparent hover:border-[#2A2A2A] font-sans uppercase tracking-[0.2em] text-xs transition-all"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Verified Contact Bar */}
          <div className="pt-6 border-t border-[#2A2A2A] flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs font-mono text-[#8C8C8C]">
            <a
              href={`mailto:${PROFILE_DATA.email}`}
              className="flex items-center gap-1.5 hover:text-[#C5A059] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>{PROFILE_DATA.email}</span>
            </a>

            <a
              href={`tel:${PROFILE_DATA.phone}`}
              className="flex items-center gap-1.5 hover:text-[#C5A059] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>{PROFILE_DATA.phone}</span>
            </a>

            <a
              href={PROFILE_DATA.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-[#C5A059] transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>LinkedIn</span>
            </a>

            <span className="flex items-center gap-1.5 text-[#666]">
              <Terminal className="w-3.5 h-3.5 text-[#888]" />
              <span>GitHub: {PROFILE_DATA.github}</span>
            </span>

            <span className="flex items-center gap-1.5 text-[#666]">
              <MapPin className="w-3.5 h-3.5 text-[#888]" />
              <span>{PROFILE_DATA.location}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
