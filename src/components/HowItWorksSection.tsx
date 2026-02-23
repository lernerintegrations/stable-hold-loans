const steps = [
  { num: "01", title: "Submit Property Details", desc: "Tell us about the asset, rent, and entity structure." },
  { num: "02", title: "Investor-Focused Underwriting", desc: "We evaluate the property and rental performance — not homeowner criteria." },
  { num: "03", title: "Close and Stabilize", desc: "Lock in long-term fixed debt. No balloon. No reset risk." },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="container py-16">
      <div className="glass-soft p-7">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
          Rental Financing. Simplified.
        </h2>
        <p className="mt-3 text-muted-foreground">
          Clear steps. Transparent terms. Built to move with professional operators.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mt-8">
          {steps.map((s) => (
            <div key={s.num} className="glass glass-lift p-5">
              <p className="text-xs text-muted-foreground mb-2">⬡ Step {s.num}</p>
              <h3 className="font-bold text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
