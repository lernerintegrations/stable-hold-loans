import { useEffect } from "react";
import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import TrustStripSection from "@/components/TrustStripSection";
import WhatIsDSCRSection from "@/components/WhatIsDSCRSection";
import ComparisonSection from "@/components/ComparisonSection";
import WhoItsForSection from "@/components/WhoItsForSection";
import MissouriSection from "@/components/MissouriSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CalculatorSection from "@/components/CalculatorSection";
import FaqSection from "@/components/FaqSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import SiteFooter from "@/components/SiteFooter";

const Index = () => {
  useEffect(() => {
    document.title = "RentRefi | DSCR Rental Loans, Simplified | Missouri";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Missouri's dedicated DSCR lender. Qualify on rental income, not tax returns. No W-2s, no DTI, no property count limit. Close in 10 to 21 days.");
    } else {
      const newMeta = document.createElement("meta");
      newMeta.name = "description";
      newMeta.content = "Missouri's dedicated DSCR lender. Qualify on rental income, not tax returns. No W-2s, no DTI, no property count limit. Close in 10 to 21 days.";
      document.head.appendChild(newMeta);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <div className="bg-scene" />
      <SiteHeader />
      <main>
        <HeroSection />
        <TrustStripSection />
        <WhatIsDSCRSection />
        <ComparisonSection />
        <WhoItsForSection />
        <MissouriSection />
        <HowItWorksSection />
        <CalculatorSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;
