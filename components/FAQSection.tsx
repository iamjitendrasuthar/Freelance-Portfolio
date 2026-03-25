import FadeIn from "@/utils/Common";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    {
      q: "Can I be actively involved in the design process?",
      a: "Yes, we encourage collaboration. Your input ensures the final result truly reflects your style and needs.",
    },
    {
      q: "What materials do you usually use for outdoor spaces?",
      a: "We prioritize durable, weather-resistant materials like natural stone, composite decking, and locally sourced timber.",
    },
    {
      q: "How do I begin a new home project with your team?",
      a: "Simply reach out via our contact form to schedule an initial consultation where we'll discuss your vision and budget.",
    },
    {
      q: "Do you offer post-construction maintenance?",
      a: "We provide detailed care guides for all materials used and offer optional seasonal maintenance packages for outdoor spaces.",
    },
  ];

  return (
    <section className="py-24 lg:py-32">
      {/* ✅ HERO MATCHED WIDTH: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Side: Header (Sticky on Desktop) */}
          <div className="lg:col-span-5">
            <FadeIn className="lg:sticky lg:top-32">
              <span className="bg-white/5 border border-white/10 text-neutral-400 px-4 py-1.5 rounded-full text-sm font-medium uppercase tracking-widest mb-6 inline-block">
                FAQs
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight mb-8 tracking-tight">
                Frequently <br /> asked{" "}
                <span className="text-neutral-500 italic font-serif">
                  questions
                </span>
              </h2>
              <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">
                Find helpful answers about our services, detailed process, and
                bringing your vision to life.
              </p>
            </FadeIn>
          </div>

          {/* Right Side: Accordions */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div
                  className={`group rounded-[32px] border transition-all duration-500 cursor-pointer overflow-hidden ${
                    openIdx === i
                      ? "bg-[#141414] border-white/20"
                      : "bg-[#1f1f1f] border-white/5 hover:border-white/10"
                  }`}
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                >
                  <div className="px-8 py-7 flex justify-between items-center gap-4">
                    <h4
                      className={`text-xl font-medium transition-colors duration-300 ${openIdx === i ? "text-white" : "text-neutral-300 group-hover:text-white"}`}
                    >
                      {faq.q}
                    </h4>
                    <div
                      className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0 transition-all duration-500 ${openIdx === i ? "bg-white text-black rotate-180" : "text-neutral-500"}`}
                    >
                      <ChevronDown size={18} />
                    </div>
                  </div>

                  <AnimatePresence>
                    {openIdx === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.4,
                          ease: [0.21, 0.45, 0.32, 0.9],
                        }}
                      >
                        <div className="px-8 pb-8 text-neutral-400 text-lg leading-relaxed border-t border-white/5 pt-4 mx-2">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
