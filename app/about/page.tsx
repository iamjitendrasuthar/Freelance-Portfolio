"use client";

import FadeIn from "@/utils/Common";
import {
  User,
  Code2,
  Target,
  Zap,
  Coffee,
  Award,
  ArrowRight,
  Code,
  CoffeeIcon,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/utils/Button";

const STATS = [
  { label: "Projects Delivered", value: "40+" },
  { label: "Happy Clients", value: "25+" },
  { label: "Years Experience", value: "3+" },
  { label: "Cups of Coffee", value: "1000+" },
];

const TECH_STACK = [
  { name: "Next.js", progress: 90 },
  { name: "React.js", progress: 95 },
  { name: "Node.js", progress: 85 },
  { name: "Express.js", progress: 85 },
  { name: "TypeScript", progress: 85 },
  { name: "Tailwind CSS", progress: 95 },
  { name: "MongoDB", progress: 80 },
  { name: "SQL", progress: 75 },
  { name: "API Dev", progress: 90 },
  { name: "SEO", progress: 85 },
  { name: "C++ / C", progress: 80 },
  { name: "Material UI", progress: 80 },
  { name: "Ant Design", progress: 75 },
  { name: "Bootstrap", progress: 85 },
];

const SPOKEN_LANGUAGES = [
  { name: "Hindi (Native)", progress: 100 },
  { name: "English (Professional)", progress: 85 },
];

const VALUES = [
  {
    icon: <Code2 size={24} />,
    title: "Precision Engineering",
    desc: "I don't just write code; I architect scalable solutions. Every line is optimized for performance, maintainability, and future growth.",
  },
  {
    icon: <Target size={24} />,
    title: "Business-First Approach",
    desc: "Your website isn't just art—it's a business tool. I build digital experiences designed to convert visitors and drive real revenue.",
  },
  {
    icon: <Zap size={24} />,
    title: "Uncompromising Speed",
    desc: "In the digital world, milliseconds matter. I obsess over Core Web Vitals ensuring your applications load instantly on any device.",
  },
  {
    icon: <Award size={24} />,
    title: "Transparent Communication",
    desc: "No technical jargon or radio silence. I keep you in the loop at every stage of development, from the first wireframe to the final deployment.",
  },
];

const About = () => {
  return (
    <main className="w-full">
      {/* =========================================
          HERO SECTION (DARK THEME) 
      ========================================= */}
      <section className="relative bg-[#051814] pt-28 pb-20 md:pt-40 md:pb-32">
        {/* Background Glows (GPU Accelerated) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-500/10 blur-[120px] rounded-full transform-gpu" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-teal-500/10 blur-[100px] rounded-full transform-gpu" />
          {/* Subtle Grid */}
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Hero / Intro Split */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <FadeIn>
                <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-xs sm:text-sm font-medium mb-6 sm:mb-8 backdrop-blur-sm">
                  <Code2 size={16} />
                  <span className="uppercase tracking-widest">
                    Behind The Code{" "}
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                  Hi, I'm Jitendra. <br />I engineer{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
                    digital success.
                  </span>
                </h1>
                <div className="space-y-6 text-gray-400 text-base sm:text-lg leading-relaxed">
                  <p>
                    I am a passionate Full-Stack Developer specializing in the
                    modern JavaScript ecosystem. My journey started with a deep
                    curiosity for how things work under the hood, leading me
                    from low-level C++ programming to architecting
                    high-performance web applications.
                  </p>
                  <p>
                    For me, development is more than just writing functional
                    code. It's about solving complex problems, optimizing user
                    experiences, and bridging the gap between a client's vision
                    and a flawless digital reality.
                  </p>
                </div>
                <div className="mt-10">
                  <Link
                    href="/contact"
                    //   className="inline-flex items-center gap-2 bg-white text-[#051814] font-bold px-6 py-3 rounded-xl hover:bg-emerald-400 transition-colors duration-300 group"
                  >
                    <Button
                      variant="primary"
                      className="w-full sm:w-max transition-shadow flex justify-center py-3 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all duration-300"
                    >
                      Let's collaborate{" "}
                      <ArrowRight
                        size={18}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </Button>
                  </Link>
                </div>{" "}
              </FadeIn>
            </div>

            <FadeIn delay={0.2} className="relative">
              {/* 1. Image Container (Isme overflow-hidden rahega taaki image bahar na nikle) */}
              <div className="aspect-square sm:aspect-[4/3] lg:aspect-square rounded-[2rem] overflow-hidden relative border border-white/10 shadow-2xl transform-gpu">
                <img
                  src="/IMG_8905.JPG"
                  alt="Jitendra coding workspace"
                  className="w-full h-full object-cover object-bottom opacity-80 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#051814] via-transparent to-transparent opacity-80 pointer-events-none" />
              </div>

              {/* 2. Floating Card (Ye overflow-hidden div ke BAAHAR hai, isliye cut nahi hoga) */}
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
                  y: {
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut",
                    delay: 1,
                  }, // Loop delay thoda zyada
                }}
                className="absolute top-[80%] sm:top-[80%] -left-2 sm:-left-8 md:-left-12 bg-white/10 backdrop-blur-xl p-3 sm:p-4 rounded-xl sm:rounded-2xl flex items-center gap-3 sm:gap-4 shadow-[0_8px_32px_rgba(0,0,0,0.25)] z-20 scale-90 sm:scale-100 origin-left"
              >
                {/* ... Card Content ... */}
                <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 p-2 sm:p-3 rounded-lg sm:rounded-xl text-white shadow-inner relative z-10">
                  <CoffeeIcon size={16} className="sm:w-5 sm:h-5" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">
                    Fuelled by Passion
                  </p>
                  <p className="text-gray-400 text-xs">(And lots of coffee)</p>
                </div>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* =========================================
          CONTENT SECTION (LIGHT THEME) 
      ========================================= */}
      <section className="bg-white py-20 md:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-24 md:mb-32">
            {STATS.map((stat, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} className="h-full">
                {/* FIX: aspect-square hata diya aur py-8 sm:py-10 laga diya rectangular shape ke liye */}
                <div className="h-full flex flex-col items-center justify-center bg-gray-50 border border-gray-100 rounded-2xl px-4 py-8 sm:py-10 text-center shadow-sm hover:shadow-md hover:border-emerald-100 transition-all">
                  <h3 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500 mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm font-semibold uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Proficiency Section */}
          <div className="mb-24 md:mb-32">
            <FadeIn>
              <div className="text-left md:text-center max-w-2xl mx-auto mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
                  <Code2 size={16} />
                  <span className="uppercase tracking-widest">Proficiency</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                  Tech Stack & Skills
                </h2>
                <p className="text-gray-500 text-lg">
                  The tools, frameworks, and languages I use to bring ideas to
                  life.
                </p>
              </div>
            </FadeIn>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Tech Stack (Takes 2 columns on desktop) */}
              <FadeIn
                delay={0.2}
                className="lg:col-span-2 bg-white border border-gray-200 shadow-sm p-6 sm:p-8 rounded-[2rem]"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-8 border-b border-gray-100 pb-4">
                  Development Arsenal
                </h3>

                {/* Internal Grid for 2 columns inside the card */}
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                  {TECH_STACK.map((tech, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-semibold text-sm sm:text-base">
                          {tech.name}
                        </span>
                        <span className="text-emerald-600 text-xs sm:text-sm font-bold">
                          {tech.progress}%
                        </span>
                      </div>
                      <div className="h-1.5 sm:h-2 w-full bg-gray-100 rounded-full overflow-hidden transform-gpu">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${tech.progress}%` }}
                          /* FIX: Removed margin: "-50px" and added amount: 0.1 for better mobile detection */
                          viewport={{ once: true, amount: 0.1 }}
                          transition={{
                            duration: 1.2,
                            ease: "easeOut",
                            delay: idx * 0.05,
                          }}
                          className="h-full bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full relative"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>

              {/* Communication (Takes 1 column) */}
              <FadeIn
                delay={0.3}
                className="lg:col-span-1 bg-white border border-gray-200 shadow-sm p-6 sm:p-8 rounded-[2rem] h-fit"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-8 border-b border-gray-100 pb-4">
                  Communication
                </h3>
                <div className="space-y-6">
                  {SPOKEN_LANGUAGES.map((lang, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-semibold text-sm sm:text-base">
                          {lang.name}
                        </span>
                        <span className="text-emerald-600 text-xs sm:text-sm font-bold">
                          {lang.progress}%
                        </span>
                      </div>
                      <div className="h-1.5 sm:h-2 w-full bg-gray-100 rounded-full overflow-hidden transform-gpu">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${lang.progress}%` }}
                          /* FIX: Removed margin: "-50px" and added amount: 0.1 for better mobile detection */
                          viewport={{ once: true, amount: 0.1 }}
                          transition={{
                            duration: 1.2,
                            ease: "easeOut",
                            delay: idx * 0.1,
                          }}
                          className="h-full bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full relative"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Core Values Section */}
          <div>
            <FadeIn>
              <div className="text-left md:text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                  My Core Principles
                </h2>
                <p className="text-gray-500 text-lg">
                  The foundational values that guide my development process and
                  ensure I deliver top-tier results.
                </p>
              </div>
            </FadeIn>

            <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
              {VALUES.map((value, idx) => (
                <FadeIn key={idx} delay={idx * 0.1} className="h-full">
                  <div className="bg-white border border-gray-100 shadow-sm p-8 rounded-[2rem] h-full hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.15)] hover:-translate-y-1 hover:border-emerald-100 transition-all duration-300 group">
                    <div className="w-12 h-12 bg-emerald-50 text-emerald-500 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {value.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
