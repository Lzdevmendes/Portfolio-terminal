import { motion } from "framer-motion";
import { Section } from "./Section";
import { SKILLS_LIST, ANIMATION } from "../../constants";

const containerVariants = {
  hidden: { opacity: 0 as const },
  visible: {
    opacity: 1 as const,
    transition: {
      staggerChildren: ANIMATION.staggerChildren,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
    },
  },
};

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

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
      >
        {SKILLS_LIST.map((skill) => (
          <motion.div
            key={skill.name}
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              rotate: [0, -2, 2, -2, 0],
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative border border-slate-800 rounded-xl p-4 sm:p-5 bg-gradient-to-br from-slate-900/50 to-slate-950/50 backdrop-blur hover:border-emerald-500/50 transition-all cursor-pointer overflow-hidden"
          >
            {/* Efeito de brilho ao hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-emerald-500/0"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />

            {/* Conteúdo */}
            <div className="relative z-10">
              <div className="text-sm sm:text-base font-semibold mb-2 group-hover:text-emerald-400 transition">
                {skill.name}
              </div>

              {/* Categoria */}
              <div className="text-xs text-slate-500 mb-3">
                {skill.category}
              </div>

              {/* Barra de progresso */}
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-emerald-500 to-indigo-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
              </div>

              {/* Nível percentual */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xs text-right mt-1 text-slate-600 group-hover:text-emerald-500 transition"
              >
                {skill.level}%
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
