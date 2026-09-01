"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// Drag (or touch) the handle to compare the "before" and "after" grade.
export default function BeforeAfterSlider({
  before,
  after,
  beforeLabel = "Before",
  afterLabel = "After",
}) {
  const ref = useRef(null);
  const dragging = useRef(false);
  const [pos, setPos] = useState(50);

  const setFromClientX = useCallback((clientX) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  }, []);

  useEffect(() => {
    const move = (e) => {
      if (!dragging.current) return;
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      setFromClientX(x);
    };
    const up = () => {
      dragging.current = false;
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
    window.addEventListener("touchmove", move, { passive: true });
    window.addEventListener("touchend", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("touchend", up);
    };
  }, [setFromClientX]);

  const start = (clientX) => {
    dragging.current = true;
    setFromClientX(clientX);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-white/50">
        <span className="text-gold">Color Grading</span> · Drag to compare
      </div>
      <div
        ref={ref}
        onMouseDown={(e) => start(e.clientX)}
        onTouchStart={(e) => start(e.touches[0].clientX)}
        className="gold-border relative aspect-video w-full cursor-ew-resize select-none overflow-hidden rounded-3xl"
      >
        {/* After (full) */}
        <img
          src={after}
          alt="After editing"
          draggable={false}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <span className="glass absolute bottom-4 right-4 rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-widest text-gold">
          {afterLabel}
        </span>

        {/* Before (clipped via clip-path — stays full-size, no squish) */}
        <img
          src={before}
          alt="Before editing"
          draggable={false}
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <span
          className="glass absolute bottom-4 left-4 rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-widest text-white/70"
          style={{ opacity: pos > 14 ? 1 : 0 }}
        >
          {beforeLabel}
        </span>

        {/* Handle */}
        <div
          className="absolute bottom-0 top-0"
          style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
        >
          <div className="mx-auto h-full w-0.5 bg-gold" />
          <div className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gold text-ink shadow-lg">
            <span className="text-sm font-bold tracking-tighter">&#8596;</span>
          </div>
        </div>
      </div>
    </div>
  );
}
