import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/BFpydo68ZM7YR9ezSPDb/webhook-trigger/98421fc2-c4b7-4d2d-8ff0-48857b3b6371";

const formFields = [
  { label: "Name", key: "name", type: "text", placeholder: "Full name" },
  { label: "Email", key: "email", type: "email", placeholder: "you@email.com" },
  { label: "Phone", key: "phone", type: "tel", placeholder: "(555) 555-5555" },
  { label: "Property Address", key: "address", type: "text", placeholder: "123 Main St, City, State" },
  { label: "Estimated Monthly Rent", key: "rent", type: "text", placeholder: "$2,500" },
  { label: "Entity Name (optional)", key: "entity", type: "text", placeholder: "Your LLC" },
];

interface LeadCaptureFormProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  successHeading?: string;
  successMessage?: string;
}

const LeadCaptureForm = ({
  title = "Get Your DSCR Pre-Qualification",
  subtitle = "Takes 3 minutes. We'll follow up with your rate range and qualification tier.",
  buttonText = "Get My DSCR Rate",
  successHeading = "Pre-Qualification Received",
  successMessage = "We'll review your property details and follow up with your rate range and qualification tier shortly.",
}: LeadCaptureFormProps) => {
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

    console.log("[LeadForm] Submitting payload:", payload);

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      console.log("[LeadForm] Response status:", response.status);

      if (!response.ok) {
        const text = await response.text().catch(() => "");
        console.error("[LeadForm] Error response body:", text);
        throw new Error(`Webhook returned ${response.status}`);
      }

      console.log("[LeadForm] Submission successful");
      setFormData({ name: "", email: "", phone: "", address: "", rent: "", entity: "" });
      setSmsConsent(false);
      setSubmitted(true);
    } catch (err) {
      console.error("[LeadForm] Submission failed:", err);
      setErrorMsg("Something went wrong. Please try again or email us at info@rentrefi.com.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-12">
        <CheckCircle className="w-12 h-12 text-primary mb-4" />
        <h2 className="font-heading text-2xl font-bold text-white">{successHeading}</h2>
        <p className="mt-3 text-sm text-muted-foreground max-w-sm">{successMessage}</p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          Submit another property
        </button>
      </div>
    );
  }

  return (
    <>
      <h2 className="font-heading text-2xl font-bold">{title}</h2>
      <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>

      <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
        {formFields.map((f) => (
          <div key={f.key} className="grid gap-1.5">
            <label className="text-xs font-medium text-muted-foreground">{f.label}</label>
            <input
              type={f.type}
              placeholder={f.placeholder}
              required={f.key !== "entity"}
              value={formData[f.key as keyof typeof formData]}
              onChange={(e) => setFormData((p) => ({ ...p, [f.key]: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg border border-border bg-muted text-foreground text-sm outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all placeholder:text-muted-foreground/60"
            />
          </div>
        ))}

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
          className="w-full mt-2 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors disabled:opacity-50"
        >
          {submitting ? "Sending..." : buttonText}
        </button>

        {errorMsg && (
          <p className="text-sm text-red-400 mt-1">{errorMsg}</p>
        )}
      </form>
    </>
  );
};

export default LeadCaptureForm;
