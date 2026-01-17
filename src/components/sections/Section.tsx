import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}

export function Section({ id, children, className = "", ariaLabel }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`relative mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 md:px-8 sm:py-20 md:py-24 scroll-mt-24 ${className}`}
      aria-label={ariaLabel || id}
      tabIndex={-1}
    >
      {children}
    </motion.section>
  );
}
