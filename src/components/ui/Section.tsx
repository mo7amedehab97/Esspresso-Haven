import React from 'react';
import { clsx } from 'clsx';

interface SectionProps {
  children: React.ReactNode;
  variant?: 'default' | 'gradient';
  className?: string;
}

export function Section({ 
  children, 
  variant = 'default', 
  className 
}: SectionProps) {
  const baseClasses = 'py-16 lg:py-24';
  
  const variantClasses = {
    default: 'bg-white',
    gradient: 'bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary-light)] to-[var(--color-primary-lighter)]'
  };

  return (
    <section className={clsx(
      baseClasses,
      variantClasses[variant],
      className
    )}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
} 