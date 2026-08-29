import React from 'react';
import { ProjectStatus } from '../types';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'emerald' | 'amber' | 'blue' | 'purple' | 'slate' | 'rose';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'cyan',
  size = 'sm',
  className = '',
}) => {
  const variantStyles = {
    cyan: 'bg-[#1A1813] text-[#C5A059] border-[#3E3420] hover:border-[#C5A059]',
    emerald: 'bg-[#121A15] text-[#86EFAC] border-[#1E3A2B] hover:border-[#2D5A42]',
    amber: 'bg-[#1C1811] text-[#FCD34D] border-[#453316] hover:border-[#63491E]',
    blue: 'bg-[#101824] text-[#93C5FD] border-[#1E2E48] hover:border-[#2D456E]',
    purple: 'bg-[#181220] text-[#D8B4FE] border-[#3B2852] hover:border-[#583C7B]',
    slate: 'bg-[#161616] text-[#D1C7BC] border-[#2A2A2A] hover:border-[#3E3E3E]',
    rose: 'bg-[#201215] text-[#FDA4AF] border-[#4A1E27] hover:border-[#6E2C3A]',
  };

  const sizeStyles = {
    sm: 'text-[10px] px-2.5 py-0.5 tracking-wider font-mono uppercase',
    md: 'text-xs px-3 py-1 font-mono tracking-wide',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-sm border font-medium whitespace-nowrap transition-colors ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </span>
  );
};

export const StatusBadge: React.FC<{ status: ProjectStatus }> = ({ status }) => {
  switch (status) {
    case 'COMPLETED':
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-sm text-[10px] font-mono font-medium tracking-wider uppercase bg-[#121A15] text-[#86EFAC] border border-[#1E3A2B]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]"></span>
          COMPLETED
        </span>
      );
    case 'IN DEVELOPMENT':
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-sm text-[10px] font-mono font-medium tracking-wider uppercase bg-[#1A1813] text-[#C5A059] border border-[#3E3420] animate-pulse">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></span>
          IN DEVELOPMENT
        </span>
      );
    case 'PLANNED':
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-sm text-[10px] font-mono font-medium tracking-wider uppercase bg-[#141414] text-[#8C8C8C] border border-[#2A2A2A]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#555]"></span>
          PLANNED
        </span>
      );
    default:
      return null;
  }
};
