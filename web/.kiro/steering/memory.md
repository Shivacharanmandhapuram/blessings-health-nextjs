---
inclusion: always
---

# Memory — living project state

> Update at the end of each working session.
> Last updated: **2026-07-26** (seeded from the `blessings` chat `91da66a4`; work through 2026-07-22).

## Status
Migration and SEO work are **largely complete and deployed** to the preview alias. Focus has since
moved to content marketing in the `blessings` brain, and **all remaining site tasks are parked by
instruction**.

Lighthouse (mobile): SEO 100, Best Practices 100, Agentic 100, Accessibility 98.

## Completed
- Vite/React SPA → Next.js 16 App Router, all real components ported. Fixed CSR-invisibility
  (raw HTML went from a 3 KB empty shell to full SSR content).
- Converted to multi-page with unique title/description/canonical + BreadcrumbList per route.
- Structured data: `MedicalClinic` + `Physician` + `WebSite` JSON-LD `@graph`, FAQPage schema.
- `llms.txt`, real `robots.txt`, `sitemap.xml` (6 URLs), meta description trimmed to 150 chars.
- Images 30 MB → 3.2 MB (WebP), hero/About/MeetDoctor moved to `next/image`.
- Removed fake pravatar avatars and em-dashes; added authoritative outbound links
  (FMCSA / ABFM / Medicare / MassHealth); footer internal-links nav.
- Refero-guided "calm clinical" pass: flat tinted surfaces + hairline borders instead of heavy
  shadows, no hover-lifts, teal-only accent — brand preserved.
- Two SEOptimer audits confirmed the gains: GEO C→A, internal links 2→13, mobile LCP 5.7s→3.5s.

## Pending — mostly owner-side, not code
- **GA4** — awaiting the Measurement ID. Note: standard GA4 on a clinic site is a **HIPAA
  problem** (Google will not sign a BAA); a server-side/compliant setup must be decided first.
- Google Search Console verification/submission (owner login).
- Local citations (list already delivered), 5 social profiles → then wire into `SOCIAL_PROFILES`
  and schema `sameAs`, DMARC/SPF (owner DNS), Facebook pixel.
- Toxic-backlink monitoring (owner/GSC).
- Redirect chain apex→www — do during the domain migration.
- Reduce unused JavaScript — low value, low priority.

## Known issues
- **Email domain mismatch:** the site shows `care@blessingsclinic.com` but the domains are
  `blessingshealth.org` / `blessingsmedical.org`. Waiting on the correct address to fix.
- SEOptimer "address missing" is a **detection quirk** — the address (415 Elsbree) and
  `PostalAddress` schema are verifiably present in the footer.
- "Word count dropped" in SEOptimer is a multi-page artifact (it only scans home). Sub-page counts:
  /about 605, /services 1146, /insurance 1353.
- Remaining inline `style=` on home is `next/image`-generated and benign.

## Last / final steps
1. Blog + newsletter via **Payload CMS + Resend/Listmonk** — lowest priority, needs an
   email-sending domain first.
2. **Domain migration** `blessingshealth.org → blessingsmedical.org` (301) — explicitly the final
   step. The owner holds `blessingsmedical.org`.
