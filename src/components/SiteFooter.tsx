const SiteFooter = () => {
  return (
    <footer className="border-t border-border/40 bg-background/60 backdrop-blur-xl">
      <div className="container py-12">
        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
          <div>
            <div className="flex items-center gap-1 font-bold text-lg mb-4">
              <span className="font-extrabold text-white text-xl">RENT</span>
              <span className="font-medium text-[hsl(155,68%,51%)] text-xl">Refi</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              30-Year Fixed Rental Loans — built for investors. Designed to scale.
            </p>
            <p className="mt-3 text-xs text-muted-foreground/50 max-w-md leading-relaxed">
              Not for owner-occupied homes. Terms and eligibility vary. This page is a starter template—update disclosures to match your business and state requirements.
            </p>
          </div>

          <div>
            <div className="flex flex-wrap gap-2.5 text-[13px] text-muted-foreground">
              {["Get Terms", "How It Works", "FAQ", "Benefits", "Contact"].map((l) => (
                <a
                  key={l}
                  href={l === "Contact" ? "mailto:hello@yourdomain.com" : `#${l.toLowerCase().replace(/\s+/g, "-")}`}
                  className="px-3 py-2 rounded-lg bg-muted/50 border border-border hover:bg-muted hover:text-foreground transition-colors"
                >
                  {l}
                </a>
              ))}
            </div>
            <p className="mt-5 text-xs text-muted-foreground/40">
              © {new Date().getFullYear()} Your Company Name. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
