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
      <main className="pt-16" role="main" aria-label="Conteúdo principal">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

