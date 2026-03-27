"use client";

import Link from "next/link";
import Button from "@/utils/Button";
import { Diamond, ArrowRight, Mail } from "lucide-react";
import toast from "react-hot-toast";

// Custom Brand Icons
const TwitterIcon = ({ size = 20, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const GithubIcon = ({ size = 20, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-0.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 20, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// FIX: Structured Footer Links to match Navbar routes
const FOOTER_LINKS = {
  navigation: [
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
  ],
  support: [
    { name: "Contact Us", path: "/contact" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms of Service", path: "/terms" },
  ],
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#051814] text-white pt-20 pb-8 relative border-t border-white/5">
      {/* Background Glows (GPU Accelerated) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
        <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/5 blur-[120px] rounded-full transform-gpu" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-6 pr-0 lg:pr-12">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 text-white font-bold text-2xl mb-8 cursor-pointer w-fit"
            >
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 bg-emerald-500/40 blur-[10px] rounded-full transform-gpu" />
                <Diamond
                  className="text-emerald-400 fill-emerald-500/20 relative z-10"
                  size={28}
                />
              </div>
              <span className="tracking-tight">
                Suthar
                <span className="text-emerald-400 text-xl md:text-3xl font-semibold px-1">
                  X
                </span>
              </span>{" "}
            </Link>

            <h4 className="text-xl sm:text-2xl font-bold mb-4 tracking-tight">
              Stay Connected & Informed
            </h4>
            <p className="text-gray-400 mb-8 max-w-md leading-relaxed text-sm sm:text-base">
              Subscribe to my newsletter for the latest tech insights,
              development trends, and proven strategies to scale your product.
            </p>

            {/* Newsletter Input */}
            <form
              className="flex flex-col sm:flex-row gap-3 max-w-md"
              onSubmit={(e) => {
                e.preventDefault();

                const email = e.target[0].value;
                console.log(email);
                if (!email) {
                  toast.error("Please enter a valid email");
                  return;
                }

                // success toast
                toast.success("🎉 Subscribed successfully!");

                e.target.reset(); // clear input
              }}
            >
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="newsletter-input w-full bg-white/5 border border-white/10 rounded-xl sm:rounded-full pl-11 pr-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                />
              </div>
              <Button
                variant="primary"
                className="whitespace-nowrap py-3.5 px-6 rounded-xl sm:rounded-full flex items-center justify-center gap-2"
              >
                Subscribe <ArrowRight size={16} />
              </Button>
            </form>
          </div>

          {/* Spacer for Desktop */}
          <div className="hidden lg:block lg:col-span-2"></div>

          {/* Quick Links (Mapped from FOOTER_LINKS) */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-lg mb-6 text-white tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-4 text-gray-400">
              {FOOTER_LINKS.navigation.map((link) => (
                <li key={link.name}>
                  {/* FIX: Replaced <a> with Next.js <Link> */}
                  <Link
                    href={link.path}
                    className="hover:text-emerald-400 hover:translate-x-1 inline-block transition-all duration-300 text-sm sm:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support / Company Links */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-lg mb-6 text-white tracking-wide">
              Support
            </h4>
            <ul className="space-y-4 text-gray-400">
              {FOOTER_LINKS.support.map((link) => (
                <li key={link.name}>
                  {/* FIX: Replaced <a> with Next.js <Link> */}
                  <Link
                    href={link.path}
                    className="hover:text-emerald-400 hover:translate-x-1 inline-block transition-all duration-300 text-sm sm:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-500">
          <p>Copyright © {currentYear} SutharX. All Rights Reserved.</p>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-emerald-400 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href="https://linkedin.com/in/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-emerald-400 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href="https://twitter.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-emerald-400 transition-colors"
              aria-label="Twitter"
            >
              <TwitterIcon size={20} />
            </a>
          </div>

          <p className="flex items-center gap-1">
            Created by{" "}
            <span className="text-gray-300 font-medium hover:text-emerald-400 transition-colors cursor-pointer">
              Jitendra
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
