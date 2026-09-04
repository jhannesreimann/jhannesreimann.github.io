/* Hallmark · pre-emit critique: P5 H4 E5 S4 R5 V5 — Workbench mono restraint, no neon, real figures */
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import LenisProvider from "@/components/LenisProvider";
import CursorDot from "@/components/CursorDot";
import TypedPrompt from "@/components/TypedPrompt";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import { dict, type Lang } from "@/lib/i18n";

export default function Page() {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved === "en" || saved === "de") setLang(saved);
    else if (navigator.language.startsWith("de")) setLang("de");
  }, []);
  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = dict[lang];
  const toggle = () => setLang((l) => (l === "en" ? "de" : "en"));

  return (
    <>
      <LenisProvider />
      <CursorDot />

      {/* N8 Terminal command nav */}
      <header className="sticky top-0 z-40 backdrop-blur-[8px] bg-[var(--color-paper)]/80 border-b border-[var(--color-border)]">
        <nav className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-[56px] flex items-center justify-between gap-2 sm:gap-4 min-w-0">
          <Link href="#" className="font-mono text-[13px] tracking-tight flex items-center gap-2 min-w-0 shrink">
            <span className="h-2 w-2 rounded-full bg-[var(--color-accent)] shrink-0" aria-hidden />
            <span className="text-[var(--color-ink-3)] hidden sm:inline">jhannes@hpi:~$</span>
            <span className="text-[var(--color-ink)] truncate">jhannes-reimann</span>
            <span className="w-[9px] h-[14px] bg-[var(--color-accent)] ml-1 hidden sm:inline-block translate-y-[1px] opacity-70" aria-hidden />
          </Link>
          <div className="flex items-center gap-1 sm:gap-1.5 text-[12px] sm:text-[13px] font-mono shrink-0">
            <a href="#projects" className="px-2 sm:px-3 py-1.5 hover:bg-[var(--color-paper-3)] border border-transparent hover:border-[var(--color-border)] transition whitespace-nowrap">
              {t.nav_projects}
            </a>
            <a href="#thesis" className="hidden sm:inline-flex px-2 sm:px-3 py-1.5 hover:bg-[var(--color-paper-3)] border border-transparent hover:border-[var(--color-border)] transition whitespace-nowrap">
              {t.nav_thesis}
            </a>
            <a href="#awards" className="hidden sm:inline-flex px-2 sm:px-3 py-1.5 hover:bg-[var(--color-paper-3)] border border-transparent hover:border-[var(--color-border)] transition whitespace-nowrap">
              {t.nav_awards}
            </a>
            <a href="#contact" className="ml-1 sm:ml-2 px-3 sm:px-4 py-1.5 bg-[var(--color-ink)] text-white hover:bg-[var(--color-ink-2)] transition whitespace-nowrap">
              {t.nav_contact}
            </a>
            <button
              onClick={toggle}
              aria-label="Toggle language"
              className="ml-2 px-2.5 py-1.5 border border-[var(--color-border)] bg-white text-[11px] font-mono tracking-widest uppercase hover:border-[var(--color-border-strong)] transition whitespace-nowrap"
            >
              {lang === "en" ? "DE" : "EN"} <span className="opacity-40">·</span> {lang.toUpperCase()}
            </button>
            <span className="hidden lg:inline-flex items-center gap-1 ml-1 text-[11px] text-[var(--color-ink-3)] border border-[var(--color-border)] px-2 py-1 bg-white">
              <span className="opacity-60">⌘</span>K
            </span>
          </div>
        </nav>
      </header>

      <main className="min-w-0">
        {/* Hero */}
        <section className="relative border-b border-[var(--color-border)] overflow-hidden min-w-0">
          <div className="absolute inset-0 grid-bg opacity-[0.55] pointer-events-none" aria-hidden />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-paper)] pointer-events-none" aria-hidden />
          <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 lg:pt-18 pb-10 sm:pb-12">
            <div className="grid grid-cols-12 gap-6 lg:gap-8 items-start min-w-0">
              <div className="col-span-12 lg:col-span-7 min-w-0">
                <div className="inline-flex items-center gap-2 border border-[var(--color-border)] bg-white px-3 py-1.5 text-[11px] font-mono tracking-widest uppercase text-[var(--color-ink-3)]">
                  <span className="h-1.5 w-1.5 bg-[var(--color-accent)] rounded-full animate-pulse" aria-hidden />
                  {t.hero_badge}
                </div>
                <div className="mt-6">
                  <TypedPrompt text="whoami" />
                </div>
                <h1 className="mt-3 text-[36px] sm:text-[48px] lg:text-[56px] leading-[0.95] tracking-[-0.03em] font-semibold min-w-0">
                  Jhannes
                  <br />
                  <span className="text-[var(--color-ink-3)]">Reimann</span>
                  <span className="text-[var(--color-accent)]">{t.hero_title_suffix}</span>
                </h1>
                <p className="mt-5 max-w-[48ch] text-[16px] sm:text-[17px] leading-relaxed text-[var(--color-ink-2)]">
                  {t.hero_desc} <span className="text-[var(--color-ink)]">{t.hero_desc2}</span>
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a href="mailto:reimann.jhannes@gmail.com" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--color-ink)] text-white text-[14px] font-mono hover:bg-[var(--color-ink-2)] transition whitespace-nowrap">
                    Email — reimann.jhannes@gmail.com <span aria-hidden>→</span>
                  </a>
                  <a href="https://github.com/jhannesreimann" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 border border-[var(--color-border-strong)] bg-white text-[14px] font-mono hover:border-[var(--color-ink-3)] hover:bg-[var(--color-paper-2)] transition whitespace-nowrap">
                    GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/jhannes-reimann/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 border border-[var(--color-border)] bg-white text-[14px] font-mono hover:border-[var(--color-ink-3)] transition whitespace-nowrap">
                    LinkedIn
                  </a>
                </div>
                <div className="mt-6 flex flex-wrap gap-2 text-[11px] font-mono">
                  <span className="px-2 py-1 bg-[var(--color-accent-soft)] border border-[var(--color-accent)]/20 text-[var(--color-accent-ink)]">{t.hero_cta_open}</span>
                  <span className="px-2 py-1 border border-[var(--color-border)] bg-white text-[var(--color-ink-3)]">Potsdam, DE</span>
                  <span className="px-2 py-1 border border-[var(--color-border)] bg-white text-[var(--color-ink-3)]">MSc HPI ’25–’27</span>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-5 min-w-0">
                <div className="border border-[var(--color-border)] bg-white overflow-hidden">
                  <div className="h-8 flex items-center justify-between px-3 border-b border-[var(--color-border)] bg-[var(--color-paper-2)]">
                    <span className="text-[11px] font-mono tracking-widest uppercase text-[var(--color-ink-3)]">{t.hero_now_log}</span>
                    <span className="text-[11px] font-mono text-[var(--color-ink-muted)]">read-only</span>
                  </div>
                  <div className="p-5 sm:p-6 font-mono text-[13px] leading-relaxed space-y-4">
                    <div>
                      <div className="text-[11px] tracking-widest uppercase text-[var(--color-ink-3)]">{t.hero_current}</div>
                      <div className="mt-1 text-[var(--color-ink)]">{t.hero_current_val}</div>
                      <div className="text-[var(--color-ink-2)]">{t.hero_current_when}</div>
                    </div>
                    <div className="h-px bg-[var(--color-border)]" />
                    <div>
                      <div className="text-[11px] tracking-widest uppercase text-[var(--color-ink-3)]">{t.hero_work}</div>
                      <div className="mt-1 text-[var(--color-ink)]">{t.hero_work_val}</div>
                      <div className="text-[var(--color-ink-2)]">{t.hero_work_when}</div>
                    </div>
                    <div className="h-px bg-[var(--color-border)]" />
                    <div>
                      <div className="text-[11px] tracking-widest uppercase text-[var(--color-ink-3)]">{t.hero_stack}</div>
                      <div className="mt-1 flex flex-wrap gap-1.5">
                        {["Python", "Rust/WASM", "React 19", "Tailwind v4", "Flask/FastAPI", "Kali", "Postfix/Dovecot"].map((s) => (
                          <span key={s} className="px-2 py-1 border border-[var(--color-border)] bg-[var(--color-paper)] text-[11px]">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="pt-2 text-[11px] text-[var(--color-ink-muted)]">— full timeline below</div>
                  </div>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <div className="border border-[var(--color-border)] bg-[var(--color-paper-2)] p-3">
                    <div className="text-[10px] font-mono tracking-widest uppercase text-[var(--color-ink-3)]">{t.hero_shipped}</div>
                    <div className="text-[22px] font-mono font-semibold leading-none mt-1">5</div>
                    <div className="text-[11px] font-mono text-[var(--color-ink-3)]">featured</div>
                  </div>
                  <div className="border border-[var(--color-border)] bg-[var(--color-paper-2)] p-3">
                    <div className="text-[10px] font-mono tracking-widest uppercase text-[var(--color-ink-3)]">{t.hero_focus}</div>
                    <div className="text-[13px] font-mono leading-tight mt-1">{t.hero_focus_val}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 border-b border-[var(--color-border)] min-w-0">
          <div className="grid grid-cols-12 gap-8 lg:gap-10 min-w-0">
            <div className="col-span-12 lg:col-span-7 min-w-0">
              <div className="flex items-baseline gap-3">
                <span className="text-[11px] font-mono tracking-widest uppercase text-[var(--color-accent)]">{t.experience_title}</span>
                <span className="h-px flex-1 bg-[var(--color-border)] hidden sm:block" />
              </div>
              <div className="mt-6 space-y-6">
                <div className="border-l-2 border-[var(--color-border)] pl-4 sm:pl-5 hover:border-[var(--color-accent)] transition-colors">
                  <div className="text-[13px] font-semibold leading-tight">Werkstudent — Sustainability Solutions (GreenToken &amp; SDX)</div>
                  <div className="text-[13px] text-[var(--color-ink-2)]">SAP · Part-time</div>
                  <div className="text-[11px] font-mono text-[var(--color-ink-3)] mt-1">Nov 2025 – Present · Potsdam · Hybrid</div>
                  <ul className="mt-2 space-y-1 text-[13px] leading-relaxed text-[var(--color-ink-2)] list-disc pl-4">
                    <li>Support development of Sustainability Solutions</li>
                  </ul>
                </div>
                <div className="border-l-2 border-[var(--color-border)] pl-4 sm:pl-5 hover:border-[var(--color-accent)] transition-colors">
                  <div className="text-[13px] font-semibold leading-tight">Werkstudent Informationssicherheit</div>
                  <div className="text-[13px] text-[var(--color-ink-2)]">Die Autobahn GmbH des Bundes · Work Study</div>
                  <div className="text-[11px] font-mono text-[var(--color-ink-3)] mt-1">Nov 2024 – Nov 2025 · Hohen Neuendorf · On-site</div>
                  <ul className="mt-2 space-y-1 text-[13px] leading-relaxed text-[var(--color-ink-2)] list-disc pl-4">
                    <li>ISMS- &amp; CMDB-Tools (fuentis)</li>
                    <li>Management kritischer Infrastrukturen · ISO 27001 &amp; BSI IT-Grundschutz · BSI-Prüfungen</li>
                    <li>Microsoft Office-Skripte &amp; Power Automate</li>
                  </ul>
                </div>
                <div className="border-l-2 border-[var(--color-border)] pl-4 sm:pl-5 hover:border-[var(--color-accent)] transition-colors">
                  <div className="text-[13px] font-semibold leading-tight">Wissenschaftliche Hilfskraft — Institut für Informatik</div>
                  <div className="text-[13px] text-[var(--color-ink-2)]">Universität Potsdam · Contract</div>
                  <div className="text-[11px] font-mono text-[var(--color-ink-3)] mt-1">Oct 2022 – Nov 2024 · Potsdam</div>
                  <ul className="mt-2 space-y-1 text-[13px] leading-relaxed text-[var(--color-ink-2)] list-disc pl-4">
                    <li>Tutor Grundlagen der Programmierung, Algorithmen &amp; Datenstrukturen (Java, Python, C, Assembler) — PD Dr. Henning Bordihn</li>
                    <li>Tutor &amp; Praktikant Softwareentwicklung — Prof. Dr. Anna-Lena Lamprecht · Gastvortrag KI-Tools · UML/Java review · GitLab automation (Python)</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5 min-w-0">
              <div className="flex items-baseline gap-3">
                <span className="text-[11px] font-mono tracking-widest uppercase text-[var(--color-accent)]">{t.education_title}</span>
                <span className="h-px flex-1 bg-[var(--color-border)] hidden sm:block" />
              </div>
              <div className="mt-6 space-y-4">
                <div className="border border-[var(--color-border)] bg-white p-4">
                  <div className="text-[13px] font-semibold">Hasso Plattner Institute</div>
                  <div className="text-[13px] text-[var(--color-ink-2)]">Master of Science — Computer Science</div>
                  <div className="text-[11px] font-mono text-[var(--color-ink-3)] mt-1">Apr 2025 – Apr 2027</div>
                  <div className="text-[12px] text-[var(--color-ink-3)] mt-1">Netzwerksicherheit, TCP/IP · Security Engineering</div>
                </div>
                <div className="border border-[var(--color-border)] bg-white p-4">
                  <div className="text-[13px] font-semibold">University of Potsdam</div>
                  <div className="text-[13px] text-[var(--color-ink-2)]">Bachelor of Science — Informatik und Computational Science</div>
                  <div className="text-[11px] font-mono text-[var(--color-ink-3)] mt-1">Sep 2021 – Sep 2025 · Grade 1,9</div>
                  <div className="text-[12px] text-[var(--color-ink-3)] mt-1">Thesis: KI vs DocTool on Javadoc (hybrid approach, 2025)</div>
                </div>
                <div className="border border-[var(--color-border)] bg-white p-4">
                  <div className="text-[13px] font-semibold">Friedrich-Gymnasium Luckenwalde</div>
                  <div className="text-[13px] text-[var(--color-ink-2)]">Abitur — General University Entrance Qualification</div>
                  <div className="text-[11px] font-mono text-[var(--color-ink-3)] mt-1">Jul 2013 – May 2021 · Grade 1,7</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="border-b border-[var(--color-border)] bg-[var(--color-paper-2)]/60 min-w-0">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="min-w-0">
                <div className="text-[11px] font-mono tracking-widest uppercase text-[var(--color-accent)]">{t.projects_kicker}</div>
                <h2 className="mt-2 text-[28px] sm:text-[36px] leading-none tracking-[-0.02em] font-semibold">
                  {t.projects_title_1} <span className="text-[var(--color-ink-3)]">{t.projects_title_2}</span>
                </h2>
              </div>
              <p className="max-w-[44ch] text-[13px] leading-relaxed text-[var(--color-ink-2)]">{t.projects_hint}</p>
            </div>
            <div className="mt-8">
              <ProjectsCarousel />
            </div>
            <p className="mt-3 text-[11px] font-mono text-[var(--color-ink-muted)]">{t.projects_footnote}</p>
          </div>
        </section>

        {/* Thesis with language toggle */}
        <section id="thesis" className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 border-b border-[var(--color-border)] min-w-0">
          <div className="grid grid-cols-12 gap-8 min-w-0">
            <div className="col-span-12 lg:col-span-5 min-w-0">
              <div className="text-[11px] font-mono tracking-widest uppercase text-[var(--color-accent)]">{t.thesis_kicker}</div>
              <h2 className="mt-2 text-[24px] sm:text-[28px] leading-tight tracking-[-0.02em] font-semibold">{t.thesis_title}</h2>
              <div className="mt-3">
                <div className="inline-flex rounded-sm border border-[var(--color-border)] overflow-hidden text-[11px] font-mono">
                  <button onClick={() => setLang("en")} className={`px-3 py-1.5 ${lang === "en" ? "bg-[var(--color-ink)] text-white" : "bg-white text-[var(--color-ink-3)] hover:bg-[var(--color-paper-2)]"}`}>EN</button>
                  <button onClick={() => setLang("de")} className={`px-3 py-1.5 border-l border-[var(--color-border)] ${lang === "de" ? "bg-[var(--color-ink)] text-white" : "bg-white text-[var(--color-ink-3)] hover:bg-[var(--color-paper-2)]"}`}>DE</button>
                </div>
                <span className="ml-2 text-[11px] font-mono text-[var(--color-ink-muted)]">{lang === "en" ? t.thesis_en_short : t.thesis_de_short}</span>
              </div>
              <p className="mt-3 text-[13px] leading-relaxed text-[var(--color-ink-2)]">{lang === "en" ? t.thesis_en : t.thesis_de}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <a href="https://doi.org/10.25932/publishup-68510" target="_blank" rel="noreferrer" className="text-[13px] font-mono underline decoration-[var(--color-border-strong)] underline-offset-4 hover:decoration-[var(--color-accent)]">
                  DOI 10.25932/publishup-68510 →
                </a>
                <a href="https://github.com/jhannesreimann/Bachelorarbeit" target="_blank" rel="noreferrer" className="text-[13px] font-mono underline decoration-[var(--color-border-strong)] underline-offset-4 hover:decoration-[var(--color-accent)]">
                  Repository →
                </a>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3 min-w-0">
              <div className="border border-[var(--color-border)] bg-white p-4">
                <div className="text-[16px] font-mono font-semibold leading-tight">{t.thesis_stat1}</div>
                <div className="text-[12px] leading-relaxed text-[var(--color-ink-2)] mt-2">{t.thesis_stat1_desc}</div>
              </div>
              <div className="border border-[var(--color-border)] bg-white p-4">
                <div className="text-[16px] font-mono font-semibold leading-tight">{t.thesis_stat2}</div>
                <div className="text-[12px] leading-relaxed text-[var(--color-ink-2)] mt-2">{t.thesis_stat2_desc}</div>
              </div>
              <div className="border border-[var(--color-border)] bg-white p-4">
                <div className="text-[16px] font-mono font-semibold leading-tight">{t.thesis_stat3}</div>
                <div className="text-[12px] leading-relaxed text-[var(--color-ink-2)] mt-2">{t.thesis_stat3_desc}</div>
              </div>
              <div className="sm:col-span-3 border border-[var(--color-border)] bg-[var(--color-paper-2)] p-4 text-[13px] leading-relaxed text-[var(--color-ink-2)]">
                {lang === "en" ? t.thesis_body : t.thesis_body_de}
              </div>
            </div>
          </div>
        </section>

        {/* Awards */}
        <section id="awards" className="bg-[var(--color-ink)] text-white border-b border-[var(--color-ink)] min-w-0">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <div className="text-[11px] font-mono tracking-widest uppercase text-white/60">{t.awards_kicker}</div>
              <div className="text-[11px] font-mono text-white/50">{t.awards_sub}</div>
            </div>
            <div className="grid grid-cols-12 gap-6 lg:gap-8 mt-6 min-w-0">
              <div className="col-span-12 lg:col-span-5 min-w-0">
                <h2 className="text-[28px] sm:text-[34px] leading-none tracking-[-0.02em] font-semibold">{t.awards_win}</h2>
                <p className="mt-2 text-[13px] font-mono tracking-widest uppercase text-white/60">{t.awards_challenge}</p>
                <p className="mt-4 text-[15px] leading-relaxed text-white/80">{t.awards_desc}</p>
                <p className="mt-3 text-[12px] leading-relaxed text-white/60">{t.awards_team}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <a href="https://github.com/SamuelLess/inclu-go" target="_blank" rel="noreferrer" className="px-4 py-2 bg-white text-[var(--color-ink)] text-[13px] font-mono hover:bg-white/90 transition whitespace-nowrap">
                    IncluGo on GitHub →
                  </a>
                  <a href="https://www.youtube.com/watch/-fjqKHxNptQ" target="_blank" rel="noreferrer" className="px-4 py-2 border border-white/20 text-white text-[13px] font-mono hover:border-white/40 hover:bg-white/5 transition whitespace-nowrap">
                    Demo video
                  </a>
                </div>
                <div className="mt-6 border border-white/15 bg-white/5 p-4">
                  <div className="text-[11px] font-mono tracking-widest uppercase text-white/60">{t.awards_presenting}</div>
                  <div className="text-[14px] leading-relaxed text-white/80 mt-1">{t.awards_presenting_val}</div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-7 min-w-0">
                <div className="grid grid-cols-12 gap-3">
                  <div className="col-span-12">
                    <figure className="screenshot border-white/15 bg-white">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/screenshots/inclu-go.png" alt="IncluGo app screenshots" className="w-full h-auto" />
                    </figure>
                    <div className="text-[11px] font-mono text-white/50 mt-1.5">{t.awards_caption}</div>
                  </div>
                  <div className="col-span-12 sm:col-span-4">
                    <figure className="screenshot border-white/15 bg-white aspect-[3/2] overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/awards/hackhpi-trophy-1.jpg" alt="HackHPI trophy 1" className="w-full h-full object-cover" />
                    </figure>
                  </div>
                  <div className="col-span-12 sm:col-span-4">
                    <figure className="screenshot border-white/15 bg-white aspect-[3/2] overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/awards/hackhpi-trophy-2.jpg" alt="HackHPI trophy 2" className="w-full h-full object-cover" />
                    </figure>
                  </div>
                  <div className="col-span-12 sm:col-span-4">
                    <figure className="screenshot border-white/15 bg-white aspect-[3/2] overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/awards/hackhpi-trophy-3.jpg" alt="HackHPI trophy 3" className="w-full h-full object-cover" />
                    </figure>
                  </div>
                </div>
                <div className="mt-2 text-[11px] font-mono text-white/40">{t.awards_trophy_caption}</div>
                <details className="mt-4 border border-white/15 bg-white/[0.04] p-3">
                  <summary className="cursor-pointer text-[12px] font-mono text-white/70 list-none flex items-center justify-between">
                    <span>{t.awards_embed}</span>
                    <span aria-hidden>⌄</span>
                  </summary>
                  <div className="mt-3 overflow-hidden border border-white/10 bg-white">
                    <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7310236945253625857?collapsed=1" height={628} width={504} title="HackHPI 2025 winners post" className="w-full max-w-[504px] h-[628px] mx-auto block" loading="lazy" />
                  </div>
                </details>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 min-w-0">
          <div className="grid grid-cols-12 gap-8 min-w-0">
            <div className="col-span-12 lg:col-span-6 min-w-0">
              <div className="text-[11px] font-mono tracking-widest uppercase text-[var(--color-accent)]">{t.contact_kicker}</div>
              <h2 className="mt-2 text-[28px] sm:text-[32px] leading-tight tracking-[-0.02em] font-semibold">{t.contact_title}</h2>
              <p className="mt-3 text-[14px] leading-relaxed text-[var(--color-ink-2)] max-w-[48ch]">{t.contact_desc}</p>
              <div className="mt-6 grid gap-3 max-w-[520px]">
                <a href="mailto:reimann.jhannes@gmail.com" className="flex items-center justify-between gap-4 border border-[var(--color-border)] bg-white p-4 hover:border-[var(--color-border-strong)] transition min-w-0">
                  <span className="min-w-0">
                    <span className="block text-[11px] font-mono tracking-widest uppercase text-[var(--color-ink-3)]">Email</span>
                    <span className="block text-[14px] font-mono truncate">reimann.jhannes@gmail.com</span>
                  </span>
                  <span className="shrink-0 text-[14px]">→</span>
                </a>
                <div className="grid grid-cols-2 gap-3">
                  <a href="https://github.com/jhannesreimann" target="_blank" rel="noreferrer" className="border border-[var(--color-border)] bg-white p-4 hover:border-[var(--color-border-strong)] transition">
                    <span className="block text-[11px] font-mono tracking-widest uppercase text-[var(--color-ink-3)]">GitHub</span>
                    <span className="block text-[13px] font-mono">jhannesreimann</span>
                  </a>
                  <a href="https://www.linkedin.com/in/jhannes-reimann/" target="_blank" rel="noreferrer" className="border border-[var(--color-border)] bg-white p-4 hover:border-[var(--color-border-strong)] transition">
                    <span className="block text-[11px] font-mono tracking-widest uppercase text-[var(--color-ink-3)]">LinkedIn</span>
                    <span className="block text-[13px] font-mono">in/jhannes-reimann</span>
                  </a>
                </div>
                <div className="text-[11px] font-mono text-[var(--color-ink-muted)]">Potsdam, Germany · 11 Mar 2003 · phone on request</div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 min-w-0">
              <div className="border border-[var(--color-border)] bg-[var(--color-paper-2)] p-5 sm:p-6">
                <div className="text-[11px] font-mono tracking-widest uppercase text-[var(--color-ink-3)]">{t.contact_avail}</div>
                <ul className="mt-3 space-y-2 text-[13px] leading-relaxed text-[var(--color-ink-2)]">
                  <li className="flex gap-2"><span className="text-[var(--color-accent)]">—</span> {t.contact_avail_1}</li>
                  <li className="flex gap-2"><span className="text-[var(--color-accent)]">—</span> {t.contact_avail_2}</li>
                  <li className="flex gap-2"><span className="text-[var(--color-accent)]">—</span> {t.contact_avail_3}</li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  <a href="mailto:reimann.jhannes@gmail.com?subject=Hi%20Jhannes%20—%20from%20your%20site" className="px-4 py-2 bg-[var(--color-ink)] text-white text-[13px] font-mono hover:bg-[var(--color-ink-2)] transition whitespace-nowrap">
                    {t.contact_compose}
                  </a>
                  <span className="inline-flex items-center gap-2 px-3 py-2 border border-[var(--color-border)] bg-white text-[11px] font-mono text-[var(--color-ink-3)]">
                    <span className="h-2 w-2 bg-[var(--color-accent)] rounded-full animate-pulse" aria-hidden /> {t.contact_reply}
                  </span>
                </div>
              </div>
              <p className="mt-3 text-[11px] font-mono text-[var(--color-ink-muted)]">{t.contact_no_tracking}</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--color-border)] bg-[var(--color-paper-2)]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-[var(--color-ink-3)]">
            <span>{t.footer}</span>
            <span className="flex items-center gap-3">
              <a href="https://github.com/jhannesreimann" target="_blank" rel="noreferrer" className="underline decoration-[var(--color-border)] underline-offset-4 hover:decoration-[var(--color-ink-3)] whitespace-nowrap">GitHub</a>
              <span aria-hidden>·</span>
              <a href="https://doi.org/10.25932/publishup-68510" target="_blank" rel="noreferrer" className="underline decoration-[var(--color-border)] underline-offset-4 hover:decoration-[var(--color-ink-3)] whitespace-nowrap">Thesis DOI</a>
              <span aria-hidden>·</span>
              <span className="whitespace-nowrap">Imprint on request</span>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
