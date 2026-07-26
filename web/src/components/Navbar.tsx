"use client";
import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm text-gray-900 font-sans border-b border-gray-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo Area */}
          <div className="flex items-center space-x-1 sm:space-x-2">
            <span className="text-lg sm:text-2xl font-bold tracking-tight text-gray-900 flex items-center gap-1 sm:gap-2">
              <img src="/logo-emblem.png" alt="Blessings Medical Clinic logo" className="h-10 w-10 sm:h-12 sm:w-12 object-contain" /> <span className="hidden sm:inline">Blessings Medical</span><span className="sm:hidden">Blessings</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    if (item.href.startsWith('#')) {
                      e.preventDefault();
                      const target = document.querySelector(item.href);
                      if (target) {
                        const navHeight = 96;
                        const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;
                        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                      }
                    }
                  }}
                  className="text-gray-600 hover:text-teal font-medium text-base transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Phone Number & Call to Action */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:617-251-5065" className="flex items-center gap-2 text-gray-700 hover:text-teal font-semibold transition-colors">
              <Phone className="w-5 h-5 text-teal" />
              <span>617-251-5065</span>
            </a>
            <a href="tel:617-251-5065" className="bg-teal hover:bg-teal-dark text-white font-semibold py-3 px-6 rounded-full transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2">
              Call Now <span className="text-lg">→</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-teal hover:bg-teal/10 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-8 w-8" /> : <Menu className="block h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  setIsOpen(false);
                  if (item.href.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(item.href);
                    if (target) {
                      const navHeight = 96;
                      const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;
                      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                    }
                  }
                }}
                className="text-gray-800 block px-3 py-3 rounded-md text-base font-medium hover:bg-cream"
              >
                {item.label}
              </a>
            ))}
            <a href="tel:617-251-5065" className="flex items-center gap-2 px-3 py-3 text-gray-800 font-semibold">
              <Phone className="w-5 h-5 text-teal" />
              617-251-5065
            </a>
            <a href="tel:617-251-5065" className="w-full text-center bg-teal text-white font-bold block px-3 py-3 rounded-full text-base mt-6 shadow-md">
              Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
