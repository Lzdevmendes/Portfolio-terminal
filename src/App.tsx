import { useState } from "react";
import { Terminal } from "./components/Terminal/Terminal";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";

type Section = "about" | "skills" | "projects" | "contact" | null;

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>(null);

  return (
    <div className="app">
      <Terminal onSectionChange={setActiveSection} />

      <div className="content">
        {activeSection === "about" && <About />}
        {activeSection === "skills" && <Skills />}
        {activeSection === "projects" && <Projects />}
        {activeSection === "contact" && <Contact />}
      </div>
    </div>
  );
}
