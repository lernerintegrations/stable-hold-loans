import { useState } from "react";
import { Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const bullets = [
"30-Year Amortization for long-term hold strategy",
"Fixed Rate — No Balloon predictable payments",
"Investor-Focused Underwriting built for operators",
"Entity Lending Available (LLC-friendly)",
"Built for Repeat Investors - Scale with a Lending Partner"];


const HeroSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", address: "", rent: "", entity: ""
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const params = new URLSearchParams({
        full_name: formData.name,
        email: formData.email,
        phone: formData.phone,
        property_address: formData.address,
        estimated_rent: formData.rent,
        entity_name: formData.entity
      });
      await fetch(
        "https://services.leadconnectorhq.com/hooks/BFpydo68ZM7YR9ezSPDb/webhook-trigger/98421fc2-c4b7-4d2d-8ff0-48857b3b6371",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: params.toString(),
          mode: "no-cors"
        }
      );
      toast({ title: "Request sent!", description: "We'll follow up with your rental loan terms shortly." });
      setFormData({ name: "", email: "", phone: "", address: "", rent: "", entity: "" });
    } catch {
      toast({ title: "Something went wrong", description: "Please try again or contact us directly.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="get-terms" className="container pt-20 pb-16">
      {/* Centered hero headline */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl sm:text-5xl lg:text-[clamp(48px,6vw,72px)] font-bold leading-[1.06] tracking-tight">
          30-Year Fixed Rental Loans — Built for Real Estate Investors
        </h1>
        <p className="mt-5 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Stop using short-term or retail bank financing for long-term rental properties.
          Lock in stable, predictable debt designed for portfolio growth.
        </p>
      </div>

      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 items-start">
        {/* Left – Bullets */}
        <div className="glass p-8">
          <h2 className="text-2xl font-bold mb-6">Why Investors Choose Us</h2>
          <div className="grid gap-3">
            {bullets.map((b) =>
            <div key={b} className="flex gap-3 items-start p-3 rounded-lg border border-primary/20 bg-primary/10 text-[15px] text-foreground/90">
                <span className="w-5 h-5 rounded-full bg-primary/30 border border-primary/50 flex items-center justify-center mt-0.5 shrink-0">
                  <Check className="w-3 h-3" color="white" strokeWidth={3} />
                </span>
                <span>{b}</span>
              </div>
            )}
          </div>

          <div className="mt-6 flex flex-wrap gap-3 items-center">
            <a href="#get-terms" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors">Submit Rental Loan Terms →

            </a>
            <a href="#why-this" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors border-b border-dashed border-muted-foreground/30 pb-0.5">
              See If Your Property Qualifies
            </a>
          </div>

          <p className="mt-5 text-xs text-muted-foreground/60">Transparent terms. No hype. Built for long-term rental portfolio builders.

          </p>
        </div>

        {/* Right — Form */}
        <div className="glass p-8">
          <h2 className="text-2xl font-bold">Get Rental Loan Terms -</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Takes less than 3 minutes. We'll follow up with clear terms and qualification guidance.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
            {[
            { label: "Name", key: "name", type: "text", placeholder: "Full name" },
            { label: "Email", key: "email", type: "email", placeholder: "you@email.com" },
            { label: "Phone", key: "phone", type: "tel", placeholder: "(555) 555-5555" },
            { label: "Property Address", key: "address", type: "text", placeholder: "123 Main St, City, State" },
            { label: "Estimated Monthly Rent", key: "rent", type: "text", placeholder: "$2,500" },
            { label: "Entity Name (optional)", key: "entity", type: "text", placeholder: "Your LLC" }].
            map((f) =>
            <div key={f.key} className="grid gap-1.5">
                <label className="text-xs font-medium text-muted-foreground">{f.label}</label>
                <input
                type={f.type}
                placeholder={f.placeholder}
                required={f.key !== "entity"}
                value={formData[f.key as keyof typeof formData]}
                onChange={(e) => setFormData((p) => ({ ...p, [f.key]: e.target.value }))}
                className="w-full px-4 py-3 rounded-lg border border-border bg-muted text-foreground text-sm outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all placeholder:text-muted-foreground/60" />

              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full mt-2 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors disabled:opacity-50">

              {submitting ? "Sending…" : "Request Rental Loan Terms →"}
            </button>

            <p className="text-[11px] text-muted-foreground/50 leading-relaxed mt-1">
              By submitting, you agree to be contacted about investor rental loan options. No spam.
            </p>
          </form>
        </div>
      </div>
    </section>);

};

export default HeroSection;