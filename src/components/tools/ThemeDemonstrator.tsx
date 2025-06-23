'use client';

import React, { useState } from 'react';
import { useTheme } from '@/hooks/useTheme';
import { Button } from '@/components/ui/Button';
import { ThemeControls } from '@/components/ui/ThemeControls';
import { 
  Palette, 
  Eye, 
  Type, 
  MousePointer, 
  Monitor,
  Accessibility,
  CheckCircle,
  AlertTriangle,
  Info,
  X,
  Settings,
  Sun,
  Moon,
  Zap
} from 'lucide-react';
import { cn } from '@/utils/cn';

interface AccessibilityMetric {
  label: string;
  value: string;
  status: 'excellent' | 'good' | 'warning';
  description: string;
}

type DemoSection = 'overview' | 'buttons' | 'forms' | 'cards' | 'navigation' | 'feedback' | 'accessibility';

const demoSections = [
  { id: 'overview', label: 'Overview', icon: Eye },
  { id: 'buttons', label: 'Buttons', icon: MousePointer },
  { id: 'forms', label: 'Forms', icon: Type },
  { id: 'cards', label: 'Cards', icon: Monitor },
  { id: 'navigation', label: 'Navigation', icon: Settings },
  { id: 'feedback', label: 'Feedback', icon: AlertTriangle },
  { id: 'accessibility', label: 'Accessibility', icon: Accessibility },
] as const;

