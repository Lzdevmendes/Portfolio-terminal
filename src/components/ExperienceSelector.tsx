import { motion } from "framer-motion";

interface Props {
  onSelect: (value: "terminal" | "scroll") => void;
}

export function ExperienceSelector({ onSelect }: Props) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-100 px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-8 max-w-xl"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">
          Portfólio interativo
        </p>

        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
          Luiz Mendes
        </h1>

        <p className="text-slate-400 text-sm sm:text-base">
          Experiências construídas 100% em React, com motion e foco em mobile
          first para navegação fluida em qualquer dispositivo.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            onClick={() => onSelect("terminal")}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-6 py-4 rounded-lg border border-emerald-500/60 text-emerald-200 hover:bg-emerald-500/10 transition text-left"
          >
            <span className="block text-base font-semibold">
              Terminal Experience
            </span>
            <span className="text-xs text-emerald-200/70">
              Explore comandos e navegue como em um CLI moderno.
            </span>
          </motion.button>

          <motion.button
            onClick={() => onSelect("scroll")}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-6 py-4 rounded-lg border border-indigo-500/60 text-indigo-200 hover:bg-indigo-500/10 transition text-left"
          >
            <span className="block text-base font-semibold">
              Scroll Experience
            </span>
            <span className="text-xs text-indigo-200/70">
              Navegação visual, seções animadas e micro interações.
            </span>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
