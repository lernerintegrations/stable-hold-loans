import { Building, Banknote } from "lucide-react";

const ComparisonSection = () => {
  return (
    <section id="why-this" className="container py-20">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          If You're Holding Rentals Long-Term… Why Finance Them Short-Term?
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Most investors end up stuck between retail bank hoops and short-term debt that forces a refinance.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="glass glass-lift p-7 text-center">
          <div className="icon-circle mx-auto mb-5">
            <Building className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-lg mb-1">Retail Banks</h3>
          <p className="text-xs text-muted-foreground mb-4">Homeowner underwriting in disguise</p>
          <ul className="space-y-2 text-muted-foreground text-[15px] text-left list-disc pl-5">
            <li>Overanalyze tax returns</li>
            <li>Cap you at 10 loans</li>
            <li>Focus on personal DTI</li>
            <li>Slow, inconsistent closings</li>
          </ul>
        </div>

        <div className="glass glass-lift p-7 text-center">
          <div className="icon-circle mx-auto mb-5">
            <Banknote className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-lg mb-1">Hard Money</h3>
          <p className="text-xs text-muted-foreground mb-4">Expensive for long-term holds</p>
          <ul className="space-y-2 text-muted-foreground text-[15px] text-left list-disc pl-5">
            <li>12–24 month balloon risk</li>
            <li>High rates for hold strategy</li>
            <li>Forced refinance pressure</li>
            <li>Not designed for stabilization</li>
          </ul>
        </div>
      </div>

      <div className="usp-card p-6 mt-8 text-center max-w-2xl mx-auto">
        <p className="text-base text-foreground/90 font-medium">
          Bottom line: if your goal is long-term rental cash flow, your debt should match your strategy.
        </p>
      </div>
    </section>
  );
};

export default ComparisonSection;
