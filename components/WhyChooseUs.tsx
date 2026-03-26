"use client";

import FadeIn from "@/utils/Common";
import { motion } from "framer-motion";
import {
  BarChart3,
  Sparkles,
  ShieldCheck,
  Terminal,
  Cpu,
  Code2,
} from "lucide-react";

const WhyChooseUs = () => {
  return (
    // FIX: Removed overflow-hidden from root section to ensure smooth mobile scrolling
    <section className="py-20 md:py-32 bg-[#051814] text-white relative">
      {/* FIX: Moved background glows to a dedicated overflow-hidden layer with GPU acceleration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-emerald-500/10 blur-[120px] rounded-full transform-gpu" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-teal-500/10 blur-[100px] rounded-full transform-gpu" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Header Section */}
        <FadeIn>
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-xs sm:text-sm font-medium mb-6 sm:mb-8 backdrop-blur-sm">
            <Code2 size={16} />
            <span className="uppercase tracking-widest">
              Engineering Excellence
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Why I'm the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
              right developer
            </span>
          </h2>
          {/* FIX: Corrected the text-gray-400 to ensure text exists where it was empty in the original */}
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-12 sm:mb-16 leading-relaxed px-4">
            I bridge the gap between complex system architecture and seamless
            user experiences, delivering clean code that scales with your
            business.
          </p>
        </FadeIn>

        {/* Image & Interactive Elements */}
        <FadeIn delay={0.2} className="relative max-w-5xl mx-auto">
          {/* Main Image Container */}
          <div className="aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] rounded-[2rem] overflow-hidden relative border border-white/10 shadow-2xl bg-[#1A332E]/30 transform-gpu">
            <img
              src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Deep tech workspace"
              className="w-full h-full object-cover opacity-60 hover:opacity-70 transition-opacity duration-700"
            />
            {/* Dark Gradients for blending */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#051814] via-[#051814]/20 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#051814]/80 via-transparent to-[#051814]/80 pointer-events-none" />
          </div>

          {/* Floating Card 1: Technical Depth */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            // FIX: Added transform-gpu and will-change-transform for smooth infinite animation on mobile
            className="absolute top-4 sm:top-8 md:top-12 left-2 sm:left-8 md:-left-8 bg-[#0a241d]/90 backdrop-blur-xl border border-white/10 p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-[0_8px_32px_rgba(16,185,129,0.15)] flex items-center gap-3 sm:gap-4 z-20 scale-85 sm:scale-100 origin-top-left transform-gpu will-change-transform"
          >
            <div className="bg-emerald-500/20 p-2 sm:p-3 rounded-lg sm:rounded-xl border border-emerald-500/20 text-emerald-400">
              <Cpu size={24} />
            </div>
            <div className="text-left">
              <p className="font-bold text-sm sm:text-base text-white">
                Full-Stack Depth
              </p>
              <p className="text-gray-400 text-[10px] sm:text-xs">
                C++ to Next.js Expert
              </p>
            </div>
          </motion.div>

          {/* Floating Card 2: Performance focus */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
              delay: 1,
            }}
            // FIX: Added transform-gpu and will-change-transform for smooth infinite animation on mobile
            className="absolute -bottom-6 sm:-bottom-8 right-2 sm:right-8 md:-right-8 bg-[#0a241d]/90 backdrop-blur-xl border border-white/10 p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-[0_8px_32px_rgba(16,185,129,0.15)] flex flex-col items-center min-w-[140px] sm:min-w-[180px] md:min-w-[200px] z-20 scale-85 sm:scale-100 origin-bottom-right transform-gpu will-change-transform"
          >
            <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 p-2.5 sm:p-3 rounded-lg sm:rounded-xl mb-2 sm:mb-3 shadow-inner">
              <BarChart3 className="text-white w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <span className="font-bold text-base sm:text-lg md:text-xl text-white mb-0.5 sm:mb-1 text-center">
              System Performance
            </span>
            <span className="text-gray-400 text-[10px] sm:text-xs text-center">
              Optimized API & Data Flow
            </span>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
};

export default WhyChooseUs;
