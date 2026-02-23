const ComparisonSection = () => {
  return (
    <section id="why-this" className="container py-16">
      <div className="glass-soft p-7">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
          If You're Holding Rentals Long-Term… Why Finance Them Short-Term?
        </h2>
        <p className="mt-3 text-muted-foreground max-w-2xl">
          Most investors end up stuck between retail bank hoops and short-term debt that forces a refinance.
          Neither is built for serious rental portfolio operators.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mt-8">
          <div className="glass p-5">
            <div className="flex items-center gap-2.5 font-bold mb-3">
              <span>Retail Banks</span>
              <span className="text-xs px-2.5 py-1 rounded-full border border-foreground/12 bg-foreground/5 text-muted-foreground font-normal">
                Homeowner underwriting in disguise
              </span>
            </div>
            <ul className="space-y-1 text-muted-foreground text-sm list-disc pl-4">
              <li>Overanalyze tax returns</li>
              <li>Cap you at 10 loans</li>
              <li>Focus on personal DTI</li>
              <li>Slow, inconsistent closings</li>
            </ul>
          </div>

          <div className="glass p-5">
            <div className="flex items-center gap-2.5 font-bold mb-3">
              <span>Hard Money</span>
              <span className="text-xs px-2.5 py-1 rounded-full border border-foreground/12 bg-foreground/5 text-muted-foreground font-normal">
                Expensive for long-term holds
              </span>
            </div>
            <ul className="space-y-1 text-muted-foreground text-sm list-disc pl-4">
              <li>12–24 month balloon risk</li>
              <li>High rates for hold strategy</li>
              <li>Forced refinance pressure</li>
              <li>Not designed for stabilization</li>
            </ul>
          </div>
        </div>

        <div className="usp-card p-5 mt-6">
          <p className="text-sm text-foreground/85 font-medium">
            Bottom line: if your goal is long-term rental cash flow, your debt should match your strategy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
