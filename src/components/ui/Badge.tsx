import React from 'react';
import { clsx } from 'clsx';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  className?: string;
}

export function Badge({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon, 
  className 
}: BadgeProps) {
  const baseClasses = 'inline-flex items-center gap-2 font-medium rounded-full';
  
  const variantClasses = {
    primary: 'bg-[var(--color-primary)] text-white',
    secondary: 'bg-[var(--color-primary-light)] text-white',
    outline: 'border border-[var(--color-primary)] text-[var(--color-primary)] bg-transparent'
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  };

  return (
    <span className={clsx(
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      className
    )}>
      {icon && icon}
      {children}
    </span>
  );
} 