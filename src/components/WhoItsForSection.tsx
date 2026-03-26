import { RefreshCcw, FileText, Building2, MapPin } from "lucide-react";

const personas = [
  {
    icon: RefreshCcw,
    title: "BRRRR Investors",
    hook: "Stuck on the refinance step?",
    description:
      "Close your DSCR refi in 10 to 21 days. Bridge to DSCR, one lender, zero friction.",
  },
  {
    icon: FileText,
    title: "W-2 Investors",
    hook: "Great cash flow. Bad tax returns.",
    description:
      "Qualify on your property, not your 1040. No income docs needed.",
  },
  {
    icon: Building2,
    title: "Portfolio Builders",
    hook: "Banks say no after 4 properties.",
    description:
      "No property count limit. Scale from 5 to 50 on rental income alone.",
  },
  {
    icon: MapPin,
    title: "Out-of-State Investors",
    hook: "Missouri cash flow, from anywhere.",
    description:
      "St. Louis: 9 to 11% cash-on-cash returns. Remote-friendly by design.",
  },
];

const WhoItsForSection = () => {
  return (
    <section className="container py-20">
      <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-center mb-12">
        Built for Missouri Rental Investors
      </h2>

      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {personas.map((p) => (
          <div key={p.title} className="glass glass-lift p-7">
            <div className="icon-circle mb-5">
              <p.icon className="w-6 h-6" />
            </div>
            <p className="text-xs font-medium text-primary uppercase tracking-wide mb-2">
              {p.title}
            </p>
            <p className="text-lg font-bold text-foreground mb-2">
              {p.hook}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {p.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhoItsForSection;
