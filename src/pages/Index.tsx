import SiteHeader from "@/components/SiteHeader";
import SEOHead from "@/components/SEOHead";
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

const homepageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "RentRefi",
      legalName: "RENTREFI, LLC",
      url: "https://rentrefi.com",
      description: "Missouri's dedicated DSCR loan specialist",
      email: "info@rentrefi.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Columbia",
        addressRegion: "MO",
        addressCountry: "US",
      },
      areaServed: [
        { "@type": "State", name: "Missouri" },
        { "@type": "City", name: "Columbia, MO" },
        { "@type": "City", name: "St. Louis, MO" },
      ],
    },
    {
      "@type": "FinancialService",
      name: "RentRefi",
      url: "https://rentrefi.com",
      description:
        "DSCR rental loans for real estate investors in Missouri. Qualify on rental income, not tax returns.",
      provider: {
        "@type": "Organization",
        name: "RENTREFI, LLC",
      },
      areaServed: {
        "@type": "State",
        name: "Missouri",
      },
      serviceType: "DSCR Loan",
    },
  ],
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="RentRefi | DSCR Rental Loans, Simplified | Missouri"
        description="Missouri's dedicated DSCR loan specialist. Qualify on your rental property's income, not your tax returns. Serving Columbia MO and St. Louis. Close in 10 to 21 days."
        url="https://rentrefi.com"
        ogImage="https://rentrefi.com/og-image.png"
        schema={homepageSchema}
      />
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
