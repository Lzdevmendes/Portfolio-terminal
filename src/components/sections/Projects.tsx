import { motion } from "framer-motion";
import { Section } from "./Section";
import { projects } from "../../data/projects";

export function Projects() {
  return (
    <Section id="projects">
      <div className="space-y-8">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">
            Projetos
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Cases que traduzem impacto em código.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Cada entrega combina estratégia, UI refinada e arquitetura sólida.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => {
            const projectNumber = String(project.id).padStart(2, "0");

            return (
              <motion.article
                key={project.id}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="border border-slate-800 rounded-2xl p-6 bg-slate-900/40 hover:border-slate-500 hover:shadow-[0_30px_80px_-60px_rgba(99,102,241,0.45)] transition flex flex-col gap-4"
              >
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-500">
                  <span>Projeto</span>
                  <span>{projectNumber}</span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-slate-100">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded bg-slate-800/80 text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 text-sm">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="underline text-slate-200/80 hover:text-slate-100 transition"
                  >
                    Ver código →
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="underline text-slate-200/80 hover:text-slate-100 transition"
                    >
                      Ver demo →
                    </a>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
