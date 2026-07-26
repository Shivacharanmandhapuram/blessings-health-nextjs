import type { Metadata } from "next";
import DoctorProfile from "@/components/DoctorProfile";

export const metadata: Metadata = {
  title: "Dr. Nikhil Gohokar — Board-Certified Family Physician",
  description:
    "Meet Dr. Nikhil Gohokar, a board-certified family physician (ABFM) and NRCME-certified medical examiner serving Fall River, MA. Multilingual care in English, Hindi, Marathi, and Urdu.",
  alternates: { canonical: "/about/nikhil" },
};

export default function DoctorProfilePage() {
  return <DoctorProfile />;
}
