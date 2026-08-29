import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { StatusBadge } from '../components/Badge';
import { FEATURED_PROJECTS } from '../data/projects';
import { ProjectCaseStudy } from '../types';
import { AiTestingAssistantSimulator, AiCodeReviewerSimulator } from '../components/ProjectDemoSimulators';
import {
  ArrowRight,
  ExternalLink,
  GitBranch,
  Layers,
  Terminal,
  Activity,
  AlertOctagon,
  Sparkles,
  ChevronRight,
  CheckCircle,
  Clock,
  Compass,
  Code2,
} from 'lucide-react';

interface FeaturedProjectsSectionProps {
  onSelectProject: (project: ProjectCaseStudy) => void;
}

export const FeaturedProjectsSection: React.FC<FeaturedProjectsSectionProps> = ({
  onSelectProject,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'ai' | 'automation' | 'web'>('all');

  const filteredProjects = FEATURED_PROJECTS.filter((p) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'ai') return p.category === 'AI Engineering';
    if (activeTab === 'automation') return p.category === 'Modern Automation';
    if (activeTab === 'web') return p.category === 'Web Engineering';
    return true;
  });

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#0A0A0A] border-b border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText="Portfolio Work"
          title="Featured Projects & Deep Dives"
          subtitle="In-depth case studies showcasing autonomous testing pipelines, local multi-language code review engines, and enterprise test automation frameworks."
          align="center"
        />

        {/* Filter Navigation */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {[
            { id: 'all', label: 'All Projects (5)' },
            { id: 'ai', label: 'AI Engineering & Agents (3)' },
            { id: 'automation', label: 'Modern Automation (1)' },
            { id: 'web', label: 'Web Engineering (1)' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3.5 py-1.5 rounded-sm text-xs font-sans uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#C5A059] text-black font-semibold shadow-md'
                  : 'bg-[#141414] text-[#8C8C8C] border border-[#2A2A2A] hover:text-white hover:border-[#3E3E3E]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Case Study Cards */}
        <div className="space-y-16">
          {filteredProjects.map((project, index) => {
            const isFlagship = project.isFlagshipActive;

            return (
              <div
                key={project.id}
                id={`project-${project.id}`}
                className={`rounded-sm border transition-all ${
                  isFlagship
                    ? 'bg-[#121212] border-[#C5A059]/60 shadow-xl shadow-black/80'
                    : 'bg-[#0E0E0E] border-[#2A2A2A] hover:border-[#383838]'
                } overflow-hidden p-6 sm:p-8 lg:p-10`}
              >
                {/* Project Header Bar */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 border-b border-[#222222] pb-6 mb-8">
                  <div>
                    <div className="flex items-center gap-3 flex-wrap mb-2">
                      <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-medium px-2.5 py-1 rounded-sm bg-[#161410] border border-[#3E3420]">
                        PROJECT 0{index + 1}
                      </span>
                      <StatusBadge status={project.status} />
                      <span className="text-[10px] font-mono text-[#8C8C8C] bg-[#161616] px-2 py-0.5 rounded-sm border border-[#2A2A2A]">
                        {project.category}
                      </span>
                      {project.timeline && (
                        <span className="text-xs font-mono text-[#777]">
                          {project.timeline}
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-serif font-normal text-white tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-[#C5A059]/90 mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-sm text-xs font-sans uppercase tracking-widest font-semibold bg-[#161616] hover:bg-[#C5A059] text-[#E0D8D0] hover:text-black border border-[#2A2A2A] hover:border-[#C5A059] transition-all shadow-sm cursor-pointer"
                    >
                      <span>Read Case Study</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Main Body: Problem / Solution & Architecture Workflow */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
                  {/* Left Column: Problem & Solution & Key Capabilities */}
                  <div className="lg:col-span-6 space-y-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-[10px] font-sans uppercase tracking-[0.25em] text-rose-400 font-medium mb-1.5">
                          Problem Statement
                        </h4>
                        <p className="text-xs sm:text-sm text-[#A8A8A8] font-light leading-relaxed">
                          {project.problem}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-[10px] font-sans uppercase tracking-[0.25em] text-emerald-400 font-medium mb-1.5">
                          Architectural Solution
                        </h4>
                        <p className="text-xs sm:text-sm text-[#A8A8A8] font-light leading-relaxed">
                          {project.solution}
                        </p>
                      </div>
                    </div>

                    {/* Key Capabilities */}
                    <div>
                      <h4 className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#8C8C8C] font-medium mb-3">
                        Key Capabilities & Highlights
                      </h4>
                      <ul className="space-y-2">
                        {project.keyCapabilities.slice(0, 4).map((cap, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-[#C0B8AE]">
                            <CheckCircle className="w-3.5 h-3.5 text-[#C5A059] mt-0.5 shrink-0" />
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Demonstrated Impact */}
                    <div className="p-3.5 rounded-sm bg-[#141414] border border-[#2A2A2A] text-xs">
                      <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-medium block mb-1">
                        Demonstrated Impact
                      </span>
                      <p className="text-[#C0B8AE] font-light leading-relaxed">
                        {project.impact}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Visual Architecture / Workflow Pipeline */}
                  <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
                    <div className="p-5 rounded-sm bg-[#0A0A0A] border border-[#222222]">
                      <div className="flex items-center justify-between text-xs font-mono text-[#8C8C8C] border-b border-[#222222] pb-2 mb-4">
                        <div className="flex items-center gap-1.5 text-[#C5A059] font-medium">
                          <GitBranch className="w-3.5 h-3.5" />
                          <span className="font-sans text-xs uppercase tracking-wider">Conceptual Workflow Pipeline</span>
                        </div>
                        <span className="text-[10px] text-[#666]">End-to-End</span>
                      </div>

                      <div className="space-y-2">
                        {project.architectureWorkflow.map((step, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-3 p-2 rounded-sm bg-[#121212] border border-[#222222] text-xs"
                          >
                            <span className="w-5 h-5 rounded-sm bg-[#1A1813] text-[#C5A059] border border-[#3E3420] flex items-center justify-center font-mono text-[10px] font-bold shrink-0">
                              0{idx + 1}
                            </span>
                            <span className="font-mono text-[#D4CDC5]">{step}</span>
                            {idx < project.architectureWorkflow.length - 1 && (
                              <ArrowRight className="w-3 h-3 text-[#555] ml-auto hidden sm:block shrink-0" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies Pills */}
                    <div className="pt-2">
                      <div className="text-[9px] font-sans text-[#777] uppercase tracking-[0.25em] mb-2">
                        Validated Technologies:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((t, idx) => (
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
                </div>

                {/* Interactive Simulator Embed for AI Projects */}
                {project.id === 'ai-testing-assistant' && (
                  <div className="mt-8 pt-6 border-t border-[#222222]">
                    <AiTestingAssistantSimulator />
                  </div>
                )}

                {project.id === 'ai-code-reviewer' && (
                  <div className="mt-8 pt-6 border-t border-[#222222]">
                    <AiCodeReviewerSimulator />
                  </div>
                )}

                {/* Special Visual Treatment for Project 03: CURRENTLY BUILDING */}
                {project.id === 'ai-production-rca-agent' && (
                  <div className="mt-8 pt-6 border-t border-[#222222]">
                    <div className="p-5 sm:p-6 rounded-sm bg-[#14120D] border border-[#4A3B1E] space-y-4">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-ping"></span>
                          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#C5A059] font-semibold">
                            CURRENTLY BUILDING — FLAGSHIP ACTIVE PROJECT
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-[#A68846]">
                          Active Engineering Sprint
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-[#A8A8A8] font-light leading-relaxed">
                        This project is actively under architecture and development. It addresses the critical gap between post-deployment telemetry alerts and structured engineering root cause post-mortems.
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                        <div className="p-3 rounded-sm bg-[#0E0E0E] border border-[#382D19]">
                          <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#C5A059] font-medium block mb-1">
                            Phase 1: Current State
                          </span>
                          <span className="text-[#A8A8A8] font-light">
                            Log parser and initial LLM reasoning heuristics validated on synthetic incident datasets.
                          </span>
                        </div>

                        <div className="p-3 rounded-sm bg-[#0E0E0E] border border-[#382D19]">
                          <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#C5A059] font-medium block mb-1">
                            Phase 2: Planned Architecture
                          </span>
                          <span className="text-[#A8A8A8] font-light">
                            FastAPI ingestion gateway with time-series correlation against APM traces and system metrics.
                          </span>
                        </div>

                        <div className="p-3 rounded-sm bg-[#0E0E0E] border border-[#382D19]">
                          <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#C5A059] font-medium block mb-1">
                            Phase 3: Future Capabilities
                          </span>
                          <span className="text-[#A8A8A8] font-light">
                            Autonomous Playwright regression script generation targeting isolated RCA defect triggers.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
