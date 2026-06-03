/**
 * Bilingual content tree for the Psy Wallet site.
 *
 * Every user-facing string lives here keyed by section. The LanguageProvider
 * picks the right value at render time based on the user's selection (default
 * = English; persisted to localStorage so a return visit honours the choice).
 *
 * Why a flat tree per locale instead of i18next?
 *   - Zero runtime dependency
 *   - Strict TypeScript safety: missing keys in either locale fail the build
 *   - Trivial to grep for the source of a string when reviewing translations
 *
 * Translation guidance:
 *   - Chinese (zh) targets a Mandarin-reading professional audience
 *     (developer + crypto-aware). Tone is informative, not marketing.
 *   - English (en) matches the wallet's in-product UI voice — direct,
 *     concrete, no buzzwords.
 */

export type Locale = "en" | "zh";

export interface NavCopy {
  features: string;
  security: string;
  architecture: string;
  faq: string;
  getStarted: string;
}

export interface HeroCopy {
  eyebrow: string;
  titlePart1: string;
  titleHighlight: string;
  titlePart2: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  stats: { label: string; value: string }[];
}

export interface FeatureCard {
  title: string;
  description: string;
  bullets: string[];
}

export interface FeatureSectionCopy {
  sectionTitle: string;
  sectionEyebrow: string;
  cards: FeatureCard[];
}

export interface WorkflowStep {
  label: string;
  title: string;
  description: string;
}

export interface WorkflowSectionCopy {
  sectionEyebrow: string;
  sectionTitle: string;
  sectionSub: string;
  steps: WorkflowStep[];
}

export interface SecurityFeature {
  title: string;
  description: string;
}

export interface SecuritySectionCopy {
  sectionEyebrow: string;
  sectionTitle: string;
  sectionSub: string;
  features: SecurityFeature[];
}

export interface ArchitectureSectionCopy {
  sectionEyebrow: string;
  sectionTitle: string;
  sectionSub: string;
  components: { name: string; description: string }[];
}

export interface FaqEntry {
  q: string;
  a: string;
}

export interface FaqSectionCopy {
  sectionEyebrow: string;
  sectionTitle: string;
  entries: FaqEntry[];
}

export interface FooterCopy {
  tagline: string;
  links: { label: string; href: string }[];
  legal: string;
}

export interface SiteCopy {
  nav: NavCopy;
  hero: HeroCopy;
  features: FeatureSectionCopy;
  workflow: WorkflowSectionCopy;
  security: SecuritySectionCopy;
  architecture: ArchitectureSectionCopy;
  faq: FaqSectionCopy;
  footer: FooterCopy;
}

// -----------------------------------------------------------------------
// English content
// -----------------------------------------------------------------------

