/**
 * HeroSection.tsx — Lead capture form + hero content
 *
 * CHANGES (2026-03-26):
 * 1. Removed mode: "no-cors" — was making response opaque, hiding errors silently.
 *    GHL webhooks support CORS so this is not needed.
 * 2. Switched Content-Type from application/x-www-form-urlencoded to application/json.
 *    JSON payloads map more reliably to GHL custom fields.
 * 3. Added console.log statements for response status, payload, and errors to aid debugging.
 * 4. Added success state — form is replaced with a confirmation message after submission.
 * 5. Added visible error state — shows inline error message below the submit button on failure.
 * 6. smsConsent field included in webhook payload as boolean.
 * 7. Form clears and resets on successful submission (was already present, now also resets UI state).
 */

import { useState } from "react";
import { Check, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/BFpydo68ZM7YR9ezSPDb/webhook-trigger/98421fc2-c4b7-4d2d-8ff0-48857b3b6371";

const bullets = [
"30-Year Amortization for long-term hold strategy",
"Fixed Rate, No Balloon predictable payments",
"Investor-Focused Underwriting built for operators",
"Entity Lending Available (LLC-friendly)",
"Built for Repeat Investors - Scale with a Lending Partner"];


const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", address: "", rent: "", entity: ""
  });
  const [smsConsent, setSmsConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg("");

    const payload = {
      full_name: formData.name,
      email: formData.email,
      phone: formData.phone,
      property_address: formData.address,
      estimated_rent: formData.rent,
      entity_name: formData.entity,
      smsConsent: smsConsent,
    };

    console.log("[HeroForm] Submitting payload:", payload);

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      console.log("[HeroForm] Response status:", response.status);

      if (!response.ok) {
        const text = await response.text().catch(() => "");
        console.error("[HeroForm] Error response body:", text);
        throw new Error(`Webhook returned ${response.status}`);
      }

      console.log("[HeroForm] Submission successful");
      setFormData({ name: "", email: "", phone: "", address: "", rent: "", entity: "" });
      setSmsConsent(false);
      setSubmitted(true);
    } catch (err) {
      console.error("[HeroForm] Submission failed:", err);
      setErrorMsg("Something went wrong. Please try again or email us at info@rentrefi.com.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="get-terms" className="container pt-20 pb-16">
      {/* Centered hero headline */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl sm:text-5xl lg:text-[clamp(48px,6vw,72px)] font-bold leading-[1.06] tracking-tight">
          30-Year Fixed Rental Loans: Built for Real Estate Investors
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
            <a href="#get-terms" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors">Request Rental Loan Terms →

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
          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center py-12">
              <CheckCircle className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-2xl font-bold text-white">Request Received</h2>
              <p className="mt-3 text-sm text-muted-foreground max-w-sm">
                We'll review your details and follow up with clear terms and qualification guidance shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold">Get Rental Loan Terms</h2>
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

                <label className="flex items-start gap-3 cursor-pointer mt-1">
                  <input
                    type="checkbox"
                    checked={smsConsent}
                    onChange={(e) => setSmsConsent(e.target.checked)}
                    className="mt-1 h-4 w-4 shrink-0 rounded border-border accent-primary"
                  />
                  <span className="text-xs leading-relaxed text-[#6B7594]">
                    By submitting this form, I agree to receive SMS text messages
                    from RentRefi (RENTREFI, LLC) regarding my DSCR loan
                    pre-qualification, including follow-up outreach, appointment
                    reminders, and loan-related information. Message frequency
                    varies. Message and data rates may apply. Reply STOP to opt out
                    at any time. Reply HELP for help. View our{" "}
                    <Link to="/privacy-policy" className="text-[#00E5A0] underline hover:text-[#00C77A]">
                      Privacy Policy
                    </Link>{" "}
                    and{" "}
                    <Link to="/terms-of-service" className="text-[#00E5A0] underline hover:text-[#00C77A]">
                      Terms of Service
                    </Link>.
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full mt-2 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors disabled:opacity-50">

                  {submitting ? "Sending…" : "Request Rental Loan Terms →"}
                </button>

                {errorMsg && (
                  <p className="text-sm text-red-400 mt-1">{errorMsg}</p>
                )}
              </form>
            </>
          )}
        </div>
      </div>
    </section>);

};

export default HeroSection;