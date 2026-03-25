"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DeveloperStandard from "@/components/DeveloperStandard";
import TechExpertise from "@/components/TechExpertise";
import WhyChooseUs from "@/components/WhyChooseUs";
import MyPortfolio from "@/components/MyPortfolio";
import ComparisonSection from "@/components/ComparisonSection";
import SuccessStories from "@/components/SuccessStories";
import TechnicalCapabilities from "@/components/TechnicalCapabilities";
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
        <DeveloperStandard />
        <TechExpertise />
        <WhyChooseUs />
        <MyPortfolio />
        <ComparisonSection />
        <SuccessStories />
        <TechnicalCapabilities />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
