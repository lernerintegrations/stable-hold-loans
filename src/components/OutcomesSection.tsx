import { TrendingUp, BarChart3, ShieldCheck, Wallet, Home, Handshake } from "lucide-react";

const outcomes = [
  { title: "Predictable Payments", desc: "Fixed rate over 30 years means stable cash flow planning.", icon: TrendingUp },
  { title: "Portfolio Scalability", desc: "Designed for repeat investors — not a retail 10-loan mindset.", icon: BarChart3 },
  { title: "Reduced Refinance Risk", desc: "No 12–24 month balloon forcing a refinance in a shifting market.", icon: ShieldCheck },
  { title: "Capital Efficiency", desc: "Keep liquidity available for your next acquisition.", icon: Wallet },
  { title: "Investor-Friendly Structure", desc: "Built for non-owner occupied rental strategy and operator workflows.", icon: Home },
  { title: "Relationship Lending", desc: "Clear answers, transparent terms, consistent approach.", icon: Handshake },
];

const OutcomesSection = () => {
  return (
    <section id="benefits" className="container py-20">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          What This Means for You
        </h2>
        <p className="mt-4 text-muted-foreground">
          Features are nice. Outcomes are what matter.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {outcomes.map((o) => (
          <div key={o.title} className="glass glass-lift p-7 text-center">
            <div className="icon-circle mx-auto mb-5">
              <o.icon className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base">{o.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{o.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OutcomesSection;
