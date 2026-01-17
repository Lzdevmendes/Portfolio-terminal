/**
 * Tipos customizados da aplicação
 */

export type Section = "about" | "skills" | "projects" | "contact" | null;

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
}

export interface NavItem {
  id: string;
  label: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  color: string;
}

export interface FormData {
  name: string;
  email: string;
  message: string;
}
