"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function TypedPrompt({ text = "whoami" }: { text?: string }) {
  const [out, setOut] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setOut(text);
      setDone(true);
      return;
    }
    let i = 0;
    const id = setInterval(() => {
      i++;
      setOut(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(id);
        setDone(true);
      }
    }, 70);
    return () => clearInterval(id);
  }, [text]);

  return (
    <span className="font-mono text-[13px] tracking-tight">
      <span className="text-[var(--color-ink-3)]">jhannes@hpi:~$</span>{" "}
      <span className="text-[var(--color-ink)]">{out}</span>
      <motion.span
        aria-hidden
        className="inline-block w-[9px] h-[14px] bg-[var(--color-accent)] ml-[3px] translate-y-[2px]"
        animate={{ opacity: done ? [1, 0, 1] : 1 }}
        transition={done ? { duration: 0.9, repeat: Infinity } : undefined}
      />
    </span>
  );
}
