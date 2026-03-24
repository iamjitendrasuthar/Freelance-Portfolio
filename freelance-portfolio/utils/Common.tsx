"use client";

import { motion, AnimatePresence } from "framer-motion";

const THEME = {
  darkBg: "#051814", // Very dark green/black
  primary: "#10B981", // Emerald 500
  lightBg: "#F9FAFB",
};

// --- Reusable Components ---

const FadeIn = ({ children, delay = 0, className = "", direction = "up" }) => {
  const yOffset = direction === "up" ? 30 : direction === "down" ? -30 : 0;
  const xOffset = direction === "left" ? 30 : direction === "right" ? -30 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset, x: xOffset }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
