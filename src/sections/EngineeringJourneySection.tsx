import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { CheckCircle2, ChevronRight, Calendar, GitCommit, Sparkles } from 'lucide-react';

export const EngineeringJourneySection: React.FC = () => {
  const timelineMilestones = [
    {
      year: '2019 – 2020',
      phase: 'Enterprise Testing Foundations & SAP HCM',
      role: 'Associate Automation Consultant · Wipro',
      details:
        'Commenced career building robust automated verification for SAP HCM core HR processes. Executed functional and usability testing on modern SAP FIORI releases, coordinating the end-to-end defect lifecycle and validating HRSP summer and winter releases ahead of client deployments.',
      tags: ['SAP HCM', 'Tricentis Tosca', 'SAP FIORI', 'HRSP Releases', 'Manual & Functional QA'],
    },
    {
      year: '2020 – 2022',
      phase: 'ERP Expansion & UAT Event Leadership',
      role: 'Associate Automation Consultant · Wipro',
      details:
        'Analyzed SAP SuccessFactors and Ariba functionality to uncover automation opportunities across 25+ critical business processes. Independently owned SIT and UAT cycles, organized the client’s 1st formal UAT Execution Event, and drove a 2.5x increase in script assignments with 100% successful script runs during formal handover.',
      tags: ['SAP SuccessFactors', 'SAP Ariba', '25+ Processes', '1st UAT Event', '2.5x Script Growth'],
    },
    {
      year: '2022 – 2024',
      phase: 'High-Volume Telecom Automation & Team Mentorship',
      role: 'Senior Associate Automation Consultant · Wipro',
      details:
        'Evaluated Service Request (SR) functionality and spearheaded high-volume automation, authoring 450+ automation scripts across 4 customer telecom applications (DSV, Progressive, and SR test suites). Tracked and retested 100+ defects, led prepaid/postpaid testing, and mentored 5 junior associates on workflows and testing practices.',
      tags: ['Telecom Prepaid & Postpaid', '450+ Scripts', '100+ Defects Managed', '5 Associates Mentored'],
    },
    {
      year: 'Dec 2024 – Present',
      phase: 'AI-Driven Test Architectures & Agentic STLC',
      role: 'Senior Associate Automation Consultant · Wipro',
      details:
        'Architected autonomous agentic testing pipelines using Python and local LLMs (Ollama) to synthesize Playwright scripts, test scenarios, and RTMs directly from UI screenshots. Built a multi-language AI Code Reviewer analyzing 5+ programming languages for code quality, while maintaining 200+ TOSCA regression packs via DEX and qTest.',
      tags: ['AI Test Architect', 'Ollama (Local LLM)', 'Playwright TypeScript', 'AI Code Reviewer', '200+ Tosca Packs'],
    },
    {
      year: '2025 – Present',
      phase: 'Currently Building: AI Production Incident & RCA Agent',
      role: 'Flagship Active Engineering Initiative',
      details:
        'Developing an autonomous production incident investigation and Root Cause Analysis platform. Correlating logs, traces, and metrics with LLM reasoning to isolate probable root causes and generate structured engineering post-mortems.',
      tags: ['FastAPI', 'Observability Traces', 'Incident Diagnostics', 'RCA Reports', '🚧 In Development'],
      isCurrentlyBuilding: true,
    },
  ];

  return (
    <section
      id="journey"
      className="py-20 md:py-28 bg-[#0A0A0A] border-b border-[#222222]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText="Evolution"
          title="The Engineering Journey"
          subtitle="A clear progression from manual enterprise validation and large-scale ERP automation into modern Playwright engineering, local LLMs, and autonomous agent pipelines."
          align="center"
        />

        <div className="relative max-w-4xl mx-auto pl-4 sm:pl-8 border-l border-[#222222] space-y-12">
          {timelineMilestones.map((milestone, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Marker Dot */}
              <div
                className={`absolute -left-[25px] sm:-left-[41px] top-1.5 w-5 h-5 rounded-full flex items-center justify-center ${
                  milestone.isCurrentlyBuilding
                    ? 'bg-[#1A1813] border-2 border-[#C5A059]'
                    : idx === 3
                    ? 'bg-[#1A1813] border-2 border-[#C5A059]'
                    : 'bg-[#111111] border-2 border-[#333333]'
                }`}
              >
                <div
                  className={`w-2 h-2 rounded-full ${
                    milestone.isCurrentlyBuilding
                      ? 'bg-[#C5A059] animate-ping'
                      : idx === 3
                      ? 'bg-[#C5A059]'
                      : 'bg-[#666666]'
                  }`}
                ></div>
              </div>

              {/* Milestone Content Card */}
              <div
                className={`p-6 sm:p-7 rounded-sm border transition-all ${
                  milestone.isCurrentlyBuilding
                    ? 'bg-[#12100C] border-[#3E3420] shadow-md'
                    : 'bg-[#0C0C0C] border-[#222222] hover:border-[#333333]'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-medium text-[#C5A059] bg-[#1A1813] px-2.5 py-1 rounded-sm border border-[#3E3420]">
                      {milestone.year}
                    </span>
                    {milestone.isCurrentlyBuilding && (
                      <span className="font-sans uppercase tracking-wider text-[10px] font-medium text-[#C5A059] bg-[#1A1813] px-2.5 py-0.5 rounded-sm border border-[#3E3420]">
                        🚧 ACTIVE DEVELOPMENT
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-mono text-[#8C8C8C]">
                    {milestone.role}
                  </span>
                </div>

                <h3 className="text-xl font-serif font-normal text-white mb-2">
                  {milestone.phase}
                </h3>

                <p className="text-xs sm:text-sm text-[#C0B8AE] leading-relaxed mb-4">
                  {milestone.details}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#1F1F1F]">
                  {milestone.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 text-[11px] font-mono rounded-sm bg-[#141414] text-[#8C8C8C] border border-[#222222]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
