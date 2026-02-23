const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-border/30 bg-background/55 backdrop-blur-xl">
      <div className="container flex items-center justify-between py-3.5">
        <a href="#" className="flex items-center gap-2.5 font-semibold tracking-tight">
          <div className="w-7 h-7 rounded-[10px] bg-gradient-to-br from-primary to-secondary shadow-lg border border-foreground/10" />
          <span>Investor Rental Loans</span>
        </a>

        <nav className="hidden md:flex items-center gap-1 text-sm text-muted-foreground">
          {["Why This", "How It Works", "Benefits", "FAQ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="px-3 py-2 rounded-xl hover:bg-foreground/5 hover:text-foreground transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <a
          href="#get-terms"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-foreground text-background font-semibold text-sm hover:bg-foreground/90 transition-colors"
        >
          Get Terms →
        </a>
      </div>
    </header>
  );
};

export default SiteHeader;
