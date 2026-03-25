"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";

const FAQItem = ({ faq, isOpen, onClick }) => {
  return (
    <div
      className={`border-b border-gray-100 last:border-none transition-all duration-500 ${
        isOpen
          ? "bg-emerald-50/40 rounded-2xl border-transparent my-2"
          : "hover:bg-gray-50/50"
      }`}
    >
      <button
        onClick={onClick}
        aria-expanded={isOpen}
        className="w-full text-left py-5 px-4 sm:px-6 flex items-center justify-between gap-4 focus:outline-none group"
      >
        <span
          className={`text-base sm:text-lg font-semibold transition-colors duration-300 ${
            isOpen
              ? "text-emerald-800"
              : "text-gray-900 group-hover:text-emerald-600"
          }`}
        >
          {faq.q}
        </span>

        {/* Animated Icon Container */}
        <div
          className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-500 shadow-sm ${
            isOpen
              ? "bg-emerald-500 text-white rotate-180 shadow-emerald-200"
              : "bg-white text-gray-400 group-hover:bg-emerald-50 group-hover:text-emerald-500"
          }`}
        >
          {isOpen ? (
            <Minus size={18} strokeWidth={2.5} />
          ) : (
            <Plus size={18} strokeWidth={2.5} />
          )}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.4,
              ease: [0.21, 0.45, 0.32, 0.9],
            }}
            className="overflow-hidden"
          >
            <div className="pb-6 px-4 sm:px-6 text-gray-600 text-sm sm:text-base leading-relaxed border-t border-emerald-100/50 pt-2 mx-4 sm:mx-6 mt-1">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQItem;
