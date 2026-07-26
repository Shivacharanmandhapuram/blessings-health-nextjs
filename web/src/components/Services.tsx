import React from 'react';
import { Heart, Activity, Truck, Plus, ArrowRight, Phone } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-cream scroll-mt-32">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-gray-100 text-sm font-medium text-gray-600 bg-gray-50 mb-6 shadow-sm">
            Services
          </span>
          <h2 className="text-4xl md:text-5xl font-medium text-gray-900 tracking-tight leading-[1.15] max-w-2xl">
            Comprehensive medical care tailored to your needs
          </h2>
        </div>

        {/* Main Grid Layout - Balanced 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            
            {/* Card 1: Primary Care */}
            <div className="group bg-white p-8 rounded-2xl border border-cream-dark hover:border-teal/40 transition-colors duration-300 flex flex-col items-start h-full cursor-pointer relative overflow-hidden">
               {/* Top Gradient Accent on Hover */}
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal to-teal-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
               
              <div className="w-12 h-12 bg-teal/5 rounded-[14px] flex items-center justify-center mb-6 text-teal group-hover:bg-teal group-hover:text-white transition-colors duration-300 shrink-0">
                <Heart className="w-6 h-6 fill-current" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-teal transition-colors">Primary Care</h3>
              <p className="text-gray-500 leading-relaxed mb-8">
                Comprehensive health management, annual physicals, and preventative care for long-term wellness.
              </p>
              
              <div className="mt-auto flex items-center text-teal font-semibold text-sm opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>

            {/* Card 2: Pain Management */}
            <div className="group bg-white p-8 rounded-2xl border border-cream-dark hover:border-teal/40 transition-colors duration-300 flex flex-col items-start h-full cursor-pointer relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal to-teal-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

              <div className="w-12 h-12 bg-teal/5 rounded-[14px] flex items-center justify-center mb-6 text-teal group-hover:bg-teal group-hover:text-white transition-colors duration-300 shrink-0">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-teal transition-colors">Pain Management</h3>
              <p className="text-gray-500 leading-relaxed mb-8">
                Specialized joint injections for knee, shoulder, back, hip bursitis, and neck pain relief.
              </p>
              
              <div className="mt-auto flex items-center text-teal font-semibold text-sm opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>

            {/* Card 3: DOT Physicals */}
            <div className="group bg-white p-8 rounded-2xl border border-cream-dark hover:border-teal/40 transition-colors duration-300 flex flex-col items-start h-full cursor-pointer relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal to-teal-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

              <div className="w-12 h-12 bg-teal/5 rounded-[14px] flex items-center justify-center mb-6 text-teal group-hover:bg-teal group-hover:text-white transition-colors duration-300 shrink-0">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-teal transition-colors">DOT / CDL Physicals</h3>
              <p className="text-gray-500 leading-relaxed mb-4">
                Certified medical examinations for commercial drivers to ensure safety and compliance.
              </p>
              <a href="https://www.fmcsa.dot.gov/regulations/medical" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-teal hover:underline mb-8">What a DOT/CDL exam involves (FMCSA)</a>
              
              <div className="mt-auto flex items-center text-teal font-semibold text-sm opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>

            {/* Card 4: Urgent Care (Enhanced) */}
            <div className="group bg-sage-light/25 p-8 rounded-2xl border border-teal/20 hover:border-teal/40 transition-colors duration-300 flex flex-col items-start h-full cursor-pointer relative overflow-hidden">
               {/* Badge */}
               <div className="absolute top-8 right-8 bg-teal/10 text-teal text-[11px] font-bold px-3 py-1 rounded-full tracking-wide">
                 WALK-INS WELCOME
               </div>

               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal to-teal-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

              <div className="w-12 h-12 bg-teal/10 rounded-[14px] flex items-center justify-center mb-6 text-teal group-hover:bg-teal group-hover:text-white transition-colors duration-300 shrink-0">
                <Plus className="w-6 h-6" strokeWidth={3} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-teal transition-colors">Urgent Care & Addiction</h3>
              <p className="text-gray-500 leading-relaxed mb-8">
                Immediate care for illnesses, office-based procedures, and DATA-waived addiction treatment.
              </p>
              
              <div className="mt-auto flex items-center text-teal font-semibold text-sm opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>

        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col items-center text-center">
            <a href="tel:6172515065" className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-teal text-gray-700 hover:text-teal font-bold py-4 px-8 rounded-full transition-all shadow-sm hover:shadow-md group">
                <span>Not sure which service you need? Give us a call</span>
                <Phone className="w-4 h-4 text-teal group-hover:rotate-12 transition-transform" />
            </a>
            <p className="mt-4 text-sm text-gray-500">We're here to help guide your care journey.</p>
        </div>
        
      </div>
    </section>
  );
};

export default Services;
