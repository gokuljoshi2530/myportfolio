"use client";

import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}) {
  const isCenter = align === "center";
  return (
    <div
      className={`flex flex-col ${
        isCenter ? "items-center text-center mx-auto" : "items-start text-left"
      } max-w-3xl ${className}`}
    >
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-gold"
        >
          <span className="h-px w-8 bg-gold/60" /> {eyebrow}
        </motion.span>
      )}
      <AnimatedText
        as="h2"
        text={title}
        className="font-display text-4xl font-semibold leading-[1.05] sm:text-5xl md:text-6xl"
      />
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-5 text-base leading-relaxed text-white/60 sm:text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
