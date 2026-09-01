"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";
import { stats } from "@/lib/data";
import { icons } from "@/lib/icons";
import { easeOutExpo } from "@/lib/motion";

function Counter({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 2,
      ease: easeOutExpo,
      onUpdate: (v) => setVal(Math.floor(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return <span ref={ref}>{val}</span>;
}

export default function Stats() {
  return (
    <section className="section-py relative">
      <div className="container-px mx-auto max-w-7xl">
        <div className="glass grid grid-cols-2 overflow-hidden rounded-3xl border border-white/10 lg:grid-cols-4">
          {stats.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex flex-col items-center justify-center gap-2 border-b border-r border-white/5 p-8 text-center last:border-r-0"
              >
                <Icon className="text-2xl text-gold" />
                <div className="font-display text-4xl font-semibold text-white sm:text-5xl">
                  <Counter value={s.value} />
                  <span className="text-gradient-gold">{s.suffix}</span>
                </div>
                <span className="text-xs uppercase tracking-wider text-white/50 sm:text-sm">
                  {s.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
