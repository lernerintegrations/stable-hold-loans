const TwoChoicesSection = () => {
  return (
    <section className="container py-20">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          You Have Two Choices
        </h2>
        <p className="mt-4 text-muted-foreground">
          Choose the debt structure that matches how you actually invest.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <div className="glass p-7">
          <p className="text-xs text-primary font-semibold tracking-wider uppercase mb-3">Option 1</p>
          <h3 className="font-bold text-lg">Keep refinancing every 12–24 months.</h3>
          <ul className="mt-4 space-y-2 text-muted-foreground text-sm list-disc pl-5">
            <li>Hope rates cooperate</li>
            <li>Accept balloon risk</li>
            <li>Operate under constant timing pressure</li>
          </ul>
        </div>
        <div className="glass p-7 border-primary/30">
          <p className="text-xs text-primary font-semibold tracking-wider uppercase mb-3">Option 2</p>
          <h3 className="font-bold text-lg">Lock in long-term fixed rental debt.</h3>
          <ul className="mt-4 space-y-2 text-muted-foreground text-sm list-disc pl-5">
            <li>Stabilize cash flow</li>
            <li>Build equity consistently</li>
            <li>Scale confidently with predictable payments</li>
          </ul>
        </div>
      </div>

      <div className="usp-card p-6 mt-8 text-center max-w-xl mx-auto">
        <p className="text-sm text-foreground/90 font-medium">Which operator do you want to be?</p>
      </div>

      <div className="mt-8 flex flex-wrap gap-4 items-center justify-center">
        <a href="#get-terms" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors">
          Request Rental Loan Terms →
        </a>
        <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors border-b border-dashed border-muted-foreground/30 pb-0.5">
          How it Works
        </a>
      </div>
    </section>
  );
};

export default TwoChoicesSection;
