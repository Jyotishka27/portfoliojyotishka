import React from 'react';
import { PROFILE_DATA } from '../data/profile';
import { Mail, Linkedin, FileText, MapPin, Briefcase, Sparkles } from 'lucide-react';

interface ContactSectionProps {
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-[#0A0A0A] border-b border-[#222222]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-sm bg-[#0E0E0E] border border-[#262626] text-center space-y-6 shadow-xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#161410] border border-[#3E3420] text-[10px] font-mono uppercase tracking-[0.25em] text-[#C5A059]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-pulse"></span>
            <span>Get In Touch</span>
          </div>

          {/* Name & Role */}
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-white tracking-tight">
              {PROFILE_DATA.displayName}
            </h2>
            <p className="text-sm sm:text-base font-mono text-[#C5A059] font-medium">
              Senior Automation Consultant / SDET
            </p>
          </div>

          {/* Key Details Grid */}
          <div className="max-w-md mx-auto py-4 border-y border-[#222222] space-y-2 text-xs sm:text-sm font-mono text-[#C0B8AE]">
            <div className="flex items-center justify-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>{PROFILE_DATA.email}</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-[#8C8C8C]">
              <MapPin className="w-3.5 h-3.5 text-[#666]" />
              <span>{PROFILE_DATA.location}</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-[#8C8C8C] pt-1">
              <Briefcase className="w-3.5 h-3.5 text-[#666]" />
              <span className="text-emerald-400">Available:</span>
              <span>Open to Senior SDET & AI Roles</span>
            </div>
          </div>

          {/* Clean Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              id="contact-email-btn"
              href={`mailto:${PROFILE_DATA.email}?subject=Senior%20SDET%20%2F%20AI%20Automation%20Role`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-[#C5A059] hover:bg-[#D8B570] text-black font-sans uppercase tracking-wider font-semibold text-xs transition-colors cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email Me</span>
            </a>

            <a
              id="contact-linkedin-btn"
              href={PROFILE_DATA.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-[#161616] hover:bg-[#202020] text-white border border-[#2A2A2A] hover:border-[#C5A059] font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>LinkedIn</span>
            </a>

            <button
              id="contact-resume-btn"
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-[#161616] hover:bg-[#202020] text-white border border-[#2A2A2A] hover:border-[#C5A059] font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Download Resume</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
