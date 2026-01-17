import { useState } from "react";
import { motion } from "framer-motion";
import { ExperienceSelector } from "./components/ExperienceSelector";
import { Terminal } from "./components/Terminal/Terminal";
import { ScrollExperience } from "./components/ScrollExperience";
import type { Experience } from "./types";

export default function App() {
  const [experience, setExperience] = useState<Experience>(() => {
    return localStorage.getItem("experience") as Experience;
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
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-emerald-500 focus:text-slate-950 focus:rounded-md focus:font-bold"
      >
        Pular para o conteúdo principal
      </a>

      <motion.button
        onClick={resetExperience}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed top-4 right-4 z-50 px-4 py-2 text-xs rounded-md border border-slate-700 text-slate-300 hover:bg-slate-800 hover:border-emerald-500/50 transition-all focus-terminal"
        aria-label="Trocar modo de visualização"
      >
        Trocar modo
      </motion.button>

      <div id="main-content">
        {experience === "terminal" ? <Terminal /> : <ScrollExperience />}
      </div>
    </>
  );
}
