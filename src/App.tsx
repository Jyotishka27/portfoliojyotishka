import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ProjectModal } from './components/ProjectModal';
import { ArticleModal } from './components/ArticleModal';
import { CapabilityModal } from './components/CapabilityModal';
import { EnterpriseDomainModal } from './components/EnterpriseDomainModal';

import { HeroSection } from './sections/HeroSection';
import { SnapshotSection } from './sections/SnapshotSection';
import { WhatIDoSection } from './sections/WhatIDoSection';
import { FeaturedProjectsSection } from './sections/FeaturedProjectsSection';
import { EnterpriseTestingSection } from './sections/EnterpriseTestingSection';
import { TestingExpertiseSection } from './sections/TestingExpertiseSection';
import { EngineeringPhilosophySection } from './sections/EngineeringPhilosophySection';
import { EngineeringJourneySection } from './sections/EngineeringJourneySection';
import { ExperienceSection } from './sections/ExperienceSection';
import { AchievementsSection } from './sections/AchievementsSection';
import { TechnicalSkillsSection } from './sections/TechnicalSkillsSection';
import { CertificationsEducationSection } from './sections/CertificationsEducationSection';
import { EngineeringNotesSection } from './sections/EngineeringNotesSection';
import { ContactSection } from './sections/ContactSection';

import { ProjectCaseStudy, ArticleItem, CapabilityArea, EnterpriseDomain } from './types';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);
  const [selectedCapability, setSelectedCapability] = useState<CapabilityArea | null>(null);
  const [selectedDomain, setSelectedDomain] = useState<EnterpriseDomain | null>(null);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E0D8D0] selection:bg-[#C5A059]/30 selection:text-[#FFF8EC] antialiased font-sans">
      {/* Fixed Sticky Header Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* 1. Hero Section */}
        <HeroSection onOpenResume={() => setIsResumeOpen(true)} />

        {/* 2. Professional Snapshot Metrics (Progressive context on click) */}
        <SnapshotSection />

        {/* 3. What I Do (5 Capability Cards with modal exploration) */}
        <WhatIDoSection onSelectCapability={(cap) => setSelectedCapability(cap)} />

        {/* 4. Featured Projects (Case Studies & Interactive Simulators) */}
        <FeaturedProjectsSection
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* 5. Enterprise Testing Experience (SAP, Salesforce, Telecom with domain modals) */}
        <EnterpriseTestingSection
          onSelectDomain={(domain) => setSelectedDomain(domain)}
        />

        {/* 6. Testing Expertise & The Layered Testing Pyramid */}
        <TestingExpertiseSection />

        {/* 7. Engineering Philosophy & Principles */}
        <EngineeringPhilosophySection />

        {/* 8. Engineering Journey (Visual Career Timeline) */}
        <EngineeringJourneySection />

        {/* 9. Professional Experience (Wipro Progression with progressive disclosure) */}
        <ExperienceSection />

        {/* 10. Key Achievements (Compact cards with context reveal) */}
        <AchievementsSection />

        {/* 11. Technical Skills Matrix (Category groups with Show All toggle) */}
        <TechnicalSkillsSection />

        {/* 12. Certifications, Education & Languages */}
        <CertificationsEducationSection />

        {/* 13. Engineering Notes & Architecture Insights */}
        <EngineeringNotesSection
          onSelectArticle={(article) => setSelectedArticle(article)}
        />

        {/* 14. Contact Section */}
        <ContactSection onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Modals & Detail Drawers */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <CapabilityModal
        capability={selectedCapability}
        onClose={() => setSelectedCapability(null)}
      />

      <EnterpriseDomainModal
        domain={selectedDomain}
        onClose={() => setSelectedDomain(null)}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </div>
  );
}
