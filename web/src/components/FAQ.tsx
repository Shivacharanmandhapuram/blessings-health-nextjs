"use client";
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    question: "How soon can I make an appointment with Dr. Nikhil Gohokar?",
    answer: "Appointments are usually available for the next week, with occasional earlier openings. Please call 617-251-5065 to check current availability and timings."
  },
  {
    question: "Is Dr. Nikhil Gohokar accepting new patients?",
    answer: "Yes! Dr. Gohokar is actively accepting new patients. Call our office at 617-251-5065 to schedule your first visit. New patients who call directly often get priority scheduling."
  },
  {
    question: "Does Dr. Nikhil Gohokar accept my insurance?",
    answer: "We accept most major insurance providers including Blue Cross Blue Shield, UnitedHealthcare, Medicare, MassHealth. Call us at 617-251-5065 and our staff will verify your insurance coverage before your appointment."
  },
  {
    question: "How do I make an appointment?",
    answer: "The fastest way to schedule is to call our office directly at 617-251-5065. Our friendly staff can answer your questions, verify your insurance, and find a time that works for you."
  },
  {
    question: "What practice does Dr. Nikhil Gohokar work with?",
    answer: "Dr. Nikhil Gohokar is the owner and primary provider at Blessings Medical Clinic in Fall River, MA."
  },
  {
    question: "Where is Dr. Nikhil Gohokar's office located?",
    answer: "Our clinic is located at 415 Elsbree St, Suite 201, Fall River, MA. Call 617-251-5065 for directions or any questions about your visit."
  },
  {
    question: "Which board certifications does Dr. Nikhil Gohokar have?",
    answer: "Dr. Nikhil Gohokar is certified by the American Board of Family Medicine and is NRCME certified for DOT/CDL physicals."
  },
  {
    question: "What are common reasons for patients to see Dr. Nikhil Gohokar?",
    answer: "Dr. Gohokar provides comprehensive primary care including annual physicals, illness visits, chronic disease management, DOT/CDL physicals, and specialized pain management injections. Call 617-251-5065 to discuss your specific healthcare needs."
  },
  {
    question: "What languages does Dr. Nikhil Gohokar speak?",
    answer: "Dr. Nikhil Gohokar is fluent in English, Hindi, Marathi, and Urdu, allowing him to serve a diverse patient community."
  },
  {
    question: "What is the best way to reach the clinic?",
    answer: "Call us directly at 617-251-5065 for the fastest response. Our team can help with scheduling, insurance questions, prescription refills, and any other inquiries. Direct callers often receive same-day callbacks and priority service."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <section className="py-24 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-[900px] mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-gray-100 text-sm font-medium text-gray-600 bg-gray-50 mb-6 shadow-sm">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-medium text-gray-900 tracking-tight leading-[1.15] mb-6">
            Answers to your questions
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl font-normal">
            Get quick, clear information about our services, appointments, support, and more
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className="border-b border-gray-100 last:border-none"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
              >
                <span className={`text-xl font-medium transition-colors duration-200 ${openIndex === index ? 'text-teal' : 'text-gray-900 group-hover:text-teal'}`}>
                  {item.question}
                </span>
                <span className={`flex-shrink-0 ml-6 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-teal text-white rotate-180' : 'bg-teal/10 text-teal'}`}>
                  <ChevronDown className="w-5 h-5" />
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-500 leading-relaxed text-lg pr-12">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
