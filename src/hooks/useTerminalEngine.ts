import { useState, useCallback, useRef } from "react";
import type { TerminalTheme } from "../components/Terminal/ThemeContext";

export type TerminalCommand = "about" | "skills" | "projects" | "contact" | "help" | "clear" | "theme" | "view";
export type OutputType = "command" | "success" | "error" | "info" | "warning" | "section";

const AVAILABLE_COMMANDS: TerminalCommand[] = ["about", "skills", "projects", "contact", "help", "clear", "theme", "view"];
const VALID_THEMES = ["ubuntu", "windows", "retro"];

export type HistoryEntry = {
  text: string;
  type: OutputType;
};

type CommandResult = {
  output: HistoryEntry[];
  section?: "about" | "skills" | "projects" | "contact" | "view" | null;
};

interface UseTerminalEngineOptions {
  onThemeChange?: (theme: TerminalTheme) => void;
}

export function useTerminalEngine(options?: UseTerminalEngineOptions) {
  const [history, setHistory] = useState<HistoryEntry[]>([
    { text: "Bem-vindo ao meu portfólio.", type: "info" },
    { text: "Digite 'help' para começar.", type: "info" }
  ]);

  const [isProcessing, setIsProcessing] = useState(false);
  const [activeSection, setActiveSection] = useState<"about" | "skills" | "projects" | "contact" | "view" | null>(null);
  const commandHistoryRef = useRef<string[]>([]);
  const historyIndexRef = useRef<number>(-1);

  const getAutocompleteOptions = useCallback((input: string): string[] => {
    if (!input.trim()) return [];

    const parts = input.toLowerCase().trim().split(/\s+/);
    const currentWord = parts[parts.length - 1];
    const isFirstWord = parts.length === 1;

    if (isFirstWord) {
      return AVAILABLE_COMMANDS.filter((cmd) => cmd.startsWith(currentWord));
    }

    const firstWord = parts[0];
    if (firstWord === "theme") {
      return VALID_THEMES.filter((t) => t.startsWith(currentWord));
    }

    return [];
  }, []);

  const parseCommand = useCallback((input: string): CommandResult => {
    const parts = input.toLowerCase().trim().split(/\s+/);
    const cmd = parts[0] as TerminalCommand;

    if (cmd === "theme") {
      const theme = parts[1] as TerminalTheme | undefined;
      if (!theme) {
        return {
          output: [
            { text: "❌ Uso: theme <ubuntu|windows|retro>", type: "error" },
            { text: "Exemplo: theme ubuntu", type: "info" }
          ]
        };
      }
      if (!VALID_THEMES.includes(theme)) {
        return {
          output: [
            { text: `❌ Tema inválido. Opções: ${VALID_THEMES.join(", ")}`, type: "error" }
          ]
        };
      }
      options?.onThemeChange?.(theme);
      return {
        output: [
          { text: `✅ Tema alterado para '${theme}'`, type: "success" }
        ]
      };
    }

    if (cmd === "help") {
      return {
        output: [
          { text: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━", type: "info" },
          { text: "📋 Comandos disponíveis:", type: "section" },
          { text: "  • about    - Sobre mim", type: "info" },
          { text: "  • skills   - Minhas habilidades", type: "info" },
          { text: "  • projects - Projetos em destaque", type: "info" },
          { text: "  • contact  - Entre em contato", type: "info" },
          { text: "  • view     - Ver tudo de forma fluída", type: "info" },
          { text: "  • theme    - Mudar tema (ubuntu|windows|retro)", type: "info" },
          { text: "  • clear    - Limpar terminal / limpar histórico e terminal (all)", type: "info" },
          { text: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━", type: "info" }
        ]
      };
    }

    if (cmd === "clear") {
      const clearAll = parts[1] === "all";
      if (clearAll) {
        commandHistoryRef.current = [];
        historyIndexRef.current = -1;
      }
      return {
        output: [],
        section: null
      };
    }

    if (cmd === "view") {
      return {
        output: [
          { text: "✨ Abrindo visualização completa...", type: "success" }
        ],
        section: "view"
      };
    }

    if (["about", "skills", "projects", "contact"].includes(cmd)) {
      return {
        output: [
          { text: `📂 Carregando ${cmd}...`, type: "info" }
        ],
        section: cmd as "about" | "skills" | "projects" | "contact"
      };
    }

    return {
      output: [
        { text: "❌ Comando não reconhecido. Digite 'help'.", type: "error" }
      ]
    };
  }, [options]);

  const executeCommand = useCallback((input: string) => {
    setIsProcessing(true);

    commandHistoryRef.current.push(input);
    historyIndexRef.current = commandHistoryRef.current.length;

    setHistory((prev) => [...prev, { text: `> ${input}`, type: "command" }]);

    setTimeout(() => {
      const result = parseCommand(input);

      if (result.output.length > 0 || result.section === null) {
        setHistory((prev) => [...prev, ...result.output]);
      }

      if (result.section !== undefined) {
        setActiveSection(result.section);
      }

      setIsProcessing(false);
    }, 300);
  }, [parseCommand]);

  const clearHistory = useCallback(() => {
    setHistory([]);
    setActiveSection(null);
  }, []);

  const clearActiveSection = useCallback(() => {
    setActiveSection(null);
  }, []);

  const getPreviousCommand = useCallback((): string | null => {
    if (historyIndexRef.current > 0) {
      historyIndexRef.current--;
      return commandHistoryRef.current[historyIndexRef.current] || null;
    }
    return null;
  }, []);

  const getNextCommand = useCallback((): string | null => {
    if (historyIndexRef.current < commandHistoryRef.current.length - 1) {
      historyIndexRef.current++;
      return commandHistoryRef.current[historyIndexRef.current] || null;
    }
    historyIndexRef.current = commandHistoryRef.current.length;
    return null;
  }, []);

  return {
    history,
    isProcessing,
    activeSection,
    executeCommand,
    clearHistory,
    clearActiveSection,
    getPreviousCommand,
    getNextCommand,
    getAutocompleteOptions
  };
}