export const en: SiteCopy = {
  nav: {
    features: "Features",
    security: "Security",
    architecture: "Architecture",
    faq: "FAQ",
    getStarted: "Get started",
  },
  hero: {
    eyebrow: "Psy Wallet · the ZK-native wallet for the Psy chain",
    titlePart1: "A wallet built for ",
    titleHighlight: "private, scalable",
    titlePart2: " on-chain payments.",
    subtitle:
      "Send public or fully-private transfers. Auto-claim incoming funds. Bridge from Ethereum. Manage multiple accounts. All inside a Chrome extension that runs ZK proofs locally and never leaks your keys.",
    primaryCta: "Install the extension",
    secondaryCta: "Read the architecture",
    stats: [
      { label: "Default privacy", value: "ZK-secured" },
      { label: "Proof system", value: "Plonky2" },
      { label: "Network", value: "Psy chain · Ethereum bridge" },
    ],
  },
  features: {
    sectionEyebrow: "Capabilities",
    sectionTitle: "Everything you need for private + public on-chain payments.",
    cards: [
      {
        title: "Wallet creation & import",
        description:
          "Spin up a fresh wallet, import a 12-word mnemonic, restore from an encrypted backup, or build a scoped SD Key for apps and automation.",
        bullets: [
          "ZK Wallet (recommended) — private by default, ZK-secured.",
          "Classic Wallet (secp256k1) — compatible with existing seed phrases & hardware.",
          "SD Key Wallet — scoped key for apps & automation, limited to what you authorize.",
          "Import: 12-word mnemonic, raw private key, or full backup JSON.",
          "Multiple accounts in one wallet; switch with one click.",
        ],
      },
      {
        title: "Private transfers",
        description:
          "Send funds privately to a recipient's shield address. The amount, sender, and recipient are hidden on-chain. The recipient is notified over Nostr; a backup packet is downloadable as a fallback.",
        bullets: [
          "Shield address + npub recipient notation, or combined `shield#npub` paste.",
          "ZK note proof generated locally — secrets never leave the device.",
          "Nostr (NIP-44 / NIP-59 gift-wrap) delivers the claim packet automatically.",
          "Saved backups page for every private send — re-download or retry proof at any time.",
          "Auto-claim: spend pending balances and send privately in one signature.",
        ],
      },
      {
        title: "Public transfers",
        description:
          "Send by Psy ID with the speed and clarity of a normal account-based chain. UPS bundles claims and the transfer into a single proof, so one signature spends many sources.",
        bullets: [
          "Send by Psy-NNNNNNNN identifier or shorthand userId.",
          "Auto-claim incoming public + private + shield-deposit balances in the same UPS.",
          "Single guta_fee per UPS regardless of how many calls ride inside it.",
          "Validations cover invalid Psy IDs, self-sends, zero amounts, insufficient balance.",
        ],
      },
      {
        title: "Deposits from Ethereum",
        description:
          "Move USDT (and other supported tokens) from Sepolia/Ethereum to the Psy chain through the bridge. The wallet shows the full settlement trail end-to-end.",
        bullets: [
          "MetaMask handshake — approve USDT, sign deposit.",
          "Settlement trail: Submitted → Confirmed (10 blocks) → Tree Updated → Proof assembling → Claimable.",
          "Shield-deposit claims flow into the wallet's Activity tab.",
          "Bridge proofs are recursively aggregated up to 65,536 leaves per UPS session.",
        ],
      },
      {
        title: "Claims (public, private, shield-deposit)",
        description:
          "Inbound funds arrive as claimable rows. Sweep them individually or use Claim All to consolidate. Already-claimed items reconcile silently and never duplicate.",
        bullets: [
          "Public claims for inbound `simple_transfer`.",
          "Private claims that verify the inclusion proof + retire the nullifier.",
          "Shield-deposit claims after a bridge deposit lands on Psy.",
          "Claim All batches everything in one UPS with a single fee.",
          "Friendly fallback: if claim batch fails, the wallet retries the transfer alone (commit 49044fc).",
        ],
      },
      {
        title: "Balance management & tokens",
        description:
          "PSY and USDT ship by default. Add custom tokens by contract id. Per-token balances render with the correct decimals; the home card shows total available with the fee floor subtracted for native sends.",
        bullets: [
          "PSY (contract 0, 9 decimals) and USDT (contract 4, 6 decimals) by default.",
          "Add / remove custom tokens — PSY cannot be removed.",
          "Available = on-chain settled + claimables − native fee floor.",
          "Token icons resolve from the symbol; custom tokens fall back to a glyph.",
        ],
      },
      {
        title: "Transaction history (Activity)",
        description:
          "Every operation lands in the Activity tab with status, amount, counterparty, fee, and a one-glance privacy badge. Batch operations expand to one row per recipient.",
        bullets: [
          "Status palette: Pending (spinner), Confirmed (foreground), Failed (red).",
          "Pre-claim helpers collapse into the primary user-intent row.",
          "Multi-recipient batches EXPAND to N rows (one per primary).",
          "Self-transfer renders as 'Sent to self'.",
          "Faucet auto-detected from operator userId and labelled accordingly.",
        ],
      },
      {
        title: "Self-transfers, done right",
        description:
          "Sending to your own Psy ID is allowed at the chain level but almost always a typo. The wallet renders it as 'Sent to self' so it's never mistaken for an incoming credit.",
        bullets: [
          "Wallet-side: detect isFromMe && isToMe and force outgoing styling.",
          "Chain-side: companion fix surfaces the slot-balance reconciliation correctly (commit 33d1805).",
          "Net result: no phantom 'incoming' rows after a self-send.",
        ],
      },
      {
        title: "Saved backups & recovery",
        description:
          "Every private send saves a recovery stub the instant the chain commit lands — so closing the popup mid-flight never bricks a transfer. Pending-proof rows can rebuild from stored secrets.",
        bullets: [
          "Recovery stubs persisted at chain-commit with full proof secrets.",
          "Status badges: Delivered, Needs manual delivery, Proof failed — retry.",
          "Re-download the packet at any time; recipient imports it under Claim → Import.",
          "Retry Proof rebuilds an inclusion proof from stored secrets if the live RPC blipped.",
        ],
      },
      {
        title: "Inbox & notifications",
        description:
          "A background drain pulls Nostr gift-wraps targeted at every account's npubs. New private notes surface as a bell badge and an Inbox row, ready to claim.",
        bullets: [
          "Per-account Nostr drain; each account's drain is isolated.",
          "Notification bell badge for new inbound private notes.",
          "Inbox row shows sender label, amount, token, and a one-tap Claim button.",
          "Persistent claim list caches across reloads (commit 7bccb96).",
        ],
      },
    ],
  },
  workflow: {
    sectionEyebrow: "How it works",
    sectionTitle: "From install to first payment in under a minute.",
    sectionSub:
      "Each step below corresponds to a real screen in the wallet. The flow is the same regardless of whether you're sending public or private.",
    steps: [
      {
        label: "01",
        title: "Install",
        description:
          "Download the Chrome extension. The wallet's WASM proof system initializes locally on first run; no remote keys, no cloud sync.",
      },
      {
        label: "02",
        title: "Create or import",
        description:
          "Spin up a fresh ZK Wallet, import a 12-word mnemonic, restore an encrypted backup, or paste a private key. Multiple accounts share one password.",
      },
      {
        label: "03",
        title: "Receive",
        description:
          "Share your Psy-NNNNNNNN for public payments or your shield address (and npub) for private ones. The first private receive address is created automatically at registration.",
      },
      {
        label: "04",
        title: "Send public or private",
        description:
          "Toggle between public (by Psy ID) and private (by shield address) modes. The wallet auto-claims any pending inbound balances in the same UPS to fund the send.",
      },
      {
        label: "05",
        title: "Claim",
        description:
          "Inbound public transfers, private notes, and shield deposits land in your Activity feed. Claim individually or sweep everything with Claim All.",
      },
      {
        label: "06",
        title: "Back up",
        description:
          "Export an encrypted backup any time. Restore it into a fresh browser profile to recover every account, balance, note, and Activity row.",
      },
    ],
  },
  security: {
    sectionEyebrow: "Security",
    sectionTitle: "Privacy is the default. Secrets never leave the device.",
    sectionSub:
      "The wallet's threat model assumes a hostile network and a curious dApp. ZK proofs are computed locally inside a WASM prover; private keys are encrypted at rest by your password.",
    features: [
      {
        title: "Local ZK proofs",
        description:
          "Plonky2 + Poseidon over Goldilocks. The full prover runs inside the extension's MV3 service worker. Inputs are never transmitted to a remote prover; only proofs are submitted on-chain.",
      },
      {
        title: "Password-encrypted keys",
        description:
          "Mnemonics and private keys are encrypted at rest with a KDF-derived key from your password. View mnemonic requires the password every time.",
      },
      {
        title: "Approval-based dApp access",
        description:
          "Every dApp request goes through an approve popup. You see the contract, method, and inputs before signing. Internal wallet calls bypass the popup with an explicit isInternal check.",
      },
      {
        title: "Origin-pinned permissions",
        description:
          "Account access is granted per-origin. A dApp that's never been approved can't query account state. Permission grants are persisted; revocation is a one-click setting.",
      },
      {
        title: "Nullifier-protected private notes",
        description:
          "Every private note carries a unique nullifier. The chain rejects replay attempts; the wallet never reveals which note funded a transfer.",
      },
      {
        title: "Recovery stubs at chain commit",
        description:
          "Private transfer secrets are persisted to local storage the instant the chain commit lands — so a popup close or SW eviction mid-flight cannot brick a transfer. Retry proof rebuilds from stored secrets.",
      },
      {
        title: "No L1/L2 conflation",
        description:
          "Psy is an independent chain, not a rollup of Ethereum. The wallet refers to chains by name (Psy, Ethereum). Deposits and withdrawals are explicit, not implicit 'L1/L2' moves.",
      },
      {
        title: "Atomic batches",
        description:
          "UPS commits all operations in a single transaction. If any call fails, the whole batch unwinds — no half-state. Your Activity tab reflects the atomic outcome.",
      },
    ],
  },
  architecture: {
    sectionEyebrow: "Architecture",
    sectionTitle: "Built on UPS, Plonky2, and Poseidon.",
    sectionSub:
      "Psy Wallet is a Chrome MV3 extension that talks to the Psy chain via a configurable prove-proxy and to Ethereum via the bridge UI. The same WASM prover powers single sends, batches, and shield-deposit claims.",
    components: [
      {
        name: "UPS (Unified Proof System)",
        description:
          "One signature, one ZK proof, many contract calls. Auto-claim batches incoming balances with the outgoing transfer in a single transaction. Pays the base fee once.",
      },
      {
        name: "Plonky2 + Goldilocks",
        description:
          "Recursive ZK proofs over the Goldilocks field. Proof generation is parallelisable and runs locally; recursive aggregation lets the bridge prove batches up to 65,536 leaves per session.",
      },
      {
        name: "Poseidon",
        description:
          "The ZK-friendly hash used for commitments and Merkle trees. Tuned for Goldilocks to keep proof sizes small and verification fast.",
      },
      {
        name: "Nostr (NIP-44 / NIP-59)",
        description:
          "Encrypted gift-wrap delivers private-note claim packets to recipient npubs. Multi-relay; the wallet's background drain pulls notes targeted at every account's address.",
      },
      {
        name: "MV3 service worker",
        description:
          "The WASM prover, message bus, and state manager all live in the SW. Cold-boot path is hardened: refreshPsyState awaits the in-flight reload instead of replying with stale 'initializing' state.",
      },
      {
        name: "extStorage (chrome.storage.local)",
        description:
          "Wallets, mnemonics, claim caches, Activity history, and transfer backups are persisted here. Survives popup close, SW eviction, and browser restart.",
      },
    ],
  },
  faq: {
    sectionEyebrow: "FAQ",
    sectionTitle: "Frequently asked questions.",
    entries: [
      {
        q: "Is Psy Wallet open source?",
        a: "The wallet ships with full source under github.com/PsyProtocol/psy-wallet. Reproducible builds are produced on the feat/shield-poseidon-bridge branch and verified by the e2e suite under e2e/.",
      },
      {
        q: "What chains does Psy Wallet support?",
        a: "Native: Psy chain (its own ZK-native independent chain). Bridged: Ethereum (and testnets like Sepolia) via the bridge UI for deposits and withdrawals of supported tokens (PSY, USDT).",
      },
      {
        q: "Do you store my private keys?",
        a: "Never on a server. Keys are encrypted at rest in chrome.storage.local on your device using your password as the KDF input. The wallet never transmits keys to any remote endpoint.",
      },
      {
        q: "Are private transfers traceable?",
        a: "On-chain, no. The note commitment hides sender, recipient, and amount. The recipient receives a claim packet via Nostr (or via a downloaded backup as a fallback). Only the recipient can identify the inbound credit.",
      },
      {
        q: "What happens if I close the popup mid-transaction?",
        a: "Public transfers commit atomically on-chain — closing the popup after the signature doesn't affect the chain outcome. Private transfers persist a recovery stub the instant the chain commit lands, so you can Retry Proof or download the backup later.",
      },
      {
        q: "How do I recover my wallet on a new device?",
        a: "Export a backup from Settings → Export Wallet, restore it on the new device with the same password. Every account, balance, note, shield address, and Activity row recovers.",
      },
      {
        q: "Can I send to multiple recipients at once?",
        a: "Yes — UPS supports batches up to 25 recipients per UPS in the current UI cap (structurally up to 65,536 per session). Each recipient can be public or private, and tokens can be mixed.",
      },
      {
        q: "What does 'Sent to self' mean in my Activity?",
        a: "It's a small render of a public transfer where the recipient is your own Psy ID. The chain accepts these (and they cost the normal fee) but the wallet labels them so they aren't mistaken for incoming credits.",
      },
    ],
  },
  footer: {
    tagline: "Private, scalable on-chain payments.",
    links: [
      { label: "Get the wallet", href: "https://psy-privacy-bridge.vercel.app/wallet" },
      { label: "Wallet source", href: "https://github.com/PsyProtocol/psy-wallet" },
      { label: "Psy protocol", href: "https://psy.xyz" },
      { label: "Bridge UI", href: "https://psy-privacy-bridge.vercel.app" },
    ],
    legal:
      "© Psy Protocol contributors. Independent ZK-native chain. Not financial advice.",
  },
};

