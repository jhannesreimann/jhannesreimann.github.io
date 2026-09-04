"use client";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { motion } from "motion/react";

type Project = {
  id: string;
  title: string;
  kicker: string;
  impact: string;
  stack: string[];
  links: { label: string; href: string }[];
  image: string;
  alt: string;
};

const PROJECTS: Project[] = [
  {
    id: "dns",
    title: "dns-resolver-recommender",
    kicker: "01 — DoH performance · HPI TIM",
    impact: "Ranks DNS-over-HTTPS resolvers from the browser with a Rust/WASM engine.",
    stack: ["Rust/WASM", "React 19", "Python", "Cloudflare API"],
    links: [
      { label: "Live →", href: "https://dns.diic-hpi.org/" },
      { label: "GitHub", href: "https://github.com/jhannesreimann/dns-resolver-recommender" },
    ],
    image: "/screenshots/dns-resolver-recommender.png",
    alt: "DNS Resolver Recommender screenshot",
  },
  {
    id: "chonky",
    title: "chonkyflipper",
    kicker: "02 — IoT pentesting · Pi 4",
    impact: "Portable framework: WiFi, BLE, IR, sub-GHz, Zigbee, NFC + BadUSB from a phone.",
    stack: ["Raspberry Pi 4", "Kali ARM64", "Flask", "Vite + Tailwind"],
    links: [{ label: "GitHub", href: "https://github.com/jhannesreimann/chonkyflipper" }],
    image: "/screenshots/chonkyflipper.png",
    alt: "ChonkyFlipper screenshot",
  },
  {
    id: "therapy",
    title: "therapyalert",
    kicker: "03 — Health access · KVBB / 116117",
    impact: "Finds free psychotherapy slots across KVBB + 116117 eTerminservice as a weekly calendar.",
    stack: ["React 19", "Flask", "Playwright", "Netlify"],
    links: [
      { label: "Live →", href: "https://therapyalert.netlify.app/" },
      { label: "GitHub", href: "https://github.com/jhannesreimann/therapyalert" },
    ],
    image: "/screenshots/therapyalert.png",
    alt: "TherapyAlert screenshot",
  },
  {
    id: "email",
    title: "email-client-selftest-service",
    kicker: "04 — Mail security · HPI NSIP 25/26",
    impact: "Misbehaving mail server to test if your client survives STARTTLS downgrade or falls back to plaintext.",
    stack: ["Python stdlib", "FastAPI", "Postfix/Dovecot", "mitmproxy"],
    links: [{ label: "GitHub", href: "https://github.com/jhannesreimann/email-client-selftest-service" }],
    image: "/screenshots/email-selftest.png",
    alt: "Email client selftest screenshot",
  },
  {
    id: "inclugo",
    title: "inclu-go — HackHPI 2025 WIN",
    kicker: "05 — Accessibility · Ottobock challenge",
    impact: "Personalized obstacle-aware mapping — every disability is unique. Challenge #1 winner.",
    stack: ["TypeScript", "React", "OpenStreetMap", "Award"],
    links: [{ label: "GitHub", href: "https://github.com/SamuelLess/inclu-go" }],
    image: "/screenshots/inclu-go.png",
    alt: "IncluGo screenshot",
  },
];

export default function ProjectsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", containScroll: "trimSnaps", dragFree: false });
  const [selected, setSelected] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div className="flex items-center justify-between gap-4 mb-5">
        <div className="flex items-center gap-2 text-[12px] font-mono tracking-widest text-[var(--color-ink-3)] uppercase">
          <span className="hidden sm:inline">drag · scroll · snap</span>
          <span className="sm:hidden">swipe</span>
          <span className="h-3 w-px bg-[var(--color-border)] mx-1" />
          <span className="text-[11px] normal-case tracking-normal font-mono text-[var(--color-ink-muted)]">
            {String(selected + 1).padStart(2, "0")} / {String(PROJECTS.length).padStart(2, "0")}
          </span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canPrev}
            aria-label="Previous project"
            className="h-8 w-8 grid place-items-center border border-[var(--color-border)] bg-white text-[var(--color-ink-2)] disabled:opacity-40 disabled:cursor-not-allowed hover:border-[var(--color-border-strong)] transition"
          >
            ‹
          </button>
          <button
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canNext}
            aria-label="Next project"
            className="h-8 w-8 grid place-items-center border border-[var(--color-border)] bg-white text-[var(--color-ink-2)] disabled:opacity-40 disabled:cursor-not-allowed hover:border-[var(--color-border-strong)] transition"
          >
            ›
          </button>
        </div>
      </div>

      <div className="embla -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8" ref={emblaRef}>
        <div className="embla__container gap-4 sm:gap-5">
          {PROJECTS.map((p) => (
            <div key={p.id} className="embla__slide">
              <motion.article
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="group h-full border border-[var(--color-border)] bg-white flex flex-col overflow-hidden hover:border-[var(--color-border-strong)] transition-colors"
              >
                <figure className="screenshot aspect-[16/10] bg-[var(--color-paper-2)] m-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image}
                    alt={p.alt}
                    loading="lazy"
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      const t = e.currentTarget;
                      t.style.display = "none";
                      const ph = t.nextElementSibling as HTMLElement | null;
                      if (ph) ph.style.display = "grid";
                    }}
                  />
                  <div
                    style={{ display: "none" }}
                    className="w-full h-full place-items-center text-[12px] font-mono text-[var(--color-ink-3)] p-6 text-center"
                  >
                    screenshot to confirm — will be captured via Playwright
                    <br />
                    <span className="text-[var(--color-ink-muted)]">{p.image}</span>
                  </div>
                </figure>
                <div className="p-5 sm:p-6 flex flex-col gap-3 flex-1 min-w-0">
                  <div className="text-[11px] font-mono tracking-widest uppercase text-[var(--color-ink-3)]">{p.kicker}</div>
                  <h3 className="text-[18px] sm:text-[20px] leading-tight font-semibold tracking-tight min-w-0 overflow-wrap-anywhere">
                    {p.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-[var(--color-ink-2)] line-clamp-3">{p.impact}</p>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="text-[11px] font-mono px-2 py-1 border border-[var(--color-border)] bg-[var(--color-paper-2)] text-[var(--color-ink-2)]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-[var(--color-border)]">
                    {p.links.map((l) => (
                      <a
                        key={l.label}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[13px] font-mono underline decoration-[var(--color-border-strong)] underline-offset-4 hover:decoration-[var(--color-accent)] hover:text-[var(--color-accent-2)] transition"
                      >
                        {l.label}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.article>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-1.5 mt-4 justify-center lg:justify-start">
        {PROJECTS.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 transition-all ${i === selected ? "w-8 bg-[var(--color-accent)]" : "w-3 bg-[var(--color-border-strong)] hover:bg-[var(--color-ink-3)]"}`}
          />
        ))}
      </div>
    </div>
  );
}
