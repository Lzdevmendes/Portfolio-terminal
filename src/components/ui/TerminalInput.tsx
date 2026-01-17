import { forwardRef, type InputHTMLAttributes } from 'react';

interface TerminalInputProps extends InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
}

export const TerminalInput = forwardRef<HTMLInputElement, TerminalInputProps>(
  ({ fullWidth = false, className = '', ...props }, ref) => {
    const widthClass = fullWidth ? 'w-full' : '';
    
    return (
      <input
        ref={ref}
        className={`terminal-input text-terminal ${widthClass} ${className}`}
        {...props}
      />
    );
  }
);

TerminalInput.displayName = 'TerminalInput';
