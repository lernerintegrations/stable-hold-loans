const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container flex items-center justify-between py-4">
        <a href="#" className="flex items-center gap-2.5 font-bold tracking-tight text-lg">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground text-xs font-black">IR</span>
          </div>
          <span>Investor Rental Loans</span>
        </a>

        <nav className="hidden md:flex items-center gap-1 text-sm text-muted-foreground">
          {["Why This", "How It Works", "Benefits", "FAQ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="px-4 py-2 rounded-lg hover:bg-muted hover:text-foreground transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <a
          href="#get-terms"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors"
        >
          Get Terms →
        </a>
      </div>
    </header>
  );
};

export default SiteHeader;
