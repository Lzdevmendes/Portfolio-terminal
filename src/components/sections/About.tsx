import { motion } from "framer-motion";
import { Section } from "./Section";
import { useScrollToSection } from "../../hooks/useScrollToSection";
import { experienceTags, highlights, profile } from "../../data/profile";

export function About() {
  const { scrollTo } = useScrollToSection();

  return (
    <Section id="about">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">
              Sobre
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold">
              {profile.headline}
            </h2>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
              {profile.name} · {profile.role}
            </p>
          </div>

          <p className="text-slate-300/90 text-sm sm:text-base max-w-2xl">
            {profile.summary}
          </p>

          <div className="flex flex-wrap gap-3">
            <motion.button
              type="button"
              onClick={() => scrollTo("projects")}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-5 py-2.5 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-emerald-200 text-sm"
            >
              {profile.cta.primary}
            </motion.button>
            <motion.button
              type="button"
              onClick={() => scrollTo("contact")}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-5 py-2.5 rounded-full border border-slate-700 text-slate-200 text-sm"
            >
              {profile.cta.secondary}
            </motion.button>
          </div>

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

        <div className="grid gap-4">
          {highlights.map((highlight) => (
            <motion.div
              key={highlight.title}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.9)]"
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
