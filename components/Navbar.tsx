"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Pathname check karne ke liye
import { Diamond, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "@/utils/Button";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Work", path: "/work" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
];

// --- Animations remains same ---
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
  const pathname = usePathname(); // Current path track karega

  // 1. Jab bhi pathname change ho (page change ho jaye), tab menu close karein
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
        <div className="hidden md:block z-50">
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
          className="md:hidden relative z-50 p-2 text-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            // @ts-ignore
            variants={menuVariants as any}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute top-0 left-0 right-0 bg-[#051814] md:hidden h-screen z-40 pt-24"
          >
            <div className="px-4 py-6 flex flex-col gap-2">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.path;

                return (
                  <Link
                    key={link.name}
                    href={link.path}
                    className={`p-4 text-lg font-medium rounded-2xl transition-all ${
                      isActive
                        ? "text-emerald-400 bg-white/5"
                        : "text-gray-300 hover:text-emerald-400"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <div className="mt-8 px-2">
                <Link href="/contact">
                  <Button
                    variant="primary"
                    className="w-full py-4 text-[#0A0A0A] shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all duration-300"
                  >
                    Contact us
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
