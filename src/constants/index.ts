/**
 * Design System Constants
 * Centralized configuration for consistency across the application
 */

/* ========================================
   NAVIGATION
   ======================================== */
export const NAV_ITEMS = [
  { id: "about", label: "Sobre" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projetos" },
  { id: "contact", label: "Contato" },
] as const;

/* ========================================
   SOCIAL LINKS
   ======================================== */
export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/Lzdevmendes",
    icon: "⚡",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/luizmendes",
    icon: "💼",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Email",
    url: "mailto:Lzmendestechdev@gmail.com",
    icon: "✉️",
    color: "from-emerald-500 to-teal-500",
  },
] as const;

/* ========================================
   SKILLS
   ======================================== */
export const SKILLS_LIST = [
  { name: "React", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 90, category: "Language" },
  { name: "Node.js", level: 85, category: "Backend" },
  { name: "Java", level: 80, category: "Backend" },
  { name: "Spring Boot", level: 75, category: "Framework" },
  { name: "PostgreSQL", level: 80, category: "Database" },
  { name: "Docker", level: 75, category: "DevOps" },
  { name: "Git", level: 90, category: "Tools" },
  { name: "Linux", level: 70, category: "OS" },
] as const;

/* ========================================
   PROFILE DATA
   ======================================== */
export const ROLES = [
  "Full Stack Developer",
  "React Specialist",
  "Problem Solver",
] as const;

export const STATS = [
  { label: "Anos de experiência", value: "3+" },
  { label: "Projetos concluídos", value: "25+" },
  { label: "Tecnologias", value: "12+" },
] as const;

/* ========================================
   ANIMATION TIMING (Framer Motion)
   ======================================== */
export const ANIMATION = {
  duration: 0.6,
  delaySmall: 0.1,
  delayMedium: 0.2,
  delayLarge: 0.3,
  staggerChildren: 0.08,
  spring: {
    type: "spring" as const,
    stiffness: 300,
    damping: 30,
  },
  easeOut: [0.22, 1, 0.36, 1] as const,
  easeInOut: [0.4, 0, 0.2, 1] as const,
} as const;

/* ========================================
   SPACING SYSTEM (based on 4px)
   ======================================== */
export const SPACING = {
  section: {
    mobile: "py-12 px-4",
    tablet: "py-16 px-6",
    desktop: "py-20 px-8",
  },
  container: {
    sm: "max-w-3xl",
    md: "max-w-4xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
  },
  gap: {
    xs: "gap-2",
    sm: "gap-4",
    md: "gap-6",
    lg: "gap-8",
    xl: "gap-12",
  },
} as const;

/* Color palette */
export const COLORS = {
  primary: {
    light: "#10b981", // emerald-500
    DEFAULT: "#059669", // emerald-600
    dark: "#047857", // emerald-700
  },
  secondary: {
    light: "#818cf8", // indigo-400
    DEFAULT: "#6366f1", // indigo-500
    dark: "#4f46e5", // indigo-600
  },
  slate: {
    50: "#f8fafc",
    100: "#f1f5f9",
    400: "#94a3b8",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
    950: "#020617",
  },
} as const;

/* Breakpoints */
export const BREAKPOINTS = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;
