import { useState } from "react";
import { ExperienceSelector } from "./components/ExperienceSelector";
import { Terminal } from "./components/Terminal/Terminal";
import { ScrollExperience } from "./components/ScrollExperience";

type Experience = "terminal" | "scroll" | null;

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
      <button
        onClick={resetExperience}
        className="fixed top-4 right-4 z-50 px-4 py-2 text-xs rounded-md border border-slate-700 text-slate-300 hover:bg-slate-800 transition"
      >
        Trocar modo
      </button>

      {experience === "terminal" ? <Terminal /> : <ScrollExperience />}
    </>
  );
}
