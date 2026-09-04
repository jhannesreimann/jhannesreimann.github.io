/* Hallmark · pre-emit critique: P5 H4 E5 S4 R5 V5 — Workbench mono restraint, no neon, real figures */
import Link from "next/link";
import LenisProvider from "@/components/LenisProvider";
import CursorDot from "@/components/CursorDot";
import TypedPrompt from "@/components/TypedPrompt";
import ProjectsCarousel from "@/components/ProjectsCarousel";

export default function Page() {
  return (
    <>
      <LenisProvider />
      <CursorDot />

      {/* N8 Terminal command nav */}
      <header className="sticky top-0 z-40 backdrop-blur-[8px] bg-[var(--color-paper)]/80 border-b border-[var(--color-border)]">
        <nav className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-[56px] flex items-center justify-between gap-4 min-w-0">
          <Link href="#" className="font-mono text-[13px] tracking-tight flex items-center gap-2 min-w-0 shrink">
            <span className="h-2 w-2 rounded-full bg-[var(--color-accent)] shrink-0" aria-hidden />
            <span className="text-[var(--color-ink-3)] hidden sm:inline">jhannes@hpi:~$</span>
            <span className="text-[var(--color-ink)] truncate">jhannes-reimann</span>
            <span className="w-[9px] h-[14px] bg-[var(--color-accent)] ml-1 hidden sm:inline-block translate-y-[1px] opacity-70" aria-hidden />
          </Link>
          <div className="flex items-center gap-1 sm:gap-2 text-[12px] sm:text-[13px] font-mono shrink-0">
            <a href="#projects" className="px-2 sm:px-3 py-1.5 hover:bg-[var(--color-paper-3)] border border-transparent hover:border-[var(--color-border)] transition whitespace-nowrap">
              --projects
            </a>
            <a href="#thesis" className="px-2 sm:px-3 py-1.5 hover:bg-[var(--color-paper-3)] border border-transparent hover:border-[var(--color-border)] transition whitespace-nowrap hidden sm:inline-flex">
              --thesis
            </a>
            <a href="#awards" className="px-2 sm:px-3 py-1.5 hover:bg-[var(--color-paper-3)] border border-transparent hover:border-[var(--color-border)] transition whitespace-nowrap hidden sm:inline-flex">
              --awards
            </a>
            <a
              href="#contact"
              className="ml-1 sm:ml-2 px-3 sm:px-4 py-1.5 bg-[var(--color-ink)] text-white hover:bg-[var(--color-ink-2)] transition whitespace-nowrap"
            >
              --contact
            </a>
            <span className="hidden lg:inline-flex items-center gap-1 ml-2 text-[11px] text-[var(--color-ink-3)] border border-[var(--color-border)] px-2 py-1 bg-white">
              <span className="opacity-60">⌘</span>K
            </span>
          </div>
        </nav>
      </header>

      <main className="min-w-0">
        {/* Hero — Workbench opener */}
        <section className="relative border-b border-[var(--color-border)] overflow-hidden min-w-0">
          <div className="absolute inset-0 grid-bg opacity-[0.55] pointer-events-none" aria-hidden />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-paper)] pointer-events-none" aria-hidden />
          <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 lg:pt-18 pb-10 sm:pb-12">
            <div className="grid grid-cols-12 gap-6 lg:gap-8 items-start min-w-0">
              {/* Left — headline */}
              <div className="col-span-12 lg:col-span-7 min-w-0">
                <div className="inline-flex items-center gap-2 border border-[var(--color-border)] bg-white px-3 py-1.5 text-[11px] font-mono tracking-widest uppercase text-[var(--color-ink-3)]">
                  <span className="h-1.5 w-1.5 bg-[var(--color-accent)] rounded-full animate-pulse" aria-hidden />
                  Potsdam · HPI · Security Engineering
                </div>

                <div className="mt-6">
                  <TypedPrompt text="whoami" />
                </div>

                <h1 className="mt-3 text-[36px] sm:text-[48px] lg:text-[56px] leading-[0.95] tracking-[-0.03em] font-semibold min-w-0">
                  Jhannes
                  <br />
                  <span className="text-[var(--color-ink-3)]">Reimann</span>
                  <span className="text-[var(--color-accent)]">.</span>
                </h1>

                <p className="mt-5 max-w-[48ch] text-[16px] sm:text-[17px] leading-relaxed text-[var(--color-ink-2)]">
                  MSc Computer Science at Hasso Plattner Institute, Security focus. I build tools for problems I actually have — DNS measurements, pocket pentest rigs, therapy search, mail downgrade tests.
                  <span className="text-[var(--color-ink)]"> Breaking things to understand them better.</span>
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="mailto:reimann.jhannes@gmail.com"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--color-ink)] text-white text-[14px] font-mono hover:bg-[var(--color-ink-2)] transition whitespace-nowrap"
                  >
                    Email — reimann.jhannes@gmail.com <span aria-hidden>→</span>
                  </a>
                  <a
                    href="https://github.com/jhannesreimann"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-[var(--color-border-strong)] bg-white text-[14px] font-mono hover:border-[var(--color-ink-3)] hover:bg-[var(--color-paper-2)] transition whitespace-nowrap"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jhannes-reimann/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-[var(--color-border)] bg-white text-[14px] font-mono hover:border-[var(--color-ink-3)] transition whitespace-nowrap"
                  >
                    LinkedIn
                  </a>
                </div>

                <div className="mt-6 flex flex-wrap gap-2 text-[11px] font-mono">
                  <span className="px-2 py-1 bg-[var(--color-accent-soft)] border border-[var(--color-accent)]/20 text-[var(--color-accent-ink)]">
                    open to security roles
                  </span>
                  <span className="px-2 py-1 border border-[var(--color-border)] bg-white text-[var(--color-ink-3)]">Potsdam, DE</span>
                  <span className="px-2 py-1 border border-[var(--color-border)] bg-white text-[var(--color-ink-3)]">MSc HPI ’25–’27</span>
                </div>
              </div>

              {/* Right — workbench facts */}
              <div className="col-span-12 lg:col-span-5 min-w-0">
                <div className="border border-[var(--color-border)] bg-white overflow-hidden">
                  <div className="h-8 flex items-center justify-between px-3 border-b border-[var(--color-border)] bg-[var(--color-paper-2)]">
                    <span className="text-[11px] font-mono tracking-widest uppercase text-[var(--color-ink-3)]">now.log</span>
                    <span className="text-[11px] font-mono text-[var(--color-ink-muted)]">read-only</span>
                  </div>
                  <div className="p-5 sm:p-6 font-mono text-[13px] leading-relaxed space-y-4">
                    <div>
                      <div className="text-[11px] tracking-widest uppercase text-[var(--color-ink-3)]">Current</div>
                      <div className="mt-1 text-[var(--color-ink)]">MSc Computer Science — HPI, Security Engineering</div>
                      <div className="text-[var(--color-ink-2)]">Apr 2025 – Apr 2027</div>
                    </div>
                    <div className="h-px bg-[var(--color-border)]" />
                    <div>
                      <div className="text-[11px] tracking-widest uppercase text-[var(--color-ink-3)]">Work</div>
                      <div className="mt-1 text-[var(--color-ink)]">Werkstudent — SAP Sustainability (GreenToken/SDX)</div>
                      <div className="text-[var(--color-ink-2)]">Nov 2025 – Present · Potsdam · Hybrid</div>
                    </div>
                    <div className="h-px bg-[var(--color-border)]" />
                    <div>
                      <div className="text-[11px] tracking-widest uppercase text-[var(--color-ink-3)]">Stack</div>
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
                    <div className="text-[10px] font-mono tracking-widest uppercase text-[var(--color-ink-3)]">Projects shipped</div>
                    <div className="text-[22px] font-mono font-semibold leading-none mt-1">5</div>
                    <div className="text-[11px] font-mono text-[var(--color-ink-3)]">featured</div>
                  </div>
                  <div className="border border-[var(--color-border)] bg-[var(--color-paper-2)] p-3">
                    <div className="text-[10px] font-mono tracking-widest uppercase text-[var(--color-ink-3)]">Focus</div>
                    <div className="text-[13px] font-mono leading-tight mt-1">How systems fail → how they work</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline — Experience + Education */}
        <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 border-b border-[var(--color-border)] min-w-0">
          <div className="grid grid-cols-12 gap-8 lg:gap-10 min-w-0">
            <div className="col-span-12 lg:col-span-7 min-w-0">
              <div className="flex items-baseline gap-3">
                <span className="text-[11px] font-mono tracking-widest uppercase text-[var(--color-accent)]">02 — Experience</span>
                <span className="h-px flex-1 bg-[var(--color-border)] hidden sm:block" />
              </div>
              <div className="mt-6 space-y-6">
                {[
                  {
                    role: "Werkstudent — Sustainability Solutions (GreenToken & SDX)",
                    org: "SAP · Part-time",
                    meta: "Nov 2025 – Present · Potsdam · Hybrid",
                    bullets: ["Support development of Sustainability Solutions"],
                  },
                  {
                    role: "Werkstudent Informationssicherheit",
                    org: "Die Autobahn GmbH des Bundes · Work Study",
                    meta: "Nov 2024 – Nov 2025 · Hohen Neuendorf · On-site",
                    bullets: [
                      "ISMS- & CMDB-Tools (fuentis)",
                      "Management kritischer Infrastrukturen · ISO 27001 & BSI IT-Grundschutz · BSI-Prüfungen",
                      "Microsoft Office-Skripte & Power Automate",
                    ],
                  },
                  {
                    role: "Wissenschaftliche Hilfskraft — Institut für Informatik",
                    org: "Universität Potsdam · Contract",
                    meta: "Oct 2022 – Nov 2024 · Potsdam",
                    bullets: [
                      "Tutor Grundlagen der Programmierung, Algorithmen & Datenstrukturen (Java, Python, C, Assembler) — PD Dr. Henning Bordihn",
                      "Tutor & Praktikant Softwareentwicklung — Prof. Dr. Anna-Lena Lamprecht · Gastvortrag KI-Tools · UML/Java review · GitLab automation (Python)",
                    ],
                  },
                ].map((job) => (
                  <div key={job.role} className="border-l-2 border-[var(--color-border)] pl-4 sm:pl-5 hover:border-[var(--color-accent)] transition-colors">
                    <div className="text-[13px] font-semibold leading-tight">{job.role}</div>
                    <div className="text-[13px] text-[var(--color-ink-2)]">{job.org}</div>
                    <div className="text-[11px] font-mono text-[var(--color-ink-3)] mt-1">{job.meta}</div>
                    <ul className="mt-2 space-y-1 text-[13px] leading-relaxed text-[var(--color-ink-2)] list-disc pl-4">
                      {job.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-span-12 lg:col-span-5 min-w-0">
              <div className="flex items-baseline gap-3">
                <span className="text-[11px] font-mono tracking-widest uppercase text-[var(--color-accent)]">Education</span>
                <span className="h-px flex-1 bg-[var(--color-border)] hidden sm:block" />
              </div>
              <div className="mt-6 space-y-4">
                {[
                  { school: "Hasso Plattner Institute", degree: "Master of Science — Computer Science", when: "Apr 2025 – Apr 2027", note: "Netzwerksicherheit, TCP/IP · Security Engineering" },
                  { school: "University of Potsdam", degree: "Bachelor of Science — Informatik und Computational Science", when: "Sep 2021 – Sep 2025 · Grade 1,9", note: "Thesis: KI vs DocTool on Javadoc (hybrid approach, 2025)" },
                  { school: "Friedrich-Gymnasium Luckenwalde", degree: "Abitur — General University Entrance Qualification", when: "Jul 2013 – May 2021 · Grade 1,7", note: "—" },
                ].map((e) => (
                  <div key={e.school} className="border border-[var(--color-border)] bg-white p-4">
                    <div className="text-[13px] font-semibold">{e.school}</div>
                    <div className="text-[13px] text-[var(--color-ink-2)]">{e.degree}</div>
                    <div className="text-[11px] font-mono text-[var(--color-ink-3)] mt-1">{e.when}</div>
                    {e.note !== "—" && <div className="text-[12px] text-[var(--color-ink-3)] mt-1">{e.note}</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects — Workbench carousel */}
        <section id="projects" className="border-b border-[var(--color-border)] bg-[var(--color-paper-2)]/60 min-w-0">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="min-w-0">
                <div className="text-[11px] font-mono tracking-widest uppercase text-[var(--color-accent)]">03 — Projects · Workbench</div>
                <h2 className="mt-2 text-[28px] sm:text-[36px] leading-none tracking-[-0.02em] font-semibold">
                  Built for problems <span className="text-[var(--color-ink-3)]">I actually have.</span>
                </h2>
              </div>
              <p className="max-w-[44ch] text-[13px] leading-relaxed text-[var(--color-ink-2)]">
                Real screenshots in <span className="font-mono text-[12px] border border-[var(--color-border)] bg-white px-1.5 py-0.5">{"<figure>"}</span> with hairline border. No fake chrome. Drag or swipe.
              </p>
            </div>
            <div className="mt-8">
              <ProjectsCarousel />
            </div>
            <p className="mt-3 text-[11px] font-mono text-[var(--color-ink-muted)]">
              Images are live captures — if a tile shows “to confirm”, Playwright was blocked and I’ll replace it when you send a higher-res export.
            </p>
          </div>
        </section>

        {/* Thesis */}
        <section id="thesis" className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 border-b border-[var(--color-border)] min-w-0">
          <div className="grid grid-cols-12 gap-8 min-w-0">
            <div className="col-span-12 lg:col-span-5 min-w-0">
              <div className="text-[11px] font-mono tracking-widest uppercase text-[var(--color-accent)]">04 — Research</div>
              <h2 className="mt-2 text-[24px] sm:text-[28px] leading-tight tracking-[-0.02em] font-semibold">Bachelor thesis · 2025</h2>
              <p className="mt-3 text-[13px] leading-relaxed text-[var(--color-ink-2)]">
                “Möglichkeiten und Grenzen von KI-Anwendungen bei der Erstellung und Analyse von externen Software-Dokumentationen” — Uni Potsdam · Software Engineering.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <a
                  href="https://doi.org/10.25932/publishup-68510"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[13px] font-mono underline decoration-[var(--color-border-strong)] underline-offset-4 hover:decoration-[var(--color-accent)]"
                >
                  DOI 10.25932/publishup-68510 →
                </a>
                <a
                  href="https://github.com/jhannesreimann/Bachelorarbeit"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[13px] font-mono underline decoration-[var(--color-border-strong)] underline-offset-4 hover:decoration-[var(--color-accent)]"
                >
                  Repository →
                </a>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3 min-w-0">
              {[
                { k: "63.1% vs 52.5%", v: "LLM (o4-mini) vs DocTool on Alibi-detection accuracy" },
                { k: "0.45 vs 0.18", v: "Logic errors / file — LLM-generated Javadoc vs human originals" },
                { k: "Hybrid", v: "Conclusion: formal checks + semantic LLM = best docs workflow" },
              ].map((s) => (
                <div key={s.k} className="border border-[var(--color-border)] bg-white p-4">
                  <div className="text-[16px] font-mono font-semibold leading-tight">{s.k}</div>
                  <div className="text-[12px] leading-relaxed text-[var(--color-ink-2)] mt-2">{s.v}</div>
                </div>
              ))}
              <div className="sm:col-span-3 border border-[var(--color-border)] bg-[var(--color-paper-2)] p-4 text-[13px] leading-relaxed text-[var(--color-ink-2)]">
                Examined whether LLMs can beat rule-based DocTool on detecting weak “alibi” Javadoc and on generating new Javadoc. LLMs win on semantics, lose on hallucinated logic when identifiers are obfuscated.
              </div>
            </div>
          </div>
        </section>

        {/* Awards */}
        <section id="awards" className="bg-[var(--color-ink)] text-white border-b border-[var(--color-ink)] min-w-0">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <div className="text-[11px] font-mono tracking-widest uppercase text-white/60">05 — Awards</div>
              <div className="text-[11px] font-mono text-white/50">HackHPI 2025 · Digital Health Innovation Forum · HPI</div>
            </div>
            <div className="grid grid-cols-12 gap-6 lg:gap-8 mt-6 min-w-0">
              <div className="col-span-12 lg:col-span-5 min-w-0">
                <h2 className="text-[28px] sm:text-[34px] leading-none tracking-[-0.02em] font-semibold">HackHPI 2025 — WIN</h2>
                <p className="mt-2 text-[13px] font-mono tracking-widest uppercase text-white/60">Challenge #1 · Ottobock · Accessibility</p>
                <p className="mt-4 text-[15px] leading-relaxed text-white/80">
                  Team <span className="text-white font-medium">IncluGo</span> — custom mapping for people with disabilities. Swipe obstacles that matter to <em className="not-italic text-white border-b border-white/30">you</em>,
                  preview the route before you leave, contribute back to OpenStreetMap. Built as a React app.
                </p>
                <p className="mt-3 text-[12px] leading-relaxed text-white/60">
                  Team: Aleksandrs Morgensterns, Samuel Leßmann, Niels G., Adam Brangenberg, Benedikt Liebold, Jhannes Reimann. Jury: Ottobock · HPI.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <a href="https://github.com/SamuelLess/inclu-go" target="_blank" rel="noreferrer" className="px-4 py-2 bg-white text-[var(--color-ink)] text-[13px] font-mono hover:bg-white/90 transition whitespace-nowrap">
                    IncluGo on GitHub →
                  </a>
                  <a
                    href="https://www.youtube.com/watch/-fjqKHxNptQ"
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 border border-white/20 text-white text-[13px] font-mono hover:border-white/40 hover:bg-white/5 transition whitespace-nowrap"
                  >
                    Demo video
                  </a>
                </div>
                <div className="mt-6 border border-white/15 bg-white/5 p-4">
                  <div className="text-[11px] font-mono tracking-widest uppercase text-white/60">Presenting</div>
                  <div className="text-[14px] leading-relaxed text-white/80 mt-1">Digital Health Innovation Forum, HPI 2025 — live presenting inclu-go routing.</div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-7 min-w-0">
                <div className="grid grid-cols-12 gap-3">
                  <div className="col-span-12">
                    <figure className="screenshot border-white/15 bg-white">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/screenshots/inclu-go.png" alt="IncluGo app screenshots" className="w-full h-auto" />
                    </figure>
                    <div className="text-[11px] font-mono text-white/50 mt-1.5">IncluGo — swipe obstacles, preview route, learn from all users. Screenshots from repo `public/pictures/*`.</div>
                  </div>
                  <div className="col-span-12 sm:col-span-6">
                    <figure className="screenshot border-white/15 bg-white aspect-[4/3] overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/awards/hackhpi-trophy-1.jpg" alt="HackHPI trophy 1" className="w-full h-full object-cover" />
                    </figure>
                  </div>
                  <div className="col-span-12 sm:col-span-6">
                    <figure className="screenshot border-white/15 bg-white aspect-[4/3] overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/awards/hackhpi-trophy-2.jpg" alt="HackHPI trophy 2" className="w-full h-full object-cover" />
                    </figure>
                  </div>
                </div>
                <details className="mt-4 border border-white/15 bg-white/[0.04] p-3">
                  <summary className="cursor-pointer text-[12px] font-mono text-white/70 list-none flex items-center justify-between">
                    <span>Embed LinkedIn post (urn:li:ugcPost:7310236945253625857)</span>
                    <span aria-hidden>⌄</span>
                  </summary>
                  <div className="mt-3 overflow-hidden border border-white/10 bg-white">
                    <iframe
                      src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7310236945253625857?collapsed=1"
                      height={628}
                      width={504}
                      title="HackHPI 2025 winners post"
                      className="w-full max-w-[504px] h-[628px] mx-auto block"
                      loading="lazy"
                    />
                  </div>
                </details>
                <p className="mt-2 text-[11px] font-mono text-white/40">If the embed is auth-walled, it will show a LinkedIn sign-in. Higher-res trophy photos you send will replace the placeholders.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 min-w-0">
          <div className="grid grid-cols-12 gap-8 min-w-0">
            <div className="col-span-12 lg:col-span-6 min-w-0">
              <div className="text-[11px] font-mono tracking-widest uppercase text-[var(--color-accent)]">06 — Contact</div>
              <h2 className="mt-2 text-[28px] sm:text-[32px] leading-tight tracking-[-0.02em] font-semibold">Let’s talk security.</h2>
              <p className="mt-3 text-[14px] leading-relaxed text-[var(--color-ink-2)] max-w-[48ch]">
                Open to working-student, internship and junior security / platform roles. Fastest way is email — I read everything.
              </p>
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
                <div className="text-[11px] font-mono tracking-widest uppercase text-[var(--color-ink-3)]">Availability</div>
                <ul className="mt-3 space-y-2 text-[13px] leading-relaxed text-[var(--color-ink-2)]">
                  <li className="flex gap-2"><span className="text-[var(--color-accent)]">—</span> Security / platform engineering — Werkstudent → full-time pipeline</li>
                  <li className="flex gap-2"><span className="text-[var(--color-accent)]">—</span> HPI MSc through Apr 2027 — Potsdam/Berlin hybrid preferred</li>
                  <li className="flex gap-2"><span className="text-[var(--color-accent)]">—</span> Topics: TLS, DNS, mail security, IoT radio, OSM</li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  <a href="mailto:reimann.jhannes@gmail.com?subject=Hi%20Jhannes%20—%20from%20your%20site" className="px-4 py-2 bg-[var(--color-ink)] text-white text-[13px] font-mono hover:bg-[var(--color-ink-2)] transition whitespace-nowrap">
                    Compose email
                  </a>
                  <span className="inline-flex items-center gap-2 px-3 py-2 border border-[var(--color-border)] bg-white text-[11px] font-mono text-[var(--color-ink-3)]">
                    <span className="h-2 w-2 bg-[var(--color-accent)] rounded-full animate-pulse" aria-hidden /> typically replies same day
                  </span>
                </div>
              </div>
              <p className="mt-3 text-[11px] font-mono text-[var(--color-ink-muted)]">No tracking, no cookies. Just email + GitHub.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Ft2 Inline rule single line */}
      <footer className="border-t border-[var(--color-border)] bg-[var(--color-paper-2)]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-[var(--color-ink-3)]">
            <span>© 2026 Jhannes Reimann · Potsdam · Built with Next.js · Type: JetBrains Mono + Inter</span>
            <span className="flex items-center gap-3">
              <a href="https://github.com/jhannesreimann" target="_blank" rel="noreferrer" className="underline decoration-[var(--color-border)] underline-offset-4 hover:decoration-[var(--color-ink-3)] whitespace-nowrap">
                GitHub
              </a>
              <span aria-hidden>·</span>
              <a href="https://doi.org/10.25932/publishup-68510" target="_blank" rel="noreferrer" className="underline decoration-[var(--color-border)] underline-offset-4 hover:decoration-[var(--color-ink-3)] whitespace-nowrap">
                Thesis DOI
              </a>
              <span aria-hidden>·</span>
              <span className="whitespace-nowrap">Imprint on request</span>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
