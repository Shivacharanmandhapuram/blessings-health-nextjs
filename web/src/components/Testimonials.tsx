import React from "react";
import { Star, Quote, Phone, CheckCircle } from "lucide-react";

// Define types for our grid items
type ReviewSource = "google" | "verified";

type ReviewItem = {
  text: string;
  author: string;
  date: string;
  initial: string;
  source: ReviewSource;
};

const allReviews: ReviewItem[] = [
  {
    text: "Awesome people, the staff and dr are always polite and respectful. I was skeptical about finding a good dr and I'm happy that I found this clinic and happy to be seen by them and definitely would recommend them.",
    author: "Marcos Tavares",
    date: "1 month ago",
    initial: "M",
    source: "google",
  },
  {
    text: "Doctor was extremely patient with me. I was so comfortable with him. He understood my reason for my appointment and I am so happy I picked him as my PCP since moving back to Massachusetts",
    author: "Ana F.",
    date: "Nov 18, 2024",
    initial: "A",
    source: "verified",
  },
  {
    text: "He was very responsive and action oriented, immediately gave me a referral for a G.I doctor because of my GERD and hiatal hernia, and ordered blood work, listened to my concerns... Highly recommend him!!!!",
    author: "Tatiana M.",
    date: "Nov 7, 2024",
    initial: "T",
    source: "google",
  },
  {
    text: "Excellent I was seeing right away the office contacted me ahead of time so they could be prepared for my appointment and the doctor sent prescriptions in immediately.",
    author: "Rachel D.",
    date: "Oct 27, 2024",
    initial: "R",
    source: "verified",
  },
  {
    text: "Dr. Gohokar was very friendly and informational, had a great visit. Very caring understanding and clearly conveyed his suggestions.",
    author: "Michael B.",
    date: "Nov 15, 2024",
    initial: "M",
    source: "google",
  },
  {
    text: "Very professional and clean clinic. The staff is welcoming and the doctor really takes the time to listen to your history. Highly recommended for family care.",
    author: "S. K.",
    date: "Dec 5, 2024",
    initial: "S",
    source: "verified",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="bg-cream py-24 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 px-4 py-1.5 rounded-full border border-gray-200 text-sm font-medium text-gray-600 bg-white shadow-sm mb-6">
            <div className="flex items-center gap-1.5 border-r border-gray-200 pr-3">
              <img
                src="/google-g.png"
                alt="Google"
                className="w-4 h-4"
              />
              <span>Google</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-teal" />
              <span>Verified Patients</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium text-gray-900 tracking-tight leading-[1.15] max-w-3xl">
            Trusted by our community
          </h2>
          <p className="mt-6 text-lg text-gray-500 max-w-2xl font-normal">
            Read authentic feedback from our patients across Google and other
            verified healthcare platforms.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {allReviews.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-[24px] shadow-sm border border-gray-50 flex flex-col h-full transition-transform duration-300"
            >
              {/* Stars & Source Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex gap-0.5 text-[#FF9E0B]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                {item.source === "google" ? (
                  <img
                    src="/google-g.png"
                    alt="Google"
                    className="w-4 h-4 opacity-50"
                  />
                ) : (
                  <CheckCircle className="w-4 h-4 text-teal/40" />
                )}
              </div>

              {/* Text */}
              <div className="mb-8 flex-grow relative">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-teal/10 -z-10 transform -scale-x-100" />
                <p className="text-gray-600 leading-relaxed font-medium">
                  "{item.text}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center mt-auto pt-6 border-t border-gray-50">
                <div className="w-10 h-10 rounded-full bg-teal/10 text-teal font-bold flex items-center justify-center text-lg shrink-0 mr-3">
                  {item.initial}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">
                    {item.author}
                  </h4>
                  <p className="text-xs text-gray-500 font-medium">
                    {item.source === "google"
                      ? "Google Review"
                      : "Verified Patient"}{" "}
                    • {item.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Booking CTA */}
        <div className="flex justify-center">
          <a
            href="tel:6172515065"
            className="bg-teal hover:bg-teal-dark text-white font-bold py-4 px-10 rounded-full transition-all shadow-md hover:shadow-lg flex items-center gap-2 group transform hover:scale-105"
          >
            Join our satisfied patients
            <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
