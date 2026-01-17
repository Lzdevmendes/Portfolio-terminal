import { motion } from "framer-motion";
import { useState } from "react";
import { Section } from "./Section";
import { projects } from "../../data/projects";

export function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <Section id="projects" ariaLabel="Projetos em destaque">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-glow-sm"
        role="heading"
        aria-level={2}
      >
        Projetos em Destaque
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onHoverStart={() => setHoveredId(project.id)}
            onHoverEnd={() => setHoveredId(null)}
            className="group relative"
          >
            {/* Card com perspectiva 3D */}
            <motion.div
              whileHover={{
                y: -8,
                rotateX: 5,
                rotateY: hoveredId === project.id ? 3 : 0,
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative border border-slate-800 rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur hover:border-emerald-500/50 transition-all h-full flex flex-col"
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              {/* Efeito de luz no canto */}
              <motion.div
                className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-full blur-2xl"
                animate={{
                  opacity: hoveredId === project.id ? 1 : 0,
                  scale: hoveredId === project.id ? 1.2 : 0.8,
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Badge de número */}
              <div className="absolute -top-3 -left-3 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-emerald-500 to-indigo-500 flex items-center justify-center text-xs sm:text-sm font-bold">
                {project.id}
              </div>

              <div className="relative z-10 flex-1 flex flex-col">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 group-hover:text-emerald-400 transition">
                  {project.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-400 mb-4 flex-1 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags de tecnologias */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + i * 0.05 }}
                      className="text-xs px-2.5 py-1 rounded-lg bg-slate-800/80 text-slate-300 border border-slate-700 group-hover:border-emerald-500/30 transition"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Link com animação */}
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition group/link"
                  whileHover={{ x: 5 }}
                >
                  <span>Ver código</span>
                  <motion.span
                    animate={{ x: hoveredId === project.id ? [0, 4, 0] : 0 }}
                    transition={{ repeat: Infinity, duration: 1 }}
                  >
                    →
                  </motion.span>
                </motion.a>
              </div>
            </motion.div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
