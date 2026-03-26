import { ArrowRight } from "lucide-react";

const FinalCtaSection = () => {
  return (
    <section className="container py-20">
      <div className="usp-card p-10 text-center max-w-2xl mx-auto">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight">
          Your Property Cash Flows. Let's Get It Financed.
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Submit your details and get your DSCR qualification tier, rate range,
          and next steps.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
          <a
            href="#get-terms"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors"
          >
            Get My DSCR Rate
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="mailto:info@rentrefi.com"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Questions? Email info@rentrefi.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
