import React, { useEffect, useState } from 'react';
import { X, Printer, Copy, Check, Download, ExternalLink, Mail, Phone, MapPin, Linkedin, Award, Briefcase, GraduationCap, Cpu, Layers } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';
import { WORK_EXPERIENCE } from '../data/experience';
import { CERTIFICATIONS, EDUCATION, INDUSTRIAL_TRAINING, SPOKEN_LANGUAGES } from '../data/certifications';
import { KEY_ACHIEVEMENTS } from '../data/achievements';
import { SKILL_CATEGORIES } from '../data/skills';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyText = () => {
    const resumeText = `
JYOTISHKA MUKHOPADHYAY
Senior Associate Consultant - Automation | SDET & AI Engineering
Email: ${PROFILE_DATA.email} | Phone: ${PROFILE_DATA.phone}
LinkedIn: ${PROFILE_DATA.linkedin} | Location: ${PROFILE_DATA.location}

SUMMARY:
${PROFILE_DATA.summary}

WORK EXPERIENCE:
WIPRO (Jun 2019 – Present)
${WORK_EXPERIENCE.map(
  (exp) => `
• ${exp.role.toUpperCase()} (${exp.period})
${exp.highlights
  .map((h) => `  - ${h.category}: ${h.points.join(' ')}`)
  .join('\n')}`
).join('\n')}

SPECIAL PROJECTS:
• AI Test Architect (Agentic Workflow)
  - Architected and developed a local AI-driven testing solution using Python, Ollama, and AI Agents to convert screenshots and functional descriptions into Requirements, Test Scenarios, RTMs, and Playwright scripts.
  - Developed the prototype independently and presented it to management for potential client adoption.
• Multi-Language AI Code Analyzer
  - Architected and developed a local web application using Ollama and LLMs to analyze 5+ programming languages for code quality, code smells, and architectural improvements.
  - Built prototype with privacy-focused local processing and presented to management.

KEY ACHIEVEMENTS:
• Accelerated script development: Single-handedly completed a project delayed for 4+ months within 3 months, resolving critical delays and contributing to on-time completion.
• 100% successful client handover: Executed end-to-end scripts with a 100% success rate, supported by detailed reporting and follow-up Knowledge Transfer (KT).
• 2.5x increase in script assignments: Managed script development/execution processes, driving revenue growth and organizing the 1st UAT Execution Event.

CERTIFICATIONS:
${CERTIFICATIONS.map((c) => `• ${c.name} (${c.issuer})`).join('\n')}

EDUCATION:
• Bachelor of Technology (BTech), Computer Science
  Future Institute of Technology, Maulana Abul Kalam Azad University of Technology (Jun 2015 – May 2019)
    `;

    navigator.clipboard.writeText(resumeText.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="resume-modal-container"
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0C0C0C] border border-[#222222] rounded-sm shadow-2xl flex flex-col overflow-hidden text-[#E0D8D0]"
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#222222] bg-[#0D0D0D]">
          <div className="flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-[#C5A059]"></div>
            <h3 className="text-sm sm:text-base font-serif font-normal text-white">
              Resume — {PROFILE_DATA.name}
            </h3>
            <span className="text-xs font-mono px-2 py-0.5 rounded-sm bg-[#181818] border border-[#222222] text-[#8C8C8C] hidden sm:inline-block">
              CV Source of Truth
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-sm bg-[#141414] hover:bg-[#1C1C1C] text-[#E0D8D0] border border-[#282828] transition-colors cursor-pointer"
              title="Copy formatted resume text"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#C5A059]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy Text'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-sm bg-[#C5A059] hover:bg-[#D4AF37] text-black font-semibold transition-colors cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-sm text-[#8C8C8C] hover:text-white hover:bg-[#1A1A1A] transition-colors ml-1 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Resume Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 print:p-0 print:overflow-visible">
          {/* Header */}
          <div className="border-b border-[#222222] pb-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-serif font-normal text-white tracking-tight">
                  {PROFILE_DATA.name}
                </h1>
                <p className="text-sm sm:text-base font-mono text-[#C5A059] font-medium mt-1">
                  SENIOR ASSOCIATE CONSULTANT - AUTOMATION
                </p>
                <p className="text-xs text-[#8C8C8C] mt-1">
                  SDET | Enterprise Automation (Tosca / Playwright) | AI-Driven Testing
                </p>
              </div>

              {/* Contact Pill Box */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-[#C0B8AE] bg-[#121212] p-3 rounded-sm border border-[#222222]">
                <a href={`mailto:${PROFILE_DATA.email}`} className="flex items-center gap-2 hover:text-[#C5A059] transition-colors">
                  <Mail className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                  <span className="truncate">{PROFILE_DATA.email}</span>
                </a>
                <a href={`tel:${PROFILE_DATA.phone}`} className="flex items-center gap-2 hover:text-[#C5A059] transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                  <span>{PROFILE_DATA.phone}</span>
                </a>
                <a
                  href={PROFILE_DATA.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-[#C5A059] col-span-1 sm:col-span-2 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                  <span className="truncate">linkedin.com/in/jyotishka</span>
                  <ExternalLink className="w-3 h-3 ml-auto opacity-60" />
                </a>
                <div className="flex items-center gap-2 text-[#8C8C8C] col-span-1 sm:col-span-2">
                  <MapPin className="w-3.5 h-3.5 text-[#666] shrink-0" />
                  <span>{PROFILE_DATA.location}</span>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="mt-5 p-4 rounded-sm bg-[#141414] border border-[#222222] text-[#C0B8AE] text-xs sm:text-sm leading-relaxed">
              <p>{PROFILE_DATA.summary}</p>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="w-4 h-4 text-[#C5A059]" />
              <h2 className="text-base sm:text-lg font-serif font-normal text-white uppercase tracking-wider">
                Work Experience
              </h2>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between pb-1 border-b border-[#222222] text-xs font-mono text-[#C5A059] font-medium">
                <span>WIPRO</span>
                <span>JUN 2019 – PRESENT (Full-time · Hybrid)</span>
              </div>

              {WORK_EXPERIENCE.map((job) => (
                <div key={job.id} className="pl-3 sm:pl-4 border-l-2 border-[#2A2A2A] space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-sm font-serif font-normal text-white">{job.role}</h3>
                    <span className="text-xs font-mono text-[#8C8C8C]">{job.period}</span>
                  </div>

                  <ul className="space-y-1.5 text-xs text-[#C0B8AE] list-disc list-outside pl-4 leading-relaxed">
                    {job.highlights.map((h, idx) => (
                      <li key={idx}>
                        <span className="font-medium text-white">{h.category}:</span>{' '}
                        {h.points.join(' ')}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Special Projects */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Cpu className="w-4 h-4 text-[#C5A059]" />
              <h2 className="text-base sm:text-lg font-serif font-normal text-white uppercase tracking-wider">
                Special Projects (CV Authoritative)
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-sm bg-[#121212] border border-[#222222] space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-serif text-white">AI Test Architect</h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-sm bg-[#1A1813] text-[#C5A059] border border-[#3E3420]">
                    Agentic Workflow
                  </span>
                </div>
                <p className="text-xs text-[#C0B8AE] leading-relaxed">
                  Architected and developed a local AI-driven testing solution using Python, Ollama, and AI Agents to convert screenshots and functional descriptions into Requirements, Test Scenarios, RTMs, and Playwright scripts.
                </p>
                <p className="text-[11px] text-[#8C8C8C] italic">
                  Developed the prototype independently and presented it to management for potential client adoption.
                </p>
              </div>

              <div className="p-4 rounded-sm bg-[#121212] border border-[#222222] space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-serif text-white">Multi-Language AI Code Analyzer</h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-sm bg-[#1A1813] text-[#C5A059] border border-[#3E3420]">
                    Ollama & LLMs
                  </span>
                </div>
                <p className="text-xs text-[#C0B8AE] leading-relaxed">
                  Architected and developed a local web application using Ollama and LLMs to analyze 5+ programming languages for code quality, code smells, and architectural improvements.
                </p>
                <p className="text-[11px] text-[#8C8C8C] italic">
                  Built the prototype with privacy-focused local processing and presented to management for potential client application.
                </p>
              </div>
            </div>
          </div>

          {/* Key Achievements */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-4 h-4 text-[#C5A059]" />
              <h2 className="text-base sm:text-lg font-serif font-normal text-white uppercase tracking-wider">
                Key Achievements
              </h2>
            </div>
            <ul className="space-y-2.5 text-xs text-[#C0B8AE] list-disc list-outside pl-4 leading-relaxed">
              <li>
                <strong className="text-white">Accelerated script development:</strong> Single-handedly completed a project delayed for 4+ months within 3 months, resolving critical delays and contributing to on-time completion.
              </li>
              <li>
                <strong className="text-white">100% successful client handover:</strong> Executed end-to-end scripts with a 100% success rate, supported by detailed reporting and follow-up Knowledge Transfer (KT) on script compilation and modification.
              </li>
              <li>
                <strong className="text-white">2.5x increase in script assignments:</strong> Effectively managed script development and execution processes, contributing to increased assignments and subsequent company revenue growth; also organized the 1st UAT Execution Event, coordinating JIRA-based defect tracking and supporting UAT testers through resolution.
              </li>
            </ul>
          </div>

          {/* Key Skills */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Layers className="w-4 h-4 text-[#C5A059]" />
              <h2 className="text-base sm:text-lg font-serif font-normal text-white uppercase tracking-wider">
                Key Skills (From CV)
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-3 rounded-sm bg-[#121212] border border-[#222222]">
                <span className="font-mono text-[#C5A059] font-medium block mb-2">Technical Skills (Tools)</span>
                <ul className="space-y-1 text-[#C0B8AE]">
                  <li>• TOSCA Automation & TOSCA DI</li>
                  <li>• NeoLoad & qTest</li>
                  <li>• SAP SuccessFactors Testing</li>
                  <li>• SAP Ariba & SAP HCM Testing</li>
                  <li>• Salesforce Testing</li>
                  <li>• Script Development & Performance</li>
                  <li>• Python & JIRA</li>
                </ul>
              </div>

              <div className="p-3 rounded-sm bg-[#121212] border border-[#222222]">
                <span className="font-mono text-[#C5A059] font-medium block mb-2">AI & Gen-AI</span>
                <ul className="space-y-1 text-[#C0B8AE]">
                  <li>• LLM Implementation</li>
                  <li>• Big Agents & Smol Agents</li>
                  <li>• Ollama (Local LLM Deployments)</li>
                  <li>• Prompt Engineering</li>
                  <li>• AI-Driven Test Generation</li>
                  <li>• Multi-Language Code Analysis</li>
                </ul>
              </div>

              <div className="p-3 rounded-sm bg-[#121212] border border-[#222222]">
                <span className="font-mono text-[#C5A059] font-medium block mb-2">Methodologies & Leadership</span>
                <ul className="space-y-1 text-[#C0B8AE]">
                  <li>• Agile (SAFe) Methodologies</li>
                  <li>• Quality Control & Problem Solving</li>
                  <li>• Training and Mentoring (5 Junior Associates)</li>
                  <li>• Contextual Inquiry & Presentation</li>
                  <li>• Conflict Management & Decision Making</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Certifications & Education & Languages */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-[#222222] text-xs">
            <div>
              <span className="font-mono text-[#C5A059] font-medium block mb-2">Certifications</span>
              <ul className="space-y-1 text-[#C0B8AE]">
                {CERTIFICATIONS.map((c, i) => (
                  <li key={i}>• {c.name}</li>
                ))}
              </ul>
            </div>

            <div>
              <span className="font-mono text-[#C5A059] font-medium block mb-2">Education</span>
              <p className="font-serif text-white">BTech, Computer Science</p>
              <p className="text-[#8C8C8C]">Future Institute of Technology</p>
              <p className="text-[#666] text-[11px]">Maulana Abul Kalam Azad University of Tech</p>
              <p className="text-[#8C8C8C] text-[11px] mt-1">Jun 2015 – May 2019</p>

              <div className="mt-3">
                <span className="font-mono text-[#C5A059] font-medium block mb-1">Industrial Training</span>
                <p className="text-[#C0B8AE]">Android Application Development</p>
                <p className="text-[#666] text-[11px]">ARDENT | 2018</p>
              </div>
            </div>

            <div>
              <span className="font-mono text-[#C5A059] font-medium block mb-2">Languages</span>
              <ul className="space-y-1.5 text-[#C0B8AE]">
                {SPOKEN_LANGUAGES.map((l, i) => (
                  <li key={i} className="flex justify-between">
                    <span className="font-medium text-white">{l.language}:</span>
                    <span className="text-[#8C8C8C]">{l.proficiency}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
