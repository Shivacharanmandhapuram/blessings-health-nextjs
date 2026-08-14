"use client";
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ArrowRight, MapPin, Award, CheckCircle2, Languages, Milestone } from 'lucide-react';

const MeetDoctor: React.FC = () => {
  const router = useRouter();

  return (
    <section className="bg-white py-24 md:py-32 relative overflow-hidden" id="meet-doctor">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-cream/50 -skew-x-12 translate-x-1/2 -z-0 hidden lg:block"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-teal/5 rounded-full blur-3xl -z-0"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left Column: Visual Composition (5/12 width) */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative z-10">
              {/* Main Image Container */}
              <div className="relative rounded-[48px] overflow-hidden shadow-sm bg-teal-light group">
                <Image
                  src="/dr.webp"
                  alt="Dr. Nikhil Gohokar"
                  width={800}
                  height={1000}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="w-full h-full object-cover aspect-[4/5] transform transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-teal-dark/40 via-transparent to-transparent opacity-60"></div>

                {/* Float-in Experience Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-sm border border-white/20 flex items-center gap-4 animate-fade-in">
                  <div className="w-12 h-12 bg-teal rounded-xl flex items-center justify-center text-white shrink-0">
                    <Milestone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Clinical Experience</p>
                    <p className="text-sm font-bold text-gray-900 leading-tight">14+ Years of Clinical Excellence</p>
                  </div>
                </div>
              </div>

              {/* Decorative Frame */}
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-teal/10 rounded-[48px] -z-10 translate-x-3 translate-y-3"></div>

              {/* Abstract Shape */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-sage/20 rounded-full blur-2xl -z-10"></div>
            </div>

            {/* Certification Badge Overlay */}
            <div className="absolute -top-10 -right-4 lg:-right-10 bg-white p-5 rounded-3xl shadow-md border border-gray-50 flex flex-col items-center gap-1 z-20 hidden sm:flex">
              <div className="w-14 h-14 bg-teal/5 rounded-full flex items-center justify-center text-teal">
                <Award className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">Certified</span>
              <span className="text-xs font-bold text-gray-900">ABFM Board</span>
            </div>
          </div>

          {/* Right Column: Narrative & Details (7/12 width) */}
          <div className="lg:col-span-7 flex flex-col items-start order-1 lg:order-2">

            {/* Lead Header */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal/5 text-teal text-sm font-bold mb-6 tracking-wide border border-teal/10">
                <CheckCircle2 className="w-4 h-4" />
                <span>Board-Certified Family Physician</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-sans font-bold text-gray-900 tracking-tight leading-[1.1] mb-4">
                Broad clinical experience. <span className="text-teal">Practical whole-person care.</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed max-w-2xl">
                Dr. Nikhil Gohokar has more than 14 years of experience caring for patients in primary care, urgent care, and hospital settings.
              </p>
            </div>

            {/* Quick Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mb-10">
              <div className="flex items-start gap-4 p-5 rounded-3xl bg-cream/30 border border-cream hover:bg-white hover:shadow-lg hover:border-teal/20 transition-all duration-300">
                <div className="p-3 bg-white rounded-2xl text-teal shadow-sm">
                  <Languages className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm mb-1">Multilingual Care</p>
                  <p className="text-xs text-gray-500 leading-tight">Fluent in English, Hindi, Marathi, and Urdu.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-3xl bg-cream/30 border border-cream hover:bg-white hover:shadow-lg hover:border-teal/20 transition-all duration-300">
                <div className="p-3 bg-white rounded-2xl text-teal shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm mb-1">Local Roots</p>
                  <p className="text-xs text-gray-500 leading-tight">Serving Fall River & surrounding MA communities.</p>
                </div>
              </div>
            </div>

            {/* Detailed Bio Snippet */}
            <div className="space-y-6 mb-12">
              <p className="text-lg text-gray-600 leading-relaxed border-l-4 border-teal/20 pl-6 italic">
                "My goal is not only to help patients return to their previous level of health. Whenever possible, I want to help them continue moving forward so they can build a stronger foundation for the future."
              </p>
              <p className="text-gray-500 leading-relaxed max-w-xl">
                Throughout his career, he has worked extensively with diverse and medically underserved populations. He believes that patients facing financial, cultural, linguistic, geographic, or social barriers should still have access to thoughtful, comprehensive, and high-quality healthcare.
              </p>
              <p className="text-sm text-gray-500">
                Board certification:{" "}
                <a href="https://www.theabfm.org" target="_blank" rel="noopener noreferrer" className="font-medium text-teal hover:underline">American Board of Family Medicine</a>.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
              <button 
                onClick={() => router.push('/about/nikhil')}
                className="w-full sm:w-auto bg-teal hover:bg-teal-dark text-white rounded-full px-10 py-5 font-bold text-lg transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-3 group"
              >
                Discover Dr Gohokar’s Impact
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a 
                href="tel:6172515065"
                className="text-gray-900 font-bold hover:text-teal transition-colors flex items-center gap-2 group"
              >
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-teal/30 group-hover:bg-teal/5 transition-all">
                  <ArrowRight className="w-4 h-4 -rotate-45" />
                </div>
                Book a Consultation
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MeetDoctor;