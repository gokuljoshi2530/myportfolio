"use client";

import { FiArrowUpRight } from "react-icons/fi";
import Magnetic from "./Magnetic";

export default function Button({
  as: Comp = "a",
  href,
  onClick,
  children,
  variant = "primary",
  icon = true,
  className = "",
  ...props
}) {
  const base =
    "group relative inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-300";
  const styles =
    variant === "primary"
      ? "bg-gold text-ink hover:bg-gold-light hover:shadow-[0_10px_40px_-10px_rgba(212,175,55,0.6)]"
      : "glass border border-white/15 text-white hover:border-gold/50 hover:text-gold";

  return (
    <Magnetic className="inline-block">
      <Comp
        href={href}
        onClick={onClick}
        data-cursor="hover"
        className={`${base} ${styles} ${className}`}
        {...props}
      >
        <span>{children}</span>
        {icon && (
          <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        )}
      </Comp>
    </Magnetic>
  );
}
