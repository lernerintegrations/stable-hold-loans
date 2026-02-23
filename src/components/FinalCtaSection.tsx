const FinalCtaSection = () => {
  return (
    <section className="container py-20">
      <div className="usp-card p-10 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          See If Your Rental Property Qualifies
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Clear terms. Transparent structure. Investor-focused underwriting.
        </p>
        <p className="mt-2 text-xs text-muted-foreground/60">Takes less than 3 minutes.</p>

        <div className="mt-8 flex flex-wrap gap-4 items-center justify-center">
          <a href="#get-terms" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors">
            Request Rental Loan Terms →
          </a>
          <a href="#why-this" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors border-b border-dashed border-muted-foreground/30 pb-0.5">
            Why This Works
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
