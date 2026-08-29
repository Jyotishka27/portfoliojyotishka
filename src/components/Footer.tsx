import React from 'react';
import { PROFILE_DATA } from '../data/profile';
import { Terminal, FileText, ArrowUp, Mail, Linkedin, Phone } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070707] border-t border-[#2A2A2A] text-[#8C8C8C] py-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#1F1F1F]">
          {/* Logo & Headline */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-sm bg-[#161410] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] font-mono font-bold">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <div className="font-semibold text-white text-sm">
                {PROFILE_DATA.displayName}
              </div>
              <p className="text-[11px] font-mono text-[#777]">
                Senior SDET & Automation Consultant · AI Engineering
              </p>
            </div>
          </div>

          {/* Quick Nav in Footer */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-sans uppercase tracking-wider">
            <a href="#what-i-do" className="hover:text-[#C5A059] transition-colors">
              Capabilities
            </a>
            <a href="#projects" className="hover:text-[#C5A059] transition-colors">
              Projects
            </a>
            <a href="#enterprise" className="hover:text-[#C5A059] transition-colors">
              Enterprise
            </a>
            <a href="#testing-expertise" className="hover:text-[#C5A059] transition-colors">
              Pyramid
            </a>
            <a href="#experience" className="hover:text-[#C5A059] transition-colors">
              Experience
            </a>
            <a href="#skills" className="hover:text-[#C5A059] transition-colors">
              Skills
            </a>
            <button
              onClick={onOpenResume}
              className="text-[#C5A059] hover:text-[#D8B570] transition-colors cursor-pointer"
            >
              Resume (CV)
            </button>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-2 rounded-sm bg-[#141414] hover:bg-[#1A1A1A] text-[#8C8C8C] hover:text-[#C5A059] border border-[#2A2A2A] transition-colors flex items-center gap-1.5 font-mono text-[11px] cursor-pointer"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#666]">
          <p>
            © {new Date().getFullYear()} {PROFILE_DATA.displayName}. Factual information grounded strictly in authoritative CV.
          </p>

          <div className="flex items-center gap-4">
            <a href={`mailto:${PROFILE_DATA.email}`} className="hover:text-[#C5A059] transition-colors">
              {PROFILE_DATA.email}
            </a>
            <span>•</span>
            <a
              href={PROFILE_DATA.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#C5A059] transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
