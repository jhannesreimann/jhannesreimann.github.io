"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import type { ProjectText } from "@/lib/i18n";
import { ExpandHint, openLightbox } from "@/components/Lightbox";

type Meta = {
  id: string;
  title: string;
  stack: string[];
  links: { label: string; href: string }[];
  image: string;
  alt: string;
  portrait?: boolean;
  video?: string;
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
    image: "/screenshots/chonky-case.mp4",
    alt: "ChonkyFlipper custom case, 3D animation loop",
    video: "/screenshots/chonky-case.mp4",
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
    const t1 = setTimeout(update, 500);
    const t2 = setTimeout(update, 1500);
    const t3 = setTimeout(update, 3000);
    window.addEventListener("resize", update);
    window.addEventListener("load", update);
    const ro = new ResizeObserver(update);
    if (trackRef.current) ro.observe(trackRef.current);
    const imgs = trackRef.current?.querySelectorAll("img") ?? [];
    imgs.forEach((img) => {
      if (!img.complete) img.addEventListener("load", update, { once: true });
    });
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("load", update);
      ro.disconnect();
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  if (reduced) {
    return (
      <div className="grid gap-4">
        {META.map((m, i) => (
          <article key={m.id} className="border border-[var(--color-border)] bg-[var(--color-card)] overflow-hidden">
            <figure className="screenshot group relative m-0 border-0 border-b border-[var(--color-border)]">
              {m.video ? (
                <video src={m.video} muted loop playsInline preload="metadata" controls className="w-full h-auto" />
              ) : (
                <button
                  onClick={() => openLightbox(m.image, `${m.title}: ${m.alt}`)}
                  aria-label={`Open ${m.title} image viewer`}
                  className="block w-full cursor-pointer"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.image} alt={m.alt} loading="lazy" className="w-full h-auto pointer-events-none" />
                </button>
              )}
              {!m.video && <ExpandHint />}
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
                className="project-card border border-[var(--color-border)] bg-[var(--color-card)] flex flex-col overflow-hidden h-[560px] sm:h-[590px] md:h-[610px]"
              >
                <figure className="screenshot group relative m-0 border-0 border-b border-[var(--color-border)] h-[220px] sm:h-[260px] md:h-[300px] shrink-0 bg-[var(--color-paper-2)]">
                  <button
                    onClick={() => openLightbox(m.image, `${m.title}: ${m.alt}`)}
                    aria-label={`Open ${m.title} image viewer`}
                    data-hover
                    className="block w-full h-full cursor-pointer"
                  >
                    {m.video ? (
                      <video
                        src={m.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        className="w-full h-full object-contain object-center pointer-events-none"
                      />
                    ) : (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={m.image}
                        alt={m.alt}
                        loading="lazy"
                        className="w-full h-full object-contain object-center pointer-events-none"
                      />
                    )}
                  </button>
                  <ExpandHint />
                </figure>
                <div className="p-5 flex flex-col gap-2 flex-1 min-w-0 min-h-0">
                  <div className="text-[11px] font-mono tracking-widest uppercase text-[var(--color-ink-3)]">
                    {texts[i]?.kicker}
                  </div>
                  <h3 className="text-[17px] leading-tight font-semibold">{m.title}</h3>
                  <p className="text-[13px] leading-relaxed text-[var(--color-ink-2)] line-clamp-3">{texts[i]?.impact}</p>
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
            <div className="project-card h-[560px] sm:h-[590px] md:h-[610px] flex flex-col items-center justify-center gap-3 p-8 text-center bg-transparent">
              <svg width="30" height="30" viewBox="0 0 16 16" fill="currentColor" aria-hidden className="text-[var(--color-ink-3)]">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
              </svg>
              <div className="text-[11px] font-mono tracking-widest uppercase text-[var(--color-ink-3)]">more on github</div>
              <a
                href="https://github.com/jhannesreimann"
                target="_blank"
                rel="noreferrer"
                data-hover
                className="inline-flex items-center gap-1.5 text-[15px] font-mono text-[var(--color-ink)] underline decoration-[var(--color-border-strong)] underline-offset-4 hover:decoration-[var(--color-ink)] transition"
              >
                jhannesreimann <ExtIcon />
              </a>
              <div className="text-[11px] font-mono text-[var(--color-ink-muted)]">17 public repos</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
