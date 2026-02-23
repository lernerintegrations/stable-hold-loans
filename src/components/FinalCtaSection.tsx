const FinalCtaSection = () => {
  return (
    <section className="container py-16">
      <div className="usp-card p-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
          See If Your Rental Property Qualifies
        </h2>
        <p className="mt-3 text-muted-foreground">
          Clear terms. Transparent structure. Investor-focused underwriting.
        </p>
        <p className="mt-2 text-xs text-muted-foreground/70">Takes less than 3 minutes.</p>

        <div className="mt-6 flex flex-wrap gap-3 items-center justify-center">
          <a href="#get-terms" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold text-sm border border-foreground/10 hover:opacity-90 transition-opacity">
            Request Rental Loan Terms →
          </a>
          <a href="#why-this" className="text-sm font-medium text-muted-foreground border-b border-dashed border-foreground/20 hover:text-foreground transition-colors pb-0.5">
            Why This Works
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
