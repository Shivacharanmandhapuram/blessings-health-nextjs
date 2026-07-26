import type { Metadata } from "next";
import { CONTACT_INFO } from "@/constants";
import { breadcrumbJsonLd } from "@/lib/site";
import { MapPin, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Directions",
  description:
    "Contact Blessings Medical Clinic at 415 Elsbree St, Ste 201, Fall River, MA 02720. Call (617) 251-5065 to schedule a visit with Dr. Nikhil Gohokar.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const crumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ]);
  return (
    <section className="bg-cream py-20 scroll-mt-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumb) }}
      />
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-teal-dark tracking-tight">
          Contact Blessings Medical Clinic
        </h1>
        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
          Call us to ask a question or schedule a visit with Dr. Nikhil Gohokar. Our team can
          help with scheduling and verifying your insurance.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-cream-dark bg-white p-6">
            <div className="flex items-center gap-3 text-teal">
              <MapPin className="w-5 h-5" />
              <h2 className="font-serif text-lg font-semibold text-teal-dark">Visit</h2>
            </div>
            <address className="mt-3 not-italic leading-7 text-gray-700">
              {CONTACT_INFO.address}
            </address>
          </div>

          <div className="rounded-2xl border border-cream-dark bg-white p-6">
            <div className="flex items-center gap-3 text-teal">
              <Phone className="w-5 h-5" />
              <h2 className="font-serif text-lg font-semibold text-teal-dark">Call</h2>
            </div>
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="mt-3 block text-xl font-semibold text-teal hover:underline"
            >
              {CONTACT_INFO.phone}
            </a>
            <p className="mt-2 text-sm text-gray-500">Please call to confirm current hours.</p>
          </div>

          <div className="rounded-2xl border border-cream-dark bg-white p-6">
            <div className="flex items-center gap-3 text-teal">
              <Mail className="w-5 h-5" />
              <h2 className="font-serif text-lg font-semibold text-teal-dark">Email</h2>
            </div>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="mt-3 block text-teal hover:underline break-all"
            >
              {CONTACT_INFO.email}
            </a>
          </div>

          <div className="rounded-2xl bg-teal/5 border border-teal/20 p-6">
            <h2 className="font-serif text-lg font-semibold text-teal-dark">
              Medical emergency?
            </h2>
            <p className="mt-3 text-sm leading-6 text-gray-700">
              If you are experiencing a life-threatening emergency, call 911 or go to the nearest
              emergency room. Blessings Medical Clinic does not provide emergency care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
