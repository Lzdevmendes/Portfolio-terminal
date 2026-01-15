import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { Contact } from "./sections/Contact";
import { useScrollToSection } from "../hooks/useScrollToSection";

const navItems = [
  { id: "about", label: "Sobre" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projetos" },
  { id: "contact", label: "Contato" },
];

export function ScrollExperience() {
  const { scrollTo } = useScrollToSection();

  return (
    <div className="min-h-screen">
      <nav className="sticky top-0 z-40 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto max-w-5xl px-4 sm:px-8 py-3 flex gap-2 overflow-x-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="px-3 py-1.5 text-xs sm:text-sm rounded-full border border-slate-700/80 text-slate-300 hover:border-slate-500 hover:text-slate-100 transition whitespace-nowrap"
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
