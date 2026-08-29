import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { StatusBadge } from '../components/Badge';
import { FEATURED_PROJECTS } from '../data/projects';
import { ProjectCaseStudy } from '../types';
import { ArrowRight, Sparkles } from 'lucide-react';

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

  // Highlight statements specifically aligned with user specifications
  const projectSummaries: Record<string, { oneLine: string; keyHighlight: string }> = {
    'ai-testing-assistant': {
      oneLine: 'AI-powered testing workflow using local LLMs.',
      keyHighlight: 'Transforms functional descriptions and UI screenshots into structured testing assets.',
    },
    'ai-code-reviewer': {
      oneLine: 'Local LLM-powered multi-language code analysis.',
      keyHighlight: 'Analyzes code quality, smells and architectural improvement opportunities across 5+ languages.',
    },
    'ai-production-rca-agent': {
      oneLine: 'AI-assisted production incident investigation and root cause analysis.',
      keyHighlight: 'Currently under active development. Autonomous correlation of logs, metrics, and traces.',
    },
    'playwright-automation': {
      oneLine: 'Modern UI + API automation architecture.',
      keyHighlight: 'Designed for maintainable and reliable automation using Page Object Models and API fixtures.',
    },
    'we-are-eleven': {
      oneLine: 'Interactive football and tournament platform.',
      keyHighlight: 'Responsive tournament platform with live fixtures, dynamic standings, and player profiles.',
    },
  };

  return (
    <section id="projects" className="py-16 md:py-24 bg-[#0A0A0A] border-b border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText="Selected Work"
          title="Featured Projects"
          subtitle="Explore interactive prototypes, AI-powered QA tooling, and modern automation architectures."
          align="center"
        />

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          {[
            { id: 'all', label: 'All Projects (5)' },
            { id: 'ai', label: 'AI Engineering & Agents (3)' },
            { id: 'automation', label: 'Modern Automation (1)' },
            { id: 'web', label: 'Web Engineering (1)' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3.5 py-1.5 rounded-sm text-xs font-mono tracking-wider transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#C5A059] text-black font-semibold shadow-md'
                  : 'bg-[#141414] text-[#8C8C8C] border border-[#2A2A2A] hover:text-white hover:border-[#3E3E3E]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Concise Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => {
            const summary = projectSummaries[project.id] || {
              oneLine: project.subtitle,
              keyHighlight: project.keyCapabilities[0],
            };

            const isBuilding = project.status === 'IN DEVELOPMENT';

            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className={`p-6 rounded-sm border transition-all flex flex-col justify-between group ${
                  isBuilding
                    ? 'bg-[#12100C] border-[#3E3420] hover:border-[#C5A059]'
                    : 'bg-[#111111] border-[#222222] hover:border-[#3E3420] hover:bg-[#141414]'
                } shadow-sm`}
              >
                <div>
                  {/* Card Top: Number, Status & Category */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="font-mono text-[11px] text-[#666]">
                      0{index + 1}
                    </span>
                    <div className="flex items-center gap-2">
                      <StatusBadge status={project.status} />
                    </div>
                  </div>

                  {/* Project Name */}
                  <h3 className="text-xl font-serif font-normal text-white group-hover:text-[#C5A059] transition-colors leading-tight">
                    {project.title}
                  </h3>

                  {/* One-line Description */}
                  <p className="text-xs font-mono text-[#C5A059] mt-2 mb-3 font-medium">
                    {summary.oneLine}
                  </p>

                  {/* 3-5 Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 4).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 text-[10px] font-mono rounded-sm bg-[#161616] text-[#8C8C8C] border border-[#242424]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* One Key Highlight */}
                  <div className="p-3 rounded-sm bg-[#161616] border border-[#222222] text-xs text-[#C0B8AE] font-light leading-relaxed mb-6">
                    {summary.keyHighlight}
                  </div>
                </div>

                {/* Primary CTA */}
                <div className="pt-3 border-t border-[#1E1E1E]">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="w-full inline-flex items-center justify-between text-xs font-sans uppercase tracking-wider font-semibold text-[#C5A059] group-hover:text-white transition-colors cursor-pointer py-1"
                  >
                    <span>Explore Project</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
