import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ChevronDown, ChevronUp, Bot, Cpu, Briefcase, ShieldCheck, Code2 } from 'lucide-react';

export const TechnicalSkillsSection: React.FC = () => {
  const [showAllSkills, setShowAllSkills] = useState(false);

  const categorizedSkills = [
    {
      id: 'ai-tools',
      title: 'AI & Testing Tools',
      icon: <Bot className="w-4 h-4 text-[#C5A059]" />,
      description: 'Local LLM orchestration, agentic pipelines, and automated test synthesis',
      primarySkills: [
        'LLM Implementation',
        'Ollama (Local LLM)',
        'AI Agents',
        'AI-Driven Test Generation',
        'AI Code Review & Smell Analysis',
        'Prompt Engineering',
      ],
      extraSkills: [
        'Autonomous RTM Generation',
        'Multi-Language AST Analysis',
        'Agentic Incident Diagnostics',
      ],
    },
    {
      id: 'automation-frameworks',
      title: 'Automation & Frameworks',
      icon: <Cpu className="w-4 h-4 text-[#C5A059]" />,
      description: 'Enterprise and modern test automation design, execution, and reporting',
      primarySkills: [
        'Tricentis Tosca',
        'Playwright',
        'Page Object Model (POM)',
        'Tosca DI (Data Integrity)',
        'Distributed Execution (DEX)',
        'qTest Integration',
      ],
      extraSkills: [
        'Reusable Script Development',
        'Regression Pack Maintenance',
        'NeoLoad',
      ],
    },
    {
      id: 'enterprise-apps',
      title: 'Enterprise Applications',
      icon: <Briefcase className="w-4 h-4 text-[#C5A059]" />,
      description: 'Mission-critical enterprise software suites and business workflows',
      primarySkills: [
        'SAP SuccessFactors Testing',
        'SAP Ariba Testing',
        'SAP HCM Testing',
        'Salesforce Testing',
        'Telecom (Prepaid & Postpaid)',
        'SAP FIORI UI Validation',
      ],
      extraSkills: [
        'Service Request (SR) Workflows',
        'HRSP Summer/Winter Releases',
      ],
    },
    {
      id: 'testing-disciplines',
      title: 'Testing Disciplines',
      icon: <ShieldCheck className="w-4 h-4 text-[#C5A059]" />,
      description: 'End-to-end quality assurance and defect lifecycle governance',
      primarySkills: [
        'Functional Testing',
        'Manual Testing',
        'System Integration Testing (SIT)',
        'User Acceptance Testing (UAT)',
        'Regression Testing',
        'API & Backend Validation',
      ],
      extraSkills: [
        'Defect Lifecycle Management',
        'Performance Test Execution',
        'Audit & Traceability',
      ],
    },
    {
      id: 'programming-scripting',
      title: 'Programming & Scripting',
      icon: <Code2 className="w-4 h-4 text-[#C5A059]" />,
      description: 'Core languages and data formats for automation tools and backend testing',
      primarySkills: [
        'Python',
        'TypeScript',
        'JavaScript',
        'JSON Data Architecture',
        'SQL / PostgreSQL',
      ],
      extraSkills: [
        'HTML5 / CSS3',
        'Bash / Shell Scripting',
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-16 md:py-24 bg-[#0D0D0D] border-b border-[#222222]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText="Stack & Toolkit"
          title="Technical Skills & Competencies"
          subtitle="Honest, production-tested proficiencies across enterprise ERP suites, modern automation frameworks, and local AI agent tooling."
          align="center"
        />

        {/* 5 Core Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categorizedSkills.map((group) => {
            const displayedSkills = showAllSkills
              ? [...group.primarySkills, ...group.extraSkills]
              : group.primarySkills;

            return (
              <div
                key={group.id}
                className="p-6 rounded-sm bg-[#0C0C0C] border border-[#222222] hover:border-[#3E3420] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div className="p-1.5 rounded-sm bg-[#161410] border border-[#3E3420]">
                      {group.icon}
                    </div>
                    <h3 className="text-base font-serif font-normal text-white tracking-tight">
                      {group.title}
                    </h3>
                  </div>

                  <p className="text-xs text-[#8C8C8C] mb-4 leading-relaxed font-light">
                    {group.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {displayedSkills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 text-xs font-mono rounded-sm bg-[#141414] text-[#C0B8AE] border border-[#222222] hover:border-[#C5A059] hover:text-white transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                    {!showAllSkills && group.extraSkills.length > 0 && (
                      <span className="px-2 py-1 text-[10px] font-mono rounded-sm bg-[#111] text-[#666]">
                        +{group.extraSkills.length} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-[#1F1F1F] flex items-center justify-between text-[11px] font-mono text-[#666]">
                  <span>{displayedSkills.length} Skills Shown</span>
                  <span className="text-[#C5A059]">Verified in Production</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Show All Skills Toggle Button */}
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAllSkills(!showAllSkills)}
            className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-mono uppercase tracking-wider rounded-sm bg-[#161410] text-[#C5A059] border border-[#3E3420] hover:bg-[#C5A059] hover:text-black transition-all cursor-pointer shadow-sm"
          >
            {showAllSkills ? (
              <>
                <span>Show Essential Skills (5–6 per category)</span>
                <ChevronUp className="w-3.5 h-3.5" />
              </>
            ) : (
              <>
                <span>Show All Skills & Extended Tooling</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};
