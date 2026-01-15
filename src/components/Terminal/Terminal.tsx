import { useState } from "react";
import type { KeyboardEvent } from "react";

type Section = "about" | "skills" | "projects" | "contact" | null;

export function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([
    "Bem-vindo ao meu portfólio.",
    "Digite 'help' para começar."
  ]);

  const [activeSection, setActiveSection] = useState<Section>(null);

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
      <div className="flex-1 p-8 font-mono text-sm overflow-y-auto leading-relaxed">
        {history.map((line, index) => (
          <div key={index} className="leading-relaxed">
            {line}
          </div>
        ))}
      </div>

      {/* Conteúdo Dinâmico */}
      <div className="border-t border-slate-800 p-6">
        {activeSection === "about" && (
          <div>
            <h2 className="text-lg text-emerald-400 mb-2">Sobre</h2>
            <p className="text-slate-300">
              Aqui você poderá escrever sobre você, sua trajetória,
              objetivos e estilo de trabalho.
            </p>
          </div>
        )}

        {activeSection === "skills" && (
          <div>
            <h2 className="text-lg text-emerald-400 mb-2">Skills</h2>
            <p className="text-slate-300">
              Liste aqui suas tecnologias, frameworks e ferramentas.
            </p>
          </div>
        )}

        {activeSection === "projects" && (
          <div>
            <h2 className="text-lg text-emerald-400 mb-2">Projetos</h2>
            <p className="text-slate-300">
              Você pode criar cards ou lista dos seus 5 projetos aqui.
            </p>
          </div>
        )}

        {activeSection === "contact" && (
          <div>
            <h2 className="text-lg text-emerald-400 mb-2">Contato</h2>
            <p className="text-slate-300">
              Email, LinkedIn, GitHub, etc.
            </p>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="flex items-center gap-3 border-t border-slate-800 bg-slate-950/40 backdrop-blur px-6 py-4">
        <span className="text-emerald-400">$</span>
        <input
          className="flex-1 bg-transparent outline-none text-slate-100"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      </div>
    </div>
  );
}
