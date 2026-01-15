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
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 320, damping: 22 }}
              className="border border-slate-800 rounded-xl px-4 py-3 text-center text-sm sm:text-base bg-slate-900/30 hover:border-slate-600 transition"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
