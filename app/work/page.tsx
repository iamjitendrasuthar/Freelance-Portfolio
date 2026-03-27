"use client";

import FadeIn from "@/utils/Common";
import { FolderGit2 } from "lucide-react";
import { motion } from "framer-motion";
import CTASection from "@/components/CTASection";
import ProjectsGrid from "@/components/ProjectsGrid";

const Work = () => {
  return (
    <main className="w-full bg-[#f9fafb] min-h-screen">
      {/* =========================================
          HERO SECTION (DARK THEME) 
      ========================================= */}
      <section className="relative bg-[#051814] pt-32 pb-24 md:pt-40 md:pb-32 z-10 overflow-hidden h-screen">
        {/* Animated Background Glows */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-500/10 blur-[120px] rounded-full transform-gpu"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-teal-500/10 blur-[100px] rounded-full transform-gpu"
          />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
              backgroundSize: "3rem 3rem",
              maskImage:
                "radial-gradient(circle at center, black 40%, transparent 80%)",
              WebkitMaskImage:
                "radial-gradient(circle at center, black 40%, transparent 80%)",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <FadeIn>
            <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-xs sm:text-sm font-medium mb-6 sm:mb-8 backdrop-blur-sm">
              <FolderGit2 size={14} />
              <span className="uppercase tracking-widest">Selected Works </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.15] mb-6 max-w-4xl mx-auto">
              Projects that blend <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
                logic with creativity.
              </span>
            </h1>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Explore a collection of my recent freelance projects, web
              applications, and technical experiments. Every line of code is
              written with performance and scalability in mind.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* =========================================
          PROJECTS GRID (LIGHT THEME) 
      ========================================= */}
      <div className="-mt-40 md:pt-40">
        <ProjectsGrid />
      </div>

      {/* =========================================
          BOTTOM CTA SECTION
      ========================================= */}
      <section className="-mt-10 md: -mt-35 relative z-20">
        <CTASection />
      </section>
    </main>
  );
};

export default Work;
