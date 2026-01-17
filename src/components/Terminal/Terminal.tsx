import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TerminalWindow } from "./TerminalWindow";
import { TerminalInput } from "../ui/TerminalInput";
import { TerminalPanel } from "../ui/TerminalPanel";
import { TerminalButton } from "../ui/TerminalButton";
import { ViewMode } from "../ViewMode";
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
  const [input, setInput] = useState(() => {
    return localStorage.getItem('terminal-input') || '';
  });
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [userHasScrolled, setUserHasScrolled] = useState(false);
  const [viewMode, setViewMode] = useState(() => {
    return localStorage.getItem('terminal-viewMode') === 'true';
  });
  const inputRef = useRef<HTMLInputElement>(null);
  const historyEndRef = useRef<HTMLDivElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
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
    // Persistência do input
    localStorage.setItem('terminal-input', input);
  }, [input]);

  useEffect(() => {
    // Persistência do viewMode
    localStorage.setItem('terminal-viewMode', String(viewMode));
  }, [viewMode]);

  // Detectar quando activeSection é 'view' e ativar viewMode
  if (activeSection === 'view' && !viewMode) {
    setViewMode(true);
  }

  useEffect(() => {
    // Auto-scroll apenas se usuário não fez scroll manual
    if (!userHasScrolled && historyEndRef.current) {
      historyEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history, userHasScrolled]);

  useEffect(() => {
    const outputElement = outputRef.current;
    if (!outputElement) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = outputElement;
      const isAtBottom = Math.abs(scrollHeight - clientHeight - scrollTop) < 10;
      
      // Se usuário scrollou para o topo, marcar que fez scroll manual
      if (!isAtBottom) {
        setUserHasScrolled(true);
      } else {
        setUserHasScrolled(false);
      }
    };

    outputElement.addEventListener('scroll', handleScroll);
    return () => outputElement.removeEventListener('scroll', handleScroll);
  }, []);

  function handleInputChange(value: string) {
    setInput(value);
    const opts = getAutocompleteOptions(value);
    setSuggestions(opts);
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && input.trim()) {
      executeCommand(input);
      setInput("");
      setSuggestions([]);
      // Reset scroll quando comando é executado
      setUserHasScrolled(false);
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
    <>
      {viewMode ? (
        <ViewMode onClose={() => setViewMode(false)} />
      ) : (
        <TerminalWindow>
      {/* Terminal Output Area */}
      <div 
        ref={outputRef}
        className="flex-1 overflow-y-auto text-terminal text-sm scrollbar-terminal"
        style={{ scrollBehavior: 'smooth' }}
      >
        <div className="p-4 sm:p-5 space-y-0.5" style={{ lineHeight: '1.6' }}>
          {history.map((entry, index) => (
            <div
              key={index}
              className={getOutputClassName(entry.type)}
              style={{ 
                color: 'var(--color-text-primary)',
                lineHeight: '1.65',
                paddingTop: '0.125rem',
                paddingBottom: '0.125rem'
              }}
            >
              {entry.text}
            </div>
          ))}

          {isProcessing && (
            <div 
              className="flex items-center gap-2 mt-2"
              style={{ color: 'var(--color-accent-primary)' }}
            >
              <span className="animate-pulse">⚡</span>
              <span>Processando...</span>
            </div>
          )}

          <div ref={historyEndRef} />
        </div>
      </div>

      {/* Dynamic Section Content */}
      <AnimatePresence mode="wait">
        {activeSection && (
          <motion.section
            key={activeSection}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="shrink-0 overflow-hidden"
            style={{ 
              background: 'var(--color-bg-tertiary)',
              borderTop: '1px solid var(--color-border-default)',
            }}
          >
            <div className="p-4 text-terminal text-sm">
              {activeSection === "about" && (
                <div className="space-y-3">
                  <h2 
                    className="font-bold flex items-center gap-2"
                    style={{ color: 'var(--color-accent-primary)' }}
                  >
                    <span>👨‍💻</span> ABOUT
                  </h2>
                  <p className="leading-relaxed" style={{ color: 'var(--color-text-primary)', lineHeight: '1.65' }}>
                    Desenvolvedor Full Stack apaixonado por criar experiências digitais únicas.
                    Especializado em React, TypeScript e Node.js.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span 
                      className="px-2 py-1 text-xs rounded"
                      style={{ 
                        background: 'rgba(39, 201, 63, 0.1)', 
                        border: '1px solid rgba(39, 201, 63, 0.3)',
                        color: 'var(--color-accent-primary)',
                      }}
                    >
                      3+ anos exp.
                    </span>
                    <span 
                      className="px-2 py-1 text-xs rounded"
                      style={{ 
                        background: 'rgba(88, 166, 255, 0.1)', 
                        border: '1px solid rgba(88, 166, 255, 0.3)',
                        color: 'var(--color-accent-secondary)',
                      }}
                    >
                      25+ projetos
                    </span>
                  </div>
                </div>
              )}

              {activeSection === "skills" && (
                <div className="space-y-3">
                  <h2 
                    className="font-bold flex items-center gap-2"
                    style={{ color: 'var(--color-accent-primary)' }}
                  >
                    <span>🚀</span> SKILLS
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {["React", "TypeScript", "Node.js", "Java", "Spring Boot", "Docker"].map((skill) => (
                      <TerminalPanel
                        key={skill}
                        className="px-2 py-1.5 text-center text-xs transition-colors hover:border-emerald-500/50"
                      >
                        <span style={{ color: 'var(--color-text-primary)' }}>{skill}</span>
                      </TerminalPanel>
                    ))}
                  </div>
                </div>
              )}

              {activeSection === "projects" && (
                <div className="space-y-3">
                  <h2 
                    className="font-bold flex items-center gap-2"
                    style={{ color: 'var(--color-accent-primary)' }}
                  >
                    <span>💼</span> PROJECTS
                  </h2>
                  <div className="space-y-2">
                    {[1, 2, 3].map((num) => (
                      <TerminalPanel
                        key={num}
                        className="p-2 sm:p-3 transition-colors hover:border-emerald-500/50"
                      >
                        <div className="font-semibold text-xs sm:text-sm" style={{ color: 'var(--color-text-primary)' }}>
                          Projeto {num}
                        </div>
                        <div className="text-xs mt-0.5" style={{ color: 'var(--color-text-tertiary)' }}>
                          React • TypeScript • Node.js
                        </div>
                      </TerminalPanel>
                    ))}
                  </div>
                </div>
              )}

              {activeSection === "contact" && (
                <div className="space-y-3">
                  <h2 
                    className="font-bold flex items-center gap-2"
                    style={{ color: 'var(--color-accent-primary)' }}
                  >
                    <span>📬</span> CONTACT
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <a
                      href="https://github.com/Lzdevmendes"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="terminal-link px-3 py-2 text-center text-xs rounded"
                      style={{ 
                        background: 'var(--color-bg-elevated)', 
                        border: '1px solid var(--color-border-default)',
                        display: 'block',
                      }}
                    >
                      🔗 GitHub
                    </a>
                    <a
                      href="mailto:Lzmendestechdev@gmail.com"
                      className="terminal-link px-3 py-2 text-center text-xs rounded"
                      style={{ 
                        background: 'var(--color-bg-elevated)', 
                        border: '1px solid var(--color-border-default)',
                        display: 'block',
                      }}
                    >
                      ✉️ Email
                    </a>
                    <a
                      href="#"
                      className="terminal-link px-3 py-2 text-center text-xs rounded"
                      style={{ 
                        background: 'var(--color-bg-elevated)', 
                        border: '1px solid var(--color-border-default)',
                        display: 'block',
                      }}
                    >
                      💼 LinkedIn
                    </a>
                  </div>
                </div>
              )}
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Command Input */}
      <div 
        className="shrink-0 relative"
        style={{ 
          background: 'var(--color-bg-tertiary)',
          borderTop: '1px solid var(--color-border-default)',
        }}
      >
        {/* Autocomplete */}
        <AnimatePresence>
          {suggestions.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              className="absolute bottom-full left-0 right-0 p-4 text-terminal text-sm"
              style={{ background: 'var(--color-bg-elevated)', borderTop: '1px solid var(--color-border-default)' }}
            >
              <div className="mb-2" style={{ color: 'var(--color-text-tertiary)' }}>Tab to complete:</div>
              <div className="flex flex-wrap gap-1.5">
                {suggestions.map((s) => (
                  <TerminalButton
                    key={s}
                    variant="primary"
                    onClick={() => {
                      setInput(s);
                      setSuggestions([]);
                      inputRef.current?.focus();
                    }}
                    className="text-xs"
                  >
                    {s}
                  </TerminalButton>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Input Line */}
        <div className="flex items-center gap-3 px-4 sm:px-5 py-3">
          <span 
            className="text-terminal text-sm font-bold flex-shrink-0"
            style={{ color: 'var(--color-accent-primary)' }}
          >
            $
          </span>
          <TerminalInput
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => handleInputChange(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="type 'help' to start..."
            autoFocus
            fullWidth
            className="bg-transparent border-0 focus:ring-0 focus:shadow-none flex-1 text-sm"
            style={{ caretColor: 'var(--color-terminal-cursor)' }}
          />
        </div>
      </div>
    </TerminalWindow>
      )}
    </>
  );
}
