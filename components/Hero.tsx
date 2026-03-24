// "use client";

// import Button from "@/utils/Button";
// import FadeIn from "@/utils/Common";
// import { motion } from "framer-motion";
// import { Code, Rocket, Sparkles } from "lucide-react";

// const TECH_STACK = [
//   "Next.js",
//   "React.js",
//   "Node.js",
//   "MongoDB",
//   "Express.js",
//   "TypeScript",
//   "C++",
//   "C",
//   "SQL",
//   "Tailwind CSS",
//   "Bootstrap",
//   "SEO",
//   "Ant Design",
//   "Material UI",
//   "API Dev",
// ];

// const Hero = () => {
//   return (
//     <section className="relative min-h-screen bg-[#051814] overflow-hidden pt-24 md:pt-32 pb-16 md:pb-20 flex items-center">
//       {/* Background Glow Effects */}
//       <div className="absolute top-[-10%] left-[-10%] w-[70%] md:w-[50%] h-[50%] bg-emerald-500/15 blur-[100px] md:blur-[120px] rounded-full pointer-events-none" />
//       <div className="absolute bottom-[-10%] right-[-10%] w-[60%] md:w-[40%] h-[40%] bg-teal-500/10 blur-[80px] md:blur-[100px] rounded-full pointer-events-none" />

//       {/* Subtle Grid Background */}
//       <div
//         className="absolute inset-0 opacity-10 pointer-events-none"
//         style={{
//           backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
//           backgroundSize: "3rem 3rem",
//           maskImage:
//             "radial-gradient(circle at center, black 30%, transparent 80%)",
//           WebkitMaskImage:
//             "radial-gradient(circle at center, black 30%, transparent 80%)",
//         }}
//       />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10 w-full">
//         {/* Left Text */}
//         <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
//           <FadeIn>
//             <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-xs sm:text-sm font-medium mb-6 backdrop-blur-sm">
//               <Sparkles size={16} />
//               <span>Full-Stack Solutions for Scale</span>
//             </div>
//             <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] md:leading-[1.1] mb-6 tracking-tight">
//               I build websites that <br className="hidden sm:block" />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
//                 sell for you.
//               </span>
//             </h1>
//           </FadeIn>

//           <FadeIn delay={0.2}>
//             <p className="text-gray-400 text-base sm:text-lg md:text-xl mb-8 md:mb-10 max-w-md mx-auto lg:mx-0 leading-relaxed">
//               Full-Stack Architect specializing in high-performance{" "}
//               <span className="text-white">Next.js</span> frontends, robust{" "}
//               <span className="text-white">Node/Express</span> backends, and
//               scalable <span className="text-white">SQL/NoSQL</span> databases
//               that drive real business growth.
//             </p>
//           </FadeIn>

//           <FadeIn
//             delay={0.4}
//             className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
//           >
//             <Button
//               variant="primary"
//               className="w-full sm:w-auto shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-shadow"
//             >
//               Let's Build Something
//             </Button>
//             <Button
//               variant="outline"
//               className="w-full sm:w-auto hover:bg-white/5 border-white/20 text-white"
//             >
//               View My Work
//             </Button>
//           </FadeIn>

//           {/* AUTO-SLIDER TECH STACK */}
//           <FadeIn
//             delay={0.6}
//             className="mt-16 md:mt-20 overflow-hidden relative"
//           >
//             <p className="text-xs sm:text-sm text-gray-500 font-medium tracking-wider uppercase mb-6">
//               Expertise in Modern Stack
//             </p>

//             {/* Masking for smooth fade on edges */}
//             <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
//               <motion.div
//                 className="flex gap-8 items-center whitespace-nowrap"
//                 animate={{ x: [0, -1035] }} // Adjust this value based on total width
//                 transition={{
//                   x: {
//                     repeat: Infinity,
//                     repeatType: "loop",
//                     duration: 25, // Speed control
//                     ease: "linear",
//                   },
//                 }}
//               >
//                 {/* Rendering tech stack twice for seamless loop */}
//                 {[...TECH_STACK, ...TECH_STACK].map((tech, idx) => (
//                   <span
//                     key={idx}
//                     className="text-white/60 font-semibold text-lg hover:text-emerald-400 transition-colors cursor-default"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </motion.div>
//             </div>
//           </FadeIn>
//         </div>

