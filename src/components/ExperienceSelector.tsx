import { motion } from "framer-motion";
import { profile } from "../data/profile";

interface Props {
  onSelect: (value: "terminal" | "scroll") => void;
}

export function ExperienceSelector({ onSelect }: Props) {
  return (
    <div className="min-h-screen relative flex items-center justify-center bg-slate-950 text-slate-100 px-6 py-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1e293b33,transparent_60%)]" />
      <div className="absolute -top-32 right-[-10%] h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="absolute bottom-0 left-[-10%] h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-2xl rounded-3xl border border-slate-800/80 bg-slate-950/70 p-8 sm:p-12 shadow-[0_0_60px_-20px_rgba(15,23,42,0.8)] backdrop-blur"
      >
        <div className="text-center space-y-6">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">
              {profile.selectorTitle}
            </p>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
              {profile.name}
            </h1>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
              {profile.role}
            </p>
          </div>

          <p className="text-slate-400 text-sm sm:text-base">
            {profile.selectorDescription}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <motion.button
            type="button"
            onClick={() => onSelect("terminal")}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="w-full px-6 py-4 rounded-2xl border border-emerald-500/60 text-emerald-200 hover:bg-emerald-500/10 transition text-left"
          >
            <span className="block text-base font-semibold">
              Terminal Experience
            </span>
            <span className="text-xs text-emerald-200/70">
              Explore comandos e navegue como em um CLI moderno.
            </span>
          </motion.button>

          <motion.button
            type="button"
            onClick={() => onSelect("scroll")}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="w-full px-6 py-4 rounded-2xl border border-indigo-500/60 text-indigo-200 hover:bg-indigo-500/10 transition text-left"
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
