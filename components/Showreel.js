"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiPlay } from "react-icons/fi";
import { media } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";

export default function Showreel() {
  const [play, setPlay] = useState(false);

  return (
    <section id="showreel" className="section-py relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[120px]" />

      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Showreel"
          title="My Best Work In Motion"
          subtitle="A cinematic cut of my favourite frames, transitions and stories — press play."
        />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="gold-border group relative mt-12 aspect-video w-full overflow-hidden rounded-3xl"
        >
          {play ? (
            <video
              className="h-full w-full bg-black"
              src={media.showreelVideo}
              poster={media.showreelPoster}
              controls
              autoPlay
              playsInline
            />
          ) : (
            <button
              onClick={() => setPlay(true)}
              data-cursor="hover"
              className="absolute inset-0 h-full w-full"
              aria-label="Play showreel"
            >
              {/* Replace media.showreelPoster / media.showreelVideo in lib/data.js */}
              <img
                src={media.showreelPoster}
                alt="Showreel preview"
                className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/40 transition-colors duration-500 group-hover:bg-ink/30" />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gold text-ink sm:h-24 sm:w-24">
                  <span className="absolute inset-0 animate-ping rounded-full bg-gold opacity-40" />
                  <FiPlay className="relative ml-1 text-3xl" />
                </span>
              </span>
              <span className="absolute bottom-5 left-6 font-display text-lg text-white">
                Watch the Showreel
              </span>
            </button>
          )}
        </motion.div>
      </div>
    </section>
  );
}