//         {/* Right Image & Floating Elements */}
//         <div className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] w-full max-w-md sm:max-w-lg mx-auto lg:ml-auto mt-12 lg:mt-0 block">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 1, ease: "easeOut" }}
//             className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 bg-[#1A332E]/50"
//           >
//             <div className="absolute inset-0 bg-gradient-to-t from-[#051814] via-transparent to-transparent z-10 opacity-80" />
//             <img
//               src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800"
//               alt="Workspace with code on screen"
//               className="w-full h-full object-cover object-center"
//             />
//           </motion.div>

//           {/* Floating Cards */}
//           <motion.div
//             animate={{ y: [0, -10, 0] }}
//             transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
//             className="absolute top-[10%] -left-2 sm:-left-8 md:-left-12 bg-[#0a241d]/90 backdrop-blur-xl border border-white/10 p-3 sm:p-4 rounded-xl sm:rounded-2xl flex items-center gap-3 sm:gap-4 shadow-[0_8px_32px_rgba(16,185,129,0.15)] z-20 scale-90 sm:scale-100 origin-left"
//           >
//             <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 p-2 sm:p-3 rounded-lg sm:rounded-xl text-white shadow-inner">
//               <Code size={16} className="sm:w-5 sm:h-5" />
//             </div>
//             <div className="text-left">
//               <p className="text-white font-semibold text-xs sm:text-sm">
//                 100% Quality
//               </p>
//               <p className="text-gray-400 text-[10px] sm:text-xs">
//                 Performance Optimized
//               </p>
//             </div>
//           </motion.div>

//           <motion.div
//             animate={{ y: [0, 10, 0] }}
//             transition={{
//               repeat: Infinity,
//               duration: 5,
//               ease: "easeInOut",
//               delay: 1,
//             }}
//             className="absolute bottom-[10%] -left-2 sm:-left-12 md:-left-16 lg:-left-20 bg-[#0a241d]/90 backdrop-blur-xl border border-white/10 p-4 sm:p-5 rounded-xl sm:rounded-2xl shadow-[0_8px_32px_rgba(16,185,129,0.15)] z-20 scale-90 sm:scale-100 origin-left"
//           >
//             <p className="text-gray-400 text-[10px] sm:text-xs uppercase tracking-wider font-semibold mb-2 sm:mb-3 text-left">
//               Delivery Speed
//             </p>
//             <div className="flex items-center gap-3 sm:gap-4">
//               <div className="bg-emerald-500/20 p-2 sm:p-3 rounded-lg sm:rounded-xl text-emerald-400 border border-emerald-500/20">
//                 <Rocket size={20} className="sm:w-6 sm:h-6" />
//               </div>
//               <div className="text-left">
//                 <span className="text-white font-bold text-xl sm:text-2xl">
//                   Fast
//                 </span>
//                 <p className="text-emerald-400 text-xs sm:text-sm font-medium">
//                   Go-To Market
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
"use client";

