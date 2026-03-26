// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Diamond, Menu, X } from "lucide-react";
// import { AnimatePresence, motion } from "framer-motion";
// import Button from "@/utils/Button";

// const NAV_LINKS = [
//   { name: "Home", path: "/" },
//   { name: "Work", path: "/work" },
//   { name: "About", path: "/about" },
//   { name: "Services", path: "/services" },
// ];

// // --- UPDATE: Right Side Drawer Animation ---
// const menuVariants = {
//   initial: {
//     x: "100%", // Start entirely off-screen to the right
//     opacity: 1,
//   },
//   animate: {
//     x: 0, // Slide in to the right edge
//     opacity: 1,
//     transition: {
//       duration: 0.4,
//       ease: [0.16, 1, 0.3, 1], // Custom smooth easing
//     },
//   },
//   exit: {
//     x: "100%", // Slide back out to the right
//     opacity: 1,
//     transition: {
//       duration: 0.3,
//       ease: [0.7, 0, 0.84, 0],
//     },
//   },
// };

// // Overlay animation for the dark background
// const overlayVariants = {
//   initial: { opacity: 0 },
//   animate: { opacity: 1, transition: { duration: 0.3 } },
//   exit: { opacity: 0, transition: { duration: 0.3 } },
// };

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     setIsOpen(false);
//   }, [pathname]);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }
//   }, [isOpen]);

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         scrolled
//           ? "bg-[#051814]/80 backdrop-blur-xl py-4 shadow-[inset_0_-1px_0_0_rgba(255,255,255,0.05),0_10px_20px_-10px_rgba(0,0,0,0.3)]"
//           : "bg-transparent py-6 shadow-none"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between relative">
//         {/* Logo */}
//         <Link
//           href="/"
//           className="flex items-center gap-2 text-white font-bold text-xl sm:text-2xl cursor-pointer z-[60]"
//         >
//           <div className="relative flex items-center justify-center">
//             <div className="absolute inset-0 bg-emerald-500/40 blur-[10px] rounded-full" />
//             <Diamond
//               className="text-emerald-400 fill-emerald-500/20 relative z-10"
//               size={24}
//             />
//           </div>
//           <span className="tracking-tight">Upreach</span>
//         </Link>

//         {/* Desktop Links */}
//         <div className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-2 py-1.5 backdrop-blur-md">
//           {NAV_LINKS.map((link) => {
//             const isActive = pathname === link.path;
//             return (
//               <Link
//                 key={link.name}
//                 href={link.path}
//                 className={`px-4 py-2 text-[16px] font-medium rounded-full transition-all ${
//                   isActive
//                     ? "text-white bg-white/10"
//                     : "text-gray-300 hover:text-white hover:bg-white/10"
//                 }`}
//               >
//                 {link.name}
//               </Link>
//             );
//           })}
//         </div>

//         {/* Desktop CTA */}
//         <div className="hidden md:block z-50">
//           <Link href="/contact">
//             <Button
//               variant="primary"
//               className="py-2.5 px-7 text-[18px] font-medium font-satoshi text-[#0A0A0A] cursor-pointer shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all duration-300"
//             >
//               Contact us
//             </Button>
//           </Link>
//         </div>

//         {/* Mobile Toggle Button */}
//         {/* UPDATE: Increased z-index to stay above the drawer */}
//         <button
//           className="md:hidden relative z-[60] p-2 text-gray-300 focus:outline-none"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Menu Dropdown (Right Drawer) */}
//       <AnimatePresence mode="wait">
//         {isOpen && (
//           <>
//             {/* Background Dark Overlay */}
//             <motion.div
//               variants={overlayVariants}
//               initial="initial"
//               animate="animate"
//               exit="exit"
//               onClick={() => setIsOpen(false)}
//               className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
//             />

//             {/* The Actual Right Drawer */}
//             <motion.div
// // @ts-ignore
// variants={menuVariants as any}
//               initial="initial"
//               animate="animate"
//               exit="exit"
//               className="fixed top-0 right-0 h-screen w-[80vw] max-w-[320px] bg-[#030A0A] border-l border-white/10 shadow-[-20px_0_40px_rgba(0,0,0,0.5)] md:hidden z-50 pt-24 px-6 flex flex-col"
//             >
//               <div className="flex flex-col gap-3">
//                 {NAV_LINKS.map((link) => {
//                   const isActive = pathname === link.path;
//                   return (
//                     <Link
//                       key={link.name}
//                       href={link.path}
//                       className={`p-4 text-xl font-medium rounded-2xl transition-all ${
//                         isActive
//                           ? "text-emerald-400 bg-emerald-500/10"
//                           : "text-gray-300 hover:text-emerald-400 hover:bg-white/5"
//                       }`}
//                     >
//                       {link.name}
//                     </Link>
//                   );
//                 })}
//               </div>

