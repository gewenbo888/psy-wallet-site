"use client";

import { useLanguage } from "./LanguageContext";
import type { Locale } from "./i18n";

export default function Home() {
  const { t, locale, setLocale } = useLanguage();

  return (
    <main className="min-h-screen">
      {/* ─── Top nav ────────────────────────────────────────────── */}
      <header className="fixed top-0 inset-x-0 z-50 glass">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-3">
          <a href="#top" className="flex items-center gap-2 group">
            <Mark />
            <span className="font-display font-semibold tracking-tighter2 text-lg">
              Psy Wallet
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-7 text-sm text-white/70">
            <a href="#features" className="hover:text-white transition-colors">
              {t.nav.features}
            </a>
            <a href="#security" className="hover:text-white transition-colors">
              {t.nav.security}
            </a>
            <a
              href="#architecture"
              className="hover:text-white transition-colors"
            >
              {t.nav.architecture}
            </a>
            <a href="#faq" className="hover:text-white transition-colors">
              {t.nav.faq}
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <LangToggle locale={locale} onChange={setLocale} />
            <a
              href={t.footer.links[0].href}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-mint text-ink px-4 py-1.5 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              {t.nav.getStarted} →
            </a>
          </div>
        </div>
      </header>

      {/* ─── Hero ───────────────────────────────────────────────── */}
      <section id="top" className="bg-mesh pt-32 pb-24 px-6">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-mint mb-6 animate-fade-in">
            {t.hero.eyebrow}
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-semibold tracking-tighter2 leading-[1.05] max-w-5xl animate-slide-up">
            {t.hero.titlePart1}
            <span className="gradient-text">{t.hero.titleHighlight}</span>
            {t.hero.titlePart2}
          </h1>
          <p className="mt-8 max-w-3xl text-lg text-white/70 leading-relaxed animate-slide-up">
            {t.hero.subtitle}
          </p>

          <div className="mt-10 flex flex-wrap gap-4 animate-slide-up">
            <a
              href={t.footer.links[0].href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-mint text-ink px-6 py-3 font-medium hover:opacity-90 transition-opacity"
            >
              {t.hero.primaryCta} →
            </a>
            <a
              href="#architecture"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-medium hover:bg-white/5 transition-colors"
            >
              {t.hero.secondaryCta}
            </a>
          </div>

          <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl">
            {t.hero.stats.map((s) => (
              <div key={s.label} className="glass rounded-2xl px-5 py-4">
                <div className="font-mono text-[10px] uppercase tracking-widest text-white/50">
                  {s.label}
                </div>
                <div className="mt-1 font-display text-xl font-medium">
                  {s.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Features ───────────────────────────────────────────── */}
      <section id="features" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow={t.features.sectionEyebrow}
            title={t.features.sectionTitle}
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.features.cards.map((c, idx) => (
              <article
                key={c.title}
                className="group glass rounded-3xl p-8 hover:border-mint/20 transition-colors"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-mint">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-2xl font-semibold tracking-tighter2">
                    {c.title}
                  </h3>
                </div>
                <p className="mt-4 text-white/70 leading-relaxed">
                  {c.description}
                </p>
                <ul className="mt-5 space-y-2">
                  {c.bullets.map((b) => (
                    <li
                      key={b}
                      className="text-sm text-white/55 flex gap-2 leading-relaxed"
                    >
                      <span className="text-mint shrink-0">→</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Workflow ───────────────────────────────────────────── */}
      <section className="px-6 py-24 border-t border-white/5">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow={t.workflow.sectionEyebrow}
            title={t.workflow.sectionTitle}
            sub={t.workflow.sectionSub}
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.workflow.steps.map((s) => (
              <div
                key={s.label}
                className="glass rounded-3xl p-7 hover:bg-white/[0.04] transition-colors"
              >
                <div className="font-mono text-mint text-3xl font-medium tracking-tighter2">
                  {s.label}
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm text-white/65 leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Security ───────────────────────────────────────────── */}
      <section id="security" className="px-6 py-24 border-t border-white/5">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow={t.security.sectionEyebrow}
            title={t.security.sectionTitle}
            sub={t.security.sectionSub}
          />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.security.features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-white/8 bg-plate/40 p-6 hover:border-mint/25 transition-colors"
              >
                <div className="w-7 h-7 rounded-md bg-mint/15 grid place-items-center mb-4">
                  <Shield />
                </div>
                <h3 className="font-display text-lg font-semibold leading-tight">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Architecture ───────────────────────────────────────── */}
      <section id="architecture" className="px-6 py-24 border-t border-white/5">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow={t.architecture.sectionEyebrow}
            title={t.architecture.sectionTitle}
            sub={t.architecture.sectionSub}
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4">
            {t.architecture.components.map((c) => (
              <div
                key={c.name}
                className="rounded-2xl border border-white/8 bg-gradient-to-br from-plate/60 to-ink p-7 hover:border-sky/30 transition-colors"
              >
                <div className="code text-mint text-xs uppercase tracking-widest mb-3">
                  ◆ {c.name}
                </div>
                <p className="text-white/75 leading-relaxed">
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ────────────────────────────────────────────────── */}
      <section id="faq" className="px-6 py-24 border-t border-white/5">
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            eyebrow={t.faq.sectionEyebrow}
            title={t.faq.sectionTitle}
          />
          <div className="mt-14 space-y-3">
            {t.faq.entries.map((e) => (
              <details
                key={e.q}
                className="group rounded-2xl border border-white/8 bg-plate/40 p-6 [&[open]]:bg-plate/70 transition-colors"
              >
                <summary className="font-display text-lg font-medium cursor-pointer list-none flex items-start justify-between gap-4">
                  <span>{e.q}</span>
                  <span className="text-mint mt-1 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-white/65 leading-relaxed">{e.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Footer ─────────────────────────────────────────────── */}
      <footer className="px-6 py-16 border-t border-white/5 bg-plate/40">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2">
              <Mark />
              <span className="font-display font-semibold tracking-tighter2">
                Psy Wallet
              </span>
            </div>
            <p className="mt-4 text-sm text-white/55 leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>
          <div className="md:col-span-1">
            <div className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-4">
              Links
            </div>
            <ul className="space-y-2">
              {t.footer.links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/70 hover:text-mint transition-colors"
                  >
                    {l.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-1">
            <div className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-4">
              Language
            </div>
            <LangToggle locale={locale} onChange={setLocale} />
          </div>
        </div>
        <div className="mx-auto max-w-6xl mt-12 pt-8 border-t border-white/5 text-xs text-white/40 font-mono">
          {t.footer.legal}
        </div>
      </footer>
    </main>
  );
}

// ───────────────────────────────────────────────────────────────
// Small atomic components — kept inline so the page stays self-contained.
// ───────────────────────────────────────────────────────────────

function Mark() {
  // The real Psy glyph — a stylized lowercase psi sourced from the
  // shipped Psy bridge identity (`psy-privacy-bridge/public/psy-icon.svg`).
  // The textbook Greek `Ψ` is NOT the wallet's logo; using it was a
  // placeholder. Recolored here to the mint→sky gradient against a
  // near-black rounded chip so it reads cleanly at small sizes.
  return (
    <span
      aria-label="Psy"
      className="grid place-items-center w-8 h-8 rounded-md bg-ink ring-1 ring-white/10"
    >
      <svg
        viewBox="0 0 302 302"
        className="w-5 h-5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="markGrad"
            x1="0"
            y1="0"
            x2="302"
            y2="302"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#62FFCC" />
            <stop offset="100%" stopColor="#0070F3" />
          </linearGradient>
        </defs>
        <path
          fill="url(#markGrad)"
          d="M179.491 5.87358C177.661 20.2312 176.047 36.9274 174.648 55.9622C173.249 74.9969 172.173 94.9018 171.42 115.677C170.774 136.343 170.451 156.411 170.451 175.881C170.451 189.586 170.72 203.889 171.258 218.791C171.904 233.584 172.711 247.452 173.68 260.395C174.648 273.339 175.724 283.727 176.908 291.558C173.464 292.863 168.622 294.549 162.38 296.616C156.246 298.683 151.296 300.477 147.529 302C146.346 301.347 145.323 300.64 144.462 299.879C143.602 299.118 142.633 298.139 141.557 296.942C143.494 284.434 145.162 269.804 146.561 253.053C148.068 236.303 149.197 218.519 149.951 199.702C150.812 180.885 151.242 162.067 151.242 143.25C151.242 128.349 150.919 112.903 150.274 96.9141C149.736 80.9249 148.928 65.5339 147.852 50.7412C146.776 35.8397 145.539 22.6242 144.14 11.0945C149.305 8.81037 154.793 6.68936 160.605 4.7315C166.416 2.77364 171.204 1.19647 174.971 0C175.724 0.65262 176.585 1.63155 177.554 2.93679C178.63 4.24203 179.275 5.22096 179.491 5.87358ZM241.96 69.1777C244.866 75.3776 247.072 82.8828 248.579 91.6931C250.193 100.504 251 108.77 251 116.493C251 128.566 249.171 141.238 245.512 154.508C241.853 167.669 236.257 179.96 228.724 191.381C221.299 202.802 211.829 212.102 200.314 219.28C188.799 226.35 175.24 229.885 159.636 229.885C143.063 229.885 129.289 227.656 118.312 223.196C107.336 218.737 98.619 212.754 92.1622 205.249C85.813 197.744 81.2932 189.369 78.6029 180.123C76.0202 170.878 74.7288 161.415 74.7288 151.734C74.7288 144.338 75.1055 136.452 75.8588 128.077C76.6121 119.701 76.9887 111.598 76.9887 103.767C76.9887 98.6544 75.3745 94.5212 72.1461 91.3668C68.9177 88.1037 61.869 86.0915 51 85.3301V77.1723C60.7928 76.0846 69.671 74.6162 77.6344 72.7672C85.5978 70.9181 92.0008 68.797 96.8434 66.4041C99.4262 67.4918 101.632 69.6128 103.462 72.7672C105.399 75.9215 106.367 82.1214 106.367 91.3668C106.367 99.6333 105.937 108.552 105.076 118.124C104.323 127.696 103.946 136.452 103.946 144.392C103.946 156.792 105.775 167.995 109.434 178.002C113.093 187.9 119.388 195.786 128.32 201.66C137.36 207.424 149.951 210.307 166.093 210.307C178.146 210.307 188.423 206.826 196.924 199.865C205.533 192.904 212.098 183.658 216.617 172.129C221.245 160.599 223.559 148.145 223.559 134.766C223.559 125.412 221.998 115.84 218.877 106.051C215.757 96.1527 211.183 88.7563 205.157 83.8617C209.031 81.1424 213.873 78.0425 219.684 74.5619C225.603 71.0812 230.553 68.2532 234.535 66.0778C235.934 66.7304 237.118 67.2743 238.086 67.7093C239.162 68.1444 240.454 68.6339 241.96 69.1777Z"
        />
      </svg>
    </span>
  );
}

function SectionHeader({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-mint mb-4">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tighter2 leading-tight">
        {title}
      </h2>
      {sub && (
        <p className="mt-5 text-white/65 leading-relaxed text-lg">{sub}</p>
      )}
    </div>
  );
}

function LangToggle({
  locale,
  onChange,
}: {
  locale: Locale;
  onChange: (next: Locale) => void;
}) {
  return (
    <div
      role="radiogroup"
      aria-label="Language"
      className="inline-flex items-center gap-0 rounded-full border border-white/10 bg-plate/60 p-0.5 text-xs font-medium"
    >
      <button
        type="button"
        role="radio"
        aria-checked={locale === "en"}
        onClick={() => onChange("en")}
        className={`px-3 py-1.5 rounded-full transition-colors ${
          locale === "en"
            ? "bg-mint text-ink"
            : "text-white/60 hover:text-white"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        role="radio"
        aria-checked={locale === "zh"}
        onClick={() => onChange("zh")}
        className={`px-3 py-1.5 rounded-full transition-colors ${
          locale === "zh"
            ? "bg-mint text-ink"
            : "text-white/60 hover:text-white"
        }`}
      >
        中文
      </button>
    </div>
  );
}

function Shield() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 1L2 3v3.5c0 3 2.1 5.5 5 6.5 2.9-1 5-3.5 5-6.5V3L7 1z"
        stroke="#62FFCC"
        strokeWidth="1.4"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
