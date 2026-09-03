"use client";

import { motion } from "framer-motion";
import { easeOutExpo } from "@/lib/motion";

// Word-by-word masked reveal. Each word sits in an overflow-hidden box and
// slides up into view, staggered.
const container = {
  hidden: {},
  show: (delay = 0) => ({
    transition: { staggerChildren: 0.08, delayChildren: delay },
  }),
};

const word = {
  hidden: { y: "115%" },
  show: { y: 0, transition: { duration: 0.8, ease: easeOutExpo } },
};

export default function AnimatedText({
  text,
  className = "",
  delay = 0,
  as: Tag = "span",
  amount = 0.5,
}) {
  const words = text.split(" ");
  return (
    <Tag className={className}>
      <motion.span
        style={{ display: "inline" }}
        variants={container}
        custom={delay}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount }}
      >
        {words.map((w, i) => (
          <span
            key={i}
            style={{
              display: "inline-block",
              overflow: "visible",
              verticalAlign: "bottom",
            }}
          >
            <motion.span
              variants={word}
              style={{ display: "inline-block", willChange: "transform" }}
            >
              {w}
              {i < words.length - 1 ? " " : ""}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