//               <div className="mt-auto mb-10 w-full">
//                 <Link href="/contact" className="block w-full">
//                   <Button
//                     variant="primary"
//                     className="w-full py-4 text-lg text-[#0A0A0A] shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all duration-300"
//                   >
//                     Contact us
//                   </Button>
//                 </Link>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// export default Navbar;
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Diamond, Menu, X, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "@/utils/Button";

const NAV_LINKS = [
  { name: "Home", path: "/", num: "01" },
  { name: "Work", path: "/work", num: "02" },
  { name: "About", path: "/about", num: "03" },
  { name: "Services", path: "/services", num: "04" },
];

// --- ANIMATIONS ---
const overlayVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const drawerVariants = {
  initial: { x: "100%" },
  animate: {
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    x: "100%",
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

const containerVariants = {
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#051814]/80 backdrop-blur-xl py-4 shadow-[inset_0_-1px_0_0_rgba(255,255,255,0.05),0_10px_20px_-10px_rgba(0,0,0,0.3)]"
          : "bg-transparent py-6 shadow-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between relative">
        {/* Main Navbar Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-white font-bold text-xl sm:text-2xl cursor-pointer relative z-50"
        >
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-emerald-500/40 blur-[10px] rounded-full" />
            <Diamond
              className="text-emerald-400 fill-emerald-500/20 relative z-10"
              size={24}
            />
          </div>
          <span className="tracking-tight">Upreach</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-2 py-1.5 backdrop-blur-md relative z-50">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`px-4 py-2 text-[16px] font-medium rounded-full transition-all ${
                  isActive
                    ? "text-white bg-white/10"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block relative z-50">
          <Link href="/contact">
            <Button
              variant="primary"
              className="py-2.5 px-7 text-[18px] font-medium font-satoshi text-[#0A0A0A] cursor-pointer shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all duration-300"
            >
              Contact us
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden relative z-[80] p-2 text-gray-300 focus:outline-none hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown (Right Drawer) */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <>
            {/* Background Dark Overlay */}
            <motion.div
              variants={overlayVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-[60] md:hidden"
            />

            {/* The Actual Right Drawer */}
            <motion.div
              // @ts-ignore
              variants={drawerVariants as any}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed top-0 right-0 h-[100dvh] w-[85vw] max-w-[340px] bg-[#030A0A]/95 backdrop-blur-2xl border-l border-white/5 shadow-[-20px_0_40px_rgba(0,0,0,0.5)] md:hidden z-[70] flex flex-col"
            >
              {/* FIX: Inner Drawer Logo at Top Left */}
              <div className="h-24 shrink-0 flex items-center px-6 mt-2">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 text-white font-bold text-xl cursor-pointer"
                >
                  <div className="relative flex items-center justify-center">
                    <div className="absolute inset-0 bg-emerald-500/40 blur-[10px] rounded-full" />
                    <Diamond
                      className="text-emerald-400 fill-emerald-500/20 relative z-10"
                      size={22}
                    />
                  </div>
                  <span className="tracking-tight">Upreach</span>
                </Link>
              </div>

              {/* Scrollable Links Section */}
              <motion.div
                variants={containerVariants}
                initial="initial"
                animate="animate"
                className="flex-1 overflow-y-auto px-6 flex flex-col gap-2"
              >
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.path;
                  return (
                    <motion.div key={link.name} variants={itemVariants}>
                      <Link
                        href={link.path}
                        className={`group flex items-center justify-between p-4 rounded-2xl transition-all duration-300 ${
                          isActive
                            ? "bg-emerald-500/10 border border-emerald-500/20"
                            : "hover:bg-white/5 border border-transparent"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <span
                            className={`text-xl font-medium ${
                              isActive
                                ? "text-white"
                                : "text-gray-300 group-hover:text-white"
                            }`}
                          >
                            {link.name}
                          </span>
                        </div>
                        {isActive && (
                          <ArrowUpRight
                            size={20}
                            className="text-emerald-400"
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Bottom CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="p-6 pb-12 mt-auto border-t border-white/10 shrink-0"
              >
                <p className="text-gray-400 text-sm mb-4 px-2">
                  Have an idea? Let's build it together.
                </p>
                <Link href="/contact" className="block w-full">
                  <Button
                    variant="primary"
                    className="w-full py-4 text-lg font-bold text-[#0A0A0A] shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Contact us <ArrowUpRight size={20} />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
