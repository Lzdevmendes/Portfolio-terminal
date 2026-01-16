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
      <motion.button
        onClick={resetExperience}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed top-4 right-4 z-50 px-4 py-2 text-xs rounded-md border border-slate-700 text-slate-300 hover:bg-slate-800 hover:border-emerald-500/50 transition-all"
      >
        Trocar modo
      </motion.button>

      {experience === "terminal" ? <Terminal /> : <ScrollExperience />}
    </>
  );
}
