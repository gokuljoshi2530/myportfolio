"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 300, damping: 28, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 300, damping: 28, mass: 0.5 });
  const [hovered, setHovered] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target;
      setHovered(
        !!(t.closest && t.closest('a,button,input,textarea,[data-cursor="hover"]'))
      );
    };
    const leave = () => setHidden(true);
    const enter = () => setHidden(false);
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, [x, y]);

  return (
    <div className="cursor-root" aria-hidden>
      {/* Dot — follows instantly */}
      <motion.div
        style={{ x, y, opacity: hidden ? 0 : 1 }}
        className="pointer-events-none fixed left-0 top-0 z-[90]"
      >
        <div className="h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold" />
      </motion.div>
      {/* Ring — trails with spring, grows on hover */}
      <motion.div
        style={{ x: ringX, y: ringY, opacity: hidden ? 0 : 1 }}
        className="pointer-events-none fixed left-0 top-0 z-[90]"
      >
        <motion.div
          className="-translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/60"
          animate={{
            width: hovered ? 48 : 30,
            height: hovered ? 48 : 30,
            backgroundColor: hovered
              ? "rgba(212,175,55,0.12)"
              : "rgba(212,175,55,0)",
          }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        />
      </motion.div>
    </div>
  );
}
