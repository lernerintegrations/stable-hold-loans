import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "Is this hard money?", a: "No. This is long-term rental financing with 30-year amortization and fixed-rate stability." },
  { q: "Is there a balloon?", a: "No balloon. The loan is structured for long-term holds with predictable payments." },
  { q: "Do I need W-2 income?", a: "This is structured for real estate investors. Property and rental performance matter." },
  { q: "Can I close in my LLC?", a: "Yes. Entity lending is available (LLC-friendly)." },
  { q: "Can I finance multiple properties?", a: "Yes. This program is built for repeat operators and portfolio growth." },
];

const FaqSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="container py-16">
      <div className="glass-soft p-7">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
          Let's Address the Real Questions
        </h2>
        <p className="mt-3 text-muted-foreground">Clear answers. No guesswork.</p>

        <div className="mt-8 grid gap-3">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="rounded-2xl border border-foreground/8 bg-foreground/4 overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-3 px-4 py-3.5 text-left font-semibold text-foreground/90 hover:text-foreground transition-colors"
              >
                <span>{f.q}</span>
                <ChevronDown className={`w-4 h-4 shrink-0 text-muted-foreground transition-transform duration-200 ${open === i ? "rotate-180" : ""}`} />
              </button>
              <div
                className={`grid transition-all duration-250 ${open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              >
                <div className="overflow-hidden">
                  <p className="px-4 pb-3.5 text-sm text-muted-foreground pr-10">{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
