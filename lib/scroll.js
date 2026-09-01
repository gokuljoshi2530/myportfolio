"use client";

import { useLenis } from "lenis/react";

// Smooth-scroll to a section id (e.g. "#about"), accounting for the fixed navbar.
// Uses the Lenis instance; falls back to native scroll if Lenis isn't ready.
export function useScrollTo() {
  const lenis = useLenis();
  return (target, offset = -80) => {
    if (lenis) {
      lenis.scrollTo(target, { offset, duration: 1.3 });
    } else if (typeof document !== "undefined") {
      document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
    }
  };
}
