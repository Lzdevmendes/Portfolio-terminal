import { motion } from "framer-motion";

interface Props {
  onSelect: (value: "terminal" | "scroll") => void;
}

export function ExperienceSelector({ onSelect }: Props) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-100">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-10"
      >
        <h1 className="text-4xl font-bold tracking-tight">
          Luiz Mendes
        </h1>

        <p className="text-slate-400">
          Escolha sua experiência
        </p>

        <div className="flex gap-6 justify-center">
          <button
            onClick={() => onSelect("terminal")}
            className="px-8 py-4 rounded-lg border border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 transition"
          >
            Terminal Experience
          </button>

          <button
            onClick={() => onSelect("scroll")}
            className="px-8 py-4 rounded-lg border border-indigo-500 text-indigo-400 hover:bg-indigo-500/10 transition"
          >
            Scroll Experience
          </button>
        </div>
      </motion.div>
    </div>
  );
}
