import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, ChevronDown, ChevronRight } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SEOHead from "@/components/SEOHead";
import LeadCaptureForm from "@/components/LeadCaptureForm";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What DSCR ratio do I need to buy a rental property in Columbia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A DSCR of 1.25 or higher qualifies for our best terms with up to 75% LTV. A DSCR of 1.00 or higher qualifies with adjusted terms. We also offer specialty programs for ratios as low as 0.75.",
      },
    },
    {
      "@type": "Question",
      name: "Can I get a DSCR loan for student housing near Mizzou?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Student rental properties near the University of Missouri are eligible for DSCR financing. Columbia's high renter-occupied rate and consistent student demand make these properties strong DSCR candidates.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to live in Columbia to get a DSCR loan here?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. DSCR loans are investor loans. You can live anywhere and finance a rental property in Columbia. Many of our borrowers invest from out of state.",
      },
    },
    {
      "@type": "Question",
      name: "Can I close in my LLC in Missouri?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Missouri's business-purpose LLC loan exemption means DSCR loans closed in an LLC are exempt from the state usury cap. Single-member LLCs, multi-member LLCs, trusts, and corporations are all eligible.",
      },
    },
    {
      "@type": "Question",
      name: "How fast can I close on a Columbia property?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Typical close time is 10 to 21 days, compared to 30 to 45 days for conventional loans.",
      },
    },
    {
      "@type": "Question",
      name: "What properties qualify for DSCR loans in Columbia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Single-family homes, duplexes, triplexes, fourplexes, condos, and short-term rentals are all eligible. The property must be non-owner-occupied (investment only).",
      },
    },
    {
      "@type": "Question",
      name: "What credit score do I need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The minimum credit score for our DSCR program is 660. Borrowers with 740+ receive the best rate pricing.",
      },
    },
    {
      "@type": "Question",
      name: "Are there any income documents required?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. DSCR loans qualify on the property's rental income only. No tax returns, W-2s, pay stubs, or DTI calculation.",
      },
    },
  ],
};

const columbiaFaqs = [
  {
    q: "What DSCR ratio do I need to buy a rental property in Columbia?",
    a: "A DSCR of 1.25 or higher qualifies for our best terms with up to 75% LTV. A DSCR of 1.00 or higher qualifies with adjusted terms. We also offer specialty programs for ratios as low as 0.75.",
  },
  {
    q: "Can I get a DSCR loan for student housing near Mizzou?",
    a: "Yes. Student rental properties near the University of Missouri are eligible for DSCR financing. Columbia's high renter-occupied rate and consistent student demand make these properties strong DSCR candidates.",
  },
  {
    q: "Do I need to live in Columbia to get a DSCR loan here?",
    a: "No. DSCR loans are investor loans. You can live anywhere and finance a rental property in Columbia. Many of our borrowers invest from out of state.",
  },
  {
    q: "Can I close in my LLC in Missouri?",
    a: "Yes. Missouri's business-purpose LLC loan exemption means DSCR loans closed in an LLC are exempt from the state usury cap. Single-member LLCs, multi-member LLCs, trusts, and corporations are all eligible.",
  },
  {
    q: "How fast can I close on a Columbia property?",
    a: "Typical close time is 10 to 21 days, compared to 30 to 45 days for conventional loans.",
  },
  {
    q: "What properties qualify for DSCR loans in Columbia?",
    a: "Single-family homes, duplexes, triplexes, fourplexes, condos, and short-term rentals are all eligible. The property must be non-owner-occupied (investment only).",
  },
  {
    q: "What credit score do I need?",
    a: "The minimum credit score for our DSCR program is 660. Borrowers with 740+ receive the best rate pricing.",
  },
  {
    q: "Are there any income documents required?",
    a: "No. DSCR loans qualify on the property's rental income only. No tax returns, W-2s, pay stubs, or DTI calculation.",
  },
];

