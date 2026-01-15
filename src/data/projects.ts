export type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Projeto One",
    description: "Aplicação focada em arquitetura, performance e qualidade de código.",
    tech: ["React", "TypeScript", "API"],
    github: "https://github.com/",
  },
  {
    id: 2,
    title: "Projeto Two",
    description: "Dashboard interativo com autenticação e banco de dados.",
    tech: ["Node", "PostgreSQL", "Docker"],
    github: "https://github.com/",
  },
  {
    id: 3,
    title: "Projeto Three",
    description: "Sistema backend com foco em escalabilidade.",
    tech: ["Java", "Spring Boot"],
    github: "https://github.com/",
  },
  {
    id: 4,
    title: "Projeto Four",
    description: "Frontend moderno com foco em UX.",
    tech: ["Next.js", "Tailwind"],
    github: "https://github.com/",
  },
  {
    id: 5,
    title: "Projeto Five",
    description: "Projeto experimental com arquitetura modular.",
    tech: ["Microservices", "Cloud"],
    github: "https://github.com/",
  },
];
