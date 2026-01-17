import { motion } from "framer-motion";
import { Section } from "./Section";
import { SKILLS_LIST } from "../../constants";

export function Skills() {
  return (
    <Section id="skills" ariaLabel="Minhas habilidades técnicas">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-glow-sm"
        role="heading"
        aria-level={2}
      >
        Skills & Tecnologias
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {SKILLS_LIST.map((skill) => (
          <div
            key={skill.name}
            className="group relative border border-slate-800 rounded-xl p-4 sm:p-5 bg-gradient-to-br from-slate-900/50 to-slate-950/50 backdrop-blur hover:border-emerald-500/50 transition-colors overflow-hidden"
          >
            <div className="relative z-10">
              <div className="text-sm sm:text-base font-semibold mb-2 group-hover:text-emerald-400 transition">
                {skill.name}
              </div>

              <div className="text-xs text-slate-500 mb-3">
                {skill.category}
              </div>

              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-indigo-500"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              <div className="text-xs text-right mt-1 text-slate-600 group-hover:text-emerald-500 transition">
                {skill.level}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
