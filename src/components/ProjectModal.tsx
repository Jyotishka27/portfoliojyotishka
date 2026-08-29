import React, { useState, useEffect } from 'react';
import {
  X,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  CheckCircle2,
  GitBranch,
  Layers,
  Terminal,
  Cpu,
  TrendingUp,
  Compass,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Sliders,
} from 'lucide-react';
import { ProjectCaseStudy } from '../types';
import { StatusBadge } from './Badge';
import { AiTestingAssistantSimulator, AiCodeReviewerSimulator } from './ProjectDemoSimulators';

interface ProjectModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Accordion open/close state
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    problem: true,
    solution: false,
    demo: false,
    architecture: false,
    capabilities: false,
    technology: false,
    decisions: false,
    impact: false,
    roadmap: false,
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      // Reset default states when new project opens
      setOpenSections({
        problem: true,
        solution: false,
        demo: project.id === 'ai-testing-assistant' || project.id === 'ai-code-reviewer',
        architecture: false,
        capabilities: false,
        technology: false,
        decisions: false,
        impact: false,
        roadmap: false,
      });
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const toggleSection = (key: string) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const expandAll = () => {
    setOpenSections({
      problem: true,
      solution: true,
      demo: true,
      architecture: true,
      capabilities: true,
      technology: true,
      decisions: true,
      impact: true,
      roadmap: true,
    });
  };

  const collapseAll = () => {
    setOpenSections({
      problem: false,
      solution: false,
      demo: false,
      architecture: false,
      capabilities: false,
      technology: false,
      decisions: false,
      impact: false,
      roadmap: false,
    });
  };

  // Tailored "At a Glance" metadata
  const atAGlanceData: Record<string, { label: string; value: string }[]> = {
    'ai-testing-assistant': [
      { label: 'Execution', value: '100% Local' },
      { label: 'LLM Engine', value: 'Ollama (Local Models)' },
      { label: 'Input', value: 'Screenshots + Functional Descriptions' },
      { label: 'Output', value: 'Requirements + Scenarios + RTM + Playwright Code' },
    ],
    'ai-code-reviewer': [
      { label: 'Execution', value: 'Local Workstation' },
      { label: 'Scope', value: 'Multi-Language (5+ Languages)' },
      { label: 'Analysis', value: 'Code Smells, Test Flakiness & Quality Score' },
      { label: 'Privacy', value: 'Zero Data Egress / Air-gapped Ready' },
    ],
    'ai-production-rca-agent': [
      { label: 'Execution', value: 'Autonomous Local / On-Prem' },
      { label: 'Framework', value: 'Python & FastAPI' },
      { label: 'Input Signals', value: 'App Logs, Metric Deviations & Traces' },
      { label: 'Outcome', value: 'Root Cause Hypothesis & Incident Remediation' },
    ],
    'playwright-automation': [
      { label: 'Architecture', value: 'Strict Page Object Model (POM)' },
      { label: 'Stack', value: 'Playwright & TypeScript' },
      { label: 'Coverage', value: 'End-to-End UI + Backend REST APIs' },
      { label: 'Performance', value: 'Parallel Multi-Browser Headless Execution' },
    ],
    'we-are-eleven': [
      { label: 'Platform', value: 'Responsive Web Application' },
      { label: 'Data Model', value: 'Client-Side JSON Architecture' },
      { label: 'Hosting', value: 'GitHub Pages Deployment' },
      { label: 'Features', value: 'Live Fixtures, Standings & Player Metrics' },
    ],
  };

  const currentGlance = atAGlanceData[project.id] || [
    { label: 'Category', value: project.category },
    { label: 'Status', value: project.status },
  ];

  return (
    <div
      id="project-case-study-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/90 backdrop-blur-md overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="project-case-study-modal"
        className="relative w-full max-w-4xl max-h-[92vh] bg-[#0C0C0C] border border-[#2A2A2A] rounded-sm shadow-2xl flex flex-col overflow-hidden text-[#E0D8D0]"
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between p-5 sm:p-6 border-b border-[#222222] bg-[#111111]">
          <div>
            <div className="flex items-center gap-2.5 mb-2 flex-wrap">
              <StatusBadge status={project.status} />
              <span className="font-mono text-xs text-[#C5A059] bg-[#1A1813] px-2 py-0.5 rounded-sm border border-[#3E3420]">
                {project.category}
              </span>
              {project.timeline && (
                <span className="font-mono text-xs text-[#777]">
                  {project.timeline}
                </span>
              )}
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-white tracking-tight">
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

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-6">
          {/* Top Section: First Screen Experience */}
          <div className="p-4 sm:p-5 rounded-sm bg-[#121212] border border-[#242424] space-y-4">
            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs font-mono rounded-sm bg-[#181818] text-[#D0C8BE] border border-[#2A2A2A]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* At a Glance Grid (3-4 items) */}
            <div className="pt-3 border-t border-[#1F1F1F]">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C5A059] font-medium block mb-2.5">
                At a Glance
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                {currentGlance.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-sm bg-[#0E0E0E] border border-[#222222]"
                  >
                    <span className="text-[10px] font-mono text-[#777] block uppercase">
                      {item.label}
                    </span>
                    <span className="text-xs font-medium text-white tracking-tight leading-snug">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Expand / Collapse Controls */}
          <div className="flex items-center justify-between text-xs font-mono text-[#8C8C8C] pt-1">
            <span className="uppercase tracking-wider">Detailed Technical Sections</span>
            <div className="flex items-center gap-3">
              <button
                onClick={expandAll}
                className="hover:text-[#C5A059] underline cursor-pointer transition-colors"
              >
                Expand All
              </button>
              <span>·</span>
              <button
                onClick={collapseAll}
                className="hover:text-[#C5A059] underline cursor-pointer transition-colors"
              >
                Collapse All
              </button>
            </div>
          </div>

          {/* Accordion 1: Problem */}
          <div className="rounded-sm border border-[#242424] bg-[#111111] overflow-hidden">
            <button
              onClick={() => toggleSection('problem')}
              className="w-full p-4 flex items-center justify-between text-left hover:bg-[#141414] transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2.5 text-xs font-mono font-semibold uppercase tracking-wider text-rose-400">
                <AlertTriangle className="w-4 h-4" />
                <span>Problem Statement</span>
              </div>
              {openSections.problem ? (
                <ChevronUp className="w-4 h-4 text-[#8C8C8C]" />
              ) : (
                <ChevronDown className="w-4 h-4 text-[#8C8C8C]" />
              )}
            </button>
            {openSections.problem && (
              <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-[#C0B8AE] leading-relaxed border-t border-[#1C1C1C] font-light">
                {project.problem}
              </div>
            )}
          </div>

          {/* Accordion 2: Solution & Architecture Pipeline */}
          <div className="rounded-sm border border-[#242424] bg-[#111111] overflow-hidden">
            <button
              onClick={() => toggleSection('solution')}
              className="w-full p-4 flex items-center justify-between text-left hover:bg-[#141414] transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2.5 text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>Architectural Solution</span>
              </div>
              {openSections.solution ? (
                <ChevronUp className="w-4 h-4 text-[#8C8C8C]" />
              ) : (
                <ChevronDown className="w-4 h-4 text-[#8C8C8C]" />
              )}
            </button>
            {openSections.solution && (
              <div className="p-4 sm:p-5 pt-0 space-y-4 text-xs sm:text-sm text-[#C0B8AE] leading-relaxed border-t border-[#1C1C1C] font-light">
                <p>{project.solution}</p>

                {/* Workflow step-by-step pipeline */}
                <div className="pt-2">
                  <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C5A059] block mb-2 font-medium">
                    Execution Pipeline
                  </span>
                  <div className="space-y-1.5">
                    {project.architectureWorkflow.map((step, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 p-2 rounded-sm bg-[#0D0D0D] border border-[#222222] text-xs"
                      >
                        <span className="w-5 h-5 rounded-sm bg-[#1A1813] text-[#C5A059] border border-[#3E3420] flex items-center justify-center font-mono text-[10px] font-bold shrink-0">
                          {idx + 1}
                        </span>
                        <span className="font-mono text-[#D4CDC5]">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Accordion 3: Interactive Demo / Simulator (for interactive prototypes) */}
          {(project.id === 'ai-testing-assistant' || project.id === 'ai-code-reviewer') && (
            <div className="rounded-sm border border-[#3E3420] bg-[#12100C] overflow-hidden">
              <button
                onClick={() => toggleSection('demo')}
                className="w-full p-4 flex items-center justify-between text-left hover:bg-[#161410] transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2.5 text-xs font-mono font-semibold uppercase tracking-wider text-[#C5A059]">
                  <Terminal className="w-4 h-4" />
                  <span>Interactive Prototype Simulation</span>
                  <span className="text-[9px] bg-[#1A1813] border border-[#3E3420] px-2 py-0.5 rounded-sm text-[#C5A059]">
                    Live Demo
                  </span>
                </div>
                {openSections.demo ? (
                  <ChevronUp className="w-4 h-4 text-[#8C8C8C]" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-[#8C8C8C]" />
                )}
              </button>
              {openSections.demo && (
                <div className="p-4 sm:p-5 pt-0 border-t border-[#2A2418]">
                  {project.id === 'ai-testing-assistant' && <AiTestingAssistantSimulator />}
                  {project.id === 'ai-code-reviewer' && <AiCodeReviewerSimulator />}
                </div>
              )}
            </div>
          )}

          {/* Accordion 4: Key Capabilities */}
          <div className="rounded-sm border border-[#242424] bg-[#111111] overflow-hidden">
            <button
              onClick={() => toggleSection('capabilities')}
              className="w-full p-4 flex items-center justify-between text-left hover:bg-[#141414] transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2.5 text-xs font-mono font-semibold uppercase tracking-wider text-[#C5A059]">
                <Layers className="w-4 h-4" />
                <span>Key Capabilities & Highlights</span>
              </div>
              {openSections.capabilities ? (
                <ChevronUp className="w-4 h-4 text-[#8C8C8C]" />
              ) : (
                <ChevronDown className="w-4 h-4 text-[#8C8C8C]" />
              )}
            </button>
            {openSections.capabilities && (
              <div className="p-4 sm:p-5 pt-0 border-t border-[#1C1C1C]">
                <ul className="space-y-2">
                  {project.keyCapabilities.map((cap, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#C0B8AE]">
                      <CheckCircle2 className="w-4 h-4 text-[#C5A059] mt-0.5 shrink-0" />
                      <span className="leading-relaxed">{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Accordion 5: Engineering Decisions & Lessons */}
          <div className="rounded-sm border border-[#242424] bg-[#111111] overflow-hidden">
            <button
              onClick={() => toggleSection('decisions')}
              className="w-full p-4 flex items-center justify-between text-left hover:bg-[#141414] transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2.5 text-xs font-mono font-semibold uppercase tracking-wider text-blue-400">
                <Cpu className="w-4 h-4" />
                <span>Engineering Decisions & Architecture Trade-offs</span>
              </div>
              {openSections.decisions ? (
                <ChevronUp className="w-4 h-4 text-[#8C8C8C]" />
              ) : (
                <ChevronDown className="w-4 h-4 text-[#8C8C8C]" />
              )}
            </button>
            {openSections.decisions && (
              <div className="p-4 sm:p-5 pt-0 space-y-4 border-t border-[#1C1C1C] text-xs sm:text-sm">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#8C8C8C] block mb-1.5">
                    Architectural Decisions:
                  </span>
                  <ul className="space-y-1.5 text-[#C0B8AE]">
                    {project.engineeringDecisions.map((dec, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#C5A059] font-mono">▸</span>
                        <span className="leading-relaxed">{dec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {project.lessonsLearned && project.lessonsLearned.length > 0 && (
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#8C8C8C] block mb-1.5">
                      Lessons Learned:
                    </span>
                    <ul className="space-y-1.5 text-[#C0B8AE]">
                      {project.lessonsLearned.map((lesson, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-emerald-400 font-mono">✓</span>
                          <span className="leading-relaxed">{lesson}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Accordion 6: Impact */}
          <div className="rounded-sm border border-[#242424] bg-[#111111] overflow-hidden">
            <button
              onClick={() => toggleSection('impact')}
              className="w-full p-4 flex items-center justify-between text-left hover:bg-[#141414] transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2.5 text-xs font-mono font-semibold uppercase tracking-wider text-[#C5A059]">
                <TrendingUp className="w-4 h-4" />
                <span>Demonstrated Impact & Value</span>
              </div>
              {openSections.impact ? (
                <ChevronUp className="w-4 h-4 text-[#8C8C8C]" />
              ) : (
                <ChevronDown className="w-4 h-4 text-[#8C8C8C]" />
              )}
            </button>
            {openSections.impact && (
              <div className="p-4 sm:p-5 pt-0 border-t border-[#1C1C1C] text-xs sm:text-sm text-[#C0B8AE] leading-relaxed font-light">
                {project.impact}
              </div>
            )}
          </div>

          {/* Accordion 7: Future Roadmap */}
          {project.futureRoadmap && project.futureRoadmap.length > 0 && (
            <div className="rounded-sm border border-[#242424] bg-[#111111] overflow-hidden">
              <button
                onClick={() => toggleSection('roadmap')}
                className="w-full p-4 flex items-center justify-between text-left hover:bg-[#141414] transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2.5 text-xs font-mono font-semibold uppercase tracking-wider text-purple-400">
                  <Compass className="w-4 h-4" />
                  <span>Future Roadmap & Evolution</span>
                </div>
                {openSections.roadmap ? (
                  <ChevronUp className="w-4 h-4 text-[#8C8C8C]" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-[#8C8C8C]" />
                )}
              </button>
              {openSections.roadmap && (
                <div className="p-4 sm:p-5 pt-0 border-t border-[#1C1C1C]">
                  <ul className="space-y-1.5 text-xs sm:text-sm text-[#C0B8AE]">
                    {project.futureRoadmap.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-purple-400 font-mono">→</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#222222] bg-[#111111] flex items-center justify-between">
          <span className="text-[11px] font-mono text-[#666]">
            Architectural Case Study · Jyotishka Mukhopadhyay
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-mono uppercase tracking-wider rounded-sm bg-[#1A1813] text-[#C5A059] border border-[#3E3420] hover:bg-[#C5A059] hover:text-black transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
