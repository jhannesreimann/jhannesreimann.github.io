/* Hallmark · pre-emit critique: P5 H4 E5 S4 R5 V5 · Workbench dark personal, pinned scroll, spring cursor */
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import LenisProvider from "@/components/LenisProvider";
import CursorDot from "@/components/CursorDot";
import TypedPrompt from "@/components/TypedPrompt";
import ProjectsHorizontal from "@/components/ProjectsHorizontal";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/Icons";
import { dict, type Lang } from "@/lib/i18n";

const ASCII_FACE = [
  "             .:..:::.-=---:",
  "       ...:--==++**#******+++-...",
  "      .:===+++**#%##***##*#*****+.",
  "     --+*+++*****##******#*+*###*+=.",
  "   :=+=++==******#****+**##++*#**##*.",
  "  .+**+++++++++*+++++++*****++*##%%%*:",
  "  -***+++*+==++=-=+====+=+*+*+*#%#%%#-",
  "  =#***+++=+=+======-==++=+**+##%%%%#=",
  "  +%%#*+++++========+=====+++**#%%%%*-",
  "  :#@%%%%*==++======-------=++##*#%%+.",
  "   :%@@@%*#%#**+=---==+*++++++####@%-",
  "    +@@@@%%#%%%@%*+*#*####**++%##%@*",
  "    #@@%*+*++++#@+-+*-=+**+**+*+#%*+.",
  "    #@@+-::---+%#=--*+----=-=+==*+:+:",
  "    :@@#+=-===*#+----=+++===+=-=+-:-.",
  "     #@%+=-=+#%%#==++++**+=---==---.",
  "     =@@*-==*@@@@#++++==+**+====:::",
  "      :*#:==#%#**+++=+=++=+*===-..",
  "       .%*=++**++++==========--",
  "        :%%%#*+======----===-=.",
  "         :#@%*=---------==----",
  "          :%%%+==------==----:",
  "           #%##*+++++++===-:::",
  "           +@%%##***++=--:..::.",
  "           -@@@%#+=--:::::.:::.",
  "           .%#*#*=::::::::.::::",
].join("\n");

