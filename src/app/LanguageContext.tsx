/**
 * Bilingual language context + provider.
 *
 * Holds the active `Locale` ("en" | "zh") in React state, persists the
 * choice in localStorage so a return visit honours it, and exposes a
 * `useLanguage()` hook so any leaf component can read both the current
 * locale and the matching slice of the i18n content tree without prop
 * drilling.
 *
 * Default is `"en"`. The browser's `navigator.language` is checked on
 * first load so a Chinese-locale browser lands on the zh variant
 * automatically; the explicit toggle (top-right of the nav) overrides
 * and persists.
 */
"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { copy, type Locale, type SiteCopy } from "./i18n";

const STORAGE_KEY = "psy-wallet-site-locale";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (next: Locale) => void;
  t: SiteCopy;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  // Boot: read persisted preference; if none, sniff navigator.language.
  // Wrapped in useEffect because window/localStorage aren't available
  // during SSR/initial render.
  useEffect(() => {
    try {
      const persisted = window.localStorage.getItem(STORAGE_KEY);
      if (persisted === "en" || persisted === "zh") {
        setLocaleState(persisted);
        return;
      }
    } catch {
      /* localStorage disabled — fall through to sniffing */
    }
    const lang = (window.navigator?.language ?? "").toLowerCase();
    if (lang.startsWith("zh")) setLocaleState("zh");
  }, []);

  // Reflect on <html lang> so search engines + a11y tooling see the
  // correct language for the current view. Also drives ::selection CSS.
  useEffect(() => {
    document.documentElement.setAttribute("lang", locale === "zh" ? "zh-CN" : "en");
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* persist failure isn't fatal */
    }
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({ locale, setLocale, t: copy[locale] }),
    [locale, setLocale],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used inside <LanguageProvider>");
  }
  return ctx;
}