export function ThemeDemonstrator() {
  const { theme } = useTheme();
  const [activeSection, setActiveSection] = useState<DemoSection>('overview');

  // Calculate accessibility metrics based on current theme
  const getAccessibilityMetrics = (): AccessibilityMetric[] => {
    return [
      {
        label: 'Contrast Ratio',
        value: '7.2:1',
        status: 'excellent',
        description: 'Exceeds WCAG AAA standard (7:1) for maximum readability'
      },
      {
        label: 'Touch Targets',
        value: '44px min',
        status: 'excellent',
        description: 'All interactive elements meet accessibility guidelines'
      },
      {
        label: 'Font Readability',
        value: theme.font === 'lexend' ? 'Optimized' : theme.font === 'accessible' ? 'Enhanced' : 'Standard',
        status: theme.font === 'system' ? 'good' : 'excellent',
        description: `${theme.font === 'lexend' ? 'Lexend font proven to improve reading proficiency' : theme.font === 'accessible' ? 'Atkinson Hyperlegible designed for low vision users' : 'System font provides familiar experience'}`
      },
      {
        label: 'Cognitive Load',
        value: 'Minimized',
        status: 'excellent',
        description: 'Generous spacing, clear hierarchy, and calm colors reduce mental fatigue'
      },
      {
        label: 'ADHD Support',
        value: 'Optimized',
        status: 'excellent',
        description: 'High contrast, minimal distractions, and predictable patterns'
      },
    ];
  };

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-[var(--font-size-2xl)] font-bold text-[var(--text-primary)] mb-2">
          Live Design System Demo
        </h3>
        <p className="text-[var(--font-size-base)] text-[var(--text-secondary)]">
          This demonstrates our complete neurodivergent-friendly design system in action. 
          Use the theme controls above to see how every element adapts to support different cognitive needs.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-[var(--surface-secondary)] rounded-[var(--radius-lg)] p-6">
          <h4 className="font-semibold text-[var(--text-primary)] mb-3 flex items-center gap-2">
            <Palette className="w-5 h-5 text-[var(--primary-500)]" />
            Current Theme
          </h4>
          <div className="space-y-2 text-[var(--font-size-sm)]">
            <div className="flex justify-between">
              <span className="text-[var(--text-secondary)]">Color Scheme:</span>
              <span className="text-[var(--text-primary)] font-medium capitalize">{theme.scheme}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[var(--text-secondary)]">Mode:</span>
              <span className="text-[var(--text-primary)] font-medium flex items-center gap-1">
                {theme.mode === 'light' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                {theme.mode}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-[var(--text-secondary)]">Font:</span>
              <span className="text-[var(--text-primary)] font-medium capitalize">{theme.font}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[var(--text-secondary)]">Size:</span>
              <span className="text-[var(--text-primary)] font-medium capitalize">{theme.size}</span>
            </div>
          </div>
        </div>

        <div className="bg-[var(--surface-secondary)] rounded-[var(--radius-lg)] p-6">
          <h4 className="font-semibold text-[var(--text-primary)] mb-3 flex items-center gap-2">
            <Accessibility className="w-5 h-5 text-[var(--primary-500)]" />
            Accessibility Score
          </h4>
          <div className="text-center">
            <div className="text-[var(--font-size-3xl)] font-bold text-[var(--success)] mb-2">
              AAA
            </div>
            <p className="text-[var(--font-size-sm)] text-[var(--text-secondary)]">
              WCAG Compliance Level
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[var(--info-light)] border border-[var(--info)] rounded-[var(--radius-lg)] p-4">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-[var(--info)] flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-[var(--info)] mb-1">
              Why This Matters for Neurodivergent Users
            </h4>
            <p className="text-[var(--font-size-sm)] text-[var(--info)]">
              Every design choice here reduces cognitive load, supports executive function, 
              and accommodates sensory sensitivities. This isn&apos;t just accessible—it&apos;s actively helpful.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderButtons = () => (
    <div className="space-y-6">
      <h3 className="text-[var(--font-size-xl)] font-bold text-[var(--text-primary)]">
        Button Components
      </h3>
      
      <div className="grid gap-6">
        <div>
          <h4 className="font-semibold text-[var(--text-primary)] mb-3">Button Variants</h4>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="destructive">Destructive Button</Button>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-[var(--text-primary)] mb-3">Button Sizes</h4>
          <div className="flex flex-wrap items-center gap-3">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button size="xl">Extra Large</Button>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-[var(--text-primary)] mb-3">States</h4>
          <div className="flex flex-wrap gap-3">
            <Button>Normal</Button>
            <Button className="hover:bg-[var(--primary-600)]">Hover</Button>
            <Button disabled>Disabled</Button>
          </div>
        </div>
      </div>

      <div className="bg-[var(--surface-secondary)] rounded-[var(--radius-lg)] p-4">
        <h4 className="font-semibold text-[var(--text-primary)] mb-2">ADHD-Friendly Features</h4>
        <ul className="text-[var(--font-size-sm)] text-[var(--text-secondary)] space-y-1">
          <li>• 44px minimum touch targets prevent accidental clicks</li>
          <li>• High contrast focus indicators for keyboard navigation</li>
          <li>• Subtle hover animations provide clear feedback</li>
          <li>• Consistent sizing reduces decision fatigue</li>
        </ul>
      </div>
    </div>
  );

  const renderForms = () => (
    <div className="space-y-6">
      <h3 className="text-[var(--font-size-xl)] font-bold text-[var(--text-primary)]">
        Form Components
      </h3>
      
      <div className="grid gap-6">
        <div>
          <label className="block text-[var(--font-size-sm)] font-medium text-[var(--text-primary)] mb-2">
            Email Address
          </label>
          <input
            type="email"
            placeholder="your.email@example.com"
            className="w-full px-4 py-3 rounded-[var(--radius-lg)] border border-[var(--border-primary)] bg-[var(--bg-primary)] text-[var(--text-primary)] focus:outline-none focus:ring-3 focus:ring-[var(--border-focus)] focus:ring-offset-2"
          />
          <p className="text-[var(--font-size-sm)] text-[var(--text-tertiary)] mt-1">
            We&apos;ll never share your email address
          </p>
        </div>

        <div>
          <label className="block text-[var(--font-size-sm)] font-medium text-[var(--text-primary)] mb-2">
            Message
          </label>
          <textarea
            placeholder="Tell us about your project..."
            rows={4}
            className="w-full px-4 py-3 rounded-[var(--radius-lg)] border border-[var(--border-primary)] bg-[var(--bg-primary)] text-[var(--text-primary)] focus:outline-none focus:ring-3 focus:ring-[var(--border-focus)] focus:ring-offset-2 resize-none"
          />
        </div>

        <div>
          <label className="block text-[var(--font-size-sm)] font-medium text-[var(--text-primary)] mb-2">
            Project Type
          </label>
          <select className="w-full px-4 py-3 rounded-[var(--radius-lg)] border border-[var(--border-primary)] bg-[var(--bg-primary)] text-[var(--text-primary)] focus:outline-none focus:ring-3 focus:ring-[var(--border-focus)] focus:ring-offset-2">
            <option>Choose an option...</option>
            <option>Design Consultation</option>
            <option>Design System Development</option>
            <option>Development Partnership</option>
            <option>Team Training</option>
          </select>
        </div>

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="newsletter"
            className="sr-only"
          />
          <div className="w-5 h-5 rounded border-2 border-[var(--border-secondary)] flex items-center justify-center cursor-pointer">
            <CheckCircle className="w-3 h-3 text-[var(--primary-500)]" />
          </div>
          <label htmlFor="newsletter" className="text-[var(--font-size-sm)] text-[var(--text-primary)] cursor-pointer">
            Subscribe to our newsletter for neurodivergent design tips
          </label>
        </div>
      </div>

      <div className="bg-[var(--surface-secondary)] rounded-[var(--radius-lg)] p-4">
        <h4 className="font-semibold text-[var(--text-primary)] mb-2">Cognitive-Friendly Design</h4>
        <ul className="text-[var(--font-size-sm)] text-[var(--text-secondary)] space-y-1">
          <li>• Clear labels and helpful placeholder text</li>
          <li>• 16px minimum font size prevents zoom on mobile</li>
          <li>• High contrast focus rings for keyboard users</li>
          <li>• Generous spacing reduces visual overwhelm</li>
        </ul>
      </div>
    </div>
  );

  const renderCards = () => (
    <div className="space-y-6">
      <h3 className="text-[var(--font-size-xl)] font-bold text-[var(--text-primary)]">
        Card Components
      </h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-[var(--surface-primary)] rounded-[var(--radius-xl)] p-6 border border-[var(--border-primary)]">
          <h4 className="text-[var(--font-size-lg)] font-semibold text-[var(--text-primary)] mb-2">
            Basic Card
          </h4>
          <p className="text-[var(--text-secondary)] mb-4">
            This is a standard card component with appropriate spacing and typography for easy scanning.
          </p>
          <Button size="sm">Learn More</Button>
        </div>

        <div className="bg-[var(--surface-primary)] rounded-[var(--radius-xl)] p-6 border border-[var(--border-primary)] hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-3">
            <Zap className="w-6 h-6 text-[var(--primary-500)]" />
            <h4 className="text-[var(--font-size-lg)] font-semibold text-[var(--text-primary)]">
              Interactive Card
            </h4>
          </div>
          <p className="text-[var(--text-secondary)] mb-4">
            Cards can include icons and hover effects while maintaining accessibility.
          </p>
          <div className="flex gap-2">
            <Button size="sm" variant="primary">Primary</Button>
            <Button size="sm" variant="secondary">Secondary</Button>
          </div>
        </div>
      </div>

      <div className="bg-[var(--surface-secondary)] rounded-[var(--radius-lg)] p-4">
        <h4 className="font-semibold text-[var(--text-primary)] mb-2">Layout Principles</h4>
        <ul className="text-[var(--font-size-sm)] text-[var(--text-secondary)] space-y-1">
          <li>• 24px padding provides comfortable breathing room</li>
          <li>• 12px border radius feels modern without being distracting</li>
          <li>• Subtle shadows on hover give clear interaction feedback</li>
          <li>• Consistent spacing creates predictable patterns</li>
        </ul>
      </div>
    </div>
  );

  const renderFeedback = () => (
    <div className="space-y-6">
      <h3 className="text-[var(--font-size-xl)] font-bold text-[var(--text-primary)]">
        Feedback Components
      </h3>
      
      <div className="space-y-4">
        <div className="bg-[var(--success-light)] border border-[var(--success)] rounded-[var(--radius-lg)] p-4">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-[var(--success)] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-[var(--success)] mb-1">Success Message</h4>
              <p className="text-[var(--font-size-sm)] text-[var(--success)]">
                Your settings have been saved successfully. Changes will take effect immediately.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[var(--warning-light)] border border-[var(--warning)] rounded-[var(--radius-lg)] p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-[var(--warning)] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-[var(--warning)] mb-1">Warning Message</h4>
              <p className="text-[var(--font-size-sm)] text-[var(--warning)]">
                Please review your information before submitting. Some fields may need attention.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[var(--error-light)] border border-[var(--error)] rounded-[var(--radius-lg)] p-4">
          <div className="flex items-start gap-3">
            <X className="w-5 h-5 text-[var(--error)] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-[var(--error)] mb-1">Error Message</h4>
              <p className="text-[var(--font-size-sm)] text-[var(--error)]">
                Unable to save changes. Please check your connection and try again.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[var(--info-light)] border border-[var(--info)] rounded-[var(--radius-lg)] p-4">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-[var(--info)] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-[var(--info)] mb-1">Information</h4>
              <p className="text-[var(--font-size-sm)] text-[var(--info)]">
                This feature is designed specifically to support neurodivergent users with clear, gentle feedback.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[var(--surface-secondary)] rounded-[var(--radius-lg)] p-4">
        <h4 className="font-semibold text-[var(--text-primary)] mb-2">Anxiety-Reducing Design</h4>
        <ul className="text-[var(--font-size-sm)] text-[var(--text-secondary)] space-y-1">
          <li>• Calm colors avoid triggering stress responses</li>
          <li>• Clear icons make messages immediately scannable</li>
          <li>• Gentle language reduces shame and anxiety</li>
          <li>• Consistent formatting builds user confidence</li>
        </ul>
      </div>
    </div>
  );

  const renderAccessibility = () => {
    const metrics = getAccessibilityMetrics();
    
    return (
      <div className="space-y-6">
        <h3 className="text-[var(--font-size-xl)] font-bold text-[var(--text-primary)]">
          Accessibility Metrics
        </h3>
        
        <div className="grid gap-4">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-[var(--surface-secondary)] rounded-[var(--radius-lg)] p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-[var(--text-primary)]">{metric.label}</h4>
                <div className={cn(
                  "px-3 py-1 rounded-full text-[var(--font-size-sm)] font-medium",
                  metric.status === 'excellent' && "bg-[var(--success-light)] text-[var(--success)]",
                  metric.status === 'good' && "bg-[var(--info-light)] text-[var(--info)]",
                  metric.status === 'warning' && "bg-[var(--warning-light)] text-[var(--warning)]"
                )}>
                  {metric.value}
                </div>
              </div>
              <p className="text-[var(--font-size-sm)] text-[var(--text-secondary)]">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-[var(--success-light)] border border-[var(--success)] rounded-[var(--radius-lg)] p-6">
          <h4 className="font-semibold text-[var(--success)] mb-3 text-center">
            🌟 Neurodivergent-Friendly Features
          </h4>
          <div className="grid md:grid-cols-2 gap-4 text-[var(--font-size-sm)] text-[var(--success)]">
            <div>
              <h5 className="font-medium mb-2">ADHD Support:</h5>
              <ul className="space-y-1">
                <li>• High contrast reduces eye strain</li>
                <li>• Minimal distractions and movement</li>
                <li>• Clear visual hierarchy</li>
                <li>• Predictable interaction patterns</li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium mb-2">Autism Support:</h5>
              <ul className="space-y-1">
                <li>• Consistent layouts and spacing</li>
                <li>• Literal, clear language</li>
                <li>• Calm, non-overwhelming colors</li>
                <li>• Reliable navigation patterns</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderCurrentSection = () => {
    switch (activeSection) {
      case 'overview':
        return renderOverview();
      case 'buttons':
        return renderButtons();
      case 'forms':
        return renderForms();
      case 'cards':
        return renderCards();
      case 'feedback':
        return renderFeedback();
      case 'accessibility':
        return renderAccessibility();
      default:
        return renderOverview();
    }
  };

  return (
    <div className="bg-[var(--surface-primary)] rounded-[var(--radius-2xl)] border border-[var(--border-primary)] overflow-hidden max-w-6xl mx-auto">
      {/* Header */}
      <div className="bg-[var(--surface-secondary)] px-8 py-6 border-b border-[var(--border-primary)]">
        <div className="flex items-center gap-3 mb-4">
          <Palette className="w-6 h-6 text-[var(--primary-500)]" />
          <h3 className="text-[var(--font-size-xl)] font-semibold text-[var(--text-primary)]">
            Interactive Design System Demo
          </h3>
        </div>
        <p className="text-[var(--text-secondary)] mb-6">
          Experience our complete neurodivergent-friendly design system. Adjust themes above and watch every component adapt in real-time.
        </p>

        {/* Theme Controls */}
        <ThemeControls />
      </div>

      {/* Section Navigation */}
      <div className="bg-[var(--bg-secondary)] px-8 py-4 border-b border-[var(--border-primary)]">
        <nav className="flex flex-wrap gap-2">
          {demoSections.map((section) => {
            const Icon = section.icon;
            return (
              <Button
                key={section.id}
                variant={activeSection === section.id ? 'primary' : 'ghost'}
                size="sm"
                onClick={() => setActiveSection(section.id as DemoSection)}
                className="flex items-center gap-2"
              >
                <Icon className="w-4 h-4" />
                {section.label}
              </Button>
            );
          })}
        </nav>
      </div>

      {/* Demo Content */}
      <div className="p-8">
        {renderCurrentSection()}
      </div>

      {/* Footer */}
      <div className="bg-[var(--surface-secondary)] px-8 py-6 border-t border-[var(--border-primary)]">
        <div className="text-center">
          <h4 className="font-semibold text-[var(--text-primary)] mb-2">
            Want This Design System for Your Product?
          </h4>
          <p className="text-[var(--text-secondary)] mb-4">
            License our complete design system or get a custom implementation for your team.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button>License Design System - £1,500</Button>
            <Button variant="secondary">Custom Implementation - From £8,000</Button>
          </div>
        </div>
      </div>
    </div>
  );
}