import type { ButtonHTMLAttributes } from 'react';

interface TerminalButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary';
  children: React.ReactNode;
}

export function TerminalButton({ 
  variant = 'default', 
  children, 
  className = '',
  ...props 
}: TerminalButtonProps) {
  const baseClass = 'terminal-button text-terminal';
  const variantClass = variant === 'primary' ? 'terminal-button-primary' : '';
  
  return (
    <button 
      className={`${baseClass} ${variantClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
