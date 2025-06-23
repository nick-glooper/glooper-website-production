'use client';

import React from 'react';
import Image from 'next/image';
import { useTheme } from '@/hooks/useTheme';

interface GlooperLogoProps {
  size?: number;
  className?: string;
}

export function GlooperLogo({ size = 32, className = '' }: GlooperLogoProps) {
  const { theme, isLoaded } = useTheme();

  // Default to professional light if theme hasn't loaded yet
  const getLogoPath = () => {
    if (!isLoaded) {
      return '/theme_pro_light_128.png';
    }

    const schemeMap = {
      professional: 'pro',
      warm: 'warm',
      cool: 'cool',
    };

    const scheme = schemeMap[theme.scheme];
    const mode = theme.mode;
    
    return `/theme_${scheme}_${mode}_128.png`;
  };

  const logoPath = getLogoPath();

  return (
    <Image
      src={logoPath}
      alt="Glooper Logo"
      width={size}
      height={size}
      className={`transition-all duration-200 ${className}`}
      priority={size >= 32} // Prioritize loading for larger logos
    />
  );
}