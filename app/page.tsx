"use client";

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

export default function Home() {
  return (
    <div className=" text-white bg-[#0a0a0a] selection:bg-[#10B981]/30 overflow-x-hidden">
      <main>
        <Hero />
        <DeveloperStandard />
        <TechExpertise />
        <WhyChooseUs />
        <MyPortfolio />
        <ComparisonSection />
        <SuccessStories />
        <TechnicalCapabilities />
        {/* <FAQSection /> */}
        <CTASection />
      </main>
    </div>
  );
}
