import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Phone, MapPin, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-white pt-10 pb-10 scroll-mt-32">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* CTA Banner */}
        <div className="relative bg-[#006d77] rounded-[40px] px-8 py-20 md:p-24 text-center overflow-hidden shadow-md mb-20">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 dot-pattern"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-sans font-medium text-white tracking-tight leading-[1.1] mb-8">
                    Your wellness journey begins with one call
                </h2>
                <p className="text-teal-100 text-xl md:text-2xl mb-12 font-light leading-relaxed max-w-2xl mx-auto">
                    Call us today and experience expert care designed around you. Same-day appointments often available.
                </p>
                <div className="flex justify-center">
                    <a href="tel:617-251-5065" className="bg-white text-[#006d77] hover:bg-gray-100 font-bold text-lg py-4 px-10 rounded-full transition-all shadow-lg hover:shadow-sm hover:scale-105 flex items-center gap-3">
                        <Phone className="w-6 h-6" /> Call 617-251-5065
                    </a>
                </div>
            </div>
        </div>

        {/* Footer Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-gray-100 pt-16">
            
            {/* Brand / About */}
            <div className="flex flex-col gap-6">
                <span className="text-2xl font-bold tracking-tight text-gray-900 flex items-center gap-2">
                  <img src="/logo-emblem.png" alt="Blessings Medical Clinic logo" className="h-9 w-9 object-contain" /> Blessings Medical
                </span>
                <p className="text-gray-500 leading-relaxed max-w-md">
                    Compassionate clinical care tailored to your needs. We are dedicated to providing the highest quality health services to our community.
                </p>
            </div>

            {/* Explore links */}
            <nav aria-label="Footer" className="flex flex-col gap-6">
                <h4 className="text-lg font-bold text-gray-900">Explore</h4>
                <ul className="space-y-3 text-gray-600">
                    <li><a href="/" className="hover:text-teal transition-colors">Home</a></li>
                    <li><a href="/about" className="hover:text-teal transition-colors">About Clinic</a></li>
                    <li><a href="/about/nikhil" className="hover:text-teal transition-colors">About Dr. Nikhil Gohokar</a></li>
                    <li><a href="/services" className="hover:text-teal transition-colors">Services</a></li>
                    <li><a href="/insurance" className="hover:text-teal transition-colors">Insurance</a></li>
                    <li><a href="/contact" className="hover:text-teal transition-colors">Contact</a></li>
                </ul>
            </nav>

            {/* Contact Details */}
            <div className="flex flex-col gap-6 md:items-end md:text-right">
                <h4 className="text-lg font-bold text-gray-900">Contact Info</h4>
                <div className="space-y-4">
                    <div className="flex items-start gap-3 md:justify-end">
                        <MapPin className="w-5 h-5 text-teal mt-1 shrink-0" />
                        <span className="text-gray-600">{CONTACT_INFO.address}</span>
                    </div>
                    <a href="tel:617-251-5065" className="flex items-center gap-3 md:justify-end hover:text-teal transition-colors">
                        <Phone className="w-5 h-5 text-teal shrink-0" />
                        <span className="text-gray-900 font-semibold">{CONTACT_INFO.phone}</span>
                    </a>
                    <div className="flex items-center gap-3 md:justify-end">
                        <Mail className="w-5 h-5 text-teal shrink-0" />
                        <span className="text-gray-600">{CONTACT_INFO.email}</span>
                    </div>
                </div>
            </div>

        </div>

        {/* Copyright */}
        <div className="mt-16 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Blessings Medical Clinic. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Contact;
