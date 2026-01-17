/**
 * useKeyboardNavigation Hook
 * Enables keyboard navigation between sections (Arrow keys, Tab)
 */

import { useEffect, useCallback } from "react";

interface Section {
  id: string;
  label: string;
}

interface UseKeyboardNavigationProps {
  sections: readonly Section[];
  enabled?: boolean;
}

export function useKeyboardNavigation({
  sections,
  enabled = true,
}: UseKeyboardNavigationProps) {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      // Focus on the section for accessibility
      element.focus({ preventScroll: true });
    }
  }, []);

  const getCurrentSectionIndex = useCallback(() => {
    const currentSection = sections.findIndex((section) => {
      const element = document.getElementById(section.id);
      if (!element) return false;
      const rect = element.getBoundingClientRect();
      return rect.top <= 150 && rect.bottom >= 150;
    });
    return currentSection >= 0 ? currentSection : 0;
  }, [sections]);

  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in an input/textarea
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      const currentIndex = getCurrentSectionIndex();

      // Arrow Down or 'j' (Vim-style)
      if (e.key === "ArrowDown" || e.key === "j") {
        e.preventDefault();
        const nextIndex = Math.min(currentIndex + 1, sections.length - 1);
        scrollToSection(sections[nextIndex].id);
      }

      // Arrow Up or 'k' (Vim-style)
      if (e.key === "ArrowUp" || e.key === "k") {
        e.preventDefault();
        const prevIndex = Math.max(currentIndex - 1, 0);
        scrollToSection(sections[prevIndex].id);
      }

      // Home - Go to first section
      if (e.key === "Home") {
        e.preventDefault();
        scrollToSection(sections[0].id);
      }

      // End - Go to last section
      if (e.key === "End") {
        e.preventDefault();
        scrollToSection(sections[sections.length - 1].id);
      }

      // Number keys 1-4 for direct section access
      const numKey = parseInt(e.key);
      if (numKey >= 1 && numKey <= sections.length) {
        e.preventDefault();
        scrollToSection(sections[numKey - 1].id);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [enabled, sections, scrollToSection, getCurrentSectionIndex]);

  return { scrollToSection };
}
