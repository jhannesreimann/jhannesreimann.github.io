"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export type LightItem = { src: string; alt: string };

let fire: ((item: LightItem | null) => void) | null = null;

export function openLightbox(src: string, alt: string) {
  fire?.({ src, alt });
}

export function LightboxHost({ closeLabel }: { closeLabel: string }) {
  const [item, setItem] = useState<LightItem | null>(null);

  useEffect(() => {
    fire = setItem;
    return () => {
      fire = null;
    };
  }, []);

  useEffect(() => {
    if (!item) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setItem(null);
    };
    window.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [item]);

  const isVideo = !!item?.src.endsWith(".mp4");

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-[2px] flex items-center justify-center p-4 sm:p-8"
          data-lenis-prevent
          onClick={() => setItem(null)}
        >
          <motion.figure
            initial={{ y: 14, scale: 0.98 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 10, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="screenshot m-0 w-full max-w-5xl overflow-hidden bg-[var(--color-paper)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 px-3 py-2 border-b border-[var(--color-border)]">
              <span className="font-mono text-[11px] text-[var(--color-ink-3)] truncate">
                ~/img/{item.src.split("/").pop()}
              </span>
              <button
                onClick={() => setItem(null)}
                aria-label="Close viewer"
                className="shrink-0 px-2.5 py-1 border border-[var(--color-border)] font-mono text-[11px] text-[var(--color-ink)] hover:border-[var(--color-border-strong)] transition whitespace-nowrap"
              >
                {closeLabel} x
              </button>
            </div>
            <div className="bg-black/40 flex items-center justify-center">
              {isVideo ? (
                <video src={item.src} controls autoPlay loop playsInline className="w-full max-h-[72vh]" />
              ) : (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img src={item.src} alt={item.alt} className="w-full max-h-[72vh] object-contain" />
              )}
            </div>
            <figcaption className="px-3 py-2 font-mono text-[11px] text-[var(--color-ink-3)] border-t border-[var(--color-border)]">
              {item.alt}
            </figcaption>
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
