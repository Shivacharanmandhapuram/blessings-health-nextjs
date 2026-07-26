import type { Metadata } from "next";
import Services from "@/components/Services";
import { breadcrumbJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Medical Services in Fall River, MA",
  description:
    "Primary care, DOT/CDL physicals, pain management and joint injections, and urgent care in Fall River, MA with Dr. Nikhil Gohokar.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  const crumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
  ]);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumb) }}
      />
      <Services />
    </>
  );
}
