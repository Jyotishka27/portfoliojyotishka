import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ENTERPRISE_DOMAINS } from '../data/enterprise';
import { EnterpriseDomain } from '../types';
import { ShieldCheck, ArrowRight, Workflow, Briefcase, Server, Database, Layers } from 'lucide-react';

interface EnterpriseTestingSectionProps {
  onSelectDomain: (domain: EnterpriseDomain) => void;
}

export const EnterpriseTestingSection: React.FC<EnterpriseTestingSectionProps> = ({ onSelectDomain }) => {
  const domainIcons: Record<string, React.ReactNode> = {
    'sap-successfactors': <Workflow className="w-5 h-5 text-[#C5A059]" />,
    'sap-ariba': <Briefcase className="w-5 h-5 text-[#C5A059]" />,
    'sap-hcm': <Server className="w-5 h-5 text-[#C5A059]" />,
    salesforce: <Database className="w-5 h-5 text-[#C5A059]" />,
    telecom: <Layers className="w-5 h-5 text-[#C5A059]" />,
  };

  const domainSummaries: Record<string, { sentence: string; metricTag: string; capabilities: string }> = {
    'sap-successfactors': {
      sentence: 'Deep employee lifecycle and talent cloud functional validation.',
      metricTag: '25+ business processes analyzed',
      capabilities: 'Manual Testing · Functional · SIT · UAT · Tosca',
    },
    'sap-ariba': {
      sentence: 'Enterprise procurement requisition and contract compliance testing.',
      metricTag: 'Procurement Workflow Validation',
      capabilities: 'Functional Testing · Approval Chains · Tosca',
    },
    'sap-hcm': {
      sentence: 'Core HR payroll administration and responsive FIORI UI testing.',
      metricTag: 'HRSP Summer & Winter Releases',
      capabilities: 'Manual QA · FIORI Validation · Defect Triage',
    },
    salesforce: {
      sentence: 'Mission-critical CRM workflow and bidirectional data integrity testing.',
      metricTag: 'Cross-system CRM Integration',
      capabilities: 'Manual Testing · Functional · Field Validations',
    },
    telecom: {
      sentence: 'High-volume prepaid, postpaid, and Service Request (SR) test coverage.',
      metricTag: '450+ scripts across 4 apps',
      capabilities: 'Regression · 100+ Defects Managed · E2E Handover',
    },
  };

  return (
    <section id="enterprise" className="py-16 md:py-24 bg-[#0A0A0A] border-b border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText="Enterprise Foundations"
          title="Enterprise Testing & Functional Mastery"
          subtitle="7+ years across enterprise applications and automation. Manual + Functional + Integration + Automation."
          align="center"
        />

        {/* Compact Domain Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ENTERPRISE_DOMAINS.map((domain) => {
            const summary = domainSummaries[domain.id] || {
              sentence: domain.description,
              metricTag: domain.badge,
              capabilities: 'Manual & Functional QA',
            };

            return (
              <div
                key={domain.id}
                className="p-6 rounded-sm bg-[#111111] border border-[#242424] hover:border-[#C5A059]/60 hover:bg-[#141414] transition-all flex flex-col justify-between group shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-sm bg-[#161410] border border-[#3E3420]">
                      {domainIcons[domain.id] || <ShieldCheck className="w-5 h-5 text-[#C5A059]" />}
                    </div>
                    <span className="text-[10px] font-mono text-[#8C8C8C] bg-[#161616] px-2 py-0.5 rounded-sm border border-[#242424]">
                      {summary.metricTag}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-normal text-white group-hover:text-[#C5A059] transition-colors">
                    {domain.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A8A8A8] font-light leading-relaxed my-2.5">
                    {summary.sentence}
                  </p>

                  <div className="p-2.5 rounded-sm bg-[#161616] border border-[#222222] text-[11px] font-mono text-[#C5A059] mb-4">
                    {summary.capabilities}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#1E1E1E]">
                  <button
                    onClick={() => onSelectDomain(domain)}
                    className="w-full inline-flex items-center justify-between text-xs font-sans uppercase tracking-wider font-semibold text-[#C5A059] group-hover:text-white transition-colors cursor-pointer py-1"
                  >
                    <span>Explore Domain</span>
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
