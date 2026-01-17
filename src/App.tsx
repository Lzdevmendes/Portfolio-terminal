import { useState } from "react";
import { TerminalButton } from "./components/ui/TerminalButton";
import { ExperienceSelector } from "./components/ExperienceSelector";
import { Terminal } from "./components/Terminal/Terminal";
import { ScrollExperience } from "./components/ScrollExperience";
import type { Experience } from "./types";

export default function App() {
  const [experience, setExperience] = useState<Experience>(() => {
    const stored = localStorage.getItem("experience");
    return (stored === "terminal" || stored === "scroll") ? stored : null;
  });

  function handleSelect(value: Experience) {
    localStorage.setItem("experience", value!);
    setExperience(value);
  }

  function resetExperience() {
    localStorage.removeItem("experience");
    setExperience(null);
  }

  if (!experience) {
    return <ExperienceSelector onSelect={handleSelect} />;
  }

  return (
    <>
      {/* Skip to main content link (accessibility) */}
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

      {/* Mode Switch Button */}
      <TerminalButton
        onClick={resetExperience}
        className="fixed top-3 right-3 sm:top-4 sm:right-4"
        style={{ zIndex: 'var(--z-fixed)' }}
        aria-label="Trocar modo de visualização"
      >
        ← trocar modo
      </TerminalButton>

      <div id="main-content">
        {experience === "terminal" ? <Terminal /> : <ScrollExperience />}
      </div>
    </>
  );
}
