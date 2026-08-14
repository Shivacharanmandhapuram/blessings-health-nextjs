"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  ChevronRight,
  ChevronLeft,
  GraduationCap,
  Stethoscope,
  Award,
  Calendar,
  Briefcase,
  Globe,
  ScrollText,
  Users,
  HeartHandshake,
  Heart,
  BookOpen,
  Syringe,
  TrendingDown,
  Building,
  Phone,
  ArrowRight,
} from "lucide-react";

const DoctorProfile: React.FC = () => {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Hero Carousel Data - Reordered: USA -> India -> Global
  // ---------------------------------------------------------------------------
  // IMAGE SPECIFICATIONS FOR CAROUSEL:
  // Recommended Size: 1920x1080 pixels (16:9 Aspect Ratio)
  // Format: WebP (preferred for performance) or JPG
  // Note: Images should have a central focal point as edges may be cropped on mobile.
  // ---------------------------------------------------------------------------
  const slides = [
    {
      id: 1, // USA - Credibility First
      image: "/ii.webp", // Replace with actual file in public folder
      tag: "Primary Care · Urgent Care · Hospital Medicine",
      headline: "Experience Across the Healthcare System",
      subtext:
        "Dr. Gohokar's experience across several healthcare settings helps him understand the complete patient journey—from prevention and office-based treatment to urgent evaluation and hospital follow-up. Throughout his career, he has focused on making comprehensive care more accessible to underserved patients and communities.",
      cta: "View Clinical Experience",
      targetId: "usa-impact",
    },
    {
      id: 2, // India - Heart & Scale
      image: "/org.webp", // Replace with actual file in public folder
      tag: "Healthcare Innovation",
      headline: "Improving Care Beyond the Examination Room",
      subtext:
        "Through programs such as ER Can Wait and Wellness Group Visits, Dr. Gohokar has worked to improve access, reduce avoidable emergency-room use, and help patients take a more active role in their health. The ER Can Wait model was presented as a clinical CME session at the 2024 Community Health Institute Conference organized by the Massachusetts League of Community Health Centers.",
      cta: "Explore Community Programs",
      targetId: "india-impact",
    },
    {
      id: 3, // Global Bridge
      image: "/doctor.webp", // Replace with actual file in public folder
      tag: "Clinical Care · Education · Service",
      headline: "Medicine, Prevention, and Community Impact",
      subtext:
        "Dr. Gohokar combines medical treatment, prevention, lifestyle education, and community-based initiatives serving patients in Massachusetts and underserved villages in rural India.",
      cta: "View Full Profile",
      targetId: "professional-foundations",
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white min-h-screen animate-fade-in font-sans text-gray-900">
      {/* HERO SECTION: Full-width Carousel */}
      <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden bg-slate-900">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Background Image with Zoom Effect */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={slide.image}
                alt={slide.headline}
                className={`w-full h-full object-cover transform transition-transform duration-[8000ms] ease-out ${index === currentSlide ? "scale-110" : "scale-100"}`}
                onError={(e) => {
                  // Fallback to a solid color or pattern if image missing
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement!.style.backgroundColor =
                    "#1e293b";
                }}
              />
            </div>

            {/* Dark Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30"></div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-6 w-full pt-20">
                <div className="max-w-3xl animate-fade-in">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold mb-6 tracking-wide shadow-lg">
                    {slide.tag}
                  </span>
                  <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight drop-shadow-md">
                    {slide.headline}
                  </h1>
                  <p className="text-sm sm:text-base md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed font-light drop-shadow-sm">
                    {slide.subtext}
                  </p>
                  <button
                    onClick={() => scrollToSection(slide.targetId)}
                    className="group bg-white text-slate-900 hover:bg-teal hover:text-white px-4 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-lg transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow-md"
                  >
                    {slide.cta}
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Controls */}
        <div className="absolute bottom-6 sm:bottom-10 right-4 sm:right-6 md:right-12 z-20 flex gap-2 sm:gap-4">
          <button
            onClick={prevSlide}
            className="p-2 sm:p-3 rounded-full border border-white/30 text-white hover:bg-white hover:text-slate-900 transition-all backdrop-blur-sm"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 sm:p-3 rounded-full border border-white/30 text-white hover:bg-white hover:text-slate-900 transition-all backdrop-blur-sm"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 sm:bottom-10 left-4 sm:left-6 md:left-12 z-20 flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${
                idx === currentSlide
                  ? "w-8 sm:w-12 bg-teal"
                  : "w-6 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* SECTION: INTRO STRIP */}
      <section className="bg-teal py-8 sm:py-12 px-4 sm:px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg sm:text-2xl md:text-3xl font-serif italic text-white leading-relaxed">
            From hospital medicine and community health centers in
            Massachusetts to health and education programs in rural India, Dr.
            Nikhil Gohokar has consistently treated challenges as opportunities
            to improve patient care.
          </h2>
        </div>
      </section>

      {/* SECTION: GLOBAL INITIATIVES */}
      <div className="bg-slate-50">
        {/* PART 1: USA IMPACT (First as requested) */}
        <section id="usa-impact" className="py-12 sm:py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row gap-4 sm:gap-6 items-end mb-8 sm:mb-12 border-b border-gray-200 pb-6 sm:pb-8">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                  <Building className="w-4 h-4" /> USA Initiatives
                </div>
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                  Innovation at Home
                </h2>
              </div>
              <p className="text-base sm:text-xl text-gray-500 max-w-xl pb-2">
                Dr. Gohokar has worked in primary care, urgent care, and
                hospital medicine for more than 14 years, much of that time
                serving diverse and medically underserved populations.
              </p>
            </div>

            {/* ER Can Wait Feature */}
            <div className="bg-white rounded-[40px] overflow-hidden shadow-sm border border-gray-100 group hover:shadow-md transition-all duration-300">
              <div className="grid lg:grid-cols-2">
                <div className="p-6 sm:p-8 md:p-16 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 text-teal font-bold mb-4 sm:mb-6">
                    <TrendingDown className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base">
                      High Impact Results
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                    ER Can Wait Program
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                    Dr. Gohokar developed the ER Can Wait initiative to help
                    patients with frequent emergency-department use receive more
                    proactive, coordinated, and accessible primary care. Rather
                    than waiting for another crisis, the multidisciplinary team
                    worked to identify high-risk patients and understand the
                    medical, behavioral, social, and logistical factors
                    contributing to repeated emergency-room visits or hospital
                    readmissions.
                  </p>

                  <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-10">
                    <div className="bg-slate-50 p-4 sm:p-6 rounded-2xl">
                      <span className="block text-2xl sm:text-4xl font-bold text-blue-600 mb-1">
                        78%
                      </span>
                      <span className="text-xs sm:text-sm text-gray-600 font-medium">
                        Reduction in ED Visits
                      </span>
                    </div>
                    <div className="bg-slate-50 p-4 sm:p-6 rounded-2xl">
                      <span className="block text-2xl sm:text-4xl font-bold text-teal mb-1">
                        Award
                      </span>
                      <span className="text-xs sm:text-sm text-gray-600 font-medium">
                        Presented at 2024 Community Health Institute Conference
                      </span>
                    </div>
                  </div>

                  <a
                    href="https://www.bnhc.org/want-to-stay-healthy-out-of-the-hospital-this-group-can-help/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal font-bold flex items-center gap-2 group-hover:gap-3 transition-all text-sm sm:text-lg self-start hover:text-teal-dark"
                  >
                    Learn More About ER Can Wait{" "}
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                </div>
                <div className="relative h-[250px] sm:h-[350px] lg:h-auto bg-slate-200">
                  <img
                    /* 
                           RECOMMENDED IMAGE SIZE: 800x600 or 1000x800 (Portrait or Square-ish) 
                           Format: WebP
                        */
                    src="/erteam.webp"
                    alt="Medical team discussion"
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.parentElement!.style.backgroundColor =
                        "#e2e8f0";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Local Outreach Row */}
            <div className="mt-6 sm:mt-8 grid md:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-center">
                <Users className="w-8 h-8 sm:w-10 sm:h-10 text-coral mb-4" />
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  Sharon Town Health
                </h4>
                <p className="text-sm sm:text-base text-gray-500">
                  Youth substance abuse education and community health awareness
                  programs.
                </p>
              </div>
              {/* Photo slots for USA work */}
              <div className="md:col-span-2 rounded-3xl overflow-hidden relative h-48 sm:h-64 md:h-auto group">
                <img
                  /* 
                         RECOMMENDED IMAGE SIZE: 1200x600 (2:1 aspect ratio)
                         Format: WebP
                      */
                  src="/group_photo.webp"
                  alt="Community outreach"
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.parentElement!.style.backgroundColor =
                      "#f1f5f9";
                  }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
              </div>
            </div>
          </div>
        </section>

        {/* PART 2: INDIA IMPACT (Second as requested) */}
        <section id="india-impact" className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-6 items-end mb-12 border-b border-gray-200 pb-8">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                  <Globe className="w-4 h-4" /> India Initiatives
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  My Village My Dream
                </h2>
              </div>
              <p className="text-xl text-gray-500 max-w-xl pb-2">
                Bringing healthcare, education, and hope to underserved rural
                communities in Chandrapur, India.
              </p>
            </div>

            {/* Foundation Gallery - Main */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="relative h-[400px] rounded-[32px] overflow-hidden group shadow-lg">
                <img
                  /* 
                           RECOMMENDED IMAGE SIZE: 800x600 (4:3 aspect ratio)
                           Format: WebP
                        */
                  src="/empoweringyouth.jpeg"
                  alt="Foundation work with children"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.parentElement!.style.backgroundColor =
                      "#dbeafe";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Empowering Youth</h3>
                  <p className="text-gray-200 opacity-90">
                    Education and tuition support for village children.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] rounded-[32px] overflow-hidden group shadow-lg">
                <img
                  /* 
                           RECOMMENDED IMAGE SIZE: 800x600 (4:3 aspect ratio)
                           Format: WebP
                        */
                  src="/Community Development.jpeg"
                  alt="Village gathering"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.parentElement!.style.backgroundColor =
                      "#ffedd5";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">
                    Community Development
                  </h3>
                  <p className="text-gray-200 opacity-90">
                    Socioeconomic programs for sustainable growth.
                  </p>
                </div>
              </div>
            </div>

            {/* Specific Projects Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Project 1 */}
              <div className="group">
                <div className="relative h-64 rounded-3xl overflow-hidden mb-6 shadow-md bg-gray-100">
                  <img
                    /* RECOMMENDED SIZE: 600x400 */
                    src="/Village Mini Clinics.jpeg"
                    alt="Mini Clinic"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-teal">
                    Healthcare
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Village Mini Clinics
                </h3>
                <p className="text-gray-500 text-sm mb-3">
                  Screening 9,500 people for BP, diabetes, and malnutrition
                  across 7 villages. Diagnosed 900+ new patients.
                </p>
              </div>

              {/* Project 2 */}
              <div className="group">
                <div className="relative h-64 rounded-3xl overflow-hidden mb-6 shadow-md bg-gray-100">
                  <img
                    /* RECOMMENDED SIZE: 600x400 */
                    src="/Joint Injection Camps.jpeg"
                    alt="Injection Camp"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-amber-600">
                    Pain Relief
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Joint Injection Camps
                </h3>
                <p className="text-gray-500 text-sm mb-3">
                  Providing specialized long-term pain relief in underserved
                  areas like Pandharkawda through expert medical camps.
                </p>
              </div>

              {/* Project 3 */}
              <div className="group">
                <div className="relative h-64 rounded-3xl overflow-hidden mb-6 shadow-md bg-gray-100">
                  <img
                    /* RECOMMENDED SIZE: 600x400 */
                    src="/Alcohol Cessation.jpeg"
                    alt="Alcohol Cessation"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-purple-600">
                    Social Impact
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Alcohol Cessation
                </h3>
                <p className="text-gray-500 text-sm mb-3">
                  Community support programs in Vihirgaon implemented with
                  Alcoholics Anonymous to help participants quit alcohol.
                </p>
              </div>
            </div>

            {/* Explicit Foundation CTA */}
            <div className="mt-16 text-center">
              <a
                href="https://www.myvillagemydream.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber-500 text-white px-10 py-4 rounded-full font-bold hover:bg-amber-400 transition-all shadow-lg hover:shadow-sm group"
              >
                Learn More About My Village My Dream Foundation
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* SECTION 4: PROFESSIONAL FOUNDATIONS (Unchanged) */}
      <section
        id="professional-foundations"
        className="py-20 bg-white border-t border-gray-100"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-teal/10 text-teal rounded-full text-sm font-semibold mb-4">
              Credentials & Leadership
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Professional Foundations
            </h2>
          </div>

          {/* Experience Timeline */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Briefcase className="w-6 h-6 text-teal mr-3" /> Experience
              Timeline
            </h3>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal via-amber-400 to-sage"></div>

              <div className="space-y-8">
                {/* Present */}
                <div className="relative pl-12">
                  <div className="absolute left-0 w-8 h-8 bg-teal rounded-full flex items-center justify-center text-white shadow-lg">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <span className="inline-block px-3 py-1 bg-teal/10 text-teal text-xs font-bold rounded-full mb-3">
                      PRESENT
                    </span>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-bold text-gray-900">
                          President, My Village My Dream Foundation
                        </h4>
                        <p className="text-sm text-gray-500">
                          Leading health, education, and development programs in
                          India
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">
                          Owner/Provider, Blessings Medical Clinic
                        </h4>
                        <p className="text-sm text-gray-500">
                          Fall River, MA | June 2024 – Present
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">
                          Primary Care/Urgent Care Physician
                        </h4>
                        <p className="text-sm text-gray-500">
                          Brockton Neighborhood Health Center | July 2012 –
                          Present
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Past Experience */}
                <div className="relative pl-12">
                  <div className="absolute left-0 w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center text-white shadow-lg">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-full mb-3">
                      10+ YEARS
                    </span>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-bold text-gray-900">
                          Hospitalist (Per Diem)
                        </h4>
                        <p className="text-sm text-gray-500">
                          Brockton Hospital, Brockton, MA | Feb 2013 – Jan 2023
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">Pod Lead</h4>
                        <p className="text-sm text-gray-500">
                          Brockton Neighborhood Health Center | 2014 – 2025
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education Grid */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <GraduationCap className="w-6 h-6 text-teal mr-3" /> Education &
              Training
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-teal-50 to-white p-6 rounded-2xl border border-teal/20 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center mb-4">
                  <Stethoscope className="w-6 h-6 text-teal" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">
                  Family Medicine Residency
                </h4>
                <p className="text-sm text-gray-600 mb-3">
                  Wayne State University / Crittenton Hospital, MI
                </p>
                <span className="text-xs text-gray-500 font-mono">
                  2009 – 2012
                </span>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-2xl border border-amber-200/50 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6 text-amber-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">
                  M.S. Healthcare Administration
                </h4>
                <p className="text-sm text-gray-600 mb-3">
                  Midwestern State University, TX & Oklahoma City University
                </p>
                <span className="text-xs text-gray-500 font-mono">
                  2005 – 2008
                </span>
              </div>

              <div className="bg-gradient-to-br from-sage/20 to-white p-6 rounded-2xl border border-sage/30 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-sage/20 rounded-xl flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-sage" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">MBBS</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Government Medical College, Nagpur, India
                </p>
                <span className="text-xs text-gray-500 font-mono">
                  1999 – 2005
                </span>
              </div>
            </div>
          </div>

          {/* Licensure & Awards Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Licensure */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <ScrollText className="w-5 h-5 text-teal mr-2" /> Licensure &
                Expertise
              </h3>
              <div className="space-y-3">
                {[
                  { icon: Award, text: "Board-Certified Family Physician" },
                  {
                    icon: ScrollText,
                    text: "Physician Licence – Massachusetts",
                  },
                  {
                    icon: Heart,
                    text: "DATA-waived Buprenorphine (Suboxone) Prescriber",
                  },
                  {
                    icon: Briefcase,
                    text: "Certified Medical Examiner (FMCSA)",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-100 hover:border-teal/30 transition-colors"
                  >
                    <div className="w-10 h-10 bg-teal/10 rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-teal" />
                    </div>
                    <span className="text-gray-700 font-medium">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Honors & Awards */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Award className="w-5 h-5 text-amber-500 mr-2" /> Honors &
                Awards
              </h3>
              <div className="space-y-3">
                {[
                  {
                    title: "Graduate Merit Scholarship",
                    org: "Midwestern State University",
                  },
                  {
                    title: "Best Intern Nominee",
                    org: "Government Medical College",
                  },
                  {
                    title: "Top 20% of Class",
                    org: "Government Medical College",
                  },
                  {
                    title: "Academic Scholarships",
                    org: "Government Medical College (1999–2004)",
                  },
                ].map((award, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 bg-gradient-to-r from-amber-50 to-white p-4 rounded-xl border border-amber-100"
                  >
                    <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                      <Award className="w-5 h-5 text-amber-500" />
                    </div>
                    <div>
                      <span className="text-gray-900 font-medium block">
                        {award.title}
                      </span>
                      <span className="text-sm text-gray-500">{award.org}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: FOOTER CTA */}
      <section className="py-20 bg-gradient-to-br from-teal-900 via-teal to-teal-800 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        ></div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <Calendar className="w-16 h-16 mx-auto mb-6 text-amber-400" />
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Experience Compassionate Care
          </h3>
          <p className="text-xl text-teal-100 mb-10 max-w-2xl mx-auto">
            Dr. Gohokar is currently accepting new patients at Blessings Medical
            Clinic. Experience healthcare from a physician who truly listens and
            cares.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a
              href="tel:617-251-5065"
              className="inline-flex items-center justify-center bg-white text-teal font-bold py-4 px-10 rounded-full shadow-lg hover:bg-gray-100 transition-all hover:scale-105 w-full md:w-auto"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: 617-251-5065
            </a>
            <button
              onClick={() => router.push("/")}
              className="inline-flex items-center justify-center bg-teal-800 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:bg-teal-700 transition-all hover:scale-105 w-full md:w-auto"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Back to Home
            </button>
            <a
              href="https://www.myvillagemydream.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-transparent border-2 border-white/20 text-white font-bold py-4 px-10 rounded-full hover:bg-white/10 transition-all hover:scale-105 w-full md:w-auto"
            >
              <Globe className="w-5 h-5 mr-2" />
              Visit Foundation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DoctorProfile;
