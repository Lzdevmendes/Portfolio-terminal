import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type TerminalTheme = "ubuntu" | "windows" | "retro";

type ThemeContextValue = {
  theme: TerminalTheme;
  setTheme: (t: TerminalTheme) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function getInitialTheme(): TerminalTheme {
  if (typeof window === "undefined") return "ubuntu";
  const stored = window.localStorage.getItem("terminal-theme") as TerminalTheme | null;
  return stored ?? "ubuntu";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<TerminalTheme>(getInitialTheme());

  useEffect(() => {
    try {
      window.localStorage.setItem("terminal-theme", theme);
    } catch {}
  }, [theme]);

  const setTheme = (t: TerminalTheme) => setThemeState(t);

  const value = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      <div className={`theme-${theme}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTerminalTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTerminalTheme must be used within ThemeProvider");
  return ctx;
}
