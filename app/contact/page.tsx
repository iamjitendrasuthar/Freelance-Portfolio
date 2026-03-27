"use client";

import { useRef, useState } from "react";
import FadeIn from "@/utils/Common";
import { Mail, MapPin, Send, MessageSquare } from "lucide-react";
import { TwitterIcon, GithubIcon, LinkedinIcon } from "@/utils/Icons";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import Button from "@/utils/Button";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // ✅ Updated Submit Logic: DB Save + EmailJS
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    const toastId = toast.loading("Sending your message...");

    try {
      // 1. Get Form Data easily
      const formData = new FormData(e.currentTarget);
      const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        phone: formData.get("phone"),
        message: formData.get("message"),
      };

      // 2. Save to MongoDB Database via API
      const dbResponse = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!dbResponse.ok) {
        throw new Error("Failed to save to database");
      }

      // 3. Send Email Notification via EmailJS
      await emailjs.sendForm(
        "service_yh5gznc", // Your Service ID
        "template_aa6vn4r", // Your Template ID
        formRef.current!,
        "d0D0yVwnwK4bBx3-I", // Your Public Key
      );

      toast.success("Message sent successfully! ✅", { id: toastId });
      formRef.current?.reset();
    } catch (err) {
      toast.error("Failed to send. Please try again. 😢", { id: toastId });
      console.error("Submission Error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const SOCIAL_LINKS = [
    { icon: GithubIcon, href: "https://github.com", label: "GitHub" },
    { icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: TwitterIcon, href: "https://twitter.com", label: "Twitter" },
  ];

  return (
    <main className="w-full min-h-screen bg-white">
      {/* =========================================
          HERO SECTION (DARK THEME) 
      ========================================= */}
      <section className="relative bg-[#051814] h-screen pt-28 pb-20 md:pt-40 md:pb-32">
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-500/10 blur-[120px] rounded-full transform-gpu" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-teal-500/10 blur-[100px] rounded-full transform-gpu" />
          <div
            className="absolute inset-0 opacity-[0.03]"
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <FadeIn>
            <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-xs sm:text-sm font-medium mb-6 backdrop-blur-sm">
              <MessageSquare size={14} />
              <span className="uppercase tracking-widest">Get In Touch</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              Let's build something <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
                amazing together.
              </span>
            </h1>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Have a freelance project in mind or want to discuss scaling your
              current architecture? Drop a message and let's talk tech.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* =========================================
          CONTACT FORM
      ========================================= */}
      <section className="relative z-20 px-4 sm:px-6 -mt-85 md:-mt-45">
        <div className="max-w-4xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="bg-white border border-gray-100 p-6 sm:p-10 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-emerald-500 to-teal-400" />

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex flex-col gap-6"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">
                      Your Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="Jitendra Suthar"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">
                      Email Address
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="jitendra@example.com"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">
                      Subject
                    </label>
                    <input
                      name="subject"
                      type="text"
                      required
                      placeholder="Freelance Inquiry"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">
                      Phone
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      required
                      placeholder="+91 95219XXXXX"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all resize-none"
                  ></textarea>
                </div>
                <Button
                  variant="primary"
                  // @ts-ignore
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full transition-shadow flex justify-center py-3 rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all duration-300"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && (
                    <Send
                      size={18}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  )}
                </Button>
              </form>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* =========================================
          INFO & MAP SECTION
      ========================================= */}
      <section className="py-16 md:py-32 px-4 sm:px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Map Integration */}
            <FadeIn
              delay={0.2}
              className="w-full lg:col-span-8 order-1 lg:order-2"
            >
              <div className="group relative w-full h-[300px] sm:h-[400px] md:h-[480px] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-xl transform-gpu transition-all duration-500 hover:shadow-2xl">
                <div className="absolute inset-0 bg-emerald-900/5 pointer-events-none group-hover:bg-transparent transition-colors z-10" />
                <iframe
                  title="Jalore Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57434.33128913346!2d72.61483329938565!3d25.383182855118744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3943cf630e2f585d%3A0xc6209a304e21b2d3!2sJalore%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1711450000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                ></iframe>
              </div>
            </FadeIn>

            {/* Contact Info */}
            <FadeIn
              delay={0.4}
              className="w-full lg:col-span-4 order-2 lg:order-1"
            >
              <div className="flex flex-col gap-6 sm:gap-8">
                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                    Get in Touch
                  </h3>
                  <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                    Have a project? I'm currently available for freelance work
                    and collaborations.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <a
                    href="mailto:hello@yourdomain.com"
                    className="flex flex-col sm:flex-row items-center sm:items-center gap-4 p-6 rounded-3xl bg-gray-50 border border-gray-100 transition-all active:scale-95 hover:bg-white hover:border-emerald-200 hover:shadow-md group text-center sm:text-left"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white text-emerald-600 flex items-center justify-center shrink-0 shadow-sm group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                      <Mail size={24} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                        Email
                      </p>
                      <p className="text-base sm:text-lg font-bold text-gray-900 truncate">
                        hello@yourdomain.com
                      </p>
                    </div>
                  </a>

                  <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 p-6 rounded-3xl bg-gray-50 border border-gray-100 transition-all hover:bg-white hover:border-emerald-200 hover:shadow-md group text-center sm:text-left">
                    <div className="w-14 h-14 rounded-2xl bg-white text-emerald-600 flex items-center justify-center shrink-0 shadow-sm group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                        Location
                      </p>
                      <p className="text-base sm:text-lg font-bold text-gray-900">
                        Jalore, Rajasthan
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Links Container */}
                <div className="flex items-center justify-center lg:justify-start gap-4 pt-4 w-full">
                  {SOCIAL_LINKS.map(({ icon: Icon, href, label }, idx) => (
                    <a
                      key={idx}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-900 text-white transition-all active:scale-90 hover:bg-emerald-500 hover:-translate-y-1 shadow-lg group"
                    >
                      <Icon
                        size={20}
                        className="transition-transform group-hover:scale-110"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
