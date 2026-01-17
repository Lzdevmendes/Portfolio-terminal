/**
 * ViewMode Component
 * Exibição fluida de todas as seções em modo scroll
 */

import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { Contact } from "./sections/Contact";

interface ViewModeProps {
  onClose: () => void;
}

export function ViewMode({ onClose }: ViewModeProps) {
  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto scanlines-overlay"
      style={{ 
        background: 'var(--color-bg-primary)',
        color: 'var(--color-text-primary)',
        fontFamily: 'var(--terminal-font)',
        transition: 'background-color 0.3s ease, color 0.3s ease'
      }}
    >
      {/* Botão fixo no canto superior direito - estilo terminal */}
      <button
        onClick={() => {
          localStorage.setItem('terminal-viewMode', 'false');
          onClose();
        }}
        className="fixed top-4 right-4 sm:top-6 sm:right-6 px-4 py-2 text-sm font-bold rounded transition-all hover:scale-105 cursor-pointer"
        aria-label="Voltar ao terminal"
        style={{
          zIndex: 9999,
          background: 'var(--color-bg-elevated)',
          color: 'var(--color-accent-primary)',
          border: '1px solid var(--color-accent-primary)',
          boxShadow: `0 0 12px var(--color-accent-primary), 0 4px 6px -1px rgba(0, 0, 0, 0.3)`,
          pointerEvents: 'auto',
          fontFamily: 'var(--terminal-font)',
          transition: 'all 0.2s ease'
        }}
      >
        ← terminal
      </button>

      {/* Conteúdo scrollável com padding consistente ao terminal */}
      <main 
        className="px-4 sm:px-6 md:px-8 py-12 sm:py-16 max-w-5xl w-full mx-auto"
        style={{ 
          scrollBehavior: 'smooth',
          lineHeight: '1.65'
        }}
      >
        <div className="space-y-20 sm:space-y-24">
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </main>
    </div>
  );
}
