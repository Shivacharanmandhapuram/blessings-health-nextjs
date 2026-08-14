import type { Metadata } from "next";
import DoctorProfile from "@/components/DoctorProfile";

export const metadata: Metadata = {
  title: "Dr. Nikhil Gohokar — Board-Certified Family Physician",
  description:
    "Meet Dr. Nikhil Gohokar, a board-certified family physician committed to bringing high-quality primary care, preventive medicine, lifestyle education, office procedures, and healthcare innovation to diverse and underserved communities.",
  alternates: { canonical: "/about/nikhil" },
};

export default function DoctorProfilePage() {
  return <DoctorProfile />;
}
