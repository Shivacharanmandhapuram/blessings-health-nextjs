"use client";
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Brain, Heart, Users, ChevronLeft, ChevronRight } from 'lucide-react';

const About: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Clinic-focused imagery: Consultations, warm interactions, professional environment
  const backgroundImages = [
    {
      src: "/about1.webp", 
      alt: "Clinic imagery 1"
    },
    {
      src: "/about2.webp", 
      alt: "Clinic imagery 2"
    },
    {
      src: "/about3.webp",
      alt: "Clinic imagery 3"
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
  }, [backgroundImages.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? backgroundImages.length - 1 : prev - 1));
  }, [backgroundImages.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <>
      <section id="about" className="relative w-full h-[600px] sm:h-[650px] md:h-[600px] overflow-hidden bg-slate-900">

        {/* 1. Background Image Carousel - Content stays fixed, only images move */}
        {backgroundImages.map((img, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            aria-hidden={index !== currentSlide}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="100vw"
              className={`object-cover transform transition-transform duration-[10000ms] ease-linear ${
                 index === currentSlide ? 'scale-110' : 'scale-100'
              }`}
            />
          </div>
        ))}

        {/* 2. Increased Transparency Gradient Overlay */}
        {/* Adjusted from 95/75/30 to 80/40/10 for better image visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/45 to-slate-900/10 mix-blend-multiply"></div>

        {/* Light subtle dark tint for accessibility, reduced from 20 to 10 */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* 3. Navigation Buttons */}
        <div className="absolute right-4 sm:right-8 bottom-8 sm:bottom-12 z-20 flex gap-2 sm:gap-4 pointer-events-auto">
          <button 
            onClick={prevSlide}
            className="p-2 sm:p-4 rounded-full border border-white/30 text-white hover:bg-white hover:text-slate-900 transition-all backdrop-blur-md shadow-lg group"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 transform group-hover:-translate-x-0.5 transition-transform" />
          </button>
          <button 
            onClick={nextSlide}
            className="p-2 sm:p-4 rounded-full border border-white/30 text-white hover:bg-white hover:text-slate-900 transition-all backdrop-blur-md shadow-lg group"
            aria-label="Next image"
          >
            <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 transform group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* 4. Fixed Content Overlay */}
        <div className="relative z-10 h-full max-w-[1200px] mx-auto px-6 flex items-center justify-center md:justify-start">
          <div className="max-w-2xl text-center md:text-left pt-10 md:pt-0 pointer-events-none">

            {/* Label */}
            <div className="mb-6 animate-fade-in">
               <span className="inline-block py-1.5 px-4 rounded-full border border-teal/30 bg-teal/20 backdrop-blur-md text-white text-xs font-bold tracking-[0.2em] uppercase shadow-sm">
                 Core Philosophy
               </span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-sans font-bold text-white mb-6 leading-[1.1] tracking-tight drop-shadow-2xl">
              Healing the individual to <span className="text-teal-light italic font-serif">transform society.</span>
            </h2>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base md:text-xl text-gray-100 mb-8 md:mb-12 font-light leading-relaxed max-w-xl drop-shadow-lg mx-auto md:mx-0">
              We believe healthcare begins with the individual. 
              By nurturing a healthy mind and a healthy body, 
              we create stronger families, healthier communities, and lasting societal change.
            </p>

            {/* Philosophy Pillars */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-12 text-white/95 justify-center md:justify-start">
               <div className="flex items-center gap-3 group">
                  <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm border border-white/10">
                      <Brain className="w-5 h-5 text-teal-light" />
                  </div>
                  <span className="font-semibold tracking-wide text-lg sm:text-base drop-shadow-md">Healthy Mind</span>
               </div>

               <div className="hidden sm:block w-px h-8 bg-white/20"></div>

               <div className="flex items-center gap-3 group">
                  <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm border border-white/10">
                      <Heart className="w-5 h-5 text-teal-light" />
                  </div>
                  <span className="font-semibold tracking-wide text-lg sm:text-base drop-shadow-md">Healthy Body</span>
               </div>

               <div className="hidden sm:block w-px h-8 bg-white/20"></div>

               <div className="flex items-center gap-3 group">
                  <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm border border-white/10">
                      <Users className="w-5 h-5 text-teal-light" />
                  </div>
                  <span className="font-semibold tracking-wide text-lg sm:text-base drop-shadow-md">Healthy Community</span>
               </div>
            </div>

            {/* One-line reinforcement */}
            <p className="text-sm md:text-base text-gray-300 font-medium italic border-l-2 border-teal pl-4 ml-4 md:ml-0 inline-block drop-shadow-md">
              True care doesn’t stop at treatment. It extends into everyday life.
            </p>

          </div>
        </div>

      </section>

      {/* Stats Section Integrated Below Philosophy */}
      <div className="bg-white py-16 border-b border-gray-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6 text-center">

              <div className="flex flex-col items-center justify-center">
                  <span className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 tracking-tight">13+</span>
                  <span className="text-xs font-bold text-gray-500 tracking-[0.15em] uppercase">Years Experience</span>
              </div>

              <div className="flex flex-col items-center justify-center">
                  <span className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 tracking-tight">150+</span>
                  <span className="text-xs font-bold text-gray-500 tracking-[0.15em] uppercase">5-Star Reviews</span>
              </div>

              <div className="flex flex-col items-center justify-center">
                  <span className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 tracking-tight">Global</span>
                  <span className="text-xs font-bold text-gray-500 tracking-[0.15em] uppercase">Community Impact</span>
              </div>

              <div className="flex flex-col items-center justify-center">
                  <span className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 tracking-tight">100%</span>
                  <span className="text-xs font-bold text-gray-500 tracking-[0.15em] uppercase">Patient Focus</span>
              </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default About;