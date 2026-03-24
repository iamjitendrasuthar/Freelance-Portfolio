"use client";

import Button from "@/utils/Button";
import FadeIn from "@/utils/Common";
import { ArrowRight, Terminal } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 md:py-32 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <FadeIn>
          <div className="bg-[#051814] rounded-[2.5rem] md:rounded-[3rem] p-8 sm:p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-emerald-900/20 border border-emerald-900/30 group">
            {/* Background Glows */}
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-emerald-500/20 blur-[100px] rounded-full pointer-events-none transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] bg-teal-500/20 blur-[100px] rounded-full pointer-events-none transition-transform duration-700 group-hover:scale-110" />

            {/* Subtle Grid Background with Radial Mask */}
            <div
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                backgroundSize: "3rem 3rem",
                maskImage:
                  "radial-gradient(circle at center, black 30%, transparent 80%)",
                WebkitMaskImage:
                  "radial-gradient(circle at center, black 30%, transparent 80%)",
              }}
            />

            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
              {/* Dev Badge */}
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
                <Terminal size={14} className="text-emerald-400" />
                <span className="text-gray-300 text-xs sm:text-sm font-medium tracking-wide uppercase">
                  Let's build the future
                </span>
              </div>

              {/* Main Copy - Developer Focused */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.15] tracking-tight">
                Have a project in mind? <br className="hidden sm:block" /> Let's
                ship it{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
                  to production.
                </span>
              </h2>
              <p className="text-gray-400 text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed px-2">
                Whether it's a high-performance Next.js app or a custom
                automation tool, I'm ready to help you architect and develop
                your next big idea.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <Button
                  variant="primary"
                  className="w-full sm:w-auto text-base sm:text-lg px-8 py-4 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all duration-300"
                >
                  Start a Conversation
                  <ArrowRight size={20} className="animate-pulse" />
                </Button>

                <button className="text-gray-300 hover:text-white font-medium text-sm sm:text-base px-6 py-4 transition-colors">
                  Check my stack
                </button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default CTASection;
