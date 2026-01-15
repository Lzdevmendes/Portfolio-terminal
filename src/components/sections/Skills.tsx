import { motion } from "framer-motion";
import { Section } from "./Section";
import { skills } from "../../data/profile";

export function Skills() {
  return (
    <Section id="skills">
      <div className="space-y-8">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-indigo-300">
            Stack
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">Skills</h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Ferramentas escolhidas para construir aplicações robustas, rápidas e
            centradas na experiência do usuário.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {skills.map((skill) => (
            <motion.div
              key={skill}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 320, damping: 22 }}
              className="group border border-slate-800 rounded-2xl px-4 py-4 text-center text-sm sm:text-base bg-slate-900/40 hover:border-slate-500 hover:shadow-[0_20px_50px_-40px_rgba(16,185,129,0.45)] transition"
            >
              <span className="block text-slate-100">{skill}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
