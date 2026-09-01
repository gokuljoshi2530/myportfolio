"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiStar } from "react-icons/fi";
import { testimonials } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";

export default function Testimonials() {
  const [[idx, dir], setState] = useState([0, 0]);

  const paginate = useCallback((d) => {
    setState(([i]) => [(i + d + testimonials.length) % testimonials.length, d]);
  }, []);

  useEffect(() => {
    const t = setInterval(() => paginate(1), 6000);
    return () => clearInterval(t);
  }, [paginate]);

  const t = testimonials[idx];

  return (
    <section id="testimonials" className="section-py relative overflow-hidden">
      <div className="container-px mx-auto max-w-4xl text-center">
        <SectionHeading eyebrow="Testimonials" title="Loved By Clients Worldwide" />

        <div className="relative mt-14 min-h-[320px] sm:min-h-[280px]">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={idx}
              custom={dir}
              initial={{ opacity: 0, x: dir >= 0 ? 60 : -60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir >= 0 ? -60 : 60 }}
              transition={{ duration: 0.5 }}
              className="glass rounded-3xl border border-white/10 p-8 sm:p-12"
            >
              <div className="mb-6 flex justify-center gap-1 text-gold">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <FiStar key={i} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="font-display text-xl leading-relaxed text-white/90 sm:text-2xl">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                {/* <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-14 w-14 rounded-full object-cover ring-2 ring-gold/40"
                /> */}
                <div className="text-left">
                  <div className="font-medium text-white">{t.name}</div>
                  <div className="text-sm text-gold">{t.role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={() => paginate(-1)}
            data-cursor="hover"
            aria-label="Previous testimonial"
            className="glass flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition-colors hover:text-gold"
          >
            <FiChevronLeft />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setState([i, i > idx ? 1 : -1])}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === idx ? "w-8 bg-gold" : "w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => paginate(1)}
            data-cursor="hover"
            aria-label="Next testimonial"
            className="glass flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition-colors hover:text-gold"
          >
            <FiChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
