import { useTerminalTheme } from "./ThemeContext";
import { TerminalButton } from "../ui/TerminalButton";
import type { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  hostname?: string;
}>;

export function TerminalWindow({ children, hostname = "luizmendes@portfolio" }: Props) {
  const { theme, setTheme } = useTerminalTheme();

  return (
    <div 
      className="min-h-screen w-full flex items-center justify-center p-4 sm:p-6 md:p-8"
      style={{ background: 'var(--color-bg-primary)' }}
    >
      {/* Terminal Window */}
      <div 
        className="terminal-window-frame w-full max-w-5xl h-[92vh] sm:h-[88vh] md:h-[82vh] flex flex-col rounded-lg"
        style={{ boxShadow: 'var(--shadow-xl), 0 0 0 1px rgba(255, 255, 255, 0.05)' }}
      >
        {/* Title Bar */}
        <header className="terminal-header flex items-center justify-between px-3 py-2 sm:px-4 sm:py-2.5 shrink-0">
          {/* Left: Window Controls */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Traffic Lights */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <button 
                aria-label="Fechar"
                className="traffic-light traffic-light-red"
              />
              <button 
                aria-label="Minimizar"
                className="traffic-light traffic-light-yellow"
              />
              <button 
                aria-label="Maximizar"
                className="traffic-light traffic-light-green"
              />
            </div>
            
            {/* Tab / Title */}
            <div 
              className="hidden sm:flex items-center gap-2 px-3 py-1 rounded text-xs text-terminal"
              style={{ 
                background: 'var(--color-bg-secondary)', 
                border: '1px solid var(--color-border-default)' 
              }}
            >
              <span style={{ color: 'var(--color-accent-primary)' }}>⚡</span>
              <span style={{ color: 'var(--color-text-primary)' }}>{hostname}</span>
            </div>
          </div>

          {/* Right: Theme Selector */}
          <div className="flex items-center gap-2">
            <span className="text-xs-mono hidden sm:inline" style={{ color: 'var(--color-text-tertiary)' }}>
              theme:
            </span>
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value as any)}
              className="text-xs-mono px-2 py-1 rounded cursor-pointer focus:outline-none"
              style={{
                background: 'var(--color-bg-elevated)',
                color: 'var(--color-text-primary)',
                border: '1px solid var(--color-border-default)',
              }}
              aria-label="Selecionar tema"
            >
              <option value="ubuntu">ubuntu</option>
              <option value="windows">windows</option>
              <option value="retro">retro</option>
            </select>
          </div>
        </header>

        {/* Terminal Body */}
        <main 
          className="flex-1 flex flex-col overflow-hidden"
          style={{ background: 'var(--color-bg-secondary)' }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
