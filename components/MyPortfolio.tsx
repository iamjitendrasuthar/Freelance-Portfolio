"use client";

import FadeIn from "@/utils/Common";
import { Code2 } from "lucide-react";
import ProjectsGrid from "./ProjectsGrid";

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
