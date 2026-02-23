const outcomes = [
  { title: "Predictable Payments", desc: "Fixed rate over 30 years means stable cash flow planning." },
  { title: "Portfolio Scalability", desc: "Designed for repeat investors — not a retail 10-loan mindset." },
  { title: "Reduced Refinance Risk", desc: "No 12–24 month balloon forcing a refinance in a shifting market." },
  { title: "Capital Efficiency", desc: "Keep liquidity available for your next acquisition." },
  { title: "Investor-Friendly Structure", desc: "Built for non-owner occupied rental strategy and operator workflows." },
  { title: "Relationship Lending", desc: "Clear answers, transparent terms, consistent approach." },
];

const OutcomesSection = () => {
  return (
    <section id="benefits" className="container py-16">
      <div className="glass-soft p-7">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
          What This Means for You
        </h2>
        <p className="mt-3 text-muted-foreground">
          Features are nice. Outcomes are what matter.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {outcomes.map((o) => (
            <div key={o.title} className="glass glass-lift p-5">
              <h3 className="font-bold text-base">{o.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{o.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutcomesSection;
