import { motion } from "framer-motion";
import { useState } from "react";

interface Props {
  onSelect: (value: "terminal" | "scroll") => void;
}

export function ExperienceSelector({ onSelect }: Props) {
  const [hoveredMode, setHoveredMode] = useState<string | null>(null);

  const modes = [
    {
      id: "terminal",
      title: "Terminal Experience",
      description: "Interação via linha de comando",
      icon: "⚡",
      color: "emerald",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      id: "scroll",
      title: "Scroll Experience",
      description: "Navegação tradicional fluída",
      icon: "🎨",
      color: "indigo",
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-4 sm:p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-8 sm:space-y-12 max-w-4xl w-full"
      >
        {/* Título principal */}
        <div className="space-y-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-emerald-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Luiz Mendes
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-slate-400 text-sm sm:text-base md:text-lg"
          >
            Full Stack Developer • React Specialist
          </motion.p>
        </div>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-slate-500 text-base sm:text-lg"
        >
          Escolha sua experiência de navegação
        </motion.p>

        {/* Cards de seleção */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mt-8">
          {modes.map((mode, index) => (
            <motion.button
              key={mode.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              onClick={() => onSelect(mode.id as "terminal" | "scroll")}
              onHoverStart={() => setHoveredMode(mode.id)}
              onHoverEnd={() => setHoveredMode(null)}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`group relative p-6 sm:p-8 rounded-2xl border-2 transition-all overflow-hidden ${
                hoveredMode === mode.id
                  ? `border-${mode.color}-500 shadow-lg shadow-${mode.color}-500/20`
                  : "border-slate-800 hover:border-slate-700"
              }`}
            >
              {/* Fundo gradiente animado */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${mode.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}
                animate={{
                  backgroundPosition: hoveredMode === mode.id ? ["0% 50%", "100% 50%"] : "0% 50%",
                }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                style={{ backgroundSize: "200% 200%" }}
              />

              {/* Conteúdo */}
              <div className="relative z-10 space-y-4">
                {/* Ícone */}
                <motion.div
                  animate={{
                    scale: hoveredMode === mode.id ? [1, 1.2, 1] : 1,
                  }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl sm:text-5xl mb-4"
                >
                  {mode.icon}
                </motion.div>

                {/* Título */}
                <h3
                  className={`text-lg sm:text-xl font-bold transition ${
                    hoveredMode === mode.id
                      ? `text-${mode.color}-400`
                      : "text-slate-200"
                  }`}
                >
                  {mode.title}
                </h3>

                {/* Descrição */}
                <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                  {mode.description}
                </p>

                {/* Indicador de hover */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: hoveredMode === mode.id ? "100%" : 0 }}
                  className={`h-1 bg-gradient-to-r ${mode.gradient} rounded-full mx-auto`}
                />
              </div>
            </motion.button>
          ))}
        </div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-xs sm:text-sm text-slate-600 mt-8"
        >
          Você pode trocar o modo a qualquer momento
        </motion.p>
      </motion.div>
    </div>
  );
}