export default function Page() {
  const [lang, setLang] = useState<Lang>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [spy, setSpy] = useState("top");

  useEffect(() => {
    const ids = ["top", "experience", "projects", "thesis", "awards", "contact"];
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setSpy(e.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

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

      <header className="sticky top-0 z-40 backdrop-blur-[10px] bg-[var(--color-paper)]/85 border-b border-[var(--color-border)]">
        <nav className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-[56px] flex items-center justify-between gap-2 min-w-0">
          <Link href="#top" className="font-mono text-[13px] tracking-tight text-[var(--color-ink-2)] hover:text-[var(--color-ink)] transition min-w-0 truncate" aria-label="Back to top">
            ~/{spy === "top" ? "" : spy}
            <span className="inline-block w-[8px] h-[13px] bg-[var(--color-ink-3)] ml-1 translate-y-[2px] animate-pulse" aria-hidden />
          </Link>
          <div className="hidden sm:flex items-center gap-1 text-[13px] font-mono shrink-0">
            <a href="#projects" className="px-3 py-1.5 text-[var(--color-ink-2)] hover:text-[var(--color-ink)] hover:bg-[var(--color-paper-2)] transition whitespace-nowrap">
              {t.nav_projects}
            </a>
            <a href="#thesis" className="px-3 py-1.5 text-[var(--color-ink-2)] hover:text-[var(--color-ink)] hover:bg-[var(--color-paper-2)] transition whitespace-nowrap">
              {t.nav_thesis}
            </a>
            <a href="#awards" className="px-3 py-1.5 text-[var(--color-ink-2)] hover:text-[var(--color-ink)] hover:bg-[var(--color-paper-2)] transition whitespace-nowrap">
              {t.nav_awards}
            </a>
            <a href="#contact" className="px-3 py-1.5 text-[var(--color-ink)] underline decoration-[var(--color-border-strong)] underline-offset-4 hover:decoration-[var(--color-ink)] transition whitespace-nowrap">
              {t.nav_contact}
            </a>
            <button
              onClick={toggle}
              aria-label="Switch language"
              className="ml-2 px-2.5 py-1.5 border border-[var(--color-border)] text-[11px] font-mono tracking-widest uppercase text-[var(--color-ink-2)] hover:text-[var(--color-ink)] hover:border-[var(--color-border-strong)] transition whitespace-nowrap"
            >
              {lang === "en" ? "DE" : "EN"}
            </button>
          </div>
          <div className="flex sm:hidden items-center gap-2 shrink-0">
            <button
              onClick={toggle}
              aria-label="Switch language"
              className="px-2.5 py-1.5 border border-[var(--color-border)] text-[11px] font-mono tracking-widest uppercase text-[var(--color-ink-2)] whitespace-nowrap"
            >
              {lang === "en" ? "DE" : "EN"}
            </button>
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="px-3 py-1.5 border border-[var(--color-border)] text-[12px] font-mono text-[var(--color-ink)] whitespace-nowrap"
            >
              {t.nav_menu} +
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-[var(--color-paper)] flex flex-col"
          >
            <div className="max-w-[1280px] w-full mx-auto px-4 h-[56px] flex items-center justify-between border-b border-[var(--color-border)]">
              <span className="font-mono text-[13px] text-[var(--color-ink-2)]">~/{spy === "top" ? "" : spy}</span>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="px-3 py-1.5 border border-[var(--color-border)] text-[12px] font-mono text-[var(--color-ink)] whitespace-nowrap"
              >
                {t.nav_close} x
              </button>
            </div>
            <nav className="flex-1 flex flex-col justify-center gap-1 px-6">
              {[
                { n: "01", href: "#projects", label: t.nav_projects },
                { n: "02", href: "#thesis", label: t.nav_thesis },
                { n: "03", href: "#awards", label: t.nav_awards },
                { n: "04", href: "#contact", label: t.nav_contact },
              ].map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-baseline gap-4 py-3 border-b border-[var(--color-border)] font-mono text-[24px] text-[var(--color-ink)]"
                >
                  <span className="text-[12px] text-[var(--color-ink-3)]">{l.n}</span> {l.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="min-w-0">
        <section id="top" className="relative border-b border-[var(--color-border)] overflow-hidden min-w-0">
          <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" aria-hidden />
          <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-10 sm:pb-12">
            <div className="grid grid-cols-12 gap-6 lg:gap-8 items-start min-w-0">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="col-span-12 lg:col-span-7 min-w-0"
              >
                <div className="inline-flex items-center gap-2 border border-[var(--color-border)] bg-[var(--color-card)] px-3 py-1.5 text-[11px] font-mono tracking-widest uppercase text-[var(--color-ink-3)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" aria-hidden />
                  {t.hero_badge}
                </div>
                <div className="mt-6">
                  <TypedPrompt text="whoami" />
                </div>
                <h1 className="mt-3 text-[34px] sm:text-[52px] lg:text-[60px] leading-[0.98] tracking-[-0.03em] font-semibold min-w-0">
                  {t.firstName} {t.middleName}
                  <br />
                  {t.lastName}
                  <span className="text-[var(--color-ink-3)]">.</span>
                </h1>
                <p className="mt-5 max-w-[48ch] text-[16px] sm:text-[17px] leading-relaxed text-[var(--color-ink-2)]">
                  {t.hero_desc} <span className="text-[var(--color-ink)]">{t.hero_desc2}</span>
                </p>
                <div className="mt-7 flex flex-wrap gap-2.5">
                  <a href="mailto:reimann.jhannes@gmail.com" className="inline-flex items-center gap-2 px-4 py-2.5 border border-[var(--color-border-strong)] bg-[var(--color-card)] text-[14px] font-mono hover:border-[var(--color-ink-3)] transition whitespace-nowrap">
                    <MailIcon size={15} /> Email
                  </a>
                  <a href="https://github.com/jhannesreimann" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 border border-[var(--color-border)] text-[14px] font-mono text-[var(--color-ink-2)] hover:text-[var(--color-ink)] hover:border-[var(--color-border-strong)] transition whitespace-nowrap">
                    <GitHubIcon size={15} /> GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/jhannes-reimann/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 border border-[var(--color-border)] text-[14px] font-mono text-[var(--color-ink-2)] hover:text-[var(--color-ink)] hover:border-[var(--color-border-strong)] transition whitespace-nowrap">
                    <LinkedInIcon size={15} /> LinkedIn
                  </a>
                </div>
                <div className="mt-6 flex flex-wrap gap-2 text-[11px] font-mono">
                  <span className="inline-flex items-center gap-1.5 px-2 py-1 border border-[var(--color-border)] text-[var(--color-ink-2)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" aria-hidden /> {t.hero_open}
                  </span>
                  <span className="px-2 py-1 border border-[var(--color-border)] text-[var(--color-ink-3)]">Potsdam, DE</span>
                  <span className="px-2 py-1 border border-[var(--color-border)] text-[var(--color-ink-3)]">MSc HPI 25 to 27</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="col-span-12 lg:col-span-5 min-w-0"
              >
                <div className="border border-[var(--color-border)] bg-[var(--color-card)] overflow-hidden" data-hover>
                  <div className="flex items-center justify-between px-3 py-2 border-b border-[var(--color-border)]">
                    <span className="text-[11px] font-mono text-[var(--color-ink-3)]">{t.term_title}</span>
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-[var(--color-ink-3)]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" aria-hidden /> {t.term_live}
                    </span>
                  </div>
                  <div className="p-4 sm:p-5 font-mono text-[12.5px] leading-relaxed">
                    <div className="grid sm:grid-cols-[auto_1fr] gap-4 items-start">
                      <pre className="ascii-face m-0" aria-label="ASCII portrait of Jhannes">{ASCII_FACE}</pre>
                      <div className="min-w-0 space-y-3">
                        <div>
                          <div className="text-[var(--color-ink-3)]">$ whoami</div>
                          <div className="text-[var(--color-ink)]">{t.term_whoami_out}</div>
                        </div>
                        <div>
                          <div className="text-[var(--color-ink-3)]">$ cat {t.term_current_label}.txt</div>
                          <div className="text-[var(--color-ink)]">{t.term_current_val}</div>
                          <div className="text-[var(--color-ink-2)]">{t.term_current_when}</div>
                        </div>
                        <div>
                          <div className="text-[var(--color-ink-3)]">$ cat {t.term_work_label}.txt</div>
                          <div className="text-[var(--color-ink)]">{t.term_work_val}</div>
                          <div className="text-[var(--color-ink-2)]">{t.term_work_when}</div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-[var(--color-border)]">
                      <div className="text-[var(--color-ink-3)]">$ ls {t.term_stack_label}</div>
                      <div className="mt-1.5 flex flex-wrap gap-1.5">
                        {["Python", "Rust/WASM", "React 19", "Tailwind v4", "Flask/FastAPI", "Kali", "Postfix/Dovecot"].map((s) => (
                          <span key={s} className="px-2 py-0.5 border border-[var(--color-border)] text-[11px] text-[var(--color-ink-2)]">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-3 text-[11px] text-[var(--color-ink-muted)]"># {t.term_hint}</div>
                  </div>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <div className="border border-[var(--color-border)] bg-[var(--color-card)] p-3">
                    <div className="text-[10px] font-mono tracking-widest uppercase text-[var(--color-ink-3)]">{t.hero_shipped}</div>
                    <div className="text-[22px] font-mono font-semibold leading-none mt-1">5</div>
                  </div>
                  <div className="border border-[var(--color-border)] bg-[var(--color-card)] p-3">
                    <div className="text-[10px] font-mono tracking-widest uppercase text-[var(--color-ink-3)]">{t.hero_focus_label}</div>
                    <div className="text-[12px] font-mono leading-snug mt-1 text-[var(--color-ink-2)]">{t.hero_focus_val}</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="experience" className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 border-b border-[var(--color-border)] min-w-0">
          <div className="grid grid-cols-12 gap-8 lg:gap-10 min-w-0">
            <div className="col-span-12 lg:col-span-7 min-w-0">
              <div className="flex items-baseline gap-3">
                <span className="text-[11px] font-mono tracking-widest uppercase text-[var(--color-ink-2)]">{t.experience_title}</span>
                <span className="h-px flex-1 bg-[var(--color-border)] hidden sm:block" />
              </div>
              <div className="mt-6 space-y-2">
                {t.jobs.map((job, i) => (
                  <motion.div
                    key={job.role}
                    initial={{ opacity: 0, x: -14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    data-hover
                    className="group flex gap-4 py-4 border-b border-[var(--color-border)] hover:bg-[var(--color-card)] hover:px-3 transition-all"
                  >
                    <span className="font-mono text-[11px] text-[var(--color-ink-muted)] pt-0.5 shrink-0">0{i + 1}</span>
                    <div className="min-w-0">
                      <div className="text-[14px] font-semibold leading-tight">{job.role}</div>
                      <div className="text-[13px] text-[var(--color-ink-2)]">{job.org}</div>
                      <div className="text-[11px] font-mono text-[var(--color-ink-3)] mt-1">{job.meta}</div>
                      <ul className="mt-2 space-y-1 text-[13px] leading-relaxed text-[var(--color-ink-2)] list-disc pl-4">
                        {job.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5 min-w-0">
              <div className="flex items-baseline gap-3">
                <span className="text-[11px] font-mono tracking-widest uppercase text-[var(--color-ink-2)]">{t.education_title}</span>
                <span className="h-px flex-1 bg-[var(--color-border)] hidden sm:block" />
              </div>
              <div className="mt-6 space-y-4">
                {t.schools.map((e, i) => (
                  <motion.div
                    key={e.school}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    data-hover
                    className="border border-[var(--color-border)] bg-[var(--color-card)] p-4 hover:border-[var(--color-border-strong)] transition-colors"
                  >
                    <div className="flex items-baseline justify-between gap-3">
                      <div className="text-[13px] font-semibold">{e.school}</div>
                      <span className="font-mono text-[11px] text-[var(--color-ink-muted)] shrink-0">E{i + 1}</span>
                    </div>
                    <div className="text-[13px] text-[var(--color-ink-2)]">{e.degree}</div>
                    <div className="text-[11px] font-mono text-[var(--color-ink-3)] mt-1">{e.when}</div>
                    {e.note !== "" && <div className="text-[12px] text-[var(--color-ink-3)] mt-1">{e.note}</div>}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="border-b border-[var(--color-border)] min-w-0">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14">
            <div className="text-[11px] font-mono tracking-widest uppercase text-[var(--color-ink-2)]">{t.projects_kicker}</div>
            <h2 className="mt-2 text-[28px] sm:text-[36px] leading-none tracking-[-0.02em] font-semibold">
              {t.projects_title_1} <span className="text-[var(--color-ink-3)]">{t.projects_title_2}</span>
            </h2>
          </div>
          <ProjectsHorizontal texts={t.projects} hint={t.projects_hint} />
        </section>

        <section id="thesis" className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 border-b border-[var(--color-border)] min-w-0">
          <div className="grid grid-cols-12 gap-8 min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="col-span-12 lg:col-span-5 min-w-0"
            >
              <div className="text-[11px] font-mono tracking-widest uppercase text-[var(--color-ink-2)]">{t.thesis_kicker}</div>
              <h2 className="mt-2 text-[24px] sm:text-[28px] leading-tight tracking-[-0.02em] font-semibold">{t.thesis_title}</h2>
              <p className="mt-3 text-[13px] leading-relaxed text-[var(--color-ink-2)]">{t.thesis_text}</p>
              <div className="mt-4 flex flex-wrap gap-4">
                <a href="https://doi.org/10.25932/publishup-68510" target="_blank" rel="noreferrer" className="text-[13px] font-mono underline decoration-[var(--color-border-strong)] underline-offset-4 hover:text-[var(--color-ink)] transition">
                  DOI 10.25932/publishup-68510
                </a>
                <a href="https://github.com/jhannesreimann/Bachelorarbeit" target="_blank" rel="noreferrer" className="text-[13px] font-mono underline decoration-[var(--color-border-strong)] underline-offset-4 hover:text-[var(--color-ink)] transition">
                  Repository
                </a>
              </div>
            </motion.div>
            <div className="col-span-12 lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3 min-w-0">
              <div className="border border-[var(--color-border)] bg-[var(--color-card)] p-4">
                <div className="text-[16px] font-mono font-semibold leading-tight">{t.thesis_stat1}</div>
                <div className="text-[12px] leading-relaxed text-[var(--color-ink-2)] mt-2">{t.thesis_stat1_desc}</div>
              </div>
              <div className="border border-[var(--color-border)] bg-[var(--color-card)] p-4">
                <div className="text-[16px] font-mono font-semibold leading-tight">{t.thesis_stat2}</div>
                <div className="text-[12px] leading-relaxed text-[var(--color-ink-2)] mt-2">{t.thesis_stat2_desc}</div>
              </div>
              <div className="border border-[var(--color-border)] bg-[var(--color-card)] p-4">
                <div className="text-[16px] font-mono font-semibold leading-tight">{t.thesis_stat3}</div>
                <div className="text-[12px] leading-relaxed text-[var(--color-ink-2)] mt-2">{t.thesis_stat3_desc}</div>
              </div>
              <div className="sm:col-span-3 border border-[var(--color-border)] bg-[var(--color-paper-2)] p-4 text-[13px] leading-relaxed text-[var(--color-ink-2)]">
                {t.thesis_body}
              </div>
            </div>
          </div>
        </section>

        <section id="awards" className="border-b border-[var(--color-border)] bg-[var(--color-paper-2)]/40 min-w-0">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <div className="text-[11px] font-mono tracking-widest uppercase text-[var(--color-ink-2)]">{t.awards_kicker}</div>
              <div className="text-[11px] font-mono text-[var(--color-ink-3)]">{t.awards_sub}</div>
            </div>
            <div className="grid grid-cols-12 gap-6 lg:gap-8 mt-6 min-w-0">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="col-span-12 lg:col-span-5 min-w-0"
              >
                <h2 className="text-[28px] sm:text-[34px] leading-none tracking-[-0.02em] font-semibold">{t.awards_win}</h2>
                <p className="mt-2 text-[12px] font-mono tracking-widest uppercase text-[var(--color-ink-3)]">{t.awards_challenge}</p>
                <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-ink-2)]">{t.awards_desc}</p>
                <p className="mt-3 text-[12px] leading-relaxed text-[var(--color-ink-3)]">{t.awards_team}</p>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  <a href="https://github.com/SamuelLess/inclu-go" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 border border-[var(--color-border-strong)] text-[13px] font-mono hover:border-[var(--color-ink-3)] transition whitespace-nowrap">
                    <GitHubIcon size={14} /> IncluGo on GitHub
                  </a>
                  <a href="https://www.youtube.com/watch/-fjqKHxNptQ" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 border border-[var(--color-border)] text-[13px] font-mono text-[var(--color-ink-2)] hover:text-[var(--color-ink)] hover:border-[var(--color-border-strong)] transition whitespace-nowrap">
                    Demo video
                  </a>
                  <a href="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7310236945253625857" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 border border-[var(--color-border)] text-[13px] font-mono text-[var(--color-ink-2)] hover:text-[var(--color-ink)] hover:border-[var(--color-border-strong)] transition whitespace-nowrap">
                    <LinkedInIcon size={14} /> {t.awards_link_post}
                  </a>
                </div>
                <div className="mt-6 border border-[var(--color-border)] bg-[var(--color-card)] p-4">
                  <div className="text-[11px] font-mono tracking-widest uppercase text-[var(--color-ink-3)]">{t.awards_presenting}</div>
                  <div className="text-[14px] leading-relaxed text-[var(--color-ink-2)] mt-1">{t.awards_presenting_val}</div>
                </div>
              </motion.div>
              <div className="col-span-12 lg:col-span-7 min-w-0">
                <div className="grid grid-cols-12 gap-3 items-start">
                  <div className="col-span-12 sm:col-span-5 min-w-0">
                    <figure className="screenshot m-0 h-fit">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/screenshots/inclu-go-new.png" alt="IncluGo phone view" className="w-full h-[380px] object-contain bg-[var(--color-paper-2)] p-2" />
                    </figure>
                    <div className="text-[11px] font-mono text-[var(--color-ink-3)] mt-1.5">{t.awards_caption}</div>
                  </div>
                  <div className="col-span-12 sm:col-span-7 grid gap-3 items-start min-w-0">
                    <figure className="screenshot m-0 h-fit">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/awards/hackhpi-trophy-1.jpg" alt="HackHPI trophy 1" className="w-full h-auto" />
                    </figure>
                    <div className="grid grid-cols-2 gap-3 items-start">
                      <figure className="screenshot m-0 h-fit">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/awards/hackhpi-trophy-2.jpg" alt="HackHPI trophy 2" className="w-full h-auto" />
                      </figure>
                      <figure className="screenshot m-0 h-fit">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/awards/hackhpi-trophy-3.jpg" alt="HackHPI trophy 3" className="w-full h-auto" />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 min-w-0">
          <div className="max-w-[560px] min-w-0">
            <div className="text-[11px] font-mono tracking-widest uppercase text-[var(--color-ink-2)]">{t.contact_kicker}</div>
            <h2 className="mt-2 text-[28px] sm:text-[32px] leading-tight tracking-[-0.02em] font-semibold">{t.contact_title}</h2>
            <p className="mt-3 text-[14px] leading-relaxed text-[var(--color-ink-2)] max-w-[48ch]">{t.contact_desc}</p>
            <div className="mt-6 grid gap-2.5">
              <a href="mailto:reimann.jhannes@gmail.com" className="flex items-center justify-between gap-4 border border-[var(--color-border)] bg-[var(--color-card)] p-4 hover:border-[var(--color-border-strong)] transition min-w-0" data-hover>
                <span className="min-w-0 flex items-center gap-3">
                  <MailIcon size={16} />
                  <span className="block text-[14px] font-mono truncate">reimann.jhannes@gmail.com</span>
                </span>
                <span className="shrink-0 text-[14px]">→</span>
              </a>
              <div className="grid grid-cols-2 gap-2.5">
                <a href="https://github.com/jhannesreimann" target="_blank" rel="noreferrer" className="flex items-center gap-2 border border-[var(--color-border)] bg-[var(--color-card)] p-4 hover:border-[var(--color-border-strong)] transition">
                  <GitHubIcon size={16} />
                  <span className="block text-[13px] font-mono">jhannesreimann</span>
                </a>
                <a href="https://www.linkedin.com/in/jhannes-reimann/" target="_blank" rel="noreferrer" className="flex items-center gap-2 border border-[var(--color-border)] bg-[var(--color-card)] p-4 hover:border-[var(--color-border-strong)] transition">
                  <LinkedInIcon size={16} />
                  <span className="block text-[13px] font-mono">in/jhannes</span>
                </a>
              </div>
              <div className="text-[11px] font-mono text-[var(--color-ink-muted)]">{t.contact_location}</div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--color-border)]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-[var(--color-ink-3)]">
            <span>{t.footer}</span>
            <span className="flex items-center gap-3">
              <a href="https://github.com/jhannesreimann" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 underline decoration-[var(--color-border)] underline-offset-4 hover:text-[var(--color-ink)] whitespace-nowrap">
                <GitHubIcon size={13} /> GitHub
              </a>
              <span aria-hidden>/</span>
              <a href="https://doi.org/10.25932/publishup-68510" target="_blank" rel="noreferrer" className="underline decoration-[var(--color-border)] underline-offset-4 hover:text-[var(--color-ink)] whitespace-nowrap">
                Thesis DOI
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
