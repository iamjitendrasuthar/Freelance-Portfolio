"use client";

import FadeIn from "@/utils/Common";
import {
  Monitor,
  Server,
  Rocket,
  Search,
  ShieldCheck,
  Blocks,
  ArrowRight,
  CheckCircle2,
  Workflow,
} from "lucide-react";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import Button from "@/utils/Button";

// --- SERVICES DATA ---
const SERVICES = [
  {
    icon: <Monitor className="w-8 h-8" />,
    title: "Frontend Development",
    desc: "I build pixel-perfect, highly interactive, and accessible user interfaces using React.js and Next.js. Every layout is fully responsive and optimized for all devices.",
    features: [
      "Next.js & React",
      "Tailwind CSS",
      "Framer Motion Animations",
      "Responsive Design",
    ],
  },
  {
    icon: <Server className="w-8 h-8" />,
    title: "Backend Architecture",
    desc: "Scalable and secure server-side solutions. I design robust APIs and database structures that can handle high traffic without compromising speed.",
    features: [
      "Node.js & Express",
      "RESTful & GraphQL APIs",
      "MongoDB / PostgreSQL",
      "Secure Authentication",
    ],
  },
  {
    icon: <Blocks className="w-8 h-8" />,
    title: "Browser Extensions",
    desc: "Custom Chrome extensions to automate workflows, scrape data, or enhance browser functionality. Built with modern JavaScript and extension APIs.",
    features: [
      "DOM Manipulation",
      "Background Scripts",
      "Automated Workflows",
      "Manifest V3",
    ],
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Performance Optimization",
    desc: "Slow websites lose customers. I audit and optimize your existing web apps to achieve 90+ Core Web Vitals scores and lightning-fast load times.",
    features: [
      "Code Splitting",
      "Image Optimization",
      "Caching Strategies",
      "Lighthouse Audits",
    ],
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: "Technical SEO",
    desc: "Building websites that search engines love. From server-side rendering (SSR) to dynamic meta tags, I ensure your site ranks higher organically.",
    features: [
      "Server-Side Rendering",
      "Semantic HTML",
      "Schema Markup",
      "Sitemap Generation",
    ],
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Maintenance & Support",
    desc: "Continuous monitoring, bug fixing, and feature updates. I ensure your digital product stays secure, up-to-date, and runs smoothly 24/7.",
    features: [
      "Security Patches",
      "Version Upgrades",
      "Uptime Monitoring",
      "Bug Tracking",
    ],
  },
];

// --- WORK PROCESS DATA ---
const PROCESS = [
  {
    step: "01",
    title: "Discovery & Strategy",
    desc: "We start by understanding your business goals, target audience, and technical requirements to map out the perfect solution.",
  },
  {
    step: "02",
    title: "Architecture & Design",
    desc: "Planning the database schema, API structure, and user interface flow before writing a single line of code.",
  },
  {
    step: "03",
    title: "Agile Development",
    desc: "Writing clean, modular code with regular updates. You get to see the progress live and provide feedback early.",
  },
  {
    step: "04",
    title: "Testing & Deployment",
    desc: "Rigorous performance and security testing, followed by a smooth deployment to production servers like Vercel or AWS.",
  },
];

const Services = () => {
  return (
    <main className="w-full bg-[#f9fafb] min-h-screen pb-20 md:pb-32">
      {/* =========================================
          HERO SECTION (DARK THEME) 
      ========================================= */}
      <section className="relative bg-[#051814] pt-32 pb-48 md:pt-40 md:pb-56 z-10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-emerald-500/15 blur-[120px] rounded-full transform-gpu" />
          <div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] bg-teal-500/15 blur-[100px] rounded-full transform-gpu" />
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: `linear-gradient(to right, #10b981 1px, transparent 1px), linear-gradient(to bottom, #10b981 1px, transparent 1px)`,
              backgroundSize: "4rem 4rem",
              maskImage:
                "radial-gradient(ellipse at center, black 40%, transparent 80%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at center, black 40%, transparent 80%)",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <FadeIn>
            <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-xs sm:text-sm font-medium mb-6 sm:mb-8 backdrop-blur-sm">
              <Blocks size={14} />
              <span className="uppercase tracking-widest">Expertise</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.15] mb-6 max-w-4xl mx-auto">
              Solutions designed for <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
                scale and performance.
              </span>
            </h1>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              Whether you need a full-stack web application, a blazing-fast
              marketing site, or custom browser automation, I deliver
              engineering excellence from end to end.
            </p>
            <div className="mt-10 inline-flex items-center">
              <Link href="/contact">
                <Button
                  variant="primary"
                  className="w-full sm:w-max transition-shadow flex justify-center py-3 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all duration-300"
                >
                  Start Your Project{" "}
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* =========================================
          SERVICES GRID (FIXED BACKGROUND BUG) 
      ========================================= */}
      <section className="relative z-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 -mt-24 md:-mt-32">
            {SERVICES.map((service, idx) => (
              /* FIX: White background is statically outside, hiding the hero line. FadeIn is only on content. */
              <div
                key={idx}
                className="bg-white rounded-[2rem] border border-gray-200 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] hover:shadow-xl hover:border-emerald-200 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group transform-gpu overflow-hidden"
              >
                <FadeIn delay={idx * 0.1} className="h-full flex flex-col p-8">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-500 flex items-center justify-center mb-8 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300 shadow-sm">
                    {service.icon}
                  </div>

                  {/* Text Content */}
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
                    {service.desc}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mt-auto pt-6 border-t border-gray-100">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-gray-700 font-medium"
                      >
                        <CheckCircle2
                          size={18}
                          className="text-emerald-500 shrink-0 mt-0.5"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          HOW I WORK (PROCESS SECTION)
      ========================================= */}
      <section className="mt-24 md:mt-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-xs font-bold mb-6 tracking-widest uppercase w-max">
                <Workflow size={14} />
                <span>Workflow</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                How we build it.
              </h2>
              <p className="text-gray-500 text-base sm:text-lg">
                A proven, transparent process that ensures your project is
                delivered on time, on budget, and beyond expectations.
              </p>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {PROCESS.map((step, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} className="relative">
                {idx !== PROCESS.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-emerald-200 to-transparent" />
                )}

                <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm relative z-10 h-full hover:border-emerald-200 transition-colors">
                  <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-emerald-100 to-emerald-50 mb-6 block">
                    {step.step}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          BOTTOM CTA SECTION
      ========================================= */}
      {/* FIX: Corrected the negative margin class to valid Tailwind syntax (-mb-20 instead of mb-[-80]) */}
      <section className="mt-8 md:mt-10 -mb-10 md:-mb-20 relative z-20">
        <CTASection />
      </section>
    </main>
  );
};

export default Services;
