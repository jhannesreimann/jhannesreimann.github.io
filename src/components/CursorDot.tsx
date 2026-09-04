"use client";
import { useEffect, useRef } from "react";

export default function CursorDot() {
  const ref = useRef<HTMLDivElement>(null);
  const target = useRef({ x: -100, y: -100 });
  const pos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (coarse) return;

    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };
    const onEnter = () => (el.style.opacity = "0.9");
    const onLeave = () => (el.style.opacity = "0");
    const onDown = () => {
      el.style.width = "18px";
      el.style.height = "18px";
    };
    const onUp = () => {
      el.style.width = "10px";
      el.style.height = "10px";
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseenter", onEnter);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    let raf = 0;
    const tick = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.18;
      pos.current.y += (target.current.y - pos.current.y) * 0.18;
      el.style.left = `${pos.current.x}px`;
      el.style.top = `${pos.current.y}px`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);
  return <div ref={ref} className="cursor-dot" aria-hidden />;
}