// -----------------------------------------------------------------------
// 简体中文 content
// -----------------------------------------------------------------------

export const zh: SiteCopy = {
  nav: {
    features: "功能",
    security: "安全",
    architecture: "架构",
    faq: "常见问题",
    getStarted: "立即使用",
  },
  hero: {
    eyebrow: "Psy Wallet · 面向 Psy 主链的零知识原生钱包",
    titlePart1: "为 ",
    titleHighlight: "隐私且可扩展",
    titlePart2: " 的链上支付而生。",
    subtitle:
      "支持公开和完全私密两种转账模式;自动归集待领收款;支持从以太坊跨链充值;多账户切换。所有 ZK 证明都在 Chrome 扩展内本地生成,私钥永不离开你的设备。",
    primaryCta: "安装钱包扩展",
    secondaryCta: "查看架构详情",
    stats: [
      { label: "默认隐私", value: "ZK 保护" },
      { label: "证明系统", value: "Plonky2" },
      { label: "网络", value: "Psy 链 · 以太坊桥" },
    ],
  },
  features: {
    sectionEyebrow: "核心能力",
    sectionTitle: "覆盖链上支付所需的所有功能——公开与私密兼顾。",
    cards: [
      {
        title: "创建与导入钱包",
        description:
          "新建钱包、从 12 个助记词恢复、从加密备份还原,或为应用与自动化场景生成受限的 SD Key。",
        bullets: [
          "ZK 钱包(推荐)——默认私密,ZK 加密保护。",
          "经典钱包(secp256k1)——兼容既有助记词与硬件钱包。",
          "SD Key 钱包——面向应用与自动化的受限密钥,权限可精确指定。",
          "支持导入:12 词助记词、原始私钥(hex)、完整备份 JSON。",
          "同一钱包内可创建多个账户,一键切换。",
        ],
      },
      {
        title: "私密转账",
        description:
          "向收款方的 shield 地址进行私密转账。金额、发送方、接收方在链上均被隐藏。通过 Nostr 自动通知收款方,同时支持下载备份包以备离线分发。",
        bullets: [
          "支持 shield 地址 + npub 两栏输入,或 `shield#npub` 合并粘贴。",
          "ZK 票据证明在本地生成——任何秘密信息均不离开设备。",
          "Nostr(NIP-44 / NIP-59 gift-wrap)自动投递认领包。",
          "每笔私密转账都会生成可下载的备份,可在任何时间重发或重新生成证明。",
          "自动归集:一次签名内同时完成入账归集和私密转出。",
        ],
      },
      {
        title: "公开转账",
        description:
          "以 Psy ID 为地址进行账户式转账。UPS 将归集与转账合并到同一笔交易中,一次签名即可消费多个待领来源。",
        bullets: [
          "通过 Psy-NNNNNNNN 或 userId 简写形式发送。",
          "自动归集公开余额、私密备注、bridge 充值——全部并入同一笔 UPS。",
          "每笔 UPS 只收取一次基础手续费,内含多次合约调用。",
          "校验覆盖无效 Psy ID、自转、零金额、余额不足等场景。",
        ],
      },
      {
        title: "从以太坊充值",
        description:
          "通过桥接 UI 将 USDT 及其他支持的代币从 Sepolia / 以太坊转入 Psy 主链。钱包完整展示结算过程。",
        bullets: [
          "MetaMask 握手——授权 USDT,签署充值交易。",
          "结算轨迹:已提交 → 已确认(10 区块)→ 树已更新 → 证明组装中 → 可领取。",
          "Shield 充值领取后会出现在钱包的 Activity 时间线中。",
          "桥接证明采用递归聚合,每个会话最多支持 65,536 叶节点。",
        ],
      },
      {
        title: "领取(公开 / 私密 / shield)",
        description:
          "所有入账以「待领」记录形式呈现,可逐笔领取或使用「全部领取」一键合并。已领取的项目静默对账,绝不重复。",
        bullets: [
          "对应 `simple_transfer` 的公开领取。",
          "需要验证 inclusion proof 并销毁 nullifier 的私密领取。",
          "Bridge 充值落账后的 shield 领取。",
          "全部领取在一笔 UPS 内合并,只收一次手续费。",
          "若 claim batch 失败,钱包会回退为纯转账并提示用户(commit 49044fc)。",
        ],
      },
      {
        title: "余额管理与代币",
        description:
          "默认内置 PSY 与 USDT。可通过合约 ID 添加自定义代币。各代币按其本身的精度展示;原生代币转账时主页可用余额已扣除手续费下限。",
        bullets: [
          "默认包含 PSY(contract 0, 9 位小数)与 USDT(contract 4, 6 位小数)。",
          "可添加 / 移除自定义代币——PSY 不可移除。",
          "可用 = 链上结算余额 + 可领取余额 − 原生手续费下限。",
          "代币图标按 symbol 解析;未识别的代币使用字符占位。",
        ],
      },
      {
        title: "交易历史(Activity)",
        description:
          "每一笔操作都会出现在 Activity 标签页:状态、金额、对方、手续费、隐私徽标一目了然。批量操作会展开为每个收款人一行。",
        bullets: [
          "状态色板:Pending(等待中)、Confirmed(已确认)、Failed(失败)。",
          "归集辅助调用会折叠到主操作行中。",
          "多收款人批量转账会展开为 N 行(每笔目标占一行)。",
          "自转交易显示为「Sent to self」,避免与入账混淆。",
          "若 sender 为 faucet operator,会自动识别为「水龙头」并打标。",
        ],
      },
      {
        title: "正确处理自转账",
        description:
          "向自己的 Psy ID 发送在链上是合法的,但绝大多数情况下是笔误。钱包会将其标注为「Sent to self」,避免与入账混淆。",
        bullets: [
          "钱包侧:检测 isFromMe && isToMe 并强制使用 outgoing 样式。",
          "链侧:配套修复确保 slot 余额正确对账(commit 33d1805)。",
          "净效果:自转账后不会再有「幻影」入账记录。",
        ],
      },
      {
        title: "本地备份与恢复",
        description:
          "每笔私密转账都会在链上提交的瞬间持久化一份恢复存根——即便中途关闭弹窗或 SW 被淘汰,转账也不会丢失。证明待生成的条目可从存档秘密重建。",
        bullets: [
          "在链上提交瞬间持久化,包含完整的证明恢复秘密。",
          "状态徽标:已送达、需手动转交、证明失败——可重试。",
          "随时可重新下载备份包;收款人通过 Claim → Import 导入即可领取。",
          "Retry Proof 会从存储秘密中重建 inclusion proof,应对临时 RPC 异常。",
        ],
      },
      {
        title: "收件箱与通知",
        description:
          "后台 drain 进程持续从 Nostr 拉取发往每个账户 npub 的礼物包。新的私密备注会以铃铛徽标 + Inbox 行的形式出现,可直接领取。",
        bullets: [
          "每个账户拥有独立的 Nostr drain;互不串扰。",
          "新入账时铃铛标记出现徽标。",
          "Inbox 行显示发送方标签、金额、代币和一键 Claim。",
          "重启 / 重新加载后持久化的可领取列表(commit 7bccb96)。",
        ],
      },
    ],
  },
  workflow: {
    sectionEyebrow: "如何使用",
    sectionTitle: "从安装到首次支付,不到一分钟。",
    sectionSub:
      "下方每一步都对应钱包内的真实页面。无论是公开转账还是私密转账,流程都是一致的。",
    steps: [
      {
        label: "01",
        title: "安装",
        description:
          "下载 Chrome 扩展。WASM 证明系统在首次运行时本地初始化;无远程密钥、无云端同步。",
      },
      {
        label: "02",
        title: "创建或导入",
        description:
          "新建一个全新的 ZK 钱包、从 12 个助记词导入、还原加密备份,或粘贴私钥。同一密码可保护多个账户。",
      },
      {
        label: "03",
        title: "收款",
        description:
          "公开收款使用 Psy-NNNNNNNN;私密收款使用 shield 地址 + npub。注册时会自动生成第一个私密收款地址。",
      },
      {
        label: "04",
        title: "公开或私密发送",
        description:
          "在公开(按 Psy ID)与私密(按 shield 地址)两种模式间切换。钱包会在同一笔 UPS 内自动归集待领余额以填充本次支出。",
      },
      {
        label: "05",
        title: "领取",
        description:
          "公开入账、私密备注、shield 充值都以待领记录的形式出现在 Activity 中。可逐笔领取或使用「全部领取」一键合并。",
      },
      {
        label: "06",
        title: "备份",
        description:
          "随时导出一份加密备份,在新设备 / 新 Chrome 配置中还原,即可找回所有账户、余额、备注与 Activity 历史。",
      },
    ],
  },
  security: {
    sectionEyebrow: "安全",
    sectionTitle: "隐私是默认设置;秘密永不离开设备。",
    sectionSub:
      "钱包的威胁模型假设网络敌对、dApp 可疑。ZK 证明在扩展的 WASM 证明器内本地生成,私钥使用密码派生的密钥进行静态加密。",
    features: [
      {
        title: "本地 ZK 证明",
        description:
          "Plonky2 + Poseidon 基于 Goldilocks 域。完整证明器运行在扩展的 MV3 service worker 中。输入永不发往远端证明器,只有最终证明会上链提交。",
      },
      {
        title: "密码加密私钥",
        description:
          "助记词与私钥均通过 KDF 派生密钥进行静态加密。每次「显示助记词」都需要重新输入密码。",
      },
      {
        title: "基于授权的 dApp 访问",
        description:
          "每一次 dApp 请求都会触发授权弹窗。在签名前能看到合约、方法和入参。钱包内部调用通过显式 isInternal 检查直接执行。",
      },
      {
        title: "按来源固定的权限",
        description:
          "账户访问权限按来源授予。未授权的 dApp 无法查询账户状态。权限授予可持久化,撤销也只需一键。",
      },
      {
        title: "Nullifier 防重放",
        description:
          "每条私密备注都有唯一的 nullifier。链端拒绝重放;钱包永不暴露用于支出的是哪条备注。",
      },
      {
        title: "提交即生成恢复存根",
        description:
          "私密转账的秘密信息在链上提交瞬间就写入本地存储——即使弹窗被关闭或 SW 被淘汰,转账也不会丢失。Retry Proof 可从存储秘密重建。",
      },
      {
        title: "拒绝 L1 / L2 误导",
        description:
          "Psy 是独立的 ZK-native 链,而非以太坊的 rollup。钱包在描述时使用准确的链名(Psy、Ethereum);充值与提现都是显式动作。",
      },
      {
        title: "批量原子化",
        description:
          "UPS 将所有操作打包为一笔交易。任一调用失败,整个 batch 回滚——绝不留半成品状态。Activity 时间线如实反映原子结果。",
      },
    ],
  },
  architecture: {
    sectionEyebrow: "架构",
    sectionTitle: "基于 UPS、Plonky2 与 Poseidon 构建。",
    sectionSub:
      "Psy Wallet 是一个 Chrome MV3 扩展。它通过可配置的 prove-proxy 与 Psy 主链通信,通过桥接 UI 与以太坊通信。单笔转账、批量、shield 充值领取均由同一个 WASM 证明器驱动。",
    components: [
      {
        name: "UPS(Unified Proof System)",
        description:
          "一次签名,一份 ZK 证明,多次合约调用。自动归集会将入账与发送合并到同一笔交易。基础手续费仅收取一次。",
      },
      {
        name: "Plonky2 + Goldilocks",
        description:
          "基于 Goldilocks 域的递归 ZK 证明。证明生成可并行,完全本地化;递归聚合让桥接证明每个会话最多可处理 65,536 个叶节点。",
      },
      {
        name: "Poseidon",
        description:
          "ZK 友好的哈希,用于承诺与 Merkle 树。专为 Goldilocks 调优,使得证明体积小、验证速度快。",
      },
      {
        name: "Nostr(NIP-44 / NIP-59)",
        description:
          "加密 gift-wrap 将私密备注的领取包投递给收款方 npub。支持多 relay;后台 drain 持续拉取所有账户地址相关的备注。",
      },
      {
        name: "MV3 service worker",
        description:
          "WASM 证明器、消息总线、状态管理器均位于 SW。冷启动路径经过加固:refreshPsyState 会等待初始化完成,而不是返回过期的 initializing 状态。",
      },
      {
        name: "extStorage(chrome.storage.local)",
        description:
          "钱包、助记词、领取缓存、Activity 历史、转账备份全部存放于此。可跨弹窗关闭、SW 淘汰与浏览器重启而保留。",
      },
    ],
  },
  faq: {
    sectionEyebrow: "常见问题",
    sectionTitle: "你可能想问的问题。",
    entries: [
      {
        q: "Psy Wallet 是开源的吗?",
        a: "是的,钱包完整源码托管在 github.com/PsyProtocol/psy-wallet。可复现构建产出于 feat/shield-poseidon-bridge 分支,由 e2e/ 下的端到端测试套件持续验证。",
      },
      {
        q: "Psy Wallet 支持哪些链?",
        a: "原生:Psy 链(独立的 ZK 原生链)。桥接:以太坊(及 Sepolia 等测试网),通过桥接 UI 完成支持代币(PSY、USDT)的充值与提现。",
      },
      {
        q: "你们会存我的私钥吗?",
        a: "服务器上永远不会存。私钥使用密码派生的密钥本地加密于 chrome.storage.local。钱包不会向任何远端传输私钥。",
      },
      {
        q: "私密转账可以被追溯吗?",
        a: "链上不可追溯。备注承诺隐藏了发送方、接收方与金额。接收方通过 Nostr 收到领取包(或在故障时下载备份分发)。只有接收方能识别这笔入账。",
      },
      {
        q: "如果我在交易过程中关掉弹窗会怎样?",
        a: "公开转账在链上是原子提交的——签名后关闭弹窗不影响链上结果。私密转账会在链上提交瞬间持久化恢复存根,可以稍后通过 Retry Proof 或下载备份继续完成。",
      },
      {
        q: "我怎样在新设备上恢复钱包?",
        a: "在原设备的 设置 → 导出钱包 中导出备份,在新设备使用相同密码恢复即可。所有账户、余额、备注、shield 地址与 Activity 历史都会复原。",
      },
      {
        q: "是否支持一次性发送给多个收款人?",
        a: "支持。UPS 在当前 UI 上限内支持每笔最多 25 个收款人(结构上限为每会话 65,536 个)。每个收款人可以选择公开或私密,代币也可以混合。",
      },
      {
        q: "Activity 中的「Sent to self」是什么意思?",
        a: "这是公开转账中收款方是自己 Psy ID 时的展示。链端允许这种操作(并照常收取手续费),钱包加上标注以避免被误认为入账。",
      },
    ],
  },
  footer: {
    tagline: "隐私且可扩展的链上支付。",
    links: [
      { label: "获取钱包", href: "https://psy-privacy-bridge.vercel.app/wallet" },
      { label: "钱包源码", href: "https://github.com/PsyProtocol/psy-wallet" },
      { label: "Psy 协议", href: "https://psy.xyz" },
      { label: "桥接 UI", href: "https://psy-privacy-bridge.vercel.app" },
    ],
    legal: "© Psy Protocol 贡献者。独立 ZK 原生链。非投资建议。",
  },
};

export const copy: Record<Locale, SiteCopy> = { en, zh };
