export function useScrollToSection() {
  function scrollTo(id: string) {
    const element = document.getElementById(id);
    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return { scrollTo };
}
