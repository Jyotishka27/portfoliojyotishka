import React, { useEffect } from 'react';
import { X, ArrowRight, CheckCircle2, AlertTriangle, Lightbulb, Compass, GitBranch, Terminal, ExternalLink } from 'lucide-react';
import { ProjectCaseStudy } from '../types';
import { StatusBadge } from './Badge';

interface ProjectModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      id="project-case-study-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/85 backdrop-blur-sm overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="project-case-study-modal"
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#0C0C0C] border border-[#222222] rounded-sm shadow-2xl flex flex-col overflow-hidden text-[#E0D8D0]"
      >
        {/* Header */}
        <div className="flex items-start justify-between p-5 sm:p-6 border-b border-[#222222] bg-[#0D0D0D]">
          <div>
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <StatusBadge status={project.status} />
              <span className="font-mono text-xs text-[#C5A059] bg-[#1A1813] px-2 py-0.5 rounded-sm border border-[#3E3420]">
                {project.category}
              </span>
              {project.timeline && (
                <span className="font-mono text-xs text-[#8C8C8C]">
                  {project.timeline}
                </span>
              )}
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-normal text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm font-mono text-[#8C8C8C] mt-1">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-sm text-[#8C8C8C] hover:text-white hover:bg-[#1A1A1A] transition-colors ml-4 shrink-0 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          {/* Problem & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-4 rounded-sm bg-[#161212] border border-[#331C1C] space-y-2">
              <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-semibold uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4" />
                Problem
              </div>
              <p className="text-xs sm:text-sm text-[#C0B8AE] leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-4 rounded-sm bg-[#111814] border border-[#1C2C20] space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-semibold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                Solution
              </div>
              <p className="text-xs sm:text-sm text-[#C0B8AE] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Workflow / Architecture Pipeline */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <GitBranch className="w-4 h-4 text-[#C5A059]" />
              <h3 className="text-sm font-serif font-normal uppercase tracking-wider text-white">
                Architecture & Workflow Pipeline
              </h3>
            </div>
            <div className="p-4 rounded-sm bg-[#121212] border border-[#222222] space-y-2">
              <div className="flex flex-col gap-2">
                {project.architectureWorkflow.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="font-mono text-xs font-medium text-[#C5A059] bg-[#1A1813] px-2 py-0.5 rounded-sm border border-[#3E3420] shrink-0">
                      0{idx + 1}
                    </span>
                    <span className="text-xs sm:text-sm text-[#E0D8D0] font-mono">
                      {step}
                    </span>
                    {idx < project.architectureWorkflow.length - 1 && (
                      <ArrowRight className="w-3.5 h-3.5 text-[#555] hidden sm:inline-block ml-auto shrink-0" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Key Capabilities */}
          <div>
            <h3 className="text-sm font-serif font-normal uppercase tracking-wider text-white mb-3">
              Key Capabilities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyCapabilities.map((cap, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-sm bg-[#121212] border border-[#222222] text-xs text-[#C0B8AE]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] mt-1.5 shrink-0"></span>
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Engineering Decisions & Lessons Learned */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-4 rounded-sm bg-[#121212] border border-[#222222] space-y-2.5">
              <div className="flex items-center gap-2 text-[#C5A059] font-mono text-xs font-semibold uppercase tracking-wider">
                <Terminal className="w-4 h-4" />
                Engineering Decisions
              </div>
              <ul className="space-y-2 text-xs text-[#C0B8AE]">
                {project.engineeringDecisions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#C5A059] font-mono">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-sm bg-[#121212] border border-[#222222] space-y-2.5">
              <div className="flex items-center gap-2 text-[#C5A059] font-mono text-xs font-semibold uppercase tracking-wider">
                <Lightbulb className="w-4 h-4" />
                Lessons Learned & Challenges
              </div>
              <ul className="space-y-2 text-xs text-[#C0B8AE]">
                {project.lessonsLearned.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#C5A059] font-mono">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Future Roadmap */}
          {project.futureRoadmap && project.futureRoadmap.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Compass className="w-4 h-4 text-[#C5A059]" />
                <h3 className="text-sm font-serif font-normal uppercase tracking-wider text-white">
                  Future Roadmap / Evolution
                </h3>
              </div>
              <div className="space-y-2">
                {project.futureRoadmap.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-sm bg-[#121212] border border-[#222222] text-xs text-[#C0B8AE] flex items-start gap-2.5"
                  >
                    <span className="text-xs font-mono text-[#8C8C8C]">[{idx + 1}]</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Impact Statement (Backed by CV) */}
          <div className="p-4 rounded-sm bg-[#141414] border border-[#3E3420]">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#C5A059] font-bold mb-1">
              Demonstrated Impact (Authoritative CV)
            </h4>
            <p className="text-xs sm:text-sm text-[#E0D8D0] leading-relaxed">
              {project.impact}
            </p>
          </div>

          {/* Technologies & Footer CTAs */}
          <div className="pt-4 border-t border-[#222222] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((t, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 text-[11px] font-mono rounded-sm bg-[#141414] text-[#C0B8AE] border border-[#222222]"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-[#8C8C8C] bg-[#121212] rounded-sm border border-[#222222]">
                  <span>GitHub:</span>
                  <span className="text-[#C5A059] font-medium">{project.githubUrl}</span>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
