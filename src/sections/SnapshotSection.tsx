import React, { useState } from 'react';
import { Award, Layers, CheckCircle2, Cpu, ShieldCheck, Users, TrendingUp, ChevronDown, ChevronUp, Info } from 'lucide-react';
import { MetricCard } from '../types';

export const SnapshotSection: React.FC = () => {
  const [selectedMetricId, setSelectedMetricId] = useState<string | null>(null);
  const [showAllMetrics, setShowAllMetrics] = useState(false);

  const coreMetrics: (MetricCard & { icon: React.ReactNode; verifiedSource: string })[] = [
    {
      id: 'years-experience',
      value: '7+ Years',
      label: 'Enterprise Experience',
      subtext: 'Enterprise QA and SDET delivery across SAP, Salesforce, and Telecom ecosystems at Wipro.',
      icon: <Award className="w-4 h-4 text-[#C5A059]" />,
      badge: 'Senior Consultant',
      verifiedSource: 'Wipro (Jun 2019 – Present) · Lead Automation Consultant',
    },
    {
      id: 'telecom-scripts',
      value: '450+',
      label: 'Automation Scripts',
      subtext: 'Authored across DSV, Progressive, and SR test suites across 4 customer telecom applications.',
      icon: <Layers className="w-4 h-4 text-[#C5A059]" />,
      badge: 'Telecom Scale',
      verifiedSource: 'Wipro Telecom Track · High-volume regression automation',
    },
    {
      id: 'tosca-scripts',
      value: '200+',
      label: 'TOSCA Scripts',
      subtext: 'Maintained across sanity and regression test suites with DEX and qTest distributed execution.',
      icon: <Cpu className="w-4 h-4 text-[#C5A059]" />,
      badge: 'DEX & qTest',
      verifiedSource: 'Wipro Enterprise Practice · 100% Traceability & Test Maintenance',
    },
    {
      id: 'sap-processes',
      value: '25+',
      label: 'SAP Business Processes',
      subtext: 'Analyzed for automation suitability across SAP SuccessFactors and SAP Ariba cloud modules.',
      icon: <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />,
      badge: 'SuccessFactors & Ariba',
      verifiedSource: 'Wipro Enterprise ERP · SIT, UAT & Automation Feasibility',
    },
  ];

  const additionalMetrics: (MetricCard & { icon: React.ReactNode; verifiedSource: string })[] = [
    {
      id: 'ai-languages',
      value: '5+',
      label: 'Languages Analyzed by AI',
      subtext: 'Multi-language code analyzer inspecting smells & architectural improvements using local LLMs.',
      icon: <Cpu className="w-4 h-4 text-[#C5A059]" />,
      badge: 'Ollama & LLMs',
      verifiedSource: 'Independent Engineering Initiative · Local AI code analysis',
    },
    {
      id: 'defects-retested',
      value: '100+',
      label: 'Defects Managed & Retested',
      subtext: 'Identified, tracked, and verified across iterative release cycles preventing escapes.',
      icon: <ShieldCheck className="w-4 h-4 text-[#C5A059]" />,
      badge: 'Defect Triage',
      verifiedSource: 'Wipro Telecom Quality Governance',
    },
    {
      id: 'associates-mentored',
      value: '5',
      label: 'Junior Associates Mentored',
      subtext: 'Accelerated team ramp-up on testing practices, domain workflows, and automation design.',
      icon: <Users className="w-4 h-4 text-[#C5A059]" />,
      badge: 'Leadership',
      verifiedSource: 'Wipro Team Mentorship & Knowledge Transfer',
    },
    {
      id: 'client-handover',
      value: '100%',
      label: 'Client Handover Success',
      subtext: 'Delivered flawless end-to-end script runs during formal client acceptance handovers.',
      icon: <TrendingUp className="w-4 h-4 text-[#C5A059]" />,
      badge: 'Formal Sign-off',
      verifiedSource: 'Wipro Enterprise Client Acceptance Milestones',
    },
  ];

  const displayedMetrics = showAllMetrics ? [...coreMetrics, ...additionalMetrics] : coreMetrics;

  const toggleMetric = (id: string) => {
    setSelectedMetricId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="snapshot" className="py-14 md:py-20 bg-[#0A0A0A] border-b border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#C5A059] font-medium px-3 py-1 rounded-sm bg-[#161410] border border-[#3E3420]">
            Professional Snapshot
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-normal text-white tracking-tight mt-2.5">
            Verified Career Metrics
          </h2>
          <p className="text-xs text-[#8C8C8C] mt-2">
            Click any metric to reveal supporting context and verification.
          </p>
        </div>

        {/* High-Value Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {displayedMetrics.map((m) => {
            const isExpanded = selectedMetricId === m.id;

            return (
              <button
                key={m.id}
                onClick={() => toggleMetric(m.id)}
                className={`p-5 rounded-sm text-left transition-all cursor-pointer border ${
                  isExpanded
                    ? 'bg-[#161410] border-[#C5A059] shadow-md'
                    : 'bg-[#101010] border-[#242424] hover:border-[#383838] hover:bg-[#141414]'
                } flex flex-col justify-between`}
                aria-expanded={isExpanded}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono text-[#8C8C8C] bg-[#161616] px-2 py-0.5 rounded-sm border border-[#2A2A2A]">
                      {m.badge}
                    </span>
                    <span className="text-[#8C8C8C] hover:text-[#C5A059] transition-colors">
                      <Info className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  <div className="text-3xl sm:text-4xl font-serif font-light text-white tracking-tight mb-1">
                    {m.value}
                  </div>

                  <div className="text-xs font-mono text-[#C5A059] tracking-wide font-medium">
                    {m.label}
                  </div>
                </div>

                {/* Inline progressive disclosure */}
                {isExpanded ? (
                  <div className="mt-4 pt-3 border-t border-[#3E3420] text-xs text-[#C0B8AE] space-y-1.5 animate-fadeIn">
                    <p className="leading-relaxed font-light">{m.subtext}</p>
                    <p className="text-[10px] font-mono text-[#8C8C8C] italic">
                      Source: {m.verifiedSource}
                    </p>
                  </div>
                ) : (
                  <div className="mt-3 text-[11px] font-mono text-[#555] flex items-center gap-1">
                    <span>Click for context</span>
                    <ChevronDown className="w-3 h-3" />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Progressive Disclosure Toggle for More Metrics */}
        <div className="text-center mt-6">
          <button
            onClick={() => setShowAllMetrics(!showAllMetrics)}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-mono text-[#8C8C8C] hover:text-[#C5A059] bg-[#121212] hover:bg-[#181818] border border-[#222222] hover:border-[#3E3420] rounded-sm transition-all cursor-pointer"
          >
            {showAllMetrics ? (
              <>
                <span>Show Core 4 Metrics</span>
                <ChevronUp className="w-3.5 h-3.5" />
              </>
            ) : (
              <>
                <span>View All Scale Metrics (8 Total)</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};
