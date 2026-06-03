import type { Metadata } from "next";
import Script from "next/script";
import { LanguageProvider } from "./LanguageContext";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://psy-wallet.psyverse.fun"),
  title: "Psy Wallet | Psy 钱包",
  description:
    "ZK-native wallet for the Psy chain — private and public transfers, bridge deposits, multi-account, all with local ZK proofs.",
  keywords: [
    "Psy Wallet",
    "Psy 钱包",
    "ZK wallet",
    "private payments",
    "Plonky2",
    "Poseidon",
    "Goldilocks",
    "Nostr gift-wrap",
    "shield address",
    "private transfer",
    "Ethereum bridge",
    "zero knowledge",
  ],
  authors: [{ name: "Psy Protocol contributors" }],
  alternates: {
    canonical: "/",
    languages: { en: "/", "zh-CN": "/", "x-default": "/" },
  },
  openGraph: {
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Psy Wallet · Psy 钱包 — The ZK-native Chrome wallet for the Psy chain (bilingual feature guide)" }],
    title: "Psy Wallet — private + scalable on-chain payments",
    description:
      "Send public or fully-private transfers. Bridge from Ethereum. Multi-account. Local ZK proofs. Keys never leave your device.",
    url: "https://psy-wallet.psyverse.fun/",
    siteName: "Psyverse",
    type: "website",
    locale: "en_US",
    alternateLocale: ["zh_CN"],
  },
  twitter: {
    images: ["/twitter-image.png"],
    card: "summary_large_image",
    title: "Psy Wallet",
    description:
      "ZK-native wallet for the Psy chain. Private by default, scalable by design.",
  },
  robots: { index: true, follow: true },
  other: { "theme-color": "#06070A" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="alternate" hrefLang="en" href="https://psy-wallet.psyverse.fun/" />
        <link
          rel="alternate"
          hrefLang="zh-CN"
          href="https://psy-wallet.psyverse.fun/"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://psy-wallet.psyverse.fun/"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Psy Wallet",
              description:
                "ZK-native wallet for the Psy chain — private and public transfers, bridge deposits, multi-account.",
              url: "https://psy-wallet.psyverse.fun/",
              inLanguage: ["en", "zh-CN"],
              author: {
                "@type": "Organization",
                name: "Psy Protocol",
                url: "https://psy.xyz/",
              },
              publisher: {
                "@type": "Organization",
                name: "Psyverse",
                url: "https://psyverse.fun/",
              },
            }),
          }}
        />
      </head>
      <body className="bg-ink text-white antialiased">
        <LanguageProvider>{children}</LanguageProvider>
        <Script
          src="https://analytics-dashboard-two-blue.vercel.app/tracker.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
