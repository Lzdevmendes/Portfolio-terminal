import { TerminalPanel } from './ui/TerminalPanel';

interface Props {
  onSelect: (value: "terminal" | "scroll") => void;
}

export function ExperienceSelector({ onSelect }: Props) {
  return (
    <div 
      className="min-h-screen w-full flex items-center justify-center p-2 sm:p-4 md:p-8"
      style={{ background: 'var(--color-bg-primary)' }}
    >
      {/* Terminal Window */}
      <div 
        className="terminal-window-frame w-full max-w-2xl flex flex-col rounded-none sm:rounded-lg"
      >
        {/* Title Bar */}
        <header className="terminal-header flex items-center justify-between px-3 py-2 sm:px-4 sm:py-2.5">
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Traffic Lights */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="traffic-light traffic-light-red" />
              <span className="traffic-light traffic-light-yellow" />
              <span className="traffic-light traffic-light-green" />
            </div>
            
            {/* Title */}
            <span className="text-terminal text-xs-mono" style={{ color: 'var(--color-text-secondary)' }}>
              welcome.sh
            </span>
          </div>
        </header>

        {/* Terminal Body */}
        <main 
          className="p-4 sm:p-6 text-terminal text-sm-mono"
          style={{ background: 'var(--color-bg-secondary)' }}
        >
          {/* Welcome Message */}
          <div className="space-y-1 mb-6">
            <p style={{ color: 'var(--color-text-tertiary)' }}>$ whoami</p>
            <p className="text-lg sm:text-xl font-bold" style={{ color: 'var(--color-accent-primary)' }}>
              Luiz Mendes
            </p>
            <p className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>
              Full Stack Developer • React Specialist
            </p>
          </div>

          {/* Prompt */}
          <div className="space-y-1 mb-6">
            <p style={{ color: 'var(--color-text-tertiary)' }}>$ cat experience.txt</p>
            <p className="text-xs sm:text-sm" style={{ color: 'var(--color-text-primary)' }}>
              Escolha sua experiência de navegação:
            </p>
          </div>

          {/* Options */}
          <div className="space-y-3">
            <TerminalPanel 
              className="p-3 sm:p-4 cursor-pointer transition-transform hover:scale-[1.02] active:scale-[0.98] hover:border-emerald-500"
              onClick={() => onSelect("terminal")}
            >
              <div className="flex items-center gap-3">
                <span className="text-xl sm:text-2xl">⚡</span>
                <div>
                  <p className="font-bold text-sm sm:text-base" style={{ color: 'var(--color-accent-primary)' }}>
                    Terminal Experience
                  </p>
                  <p className="text-xs" style={{ color: 'var(--color-text-tertiary)' }}>
                    Interação via linha de comando
                  </p>
                </div>
              </div>
            </TerminalPanel>

            <TerminalPanel 
              className="p-3 sm:p-4 cursor-pointer transition-transform hover:scale-[1.02] active:scale-[0.98] hover:border-blue-500"
              onClick={() => onSelect("scroll")}
            >
              <div className="flex items-center gap-3">
                <span className="text-xl sm:text-2xl">🎨</span>
                <div>
                  <p className="font-bold text-sm sm:text-base" style={{ color: 'var(--color-accent-secondary)' }}>
                    Scroll Experience
                  </p>
                  <p className="text-xs" style={{ color: 'var(--color-text-tertiary)' }}>
                    Navegação tradicional fluída
                  </p>
                </div>
              </div>
            </TerminalPanel>
          </div>

          {/* Footer */}
          <div className="mt-6 pt-4" style={{ borderTop: '1px solid var(--color-border-default)' }}>
            <p className="text-xs flex items-center gap-2" style={{ color: 'var(--color-text-tertiary)' }}>
              <span style={{ color: 'var(--color-accent-primary)' }}>$</span>
              <span className="animate-pulse">_</span>
              <span style={{ color: 'var(--color-text-tertiary)' }}>
                você pode trocar o modo a qualquer momento
              </span>
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

