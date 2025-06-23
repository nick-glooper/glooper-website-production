'use client';

import React from 'react';
import Link from 'next/link';
import { GlooperLogo } from '@/components/ui/GlooperLogo';
import { Mail, MapPin, Linkedin, Twitter } from 'lucide-react';

const footerNavigation = {
  services: [
    { name: 'Design Consultation', href: '/services#consultation' },
    { name: 'Design System Development', href: '/services#design-system' },
    { name: 'Development Partnership', href: '/services#development' },
    { name: 'Team Training', href: '/services#training' },
  ],
  tools: [
    { name: 'Adaptive Pomodoro Timer', href: '/tools#pomodoro' },
    { name: 'Task Breakdown Helper', href: '/tools#task-breakdown' },
    { name: 'Theme Demonstrator', href: '/tools#theme-demo' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Design System', href: '/design-system' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Accessibility Statement', href: '/accessibility' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[var(--surface-secondary)] border-t border-[var(--border-primary)]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link 
              href="/" 
              className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[var(--border-focus)] focus-visible:ring-offset-2 rounded-[var(--radius-md)] w-fit"
            >
              <GlooperLogo size={32} />
              <span className="text-[var(--font-size-xl)] font-bold text-[var(--text-primary)]">
                Glooper
              </span>
            </Link>
            
            <p className="mt-4 text-[var(--font-size-sm)] text-[var(--text-secondary)] leading-relaxed max-w-sm">
              Design & development for neurodivergent minds. Creating interfaces that reduce cognitive load and support diverse thinking styles.
            </p>

            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[var(--primary-500)] flex-shrink-0" />
                <a 
                  href="mailto:hello@glooper.ai"
                  className="text-[var(--font-size-sm)] text-[var(--text-secondary)] hover:text-[var(--primary-500)] transition-colors focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[var(--border-focus)] focus-visible:ring-offset-2 rounded"
                >
                  hello@glooper.ai
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[var(--primary-500)] flex-shrink-0" />
                <span className="text-[var(--font-size-sm)] text-[var(--text-secondary)]">
                  Remote-first, based in Ireland
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="text-[var(--text-tertiary)] hover:text-[var(--primary-500)] transition-colors focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[var(--border-focus)] focus-visible:ring-offset-2 rounded"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-[var(--text-tertiary)] hover:text-[var(--primary-500)] transition-colors focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[var(--border-focus)] focus-visible:ring-offset-2 rounded"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[var(--font-size-sm)] font-semibold text-[var(--text-primary)] mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {footerNavigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[var(--font-size-sm)] text-[var(--text-secondary)] hover:text-[var(--primary-500)] transition-colors focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[var(--border-focus)] focus-visible:ring-offset-2 rounded"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Free Tools */}
          <div>
            <h3 className="text-[var(--font-size-sm)] font-semibold text-[var(--text-primary)] mb-4">
              Free Tools
            </h3>
            <ul className="space-y-3">
              {footerNavigation.tools.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[var(--font-size-sm)] text-[var(--text-secondary)] hover:text-[var(--primary-500)] transition-colors focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[var(--border-focus)] focus-visible:ring-offset-2 rounded"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[var(--font-size-sm)] font-semibold text-[var(--text-primary)] mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[var(--font-size-sm)] text-[var(--text-secondary)] hover:text-[var(--primary-500)] transition-colors focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[var(--border-focus)] focus-visible:ring-offset-2 rounded"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-[var(--font-size-sm)] font-semibold text-[var(--text-primary)] mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerNavigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[var(--font-size-sm)] text-[var(--text-secondary)] hover:text-[var(--primary-500)] transition-colors focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[var(--border-focus)] focus-visible:ring-offset-2 rounded"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[var(--border-primary)]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-[var(--font-size-sm)] text-[var(--text-tertiary)]">
              © 2024 Glooper. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6">
              <span className="text-[var(--font-size-xs)] text-[var(--text-tertiary)]">
                Built with neurodivergent-friendly design principles
              </span>
              
              {/* Accessibility Badge */}
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[var(--success)]" />
                <span className="text-[var(--font-size-xs)] text-[var(--text-tertiary)]">
                  WCAG AAA Compliant
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}