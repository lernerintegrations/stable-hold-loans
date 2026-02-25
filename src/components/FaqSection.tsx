import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "Is this hard money?", a: "No. This is long-term rental financing with 30-year amortization and fixed-rate stability." },
  { q: "Is there a minimum credit score?", a: "Yes — the credit score minimum is 660." },
  { q: "Do I need W-2 income?", a: "This is structured for real estate investors. Property and rental performance matter." },
  { q: "Can I close in my LLC?", a: "Yes. Entity lending is available (LLC-friendly)." },
  { q: "Can I finance multiple properties?", a: "Yes. This program is built for repeat operators and portfolio growth." },
];

const FaqSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="container py-20">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Let's Address the Real Questions
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">Clear answers. No guesswork.</p>
      </div>

      <div className="max-w-2xl mx-auto grid gap-3">
        {faqs.map((f, i) => (
          <div
            key={i}
            className="glass overflow-hidden"
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left font-semibold text-[15px] text-foreground hover:text-foreground transition-colors"
            >
              <span>{f.q}</span>
              <ChevronDown className={`w-4 h-4 shrink-0 text-primary transition-transform duration-200 ${open === i ? "rotate-180" : ""}`} />
            </button>
            <div
              className={`grid transition-all duration-250 ${open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-4 text-[15px] text-muted-foreground">{f.a}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
