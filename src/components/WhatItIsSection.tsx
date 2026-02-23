const WhatItIsSection = () => {
  return (
    <section className="container py-16">
      <div className="glass-soft p-7">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
          Long-Term Rental Financing — Designed Specifically for Investors
        </h2>
        <p className="mt-3 text-muted-foreground max-w-2xl">
          This is not a bridge loan. Not hard money. Not a homeowner mortgage.
          It's stable, long-term rental debt built to support portfolio growth.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mt-8">
          <div className="glass p-5">
            <h3 className="font-bold text-lg mb-3">This is NOT</h3>
            <ul className="space-y-1 text-muted-foreground text-sm list-disc pl-4">
              <li>Hard money</li>
              <li>A short-term bridge loan</li>
              <li>A homeowner mortgage product</li>
            </ul>
          </div>
          <div className="glass p-5">
            <h3 className="font-bold text-lg mb-3">This IS</h3>
            <ul className="space-y-1 text-muted-foreground text-sm list-disc pl-4">
              <li>30-year amortized rental loan</li>
              <li>Fixed rate stability</li>
              <li>Non-owner occupied focus</li>
              <li>Structured for real estate investors</li>
            </ul>
          </div>
        </div>

        <div className="usp-card p-5 mt-6">
          <h3 className="font-bold text-lg mb-2">The USP</h3>
          <p className="text-sm text-foreground/85">
            We provide 30-year fixed rental loans underwritten for real estate investors — not retail homeowners —
            so you can scale your portfolio without short-term refinance risk or retail banking limitations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatItIsSection;
