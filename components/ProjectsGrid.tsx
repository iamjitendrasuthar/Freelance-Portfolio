"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Code2, Sparkles, Loader2 } from "lucide-react";
import { GithubIcon } from "@/utils/Icons";

// 1. Define the TypeScript Interface based on your MongoDB Model
export interface ProjectType {
  _id: string; // MongoDB uses _id instead of id
  title: string;
  category: string;
  desc: string;
  image: string;
  tech: string[];
  liveLink: string;
  githubLink: string;
  featured: boolean;
}

const ProjectsGrid = () => {
  // 2. State for projects and loading status
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // 3. Fetch data from the API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects");
        if (response.ok) {
          const data = await response.json();

          // 🔥 NAYA CODE: Sirf un projects ko filter karo jinka featured 'true' hai
          const featuredProjects = data.filter(
            (project: ProjectType) => project.featured === true,
          );

          // Filtered data ko state mein set karo
          setProjects(featuredProjects);
        } else {
          console.error("Failed to fetch projects");
        }
      } catch (error) {
        console.error("Error connecting to database:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="relative z-20 px-4 sm:px-6 -translate-y-32 md:-translate-y-40">
      <div className="max-w-7xl mx-auto">
        {/* Loading State */}
        {isLoading ? (
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {[1, 2, 3, 4].map((skeleton) => (
              <div
                key={skeleton}
                className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden flex flex-col h-full h-[400px] animate-pulse"
              >
                <div className="h-48 sm:h-56 bg-gray-200 w-full" />
                <div className="p-6 flex flex-col gap-4">
                  <div className="h-4 bg-gray-200 w-1/3 rounded" />
                  <div className="h-6 bg-gray-200 w-3/4 rounded" />
                  <div className="h-16 bg-gray-200 w-full rounded" />
                  <div className="flex gap-2 mt-auto">
                    <div className="h-6 bg-gray-200 w-16 rounded-md" />
                    <div className="h-6 bg-gray-200 w-16 rounded-md" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : projects.length === 0 ? (
          /* Empty State */
          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-12 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              No Featured Projects Found
            </h3>
            <p className="text-gray-500">
              Add or mark some projects as "Featured" from the Admin Dashboard
              to see them here.
            </p>
          </div>
        ) : (
          /* Dynamic Projects Grid */
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={project._id} // Using MongoDB _id
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

                  {/* Featured Badge */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-gray-900 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                    <Sparkles size={12} className="text-emerald-500" />
                    Featured
                  </div>

                  {/* Desktop Hover */}
                  <div className="absolute inset-0 bg-gray-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex items-center justify-center gap-4 backdrop-blur-sm">
                    {project.liveLink && project.liveLink !== "#" && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-emerald-400 hover:text-white transition-colors hover:scale-110"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                    {project.githubLink && project.githubLink !== "#" && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-emerald-400 hover:text-white transition-colors hover:scale-110"
                      >
                        <GithubIcon />
                      </a>
                    )}
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
                    {project.liveLink && project.liveLink !== "#" && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-xs font-bold text-emerald-600"
                      >
                        Live Demo <ExternalLink size={14} />
                      </a>
                    )}
                    {project.githubLink && project.githubLink !== "#" && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-xs font-bold text-gray-600"
                      >
                        Source <GithubIcon />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsGrid;
