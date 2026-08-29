import React, { useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, Cpu, Database, Bot, GitPullRequest, ArrowRight } from 'lucide-react';
import { CapabilityArea } from '../types';

interface CapabilityModalProps {
  capability: CapabilityArea | null;
  onClose: () => void;
}

export const CapabilityModal: React.FC<CapabilityModalProps> = ({ capability, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (capability) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [capability, onClose]);

  if (!capability) return null;

  const iconMap: Record<string, React.ReactNode> = {
    'enterprise-testing': <ShieldCheck className="w-5 h-5 text-[#C5A059]" />,
    'test-automation': <Cpu className="w-5 h-5 text-[#C5A059]" />,
    'api-backend-testing': <Database className="w-5 h-5 text-[#C5A059]" />,
    'ai-engineering': <Bot className="w-5 h-5 text-[#C5A059]" />,
    'test-lifecycle': <GitPullRequest className="w-5 h-5 text-[#C5A059]" />,
  };

  return (
    <div
      id="capability-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-sm overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="capability-modal-content"
        className="relative w-full max-w-2xl bg-[#0D0D0D] border border-[#2A2A2A] rounded-sm shadow-2xl flex flex-col overflow-hidden text-[#E0D8D0]"
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-[#222222] bg-[#121212]">
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-sm bg-[#1A1813] border border-[#3E3420] shrink-0 mt-0.5">
              {iconMap[capability.id] || <ShieldCheck className="w-5 h-5 text-[#C5A059]" />}
            </div>
            <div>
              <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#C5A059] font-medium block mb-1">
                Capability Deep Dive
              </span>
              <h2 className="text-2xl font-serif font-normal text-white tracking-tight">
                {capability.title}
              </h2>
              <p className="text-xs font-mono text-[#8C8C8C] mt-1">
                {capability.tagline}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-sm text-[#8C8C8C] hover:text-white hover:bg-[#1A1A1A] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-7 overflow-y-auto space-y-6">
          {/* Overview */}
          <div>
            <h3 className="text-xs font-sans uppercase tracking-[0.2em] text-[#8C8C8C] font-semibold mb-2">
              Domain Scope & Purpose
            </h3>
            <p className="text-sm text-[#C0B8AE] font-light leading-relaxed">
              {capability.description}
            </p>
          </div>

          {/* Delivery Proof / Key Highlights */}
          <div className="p-4 rounded-sm bg-[#121212] border border-[#222222] space-y-3">
            <h3 className="text-xs font-sans uppercase tracking-[0.2em] text-[#C5A059] font-semibold">
              Verified Production Delivery & Evidence
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#C0B8AE]">
              {capability.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <span className="leading-snug">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies & Platforms */}
          <div>
            <h3 className="text-xs font-sans uppercase tracking-[0.2em] text-[#8C8C8C] font-semibold mb-3">
              Technologies, Platforms & Ecosystems
            </h3>
            <div className="flex flex-wrap gap-2">
              {capability.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-mono rounded-sm bg-[#161616] text-[#E0D8D0] border border-[#2A2A2A]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#222222] bg-[#121212] flex items-center justify-between">
          <span className="text-[11px] font-mono text-[#666]">
            Validated through 7+ years of enterprise QA delivery
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-mono uppercase tracking-wider rounded-sm bg-[#1A1813] text-[#C5A059] border border-[#3E3420] hover:bg-[#C5A059] hover:text-black transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
