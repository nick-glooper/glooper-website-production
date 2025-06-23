export type ColorScheme = 'professional' | 'warm' | 'cool';
export type ThemeMode = 'light' | 'dark';
export type FontFamily = 'lexend' | 'system' | 'accessible';
export type FontSize = 'compact' | 'standard' | 'large' | 'xl';

export interface GlooperTheme {
  scheme: ColorScheme;
  mode: ThemeMode;
  font: FontFamily;
  size: FontSize;
}

export const defaultTheme: GlooperTheme = {
  scheme: 'professional',
  mode: 'light',
  font: 'lexend',
  size: 'standard',
};

export const colorSchemes: Array<{ value: ColorScheme; label: string; description: string }> = [
  {
    value: 'professional',
    label: 'Professional Blue',
    description: 'Trusted, corporate-friendly palette'
  },
  {
    value: 'warm',
    label: 'Warm Earth',
    description: 'Calming amber and cream tones'
  },
  {
    value: 'cool',
    label: 'Cool Mint',
    description: 'Fresh green and blue accents'
  },
];

export const fontFamilies: Array<{ value: FontFamily; label: string; description: string }> = [
  {
    value: 'lexend',
    label: 'Lexend',
    description: 'Reading proficiency optimized'
  },
  {
    value: 'system',
    label: 'System Font',
    description: 'Platform native familiarity'
  },
  {
    value: 'accessible',
    label: 'Atkinson Hyperlegible',
    description: 'Low vision optimized'
  },
];

export const fontSizes: Array<{ value: FontSize; label: string; description: string }> = [
  {
    value: 'compact',
    label: 'Compact',
    description: '14px base - space efficient'
  },
  {
    value: 'standard',
    label: 'Standard',
    description: '16px base - recommended'
  },
  {
    value: 'large',
    label: 'Large',
    description: '18px base - easier reading'
  },
  {
    value: 'xl',
    label: 'Extra Large',
    description: '20px base - maximum comfort'
  },
];