"use client";

import FadeIn from "@/utils/Common";
import { Sparkles, Star, Quote, Code2 } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Aman Sharma",
    role: "Startup Founder",
    text: "Jitendra rebuilt our entire platform using Next.js. The performance boost was immediate—our page load time dropped by 60%, and the UX is now incredibly smooth.",
    img: "https://i.pravatar.cc/150?u=11",
  },
  {
    name: "Rajesh Kumar",
    role: "Js Interiors",
    text: "Building our portfolio with him was the best decision. He understood our aesthetic vision and translated it into a fast, SEO-friendly website that clients love.",
    img: "https://i.pravatar.cc/150?u=22",
  },
  {
    name: "Sarah Miller",
    role: "Product Manager",
    text: "His expertise in Node.js and API development is top-notch. He delivered a scalable backend for our app that handles high traffic without any hiccups.",
    img: "https://i.pravatar.cc/150?u=33",
  },
  {
    name: "Vikram Singh",
    role: "E-commerce Owner",
    text: "The automation tool he built for our inventory saved us hours of manual work every day. A true problem solver who knows his way around complex logic.",
    img: "https://i.pravatar.cc/150?u=44",
  },
  {
    name: "David Chen",
    role: "Tech Lead",
    text: "It's rare to find a developer who is equally skilled in C++ and modern web frameworks. Jitendra is our go-to for performance-critical projects.",
    img: "https://i.pravatar.cc/150?u=55",
  },
  {
    name: "Priya Mehta",
    role: "SaaS Founder",
    text: "From MongoDB architecture to a stunning React frontend, he handled the full stack perfectly. The code quality is clean, documented, and very easy to scale.",
    img: "https://i.pravatar.cc/150?u=66",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-20 md:py-32 bg-[#F9FAFB] relative overflow-hidden"
    >
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-20">
          <FadeIn>
            <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
              <Code2 size={16} />
              <span className="uppercase tracking-widest">Success Stories</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              What my clients{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">
                actually say.
              </span>
            </h2>
            <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Real feedback from founders and business owners I've helped with
              modern web development and technical architecture.
            </p>
          </FadeIn>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <FadeIn key={idx} delay={idx * 0.1} className="h-full">
              <div className="bg-white p-6 sm:p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col h-full relative group hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.15)] hover:-translate-y-1 transition-all duration-300">
                {/* Decorative Quote Icon Background */}
                <Quote
                  className="absolute top-6 right-6 w-12 h-12 text-gray-50 opacity-80 group-hover:text-emerald-50 transition-colors duration-300 pointer-events-none"
                  strokeWidth={1}
                />

                {/* Star Ratings */}
                <div className="flex gap-1 mb-6 relative z-10">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-gray-600 text-base sm:text-lg mb-8 leading-relaxed flex-grow relative z-10 font-medium italic">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-50 relative z-10">
                  <div className="relative">
                    <img
                      src={testimonial.img}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                    />
                    {/* Verified indicator dot */}
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500 font-medium">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
