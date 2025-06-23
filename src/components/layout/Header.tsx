'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ThemeControls } from '@/components/ui/ThemeControls';
import { GlooperLogo } from '@/components/ui/GlooperLogo';
import { Menu, X, Settings } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Free Tools', href: '/tools' },
  { name: 'Services', href: '/services' },
  { name: 'Design System', href: '/design-system' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[var(--surface-primary)] border-b border-[var(--border-primary)] backdrop-blur-sm">
      {/* Skip Link for accessibility */}
      <a 
        href="#main-content" 
        className="skip-link"
      >
        Skip to main content
      </a>

      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[var(--border-focus)] focus-visible:ring-offset-2 rounded-[var(--radius-md)]"
          >
            <GlooperLogo size={32} />
            <span className="text-[var(--font-size-xl)] font-bold text-[var(--text-primary)]">
              Glooper
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[var(--font-size-sm)] font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] px-3 py-2 rounded-[var(--radius-md)] hover:bg-[var(--bg-secondary)] transition-colors focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[var(--border-focus)] focus-visible:ring-offset-2"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            {/* Theme Settings Button */}
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setThemeMenuOpen(!themeMenuOpen)}
                aria-label="Theme settings"
                aria-expanded={themeMenuOpen}
                aria-haspopup="true"
              >
                <Settings className="w-4 h-4" />
              </Button>
              
              {themeMenuOpen && (
                <>
                  {/* Backdrop */}
                  <div 
                    className="fixed inset-0 z-40"
                    onClick={() => setThemeMenuOpen(false)}
                  />
                  {/* Theme Menu */}
                  <div className="absolute right-0 top-full mt-2 w-96 z-50">
                    <ThemeControls />
                  </div>
                </>
              )}
            </div>

            {/* CTA Button */}
            <Button size="sm">
              Book Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open main menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[var(--border-primary)]">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-[var(--font-size-base)] font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] rounded-[var(--radius-md)] transition-colors focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[var(--border-focus)] focus-visible:ring-offset-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Theme Settings */}
              <div className="pt-4 border-t border-[var(--border-primary)] mt-4">
                <div className="px-3 py-2 text-[var(--font-size-sm)] font-medium text-[var(--text-tertiary)]">
                  Theme Settings
                </div>
                <div className="mt-2">
                  <ThemeControls />
                </div>
              </div>
              
              {/* Mobile CTA */}
              <div className="pt-4">
                <Button fullWidth size="md">
                  Book Consultation
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}