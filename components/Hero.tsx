"use client";

import Button from "@/utils/Button";
import FadeIn from "@/utils/Common";
import { motion } from "framer-motion";
import { Code, Rocket } from "lucide-react";
import Link from "next/link";

const TECH_STACK = [
  "Next.js",
  "React.js",
  "Node.js",
  "MongoDB",
  "Express.js",
  "TypeScript",
  "C++",
  "C",
  "SQL",
  "Tailwind CSS",
  "Bootstrap",
  "SEO",
  "Ant Design",
  "Material UI",
  "API Dev",
];

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#051814] overflow-hidden transform-gpu pt-28 md:pt-40 pb-20 flex items-center">
      {" "}
      {/* OPTIMIZED: Background Glow Effects - Mobile par blur kam kiya (100px -> 60px) */}
      <div className="absolute top-[-10%] left-[-10%] w-[70%] md:w-[50%] h-[50%] bg-emerald-500/15 blur-[60px] md:blur-[120px] rounded-full pointer-events-none transform-gpu" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] md:w-[40%] h-[40%] bg-teal-500/10 blur-[50px] md:blur-[100px] rounded-full pointer-events-none transform-gpu" />
      {/* Subtle Grid Background */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "3rem 3rem",
          maskImage:
            "radial-gradient(circle at center, black 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 30%, transparent 80%)",
          willChange: "mask-image",
        }}
      />
      {/* INCREASED GAP on Mobile from gap-12 to gap-16 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full flex flex-col lg:grid lg:grid-cols-2 gap-16 lg:gap-8 items-center relative z-10">
        {/* Left Text Content */}
        <div className="w-full flex flex-col items-center text-center lg:items-start lg:text-left max-w-xl mx-auto lg:mx-0">
          <FadeIn className="w-full flex flex-col items-center lg:items-start">
            {/* INCREASED LINE HEIGHT (leading-tight -> leading-snug) for readability */}
            <h1 className="text-[32px] sm:text-[36px] lg:text-[60px] font-satoshi font-semibold text-white leading-[1] tracking-[0.01em] mb-6 w-full">
              {" "}
              I build websites that{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
                sell for you.
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2} className="w-full">
            {/* INCREASED MARGIN BOTTOM on mobile */}
            <p className="text-gray-400 text-[18px] mb-10 md:mb-12 w-full max-w-md mx-auto lg:mx-0 leading-relaxed">
              Creating high-performance digital experiences that convert and
              scale.
            </p>
          </FadeIn>

          <FadeIn
            delay={0.4}
            className="w-full flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 sm:gap-4"
          >
            <Link href="/contact" className="w-full sm:w-max">
              <Button
                variant="primary"
                className="w-full transition-shadow flex justify-center py-3 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all duration-300"
              >
                Let's Build Something
              </Button>
            </Link>

            <Link href="/work" className="w-full sm:w-max">
              <Button
                variant="outline"
                className="w-full hover:bg-white/5 border-white/20 text-white flex justify-center py-3"
              >
                View My Work
              </Button>
            </Link>
          </FadeIn>

          {/* AUTO-SLIDER TECH STACK - ADDED MORE TOP MARGIN */}
          <motion.div
            className="mt-16 sm:mt-20 w-full overflow-hidden relative transform-gpu"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-xs sm:text-sm text-gray-500 font-medium tracking-wider uppercase mb-6 text-center lg:text-left">
              Expertise in Modern Stack
            </p>

            <div className="relative w-full max-w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <motion.div
                className="flex gap-10 sm:gap-8 items-center w-max transform-gpu"
                initial={{ x: 0 }}
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 50,
                    ease: "linear",
                  },
                }}
              >
                {[...TECH_STACK, ...TECH_STACK].map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-white/60 font-semibold text-base sm:text-lg hover:text-emerald-400 transition-colors cursor-default whitespace-nowrap"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Right Image & Floating Elements */}
        <div className="relative h-[500px] sm:h-[452px] md:h-[502px] lg:h-[580px] w-full max-w-[95%] sm:max-w-[calc(28rem+5px)] mx-auto lg:mx-0 lg:ml-auto mt-6 lg:mt-0 flex justify-center lg:justify-end">
          {/* Main Image - Sabse Pehle Yeh Ayegi */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }} // Base delay: 0
            className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl bg-white/5 backdrop-blur-md transform-gpu"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#051814] via-transparent to-transparent z-10 opacity-80" />
            <img
              src="https://images.unsplash.com/photo-1711540846696-9389ab66377e?w=600&auto=format&fit=crop&q=60"
              alt="Workspace"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>

          {/* Floating Card 1 - Quality Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, -10, 0], // Entrance ke baad loop start hoga
            }}
            transition={{
              opacity: { delay: 0.5, duration: 0.5 },
              x: { delay: 0.5, duration: 0.5 },
              y: { repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }, // Loop delay thoda zyada
            }}
            className="absolute top-[60%] sm:top-[50%] -left-2 sm:-left-8 md:-left-12 bg-white/10 backdrop-blur-xl p-3 sm:p-4 rounded-xl sm:rounded-2xl flex items-center gap-3 sm:gap-4 shadow-[0_8px_32px_rgba(0,0,0,0.25)] z-20 scale-90 sm:scale-100 origin-left transform-gpu"
          >
            {/* ... Card Content ... */}
            <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 p-2 sm:p-3 rounded-lg sm:rounded-xl text-white shadow-inner relative z-10">
              <Code size={16} className="sm:w-5 sm:h-5" />
            </div>
            <div className="text-left relative z-10">
              <p className="text-white font-semibold text-xs sm:text-sm">
                100% Quality
              </p>
              <p className="text-gray-300 text-[10px] sm:text-xs">
                Performance Optimized
              </p>
            </div>
          </motion.div>

          {/* Floating Card 2 - Speed Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, 10, 0],
            }}
            transition={{
              opacity: { delay: 0.8, duration: 0.5 }, // Pehli card ke baad
              x: { delay: 0.8, duration: 0.5 },
              y: {
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
                delay: 1.3,
              },
            }}
            className="absolute bottom-[10%] sm:bottom-[10%] -left-4 sm:-left-12 md:-left-16 lg:-left-20 bg-white/10 backdrop-blur-xl p-3 sm:p-5 rounded-xl sm:rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.25)] z-20 scale-90 sm:scale-100 origin-left transform-gpu"
          >
            {/* ... Card Content ... */}
            <p className="text-gray-300 text-[10px] sm:text-xs uppercase tracking-wider font-semibold mb-1 sm:mb-3 text-left relative z-10">
              Delivery Speed
            </p>
            <div className="flex items-center gap-3 sm:gap-4 relative z-10">
              <div className="bg-emerald-500/20 p-2 sm:p-3 rounded-lg sm:rounded-xl text-emerald-400 border border-emerald-500/20">
                <Rocket size={16} className="sm:w-6 sm:h-6" />
              </div>
              <div className="text-left">
                <span className="text-white font-bold text-lg sm:text-2xl">
                  Fast
                </span>
                <p className="text-emerald-400 text-[10px] sm:text-sm font-medium">
                  Go-To Market
                </p>
              </div>
            </div>
          </motion.div>

          {/* Floating Happy Face - Sabse Last Mein */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: [0, 1.1, 1],
              y: [0, 10, 0],
            }}
            transition={{
              opacity: { delay: 1.1, duration: 0.4 },
              scale: { delay: 1.1, duration: 0.4 },
              y: {
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
                delay: 1.5,
              },
            }}
            className="transform-gpu absolute top-[-4%] right-0 sm:right-[-20px] bg-white/10 backdrop-blur-xl p-3 sm:p-4 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.25)] z-20"
          >
            {/* ... SVG Content ... */}
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="relative z-10 text-emerald-400 transform-gpu"
            >
              <svg
                className="w-5 h-5 sm:w-7 sm:h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 9h.01M15 9h.01M12 22a10 10 0 100-20 10 10 0 000 20z"
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
