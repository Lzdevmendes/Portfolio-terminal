import { useState } from "react";
import type { KeyboardEvent } from "react";
import { projects } from "../../data/projects";

type Section = "about" | "skills" | "projects" | "contact" | null;

export function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([
    "Bem-vindo ao portfólio interativo.",
    "Digite 'help' para explorar comandos."
  ]);

  const [activeSection, setActiveSection] = useState<Section>(null);
  const skills = [
    "React",
    "TypeScript",
    "Node.js",
    "Java",
    "PostgreSQL",
    "Docker",
  ];

  function handleCommand(command: string) {
    const cmd = command.toLowerCase().trim();

    // Echo do comando
    setHistory((prev) => [...prev, `> ${cmd}`]);

    if (cmd === "help") {
      setHistory((prev) => [
        ...prev,
        "Comandos disponíveis:",
        "about | skills | projects | contact | clear"
      ]);
      return;
    }

    if (cmd === "clear") {
      setHistory([]);
      setActiveSection(null);
      return;
    }

    if (["about", "skills", "projects", "contact"].includes(cmd)) {
      setActiveSection(cmd as Section);
      return;
    }

    setHistory((prev) => [
      ...prev,
      "Comando não reconhecido. Digite 'help'."
    ]);
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && input.trim()) {
      handleCommand(input);
      setInput("");
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Terminal */}
      <div className="flex-1 p-4 sm:p-8 font-mono text-xs sm:text-sm overflow-y-auto leading-relaxed">
        {history.map((line, index) => (
          <div key={index} className="leading-relaxed">
            {line}
          </div>
        ))}
      </div>

      {/* Conteúdo Dinâmico */}
      <div className="border-t border-slate-800 p-4 sm:p-6">
        {activeSection === "about" && (
          <div>
            <h2 className="text-lg text-emerald-400 mb-2">Sobre</h2>
            <p className="text-slate-300 text-sm">
              Desenvolvedor orientado a produto, com foco em arquitetura limpa e
              interfaces modernas com motion e compatibilidade total entre
              mobile e desktop.
            </p>
          </div>
        )}

        {activeSection === "skills" && (
          <div>
            <h2 className="text-lg text-emerald-400 mb-2">Skills</h2>
            <ul className="grid grid-cols-2 gap-2 text-slate-300 text-sm">
              {skills.map((skill) => (
                <li key={skill} className="border border-slate-800 rounded px-2 py-1">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeSection === "projects" && (
          <div>
            <h2 className="text-lg text-emerald-400 mb-2">Projetos</h2>
            <ul className="space-y-2 text-slate-300 text-sm">
              {projects.slice(0, 3).map((project) => (
                <li key={project.id} className="border border-slate-800 rounded px-3 py-2">
                  <p className="font-semibold">{project.title}</p>
                  <p className="text-slate-400">{project.description}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeSection === "contact" && (
          <div>
            <h2 className="text-lg text-emerald-400 mb-2">Contato</h2>
            <div className="flex flex-wrap gap-3 text-sm text-slate-300">
              <span className="border border-slate-800 rounded px-3 py-1">
                GitHub
              </span>
              <span className="border border-slate-800 rounded px-3 py-1">
                LinkedIn
              </span>
              <span className="border border-slate-800 rounded px-3 py-1">
                Email
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="flex items-center gap-3 border-t border-slate-800 bg-slate-950/40 backdrop-blur px-4 sm:px-6 py-4">
        <span className="text-emerald-400">$</span>
        <input
          className="flex-1 bg-transparent outline-none text-slate-100 text-sm"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      </div>
    </div>
  );
}
