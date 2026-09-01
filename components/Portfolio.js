"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiPlay, FiX } from "react-icons/fi";
import { media, portfolioCategories, portfolioItems } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import BeforeAfterSlider from "./BeforeAfterSlider";

export default function Portfolio() {
  const [cat, setCat] = useState("All");
  const [active, setActive] = useState(null);

  const items =
    cat === "All"
      ? portfolioItems
      : portfolioItems.filter((p) => p.category === cat);

  return (
    <section id="portfolio" className="section-py relative">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected Work That Speaks"
          subtitle="A curated showcase of reels, YouTube videos, commercials and motion graphics — crafted to captivate and convert."
        />

        {/* Before / After feature */}
        <Reveal className="mt-14">
          <BeforeAfterSlider
            before={media.beforeAfter.before}
            after={media.beforeAfter.after}
          />
        </Reveal>

        {/* Filters */}
        <div className="mt-16 flex flex-wrap justify-center gap-2">
          {portfolioCategories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              data-cursor="hover"
              className={`relative rounded-full px-5 py-2.5 text-sm transition-colors ${
                cat === c ? "text-ink" : "text-white/60 hover:text-white"
              }`}
            >
              {cat === c && (
                <motion.span
                  layoutId="filterPill"
                  className="absolute inset-0 rounded-full bg-gold"
                  transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
                />
              )}
              <span className="relative z-10">{c}</span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {items.map((item) => (
              <motion.button
                key={item.id}
                layout
                data-cursor="hover"
                onClick={() => setActive(item)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="gold-border group relative aspect-[4/3] overflow-hidden rounded-2xl text-left"
              >
                {/* Replace item.image in lib/data.js with your thumbnail */}
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent opacity-90" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/90 text-ink">
                    <FiPlay className="ml-1 text-2xl" />
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 p-5">
                  <span className="text-xs uppercase tracking-widest text-gold">
                    {item.category}
                  </span>
                  <h3 className="font-display text-lg text-white">{item.title}</h3>
                  <p className="text-xs text-white/50">{item.client}</p>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[95] flex items-center justify-center bg-ink/85 p-5 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="gold-border relative w-full max-w-4xl overflow-hidden rounded-2xl bg-ink-soft"
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-ink/70 text-white transition-colors hover:text-gold"
              >
                <FiX />
              </button>
              {/* Placeholder preview uses the sample reel — swap per project later */}
              <video
                className="aspect-video w-full bg-black"
                src={media.showreelVideo}
                poster={active.image}
                controls
                autoPlay
                playsInline
              />
              <div className="p-5">
                <span className="text-xs uppercase tracking-widest text-gold">
                  {active.category}
                </span>
                <h3 className="font-display text-2xl text-white">{active.title}</h3>
                <p className="text-sm text-white/50">{active.client}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
