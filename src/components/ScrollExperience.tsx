import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { Contact } from "./sections/Contact";
import { Navigation } from "./Navigation";

export function ScrollExperience() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

