const PortfolioBuildersSection = () => {
  return (
    <section className="container py-16">
      <div className="glass-soft p-7">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
          Built for Portfolio Builders
        </h2>
        <p className="mt-3 text-muted-foreground max-w-2xl">
          If you think in cash flow, equity, and repeatability — this program is designed for you.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mt-8">
          <div className="glass p-5">
            <h3 className="font-bold text-lg mb-3">Ideal if you:</h3>
            <ul className="space-y-1 text-muted-foreground text-sm list-disc pl-4">
              <li>Own 2+ rental properties</li>
              <li>Plan to hold long-term</li>
              <li>Purchase in LLCs</li>
              <li>Want predictable debt</li>
              <li>Think in cash flow + equity growth</li>
              <li>Want a scalable lending relationship</li>
            </ul>
          </div>
          <div className="glass p-5">
            <h3 className="font-bold text-lg mb-3">Built to support:</h3>
            <ul className="space-y-1 text-muted-foreground text-sm list-disc pl-4">
              <li>Repeat acquisitions</li>
              <li>Portfolio expansion</li>
              <li>Stabilized long-term holds</li>
              <li>Clear underwriting boxes</li>
              <li>Professional investor workflows</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3 items-center">
          <a href="#get-terms" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold text-sm border border-foreground/10 hover:opacity-90 transition-opacity">
            Request Rental Loan Terms →
          </a>
          <a href="#faq" className="text-sm font-medium text-muted-foreground border-b border-dashed border-foreground/20 hover:text-foreground transition-colors pb-0.5">
            Read FAQ
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioBuildersSection;
