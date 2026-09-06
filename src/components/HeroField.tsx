"use client";
import { useEffect, useRef } from "react";

// Gaze vector field: dim dots at rest, line glyphs near the cursor that
// point at it (angle quantized to 4 sectors), brightness ramp by proximity,
// slow sine drift when the pointer is away. The gaze follows a smoothed
// cursor so it trails behind fast moves instead of snapping to the pointer.
const CELL = 26;
const RADIUS = 190;
const FOLLOW = 0.08;
const GLYPHS = ["\u2500", "\u2572", "\u2502", "\u2571"];

export default function HeroField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const host = canvas.parentElement;
    if (!host) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    let w = 0;
    let h = 0;
    let raf = 0;
    let visible = true;
    const mouse = { x: -9999, y: -9999, active: false };
    const sm = { x: -9999, y: -9999 };

    const resize = () => {
      const rect = host.getBoundingClientRect();
      w = Math.max(1, rect.width);
      h = Math.max(1, rect.height);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const draw = (t: number) => {
      sm.x += (mouse.x - sm.x) * FOLLOW;
      sm.y += (mouse.y - sm.y) * FOLLOW;
      ctx.clearRect(0, 0, w, h);
      ctx.font = "13px 'JetBrains Mono', ui-monospace, monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      for (let y = CELL / 2; y < h; y += CELL) {
        for (let x = CELL / 2; x < w; x += CELL) {
          const dx = sm.x - x;
          const dy = sm.y - y;
          const dist = Math.hypot(dx, dy);
          if (mouse.active && dist < RADIUS) {
            const a = Math.atan2(dy, dx);
            const sector = ((Math.round(a / (Math.PI / 4)) % 4) + 4) % 4;
            const heat = 1 - dist / RADIUS;
            const alpha = 0.15 + heat * 0.6;
            ctx.fillStyle =
              heat > 0.65
                ? `rgba(125,219,163,${alpha.toFixed(3)})`
                : `rgba(150,158,170,${alpha.toFixed(3)})`;
            ctx.fillText(GLYPHS[sector], x, y);
          } else {
            const wave =
              Math.sin(x * 0.018 + t * 0.0006) * Math.cos(y * 0.02 - t * 0.0004);
            const alpha = 0.12 + Math.max(0, wave) * 0.08;
            ctx.fillStyle = `rgba(140,150,165,${alpha.toFixed(3)})`;
            ctx.fillText("\u00B7", x, y);
          }
        }
      }
    };

    if (reduced) {
      draw(0);
      const ro = new ResizeObserver(() => {
        resize();
        draw(0);
      });
      ro.observe(host);
      return () => ro.disconnect();
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    io.observe(canvas);

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      const lx = e.clientX - r.left;
      const ly = e.clientY - r.top;
      if (!mouse.active) {
        sm.x = lx;
        sm.y = ly;
      }
      mouse.x = lx;
      mouse.y = ly;
      mouse.active = true;
    };
    const onLeave = () => {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
      sm.x = -9999;
      sm.y = -9999;
    };
    host.addEventListener("pointermove", onMove, { passive: true });
    host.addEventListener("pointerleave", onLeave);

    const ro = new ResizeObserver(resize);
    ro.observe(host);

    const tick = (t: number) => {
      raf = requestAnimationFrame(tick);
      if (!visible) return;
      draw(t);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden />;
}
