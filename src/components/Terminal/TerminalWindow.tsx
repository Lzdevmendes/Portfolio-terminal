import { useTerminalTheme } from "./ThemeContext";
import type { PropsWithChildren } from "react";
import { motion } from "framer-motion";

type Props = PropsWithChildren<{
  hostname?: string;
  title?: string;
}>;

export function TerminalWindow({ children, hostname = "luizmendes@portfolio", title = "Portfolio Terminal" }: Props) {
  const { theme, setTheme } = useTerminalTheme();

  return (
    <div className="min-h-screen flex flex-col terminal-window">
      {/* Header */}
      <div className="terminal-header px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div aria-hidden className="terminal-controls flex items-center gap-2">
            <span className="btn close" />
            <span className="btn minimize" />
            <span className="btn maximize" />
          </div>
          <div className="text-xs sm:text-sm opacity-80">
            <span className="font-semibold">{hostname}</span>
            <span className="mx-2">•</span>
            <span>{title}</span>
          </div>
        </div>

        <label className="flex items-center gap-2 text-xs sm:text-sm">
          <span className="opacity-70">Tema:</span>
          <select
            aria-label="Selecionar tema do terminal"
            className="bg-transparent border border-slate-700 rounded px-2 py-1 focus-terminal-inset"
            value={theme}
            onChange={(e) => setTheme(e.target.value as any)}
          >
            <option value="ubuntu">Ubuntu</option>
            <option value="windows">Windows</option>
            <option value="retro">Retro</option>
          </select>
        </label>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="terminal-content flex-1 bg-slate-950/40"
      >
        {children}
      </motion.div>
    </div>
  );
}
