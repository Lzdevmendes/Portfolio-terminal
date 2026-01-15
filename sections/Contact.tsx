import { Section } from "./Section";

export function Contact() {
  return (
    <Section id="contact">
      <h2 className="text-4xl font-bold mb-6">Contato</h2>

      <p className="text-slate-400 mb-6">
        Vamos conversar sobre projetos, ideias ou oportunidades.
      </p>

      <div className="flex gap-6">
        <a className="underline" href="#">GitHub</a>
        <a className="underline" href="#">LinkedIn</a>
        <a className="underline" href="#">Email</a>
      </div>
    </Section>
  );
}
