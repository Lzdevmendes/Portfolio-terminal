import { motion } from "framer-motion";
import { Section } from "./Section";
import { ROLES, STATS, ANIMATION } from "../../constants";

export function About() {
  return (
    <Section id="about" ariaLabel="Seção sobre mim">
      <div className="flex flex-col gap-8 md:gap-12">
        {/* Título animado */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: ANIMATION.duration }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight text-glow-sm">
            Luiz Mendes
          </h1>

          <div className="flex flex-wrap gap-2 mb-6">
            {ROLES.map((role, index) => (
              <motion.span
                key={role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: ANIMATION.delaySmall + index * ANIMATION.delaySmall,
                }}
                className="px-3 py-1 text-xs sm:text-sm bg-gradient-to-r from-emerald-500/10 to-indigo-500/10 border border-emerald-500/30 rounded-full text-emerald-400 hover:border-emerald-400/50 transition"
              >
                {role}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Conteúdo principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: ANIMATION.delayMedium }}
          className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl"
        >
          <p className="text-justify">
            Desenvolvedor apaixonado por criar experiências digitais únicas,
            com foco em <strong className="text-slate-100">performance</strong>,{" "}
            <strong className="text-slate-100">arquitetura limpa</strong> e{" "}
            <strong className="text-slate-100">interfaces modernas</strong>.
          </p>

          <p className="text-justify">
            Especializado em React, TypeScript e Node.js, sempre buscando
            soluções criativas que unem tecnologia e design para resolver
            problemas reais.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 pt-4">
          {STATS.map((stat, index) => (
            <div
              key={stat.label}
              className="p-4 sm:p-6 rounded-xl border border-slate-800 bg-gradient-to-br from-slate-900/80 to-slate-950/80 hover:border-emerald-500/50 transition-colors group"
            >
              <div className="text-2xl sm:text-3xl font-bold text-emerald-400 mb-1 group-hover:text-emerald-300 transition">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-400 group-hover:text-slate-300 transition">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
