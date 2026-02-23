import { FileText, Search, Lock } from "lucide-react";

const steps = [
  { num: "01", title: "Submit Property Details", desc: "Tell us about the asset, rent, and entity structure.", icon: FileText },
  { num: "02", title: "Investor-Focused Underwriting", desc: "We evaluate the property and rental performance — not homeowner criteria.", icon: Search },
  { num: "03", title: "Close and Stabilize", desc: "Lock in long-term fixed debt. No balloon. No reset risk.", icon: Lock },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="container py-20">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Rental Financing. Simplified.
        </h2>
        <p className="mt-4 text-muted-foreground">
          Clear steps. Transparent terms. Built to move with professional operators.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {steps.map((s) => (
          <div key={s.num} className="glass glass-lift p-7 text-center">
            <div className="icon-circle mx-auto mb-5">
              <s.icon className="w-6 h-6" />
            </div>
            <p className="text-xs text-primary font-semibold tracking-wider uppercase mb-2">Step {s.num}</p>
            <h3 className="font-bold text-lg">{s.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;
