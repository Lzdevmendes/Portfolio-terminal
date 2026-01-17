import { useState, useEffect, useRef } from "react";
import type { KeyboardEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TerminalWindow } from "./TerminalWindow";

type Section = "about" | "skills" | "projects" | "contact" | null;

export function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([
    "Bem-vindo ao meu portfólio.",
    "Digite 'help' para começar."
  ]);

  const [activeSection, setActiveSection] = useState<Section>(null);
  const [isTyping, setIsTyping] = useState(false);
  const historyEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    historyEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  function handleCommand(command: string) {
    const cmd = command.toLowerCase().trim();

    // Echo do comando
    setHistory((prev) => [...prev, `> ${cmd}`]);

    if (cmd === "help") {
      setIsTyping(true);
      setTimeout(() => {
        setHistory((prev) => [
          ...prev,
          "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
          "📋 Comandos disponíveis:",
          "  • about    - Sobre mim",
          "  • skills   - Minhas habilidades",
          "  • projects - Projetos em destaque",
          "  • contact  - Entre em contato",
          "  • clear    - Limpar terminal",
          "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
        ]);
        setIsTyping(false);
      }, 300);
      return;
    }

    if (cmd === "clear") {
      setHistory([]);
      setActiveSection(null);
      return;
    }

    if (["about", "skills", "projects", "contact"].includes(cmd)) {
      setIsTyping(true);
      setTimeout(() => {
        setActiveSection(cmd as Section);
        setIsTyping(false);
      }, 200);
      return;
    }

    setHistory((prev) => [
      ...prev,
      "❌ Comando não reconhecido. Digite 'help'."
    ]);
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && input.trim()) {
      handleCommand(input);
      setInput("");
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
          {history.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.02 }}
              className="leading-relaxed mb-1 text-slate-300"
            >
              {line}
            </motion.div>
          ))}
        </AnimatePresence>

        {isTyping && (
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

      {/* Input */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center gap-2 sm:gap-3 border-t border-slate-800 bg-slate-950/60 backdrop-blur px-4 sm:px-6 py-3 sm:py-4"
      >
        <motion.span
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-emerald-400 text-sm sm:text-base"
        >
          $
        </motion.span>
        <input
          className="flex-1 bg-transparent outline-none text-slate-100 text-sm sm:text-base placeholder:text-slate-600 focus-terminal-inset"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Digite um comando..."
          autoFocus
        />
      </motion.div>
    </TerminalWindow>
  );
}
