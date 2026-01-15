import { motion } from "framer-motion";
import { Section } from "./Section";
import { contactLinks } from "../../data/profile";

export function Contact() {
  return (
    <Section id="contact">
      <div className="space-y-8">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-indigo-300">
            Contato
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Vamos construir algo memorável.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Aberto para projetos, colaborações ou oportunidades. Vamos conversar
            sobre soluções digitais de alto impacto.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {contactLinks.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-2xl border border-slate-800 bg-slate-900/40 px-4 py-4 text-sm sm:text-base text-slate-200 hover:border-slate-500 hover:shadow-[0_20px_60px_-40px_rgba(59,130,246,0.5)] transition"
            >
              <span className="flex items-center justify-between font-semibold">
                {item.label}
                <span aria-hidden="true">→</span>
              </span>
              <span className="mt-2 block text-xs uppercase tracking-[0.2em] text-slate-500">
                {item.detail}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </Section>
  );
}
