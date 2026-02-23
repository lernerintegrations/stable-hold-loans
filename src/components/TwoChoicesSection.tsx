const TwoChoicesSection = () => {
  return (
    <section className="container py-16">
      <div className="glass-soft p-7">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
          You Have Two Choices
        </h2>
        <p className="mt-2 text-muted-foreground">
          Choose the debt structure that matches how you actually invest.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mt-8">
          <div className="glass p-5">
            <p className="text-xs text-muted-foreground mb-2">Option 1</p>
            <h3 className="font-bold text-lg">Keep refinancing every 12–24 months.</h3>
            <ul className="mt-3 space-y-1 text-muted-foreground text-sm list-disc pl-4">
              <li>Hope rates cooperate</li>
              <li>Accept balloon risk</li>
              <li>Operate under constant timing pressure</li>
            </ul>
          </div>
          <div className="glass p-5 border-primary/30">
            <p className="text-xs text-muted-foreground mb-2">Option 2</p>
            <h3 className="font-bold text-lg">Lock in long-term fixed rental debt.</h3>
            <ul className="mt-3 space-y-1 text-muted-foreground text-sm list-disc pl-4">
              <li>Stabilize cash flow</li>
              <li>Build equity consistently</li>
              <li>Scale confidently with predictable payments</li>
            </ul>
          </div>
        </div>

        <div className="usp-card p-5 mt-6 text-center">
          <p className="text-sm text-foreground/85 font-medium">Which operator do you want to be?</p>
        </div>

        <div className="mt-6 flex flex-wrap gap-3 items-center justify-center">
          <a href="#get-terms" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold text-sm border border-foreground/10 hover:opacity-90 transition-opacity">
            Request Rental Loan Terms →
          </a>
          <a href="#how-it-works" className="text-sm font-medium text-muted-foreground border-b border-dashed border-foreground/20 hover:text-foreground transition-colors pb-0.5">
            How it Works
          </a>
        </div>
      </div>
    </section>
  );
};

export default TwoChoicesSection;
