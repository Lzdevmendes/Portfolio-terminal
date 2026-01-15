import { motion } from "framer-motion";
import { Section } from "./Section";
import { experienceTags, highlights } from "../../data/profile";

export function About() {
  return (
    <Section id="about">
      <div className="space-y-10">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">
            Sobre
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold">
            Experiências digitais com foco em engenharia e criatividade.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Crio produtos que unem design e performance: da arquitetura de APIs
            ao front-end 100% React, com animações suaves e compatibilidade total
            entre mobile e desktop.
          </p>
          <div className="flex flex-wrap gap-2">
            {experienceTags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs rounded-full border border-slate-800 text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {highlights.map((highlight) => (
            <motion.div
              key={highlight.title}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5"
            >
              <h3 className="text-base font-semibold mb-2">
                {highlight.title}
              </h3>
              <p className="text-sm text-slate-400">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
