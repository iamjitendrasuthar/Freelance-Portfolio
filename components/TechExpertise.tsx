"use client";

import FadeIn from "@/utils/Common";
import {
  Code2,
  Layout,
  Smartphone,
  Zap,
  ShieldCheck,
  Search,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const SERVICES = [
  {
    icon: <Layout className="w-6 h-6" />,
    title: "Custom Web Development",
    desc: "Building unique, high-performance websites from scratch using Next.js. No generic templates—just clean code tailored to your brand.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Performance Optimization",
    desc: "Speed is money. I optimize your site to load instantly, improving your Core Web Vitals and keeping your visitors engaged.",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Responsive Design",
    desc: "Your website will look stunning and function perfectly on every device—from the smallest smartphone to the largest desktop.",
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "SaaS & Web Apps",
    desc: "Transforming complex business ideas into scalable web applications with robust backends and intuitive user dashboards.",
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "SEO-Ready Architecture",
    desc: "I build websites with clean semantic HTML and meta-tag optimization, making it easier for Google to rank your business higher.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Maintenance & Support",
    desc: "I don't just build and leave. I provide ongoing technical support, security updates, and performance monitoring for your peace of mind.",
  },
];

const TechExpertise = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-[#F9FAFB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
          <FadeIn>
            <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
              <Code2 size={16} />
              <span className="uppercase tracking-widest">Tech Expertise</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Modern solutions for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">
                digital growth.
              </span>
            </h2>
            <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto">
              I combine design and engineering to build digital products that
              are not only beautiful but also solve real-world business
              problems.
            </p>
          </FadeIn>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.15)] hover:-translate-y-1 hover:border-emerald-100 transition-all duration-300 h-full flex flex-col group cursor-pointer relative overflow-hidden">
                {/* Top Border Highlight on Hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon Container */}
                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-500 mb-8 group-hover:bg-emerald-500/10 group-hover:text-emerald-500 group-hover:scale-110 transition-all duration-300">
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed flex-grow text-sm sm:text-base">
                  {service.desc}
                </p>

                {/* Bottom Interactive Arrow */}
                <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-emerald-500 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  <span>Learn more</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechExpertise;
