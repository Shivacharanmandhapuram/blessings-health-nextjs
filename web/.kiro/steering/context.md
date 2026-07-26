---
inclusion: always
---

# Blessings Health (Next.js site) — Project Context

## What this is
The **production clinic website** for Blessings Medical Clinic — a Next.js 16 App Router rebuild
of the original Vite/React SPA. Fall River MA adult/family primary care, Dr. Nikhil Gohokar.

Repo layout: this folder (`web/`) is the app. `../legacy-src/` is the cloned original SPA kept for
reference (the `shivahealthclinic` repo is the same legacy code).

## Stack
Next.js 16 (App Router), TypeScript, Tailwind v4, React 19.

> `AGENTS.md` warns: **this is not the Next.js you may know** — breaking changes to APIs,
> conventions and file structure. Read the relevant guide in `node_modules/next/dist/docs/`
> before writing code. `CLAUDE.md` points at `AGENTS.md`.

## The prime directive
**Preserve the existing design exactly. Do not redesign.** The real components were faithfully
ported; only rendering, structure and SEO were allowed to change underneath. Any visual change
needs explicit instruction.

## Single source of truth
`src/lib/site.ts` holds `CLINIC` (NAP: Blessings Medical Clinic, 415 Elsbree St Ste 201, Fall
River MA 02720, +1-617-251-5065), `PROVIDER`, `SERVICES`, `INSURANCE_PLANS`, `SOCIAL_PROFILES`,
`SITE_URL`, plus `clinicJsonLd()` (`@graph`; deliberately omits hours and geo until verified) and
`breadcrumbJsonLd()`. Change facts there, not in components.

Legacy content constants remain in `src/constants.tsx`.

## Routes
`/` · `/about` · `/about/nikhil` · `/services` · `/insurance` · `/contact`, plus `robots.txt`,
`sitemap.xml`, `icon.png`, `apple-icon.png`. Navbar, Contact (footer) and Assistant are **global**
in `layout.tsx`; the home page is lean (Hero + MeetDoctor + Testimonials + FAQ).
The Assistant is a Call-Now FAB, **not** a chatbot.

## Compliance constraints — this is a YMYL medical site
- Every published claim must trace to `services-and-claims.md` in the `blessings` marketing brain.
  Do not invent services, credentials, insurers, hours, or review counts.
- "150+ 5-star reviews" is approved only as an **aggregate**; do not publish a total count.
- No self-serve `aggregateRating` / `Review` schema.
- Never put patient PHI anywhere in this repo.

## Deploy
`npx --yes vercel --prod --yes` from this folder. Separate Vercel project "web", alias
`web-zeta-seven-x4qou5uhjt.vercel.app`. The live `blessingshealth.org` is **untouched** — the
domain migration to `blessingsmedical.org` is deliberately the final step.
CDN caches the alias briefly; cache-bust when verifying (`?cb=$(date +%s)`).

## Related
`blessings` — the marketing brain that owns strategy, approved claims and the flags list.
`wellness` — waiting-room PWA. `shivahealthclinic` — the legacy SPA.
