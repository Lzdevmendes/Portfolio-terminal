import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
}

export function Section({ id, children }: SectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      id={id}
      className="relative mx-auto w-full max-w-5xl px-6 py-20 sm:px-8 sm:py-24 scroll-mt-24"
    >
      {children}
    </motion.section>
  );
}
