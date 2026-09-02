const SITE = {
  url: "https://www.maurojota.com",
  name: "Mauro José",
  fullName: "Mauro José Soares",
  jobTitle: "Product Designer",
  description:
    "A multidisciplinary designer with 14+ years of experience across visual, UX, and product design. I work across the full design process, from early direction and flows to implementation and delivery.",
  locale: "en_US",
  email: "maurojsoares@gmail.com",
  whatsapp: "https://wa.me/5512988147485",
  linkedin: "https://linkedin.com/in/maurojose",
  github: "https://github.com/maurojose",
  gaId: "G-Q1D015ZX18",
} as const;

const SAME_AS: string[] = [SITE.linkedin, SITE.github];

type CaseStudy = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  cover: string;
  liveUrl: string;
  keywords: string[];
  publishedTime: string;
  modifiedTime: string;
};

const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "rakoon",
    eyebrow: "rakoon.fun",
    title: "Making Token Launch as easy as possible",
    description:
      "Case study: designing rakoon.fun, a Radix token launchpad — $50k transaction volume, 200+ tokens launched, ~600 unique active wallets. Branding, interaction design and product strategy.",
    cover: "/rakoonCover.png",
    liveUrl: "https://rakoon.fun",
    keywords: ["Product Design", "Web3", "Branding", "Radix DLT", "Launchpad", "UI Design"],
    publishedTime: "2025-01-01",
    modifiedTime: "2026-01-25",
  },
  {
    slug: "dexter",
    eyebrow: "dEXTER",
    title: "Enhancing the trading experience on Radix",
    description:
      "Case study: redesigning the dEXTER order-book DEX on Radix — 35% faster order flow, 50% fewer input errors, 90% clearer trading dashboards. UX/UI redesign and design system.",
    cover: "/dexterCover.png",
    liveUrl: "https://dexteronradix.com",
    keywords: ["UX Design", "Design System", "Web3", "Radix DLT", "Trading Interface", "DeFi"],
    publishedTime: "2024-06-01",
    modifiedTime: "2026-01-25",
  },
];

const caseStudyBySlug = (slug: string) => CASE_STUDIES.find((c) => c.slug === slug);

type LabProject = {
  slug: string;
  title: string;
  subtitle: string;
  /** Long copy for the modal. Contains <br/> — strip tags before reusing as plain text. */
  description: string;
  image: string;
  alt: string;
  ctaText: string;
  ctaLink: string;
};

const LAB_PROJECTS: LabProject[] = [
  {
    slug: "junteselinhos",
    title: "JunteSelinhos",
    subtitle: "The simplest way to keep your customers coming back",
    description:
      "JunteSelinhos is a frictionless digital loyalty card for small businesses: merchants can create a card in minutes, add stamps for customers using their email, phone number, or a QR code at the counter, and customers can track their accumulated stamps and redeem rewards with a code.<br/><br/>MVP built with Claude Code.",
    image: "junte.png",
    alt: "JunteSelinhos digital loyalty card interface showing a stamp card and reward redemption",
    ctaText: "Live version",
    ctaLink: "https://junteselinhos.com.br",
  },
  {
    slug: "traitwiz",
    title: "TraitWiz",
    subtitle: "Create NFTS collections like magic.",
    description: `Solo-built tool that turns layered trait artwork into complete, mintable NFT collections.<br/><br/>- Rarity-weighted trait randomization with uniqueness guarantees<br/>- Cloud-based image compositing pipeline + IPFS storage for final assets<br/>- Wallet-based auth via Radix DLT<br/>- Stack: Next.js, Firebase, Google Cloud Storage, custom microservice<br/><br/>Built end-to-end solo — architecture, backend logic, and integrations — with AI assistance on cloud setup and one particularly hard sampling algorithm. <br/><br/>Launched as MVP but never continued commercially, but proof of shipping a working multi-system product alone.`,
    image: "traitWiz.png",
    alt: "TraitWiz NFT collection generator interface showing layered trait artwork and rarity settings",
    ctaText: "GitHub version",
    ctaLink: "https://github.com/maurojose/TraitWiz",
  },
];

export { SITE, SAME_AS, CASE_STUDIES, caseStudyBySlug, LAB_PROJECTS };
export type { CaseStudy, LabProject };
