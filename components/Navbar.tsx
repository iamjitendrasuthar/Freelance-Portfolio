"use client";

import { useEffect, useState } from "react";
import { Diamond, Menu, X, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "@/utils/Button"; // Ensure this path is correct based on your setup

const NAV_LINKS = ["Services", "Work", "Testimonials", "About", "Blog"];

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
      // FIXED HERE: Removed 'border-b' entirely and replaced with an 'inset' box shadow for the border effect
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#051814]/80 backdrop-blur-xl py-4 shadow-[inset_0_-1px_0_0_rgba(255,255,255,0.05),0_10px_20px_-10px_rgba(0,0,0,0.3)]"
          : "bg-transparent py-6 shadow-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between relative">
        {/* Logo */}
        <div className="flex items-center gap-2 text-white font-bold text-xl sm:text-2xl cursor-pointer z-50">
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-emerald-500/40 blur-[10px] rounded-full" />
            <Diamond
              className="text-emerald-400 fill-emerald-500/20 relative z-10"
              size={24}
            />
          </div>
          <span className="tracking-tight">Upreach</span>
        </div>

        {/* Desktop Links (Floating Pill Design) */}
        <div className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-2 py-1.5 backdrop-blur-md">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block z-50">
          <Button
            variant="primary"
            className="py-2 px-6 text-sm shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-shadow"
          >
            Contact us
          </Button>
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
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            // Added shadow-inner here to match the border effect on the dropdown
            className="absolute top-full left-0 right-0 bg-[#051814]/95 backdrop-blur-2xl shadow-[inset_0_-1px_0_0_rgba(255,255,255,0.05)] md:hidden h-[100vh] overflow-y-auto pb-32"
          >
            <div className="px-4 py-6 flex flex-col gap-2">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.3 }}
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="flex items-center justify-between p-4 text-lg font-medium text-gray-300 hover:text-emerald-400 hover:bg-white/5 rounded-2xl transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                  <ChevronRight size={18} className="opacity-40" />
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.1, duration: 0.3 }}
                className="mt-8 px-2"
              >
                <Button
                  variant="primary"
                  className="w-full justify-center py-4 text-base font-semibold shadow-lg shadow-emerald-500/20"
                >
                  Contact us
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
