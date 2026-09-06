"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CursorDot() {
  const [hover, setHover] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 140, damping: 18, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 140, damping: 18, mass: 0.6 });

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (coarse) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      setHover(!!t.closest("a, button, [data-hover], summary"));
    };
    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [x, y]);

  return (
    <>
      <motion.div className="cursor-dot-instant" style={{ x, y }} aria-hidden />
      <motion.div
        className="cursor-ring-lag"
        style={{ x: ringX, y: ringY }}
        animate={{
          scale: hover ? 1.35 : 1,
          backgroundColor: hover ? "rgba(255,255,255,1)" : "rgba(255,255,255,0)",
        }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        aria-hidden
      />
    </>
  );
}
