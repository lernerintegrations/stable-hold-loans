import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What DSCR ratio do I need to qualify?",
    a: "A DSCR of 1.25 or higher qualifies for our best terms (up to 75% LTV). A DSCR of 1.00 or higher qualifies with adjusted terms. We also have specialty programs for ratios down to 0.75.",
  },
  {
    q: "Do I need to show my tax returns or W-2s?",
    a: "No. DSCR loans qualify based on your property's rental income, not your personal income. No tax returns, W-2s, pay stubs, or DTI calculation.",
  },
  {
    q: "Can I close in my LLC?",
    a: "Yes. Single-member LLCs, multi-member LLCs, trusts, and corporations are all eligible. Most investors close in an LLC for liability protection.",
  },
  {
    q: "How long does it take to close?",
    a: "Typical close time is 10 to 21 days, compared to 30 to 45 days for conventional loans.",
  },
  {
    q: "Is there a limit on how many properties I can finance?",
    a: "No. Unlike conventional loans that cap at 4 to 10 properties, DSCR loans have no property count limit.",
  },
  {
    q: "What are the rates?",
    a: "Rates depend on your DSCR ratio, LTV, credit tier, and property type. Current ranges start at 6.25% for strong qualifications. Submit a pre-qualification to get your specific rate range.",
  },
  {
    q: "Do you lend outside Missouri?",
    a: "RentRefi is Missouri's dedicated DSCR lender. We specialize in Columbia and St. Louis markets with deep local knowledge.",
  },
];

const FaqSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="container py-20">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight">
          Common DSCR Questions
        </h2>
      </div>

      <div className="max-w-2xl mx-auto grid gap-3">
        {faqs.map((f, i) => (
          <div key={i} className="glass overflow-hidden">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left font-semibold text-[15px] text-foreground hover:text-foreground transition-colors"
            >
              <span>{f.q}</span>
              <ChevronDown
                className={`w-4 h-4 shrink-0 text-primary transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`grid transition-all duration-250 ${open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-4 text-[15px] text-muted-foreground leading-relaxed">
                  {f.a}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
