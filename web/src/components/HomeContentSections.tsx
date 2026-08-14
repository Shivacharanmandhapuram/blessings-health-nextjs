"use client";
import React from "react";
import { Check } from "lucide-react";

const bodyMindTopics = [
  "Nutrition",
  "Physical activity",
  "Sleep",
  "Stress",
  "Breathing and relaxation practices",
  "Tobacco and alcohol use",
  "Caffeine intake",
  "Medication adherence",
  "Daily routines that may improve or aggravate symptoms",
];

const HomeContentSections: React.FC = () => {
  return (
    <>
      {/* SECTION 1: Medical Treatment and Lifestyle */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-gray-900 tracking-tight mb-8">
            Medical Treatment and Lifestyle Improvement Belong Together
          </h2>
          <div className="max-w-3xl">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Dr. Gohokar believes that medications are often necessary and highly
              beneficial. However, patients frequently receive the greatest overall
              benefit when appropriate medical treatment is combined with realistic
              lifestyle improvement.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Medication may help control a disease, relieve symptoms, or reduce an
              immediate health risk. Healthy daily practices can help patients maintain
              those improvements and reduce future complications.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Research has shown that comprehensive lifestyle interventions can
              significantly reduce the risk of conditions such as type 2 diabetes and
              cardiovascular disease in selected populations. Lifestyle changes, however,
              do not replace medically necessary treatment.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Dr. Gohokar&apos;s approach is to combine both appropriately, based on each
              patient&apos;s medical needs and individual circumstances.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: Body and Mind */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-gray-900 tracking-tight mb-8">
            Understanding the Connection Between Body and Mind
          </h2>
          <div className="max-w-3xl">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              As a regular practitioner of yoga and meditation, Dr. Gohokar has a personal
              appreciation for the close relationship between physical health, mental
              well-being, stress, sleep, breathing, and daily habits.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              This experience helps him look beyond a diagnosis or laboratory result and
              patiently explore the factors that may be affecting a patient&apos;s health.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              He takes time to discuss areas such as:
            </p>
            <ul className="space-y-3 mb-6">
              {bodyMindTopics.map((topic) => (
                <li key={topic} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-teal shrink-0 mt-1" />
                  <span className="text-lg text-gray-600 leading-relaxed">{topic}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              His recommendations are intended to be practical, affordable, and
              sustainable.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Rather than asking patients to change everything at once, he helps them
              identify small steps that can realistically fit into their daily lives.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Yoga, meditation, and breathing practices are not presented as replacements
              for medical treatment. They are among several tools that may support stress
              management, emotional well-being, self-awareness, and healthier daily habits
              when appropriate for the individual patient.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: A Practical Example */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-gray-900 tracking-tight mb-8">
            A Practical Example
          </h2>
          <div className="max-w-3xl">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              A patient experiencing recurrent abdominal pain had received several
              medications and repeated hospital evaluations. However, an important possible
              contributor had not been fully addressed: the patient was drinking a large
              amount of coffee every day.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Reducing the excessive coffee intake became an important part of the
              treatment plan, together with appropriate medical care for the patient&apos;s
              gastrointestinal symptoms.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              The lesson was simple: treating symptoms is essential, but identifying and
              modifying the daily habits that repeatedly aggravate those symptoms can be
              equally important.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: Dr. Gohokar's Philosophy */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-gray-900 tracking-tight mb-8">
            Dr. Gohokar&apos;s Philosophy
          </h2>
          <div className="max-w-3xl">
            <blockquote className="text-xl md:text-2xl italic text-gray-700 border-l-4 border-teal pl-6 my-8">
              &ldquo;My goal is not only to help patients return to their previous level of
              health. Whenever possible, I want to help them continue moving forward so they
              can build a stronger foundation for the future.&rdquo;
            </blockquote>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">He also believes:</p>
            <blockquote className="text-xl md:text-2xl italic text-gray-700 border-l-4 border-teal pl-6 my-8">
              &ldquo;Underserved communities should not receive less care. Every patient
              deserves thoughtful, comprehensive, and high-quality healthcare.&rdquo;
            </blockquote>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              With graduate training in healthcare administration, broad clinical
              experience, and a longstanding practice of yoga and meditation, Dr. Gohokar
              brings a whole-person and systems-based perspective to family medicine.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              He considers not only which medication or treatment may help today, but also
              which practical changes may help the patient remain healthier tomorrow.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeContentSections;
