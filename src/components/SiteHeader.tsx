import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/RentRefi_Logo_Primary.svg";

const navLinks = [
  { label: "What is DSCR", href: "#what-is-dscr" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Who It's For", href: "#who-its-for" },
  { label: "FAQ", href: "#faq" },
];

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="RentRefi" className="h-9 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-1 text-sm text-muted-foreground">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-4 py-2 rounded-lg hover:bg-muted hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#get-terms"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors"
        >
          Get My DSCR Rate
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </header>
  );
};

export default SiteHeader;
