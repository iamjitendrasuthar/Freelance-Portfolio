"use client";

import { useState } from "react";
import FadeIn from "@/utils/Common";
import { Mail, MapPin, Send, MessageSquare } from "lucide-react";
import { TwitterIcon, GithubIcon, LinkedinIcon } from "@/utils/Icons";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Yahan aap apna API/EmailJS logic laga sakte hain
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message sent successfully!");
    }, 2000);
  };

  const SOCIAL_LINKS = [
    { icon: GithubIcon, href: "https://github.com", label: "GitHub" },
    { icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: TwitterIcon, href: "https://twitter.com", label: "Twitter" },
  ];

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen bg-[#051814] py-24 md:py-32 flex items-center pt-28 md:pt-40"
    >
      {/* FIX: Background elements wrap inside an absolute inset container with overflow-hidden.
        This prevents scroll flickering and white space issues on mobile.
      */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Background Glows with transform-gpu for smooth rendering */}
        <div className="absolute top-[-10%] right-[-5%] w-[60%] md:w-[40%] h-[50%] bg-emerald-500/10 blur-[100px] md:blur-[120px] rounded-full transform-gpu" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] md:w-[40%] h-[40%] bg-teal-500/10 blur-[80px] md:blur-[100px] rounded-full transform-gpu" />

        {/* Subtle Grid */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: "3rem 3rem",
            maskImage:
              "radial-gradient(circle at center, black 40%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black 40%, transparent 80%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10">
        {/* Mobile Header (Only visible on Mobile, hidden on Desktop) */}
        <div className="block lg:hidden text-center mb-10 w-full">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold mb-6 tracking-widest uppercase w-max">
              <MessageSquare size={14} />
              <span>Get In Touch</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-4">
              Let's build something <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
                amazing together.
              </span>
            </h2>
            <p className="text-gray-400 text-base max-w-md mx-auto leading-relaxed">
              Have a freelance project in mind or want to discuss scaling your
              current architecture? Drop a message.
            </p>
          </FadeIn>
        </div>

        {/* Main Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Side / Contact Info (Order 2 on Mobile, Order 1 on Desktop) */}
          <div className="flex flex-col w-full text-center lg:text-left items-center lg:items-start order-2 lg:order-1">
            {/* Desktop Header (Hidden on Mobile) */}
            <div className="hidden lg:block">
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold mb-6 tracking-widest uppercase w-max">
                  <MessageSquare size={14} />
                  <span>Get In Touch</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                  Let's build something <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
                    amazing together.
                  </span>
                </h2>
                <p className="text-gray-400 text-lg max-w-md mb-10 leading-relaxed">
                  Have a freelance project in mind or want to discuss scaling
                  your current architecture? Drop a message and let's talk tech.
                </p>
              </FadeIn>
            </div>

            <FadeIn
              delay={0.2}
              className="w-full flex flex-col gap-6 max-w-md mx-auto lg:mx-0 lg:mt-0"
            >
              {/* Email Card */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-emerald-500/30 transition-colors group">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-gray-400">
                    Email Me At
                  </p>
                  <a
                    href="mailto:hello@yourdomain.com"
                    className="text-white font-semibold hover:text-emerald-400 transition-colors"
                  >
                    hello@yourdomain.com
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-emerald-500/30 transition-colors group">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  <MapPin size={20} />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-gray-400">Based In</p>
                  <p className="text-white font-semibold">Jalore, Rajasthan</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 mt-4 justify-center lg:justify-start">
                {SOCIAL_LINKS.map(({ icon: Icon, href, label }, idx) => (
                  <a
                    key={idx}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-gray-400 border border-white/5 hover:border-emerald-500/50 hover:text-emerald-400 transition-all hover:-translate-y-1"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right Side - Form (Order 1 on Mobile, Order 2 on Desktop) */}
          <FadeIn delay={0.3} className="w-full order-1 lg:order-2">
            <div className="bg-[#0a241d]/80 backdrop-blur-xl border border-white/10 p-6 sm:p-8 md:p-10 rounded-[2rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-400" />

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 ml-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jitendra suthar"
                      className="w-full bg-[#051814]/50 border border-white/10 rounded-xl px-4 py-3 sm:py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 ml-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jitendra@example.com"
                      className="w-full bg-[#051814]/50 border border-white/10 rounded-xl px-4 py-3 sm:py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 ml-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Freelance Project Inquiry"
                    className="w-full bg-[#051814]/50 border border-white/10 rounded-xl px-4 py-3 sm:py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 ml-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 9521984551"
                    className="w-full bg-[#051814]/50 border border-white/10 rounded-xl px-4 py-3 sm:py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                  />
                </div>

                {/* Message Input */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 ml-1">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your project, timeline, and goals..."
                    className="w-full bg-[#051814]/50 border border-white/10 rounded-xl px-4 py-3 sm:py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-sm sm:text-base py-4 rounded-xl shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden mt-2"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {!isSubmitting && (
                      <Send
                        size={18}
                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                      />
                    )}
                  </span>
                  {/* Hover Highlight */}
                  <div className="absolute inset-0 h-full w-full bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left z-0" />
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;
