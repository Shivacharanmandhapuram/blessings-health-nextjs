import type { Metadata } from "next";
import Insurance from "@/components/Insurance";
import { breadcrumbJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Insurance We Accept in Fall River, MA",
  description:
    "Blessings Medical Clinic accepts major insurance plans including Blue Cross Blue Shield of MA, Tufts, Harvard Pilgrim, UnitedHealthcare, and Medicare. Call to confirm your plan.",
  alternates: { canonical: "/insurance" },
};

export default function InsurancePage() {
  const crumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Insurance", path: "/insurance" },
  ]);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumb) }}
      />
      <Insurance />
    </>
  );
}
