import { Check, X } from "lucide-react";

const rows = [
  {
    feature: "Income verification",
    conventional: "Full W-2s, tax returns, pay stubs",
    dscr: "None. Property income only.",
  },
  {
    feature: "DTI ratio",
    conventional: "Required, 43-50% max",
    dscr: "No DTI calculation",
  },
  {
    feature: "Property limit",
    conventional: "4-10 properties",
    dscr: "No limit",
  },
  {
    feature: "Close in LLC",
    conventional: "Rarely, complex",
    dscr: "Yes, standard",
  },
  {
    feature: "Close time",
    conventional: "30-45 days",
    dscr: "10-21 days",
  },
  {
    feature: "Tax strategy impact",
    conventional: "Write-offs hurt qualification",
    dscr: "Tax strategy irrelevant",
  },
];

const ComparisonSection = () => {
  return (
    <section className="container py-20">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight">
          DSCR vs. Conventional: Why Investors Switch
        </h2>
      </div>

      {/* Desktop table */}
      <div className="hidden md:block glass overflow-hidden max-w-4xl mx-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left px-6 py-4 text-muted-foreground font-medium w-1/3">
                Feature
              </th>
              <th className="text-left px-6 py-4 text-muted-foreground font-medium w-1/3">
                Conventional
              </th>
              <th className="text-left px-6 py-4 font-medium text-primary w-1/3">
                DSCR (RentRefi)
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={row.feature}
                className={i < rows.length - 1 ? "border-b border-border/50" : ""}
              >
                <td className="px-6 py-4 font-medium text-foreground">
                  {row.feature}
                </td>
                <td className="px-6 py-4 text-muted-foreground">
                  <span className="inline-flex items-start gap-2">
                    <X className="w-4 h-4 text-red-400/70 mt-0.5 shrink-0" />
                    {row.conventional}
                  </span>
                </td>
                <td className="px-6 py-4 text-foreground bg-primary/5">
                  <span className="inline-flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {row.dscr}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile stacked cards */}
      <div className="md:hidden grid gap-4 max-w-lg mx-auto">
        {rows.map((row) => (
          <div key={row.feature} className="glass p-5">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3">
              {row.feature}
            </p>
            <div className="grid gap-2">
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <X className="w-4 h-4 text-red-400/70 mt-0.5 shrink-0" />
                <span><span className="text-muted-foreground/60">Conventional:</span> {row.conventional}</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-foreground bg-primary/5 rounded-md px-2 py-1.5 -mx-2">
                <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span><span className="text-primary font-medium">DSCR:</span> {row.dscr}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-lg font-medium text-foreground">
        If your property cash flows, you qualify. Period.
      </p>
    </section>
  );
};

export default ComparisonSection;
