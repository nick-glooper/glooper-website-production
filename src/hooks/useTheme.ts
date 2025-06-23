'use client';

import { useState, useEffect, useCallback } from 'react';
import type { GlooperTheme } from '@/types/theme';
import { defaultTheme } from '@/types/theme';

const STORAGE_KEY = 'glooper-theme';

export function useTheme() {
  const [theme, setTheme] = useState<GlooperTheme>(defaultTheme);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load theme from localStorage and apply to document
  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      const savedTheme = saved ? JSON.parse(saved) : defaultTheme;
      
      // Validate saved theme structure
      const validatedTheme: GlooperTheme = {
        scheme: savedTheme.scheme || defaultTheme.scheme,
        mode: savedTheme.mode || defaultTheme.mode,
        font: savedTheme.font || defaultTheme.font,
        size: savedTheme.size || defaultTheme.size,
      };

      setTheme(validatedTheme);
      applyThemeToDocument(validatedTheme);
      setIsLoaded(true);
    } catch (error) {
      console.warn('Failed to load saved theme, using default:', error);
      applyThemeToDocument(defaultTheme);
      setIsLoaded(true);
    }
  }, []);

  // Detect system preferences
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Only auto-set if no saved preference exists
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return;

    // Detect system dark mode preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    if (mediaQuery.matches) {
      updateTheme({ mode: 'dark' });
    }

    // Listen for system preference changes
    const handleChange = (e: MediaQueryListEvent) => {
      // Only update if user hasn't manually set a preference
      const currentSaved = localStorage.getItem(STORAGE_KEY);
      if (!currentSaved) {
        updateTheme({ mode: e.matches ? 'dark' : 'light' });
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const applyThemeToDocument = useCallback((themeToApply: GlooperTheme) => {
    if (typeof document === 'undefined') return;

    const root = document.documentElement;
    
    // Remove existing theme attributes
    root.removeAttribute('data-scheme');
    root.removeAttribute('data-mode');
    root.removeAttribute('data-font');
    root.removeAttribute('data-size');
    
    // Apply new theme attributes
    root.setAttribute('data-scheme', themeToApply.scheme);
    root.setAttribute('data-mode', themeToApply.mode);
    root.setAttribute('data-font', themeToApply.font);
    root.setAttribute('data-size', themeToApply.size);

    // Update color-scheme for browser UI
    root.style.colorScheme = themeToApply.mode;
  }, []);

  const updateTheme = useCallback((updates: Partial<GlooperTheme>) => {
    setTheme(currentTheme => {
      const newTheme = { ...currentTheme, ...updates };
      
      // Save to localStorage
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newTheme));
      } catch (error) {
        console.warn('Failed to save theme preference:', error);
      }
      
      // Apply to document
      applyThemeToDocument(newTheme);
      
      return newTheme;
    });
  }, [applyThemeToDocument]);

  const resetTheme = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.warn('Failed to clear theme preference:', error);
    }
    
    setTheme(defaultTheme);
    applyThemeToDocument(defaultTheme);
  }, [applyThemeToDocument]);

  // Accessibility announcement helper
  const announceThemeChange = useCallback((message: string) => {
    if (typeof document === 'undefined') return;

    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      if (document.body.contains(announcement)) {
        document.body.removeChild(announcement);
      }
    }, 1000);
  }, []);

  return {
    theme,
    updateTheme,
    resetTheme,
    isLoaded,
    announceThemeChange,
  };
}