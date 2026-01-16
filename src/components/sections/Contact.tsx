import { motion } from "framer-motion";
import { useState } from "react";
import { Section } from "./Section";
import { SOCIAL_LINKS, ANIMATION } from "../../constants";
import type { FormData } from "../../types";

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [focused, setFocused] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Adicione lógica de envio aqui
  }

  return (
    <Section id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-center">
          Vamos trabalhar juntos?
        </h2>

        <p className="text-slate-500 mb-8 sm:mb-12 text-center text-sm sm:text-base max-w-2xl mx-auto">
          Estou sempre aberto a discutir projetos, ideias criativas ou
          oportunidades de fazer parte da sua visão.
        </p>

        {/* Redes sociais */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-10 sm:mb-12">
          {SOCIAL_LINKS.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * ANIMATION.delaySmall }}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative p-4 sm:p-6 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur hover:border-slate-600 transition overflow-hidden"
            >
              {/* Gradiente de fundo ao hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-10 transition-opacity`}
              />

              <div className="relative z-10 flex items-center gap-3 sm:gap-4">
                <div className="text-2xl sm:text-3xl">{social.icon}</div>
                <div>
                  <div className="font-semibold text-sm sm:text-base group-hover:text-emerald-400 transition">
                    {social.name}
                  </div>
                  <div className="text-xs text-slate-500">Conecte-se</div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Formulário */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: ANIMATION.delayMedium }}
          className="space-y-4 sm:space-y-6"
        >
          {/* Nome */}
          <div className="relative">
            <motion.label
              htmlFor="name"
              animate={{
                y: focused === "name" || formData.name ? -24 : 0,
                scale: focused === "name" || formData.name ? 0.85 : 1,
                color: focused === "name" ? "#10b981" : "#94a3b8",
              }}
              className="absolute left-4 top-4 pointer-events-none origin-left transition-colors"
            >
              Seu nome
            </motion.label>
            <motion.input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              onFocus={() => setFocused("name")}
              onBlur={() => setFocused(null)}
              whileFocus={{ scale: 1.01 }}
              className="w-full px-4 py-3 sm:py-4 bg-slate-900/50 border border-slate-800 rounded-xl focus:border-emerald-500 focus:outline-none transition text-sm sm:text-base"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <motion.label
              htmlFor="email"
              animate={{
                y: focused === "email" || formData.email ? -24 : 0,
                scale: focused === "email" || formData.email ? 0.85 : 1,
                color: focused === "email" ? "#10b981" : "#94a3b8",
              }}
              className="absolute left-4 top-4 pointer-events-none origin-left transition-colors"
            >
              Email
            </motion.label>
            <motion.input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              onFocus={() => setFocused("email")}
              onBlur={() => setFocused(null)}
              whileFocus={{ scale: 1.01 }}
              className="w-full px-4 py-3 sm:py-4 bg-slate-900/50 border border-slate-800 rounded-xl focus:border-emerald-500 focus:outline-none transition text-sm sm:text-base"
            />
          </div>

          {/* Mensagem */}
          <div className="relative">
            <motion.label
              htmlFor="message"
              animate={{
                y: focused === "message" || formData.message ? -24 : 0,
                scale: focused === "message" || formData.message ? 0.85 : 1,
                color: focused === "message" ? "#10b981" : "#94a3b8",
              }}
              className="absolute left-4 top-4 pointer-events-none origin-left transition-colors"
            >
              Mensagem
            </motion.label>
            <motion.textarea
              id="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              onFocus={() => setFocused("message")}
              onBlur={() => setFocused(null)}
              whileFocus={{ scale: 1.01 }}
              rows={5}
              className="w-full px-4 py-3 sm:py-4 bg-slate-900/50 border border-slate-800 rounded-xl focus:border-emerald-500 focus:outline-none transition resize-none text-sm sm:text-base"
            />
          </div>

          {/* Botão */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 sm:py-4 px-6 bg-gradient-to-r from-emerald-500 to-indigo-500 rounded-xl font-semibold hover:shadow-lg hover:shadow-emerald-500/20 transition text-sm sm:text-base"
          >
            Enviar mensagem
          </motion.button>
        </motion.form>
      </motion.div>
    </Section>
  );
}
