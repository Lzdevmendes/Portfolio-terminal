import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
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
    animation: { scale: [1, 1.12, 1], opacity: [0.25, 0.55, 0.25] },
    transition: { duration: 18, repeat: Infinity },
  },
  {
    id: "indigo",
    className:
      "absolute top-1/2 left-[-20%] h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl",
    animation: { scale: [1, 1.08, 1], opacity: [0.2, 0.5, 0.2] },
    transition: {
      duration: 16,
      repeat: Infinity,
      delay: 1,
    },
  },
  {
    id: "sky",
    className:
      "absolute bottom-0 right-[-10%] h-72 w-72 rounded-full bg-sky-500/10 blur-3xl",
    animation: { scale: [1, 1.1, 1], opacity: [0.2, 0.45, 0.2] },
    transition: {
      duration: 20,
      repeat: Infinity,
      delay: 0.5,
    },
  },
];

export function ScrollExperience() {
  const { scrollTo } = useScrollToSection();
  const shouldReduceMotion = useReducedMotion();
  const [activeSection, setActiveSection] = useState(navItems[0].id);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        {backgroundOrbs.map((orb) => (
          <motion.div
            key={orb.id}
            className={orb.className}
            animate={shouldReduceMotion ? undefined : orb.animation}
            transition={orb.transition}
          />
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
              aria-current={activeSection === item.id ? "page" : undefined}
              className={`px-3 py-1.5 text-xs sm:text-sm rounded-full border transition whitespace-nowrap ${
                activeSection === item.id
                  ? "border-emerald-400/80 bg-emerald-500/10 text-emerald-100"
                  : "border-slate-700/80 bg-slate-900/40 text-slate-200 hover:border-slate-500 hover:text-slate-100"
              }`}
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
