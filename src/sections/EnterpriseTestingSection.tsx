import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ENTERPRISE_DOMAINS } from '../data/enterprise';
import {
  ShieldCheck,
  CheckCircle2,
  Layers,
  ChevronRight,
  Database,
  Briefcase,
  GitMerge,
  Workflow,
  Server,
} from 'lucide-react';

export const EnterpriseTestingSection: React.FC = () => {
  const [activeDomainId, setActiveDomainId] = useState<string>(ENTERPRISE_DOMAINS[0].id);

  const activeDomain =
    ENTERPRISE_DOMAINS.find((d) => d.id === activeDomainId) || ENTERPRISE_DOMAINS[0];

  const domainIcons = {
    'sap-successfactors': <Workflow className="w-4 h-4 text-[#C5A059]" />,
    'sap-ariba': <Briefcase className="w-4 h-4 text-[#C5A059]" />,
    'sap-hcm': <Server className="w-4 h-4 text-[#C5A059]" />,
    salesforce: <Database className="w-4 h-4 text-[#C5A059]" />,
    telecom: <Layers className="w-4 h-4 text-[#C5A059]" />,
  };

  return (
    <section
      id="enterprise"
      className="py-20 md:py-28 bg-[#0D0D0D] border-b border-[#222222]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText="Enterprise Foundations"
          title="Enterprise Testing & Functional Mastery"
          subtitle="My professional core is grounded in mission-critical enterprise systems: orchestrating manual, functional, and automation test suites across SAP, Salesforce, and large-scale Telecom architectures."
          align="center"
        />

        {/* Enterprise Callout Banner */}
        <div className="mb-12 p-4 sm:p-5 rounded-sm bg-[#121212] border border-[#2A2A2A] text-xs sm:text-sm text-[#C0B8AE] flex items-center gap-3">
          <div className="p-2 rounded-sm bg-[#1A1813] border border-[#3E3420] text-[#C5A059] shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <span className="font-semibold text-white">The Enterprise Imperative:</span>{' '}
            AI and automation are only as effective as the engineering domain knowledge behind them. My background is rooted in the rigorous demands of enterprise ERP release cycles, complex business process matrices, and strict regulatory compliance.
          </div>
        </div>

        {/* Enterprise Tabs & Deep Dive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Navigation: Enterprise System Selectors */}
          <div className="lg:col-span-4 space-y-2.5">
            {ENTERPRISE_DOMAINS.map((domain) => {
              const isSelected = domain.id === activeDomainId;
              return (
                <button
                  key={domain.id}
                  onClick={() => setActiveDomainId(domain.id)}
                  className={`w-full p-4 rounded-sm text-left border transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#1A1813] border-[#C5A059] shadow-sm'
                      : 'bg-[#121212] border-[#222222] hover:bg-[#161616] hover:border-[#333333]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-sm ${
                        isSelected
                          ? 'bg-[#241F14] text-[#C5A059] border border-[#3E3420]'
                          : 'bg-[#181818] text-[#8C8C8C]'
                      }`}
                    >
                      {domainIcons[domain.id as keyof typeof domainIcons]}
                    </div>
                    <div>
                      <h4
                        className={`text-sm font-medium tracking-tight ${
                          isSelected ? 'text-white' : 'text-[#C0B8AE]'
                        }`}
                      >
                        {domain.title}
                      </h4>
                      <p className="text-[11px] font-mono text-[#8C8C8C]">
                        {domain.badge}
                      </p>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-[#C5A059] translate-x-1' : 'text-[#555555]'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Detailed View: Selected Enterprise System */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-sm bg-[#0C0C0C] border border-[#2A2A2A] shadow-xl flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-[#222222] pb-4 mb-6">
                <div>
                  <span className="text-xs font-mono text-[#C5A059] font-medium uppercase tracking-wider block mb-1">
                    {activeDomain.category}
                  </span>
                  <h3 className="text-2xl font-serif font-normal text-white tracking-tight">
                    {activeDomain.title} Testing Experience
                  </h3>
                </div>

                {activeDomain.metricHighlight && (
                  <span className="inline-flex items-center px-3 py-1 rounded-sm text-xs font-mono font-medium bg-[#1A1813] text-[#C5A059] border border-[#3E3420]">
                    {activeDomain.metricHighlight}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-[#C0B8AE] text-sm leading-relaxed mb-6">
                {activeDomain.description}
              </p>

              {/* Key Responsibilities & Concrete Work */}
              <div className="space-y-3 mb-6">
                <h4 className="text-xs font-sans uppercase tracking-wider text-[#8C8C8C] font-semibold">
                  Verified Engineering Responsibilities & Impact:
                </h4>
                <ul className="space-y-2.5">
                  {activeDomain.keyResponsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#D4CDC5]">
                      <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tech stack badge list */}
            <div className="pt-6 border-t border-[#222222] flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-[#8C8C8C] mr-2">
                Validated Tools & Focus:
              </span>
              {activeDomain.technologies.map((t, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs font-mono rounded-sm bg-[#141414] text-[#C0B8AE] border border-[#222222]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
