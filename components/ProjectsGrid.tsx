"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2, Sparkles } from "lucide-react";
import { GithubIcon } from "@/utils/Icons";
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
const ProjectsGrid = () => {
  return (
    <section className="relative z-20 px-4 sm:px-6 -translate-y-32 md:-translate-y-40">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: idx * 0.1,
                ease: "easeOut",
              }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-colors duration-500 overflow-hidden flex flex-col h-full group transform-gpu"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden bg-gray-100">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top"
                />

                {/* Featured */}
                {project.featured && (
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-gray-900 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                    <Sparkles size={12} className="text-emerald-500" />
                    Featured
                  </div>
                )}

                {/* Desktop Hover */}
                <div className="absolute inset-0 bg-gray-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex items-center justify-center gap-4 backdrop-blur-sm">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-emerald-400 hover:text-white transition-colors hover:scale-110"
                  >
                    <ExternalLink size={18} />
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-emerald-400 hover:text-white transition-colors hover:scale-110"
                  >
                    <GithubIcon />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-2">
                  <Code2 size={14} className="text-emerald-500" />
                  <span className="text-emerald-600 text-[10px] font-bold uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                  {project.desc}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-gray-50 border border-gray-100 text-gray-600 text-[10px] font-semibold rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Mobile Links */}
                <div className="flex items-center gap-4 md:hidden pt-3 border-t border-gray-100 mt-auto">
                  <a
                    href={project.liveLink}
                    className="flex items-center gap-1.5 text-xs font-bold text-emerald-600"
                  >
                    Live Demo <ExternalLink size={14} />
                  </a>
                  <a
                    href={project.githubLink}
                    className="flex items-center gap-1.5 text-xs font-bold text-gray-600"
                  >
                    Source <GithubIcon />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
