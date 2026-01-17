import { useRef, useCallback } from "react";

export function useRipple() {
  const containerRef = useRef<HTMLElement | null>(null);

  const createRipple = useCallback((event: React.MouseEvent<HTMLElement>) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const ripple = document.createElement("span");
    ripple.className =
      "pointer-events-none absolute bg-white/20 rounded-full animate-ripple";
    ripple.style.width = size + "px";
    ripple.style.height = size + "px";
    ripple.style.left = x + "px";
    ripple.style.top = y + "px";

    container.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  }, []);

  return { containerRef, createRipple };
}
