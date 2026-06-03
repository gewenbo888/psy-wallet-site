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
  return (
    <span className="grid place-items-center w-8 h-8 rounded-md bg-gradient-to-br from-mint to-sky text-ink font-display font-bold">
      Ψ
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
