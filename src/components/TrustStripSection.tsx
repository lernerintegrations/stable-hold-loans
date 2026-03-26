const stats = [
  { value: "10-21 Days", label: "Average Close Time" },
  { value: "No Limit", label: "Property Count" },
  { value: "Zero", label: "Tax Returns Required" },
  { value: "Missouri's Only", label: "Dedicated DSCR Lender" },
];

const TrustStripSection = () => {
  return (
    <section className="border-y border-border">
      <div className="container py-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-heading text-2xl sm:text-3xl font-bold text-primary">
              {s.value}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustStripSection;
