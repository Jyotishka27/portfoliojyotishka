import React from 'react';

interface SectionHeadingProps {
  badgeText: string;
  title: string;
  subtitle: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badgeText,
  title,
  subtitle,
  align = 'center',
  className = '',
}) => {
  return (
    <div
      className={`mb-12 md:mb-16 ${
        align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'
      } ${className}`}
    >
      <div className={`inline-flex items-center gap-2 mb-3.5 ${align === 'center' ? 'justify-center' : ''}`}>
        <span className="font-sans text-[10px] uppercase tracking-[0.35em] text-[#C5A059] font-medium px-3 py-1 rounded-sm bg-[#161410] border border-[#3E3420]">
          {badgeText}
        </span>
      </div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal tracking-tight text-white mb-3">
        {title}
      </h2>
      <div className={`w-12 h-[1px] bg-[#C5A059] mb-4 ${align === 'center' ? 'mx-auto' : ''}`}></div>
      <p className="text-[#8C8C8C] text-sm sm:text-base md:text-lg leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
};
