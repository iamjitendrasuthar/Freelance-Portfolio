"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Diamond, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "@/utils/Button"; // Aapka button component

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Work", path: "/work" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
];

// Mobile GPU par smooth chalne ke liye optimized variants
const menuVariants = {
  initial: { opacity: 0, y: -20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -15,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Route change hone par menu band karne ke liye
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Scroll handle karne ke liye (passive: true for mobile performance)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Layout thrashing rokne ke liye chhota delay
  useEffect(() => {
    let timeoutId;
    if (isOpen) {
      timeoutId = setTimeout(() => {
        document.body.style.overflow = "hidden";
      }, 50);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => clearTimeout(timeoutId);
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        // Padding sirf scroll ke base par change hogi, open hone par nahi
        scrolled ? "py-4" : "py-6"
      } ${
        // Background color aur shadow logic
        isOpen
          ? "bg-[#051814]" // Jab menu open ho toh solid background (taaki blur ka lag na aaye)
          : scrolled
            ? "bg-[#051814]/80 backdrop-blur-xl shadow-[inset_0_-1px_0_0_rgba(255,255,255,0.05),0_10px_20px_-10px_rgba(0,0,0,0.3)]"
            : "bg-transparent shadow-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between relative">
        {/* Logo */}
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
              className="py-2.5 px-7 text-[18px] font-medium font-satoshi text-[#0A0A0A] cursor-pointer"
            >
              Contact us
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden relative z-50 p-2 text-gray-300 touch-manipulation"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute top-0 left-0 right-0 bg-[#051814] md:hidden h-screen z-40 pt-24 will-change-transform"
          >
            <div className="px-4 py-6 flex flex-col gap-2">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.path;

                return (
                  <Link
                    key={link.name}
                    href={link.path}
                    onClick={() => setIsOpen(false)} // Link click par menu close karna
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
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button
                    variant="primary"
                    className="w-full py-4 text-[#0A0A0A]"
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
