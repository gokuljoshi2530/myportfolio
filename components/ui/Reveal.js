"use client";

import { motion } from "framer-motion";
import { easeOutExpo } from "@/lib/motion";

export default function Reveal({
  children,
  className = "",
  delay = 0,
  y = 40,
  once = true,
  amount = 0.3,
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.7, ease: easeOutExpo, delay }}
    >
      {children}
    </motion.div>
  );
}