const DSCRColumbiaMO = () => {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <SEOHead
        title="DSCR Loans in Columbia, MO | Rental Property Financing | RentRefi"
        description="Columbia MO's dedicated DSCR lender. Qualify on rental income, not tax returns. 51% renter-occupied market, Mizzou demand. Close in 10 to 21 days."
        url="https://rentrefi.com/dscr-loans/columbia-mo"
        schema={faqSchema}
      />
      <div className="bg-scene" />
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="container pt-20 pb-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>DSCR Loans</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-foreground">Columbia, MO</span>
          </nav>

          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[clamp(48px,6vw,72px)] font-bold leading-[1.06] tracking-tight">
              DSCR Loans in Columbia, MO
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Rental property financing for Columbia investors. Qualify on your
              property's income, not your tax returns. No W-2s. Close in 10 to
              21 days.
            </p>
            <a
              href="#columbia-form"
              className="inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary/90 transition-colors"
            >
              Get Your Columbia DSCR Rate
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>

        {/* Columbia Market Overview */}
        <section className="border-y border-border">
          <div className="container py-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight">
                Why Columbia, MO is a DSCR Investor's Market
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                { value: "$340,000", label: "Median Home Price", note: "Up 7.9% YoY" },
                { value: "$1,395-$1,656/mo", label: "Average Rent" },
                { value: "51-54%", label: "Renter-Occupied Rate", note: "vs 36% national average" },
                { value: "31,100+", label: "Mizzou Students", note: "Key demand driver" },
                { value: "~725 Listings", label: "Active Inventory", note: "1.9 months supply" },
                { value: "15 Days", label: "Median Days on Market" },
              ].map((s) => (
                <div key={s.label} className="glass p-6 text-center">
                  <p className="font-heading text-2xl sm:text-3xl font-bold text-primary">
                    {s.value}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
                  {s.note && (
                    <p className="mt-1 text-xs text-muted-foreground/70">{s.note}</p>
                  )}
                </div>
              ))}
            </div>

            <p className="max-w-3xl mx-auto text-muted-foreground text-[15px] leading-relaxed text-center">
              Columbia's rental market is driven by the University of Missouri,
              one of the largest public universities in the Midwest. With over
              31,100 enrolled students and an 18% enrollment surge in 2024-2025,
              rental demand consistently outpaces supply. The city's
              renter-occupied rate of 51-54% is nearly 20 points above the
              national average of 36%, making it one of the strongest natural
              rental markets in Missouri. MU Health, the city's largest employer,
              provides additional demand stability beyond the student population.
            </p>
          </div>
        </section>

        {/* Sample DSCR Deal Analysis */}
        <section className="container py-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight">
              Sample DSCR Deal: Columbia SFR Near Mizzou
            </h2>
          </div>

          <div className="glass p-8 sm:p-10 max-w-2xl mx-auto">
            <div className="grid gap-4">
              {[
                { label: "Purchase Price", value: "$240,000" },
                { label: "Loan Amount (75% LTV)", value: "$180,000" },
                { label: "Monthly Rent", value: "$1,650" },
              ].map((row) => (
                <div key={row.label} className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-muted-foreground text-[15px]">{row.label}</span>
                  <span className="font-semibold">{row.value}</span>
                </div>
              ))}

              <div className="mt-2 mb-1">
                <p className="text-xs text-primary font-semibold tracking-wider uppercase mb-3">
                  Monthly PITIA Breakdown
                </p>
                {[
                  { label: "P&I (7% over 30yr)", value: "$1,198" },
                  { label: "Taxes", value: "$190" },
                  { label: "Insurance", value: "$120" },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between items-center py-2 border-b border-border/50 pl-4">
                    <span className="text-muted-foreground text-sm">{row.label}</span>
                    <span className="text-sm">{row.value}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center py-2 pl-4 font-semibold">
                  <span>PITIA Total</span>
                  <span>$1,508</span>
                </div>
              </div>

              <div className="border-t border-border pt-4 mt-2">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground text-[15px]">
                    DSCR: $1,650 / $1,508
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-500/15 border border-yellow-500/30 text-yellow-400 text-sm font-semibold">
                    DSCR 1.09: Conditionally Qualified
                  </span>
                </div>
              </div>
            </div>

            <p className="mt-6 text-sm text-muted-foreground text-center">
              Want to see your deal's numbers?{" "}
              <Link to="/#calculator" className="text-primary hover:underline">
                Use our DSCR calculator.
              </Link>
            </p>
          </div>
        </section>

        {/* Why DSCR Works for Columbia */}
        <section className="border-t border-border">
          <div className="container py-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight">
                Why DSCR Loans Work for Columbia Investors
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="grid gap-3 mb-10">
                {[
                  "Qualify on Columbia's strong rents, not your personal income",
                  "No property count limit. Scale your Columbia portfolio without bank restrictions.",
                  "Close in your LLC. Standard for DSCR, complex for conventional.",
                  "No seasoning requirement. Perfect for BRRRR investors refinancing rehab projects.",
                  "Student housing eligible. Finance properties near Mizzou campus.",
                ].map((bullet) => (
                  <div
                    key={bullet}
                    className="flex gap-3 items-start p-3 rounded-lg border border-primary/20 bg-primary/10 text-[15px] text-foreground/90"
                  >
                    <span className="w-5 h-5 rounded-full bg-primary/30 border border-primary/50 flex items-center justify-center mt-0.5 shrink-0">
                      <Check className="w-3 h-3" color="white" strokeWidth={3} />
                    </span>
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              <p className="text-muted-foreground text-[15px] leading-relaxed text-center">
                Columbia's high renter-occupied rate means properties here
                naturally generate the rental income DSCR loans require. Unlike
                conventional lenders who penalize investors for tax deductions
                and cap financing at 4 to 10 properties, DSCR qualification is
                based entirely on whether the property's rent covers its mortgage
                payment. For Columbia's student housing market, where occupancy
                rates consistently exceed 95%, this is an ideal fit.
              </p>
            </div>
          </div>
        </section>

        {/* Columbia Neighborhoods */}
        <section className="container py-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight">
              Best Columbia Neighborhoods for Rental Investors
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                name: "East Campus",
                desc: "Adjacent to Mizzou campus. High student rental demand. Properties in the $180K to $280K range. Average rents $1,200 to $1,600/mo. Strong occupancy year-round due to year-over-year leasing cycles.",
              },
              {
                name: "Downtown Columbia",
                desc: "Walking distance to campus and The District entertainment area. Mix of SFR and small multifamily. Properties $200K to $350K. Rents $1,100 to $1,500/mo. Attracts graduate students and young professionals.",
              },
              {
                name: "South Providence",
                desc: "Established residential area south of Broadway. Affordable entry point for investors. Properties $150K to $250K. Rents $1,000 to $1,400/mo. Stable long-term tenant base.",
              },
              {
                name: "Old Southwest",
                desc: "Historic neighborhood with character properties. Walking distance to MU campus. Properties $180K to $300K. Rents $1,100 to $1,500/mo. Mix of student and professional tenants.",
              },
            ].map((n) => (
              <div key={n.name} className="glass glass-lift p-7">
                <h3 className="font-heading text-xl font-bold text-white mb-3">
                  {n.name}
                </h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  {n.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Loan Terms */}
        <section className="border-y border-border">
          <div className="container py-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight">
                RentRefi DSCR Loan Terms
              </h2>
            </div>

            <div className="glass p-8 sm:p-10 max-w-2xl mx-auto">
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {[
                  { label: "Loan Amounts", value: "$100K to $2M" },
                  { label: "LTV", value: "Up to 75%" },
                  { label: "DSCR Minimum", value: "0.75 (specialty programs available)" },
                  { label: "Rates", value: "Starting at 6.25%" },
                  { label: "Term", value: "30-year fixed" },
                  { label: "Close Time", value: "10 to 21 days" },
                  { label: "Entity Types", value: "LLC, trust, corporation" },
                  { label: "Property Types", value: "SFR, 2-4 unit, condo, STR" },
                ].map((t) => (
                  <div key={t.label} className="flex justify-between items-baseline py-2 border-b border-border/50">
                    <span className="text-sm text-muted-foreground">{t.label}</span>
                    <span className="text-sm font-medium text-foreground text-right">{t.value}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs text-muted-foreground/70 text-center">
                Rates and terms vary by DSCR ratio, LTV, credit tier, and property type.
                Submit a pre-qualification for your specific rate.
              </p>
            </div>
          </div>
        </section>

        {/* Lead Capture Form */}
        <section id="columbia-form" className="container py-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight">
              Get Your DSCR Rate for Columbia, MO
            </h2>
          </div>

          <div className="glass p-8 max-w-lg mx-auto">
            <LeadCaptureForm
              title="Columbia DSCR Pre-Qualification"
              subtitle="Tell us about your Columbia property. We'll follow up with your rate range and qualification tier."
              buttonText="Get My Columbia DSCR Rate"
              successHeading="Pre-Qualification Received"
              successMessage="We'll review your Columbia property details and follow up with your rate range and qualification tier shortly."
            />
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-border">
          <div className="container py-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight">
                Columbia MO DSCR Loan FAQ
              </h2>
            </div>

            <div className="max-w-2xl mx-auto grid gap-3">
              {columbiaFaqs.map((f, i) => (
                <div key={i} className="glass overflow-hidden">
                  <button
                    onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left font-semibold text-[15px] text-foreground hover:text-foreground transition-colors"
                  >
                    <span>{f.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 shrink-0 text-primary transition-transform duration-200 ${faqOpen === i ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-250 ${faqOpen === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-4 text-[15px] text-muted-foreground leading-relaxed">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Missouri Advantages Strip */}
        <section className="border-y border-border">
          <div className="container py-10">
            <p className="font-heading text-lg font-bold text-center mb-6">
              Missouri: Built for Rental Investors
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Non-judicial foreclosure: ~60 days",
                "No rent control statewide",
                "State capital gains tax eliminated 2025",
                "Landlord-friendly courts",
                "LLC loans exempt from usury cap",
              ].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full border border-border bg-card text-sm text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="container py-20">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight">
              Ready to Invest in Columbia?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Get your personalized DSCR rate for Columbia, MO.
            </p>
            <a
              href="#columbia-form"
              className="inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary/90 transition-colors"
            >
              Get My Columbia DSCR Rate
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default DSCRColumbiaMO;
