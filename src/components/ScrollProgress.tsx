/**
 * ScrollProgress Component
 * Minimal progress bar aligned with terminal aesthetic
 */

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  
  // Light spring for subtle, non-distracting motion
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    mass: 0.2,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] z-[60] pointer-events-none origin-left"
      style={{ 
        scaleX,
        background: 'linear-gradient(90deg, var(--color-accent-primary), var(--color-accent-secondary))',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.35)',
        transformOrigin: '0% 50%'
      }}
      role="progressbar"
      aria-label="Progresso de leitura da página"
      aria-valuenow={0}
      aria-valuemin={0}
      aria-valuemax={100}
    />
  );
}
