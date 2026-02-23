const SiteFooter = () => {
  return (
    <footer className="border-t border-foreground/6 bg-background/35 backdrop-blur-xl">
      <div className="container py-10">
        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-6 items-start">
          <div>
            <div className="flex items-center gap-2.5 font-semibold mb-3">
              <div className="w-7 h-7 rounded-[10px] bg-gradient-to-br from-primary to-secondary shadow-lg border border-foreground/10" />
              <span>Investor Rental Loans</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              30-Year Fixed Rental Loans — built for investors. Designed to scale.
            </p>
            <p className="mt-3 text-xs text-muted-foreground/60 max-w-md leading-relaxed">
              Not for owner-occupied homes. Terms and eligibility vary. This page is a starter template—update disclosures to match your business and state requirements.
            </p>
          </div>

          <div>
            <div className="flex flex-wrap gap-2.5 text-[13px] text-muted-foreground">
              {["Get Terms", "How It Works", "FAQ", "Benefits", "Contact"].map((l) => (
                <a
                  key={l}
                  href={l === "Contact" ? "mailto:hello@yourdomain.com" : `#${l.toLowerCase().replace(/\s+/g, "-")}`}
                  className="px-2.5 py-2 rounded-xl bg-foreground/3 border border-foreground/6 hover:bg-foreground/5 hover:border-foreground/10 transition-colors"
                >
                  {l}
                </a>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted-foreground/50">
              © {new Date().getFullYear()} Your Company Name. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
