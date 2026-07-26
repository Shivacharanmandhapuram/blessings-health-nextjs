"use client";
import React from 'react';
import Image from 'next/image';
import { Star, ArrowUpRight, Headset, ShieldCheck, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-cream pt-8 pb-20 overflow-visible scroll-mt-32">
        {/* Main Grid Container based on provided CSS */}
        <div className="mx-auto w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-[34px] px-[25px] items-center">
            
            {/* Left Column */}
            <div className="flex flex-col justify-center order-2 lg:order-1">
                
                {/* Review Badge */}
                <div className="mb-8 inline-flex items-center gap-3 bg-white border border-cream-dark rounded-lg px-4 py-2.5 w-max shadow-sm transform transition-transform hover:scale-105 cursor-default">
                    <div className="flex text-amber-400 gap-0.5">
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                    </div>
                    <span className="text-sm font-semibold text-gray-700">150+ 5-Star Patient Reviews</span>
                </div>

                {/* Heading */}
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-[4.5rem] font-sans font-semibold text-gray-900 tracking-tight leading-[1.1] mb-6">
                    Your health is <span className="block text-teal">our first priority</span>
                </h1>

                {/* Subheading */}
                <p className="text-base sm:text-lg text-gray-600 mb-4 max-w-xl font-normal leading-relaxed">
                    Comprehensive primary care, DOT/CDL physicals, and specialized pain management, delivered with prevention-focused, compassionate care for patients of all ages.
                </p>
                
                {/* Location Signal */}
                <p className="text-base text-teal font-medium mb-10">
                    📍 Trusted primary care for Fall River and nearby Massachusetts communities
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap items-center gap-4 mb-16">
                    <a href="tel:617-251-5065" className="bg-teal hover:bg-teal-dark text-white rounded-full px-8 py-4 font-bold transition-all shadow-lg hover:shadow-sm flex items-center gap-2">
                        <Phone className="w-5 h-5" /> Call Now to Schedule a Visit
                    </a>
                 
                </div>

                {/* Stats / Features */}
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
                    <div className="flex items-start gap-4">
                         <div className="p-3 bg-white rounded-2xl shadow-sm text-teal">
                            <Headset className="w-8 h-8" strokeWidth={1.5} />
                         </div>
                         <div>
                             <p className="font-bold text-xl text-gray-900">Support</p>
                             <p className="text-sm text-gray-600 font-medium">Patient-centered care</p>
                         </div>
                    </div>
                    <div className="flex items-start gap-4">
                         <div className="p-3 bg-white rounded-2xl shadow-sm text-teal">
                            <ShieldCheck className="w-8 h-8" strokeWidth={1.5} />
                         </div>
                         <div>
                             <p className="font-bold text-xl text-gray-900">Rating</p>
                             <p className="text-sm text-gray-600 font-medium">Rated 5 stars by users</p>
                         </div>
                    </div>
                </div>
            </div>

            {/* Right Column - Image Card */}
            <div className="relative h-[350px] sm:h-[450px] md:h-[600px] w-full order-1 lg:order-2 mb-10 lg:mb-0">
                <div className="absolute inset-0 rounded-[40px] overflow-hidden shadow-md bg-teal-light">
                     <Image
                        src="/dr.webp"
                        alt="Dr. Nikhil Gohokar"
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 600px"
                        className="object-cover object-[center_25%]"
                     />
                     
                     {/* Gradient Overlay for text readability */}
                     <div className="absolute inset-0 bg-gradient-to-t from-teal-dark/80 via-transparent to-transparent opacity-90"></div>

                     {/* Doctor Name Card Overlay */}
                     <div className="absolute bottom-10 left-10 text-white z-10">
                        <p className="text-lg font-medium opacity-90 mb-1 text-teal-100">Board-Certified Family Physician</p>
                        <p className="text-4xl font-semibold tracking-wide">Dr. Nikhil Gohokar</p>
                     </div>

                     {/* Floating Action Button */}
                     <div className="absolute bottom-8 right-8 z-10">
                        <a href="/about" aria-label="Learn more about the clinic" className="bg-teal hover:bg-white hover:text-teal text-white rounded-full w-14 h-14 flex items-center justify-center transition-all duration-300 shadow-sm group border-2 border-transparent hover:border-teal">
                            <ArrowUpRight className="w-6 h-6 transform group-hover:rotate-45 transition-transform" />
                        </a>
                     </div>
                </div>
                
                {/* Decorative background element behind the card */}
                <div className="absolute -z-10 top-10 -right-10 w-full h-full bg-sage/20 rounded-[40px] hidden lg:block"></div>
            </div>

        </div>
    </section>
  );
};

export default Hero;
