import { Target, Layers } from "lucide-react";

const PortfolioBuildersSection = () => {
  return (
    <section className="container py-20">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Built for Portfolio Builders
        </h2>
        <p className="mt-4 text-muted-foreground">
          If you think in cash flow, equity, and repeatability — this program is designed for you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <div className="glass p-7">
          <div className="icon-circle mx-auto mb-5">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-lg mb-4 text-center">Ideal if you:</h3>
          <ul className="space-y-2 text-muted-foreground text-sm list-disc pl-5">
            <li>Own 2+ rental properties</li>
            <li>Plan to hold long-term</li>
            <li>Purchase in LLCs</li>
            <li>Want predictable debt</li>
            <li>Think in cash flow + equity growth</li>
            <li>Want a scalable lending relationship</li>
          </ul>
        </div>
        <div className="glass p-7">
          <div className="icon-circle mx-auto mb-5">
            <Layers className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-lg mb-4 text-center">Built to support:</h3>
          <ul className="space-y-2 text-muted-foreground text-sm list-disc pl-5">
            <li>Repeat acquisitions</li>
            <li>Portfolio expansion</li>
            <li>Stabilized long-term holds</li>
            <li>Clear underwriting boxes</li>
            <li>Professional investor workflows</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap gap-4 items-center justify-center">
        <a href="#get-terms" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors">
          Request Rental Loan Terms →
        </a>
        <a href="#faq" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors border-b border-dashed border-muted-foreground/30 pb-0.5">
          Read FAQ
        </a>
      </div>
    </section>
  );
};

export default PortfolioBuildersSection;
