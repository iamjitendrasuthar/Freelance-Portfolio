"use client";

import { useState } from "react";
import FadeIn from "@/utils/Common";
import { Sparkles, Terminal } from "lucide-react";
import FAQItem from "./FAQItem";

const FAQS = [
  {
    q: "What is your primary tech stack for web development?",
    a: "I specialize in the MERN stack (MongoDB, Express, React, Node.js) and Next.js for high-performance frontend applications. For styling, I use Tailwind CSS and for animations, I rely on Framer Motion.",
  },
  {
    q: "Do you handle both frontend and backend development?",
    a: "Yes, I am a Full-Stack Developer. I can build intuitive user interfaces, develop robust REST or GraphQL APIs, and design scalable database architectures using SQL or NoSQL.",
  },
  {
    q: "Can you help with low-level system programming or automation?",
    a: "Absolutely. With a strong foundation in C and C++, I can help with performance-critical tasks, custom browser extensions (like my IRCTC automation project), and script-based task automation.",
  },
  {
    q: "How long does a typical project take to complete?",
    a: "Timeline depends on the complexity. A high-converting landing page usually takes 1-2 weeks, while a full-scale web application or SaaS MVP can take 4-8 weeks from design to deployment.",
  },
  {
    q: "Will my website be SEO-friendly and mobile-responsive?",
    a: "Every project I build is mobile-first and SEO-optimized. Using Next.js, I ensure your site has fast loading speeds and proper meta-architecture to help it rank better on Google.",
  },
  {
    q: "Do you provide support after the project is launched?",
    a: "Yes, I offer post-launch maintenance and support packages. This includes bug fixes, security updates, and performance monitoring to ensure your product runs smoothly 24/7.",
  },
];

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section
      id="faq"
      className="py-20 md:py-32 bg-white relative overflow-hidden"
    >
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <FadeIn>
            <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
              <Terminal size={16} />
              <span className="uppercase tracking-widest">Technical FAQ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Common questions,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">
                technical answers.
              </span>
            </h2>
            <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Find quick answers about my development process, tech stack, and
              how I can help bring your digital vision to life.
            </p>
          </FadeIn>
        </div>

        {/* FAQ Accordion List */}
        <FadeIn delay={0.2}>
          <div className="bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] p-2 sm:p-4 relative">
            {FAQS.map((faq, idx) => (
              <FAQItem
                key={idx}
                faq={faq}
                isOpen={openIdx === idx}
                onClick={() => setOpenIdx(idx === openIdx ? -1 : idx)}
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default FAQSection;
