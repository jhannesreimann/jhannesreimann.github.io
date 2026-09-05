"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import type { ProjectText } from "@/lib/i18n";

type Meta = {
  id: string;
  title: string;
  stack: string[];
  links: { label: string; href: string }[];
  image: string;
  alt: string;
  portrait?: boolean;
  isGif?: boolean;
};

const META: Meta[] = [
  {
    id: "dns",
    title: "dns-resolver-recommender",
    stack: ["Rust/WASM", "React 19", "Python", "Cloudflare API"],
    links: [
      { label: "Live", href: "https://dns.diic-hpi.org/" },
      { label: "GitHub", href: "https://github.com/jhannesreimann/dns-resolver-recommender" },
    ],
    image: "/screenshots/dns-resolver-recommender-new.png",
    alt: "DNS Resolver Recommender, live ranking view",
  },
  {
    id: "chonky",
    title: "chonkyflipper",
    stack: ["Raspberry Pi 4", "Kali ARM64", "Flask", "Vite + Tailwind"],
    links: [{ label: "GitHub", href: "https://github.com/jhannesreimann/chonkyflipper" }],
    image: "/screenshots/chonky-case.gif",
    alt: "ChonkyFlipper custom case, 3D animation loop",
    isGif: true,
  },
  {
    id: "therapy",
    title: "therapyalert",
    stack: ["React 19", "Flask", "Playwright", "Netlify"],
    links: [
      { label: "Live", href: "https://therapyalert.netlify.app/" },
      { label: "GitHub", href: "https://github.com/jhannesreimann/therapyalert" },
    ],
    image: "/screenshots/therapyalertnew.png",
    alt: "TherapyAlert, search and calendar view",
  },
  {
    id: "email",
    title: "email-client-selftest-service",
    stack: ["Python stdlib", "FastAPI", "Postfix/Dovecot"],
    links: [{ label: "GitHub", href: "https://github.com/jhannesreimann/email-client-selftest-service" }],
    image: "/screenshots/email-selftest-new.png",
    alt: "Selftest service guided run, hosted locally",
  },
  {
    id: "inclugo",
    title: "inclu-go, HackHPI 2025 WIN",
    stack: ["TypeScript", "React", "OpenStreetMap"],
    links: [
      { label: "GitHub", href: "https://github.com/SamuelLess/inclu-go" },
      { label: "Video", href: "https://www.youtube.com/watch/-fjqKHxNptQ" },
    ],
    image: "/screenshots/inclu-go-new.png",
    alt: "IncluGo on a phone, obstacle swipe view",
    portrait: true,
  },
];

function ExtIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path d="M3 9L9 3M9 3H4M9 3V8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ProjectsHorizontal({
  texts,
  hint,
}: {
  texts: readonly ProjectText[];
  hint: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [range, setRange] = useState(0);
  const [reduced, setReduced] = useState(false);

  const { scrollYProgress } = useScroll({ target: wrapRef, offset: ["start start", "end end"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.6 });
  const x = useTransform(smooth, [0, 1], [0, -range]);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const update = () => {
      if (!trackRef.current) return;
      const max = Math.max(0, trackRef.current.scrollWidth - window.innerWidth + 48);
      setRange(max);
    };
    update();
    window.addEventListener("resize", update);
    const t = setTimeout(update, 500);
    return () => {
      window.removeEventListener("resize", update);
      clearTimeout(t);
    };
  }, []);

  if (reduced) {
    return (
      <div className="grid gap-4">
        {META.map((m, i) => (
          <article key={m.id} className="border border-[var(--color-border)] bg-[var(--color-card)] overflow-hidden">
            <figure className="screenshot m-0 border-0 border-b border-[var(--color-border)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={m.image} alt={m.alt} loading="lazy" className="w-full h-auto" />
            </figure>
            <div className="p-5">
              <div className="text-[11px] font-mono tracking-widest uppercase text-[var(--color-ink-3)]">{texts[i]?.kicker}</div>
              <h3 className="mt-1 text-[18px] font-semibold">{m.title}</h3>
              <p className="mt-2 text-[14px] text-[var(--color-ink-2)]">{texts[i]?.impact}</p>
            </div>
          </article>
        ))}
      </div>
    );
  }

  return (
    <div ref={wrapRef} className="projects-pin" style={{ height: "340vh" }}>
      <div className="projects-sticky">
        <div className="max-w-[1280px] mx-auto w-full px-4 sm:px-6 lg:px-8 pt-10">
          <p className="text-[12px] font-mono text-[var(--color-ink-3)]">{hint}</p>
          <div className="mt-3 h-px w-full bg-[var(--color-border)]">
            <motion.div className="h-px origin-left bg-[var(--color-ink)]" style={{ scaleX: smooth }} />
          </div>
        </div>
        <div className="mt-6 flex-1 flex items-center overflow-hidden">
          <motion.div ref={trackRef} style={{ x }} className="projects-track px-4 sm:px-6 lg:px-8">
            {META.map((m, i) => (
              <motion.article
                key={m.id}
                data-hover
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="project-card border border-[var(--color-border)] bg-[var(--color-card)] flex flex-col overflow-hidden"
              >
                <figure className="screenshot m-0 border-0 border-b border-[var(--color-border)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={m.image}
                    alt={m.alt}
                    loading="lazy"
                    className={
                      m.portrait
                        ? "w-full h-[300px] sm:h-[340px] object-contain bg-[var(--color-paper-2)] p-2"
                        : "w-full h-[220px] sm:h-[260px] object-cover object-top"
                    }
                  />
                </figure>
                <div className="p-5 flex flex-col gap-2 flex-1 min-w-0">
                  <div className="text-[11px] font-mono tracking-widest uppercase text-[var(--color-ink-3)]">
                    {texts[i]?.kicker}
                  </div>
                  <h3 className="text-[17px] leading-tight font-semibold">{m.title}</h3>
                  <p className="text-[13px] leading-relaxed text-[var(--color-ink-2)]">{texts[i]?.impact}</p>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {m.stack.map((s) => (
                      <span key={s} className="text-[11px] font-mono px-2 py-1 border border-[var(--color-border)] text-[var(--color-ink-2)]">
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4 mt-auto pt-4 border-t border-[var(--color-border)]">
                    {m.links.map((l) => (
                      <a
                        key={l.label}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-[13px] font-mono text-[var(--color-ink)] underline decoration-[var(--color-border-strong)] underline-offset-4 hover:text-[var(--color-accent-2)] transition"
                      >
                        {l.label} <ExtIcon />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
            <div className="project-card border border-dashed border-[var(--color-border-strong)] flex items-center justify-center p-8 text-center">
              <div>
                <div className="text-[13px] font-mono text-[var(--color-ink-2)]">more on</div>
                <a href="https://github.com/jhannesreimann" target="_blank" rel="noreferrer" className="mt-1 inline-flex items-center gap-1.5 text-[15px] font-mono underline underline-offset-4">
                  github.com/jhannesreimann <ExtIcon />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
