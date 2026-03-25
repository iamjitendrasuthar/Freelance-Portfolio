"use client";

import { useEffect, useState } from "react";
import Link from "next/link"; // Next.js Link import kiya gaya hai
import { Diamond, Menu, X, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "@/utils/Button"; // Ensure this path is correct

// 1. Array ko update karke Name aur Path dono define kiye
const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Work", path: "/work" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
];

const menuVariants = {
  initial: { opacity: 0, y: -15 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -15,
    transition: {
      duration: 0.2,
      ease: "easeIn",
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const linkVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.1 } },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
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
        {/* Logo (Bonus: Isko bhi Link bana diya taaki click karne pe Home par jaye) */}
        <Link
          href="/"
          className="flex items-center gap-2 text-white font-bold text-xl sm:text-2xl cursor-pointer z-50"
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
        <div className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-2 py-1.5 backdrop-blur-md">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.path} // Yahan standard <a> ki jagah Next.js Link use kiya gaya hai
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block z-50">
          <Link href="/contact">
            <Button
              variant="primary"
              className="py-2 px-6 text-sm shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-shadow cursor-pointer"
            >
              Contact us
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden relative z-50 p-2 -mr-2 text-gray-300 hover:text-white transition-colors rounded-full hover:bg-white/5 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute top-full left-0 right-0 bg-[#051814]/95 backdrop-blur-2xl shadow-[inset_0_-1px_0_0_rgba(255,255,255,0.05)] md:hidden h-[100vh] overflow-y-auto pb-32"
          >
            <div className="px-4 py-6 flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <motion.div variants={linkVariants} key={link.name}>
                  {/* <Link> component inside framer-motion */}
                  <Link
                    href={link.path}
                    className="flex items-center justify-between p-4 text-lg font-medium text-gray-300 hover:text-emerald-400 hover:bg-white/5 rounded-2xl transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                    <ChevronRight size={18} className="opacity-40" />
                  </Link>
                </motion.div>
              ))}

              <motion.div variants={linkVariants} className="mt-8 px-2">
                <Link href="/contact">
                  <Button
                    variant="primary"
                    className="w-full justify-center py-4 text-base font-semibold shadow-lg shadow-emerald-500/20"
                  >
                    Contact us
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
