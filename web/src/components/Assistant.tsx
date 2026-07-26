"use client";
import React, { useState, useEffect } from 'react';
import { Phone, X } from 'lucide-react';

const Assistant: React.FC = () => {
  const [showNudge, setShowNudge] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Trigger the "Soft Nudge" after 4 seconds (reduced from 7s for better visibility/testing)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasInteracted) {
        setShowNudge(true);
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, [hasInteracted]);

  const handleInteraction = () => {
    setHasInteracted(true);
    setShowNudge(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end pointer-events-none">
      
      {/* Soft Nudge Card (Pop-up) */}
      <div 
        className={`pointer-events-auto mb-4 mr-2 max-w-[280px] bg-white rounded-2xl shadow-md border border-teal/10 p-4 transition-all duration-700 transform origin-bottom-right relative ${
          showNudge ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-90 pointer-events-none'
        }`}
      >
        <div className="flex justify-between items-start mb-2">
           <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-xs font-bold text-teal uppercase tracking-wider">Accepting New Patients</span>
           </div>
           <button 
             onClick={(e) => {
               e.stopPropagation(); 
               handleInteraction();
             }}
             className="text-gray-500 hover:text-gray-600 transition-colors p-1"
             aria-label="Close"
           >
             <X className="w-4 h-4" />
           </button>
        </div>
        
        <p className="text-gray-800 text-sm font-medium leading-relaxed mb-3">
          Skip the wait! We have appointment slots available this week.
        </p>

        <a 
          href="tel:6172515065"
          onClick={handleInteraction}
          className="block w-full text-center bg-teal hover:bg-teal-dark text-white text-xs font-bold py-2.5 rounded-lg transition-colors shadow-sm"
        >
          Call to Schedule
        </a>
        
        {/* Triangle Pointer */}
        <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white transform rotate-45 border-r border-b border-teal/10 shadow-sm"></div>
      </div>

      {/* Main Floating Action Button */}
      <div 
        className="pointer-events-auto relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Radiating Ripple Animation */}
        <span className="absolute -inset-2 rounded-full bg-teal opacity-20 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></span>
        <span className="absolute -inset-4 rounded-full bg-teal opacity-10 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] delay-150"></span>

        <a
          href="tel:6172515065"
          onClick={handleInteraction}
          className="relative flex items-center justify-center bg-teal hover:bg-teal-dark text-white rounded-full w-16 h-16 shadow-md transition-all duration-300 hover:scale-110 active:scale-95 group z-10"
          aria-label="Call to book appointment"
        >
          <Phone className={`w-7 h-7 transition-transform duration-300 ${isHovered ? 'rotate-12' : ''}`} fill="currentColor" />
          
          {/* Badge */}
          <span className="absolute -top-1 -right-1 flex h-5 w-5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-5 w-5 bg-red-500 border-2 border-white"></span>
          </span>
        </a>

        {/* Hover Label */}
        <div className="absolute right-full top-1/2 -translate-y-1/2 mr-6 bg-gray-900 text-white text-sm font-bold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
          Call Now
          <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-gray-900 transform rotate-45"></div>
        </div>
      </div>

    </div>
  );
};

export default Assistant;
