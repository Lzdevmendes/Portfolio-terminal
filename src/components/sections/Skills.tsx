import { Section } from "./Section";

const skills = [
  "Java",
  "Spring Boot",
  "Node.js",
  "React",
  "TypeScript",
  "Docker",
  "PostgreSQL",
  "Linux",
  "Git",
];

export function Skills() {
  return (
    <Section id="skills">
      <h2 className="text-4xl font-bold mb-10">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="border border-slate-800 rounded-xl p-4 text-center hover:border-slate-600 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </Section>
  );
}
