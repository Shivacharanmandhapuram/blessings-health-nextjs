import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import { SITE_URL, clinicJsonLd } from "@/lib/site";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Assistant from "@/components/Assistant";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Blessings Medical Clinic | Primary Care in Fall River, MA",
    template: "%s | Blessings Medical Clinic",
  },
  description:
    "Primary care, DOT/CDL physicals, pain management, and urgent care in Fall River, MA. Care from Dr. Nikhil Gohokar, a board-certified family physician.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Blessings Medical Clinic",
    title: "Blessings Medical Clinic | Primary Care in Fall River, MA",
    description:
      "Compassionate primary care, DOT/CDL physicals, pain management, and urgent care in Fall River, MA.",
    url: SITE_URL,
    locale: "en_US",
    images: ["/logo-full.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blessings Medical Clinic | Primary Care in Fall River, MA",
    description:
      "Compassionate primary care, DOT/CDL physicals, pain management, and urgent care in Fall River, MA.",
    images: ["/logo-full.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicJsonLd()) }}
        />
      </head>
      <body className="min-h-screen bg-cream font-sans text-gray-900 antialiased">
        <Navbar />
        <main>{children}</main>
        <Contact />
        <Assistant />
      </body>
    </html>
  );
}
