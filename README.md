# Psy Wallet · Psy 钱包

Bilingual marketing site for **Psy Wallet** — the ZK-native Chrome
extension wallet for the Psy chain. Single Next.js 14 page rendering
every feature, security mechanism, architecture component, and FAQ
entry in both English and 简体中文 with a one-click language toggle.

## Links

- **Live:** [psy-wallet.psyverse.fun](https://psy-wallet.psyverse.fun)
- **Wallet source:** [github.com/PsyProtocol/psy-wallet](https://github.com/PsyProtocol/psy-wallet)
- **Bridge UI:** [psy-privacy-bridge.vercel.app](https://psy-privacy-bridge.vercel.app)
- **Psy protocol:** [psy.xyz](https://psy.xyz)

## Stack

- Next.js 14 (App Router) + TypeScript + Tailwind
- Bilingual via a React context (`src/app/LanguageContext.tsx`) and a
  flat content tree (`src/app/i18n.ts`)
- Distinctive typography: Space Grotesk display, Inter body,
  JetBrains Mono code
- Near-black canvas with electric mint (#62FFCC) + sky blue (#0070F3)
  accents matching the psy.xyz shipped identity

## Coverage

The site introduces every major wallet capability:

- Wallet creation & import (ZK / Classic / SD Key / mnemonic / private
  key / restore from backup)
- Private transfers (shield address + Nostr gift-wrap delivery)
- Public transfers (Psy ID, UPS batching, auto-claim)
- Deposits from Ethereum (bridge settlement trail)
- Claims (public, private, shield-deposit, Claim All)
- Balance management & token registry
- Transaction history (Activity tab semantics, batch row expansion)
- Self-transfers ("Sent to self" rendering)
- Saved backups & recovery (pre-commit recovery stubs, Retry Proof)
- Inbox & notifications (Nostr drain across all shield addresses)
- Security mechanisms (local ZK proofs, password-encrypted keys,
  approval-based dApp access, atomic batches, nullifier replay
  protection, recovery stubs)
- Architecture (UPS, Plonky2 + Goldilocks, Poseidon, Nostr NIP-44/59,
  MV3 service worker, extStorage)
- FAQ (open source, supported chains, key custody, traceability,
  multi-recipient send, self-transfer semantics, recovery)

## About

Part of the [Psyverse](https://psyverse.fun) portfolio by Gewenbo.
