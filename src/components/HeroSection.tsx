import { Check, ArrowRight } from "lucide-react";
import LeadCaptureForm from "@/components/LeadCaptureForm";

const bullets = [
  "Qualify on rental income, not personal income",
  "No tax returns, W-2s, or pay stubs required",
  "No property count limit (banks cap at 4 to 10)",
  "Close in LLC name directly",
  "10 to 21 day close (vs 30 to 45 conventional)",
];

const HeroSection = () => {
  return (
    <section id="get-terms" className="container pt-20 pb-16">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-[clamp(48px,6vw,72px)] font-bold leading-[1.06] tracking-tight">
          DSCR Rental Loans, Simplified.
        </h1>
        <p className="mt-5 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Qualify on your property's rental income, not your personal tax returns.
          No W-2s. No DTI ratio. Close in 10 to 21 days.
        </p>
      </div>

      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 items-start">
        {/* Left: Value props */}
        <div className="glass p-8">
          <h2 className="font-heading text-2xl font-bold mb-6">Why Investors Choose DSCR</h2>
          <div className="grid gap-3">
            {bullets.map((b) => (
              <div
                key={b}
                className="flex gap-3 items-start p-3 rounded-lg border border-primary/20 bg-primary/10 text-[15px] text-foreground/90"
              >
                <span className="w-5 h-5 rounded-full bg-primary/30 border border-primary/50 flex items-center justify-center mt-0.5 shrink-0">
                  <Check className="w-3 h-3" color="white" strokeWidth={3} />
                </span>
                <span>{b}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3 items-center">
            <a
              href="#get-terms"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors"
            >
              See If You Qualify
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#what-is-dscr"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors border-b border-dashed border-muted-foreground/30 pb-0.5"
            >
              Learn How DSCR Works
            </a>
          </div>

          <p className="mt-5 text-xs text-muted-foreground/60">
            For investment properties only. Not a commitment to lend. NMLS licensed in Missouri.
          </p>
        </div>

        {/* Right: Form */}
        <div className="glass p-8">
          <LeadCaptureForm />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
