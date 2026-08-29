import React from 'react';
import { MetricCard } from '../types';
import { Award, Layers, CheckCircle2, TrendingUp, Users, Cpu, ShieldCheck } from 'lucide-react';

export const SnapshotSection: React.FC = () => {
  const metrics: (MetricCard & { icon: React.ReactNode })[] = [
    {
      id: 'years-experience',
      value: '7+ Years',
      label: 'Enterprise QA & SDET',
      subtext: 'Delivering cross-domain testing & AI solutions across SAP, Salesforce, and Telecom',
      icon: <Award className="w-4 h-4 text-[#C5A059]" />,
      badge: 'Senior Consultant',
    },
    {
      id: 'telecom-scripts',
      value: '450+',
      label: 'Automation Scripts',
      subtext: 'Developed across DSV, Progressive, and SR test types across 4 customer apps',
      icon: <Layers className="w-4 h-4 text-[#C5A059]" />,
      badge: 'Telecom Scale',
    },
    {
      id: 'tosca-scripts',
      value: '200+',
      label: 'TOSCA Test Scripts',
      subtext: 'Regression and sanity packs maintained using DEX and qTest with 100% traceability',
      icon: <Cpu className="w-4 h-4 text-[#C5A059]" />,
      badge: 'DEX & qTest',
    },
    {
      id: 'sap-processes',
      value: '25+',
      label: 'SAP Business Processes',
      subtext: 'Analyzed and automated across SAP SuccessFactors and SAP Ariba modules',
      icon: <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />,
      badge: 'SuccessFactors & Ariba',
    },
    {
      id: 'ai-languages',
      value: '5+',
      label: 'Languages Analyzed by AI',
      subtext: 'Multi-language code analyzer inspecting smells & architectural improvements',
      icon: <Cpu className="w-4 h-4 text-[#C5A059]" />,
      badge: 'Ollama & LLMs',
    },
    {
      id: 'defects-retested',
      value: '100+',
      label: 'Defects Managed & Retested',
      subtext: 'Identified, tracked, and verified across iterative release cycles preventing escapes',
      icon: <ShieldCheck className="w-4 h-4 text-[#C5A059]" />,
      badge: 'P1/P2/P3 Defect Triage',
    },
    {
      id: 'associates-mentored',
      value: '5',
      label: 'Junior Associates Mentored',
      subtext: 'Accelerated team ramp-up on testing practices and module workflows',
      icon: <Users className="w-4 h-4 text-[#C5A059]" />,
      badge: 'Knowledge Sharing',
    },
    {
      id: 'client-handover',
      value: '100%',
      label: 'Client Handover Success',
      subtext: 'Delivered flawless end-to-end script runs during formal client acceptance',
      icon: <TrendingUp className="w-4 h-4 text-[#C5A059]" />,
      badge: 'Full Sign-Off',
    },
  ];

  return (
    <section id="snapshot" className="py-16 md:py-24 bg-[#0A0A0A] border-b border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-sans text-[10px] uppercase tracking-[0.35em] text-[#C5A059] font-medium px-3 py-1 rounded-sm bg-[#161410] border border-[#3E3420]">
            Professional Snapshot
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-white tracking-tight mt-3">
            Authoritative Career Metrics & Scale
          </h2>
          <div className="w-12 h-[1px] bg-[#C5A059] mx-auto my-3"></div>
          <p className="text-[#8C8C8C] text-sm sm:text-base">
            Every metric below is directly derived from my verified enterprise experience at Wipro.
          </p>
        </div>

        {/* 4x2 Grid of Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((m) => (
            <div
              key={m.id}
              className="p-5 rounded-sm bg-[#121212] border border-[#2A2A2A] hover:border-[#C5A059]/60 hover:bg-[#161616] transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-sm bg-[#161410] border border-[#3E3420]">
                    {m.icon}
                  </div>
                  {m.badge && (
                    <span className="text-[9px] font-sans uppercase tracking-[0.2em] px-2 py-0.5 rounded-sm bg-[#1A1813] text-[#C5A059] border border-[#3E3420]">
                      {m.badge}
                    </span>
                  )}
                </div>

                <div className="text-3xl sm:text-4xl font-light text-white font-serif tracking-tight group-hover:text-[#C5A059] transition-colors">
                  {m.value}
                </div>

                <div className="text-xs font-sans uppercase tracking-[0.15em] text-[#E0D8D0] mt-2 mb-1 font-medium">
                  {m.label}
                </div>
              </div>

              <p className="text-xs text-[#8C8C8C] leading-relaxed border-t border-[#1F1F1F] pt-3 mt-3">
                {m.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
