import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { TESTING_PYRAMID_LAYERS } from '../data/pyramid';
import { Sparkles, Terminal, CheckCircle2, ChevronRight, Layers, ArrowUp } from 'lucide-react';

export const TestingExpertiseSection: React.FC = () => {
  const [selectedLayerLevel, setSelectedLayerLevel] = useState<number>(6); // Top level by default

  const selectedLayer =
    TESTING_PYRAMID_LAYERS.find((l) => l.level === selectedLayerLevel) ||
    TESTING_PYRAMID_LAYERS[0];

  return (
    <section
      id="testing-expertise"
      className="py-20 md:py-28 bg-[#0A0A0A] border-b border-[#222222]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText="Testing Philosophy"
          title="Testing Expertise & The Layered Pyramid"
          subtitle="True QA mastery is understanding testing beyond simply writing automation scripts: knowing what to test, where to test it, and how to validate it with maximum return on investment."
          align="center"
        />

        {/* Core Manifesto Card */}
        <div className="max-w-4xl mx-auto mb-14 p-6 sm:p-8 rounded-sm bg-[#121212] border border-[#2A2A2A] text-center shadow-lg">
          <p className="text-base sm:text-lg md:text-xl font-serif italic text-[#E0D8D0] tracking-tight leading-relaxed">
            &ldquo;Automation is one part of testing. The real value comes from knowing what to test, where to test it, and how to validate it effectively.&rdquo;
          </p>
          <span className="inline-block mt-3 text-xs font-sans uppercase tracking-widest text-[#C5A059] font-medium">
            — Jyotishka Mukhopadhyay, Senior Automation Consultant
          </span>
        </div>

        {/* Interactive Pyramid Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Visual Stepped Pyramid */}
          <div className="lg:col-span-6 flex flex-col items-center space-y-2.5">
            <div className="flex items-center gap-2 text-xs font-mono text-[#8C8C8C] mb-2">
              <ArrowUp className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Higher Leverage / Lower Run Frequency</span>
            </div>

            {/* Pyramid Layers rendered top to bottom (Level 6 down to 1) */}
            {TESTING_PYRAMID_LAYERS.map((layer) => {
              const isSelected = layer.level === selectedLayerLevel;
              const widthClasses = [
                'w-full max-w-[100%]', // level 1
                'w-[92%] max-w-[92%]',  // level 2
                'w-[84%] max-w-[84%]',  // level 3
                'w-[74%] max-w-[74%]',  // level 4
                'w-[64%] max-w-[64%]',  // level 5
                'w-[54%] max-w-[54%]',  // level 6
              ];
              const widthClass = widthClasses[layer.level - 1];

              return (
                <button
                  key={layer.level}
                  onClick={() => setSelectedLayerLevel(layer.level)}
                  className={`${widthClass} py-3 sm:py-3.5 px-4 rounded-sm border transition-all text-center flex items-center justify-between cursor-pointer group ${
                    isSelected
                      ? 'bg-[#1A1813] border-[#C5A059] text-white shadow-md'
                      : 'bg-[#121212] border-[#222222] text-[#C0B8AE] hover:bg-[#161616] hover:border-[#333333]'
                  }`}
                >
                  <span
                    className={`w-6 h-5 rounded-sm text-[10px] font-mono font-bold flex items-center justify-center shrink-0 ${
                      isSelected
                        ? 'bg-[#241F14] text-[#C5A059] border border-[#3E3420]'
                        : 'bg-[#181818] text-[#8C8C8C] border border-[#2A2A2A]'
                    }`}
                  >
                    L{layer.level}
                  </span>

                  <span className="text-xs sm:text-sm font-medium tracking-tight truncate px-2">
                    {layer.name}
                  </span>

                  <ChevronRight
                    className={`w-4 h-4 transition-colors shrink-0 ${
                      isSelected ? 'text-[#C5A059]' : 'text-[#555555] group-hover:text-[#8C8C8C]'
                    }`}
                  />
                </button>
              );
            })}

            <div className="flex items-center gap-2 text-xs font-mono text-[#8C8C8C] mt-2">
              <span>Foundation / Highest Direct Coverage</span>
            </div>
          </div>

          {/* Right Column: Layer Inspection Card */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-sm bg-[#0C0C0C] border border-[#2A2A2A] shadow-xl space-y-6">
            <div className="border-b border-[#222222] pb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="px-2.5 py-0.5 rounded-sm text-xs font-mono font-medium tracking-wider bg-[#1A1813] text-[#C5A059] border border-[#3E3420]">
                  LAYER 0{selectedLayer.level}
                </span>
                <span className="text-xs font-mono text-[#8C8C8C]">
                  Pyramid Layer Inspection
                </span>
              </div>

              <h3 className="text-2xl font-serif font-normal text-white tracking-tight">
                {selectedLayer.name}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-[#8C8C8C] mt-1">
                {selectedLayer.subtitle}
              </p>
            </div>

            {/* Description */}
            <div>
              <h4 className="text-xs font-sans uppercase tracking-wider text-[#8C8C8C] font-semibold mb-1.5">
                Purpose & Scope
              </h4>
              <p className="text-[#C0B8AE] text-xs sm:text-sm leading-relaxed">
                {selectedLayer.description}
              </p>
            </div>

            {/* Validation Target */}
            <div className="p-3.5 rounded-sm bg-[#121212] border border-[#222222] text-xs">
              <span className="font-sans uppercase tracking-wider text-[11px] text-[#C5A059] font-medium block mb-1">
                Primary Validation Target:
              </span>
              <p className="text-[#C0B8AE] leading-relaxed">
                {selectedLayer.validationTarget}
              </p>
            </div>

            {/* Jyotishka's Engineering Perspective */}
            <div className="p-4 rounded-sm bg-[#1A1813] border border-[#3E3420] text-xs">
              <span className="font-sans uppercase tracking-wider text-[11px] text-[#C5A059] font-medium block mb-1">
                Engineering Perspective:
              </span>
              <p className="text-[#E0D8D0] italic leading-relaxed">
                &ldquo;{selectedLayer.jyotishkaPerspective}&rdquo;
              </p>
            </div>

            {/* Tools */}
            <div className="pt-2">
              <span className="text-xs font-mono text-[#8C8C8C] block mb-2">
                Typical Engineering Stack:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {selectedLayer.tools.map((t, idx) => (
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
      </div>
    </section>
  );
};
