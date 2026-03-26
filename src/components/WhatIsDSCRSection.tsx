import { Check } from "lucide-react";

const keyPoints = [
  "Qualify on property cash flow, not personal income",
  "No W-2s, no tax returns, no pay stubs",
  "Close in your LLC or entity name",
];

const WhatIsDSCRSection = () => {
  return (
    <section id="what-is-dscr" className="container py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-center">
          What is a DSCR Loan?
        </h2>
        <p className="mt-5 text-lg text-muted-foreground text-center max-w-2xl mx-auto leading-relaxed">
          DSCR stands for Debt Service Coverage Ratio. It measures whether your
          rental property's income covers its mortgage payment. If your property
          cash flows, you qualify. Your personal income, tax returns, and W-2s
          are irrelevant.
        </p>

        {/* Formula */}
        <div className="mt-10 rounded-lg border border-primary/20 bg-primary/5 px-6 py-5 text-center">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-2">
            The Formula
          </p>
          <p className="font-heading text-2xl sm:text-3xl font-bold text-white">
            DSCR = Monthly Rent <span className="text-primary">/</span> Monthly Payment (PITIA)
          </p>
        </div>

        {/* Worked example */}
        <div className="mt-6 glass p-6">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-4">
            Example
          </p>
          <div className="grid sm:grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-sm text-muted-foreground">Monthly Rent</p>
              <p className="font-heading text-2xl font-bold text-white mt-1">$2,500</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">PITIA Payment</p>
              <p className="font-heading text-2xl font-bold text-white mt-1">$1,800</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">DSCR Ratio</p>
              <p className="font-heading text-2xl font-bold text-primary mt-1">1.39</p>
            </div>
          </div>
          <p className="mt-4 text-center text-sm font-medium text-primary">
            Strong qualification. Likely approved.
          </p>
        </div>

        {/* Key points */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center">
          {keyPoints.map((point) => (
            <div key={point} className="flex items-start gap-2">
              <span className="w-5 h-5 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mt-0.5 shrink-0">
                <Check className="w-3 h-3 text-primary" strokeWidth={3} />
              </span>
              <span className="text-sm text-foreground/90">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsDSCRSection;
