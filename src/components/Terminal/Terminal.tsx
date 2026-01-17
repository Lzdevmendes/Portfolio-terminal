import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TerminalWindow } from "./TerminalWindow";
import { useTerminalTheme } from "./ThemeContext";
import { useTerminalEngine, type HistoryEntry } from "../../hooks/useTerminalEngine";

function getOutputClassName(type: HistoryEntry["type"]): string {
  switch (type) {
    case "success":
      return "terminal-output-success";
    case "error":
      return "terminal-output-error";
    case "warning":
      return "terminal-output-warning";
    case "section":
      return "terminal-section-header";
    case "command":
      return "terminal-command-echo";
    default:
      return "terminal-output-info";
  }
}

export function Terminal() {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const historyEndRef = useRef<HTMLDivElement>(null);
  const { setTheme } = useTerminalTheme();

  const {
    history,
    isProcessing,
    activeSection,
    executeCommand,
    getPreviousCommand,
    getNextCommand,
    getAutocompleteOptions,
  } = useTerminalEngine({
    onThemeChange: setTheme,
  });

  useEffect(() => {
    historyEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  useEffect(() => {
    const opts = getAutocompleteOptions(input);
    setSuggestions(opts);
  }, [input, getAutocompleteOptions]);

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && input.trim()) {
      executeCommand(input);
      setInput("");
      setSuggestions([]);
    } else if (e.key === "Tab" && suggestions.length > 0) {
      e.preventDefault();
      setInput(suggestions[0]);
      setSuggestions([]);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prev = getPreviousCommand();
      if (prev) setInput(prev);
      setSuggestions([]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = getNextCommand();
      setInput(next || "");
      setSuggestions([]);
    }
  }

  return (
    <TerminalWindow>
      {/* Terminal content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="p-4 sm:p-6 md:p-8 font-mono text-xs sm:text-sm overflow-y-auto leading-relaxed"
      >
        <AnimatePresence mode="popLayout">
          {history.map((entry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.02 }}
              className={`leading-relaxed mb-1 ${getOutputClassName(entry.type)}`}
            >
              {entry.text}
            </motion.div>
          ))}
        </AnimatePresence>

        {isProcessing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2 text-emerald-400 mt-2"
          >
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              ⚡
            </motion.span>
            <span>Processando...</span>
          </motion.div>
        )}

        <div ref={historyEndRef} />
      </motion.div>

      {/* Conteúdo Dinâmico */}
      <AnimatePresence mode="wait">
        {activeSection && (
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-slate-800 p-4 sm:p-6 bg-slate-950/40 backdrop-blur overflow-hidden"
          >
            {activeSection === "about" && (
              <div className="space-y-3">
                <h2 className="text-base sm:text-lg text-emerald-400 mb-2 font-bold">
                  👨‍💻 Sobre
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Desenvolvedor Full Stack apaixonado por criar experiências digitais únicas.
                  Especializado em React, TypeScript e Node.js.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="px-2 py-1 text-xs bg-emerald-500/10 border border-emerald-500/30 rounded text-emerald-400">
                    3+ anos de experiência
                  </span>
                  <span className="px-2 py-1 text-xs bg-indigo-500/10 border border-indigo-500/30 rounded text-indigo-400">
                    25+ projetos
                  </span>
                </div>
              </div>
            )}

            {activeSection === "skills" && (
              <div className="space-y-3">
                <h2 className="text-base sm:text-lg text-emerald-400 mb-2 font-bold">
                  🚀 Skills
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs sm:text-sm">
                  {["React", "TypeScript", "Node.js", "Java", "Spring Boot", "Docker"].map((skill) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="px-3 py-2 bg-slate-800/50 border border-slate-700 rounded text-slate-300 text-center hover:border-emerald-500/50 transition"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === "projects" && (
              <div className="space-y-3">
                <h2 className="text-base sm:text-lg text-emerald-400 mb-2 font-bold">
                  💼 Projetos
                </h2>
                <div className="space-y-2 text-xs sm:text-sm">
                  {[1, 2, 3].map((num) => (
                    <motion.div
                      key={num}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: num * 0.1 }}
                      className="p-3 bg-slate-800/30 border border-slate-700 rounded hover:border-emerald-500/50 transition"
                    >
                      <div className="font-semibold text-slate-200">Projeto {num}</div>
                      <div className="text-slate-400 text-xs mt-1">React • TypeScript • Node.js</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === "contact" && (
              <div className="space-y-3">
                <h2 className="text-base sm:text-lg text-emerald-400 mb-2 font-bold">
                  📬 Contato
                </h2>
                <div className="space-y-2 text-xs sm:text-sm">
                  <a
                    href="https://github.com/Lzdevmendes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-3 py-2 bg-slate-800/30 border border-slate-700 rounded hover:border-emerald-500/50 hover:text-emerald-400 transition text-slate-300"
                  >
                    🔗 GitHub
                  </a>
                  <a
                    href="mailto:Lzmendestechdev@gmail.com"
                    className="block px-3 py-2 bg-slate-800/30 border border-slate-700 rounded hover:border-emerald-500/50 hover:text-emerald-400 transition text-slate-300"
                  >
                    ✉️ Email
                  </a>
                  <a
                    href="#"
                    className="block px-3 py-2 bg-slate-800/30 border border-slate-700 rounded hover:border-emerald-500/50 hover:text-emerald-400 transition text-slate-300"
                  >
                    💼 LinkedIn
                  </a>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Input + Autocomplete */}
      <div className="relative border-t border-slate-800">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex items-center gap-2 sm:gap-3 bg-slate-950/60 backdrop-blur px-4 sm:px-6 py-3 sm:py-4"
        >
          <motion.span
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-emerald-400 text-sm sm:text-base"
          >
            $
          </motion.span>
          <input
            ref={inputRef}
            className="flex-1 bg-transparent outline-none text-slate-100 text-sm sm:text-base placeholder:text-slate-600 focus-terminal-inset"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Digite um comando... (Tab para sugestões)"
            autoFocus
          />
        </motion.div>

        {/* Autocomplete Suggestions */}
        <AnimatePresence>
          {suggestions.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="absolute bottom-full left-0 right-0 bg-slate-900 border border-slate-700 border-b-0 rounded-t px-4 py-2 text-xs sm:text-sm"
            >
              <div className="text-slate-400 mb-2">Sugestões (Tab para completar):</div>
              <div className="flex flex-wrap gap-2">
                {suggestions.map((suggestion) => (
                  <motion.button
                    key={suggestion}
                    onClick={() => {
                      setInput(suggestion);
                      setSuggestions([]);
                      inputRef.current?.focus();
                    }}
                    className="px-2 py-1 bg-slate-800 hover:bg-emerald-500/20 border border-emerald-500/30 rounded text-emerald-400 transition cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {suggestion}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </TerminalWindow>
  );
}
