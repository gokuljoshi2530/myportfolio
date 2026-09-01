"use client";

import { FiArrowUp } from "react-icons/fi";
import { navLinks, siteConfig, socials } from "@/lib/data";
import { icons } from "@/lib/icons";
import { useScrollTo } from "@/lib/scroll";

export default function Footer() {
  const scrollTo = useScrollTo();

  return (
    <footer className="relative border-t border-white/10 pb-8 pt-16">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <button
              onClick={() => scrollTo("#home")}
              data-cursor="hover"
              className="font-display text-2xl font-semibold"
            >
              {siteConfig.firstName}
              <span className="text-gold">.</span>
            </button>
            <p className="mt-4 max-w-xs text-sm text-white/50">
              {siteConfig.tagline}. Available for freelance projects &amp;
              collaborations worldwide.
            </p>
            <div className="mt-5 flex gap-3">
              {socials.map((s) => {
                const Icon = icons[s.icon];
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="hover"
                    aria-label={s.name}
                    className="glass flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition-colors hover:border-gold/40 hover:text-gold"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/40">Navigate</h4>
            <ul className="mt-4 space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => scrollTo(l.href)}
                    data-cursor="hover"
                    className="text-sm text-white/60 transition-colors hover:text-gold"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/40">
              Get In Touch
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  data-cursor="hover"
                  className="transition-colors hover:text-gold"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phoneTel}`}
                  data-cursor="hover"
                  className="transition-colors hover:text-gold"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>{siteConfig.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <button
            onClick={() => scrollTo("#home")}
            data-cursor="hover"
            className="flex items-center gap-2 text-xs text-white/50 transition-colors hover:text-gold"
          >
            Back to top <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}
