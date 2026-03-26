"use client";

import { useRef, useState } from "react";
import FadeIn from "@/utils/Common";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import {
  Sparkles,
  Code2,
  Cpu,
  Globe,
  Database,
  ArrowUpRight,
  Binary,
} from "lucide-react";

const EXPERTISE_AREAS = [
  {
    name: "Frontend Mastery",
    role: "Next.js / React / Tailwind",
    desc: "Crafting fluid, high-performance interfaces with a focus on Core Web Vitals and Framer Motion animations.",
    tech: ["Next.js 15", "TypeScript", "Framer Motion", "Tailwind"],
    icon: <Globe size={24} />,
  },
  {
    name: "Backend Architecture",
    role: "Node.js / Express / APIs",
    desc: "Designing scalable server-side logic and robust REST/GraphQL APIs with secure authentication layers.",
    tech: ["Node.js", "Express", "JWT", "WebSockets"],
    icon: <Database size={24} />,
  },
  {
    name: "Database Design",
    role: "MongoDB / SQL Expert",
    desc: "Architecting efficient data models and complex aggregation pipelines for SQL and NoSQL environments.",
    tech: ["PostgreSQL", "MongoDB", "Redis", "Prisma"],
    icon: <Code2 size={24} />,
  },
  {
    name: "Core Engineering",
    role: "C / C++ Systems",
    desc: "Deep-level programming focusing on memory management, algorithm optimization, and system-level logic.",
    tech: ["Low-level", "Algorithms", "Data Structures", "C++20"],
    icon: <Cpu size={24} />,
  },
];

const ExpertiseCard = ({ item, index }: { item: any; index: number }) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <FadeIn delay={index * 0.1}>
      <div
        onMouseMove={handleMouseMove}
        // FIX: Added transform-gpu taaki Framer Motion aur overflow-hidden mobile par lag na karein
        className="group relative flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-[#051814] p-8 transition-all hover:border-emerald-500/50 shadow-2xl overflow-hidden transform-gpu"
      >
        {/* Spotlight Hover Effect */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                450px circle at ${mouseX}px ${mouseY}px,
                rgba(16, 185, 129, 0.15),
                transparent 80%
              )
            `,
          }}
        />

        <div className="relative z-10">
          <div className="mb-6 flex items-start justify-between">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500">
              {item.icon}
            </div>
            <span className="text-xs font-mono text-emerald-500/50">
              0{index + 1}
            </span>
          </div>

          <h3 className="mb-2 text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
            {item.name}
          </h3>
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-emerald-500/80">
            {item.role}
          </p>
          <p className="mb-8 text-sm leading-relaxed text-gray-400">
            {item.desc}
          </p>
        </div>

        <div className="relative z-10">
          <div className="mb-6 flex flex-wrap gap-2">
            {item.tech.map((t: string) => (
              <span
                key={t}
                className="rounded-full bg-white/5 px-3 py-1 text-[10px] font-medium text-gray-300 border border-white/5"
              >
                {t}
              </span>
            ))}
          </div>

          <button className="flex items-center gap-2 text-sm font-bold text-white group/btn">
            Explore Documentation
            <ArrowUpRight
              size={16}
              className="text-emerald-500 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
            />
          </button>
        </div>
      </div>
    </FadeIn>
  );
};

const TechnicalCapabilities = () => {
  return (
    // FIX: Removed overflow-hidden from root section
    <section id="about" className="relative bg-[#051814]  py-24 md:py-32">
      {/* FIX: Background Decor ko alag wrapper mein daala jisme overflow-hidden hai */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
        {/* transform-gpu add kiya smooth rendering ke liye */}
        <div className="absolute top-[20%] right-[-5%] w-[40%] h-[40%] bg-emerald-500/5 blur-[120px] rounded-full transform-gpu" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="mb-20 text-center lg:text-left flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <FadeIn className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold mb-6 tracking-widest uppercase">
              <Code2 size={16} />
              <span>Technical Capabilities</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
              Engineering solutions <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
                at every scale.
              </span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2} className="max-w-md lg:pb-2">
            <p className="text-gray-400 text-lg leading-relaxed">
              From low-level system performance to fluid user interfaces, I
              build robust ecosystems using the modern web stack.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXPERTISE_AREAS.map((item, idx) => (
            <ExpertiseCard key={idx} item={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalCapabilities;
