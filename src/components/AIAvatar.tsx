import React from 'react';
import { Sparkles, Compass } from 'lucide-react';

interface AIAvatarProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  glow?: boolean;
}

export const AIAvatar: React.FC<AIAvatarProps> = ({
  size = 'md',
  className = '',
  glow = false,
}) => {
  const sizeMap = {
    sm: 'w-7 h-7 rounded-xl text-xs',
    md: 'w-8 h-8 rounded-xl text-sm',
    lg: 'w-10 h-10 rounded-2xl text-base',
    xl: 'w-12 h-12 rounded-2xl text-lg',
  };

  const iconSizeMap = {
    sm: 'w-4 h-4',
    md: 'w-4.5 h-4.5',
    lg: 'w-5 h-5',
    xl: 'w-6 h-6',
  };

  return (
    <div
      className={`relative flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-amber-500 via-rose-500 to-indigo-600 text-white shadow-sm border border-white/40 select-none overflow-hidden ${
        sizeMap[size]
      } ${glow ? 'shadow-md shadow-amber-500/20' : ''} ${className}`}
    >
      {/* Subtle layered backdrop motif */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.4),transparent)] pointer-events-none" />
      
      {/* Stylized Modern AI Mentor Star / Compass */}
      <svg
        viewBox="0 0 24 24"
        className={`${iconSizeMap[size]} relative z-10 drop-shadow-xs`}
        fill="currentColor"
      >
        {/* 8-pointed star / mentor compass with spark */}
        <path d="M12 2L14.4 8.6L21 11L14.4 13.4L12 20L9.6 13.4L3 11L9.6 8.6L12 2Z" fill="white" />
        <circle cx="12" cy="11" r="2.5" fill="#FFE4E6" />
        <path d="M18.5 3.5L19.5 6L22 7L19.5 8L18.5 10.5L17.5 8L15 7L17.5 6L18.5 3.5Z" fill="#FDE047" opacity="0.9" />
      </svg>
    </div>
  );
};
