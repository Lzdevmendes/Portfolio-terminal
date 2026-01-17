import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { Contact } from "./sections/Contact";
import { Navigation } from "./Navigation";
import { ScrollProgress } from "./ScrollProgress";
import { useKeyboardNavigation } from "../hooks/useKeyboardNavigation";
import { NAV_ITEMS } from "../constants";

export function ScrollExperience() {
  // Enable keyboard navigation
  useKeyboardNavigation({ sections: NAV_ITEMS, enabled: true });

  return (
    <>
      <ScrollProgress />
      <Navigation />
      <main 
        className="pt-16 pb-12 px-4 sm:px-6 md:px-8 max-w-5xl w-full mx-auto text-terminal"
        style={{ background: 'var(--color-bg-primary)' }}
        role="main" 
        aria-label="Conteúdo principal"
      >
        <div className="space-y-12 sm:space-y-16">
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </main>
    </>
  );
}

