import { motion } from "framer-motion";
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

const backgroundOrbs = [
  {
    id: "emerald",
    className:
      "absolute -top-32 right-[-10%] h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl",
  },
  {
    id: "indigo",
    className:
      "absolute top-1/2 left-[-20%] h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl",
  },
  {
    id: "sky",
    className:
      "absolute bottom-0 right-[-10%] h-72 w-72 rounded-full bg-sky-500/10 blur-3xl",
  },
];

export function ScrollExperience() {
  const { scrollTo } = useScrollToSection();

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        {backgroundOrbs.map((orb) => (
          <div key={orb.id} className={orb.className} />
        ))}
      </div>

      <nav className="sticky top-0 z-40 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto max-w-5xl px-4 sm:px-8 py-3 flex gap-2 overflow-x-auto">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="px-3 py-1.5 text-xs sm:text-sm rounded-full border border-slate-700/80 bg-slate-900/40 text-slate-200 hover:border-slate-500 hover:text-slate-100 transition whitespace-nowrap"
            >
              {item.label}
            </motion.button>
          ))}
        </div>
      </nav>

      <div className="relative z-10">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
