import type { PropsWithChildren } from 'react';

interface TerminalPanelProps extends PropsWithChildren {
  className?: string;
  onClick?: () => void;
  onMouseEnter?: (e: React.MouseEvent) => void;
  onMouseLeave?: (e: React.MouseEvent) => void;
}

export function TerminalPanel({ 
  children, 
  className = '',
  ...props 
}: TerminalPanelProps) {
  return (
    <div className={`terminal-panel ${className}`} {...props}>
      {children}
    </div>
  );
}
