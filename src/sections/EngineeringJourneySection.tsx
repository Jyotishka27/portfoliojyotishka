import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

export const EngineeringJourneySection: React.FC = () => {
  const [expandedMilestones, setExpandedMilestones] = useState<Record<number, boolean>>({});

  const timelineMilestones = [
    {
      year: '2019 – 2020',
      role: 'SAP HCM',
      highlight: 'Enterprise Testing Foundations',
      details:
        'Commenced career building robust automated verification for SAP HCM core HR processes. Executed functional and usability testing on modern SAP FIORI releases, coordinating the end-to-end defect lifecycle and validating HRSP summer and winter releases ahead of client deployments.',
      tags: ['SAP HCM', 'Tricentis Tosca', 'SAP FIORI', 'HRSP Releases', 'Manual & Functional QA'],
    },
    {
      year: '2020 – 2022',
      role: 'SuccessFactors / Ariba',
      highlight: 'SIT, UAT & Automation',
      details:
        'Analyzed SAP SuccessFactors and Ariba functionality to uncover automation opportunities across 25+ critical business processes. Independently owned SIT and UAT cycles, organized the client’s 1st formal UAT Execution Event, and drove a 2.5x increase in script assignments with 100% successful script runs during formal handover.',
      tags: ['SAP SuccessFactors', 'SAP Ariba', '25+ Processes', '1st UAT Event', '2.5x Script Growth'],
    },
    {
      year: '2022 – 2024',
      role: 'Telecom',
      highlight: '450+ Automation Scripts',
      details:
        'Evaluated Service Request (SR) functionality and spearheaded high-volume automation, authoring 450+ automation scripts across 4 customer telecom applications (DSV, Progressive, and SR test suites). Tracked and retested 100+ defects, led prepaid/postpaid testing, and mentored 5 junior associates on workflows and testing practices.',
      tags: ['Telecom Prepaid & Postpaid', '450+ Scripts', '100+ Defects Managed', '5 Associates Mentored'],
    },
    {
      year: '2024 – Present',
      role: 'AI Engineering',
      highlight: 'AI Testing + AI Code Review',
      details:
        'Architected autonomous agentic testing pipelines using Python and local LLMs (Ollama) to synthesize Playwright scripts, test scenarios, and RTMs directly from UI screenshots. Built a multi-language AI Code Reviewer analyzing 5+ programming languages for code quality, while maintaining 200+ TOSCA regression packs via DEX and qTest.',
      tags: ['AI Test Architect', 'Ollama (Local LLM)', 'Playwright TypeScript', 'AI Code Reviewer', '200+ Tosca Packs'],
    },
    {
      year: '2025 – Present',
      role: 'AI Production RCA',
      highlight: 'Currently Building',
      details:
        'Developing an autonomous production incident investigation and Root Cause Analysis platform. Correlating logs, traces, and metrics with LLM reasoning to isolate probable root causes and generate structured engineering post-mortems.',
      tags: ['FastAPI', 'Observability Traces', 'Incident Diagnostics', 'RCA Reports', 'Active Initiative'],
      isCurrentlyBuilding: true,
    },
  ];

  const toggleMilestone = (idx: number) => {
    setExpandedMilestones((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <section id="journey" className="py-16 md:py-24 bg-[#0A0A0A] border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText="Evolution"
          title="The Engineering Journey"
          subtitle="A clear progression from manual enterprise validation and large-scale ERP automation into modern Playwright engineering and autonomous AI pipelines."
          align="center"
        />

        <div className="relative max-w-3xl mx-auto pl-4 sm:pl-8 border-l border-[#242424] space-y-6">
          {timelineMilestones.map((m, idx) => {
            const isExpanded = !!expandedMilestones[idx];

            return (
              <div key={idx} className="relative group">
                {/* Timeline Marker Dot */}
                <div
                  className={`absolute -left-[25px] sm:-left-[41px] top-4 w-4 h-4 rounded-full flex items-center justify-center ${
                    m.isCurrentlyBuilding
                      ? 'bg-[#1A1813] border-2 border-[#C5A059]'
                      : idx === 3
                      ? 'bg-[#1A1813] border-2 border-[#C5A059]'
                      : 'bg-[#111111] border-2 border-[#333333]'
                  }`}
                >
                  <div
                    className={`w-1.5 h-1.5 rounded-full ${
                      m.isCurrentlyBuilding || idx === 3 ? 'bg-[#C5A059]' : 'bg-[#666666]'
                    }`}
                  ></div>
                </div>

                {/* Compact Milestone Card */}
                <button
                  onClick={() => toggleMilestone(idx)}
                  className={`w-full p-4 sm:p-5 rounded-sm border text-left transition-all cursor-pointer ${
                    isExpanded
                      ? 'bg-[#161410] border-[#C5A059] shadow-md'
                      : m.isCurrentlyBuilding
                      ? 'bg-[#12100C] border-[#3E3420] hover:border-[#C5A059]'
                      : 'bg-[#111111] border-[#222222] hover:border-[#383838] hover:bg-[#141414]'
                  }`}
                  aria-expanded={isExpanded}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1.5">
                    <span className="font-mono text-xs font-medium text-[#C5A059] bg-[#1A1813] px-2 py-0.5 rounded-sm border border-[#3E3420] w-fit">
                      {m.year}
                    </span>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-[#777]">
                      <span>{isExpanded ? 'Less' : 'Details'}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-serif font-normal text-white">
                    {m.role}
                  </h3>

                  <p className="text-xs sm:text-sm font-mono text-[#C5A059] mt-0.5 font-medium">
                    {m.highlight}
                  </p>

                  {/* Expanded Details */}
                  {isExpanded && (
                    <div className="pt-3 mt-3 border-t border-[#3E3420] space-y-3 animate-fadeIn">
                      <p className="text-xs sm:text-sm text-[#C0B8AE] leading-relaxed font-light">
                        {m.details}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {m.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 text-[10px] font-mono rounded-sm bg-[#181818] text-[#8C8C8C] border border-[#242424]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
