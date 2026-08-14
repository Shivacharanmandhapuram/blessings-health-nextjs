import type { Metadata } from "next";
import About from "@/components/About";
import { breadcrumbJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Blessings Medical Clinic in Fall River, MA",
  description:
    "Patient-centered primary care in Fall River, Massachusetts, combining medical treatment, preventive medicine, and practical lifestyle guidance, with a commitment to serving diverse and underserved communities.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const crumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "About Clinic", path: "/about" },
  ]);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumb) }}
      />
      <About />
    </>
  );
}
