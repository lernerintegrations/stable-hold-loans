import { Link } from "react-router-dom";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SEOHead from "@/components/SEOHead";

const DSCRColumbiaMO = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="DSCR Loans in Columbia, MO | Rental Property Financing | RentRefi"
        description="Columbia MO's dedicated DSCR lender. Qualify on rental income, not tax returns. 51% renter-occupied market, Mizzou demand. Close in 10 to 21 days."
        url="https://rentrefi.com/dscr-loans/columbia-mo"
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
              href="#get-terms"
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
      </main>
      <SiteFooter />
    </div>
  );
};

export default DSCRColumbiaMO;
