import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { CERTIFICATIONS, EDUCATION, INDUSTRIAL_TRAINING, SPOKEN_LANGUAGES } from '../data/certifications';
import { Award, GraduationCap, ShieldCheck, Globe, CheckCircle2 } from 'lucide-react';

export const CertificationsEducationSection: React.FC = () => {
  return (
    <section
      id="certifications"
      className="py-16 md:py-24 bg-[#0A0A0A] border-b border-[#222222]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText="Credentials"
          title="Certifications & Education"
          subtitle="Official Tricentis enterprise certifications, computer science academic degrees, and professional linguistic proficiencies."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Compact Certifications Grid (7 cols) */}
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center justify-between mb-3 border-b border-[#222222] pb-2">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#C5A059]" />
                <h3 className="text-xs font-mono font-medium text-white uppercase tracking-wider">
                  Enterprise Certifications ({CERTIFICATIONS.length})
                </h3>
              </div>
              <span className="text-[10px] font-mono text-[#8C8C8C]">Tricentis Verified</span>
            </div>

            {/* Compact Card Grid / List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CERTIFICATIONS.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-sm bg-[#0E0E0E] border border-[#222222] hover:border-[#3E3420] transition-colors flex items-start gap-3"
                >
                  <div className="p-1.5 rounded-sm bg-[#161410] border border-[#3E3420] shrink-0 mt-0.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs font-serif font-normal text-white truncate leading-snug">
                      {cert.name}
                    </h4>
                    <p className="text-[11px] font-mono text-[#C5A059] mt-0.5">
                      {cert.issuer} · Certified
                    </p>
                    <p className="text-[10px] font-mono text-[#777] truncate mt-0.5">
                      {cert.type}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Education & Spoken Languages (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Education */}
            <div className="p-5 rounded-sm bg-[#0E0E0E] border border-[#222222] space-y-3">
              <div className="flex items-center gap-2 border-b border-[#1F1F1F] pb-2">
                <GraduationCap className="w-4 h-4 text-[#C5A059]" />
                <h3 className="text-xs font-mono font-medium text-white uppercase tracking-wider">
                  Academic Degree
                </h3>
              </div>

              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif text-white text-sm font-normal">
                      {edu.degree}
                    </h4>
                    <span className="font-mono text-[11px] text-[#C5A059] bg-[#161410] px-2 py-0.5 rounded-sm border border-[#3E3420]">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-xs text-[#C0B8AE] font-mono">
                    Field: {edu.field}
                  </p>
                  <p className="text-xs text-[#8C8C8C]">
                    {edu.institution}
                  </p>
                  <p className="text-[10px] font-mono text-[#666]">
                    {edu.university}
                  </p>
                </div>
              ))}
            </div>

            {/* Industrial Training & Spoken Languages Compact Bar */}
            <div className="p-4 rounded-sm bg-[#0E0E0E] border border-[#222222] space-y-2.5">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#8C8C8C]">Industrial Training:</span>
                <span className="text-white">ARDENT · Android App Dev (2018)</span>
              </div>
              <div className="pt-2 border-t border-[#1F1F1F] flex items-center justify-between text-xs font-mono">
                <span className="text-[#8C8C8C]">Languages:</span>
                <span className="text-[#C5A059]">English · Hindi · Bengali</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
