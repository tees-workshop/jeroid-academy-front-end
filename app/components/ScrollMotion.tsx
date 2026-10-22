"use client";

import { useEffect } from "react";

export default function ScrollMotion() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main > section, main > div > section"));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -36px 0px" },
    );

    sections.forEach((section) => {
      if (section.classList.contains("hero-surface")) return;
      section.classList.add("motion-reveal");
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
