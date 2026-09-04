"use client";
import { useEffect } from "react";
import Lenis from "lenis";

export default function LenisProvider() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.075,
      duration: 1.1,
    });
    return () => lenis.destroy();
  }, []);
  return null;
}
