"use client";

import FadeIn from "@/utils/Common";
import { ArrowRight, Code2, Terminal } from "lucide-react";

const SUCCESS_STORIES = [
  {
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=600",
    title: "Js Interiors Portfolio",
    desc: "A premium interior design showcase built with Next.js, featuring ultra-smooth Framer Motion transitions and SEO-first architecture.",
    stats: ["Next.js & Tailwind", "99+ PageSpeed Score"],
    tech: "Next.js / Framer Motion",
  },
  {
    img: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?auto=format&fit=crop&q=80&w=600",
    title: "IRCTC Smart Autofill",
    desc: "A custom Chrome Extension built to automate passenger details. Uses complex DOM manipulation to save 90% booking time.",
    stats: ["Chrome API Expert", "Automated Logic"],
    tech: "JavaScript / Extension API",
  },
  {
    img: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmFja2VuZHxlbnwwfDB8MHx8fDA%3D",
    title: "Scalable SaaS Backend",
    desc: "Robust API development using Node.js & Express with MongoDB. Built for handling high-concurrency data flows.",
    stats: ["MongoDB / SQL", "Secure API Endpoints"],
    tech: "Node.js / NoSQL",
  },
  {
    img: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=600",
    title: "Enterprise Admin Panel",
    desc: "Complex data-driven dashboard built with Ant Design and Material UI for seamless management of user records.",
    stats: ["Ant Design / MUI", "React Context API"],
    tech: "React / Enterprise UI",
  },
];

const MyPortfolio = () => {
  return (
    <section id="work" className="py-20 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12 md:mb-20">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
              <Code2 size={16} />
              <span className="uppercase tracking-widest">My Portfolio</span>
            </div>

            <div className="max-w-3xl text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                Turning complex logic into{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">
                  seamless digital experiences.
                </span>
              </h2>
              <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-2xl">
                From full-stack web applications to automated browser
                extensions, I build performance-focused solutions using the
                modern tech stack.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Grid Layout - No Slider */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {SUCCESS_STORIES.map((story, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="group cursor-pointer">
                {/* Image Container */}
                <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden mb-6 shadow-lg border border-gray-100 bg-gray-50">
                  <img
                    src={story.img}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                  {/* Tech Tag (Top Left) */}
                  <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-xs uppercase font-bold px-4 py-1.5 rounded-full">
                    {story.tech}
                  </div>

                  {/* Stats Overlay (Bottom) */}
                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {story.stats.map((stat, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-1.5 bg-emerald-500/90 backdrop-blur-sm text-white text-[10px] font-semibold px-3 py-1.5 rounded-lg"
                      >
                        <Code2 size={12} />
                        {stat}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content Box */}
                <div className="px-2">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                      {story.title}
                    </h3>
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100 group-hover:bg-emerald-50 group-hover:border-emerald-100 group-hover:-rotate-45 transition-all duration-300">
                      <ArrowRight
                        size={18}
                        className="text-gray-400 group-hover:text-emerald-500"
                      />
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-lg">
                    {story.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyPortfolio;
