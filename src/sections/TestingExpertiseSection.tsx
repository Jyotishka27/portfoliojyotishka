import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { TESTING_PYRAMID_LAYERS } from '../data/pyramid';
import { ArrowUp, ChevronRight, ChevronDown, Sparkles, Terminal } from 'lucide-react';

export const TestingExpertiseSection: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<number>(4); // API / Services by default
  const [showDeepDetails, setShowDeepDetails] = useState(false);

  const selectedLayer =
    TESTING_PYRAMID_LAYERS.find((l) => l.level === selectedLevel) ||
    TESTING_PYRAMID_LAYERS[0];

  // Quick 1-sentence explanations per user specification
  const quickExplanations: Record<number, string> = {
    6: 'Leverage local LLMs and agentic pipelines to synthesize test assets and analyze code quality.',
    5: 'Validate critical end-to-end user journeys using maintainable Page Object Models.',
    4: 'Validate business logic and service behavior without depending on UI rendering.',
    3: 'Verify persistent records, schema integrity, and database consistency directly at the data store.',
    2: 'Test cross-system handshakes and interface boundaries connecting ERPs, CRMs, and billing.',
    1: 'Explore requirements, discover edge cases, and validate real-world domain workflows with human insight.',
  };

  // Stack ordered from top (Level 6) to bottom (Level 1)
  const orderedLayers = [...TESTING_PYRAMID_LAYERS].sort((a, b) => b.level - a.level);

  return (
    <section id="testing-expertise" className="py-16 md:py-24 bg-[#0A0A0A] border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText="Testing Philosophy"
          title="Testing Expertise & The Layered Pyramid"
          subtitle="Knowing what to test, where to test it, and how to validate it with maximum return on investment."
          align="center"
        />

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Visual Pyramid Stack (7 cols) */}
          <div className="lg:col-span-6 flex flex-col items-center space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-mono text-[#C5A059] mb-2">
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Higher Leverage / Lower Run Frequency</span>
            </div>

            {orderedLayers.map((layer) => {
              const isSelected = layer.level === selectedLevel;
              const widthClasses = [
                'w-full',      // Level 1
                'w-[92%]',     // Level 2
                'w-[84%]',     // Level 3
                'w-[76%]',     // Level 4
                'w-[68%]',     // Level 5
                'w-[60%]',     // Level 6
              ];
              const widthClass = widthClasses[layer.level - 1];

              return (
                <button
                  key={layer.level}
                  onClick={() => {
                    setSelectedLevel(layer.level);
                    setShowDeepDetails(false);
                  }}
                  className={`${widthClass} py-3 px-3.5 rounded-sm border transition-all text-center flex items-center justify-between cursor-pointer group ${
                    isSelected
                      ? 'bg-[#1A1813] border-[#C5A059] text-white shadow-md'
                      : 'bg-[#121212] border-[#222222] text-[#C0B8AE] hover:bg-[#161616] hover:border-[#383838]'
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
                    className={`w-3.5 h-3.5 transition-colors shrink-0 ${
                      isSelected ? 'text-[#C5A059]' : 'text-[#555] group-hover:text-[#8C8C8C]'
                    }`}
                  />
                </button>
              );
            })}

            <div className="flex items-center gap-1.5 text-xs font-mono text-[#777] mt-2">
              <span>Foundation / Highest Direct Coverage</span>
            </div>
          </div>

          {/* Clean Layer Inspection Card (5 cols) */}
          <div className="lg:col-span-6 p-6 rounded-sm bg-[#111111] border border-[#2A2A2A] shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3 border-b border-[#222222] pb-3">
                <span className="font-mono text-xs text-[#C5A059] bg-[#1A1813] px-2.5 py-0.5 rounded-sm border border-[#3E3420]">
                  Layer 0{selectedLayer.level}
                </span>
                <span className="text-[11px] font-mono text-[#8C8C8C]">
                  Click layer to inspect
                </span>
              </div>

              <h3 className="text-xl font-serif font-normal text-white mb-2">
                {selectedLayer.name}
              </h3>

              {/* 1-sentence quick explanation */}
              <p className="text-xs sm:text-sm text-[#E0D8D0] leading-relaxed font-light mb-4">
                &ldquo;{quickExplanations[selectedLayer.level] || selectedLayer.description}&rdquo;
              </p>

              {/* Tools tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {selectedLayer.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 text-[10px] font-mono rounded-sm bg-[#161616] text-[#8C8C8C] border border-[#242424]"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Progressive Disclosure: Read More */}
              {showDeepDetails && (
                <div className="pt-3 mt-3 border-t border-[#1F1F1F] space-y-3 text-xs text-[#C0B8AE] animate-fadeIn">
                  <div>
                    <span className="font-mono text-[10px] text-[#C5A059] uppercase block mb-1">
                      Validation Target:
                    </span>
                    <p className="font-light leading-relaxed">{selectedLayer.validationTarget}</p>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-[#C5A059] uppercase block mb-1">
                      Architectural Perspective:
                    </span>
                    <p className="font-light italic leading-relaxed text-[#A8A8A8]">
                      {selectedLayer.jyotishkaPerspective}
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="pt-4 mt-4 border-t border-[#1F1F1F] flex items-center justify-between">
              <button
                onClick={() => setShowDeepDetails(!showDeepDetails)}
                className="inline-flex items-center gap-1 text-xs font-mono text-[#C5A059] hover:underline cursor-pointer"
              >
                <span>{showDeepDetails ? 'Show Less' : 'Read Full Details'}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform ${
                    showDeepDetails ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
