import React, { useState, useEffect } from 'react';
import { FileText, Menu, X, Terminal, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Work', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Expertise', href: '#what-i-do' },
    { label: 'Notes', href: '#notes' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#2A2A2A] shadow-xl shadow-black/60 py-3'
          : 'bg-[#0A0A0A]/60 backdrop-blur-sm border-b border-[#2A2A2A]/40 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Identity */}
          <a
            href="#"
            id="brand-logo"
            className="flex items-center gap-3 group text-left"
          >
            <div className="w-9 h-9 rounded-sm bg-[#161411] border border-[#C5A059]/50 flex items-center justify-center text-[#C5A059] font-mono font-bold text-sm shadow-inner group-hover:border-[#C5A059] group-hover:bg-[#1f1b14] transition-all">
              <Terminal className="w-4 h-4 text-[#C5A059]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-white tracking-wide text-sm sm:text-base group-hover:text-[#C5A059] transition-colors">
                  {PROFILE_DATA.displayName}
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-sm bg-[#1A1813] text-[#C5A059] border border-[#3E3420]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-pulse"></span>
                  7+ Yrs Exp
                </span>
              </div>
              <p className="text-[11px] font-mono text-[#8C8C8C] truncate max-w-[200px] sm:max-w-none">
                Senior SDET & Automation Consultant
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-navigation" className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-2.5 py-1.5 text-xs font-sans tracking-wider uppercase text-[#8C8C8C] hover:text-white hover:bg-[#161616] rounded-sm transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="nav-resume-btn"
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-sm bg-[#141414] text-[#E0D8D0] border border-[#2A2A2A] hover:border-[#C5A059] hover:text-[#C5A059] transition-all cursor-pointer shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Resume</span>
            </button>
            <a
              id="nav-contact-btn"
              href="#contact"
              className="inline-flex items-center gap-1 px-3.5 py-1.5 text-xs font-sans uppercase tracking-widest font-semibold rounded-sm bg-[#C5A059] hover:bg-[#D8B570] text-black shadow-sm transition-all cursor-pointer"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="mobile-resume-trigger"
              onClick={onOpenResume}
              className="p-2 text-xs font-mono text-[#C5A059] bg-[#141414] rounded-sm border border-[#2A2A2A] sm:hidden"
              aria-label="View Resume"
            >
              <FileText className="w-4 h-4" />
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-sm text-[#8C8C8C] hover:text-white hover:bg-[#181818] focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-dropdown"
            className="lg:hidden mt-3 pt-3 pb-4 border-t border-[#2A2A2A] bg-[#121212] rounded-lg px-4 shadow-2xl"
          >
            <div className="grid grid-cols-2 gap-2 mb-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-xs font-medium text-[#A8A8A8] hover:text-[#C5A059] hover:bg-[#1A1A1A] rounded-sm"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-2 pt-2 border-t border-[#2A2A2A]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full py-2.5 px-3 text-xs font-mono text-center rounded-sm bg-[#161616] text-[#C5A059] border border-[#2A2A2A] flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                View Complete Resume (CV)
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 px-3 text-xs font-semibold tracking-wider uppercase text-center rounded-sm bg-[#C5A059] text-black flex items-center justify-center gap-1.5"
              >
                Contact Jyotishka
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
