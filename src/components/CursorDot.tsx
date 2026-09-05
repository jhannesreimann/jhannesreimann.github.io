"use client";
import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CursorDot() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 140, damping: 18, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 140, damping: 18, mass: 0.6 });
  const scale = useMotionValue(1);
  const ringScale = useSpring(scale, { stiffness: 200, damping: 20 });

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
      const interactive = t.closest("a, button, [data-hover], summary, iframe");
      scale.set(interactive ? 2.2 : 1);
    };
    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [x, y, scale]);

  return (
    <>
      <motion.div className="cursor-dot-instant" style={{ x, y }} aria-hidden />
      <motion.div className="cursor-ring-lag" style={{ x: ringX, y: ringY, scale: ringScale }} aria-hidden />
    </>
  );
}
