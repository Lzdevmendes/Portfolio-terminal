import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { NAV_ITEMS } from "../constants";

export function Navigation() {
  const [activeSection, setActiveSection] = useState("about");
  const { scrollY } = useScroll();

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(2, 6, 23, 0)", "rgba(2, 6, 23, 0.8)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      // Detectar seção ativa
      const sections = NAV_ITEMS.map((item) => ({
        id: item.id,
        element: document.getElementById(item.id),
      }));

      const currentSection = sections.find((section) => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 150 && rect.bottom >= 150;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      // Focus for accessibility
      element.focus({ preventScroll: true });
    }
  }

  return (
    <motion.nav
      style={{ backgroundColor }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-slate-800/50"
      role="navigation"
      aria-label="Navegação principal"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-lg sm:text-xl font-bold"
          >
            <span className="text-emerald-400 text-glow-sm">LM</span>
            <span className="text-slate-400 text-sm ml-1 hidden sm:inline">
              / developer
            </span>
          </motion.div>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center gap-1" role="list">
            {NAV_ITEMS.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.id)}
                className="relative px-4 py-2 text-sm font-medium transition"
                aria-current={activeSection === item.id ? "page" : undefined}
                aria-label={`Ir para seção ${item.label}`}
                role="listitem"
              >
                <span
                  className={
                    activeSection === item.id
                      ? "text-emerald-400"
                      : "text-slate-400 hover:text-slate-200"
                  }
                >
                  {item.label}
                </span>

                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-indigo-500"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Menu Mobile - Dots */}
          <div className="md:hidden flex items-center gap-2" role="list" aria-label="Navegação mobile">
            {NAV_ITEMS.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                whileTap={{ scale: 0.9 }}
                className="p-1 focus-terminal"
                aria-label={`Ir para ${item.label}`}
                aria-current={activeSection === item.id ? "page" : undefined}
                role="listitem"
              >
                <div
                  className={`w-2 h-2 rounded-full transition ${
                    activeSection === item.id
                      ? "bg-emerald-400 w-6"
                      : "bg-slate-600"
                  }`}
                />
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
