"use client";

import { motion } from "framer-motion";
import { media, siteConfig, expertise } from "@/lib/data";
import { icons } from "@/lib/icons";
import AnimatedText from "./ui/AnimatedText";
import { staggerContainer, fadeUp } from "@/lib/motion";

export default function About() {
  return (
    <section id="about" className="section-py relative overflow-hidden">
      <div className="container-px mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="gold-border relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
            {/* Replace media.about in lib/data.js with your photo */}
            <img
              src={media.about}
              alt={siteConfig.name}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="glass-strong absolute -bottom-6 right-2 rounded-2xl border border-gold/20 p-5 text-center sm:right-6"
          >
            <div className="text-gradient-gold font-display text-3xl">4+</div>
            <div className="text-xs uppercase leading-tight tracking-widest text-white/60">
              Years
              <br />
              Experience
            </div>
          </motion.div>
          <div className="absolute -left-4 -top-6 -z-10 h-24 w-24 rounded-full bg-gold/20 blur-2xl" />
        </motion.div>

        {/* Text */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-gold"
          >
            <span className="h-px w-8 bg-gold/60" /> About Me
          </motion.span>

          <AnimatedText
            as="h2"
            text="Crafting Stories That Keep Viewers Hooked"
            className="font-display text-3xl font-semibold leading-[1.1] sm:text-4xl md:text-5xl"
          />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 space-y-4 leading-relaxed text-white/65"
          >
            <p>
              I&apos;m {siteConfig.name}, a professional video editor helping creators,
              founders and brands turn raw footage into scroll-stopping, high-retention
              content. From punchy reels to cinematic commercials, I obsess over pacing,
              emotion and detail.
            </p>
            <p>
              With a sharp eye for colour, rhythm and motion, I blend storytelling with
              technical precision — delivering edits that don&apos;t just look premium,
              they perform.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-8 grid grid-cols-2 gap-3"
          >
            {expertise.map((e) => {
              const Icon = icons[e.icon];
              return (
                <motion.div
                  key={e.title}
                  variants={fadeUp}
                  className="glass flex items-start gap-3 rounded-xl border border-white/10 p-4"
                >
                  <span className="mt-0.5 text-lg text-gold">
                    <Icon />
                  </span>
                  <div>
                    <div className="text-sm font-medium text-white">{e.title}</div>
                    <div className="text-xs text-white/45">{e.desc}</div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
