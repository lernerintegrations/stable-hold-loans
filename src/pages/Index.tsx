import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import ComparisonSection from "@/components/ComparisonSection";
import WhatItIsSection from "@/components/WhatItIsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PortfolioBuildersSection from "@/components/PortfolioBuildersSection";
import OutcomesSection from "@/components/OutcomesSection";
import TwoChoicesSection from "@/components/TwoChoicesSection";
import FaqSection from "@/components/FaqSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import SiteFooter from "@/components/SiteFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-scene" />
      <SiteHeader />
      <main>
        <HeroSection />
        <ComparisonSection />
        <WhatItIsSection />
        <HowItWorksSection />
        <PortfolioBuildersSection />
        <OutcomesSection />
        <TwoChoicesSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;
