"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueProp from "@/components/ValueProp";
import ServicesGrid from "@/components/ServicesGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import SuccessCarousel from "@/components/SuccessCarousel";
import ComparisonSection from "@/components/ComparisonSection";
import Testimonials from "@/components/Testimonials";
import TeamSection from "@/components/TeamSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="font-sans text-white bg-[#0a0a0a] selection:bg-[#10B981]/30 overflow-x-hidden">
      {" "}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        /* Hide scrollbar for horizontal scroll areas */
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `,
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <ValueProp />
        <ServicesGrid />
        <WhyChooseUs />
        <SuccessCarousel />
        <ComparisonSection />
        <Testimonials />
        <TeamSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
