import { useState } from "react";
import { Check } from "lucide-react";

const bullets = [
  "30-Year Amortization for long-term hold strategy",
  "Fixed Rate — No Balloon predictable payments",
  "Investor-Focused Underwriting built for operators",
  "Entity Lending Available (LLC-friendly)",
  "Built for Repeat Investors scale with a lending partner",
];

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", address: "", rent: "", entity: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder
  };

  return (
    <section id="get-terms" className="container pt-12 pb-10">
      <div className="mb-8">
        <span className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full border border-foreground/10 bg-foreground/5 backdrop-blur-lg text-muted-foreground text-[13px]">
          <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-foreground/90 to-foreground/20 border border-primary/30 shadow-[0_0_0_3px_hsla(148,42%,72%,0.1)]" />
          30-year amortized • fixed rate • built for investors
        </span>
      </div>

      <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-5 items-stretch">
        {/* Left */}
        <div className="glass p-7 flex flex-col">
          <h1 className="text-3xl sm:text-4xl lg:text-[clamp(34px,5vw,54px)] font-bold leading-[1.05] tracking-tight">
            30-Year Fixed Rental Loans — Built for Real Estate Investors
          </h1>

          <div className="mt-5 space-y-1 text-muted-foreground">
            <p>Stop using short-term or retail bank financing for long-term rental properties.</p>
            <p>Lock in stable, predictable debt designed for portfolio growth.</p>
          </div>

          <div className="mt-5 grid gap-2.5">
            {bullets.map((b) => (
              <div key={b} className="flex gap-2.5 items-start px-3 py-2.5 rounded-lg border border-foreground/8 bg-foreground/4 text-sm text-foreground/85">
                <span className="w-[18px] h-[18px] rounded-md bg-primary/20 border border-primary/30 flex items-center justify-center mt-0.5 shrink-0">
                  <Check className="w-3 h-3 text-foreground" />
                </span>
                <span>{b}</span>
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-3 items-center">
            <a href="#get-terms" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold text-sm border border-foreground/10 hover:opacity-90 transition-opacity">
              Request Rental Loan Terms →
            </a>
            <a href="#why-this" className="text-sm font-medium text-muted-foreground border-b border-dashed border-foreground/20 hover:text-foreground hover:border-foreground/35 transition-colors pb-0.5">
              See If Your Property Qualifies
            </a>
          </div>

          <p className="mt-4 text-xs text-muted-foreground/70">
            Calm, transparent terms. No hype. Built for long-term rental portfolio builders.
          </p>
        </div>

        {/* Right — Form */}
        <div className="glass p-6 flex flex-col">
          <h2 className="text-xl font-bold">Get rental loan terms</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Takes less than 3 minutes. We'll follow up with clear terms and qualification guidance.
          </p>

          <form onSubmit={handleSubmit} className="mt-5 grid gap-3 flex-1">
            {[
              { label: "Name", key: "name", type: "text", placeholder: "Full name" },
              { label: "Email", key: "email", type: "email", placeholder: "you@email.com" },
              { label: "Phone", key: "phone", type: "tel", placeholder: "(555) 555-5555" },
              { label: "Property Address", key: "address", type: "text", placeholder: "123 Main St, City, State" },
              { label: "Estimated Monthly Rent", key: "rent", type: "text", placeholder: "$2,500" },
              { label: "Entity Name (optional)", key: "entity", type: "text", placeholder: "Your LLC" },
            ].map((f) => (
              <div key={f.key} className="grid gap-1.5">
                <label className="text-xs text-muted-foreground/80">{f.label}</label>
                <input
                  type={f.type}
                  placeholder={f.placeholder}
                  required={f.key !== "entity"}
                  value={formData[f.key as keyof typeof formData]}
                  onChange={(e) => setFormData((p) => ({ ...p, [f.key]: e.target.value }))}
                  className="w-full px-3 py-2.5 rounded-xl border border-foreground/10 bg-background/40 text-foreground text-sm outline-none focus:border-secondary/40 focus:bg-background/60 transition-colors placeholder:text-muted-foreground/50"
                />
              </div>
            ))}

            <button
              type="submit"
              className="w-full mt-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold text-sm border border-foreground/10 hover:opacity-90 transition-opacity"
            >
              Request Rental Loan Terms →
            </button>

            <p className="text-[11px] text-muted-foreground/60 leading-relaxed mt-1">
              By submitting, you agree to be contacted about investor rental loan options. No spam.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
