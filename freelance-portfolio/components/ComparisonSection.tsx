"use client";

import FadeIn from "@/utils/Common";
import { CheckCircle2, Diamond, XCircle, Sparkles, Terminal } from "lucide-react";

const COMPARISON = [
  // The "Bad" Traits (Typical/Average Developers)
  { type: "bad", text: "Generic templates with bloated, slow-loading code" },
  { type: "bad", text: "Poor SEO structure and low Core Web Vitals" },
  { type: "bad", text: "Hardcoded solutions that are difficult to scale" },
  { type: "bad", text: "Unresponsive communication & missed deadlines" },
  { type: "bad", text: "Zero support or documentation after deployment" },
  
  // The "Good" Traits (Your Professional Standard)
  { type: "good", text: "Hand-written, optimized Next.js/React code" },
  { type: "good", text: "SEO-first architecture for maximum search visibility" },
  { type: "good", text: "Scalable backend (Node/MongoDB) built for growth" },
  { type: "good", text: "Transparent dev-log and regular project updates" },
  { type: "good", text: "Clean documentation & 30-day post-launch support" },
];

const ComparisonSection = () => {
  const badTraits = COMPARISON.filter((c) => c.type === "bad");
  const goodTraits = COMPARISON.filter((c) => c.type === "good");

  return (
    <section className="py-20 md:py-32 bg-[#051814] text-white border-t border-white/5 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
      <div className="absolute top-[20%] right-[-5%] w-[40%] h-[40%] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-20">
          <FadeIn>
            <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-xs sm:text-sm font-medium mb-6 backdrop-blur-sm">
              <Terminal size={14} />
              <span className="uppercase tracking-widest">Developer Standards</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 tracking-tight text-white">
              The Developer{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
                Difference
              </span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Don't settle for "just a website." Here's why my engineering-first 
              approach delivers better long-term value for your business.
            </p>
          </FadeIn>
        </div>

        {/* Comparison Grid */}
        <div className="relative grid md:grid-cols-2 gap-6 lg:gap-10 max-w-6xl mx-auto">
          
          {/* VS Badge */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#051814] border border-white/10 rounded-full items-center justify-center text-gray-500 font-bold text-sm z-20 shadow-xl backdrop-blur-md">
            VS
          </div>

          {/* Average Developer (Muted) */}
          <FadeIn className="h-full">
            <div className="bg-white/[0.02] rounded-[2rem] p-6 sm:p-8 lg:p-12 border border-white/5 h-full opacity-80">
              <h3 className="text-xl sm:text-2xl font-semibold mb-8 text-gray-500 border-b border-white/5 pb-4">
                Average Freelancer
              </h3>
              <ul className="space-y-5 sm:space-y-6">
                {badTraits.map((trait, idx) => (
                  <li key={idx} className="flex gap-4 items-start text-gray-500 group">
                    <div className="bg-red-500/10 p-1.5 rounded-full shrink-0 mt-0.5">
                      <XCircle className="w-5 h-5 text-red-400/50" />
                    </div>
                    <span className="text-sm sm:text-base leading-relaxed">
                      {trait.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Jitendra (Highlighted) */}
          <FadeIn delay={0.2} className="h-full">
            <div className="bg-[#0a241d] rounded-[2rem] p-6 sm:p-8 lg:p-12 border border-emerald-500/20 h-full relative overflow-hidden shadow-[0_0_40px_-15px_rgba(16,185,129,0.2)]">
              
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none" />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-teal-400" />

              <div className="flex items-center gap-3 mb-8 relative z-10 border-b border-emerald-500/20 pb-4">
                <div className="relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-emerald-500/40 blur-[8px] rounded-full" />
                  <Diamond className="text-emerald-400 fill-emerald-500/20 relative z-10 w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Jitendra
                </h3>
              </div>

              <ul className="space-y-5 sm:space-y-6 relative z-10">
                {goodTraits.map((trait, idx) => (
                  <li key={idx} className="flex gap-4 items-start text-gray-200 group">
                    <div className="bg-emerald-500/20 p-1.5 rounded-full shrink-0 mt-0.5">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    </div>
                    <span className="text-sm sm:text-base leading-relaxed font-medium group-hover:text-white transition-colors">
                      {trait.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;