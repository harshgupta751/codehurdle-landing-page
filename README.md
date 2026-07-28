<div align="center">

# CodeHurdle

**Master DSA without guessing what to practice next.**

Pattern-based DSA practice, contest editorials, and company-simulated mock interviews — built for ambitious software engineers.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion)

</div>

---

## Getting Started

Clone, install, and run — no additional configuration required.

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev

# 3. Open the app
# http://localhost:3000
```

Other available scripts:

```bash
npm run build   # Production build (static generation + type-check)
npm run start   # Serve the production build
npm run lint    # ESLint (next/core-web-vitals ruleset)
```

> **Note:** `next.config.js` allowlists `i.pravatar.cc` for testimonial avatars via `images.remotePatterns`. Swap this for a real asset source before shipping to production.

---

## Folder Structure

```
codehurdle/
├── app/
│   ├── layout.tsx                  # Root layout — font loading, ThemeProvider, metadata
│   ├── page.tsx                    # Landing page composition (imports sections only)
│   └── globals.css                 # Design tokens (CSS custom properties) + Tailwind base
│
├── components/
│   ├── ui/                         # shadcn/ui primitives
│   │   ├── button.tsx
│   │   └── accordion.tsx
│   │
│   ├── layout/                     # App chrome
│   │   ├── navbar.tsx              # Sticky, scroll-aware, accessible mobile menu
│   │   ├── footer.tsx
│   │   └── theme-toggle.tsx        # Light/dark switch (next-themes)
│   │
│   ├── sections/                   # One file per landing page section
│   │   ├── hero-section.tsx
│   │   ├── product-overview-section.tsx
│   │   ├── features-section.tsx
│   │   ├── why-codehurdle-section.tsx
│   │   ├── mock-interview-section.tsx
│   │   ├── testimonials-section.tsx
│   │   ├── faq-section.tsx
│   │   └── cta-section.tsx
│   │
│   ├── shared/                     # Reusable content primitives (used across 2+ sections)
│   │   ├── section-header.tsx      # Eyebrow + heading + subtext
│   │   ├── feature-card.tsx
│   │   ├── testimonial-card.tsx
│   │   ├── stat-block.tsx
│   │   ├── animated-counter.tsx    # Framer Motion count-up
│   │   ├── code-window.tsx         # Editor-chrome mockup — the signature visual motif
│   │   └── verdict-badge.tsx       # "Accepted / Wrong Answer" badge — recurring motif
│   │
│   ├── motion/                     # Centralized animation primitives
│   │   ├── variants.ts             # Single source of truth for easing/duration
│   │   ├── fade-in.tsx
│   │   └── stagger-container.tsx
│   │
│   └── icons/
│       └── logo.tsx
│
├── lib/
│   ├── utils.ts                    # cn() class merge helper
│   ├── constants.ts                # NAV_LINKS, SOCIAL_LINKS, SITE_CONFIG
│   └── data/                       # Typed content, decoupled from JSX
│       ├── features.ts
│       ├── testimonials.ts
│       └── faqs.ts
│
├── types/
│   └── index.ts                    # Feature, Testimonial, FAQItem, Verdict, NavLink
│
├── hooks/
│   └── use-scroll-direction.ts
│
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

---

## Tech Stack

| Layer | Choice | Why |
|---|---|---|
| **Framework** | Next.js 14 (App Router) | Server components by default, file-system routing, and built-in static generation — the page ships as static HTML with zero client-side data fetching overhead. |
| **Language** | TypeScript | Every data shape (`Feature`, `Testimonial`, `FAQItem`) is a typed contract, so content and components can't drift apart silently. |
| **Styling** | Tailwind CSS | Design tokens live once, in `globals.css`, and are consumed everywhere as utilities — no ad-hoc hex codes scattered across components. |
| **Components** | shadcn/ui (Button, Accordion) | Unstyled, accessible Radix primitives we own the source for — not a black-box dependency, and every visual decision stays in our token system. |
| **Motion** | Framer Motion | Declarative, viewport-triggered animation with first-class `prefers-reduced-motion` support via `useReducedMotion()`. |
| **Icons** | Lucide React | Consistent 1.5–1.75px stroke weight across the whole page; matches the "engineered," not decorative, visual language we wanted. |
| **Fonts** | Geist Sans + JetBrains Mono | Geist for a crisp, engineered display/body face; JetBrains Mono reserved specifically for code, stats, and verdicts — never used in prose. |

---

## Key Engineering Decisions

**Content and presentation are hard-separated.** Every section's copy lives in a typed file under `lib/data/` — `features.ts`, `testimonials.ts`, `faqs.ts` — and never inline in JSX. This isn't cosmetic: it means a content update (new testimonial, reworded FAQ) is a data change, not a component change, and it's the same pattern a real production CMS-backed site would use. Combined with the `types/index.ts` contracts, TypeScript catches a malformed feature or missing testimonial field at compile time rather than as a silent rendering gap in production.

**Reusability was designed top-down, not refactored in after the fact.** Before writing a single section, we identified the primitives that would recur — `SectionHeader`, `FeatureCard`, `StatBlock`, `AnimatedCounter` — and built them once in `components/shared/`. The result: eight distinct sections share a consistent visual and interaction language without a single copy-pasted block. The `CodeWindow` and `VerdictBadge` components go further — they're not just reused, they're the page's *signature motif*, appearing in the Hero, Features, and Mock Interview sections to reinforce that CodeHurdle's product **is** the coding surface, rather than leaning on generic stock illustration.

**Performance and semantics were treated as non-negotiable, not "nice to have."** The page ships as fully static HTML (`next build` output confirms static generation on every route), with client-side JavaScript scoped only to components that genuinely need interactivity — the theme toggle, mobile nav, accordion, and motion wrappers are all explicitly marked `"use client"`, while section layout and copy stay server-rendered. Every section uses a real `<section>` boundary with a properly nested heading hierarchy (`h1` in Hero, `h2` per section, `h3` for cards), so the page is navigable by screen reader landmark and heading jump — not just visually structured. Motion respects `prefers-reduced-motion` everywhere via a single `useReducedMotion()` check inside the shared `FadeIn` and `StaggerContainer` wrappers, meaning we enforce this once centrally instead of trusting every section to remember it.

**The animation system is centralized specifically to prevent inconsistency at scale.** Rather than each section hand-rolling its own Framer Motion transition, every reveal animation pulls from a single `variants.ts` file with one easing curve and duration scale. This is what makes the page feel like it was art-directed as a whole rather than assembled section-by-section — and it means a future motion timing change is a one-line edit, not an eight-file hunt. The same discipline applies to the design tokens in `globals.css`: light and dark mode are HSL custom properties consumed by Tailwind's `hsl(var(--token))` pattern, so **every** color decision — border, text, accent — traces back to one token definition per mode, which is what makes full dark/light parity achievable without per-component overrides.

---

<div align="center">

Built with intent, not defaults.

</div>