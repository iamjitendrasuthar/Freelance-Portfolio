"use client";

import FadeIn from "@/utils/Common";
import { GithubIcon } from "@/utils/Icons";
import { motion } from "framer-motion";
import { Code2, ExternalLink, Sparkles } from "lucide-react";
import ProjectsGrid from "./ProjectsGrid";
// --- PROJECTS DATA ---
const PROJECTS = [
  {
    id: 1,
    title: "Js Interiors Portfolio",
    category: "Web Development",
    desc: "A premium interior design showcase built with Next.js. Features ultra-smooth Framer Motion transitions, dynamic image galleries, and SEO-first architecture.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "SEO"],
    liveLink: "#",
    githubLink: "#",
    featured: true,
  },
  {
    id: 2,
    title: "IRCTC Smart Autofill",
    category: "Browser Extension",
    desc: "A custom Chrome Extension built to automate complex passenger details. Uses advanced DOM manipulation to save 90% booking time during tatkal hours.",
    image:
      "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?auto=format&fit=crop&q=80&w=800",
    tech: ["JavaScript", "Chrome API", "HTML/CSS", "DOM"],
    liveLink: "#",
    githubLink: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Scalable SaaS Backend",
    category: "Backend Architecture",
    desc: "Robust API development using Node.js & Express with MongoDB. Built for handling high-concurrency data flows, secure authentication, and complex aggregations.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
    tech: ["Node.js", "Express", "MongoDB", "JWT"],
    liveLink: "#",
    githubLink: "#",
    featured: false,
  },
  {
    id: 4,
    title: "Enterprise Admin Panel",
    category: "Dashboard UI",
    desc: "Complex data-driven dashboard built with Material UI for seamless management of user records, real-time analytics, and role-based access control.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    tech: ["React.js", "Material UI", "Redux", "REST API"],
    liveLink: "#",
    githubLink: "#",
    featured: false,
  },
];
const MyPortfolio = () => {
  return (
    <section id="work" className="pt-25 md:pt-32 bg-white relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-20  px-4 sm:px-6">
          <FadeIn>
            <div className="max-w-3xl text-center mx-auto flex flex-col items-center">
              {" "}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
                <Code2 size={16} />
                <span className="uppercase tracking-widest">My Portfolio</span>
              </div>{" "}
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
        <div className="pt-32 md:pt-32">
          {" "}
          <ProjectsGrid />
        </div>
      </div>
    </section>
  );
};

export default MyPortfolio;
