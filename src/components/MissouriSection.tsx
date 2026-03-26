const columbia = [
  { label: "Median home price", value: "$340,000", note: "up 7.9% YoY" },
  { label: "Average rent", value: "$1,395 to $1,656/mo", note: null },
  { label: "Renter-occupied rate", value: "51-54%", note: "vs 36% national" },
  { label: "Key driver", value: "Mizzou, 31,100+ students", note: null },
];

const stlouis = [
  { label: "Median home price", value: "$235,000", note: "up 6.8% YoY" },
  { label: "SFR rent growth", value: "+6.1% YoY", note: "#2 nationally" },
  { label: "Investor purchase share", value: "20.6%", note: "#2 metro in US" },
  { label: "Cap rates", value: "5.0 to 7.6%", note: null },
];

const MissouriSection = () => {
  return (
    <section className="container py-20">
      <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-center mb-12">
        Why Missouri. Why Now.
      </h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Columbia */}
        <div className="glass p-7">
          <h3 className="font-heading text-xl font-bold text-white mb-5">
            Columbia, MO
          </h3>
          <ul className="space-y-3">
            {columbia.map((s) => (
              <li key={s.label} className="flex justify-between items-baseline gap-4 text-sm">
                <span className="text-muted-foreground">{s.label}</span>
                <span className="text-right font-medium text-foreground">
                  {s.value}
                  {s.note && (
                    <span className="text-muted-foreground font-normal text-xs ml-1">
                      ({s.note})
                    </span>
                  )}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm font-medium text-primary">
            Zero DSCR lenders have a Columbia-specific page. We're local.
          </p>
        </div>

        {/* St. Louis */}
        <div className="glass p-7">
          <h3 className="font-heading text-xl font-bold text-white mb-5">
            St. Louis, MO
          </h3>
          <ul className="space-y-3">
            {stlouis.map((s) => (
              <li key={s.label} className="flex justify-between items-baseline gap-4 text-sm">
                <span className="text-muted-foreground">{s.label}</span>
                <span className="text-right font-medium text-foreground">
                  {s.value}
                  {s.note && (
                    <span className="text-muted-foreground font-normal text-xs ml-1">
                      ({s.note})
                    </span>
                  )}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm font-medium text-primary">
            NGA West: $1.7B federal investment, 3,000 employees arriving 2026
          </p>
        </div>
      </div>

      <div className="mt-8 border border-border rounded-lg px-6 py-5 text-center max-w-4xl mx-auto">
        <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
          Missouri eliminated state capital gains tax in 2025. No rent control.
          Landlord-friendly courts. 60-day foreclosure timeline.
        </p>
      </div>
    </section>
  );
};

export default MissouriSection;
