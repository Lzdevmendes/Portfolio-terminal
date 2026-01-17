import { Section } from "./Section";
import { projects } from "../../data/projects";

export function Projects() {
  return (
    <Section id="projects" ariaLabel="Projetos em destaque">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-glow-sm">
        Projetos em Destaque
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group relative"
          >
            {/* Card simples sem 3D */}
            <div
              className="relative border border-slate-800 rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur hover:border-emerald-500/50 transition-colors h-full flex flex-col"
            >
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
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded-lg bg-slate-800/80 text-slate-300 border border-slate-700 group-hover:border-emerald-500/30 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link simples */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition"
                >
                  <span>Ver código</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
