import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { PROFILE_DATA } from '../data/profile';
import { Mail, Phone, MapPin, Linkedin, Terminal, Send, Check, Copy, ExternalLink, MessageSquare } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [subject, setSubject] = useState('Senior SDET / AI Automation Opportunity');
  const [senderName, setSenderName] = useState('');
  const [message, setMessage] = useState(
    'Hi Jyotishka, I reviewed your engineering portfolio and would like to discuss an opportunity regarding enterprise test automation and AI engineering solutions.'
  );

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSendMail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PROFILE_DATA.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Hello Jyotishka,\n\n${message}\n\nBest regards,\n${senderName || '[Name]'}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-[#0A0A0A] border-b border-[#222222] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badgeText="Initiate Dialogue"
          title="Let's build something useful."
          subtitle="Whether you represent an enterprise engineering organization seeking a Senior SDET / Automation Consultant or are interested in AI-driven testing architectures, let's connect."
          align="center"
        />

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Details & Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 sm:p-7 rounded-sm bg-[#0C0C0C] border border-[#222222] space-y-5">
              <div className="space-y-1">
                <span className="text-xs font-mono text-[#C5A059] font-medium uppercase tracking-wider">
                  Direct Channels
                </span>
                <h3 className="text-xl font-serif font-normal text-white tracking-tight">
                  Reach Out Directly
                </h3>
              </div>

              {/* Email Block with Copy Button */}
              <div className="p-3.5 rounded-sm bg-[#121212] border border-[#222222] flex items-center justify-between">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2 rounded-sm bg-[#1A1813] border border-[#3E3420] text-[#C5A059] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] font-mono text-[#8C8C8C] block uppercase">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${PROFILE_DATA.email}`}
                      className="text-xs font-mono text-[#E0D8D0] hover:text-[#C5A059] font-medium truncate block transition-colors"
                    >
                      {PROFILE_DATA.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-sm bg-[#181818] hover:bg-[#222222] text-[#8C8C8C] hover:text-white transition-colors shrink-0 ml-2 cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? (
                    <Check className="w-3.5 h-3.5 text-[#C5A059]" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Phone Block */}
              <div className="p-3.5 rounded-sm bg-[#121212] border border-[#222222] flex items-center gap-3">
                <div className="p-2 rounded-sm bg-[#1A1813] border border-[#3E3420] text-[#C5A059] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#8C8C8C] block uppercase">
                    Phone Contact
                  </span>
                  <a
                    href={`tel:${PROFILE_DATA.phone}`}
                    className="text-xs font-mono text-[#E0D8D0] hover:text-[#C5A059] font-medium transition-colors"
                  >
                    {PROFILE_DATA.phone}
                  </a>
                </div>
              </div>

              {/* LinkedIn Block */}
              <a
                href={PROFILE_DATA.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-sm bg-[#121212] border border-[#222222] flex items-center justify-between hover:border-[#3E3420] transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-sm bg-[#1A1813] border border-[#3E3420] text-[#C5A059] shrink-0">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#8C8C8C] block uppercase">
                      Professional Profile
                    </span>
                    <span className="text-xs font-mono text-[#E0D8D0] group-hover:text-[#C5A059] font-medium transition-colors">
                      linkedin.com/in/jyotishka
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#666] group-hover:text-[#C5A059] transition-colors" />
              </a>

              {/* Location Block */}
              <div className="p-3.5 rounded-sm bg-[#121212] border border-[#222222] flex items-center gap-3">
                <div className="p-2 rounded-sm bg-[#181818] text-[#8C8C8C] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#8C8C8C] block uppercase">
                    Location
                  </span>
                  <span className="text-xs font-mono text-[#C0B8AE]">
                    {PROFILE_DATA.location}
                  </span>
                </div>
              </div>

              {/* GitHub Placeholder */}
              <div className="p-3.5 rounded-sm bg-[#121212]/50 border border-[#222222] flex items-center gap-3 text-[#8C8C8C]">
                <div className="p-2 rounded-sm bg-[#181818] text-[#666] shrink-0">
                  <Terminal className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono block uppercase text-[#666]">GitHub</span>
                  <span className="text-xs font-mono text-[#8C8C8C]">{PROFILE_DATA.github}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Interactive Email Composer (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-sm bg-[#0C0C0C] border border-[#222222] shadow-xl">
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare className="w-4 h-4 text-[#C5A059]" />
              <h3 className="text-base sm:text-lg font-serif font-normal text-white uppercase tracking-wider">
                Send Direct Message
              </h3>
            </div>

            <form onSubmit={handleSendMail} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-[#8C8C8C] mb-1.5">
                  Your Name / Organization
                </label>
                <input
                  type="text"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="e.g. Alex Morgan, VP of Engineering"
                  className="w-full px-3.5 py-2.5 rounded-sm bg-[#141414] border border-[#222222] text-xs sm:text-sm text-[#E0D8D0] placeholder-[#555] focus:outline-none focus:border-[#C5A059] transition-colors font-sans"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#8C8C8C] mb-1.5">
                  Discussion Subject
                </label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-sm bg-[#141414] border border-[#222222] text-xs sm:text-sm text-[#E0D8D0] focus:outline-none focus:border-[#C5A059] transition-colors font-sans cursor-pointer"
                >
                  <option value="Senior SDET / Automation Consultant Role" className="bg-[#141414] text-[#E0D8D0]">
                    Senior SDET / Automation Consultant Role
                  </option>
                  <option value="AI-Driven Test Automation Strategy" className="bg-[#141414] text-[#E0D8D0]">
                    AI-Driven Test Automation Strategy
                  </option>
                  <option value="Enterprise SAP / Telecom Testing Consultation" className="bg-[#141414] text-[#E0D8D0]">
                    Enterprise SAP / Telecom Testing Consultation
                  </option>
                  <option value="Technical Collaboration / General Inquiry" className="bg-[#141414] text-[#E0D8D0]">
                    Technical Collaboration / General Inquiry
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-[#8C8C8C] mb-1.5">
                  Message Content
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-sm bg-[#141414] border border-[#222222] text-xs sm:text-sm text-[#E0D8D0] placeholder-[#555] focus:outline-none focus:border-[#C5A059] transition-colors font-sans resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-[11px] font-mono text-[#666]">
                  Opens default email client with formatted message
                </span>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-sm bg-[#C5A059] hover:bg-[#D4AF37] text-black font-sans uppercase tracking-wider text-xs font-semibold transition-all shadow-md cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Launch Mail Client</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
