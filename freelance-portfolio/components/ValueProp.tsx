"use client";

import FadeIn from "@/utils/Common";
import { Sparkles, Code2 } from "lucide-react";

const ValueProp = () => {
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden flex items-center justify-center">
      {/* Top Border Divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      {/* Subtle Background Glow Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-3xl h-[300px] bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #000000 1px, transparent 1px), linear-gradient(to bottom, #000000 1px, transparent 1px)`,
          backgroundSize: "3rem 3rem",
          maskImage:
            "radial-gradient(circle at center, black 50%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 50%, transparent 90%)",
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Eyebrow Badge */}
        <FadeIn>
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-emerald-600 text-xs sm:text-sm font-semibold mb-8 sm:mb-10 shadow-sm">
            <Code2 size={16} className="text-emerald-500" />
            <span className="uppercase tracking-widest">
              The Developer Standard
            </span>
          </div>
        </FadeIn>

        {/* Main Statement for Freelance Dev */}
        <FadeIn delay={0.2}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-gray-400 leading-[1.3] md:leading-[1.15] tracking-tight">
            <span className="text-gray-900 font-bold">
              I build high-performance products
            </span>{" "}
            using{" "}
            <span className="relative inline-block whitespace-nowrap px-2 mt-1 sm:mt-0">
              {/* Highlight Effect */}
              <span className="absolute inset-0 bg-emerald-100/60 rounded-lg -z-10 rotate-1 scale-105 transition-transform duration-300"></span>
              <span className="relative z-10 text-emerald-600 font-bold">
                cutting-edge tech
              </span>
            </span>{" "}
            to solve complex problems, improve user experience, and{" "}
            <span className="text-gray-900 font-extrabold relative inline-block">
              scale your digital vision globally.
              {/* Emphasis Underline */}
              <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-1 sm:h-1.5 bg-emerald-400/30 rounded-full"></span>
            </span>
          </h2>
        </FadeIn>
      </div>
    </section>
  );
};

export default ValueProp;
