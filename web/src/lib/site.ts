/**
 * Single source of truth for Blessings Medical Clinic site content.
 * All claims here are gated on .kiro/steering/services-and-claims.md
 * (Confirmed additions — 2026-07-20, Dr. Nikhil Gohokar owner-relayed approval).
 *
 * DO NOT add unverified claims. Notably PENDING:
 *  - exact total review count (only "150+ 5-star reviews" aggregate is approved)
 *  - clinic opening hours (omitted from schema until confirmed — do not fabricate)
 *  - precise geo coordinates (omitted until verified)
 */

export const SITE_URL = "https://www.blessingshealth.org";

export const CLINIC = {
  name: "Blessings Medical Clinic",
  legalName: "Blessings Medical Clinic",
  url: SITE_URL,
  phone: "+1-617-251-5065",
  phoneDisplay: "(617) 251-5065",
  email: "care@blessingsclinic.com",
  address: {
    street: "415 Elsbree St, Ste 201",
    city: "Fall River",
    region: "MA",
    postalCode: "02720",
    country: "US",
  },
  // Aggregate review claim only. No total count and NO aggregateRating schema (Google guideline).
  reviewsClaim: "150+ 5-star reviews across our online patient profiles",
  areasServed: [
    "Fall River",
    "Somerset",
    "Swansea",
    "Dartmouth",
    "New Bedford",
    "Tiverton",
    "Bristol County",
  ],
} as const;

export const PROVIDER = {
  name: "Dr. Nikhil Gohokar",
  givenName: "Nikhil",
  familyName: "Gohokar",
  jobTitle: "Board-Certified Family Physician",
  credentials: [
    "Board-certified by the American Board of Family Medicine (ABFM)",
    "NRCME-certified medical examiner (DOT/CDL physicals)",
  ],
  languages: ["English", "Hindi", "Marathi", "Urdu"],
} as const;

export type Service = {
  slug: string;
  name: string;
  short: string;
  description: string;
};

// Approved services only (services-and-claims.md, 2026-07-20).
export const SERVICES: Service[] = [
  {
    slug: "primary-care",
    name: "Primary Care",
    short: "Comprehensive primary care and preventive medicine for patients of all ages.",
    description:
      "Ongoing primary care for patients of all ages — annual physicals, preventive screenings, and management of chronic conditions, with a focus on prevention and continuity of care.",
  },
  {
    slug: "dot-cdl-physicals",
    name: "DOT / CDL Physicals",
    short: "DOT/CDL physicals by an NRCME-certified medical examiner.",
    description:
      "Department of Transportation (DOT) and commercial driver (CDL) medical examinations performed by Dr. Nikhil Gohokar, an NRCME-certified medical examiner.",
  },
  {
    slug: "pain-management",
    name: "Pain Management & Joint Injections",
    short: "Joint injections for knee, shoulder, back, hip bursitis, and neck.",
    description:
      "Consultations and joint injections for the knee, shoulder, back, hip bursitis, and neck. Care is tailored to your situation; talk with Dr. Gohokar about whether a joint injection may be appropriate for you.",
  },
  {
    slug: "urgent-care",
    name: "Urgent Care",
    short: "Same-visit care for common illnesses and minor in-office procedures.",
    description:
      "Care for common, non-emergency illnesses and minor in-office procedures. For life-threatening emergencies, call 911 or go to the nearest emergency room.",
  },
  {
    slug: "addiction-treatment",
    name: "Addiction Treatment (MAT)",
    short: "Office-based medication-assisted treatment for opioid use disorder.",
    description:
      "Office-based addiction care, including medication-assisted treatment (MAT) for opioid use disorder. Speak with Dr. Gohokar about whether this treatment is appropriate for you.",
  },
];

// Specific, confirmed insurance list (approved by Dr. Gohokar, 2026-07-20).
export const INSURANCE_PLANS: string[] = [
  "Aetna",
  "Blue Cross Blue Shield of MA",
  "Cigna",
  "Commonwealth Care Alliance",
  "Fallon Community Health",
  "Harvard Pilgrim Health Care",
  "Humana",
  "Medicare",
  "Tufts Health Plan",
  "UnitedHealthcare",
  "Workers' Compensation",
  "Motor Vehicle Insurance",
];

// Official social/profile URLs (fill as they are created — feeds schema sameAs).
export const SOCIAL_PROFILES: string[] = [];

/**
 * MedicalClinic + WebSite JSON-LD (@graph).
 * NOTE: openingHoursSpecification and geo are intentionally omitted until verified.
 * NO aggregateRating/review here (Google self-review guideline + compliance).
 */
export function clinicJsonLd() {
  const clinic: Record<string, unknown> = {
    "@type": "MedicalClinic",
    "@id": `${SITE_URL}/#clinic`,
    name: CLINIC.name,
    url: SITE_URL,
    logo: `${SITE_URL}/logo-full.png`,
    image: `${SITE_URL}/logo-full.png`,
    telephone: CLINIC.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: CLINIC.address.street,
      addressLocality: CLINIC.address.city,
      addressRegion: CLINIC.address.region,
      postalCode: CLINIC.address.postalCode,
      addressCountry: CLINIC.address.country,
    },
    availableLanguage: PROVIDER.languages,
    medicalSpecialty: ["PrimaryCare", "Emergency"],
    areaServed: CLINIC.areasServed.map((name) => ({ "@type": "City", name })),
    physician: {
      "@type": "Physician",
      name: PROVIDER.name,
      url: `${SITE_URL}/about/nikhil`,
      medicalSpecialty: "PrimaryCare",
      knowsLanguage: PROVIDER.languages,
    },
  };
  if (SOCIAL_PROFILES.length > 0) clinic.sameAs = SOCIAL_PROFILES;

  return {
    "@context": "https://schema.org",
    "@graph": [
      clinic,
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: CLINIC.name,
        url: SITE_URL,
        publisher: { "@id": `${SITE_URL}/#clinic` },
      },
    ],
  };
}


/** BreadcrumbList JSON-LD helper for sub-pages. */
export function breadcrumbJsonLd(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: `${SITE_URL}${t.path}`,
    })),
  };
}