import Button from "@/utils/Button";
import FadeIn from "@/utils/Common";
import { motion } from "framer-motion";
import { Code, Rocket, Sparkles } from "lucide-react";

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
    <section className="relative w-full min-h-screen bg-[#051814] overflow-hidden overflow-x-hidden pt-24 md:pt-33 pb-16 md:pb-20 flex items-center">
      {/* Background Glow Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[70%] md:w-[50%] h-[50%] bg-emerald-500/15 blur-[100px] md:blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] md:w-[40%] h-[40%] bg-teal-500/10 blur-[80px] md:blur-[100px] rounded-full pointer-events-none" />

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
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Text Content - Updated for Centered Alignment on Mobile */}
        <div className="w-full flex flex-col items-center text-center lg:items-start lg:text-left max-w-xl mx-auto lg:mx-0">
          <FadeIn className="w-full flex flex-col items-center lg:items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-xs sm:text-sm font-medium mb-6 backdrop-blur-sm w-max">
              <Sparkles size={16} />
              <span>Full-Stack Solutions for Scale</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.2] md:leading-[1.1] mb-6 tracking-tight break-words w-full">
              I build websites that <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
                sell for you.
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2} className="w-full">
            <p className="text-gray-400 text-base sm:text-lg md:text-xl mb-8 md:mb-10 w-full max-w-md mx-auto lg:mx-0 leading-relaxed">
              Full-Stack Architect specializing in high-performance{" "}
              <span className="text-white">Next.js</span> frontends, robust{" "}
              <span className="text-white">Node/Express</span> backends, and
              scalable <span className="text-white">SQL/NoSQL</span> databases
              that drive real business growth.
            </p>
          </FadeIn>

          <FadeIn
            delay={0.4}
            className="w-full flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <Button
              variant="primary"
              className="w-full sm:w-max shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-shadow flex justify-center"
            >
              Let's Build Something
            </Button>
            <Button
              variant="outline"
              className="w-full sm:w-max hover:bg-white/5 border-white/20 text-white flex justify-center"
            >
              View My Work
            </Button>
          </FadeIn>

          {/* AUTO-SLIDER TECH STACK */}
          <FadeIn
            delay={0.6}
            className="mt-12 sm:mt-16 w-full overflow-hidden relative"
          >
            <p className="text-xs sm:text-sm text-gray-500 font-medium tracking-wider uppercase mb-6 text-center lg:text-left">
              Expertise in Modern Stack
            </p>

            <div className="relative w-full max-w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <motion.div
                className="flex gap-8 items-center w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
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
          </FadeIn>
        </div>

        {/* Right Image & Floating Elements */}
        <div className="relative h-[350px] sm:h-[450px] md:h-[500px] lg:h-[600px] w-full max-w-[90%] sm:max-w-lg mx-auto lg:ml-auto mt-12 lg:mt-0 block">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 bg-[#1A332E]/50"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#051814] via-transparent to-transparent z-10 opacity-80" />
            <img
              src="https://images.unsplash.com/photo-1597239450996-ea7c2c564412?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8MXwwfHx8MA%3D%3D"
              alt="Workspace with code on screen"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute top-[10%] left-[5%] sm:-left-8 md:-left-12 bg-[#0a241d]/90 backdrop-blur-xl border border-white/10 p-3 sm:p-4 rounded-xl sm:rounded-2xl flex items-center gap-3 sm:gap-4 shadow-[0_8px_32px_rgba(16,185,129,0.15)] z-20 scale-90 sm:scale-100 origin-left"
          >
            <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 p-2 sm:p-3 rounded-lg sm:rounded-xl text-white shadow-inner">
              <Code size={16} className="sm:w-5 sm:h-5" />
            </div>
            <div className="text-left">
              <p className="text-white font-semibold text-xs sm:text-sm">
                100% Quality
              </p>
              <p className="text-gray-400 text-[10px] sm:text-xs">
                Performance Optimized
              </p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-[10%] left-[5%] sm:-left-12 md:-left-16 lg:-left-20 bg-[#0a241d]/90 backdrop-blur-xl border border-white/10 p-3 sm:p-5 rounded-xl sm:rounded-2xl shadow-[0_8px_32px_rgba(16,185,129,0.15)] z-20 scale-90 sm:scale-100 origin-left"
          >
            <p className="text-gray-400 text-[10px] sm:text-xs uppercase tracking-wider font-semibold mb-1 sm:mb-3 text-left">
              Delivery Speed
            </p>
            <div className="flex items-center gap-2 sm:gap-4">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
