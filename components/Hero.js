"use client";

import { motion } from "framer-motion";
import { media, siteConfig } from "@/lib/data";
import AnimatedText from "./ui/AnimatedText";
import Button from "./ui/Button";
import { useScrollTo } from "@/lib/scroll";

const skills = [
  "Video Editing",
  "Color Grading",
  "Motion Graphics",
  "Reels",
  "YouTube",
  "Commercials",
  "Social Media",
  "VFX",
];

export default function Hero() {
  const scrollTo = useScrollTo();

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden"
    >
      {/* Background video — replace media.heroVideo in lib/data.js */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={media.heroPoster}
      >
        <source src={media.heroVideo} type="video/mp4" />
      </video>

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-ink/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/40 to-ink" />
      <div className="hero-glow absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-5 pt-24 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.6 }}
          className="glass mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-gold"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
          {siteConfig.role}
        </motion.span>

      <h1 className="font-display text-4xl font-semibold leading-[1.15] sm:text-6xl md:text-7xl">
  <span className="block">
    Turning Raw Footage Into Engaging Stories
  </span>
</h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.9, duration: 0.8 }}
          className="mx-auto mt-7 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base"
        >
          {siteConfig.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.1, duration: 0.7 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button
            href="#portfolio"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#portfolio");
            }}
            variant="primary"
          >
            View My Work
          </Button>
          <Button
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#contact");
            }}
            variant="ghost"
          >
            Contact Me
          </Button>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={() => scrollTo("#about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.4 }}
        className="absolute bottom-24 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/50"
        aria-label="Scroll down"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-white/30 p-1">
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
            className="h-1.5 w-1.5 rounded-full bg-gold"
          />
        </span>
      </motion.button>

      {/* Skills marquee */}
      <div className="absolute inset-x-0 bottom-0 z-10 overflow-hidden border-y border-white/10 bg-ink/40 py-3 backdrop-blur-sm">
        <div className="marquee flex w-max gap-8">
          {[...skills, ...skills].map((s, i) => (
            <span
              key={i}
              className="flex items-center gap-8 text-sm uppercase tracking-[0.2em] text-white/40"
            >
              {s} <span className="text-gold">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
