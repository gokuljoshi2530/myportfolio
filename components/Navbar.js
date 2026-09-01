"use client";

import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks, siteConfig } from "@/lib/data";
import { useScrollTo } from "@/lib/scroll";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const scrollTo = useScrollTo();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  const go = (href) => {
    setOpen(false);
    scrollTo(href);
  };

  const Logo = ({ className = "" }) => (
    <span className={`font-display text-xl font-semibold tracking-tight ${className}`}>
      {siteConfig.firstName}
      <span className="text-gold">.</span>
    </span>
  );

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 2.3 }}
        className={`fixed inset-x-0 top-0 z-[70] transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
          <button onClick={() => go("#home")} data-cursor="hover" aria-label="Home">
            <Logo />
          </button>

          <nav
            className={`hidden items-center gap-1 rounded-full px-2 py-2 transition-all duration-500 md:flex ${
              scrolled ? "glass border border-white/10" : ""
            }`}
          >
            {navLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => go(l.href)}
                data-cursor="hover"
                className="rounded-full px-4 py-2 text-sm text-white/70 transition-colors hover:text-gold"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => go("#contact")}
            data-cursor="hover"
            className="hidden rounded-full bg-gold px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-gold-light md:block"
          >
            Let&apos;s Talk
          </button>

          <button
            onClick={() => setOpen(true)}
            className="text-2xl text-white md:hidden"
            aria-label="Open menu"
          >
            <FiMenu />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[85] md:hidden"
          >
            <div
              className="absolute inset-0 bg-ink/80 backdrop-blur-xl"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 260 }}
              className="glass-strong absolute right-0 top-0 flex h-full w-[80%] max-w-sm flex-col p-8"
            >
              <div className="mb-10 flex items-center justify-between">
                <Logo />
                <button
                  onClick={() => setOpen(false)}
                  className="text-2xl text-white"
                  aria-label="Close menu"
                >
                  <FiX />
                </button>
              </div>
              <div className="flex flex-col">
                {navLinks.map((l, i) => (
                  <motion.button
                    key={l.href}
                    onClick={() => go(l.href)}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06 }}
                    className="border-b border-white/5 py-3 text-left font-display text-2xl text-white/80 transition-colors hover:text-gold"
                  >
                    {l.label}
                  </motion.button>
                ))}
              </div>
              <button
                onClick={() => go("#contact")}
                className="mt-auto rounded-full bg-gold py-3.5 text-center font-medium text-ink"
              >
                Let&apos;s Talk
              </button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
