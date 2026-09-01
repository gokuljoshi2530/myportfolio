"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/data";
import { icons } from "@/lib/icons";
import SectionHeading from "./ui/SectionHeading";
import { staggerContainer, fadeUp } from "@/lib/motion";

export default function Services() {
  return (
    <section id="services" className="section-py relative">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Services"
          title="What I Can Do For You"
          subtitle="End-to-end post-production services tailored for creators, founders and brands."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((s) => {
            const Icon = icons[s.icon];
            return (
              <motion.div
                key={s.num}
                variants={fadeUp}
                data-cursor="hover"
                className="glass group relative overflow-hidden rounded-2xl border border-white/10 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-gold/40"
              >
                <div className="glow-corner absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="flex items-center justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 text-2xl text-gold transition-all duration-500 group-hover:bg-gold group-hover:text-ink">
                    <Icon />
                  </span>
                  <span className="font-display text-4xl text-white/10 transition-colors duration-500 group-hover:text-gold/30">
                    {s.num}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl text-white">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">{s.desc}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-xs uppercase tracking-widest text-gold opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  Learn more &rarr;
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
