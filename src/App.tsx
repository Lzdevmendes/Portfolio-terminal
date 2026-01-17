import { Terminal } from "./components/Terminal/Terminal";

export default function App() {
  return (
    <>
        
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded text-terminal font-bold"
        style={{ 
          background: 'var(--color-accent-primary)',
          color: 'var(--color-bg-primary)',
        }}
      >
        Pular para o conteúdo principal
      </a>

      <div id="main-content">
        <Terminal />
      </div>
    </>
  );
}
