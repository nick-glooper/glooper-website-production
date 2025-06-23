'use client';

import React from 'react';
import { cn } from '@/utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  asChild?: boolean;
  children: React.ReactNode;
}

const buttonVariants = {
  primary: [
    'bg-[var(--primary-500)] text-[var(--text-inverse)]',
    'hover:bg-[var(--primary-600)] hover:transform hover:-translate-y-0.5',
    'active:bg-[var(--primary-700)] active:transform active:translate-y-0',
    'disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none disabled:bg-[var(--primary-300)]',
    'focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[var(--border-focus)] focus-visible:ring-offset-2',
  ],
  secondary: [
    'bg-transparent text-[var(--primary-500)] border-2 border-[var(--primary-500)]',
    'hover:bg-[var(--primary-50)] hover:border-[var(--primary-600)] hover:text-[var(--primary-600)]',
    'active:bg-[var(--primary-100)]',
    'disabled:opacity-60 disabled:cursor-not-allowed',
    'focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[var(--border-focus)] focus-visible:ring-offset-2',
  ],
  ghost: [
    'bg-transparent text-[var(--text-secondary)] border-none',
    'hover:bg-[var(--bg-secondary)] hover:text-[var(--text-primary)]',
    'active:bg-[var(--bg-tertiary)]',
    'disabled:opacity-60 disabled:cursor-not-allowed',
    'focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[var(--border-focus)] focus-visible:ring-offset-2',
  ],
  destructive: [
    'bg-[var(--error)] text-[var(--text-inverse)]',
    'hover:bg-red-700 hover:transform hover:-translate-y-0.5',
    'active:bg-red-800 active:transform active:translate-y-0',
    'disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none',
    'focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-red-500 focus-visible:ring-offset-2',
  ],
};

const buttonSizes = {
  sm: 'px-[var(--space-4)] py-[var(--space-2)] text-[var(--font-size-sm)] min-h-[36px]',
  md: 'px-[var(--space-6)] py-[var(--space-3)] text-[var(--font-size-base)] min-h-[44px]',
  lg: 'px-[var(--space-8)] py-[var(--space-4)] text-[var(--font-size-lg)] min-h-[52px]',
  xl: 'px-[var(--space-10)] py-[var(--space-5)] text-[var(--font-size-xl)] min-h-[60px]',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = 'primary', 
    size = 'md', 
    fullWidth = false,
    asChild = false,
    disabled,
    children, 
    ...props 
  }, ref) => {
    const baseClassName = cn(
      // Base styles
      'inline-flex items-center justify-center',
      'font-semibold leading-6',
      'rounded-[var(--radius-lg)]',
      'border-none cursor-pointer',
      'transition-all duration-200 ease-out',
      'min-w-[44px]', // Accessibility: minimum touch target
      'text-decoration-none', // For when used as link
      
      // Variant styles
      buttonVariants[variant],
      
      // Size styles
      buttonSizes[size],
      
      // Full width
      fullWidth && 'w-full',
      
      // Disabled state
      disabled && 'pointer-events-none',
      
      className
    );

    if (asChild) {
      return React.cloneElement(children as React.ReactElement, {
        className: cn(baseClassName, (children as React.ReactElement).props.className),
        ref,
      });
    }

    return (
      <button
        className={baseClassName}
        ref={ref}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';