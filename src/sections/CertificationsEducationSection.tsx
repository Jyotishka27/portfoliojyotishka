import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { CERTIFICATIONS, EDUCATION, INDUSTRIAL_TRAINING, SPOKEN_LANGUAGES } from '../data/certifications';
import { Award, GraduationCap, Smartphone, Globe, CheckCircle2, ShieldCheck } from 'lucide-react';

export const CertificationsEducationSection: React.FC = () => {
  return (
    <section
      id="certifications"
      className="py-20 md:py-28 bg-[#0A0A0A] border-b border-[#222222]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText="Credentials"
          title="Certifications & Education"
          subtitle="Official Tricentis enterprise certifications, computer science academic degrees, and professional linguistic proficiencies."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Tricentis Certifications (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-4 h-4 text-[#C5A059]" />
              <h3 className="text-base font-serif font-normal text-white uppercase tracking-wider">
                Tricentis Enterprise Certifications
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {CERTIFICATIONS.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-sm bg-[#0C0C0C] border border-[#222222] hover:border-[#3E3420] transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono font-medium text-[#C5A059] bg-[#1A1813] px-2 py-0.5 rounded-sm border border-[#3E3420]">
                        {cert.issuer}
                      </span>
                      <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                    </div>

                    <h4 className="text-xs sm:text-sm font-serif font-normal text-[#E0D8D0] group-hover:text-white transition-colors leading-snug">
                      {cert.name}
                    </h4>
                  </div>

                  <p className="text-[11px] font-mono text-[#8C8C8C] mt-2 border-t border-[#1F1F1F] pt-2">
                    Domain: {cert.type}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Education, Training & Languages (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Education */}
            <div className="p-6 rounded-sm bg-[#0C0C0C] border border-[#222222] space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <GraduationCap className="w-4 h-4 text-[#C5A059]" />
                <h3 className="text-base font-serif font-normal text-white uppercase tracking-wider">
                  Academic Education
                </h3>
              </div>

              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="space-y-1 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-white text-sm">
                      {edu.degree}
                    </span>
                    <span className="font-mono text-[#C5A059]">{edu.period}</span>
                  </div>
                  <p className="text-[#C0B8AE] font-mono font-medium text-xs">
                    Major: {edu.field}
                  </p>
                  <p className="text-[#8C8C8C] font-normal">
                    {edu.institution}
                  </p>
                  <p className="text-[#666] text-[11px]">
                    {edu.university}
                  </p>
                </div>
              ))}
            </div>

            {/* Industrial Training */}
            <div className="p-6 rounded-sm bg-[#0C0C0C] border border-[#222222] space-y-3">
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-[#C5A059]" />
                <h3 className="text-base font-serif font-normal text-white uppercase tracking-wider">
                  Industrial Training
                </h3>
              </div>

              {INDUSTRIAL_TRAINING.map((tr, idx) => (
                <div key={idx} className="space-y-1 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-white">{tr.title}</span>
                    <span className="font-mono text-[#8C8C8C]">{tr.year}</span>
                  </div>
                  <p className="text-[#C0B8AE]">Organization: {tr.organization}</p>
                  <p className="text-[11px] text-[#8C8C8C]">{tr.focus}</p>
                </div>
              ))}
            </div>

            {/* Spoken Languages */}
            <div className="p-6 rounded-sm bg-[#0C0C0C] border border-[#222222] space-y-3">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#C5A059]" />
                <h3 className="text-base font-serif font-normal text-white uppercase tracking-wider">
                  Languages
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                {SPOKEN_LANGUAGES.map((lang, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-sm bg-[#141414] border border-[#222222]"
                  >
                    <span className="font-medium text-[#E0D8D0] block">
                      {lang.language}
                    </span>
                    <span className="text-[10px] text-[#8C8C8C] font-mono">
                      {lang.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
