'use client';

import React from 'react';
import { useTheme } from '@/hooks/useTheme';
import { colorSchemes, fontFamilies, fontSizes } from '@/types/theme';
import { Button } from './Button';
import { Sun, Moon, Palette, Type, Expand } from 'lucide-react';

export function ThemeControls() {
  const { theme, updateTheme, announceThemeChange } = useTheme();

  const toggleMode = () => {
    const newMode = theme.mode === 'light' ? 'dark' : 'light';
    updateTheme({ mode: newMode });
    announceThemeChange(`Switched to ${newMode} mode`);
  };

  return (
    <div className="flex flex-col gap-6 p-6 rounded-[var(--radius-xl)] bg-[var(--surface-primary)] border border-[var(--border-primary)]">
      <div className="flex items-center gap-3">
        <Palette className="w-5 h-5 text-[var(--primary-500)]" />
        <h3 className="text-[var(--font-size-lg)] font-semibold text-[var(--text-primary)]">
          Theme Settings
        </h3>
      </div>

      {/* Light/Dark Mode Toggle */}
      <div className="flex flex-col gap-2">
        <label className="text-[var(--font-size-sm)] font-medium text-[var(--text-primary)]">
          Mode
        </label>
        <Button
          variant="secondary"
          size="sm"
          onClick={toggleMode}
          className="w-fit"
          aria-label={`Switch to ${theme.mode === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme.mode === 'light' ? (
            <>
              <Moon className="w-4 h-4 mr-2" />
              Dark Mode
            </>
          ) : (
            <>
              <Sun className="w-4 h-4 mr-2" />
              Light Mode
            </>
          )}
        </Button>
      </div>

      {/* Color Scheme Selection */}
      <fieldset className="flex flex-col gap-3">
        <legend className="text-[var(--font-size-sm)] font-medium text-[var(--text-primary)]">
          Color Scheme
        </legend>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {colorSchemes.map((scheme) => (
            <label
              key={scheme.value}
              className="flex items-center gap-3 p-3 rounded-[var(--radius-lg)] border border-[var(--border-primary)] cursor-pointer hover:bg-[var(--bg-secondary)] transition-colors"
            >
              <input
                type="radio"
                name="colorScheme"
                value={scheme.value}
                checked={theme.scheme === scheme.value}
                onChange={(e) => {
                  updateTheme({ scheme: e.target.value as 'professional' | 'warm' | 'cool' });
                  announceThemeChange(`Changed color scheme to ${scheme.label}`);
                }}
                className="sr-only"
              />
              <div
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                  theme.scheme === scheme.value
                    ? 'border-[var(--primary-500)] bg-[var(--primary-500)]'
                    : 'border-[var(--border-secondary)]'
                }`}
              >
                {theme.scheme === scheme.value && (
                  <div className="w-2 h-2 rounded-full bg-white" />
                )}
              </div>
              <div className="flex-1">
                <div className="text-[var(--font-size-sm)] font-medium text-[var(--text-primary)]">
                  {scheme.label}
                </div>
                <div className="text-[var(--font-size-xs)] text-[var(--text-tertiary)]">
                  {scheme.description}
                </div>
              </div>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Font Family Selection */}
      <div className="flex flex-col gap-3">
        <label className="text-[var(--font-size-sm)] font-medium text-[var(--text-primary)] flex items-center gap-2">
          <Type className="w-4 h-4" />
          Font Family
        </label>
        <select
          value={theme.font}
          onChange={(e) => {
            updateTheme({ font: e.target.value as 'lexend' | 'system' | 'accessible' });
            const selectedFont = fontFamilies.find(f => f.value === e.target.value);
            announceThemeChange(`Changed font to ${selectedFont?.label}`);
          }}
          className="px-3 py-2 rounded-[var(--radius-lg)] border border-[var(--border-primary)] bg-[var(--bg-primary)] text-[var(--text-primary)] focus:outline-none focus:ring-3 focus:ring-[var(--border-focus)] focus:ring-offset-2"
        >
          {fontFamilies.map((font) => (
            <option key={font.value} value={font.value}>
              {font.label} - {font.description}
            </option>
          ))}
        </select>
      </div>

      {/* Font Size Selection */}
      <fieldset className="flex flex-col gap-3">
        <legend className="text-[var(--font-size-sm)] font-medium text-[var(--text-primary)] flex items-center gap-2">
          <Expand className="w-4 h-4" />
          Font Size
        </legend>
        <div className="grid grid-cols-2 gap-2">
          {fontSizes.map((size) => (
            <label
              key={size.value}
              className="flex items-center gap-2 p-2 rounded-[var(--radius-md)] border border-[var(--border-primary)] cursor-pointer hover:bg-[var(--bg-secondary)] transition-colors"
            >
              <input
                type="radio"
                name="fontSize"
                value={size.value}
                checked={theme.size === size.value}
                onChange={(e) => {
                  updateTheme({ size: e.target.value as 'compact' | 'standard' | 'large' | 'xl' });
                  announceThemeChange(`Changed font size to ${size.label}`);
                }}
                className="sr-only"
              />
              <div
                className={`w-3 h-3 rounded-full border flex items-center justify-center ${
                  theme.size === size.value
                    ? 'border-[var(--primary-500)] bg-[var(--primary-500)]'
                    : 'border-[var(--border-secondary)]'
                }`}
              >
                {theme.size === size.value && (
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                )}
              </div>
              <div className="flex-1">
                <div className="text-[var(--font-size-xs)] font-medium text-[var(--text-primary)]">
                  {size.label}
                </div>
                <div className="text-[var(--font-size-xs)] text-[var(--text-tertiary)]">
                  {size.description}
                </div>
              </div>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Current Theme Display */}
      <div className="mt-4 p-3 rounded-[var(--radius-lg)] bg-[var(--bg-secondary)]">
        <div className="text-[var(--font-size-xs)] text-[var(--text-tertiary)] mb-1">
          Current Theme:
        </div>
        <div className="text-[var(--font-size-sm)] text-[var(--text-primary)] font-mono">
          {theme.scheme}-{theme.mode}-{theme.font}-{theme.size}
        </div>
      </div>
    </div>
  );
}