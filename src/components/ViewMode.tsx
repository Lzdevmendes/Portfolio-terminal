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
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          localStorage.removeItem('terminal-viewMode');
          onClose();
        }}
        className="fixed top-4 right-4 sm:top-6 sm:right-6 px-6 py-2.5 text-sm font-bold transition-all hover:scale-105 hover:brightness-125 cursor-pointer"
        aria-label="Voltar ao terminal"
        style={{
          zIndex: 9999,
          background: 'rgba(10, 10, 15, 0.9)',
          backdropFilter: 'blur(8px)',
          color: '#60a5fa',
          border: '2px solid #3b82f6',
          borderRadius: '6px',
          boxShadow: `
            0 0 20px rgba(59, 130, 246, 0.5),
            0 0 40px rgba(59, 130, 246, 0.3),
            0 4px 12px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(96, 165, 250, 0.2)
          `,
          pointerEvents: 'auto',
          fontFamily: 'var(--terminal-font)',
          transition: 'all 0.3s ease',
          textShadow: '0 0 8px rgba(96, 165, 250, 0.8)'
        }}
      >
        ← terminal
      </button>

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
