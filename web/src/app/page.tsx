import Hero from "@/components/Hero";
import MeetDoctor from "@/components/MeetDoctor";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import AnimatedSection from "@/components/AnimatedSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AnimatedSection delay={100}>
        <MeetDoctor />
      </AnimatedSection>
      <AnimatedSection delay={100}>
        <Testimonials />
      </AnimatedSection>
      <AnimatedSection delay={100}>
        <FAQ />
      </AnimatedSection>
    </>
  );
}
