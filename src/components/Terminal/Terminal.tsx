import { useState } from "react";
import type { KeyboardEvent } from "react";

type Section = "about" | "skills" | "projects" | "contact" | null;

interface TerminalProps {
  onSectionChange: (section: Section) => void;
}

export function Terminal({ onSectionChange }: TerminalProps) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([
    "Bem-vindo ao meu portfólio.",
    "Digite 'help' para começar."
  ]);

  function handleCommand(command: string) {
    const cmd = command.toLowerCase().trim();

    if (cmd === "help") {
      setHistory((prev) => [
        ...prev,
        "> help",
        "Comandos disponíveis:",
        "about | skills | projects | contact | clear"
      ]);
      return;
    }

    if (cmd === "clear") {
      setHistory([]);
      onSectionChange(null);
      return;
    }

    if (["about", "skills", "projects", "contact"].includes(cmd)) {
      setHistory((prev) => [...prev, `> ${cmd}`]);
      onSectionChange(cmd as Section);
      return;
    }

    setHistory((prev) => [...prev, `> ${cmd}`, "Comando não reconhecido."]);
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      handleCommand(input);
      setInput("");
    }
  }

  return (
    <div className="terminal">
      <div className="terminal-history">
        {history.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>

      <div className="terminal-input">
        <span>$</span>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      </div>
    </div>
  );
}
