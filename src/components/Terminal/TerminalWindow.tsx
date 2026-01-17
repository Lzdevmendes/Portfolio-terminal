import { useTerminalTheme } from "./ThemeContext";
import type { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  hostname?: string;
}>;

export function TerminalWindow({ children, hostname = "luizmendes@portfolio" }: Props) {
  const { theme, setTheme } = useTerminalTheme();

  return (
    <div 
      className="min-h-screen w-full flex items-center justify-center p-4 sm:p-6 md:p-8 scanlines-overlay"
      style={{ 
        background: 'var(--color-bg-primary)',
        transition: 'background-color 0.3s ease' 
      }}
    >
      <div 
        className="terminal-window-frame w-full max-w-5xl h-[92vh] sm:h-[88vh] md:h-[82vh] flex flex-col rounded-lg"
        style={{ 
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.7), 0 0 0 1px var(--color-border-muted)',
          background: 'var(--color-bg-secondary)',
          borderRadius: theme === 'retro' ? '0.375rem' : '0.5rem',
          transition: 'all 0.3s ease'
        }}
      >
        <header 
          className="terminal-header flex items-center justify-between px-3 py-2 sm:px-4 sm:py-2.5 shrink-0"
          style={{
            background: 'var(--color-bg-elevated)',
            borderBottom: `1px solid var(--color-border-default)`,
            borderTopLeftRadius: theme === 'retro' ? '0.375rem' : '0.5rem',
            borderTopRightRadius: theme === 'retro' ? '0.375rem' : '0.5rem',
            transition: 'background-color 0.3s ease'
          }}
        >
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <button 
                aria-label="Fechar"
                className="w-3 h-3 rounded-full transition-transform hover:scale-110"
                style={{ 
                  background: 'var(--traffic-light-red)',
                  border: '1px solid rgba(0, 0, 0, 0.2)',
                  boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                }}
              />
              <button 
                aria-label="Minimizar"
                className="w-3 h-3 rounded-full transition-transform hover:scale-110"
                style={{ 
                  background: 'var(--traffic-light-yellow)',
                  border: '1px solid rgba(0, 0, 0, 0.2)',
                  boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                }}
              />
              <button 
                aria-label="Maximizar"
                className="w-3 h-3 rounded-full transition-transform hover:scale-110"
                style={{ 
                  background: 'var(--traffic-light-green)',
                  border: '1px solid rgba(0, 0, 0, 0.2)',
                  boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                }}
              />
            </div>

            <div 
              className="hidden sm:flex items-center gap-2 px-3 py-1 rounded text-xs text-terminal"
              style={{ 
                background: 'var(--color-bg-secondary)', 
                border: '1px solid var(--color-border-default)',
                transition: 'all 0.3s ease'
              }}
            >
              <span style={{ color: 'var(--color-accent-primary)' }}>⚡</span>
              <span style={{ color: 'var(--color-text-primary)' }}>{hostname}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs-mono hidden sm:inline" style={{ color: 'var(--color-text-tertiary)' }}>
              theme:
            </span>
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value as any)}
              className="text-xs-mono px-2 py-1 rounded cursor-pointer focus:outline-none transition-all"
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

        <main 
          className="flex-1 flex flex-col overflow-hidden"
          style={{ 
            background: 'var(--color-bg-secondary)',
            transition: 'background-color 0.3s ease'
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
