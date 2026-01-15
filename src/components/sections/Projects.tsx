import { Section } from "./Section";
import { projects } from "../../data/projects";

export function Projects() {
  return (
    <Section id="projects">
      <h2 className="text-4xl font-bold mb-12">Projetos</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <article
            key={project.id}
            className="border border-slate-800 rounded-2xl p-6 hover:border-slate-500 transition"
          >
            <h3 className="text-xl font-semibold mb-2">
              {project.title}
            </h3>

            <p className="text-slate-400 mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-1 rounded bg-slate-800"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.github}
              target="_blank"
              className="text-sm underline opacity-80 hover:opacity-100"
            >
              Ver código →
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}
