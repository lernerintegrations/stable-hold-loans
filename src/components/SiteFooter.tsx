import { Instagram, Facebook, Mail, Phone, Clock } from "lucide-react";

const socials = [
  { icon: Instagram, href: "https://www.instagram.com/rentrefi", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61550981867034", label: "Facebook" },
];

const SiteFooter = () => {
  return (
    <footer className="border-t border-border bg-background/60 backdrop-blur-xl">
      <div className="container py-12">
        <div className="grid md:grid-cols-[1.2fr_0.8fr_0.8fr] gap-8 items-start">
          <div>
            <div className="flex items-center gap-1 font-bold text-lg mb-4">
              <span className="font-extrabold text-foreground text-xl">RENT</span>
              <span className="font-medium text-primary text-xl">Refi</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              30-Year Fixed Rental Loans — built for investors. Designed to scale.
            </p>
            <p className="mt-3 text-xs text-muted-foreground/60 max-w-md leading-relaxed">Not for owner-occupied homes. Terms and eligibility vary. 

Loans are for investment purposes only and not for personal, family, or household use. Loan product availability may be limited in certain states. This is not a commitment to lend. All loans are subject to borrower underwriting and credit approval, in RentRefi's sole and absolute discretion.


            </p>
          </div>

          <div>
            <div className="flex flex-wrap gap-2.5 text-[13px] text-muted-foreground">
              {["Get Terms", "How It Works", "FAQ", "Benefits"].map((l) => <a key={l} href={`#${l.toLowerCase().replace(/\s+/g, "-")}`}
              className="px-3 py-2 rounded-lg bg-muted/50 border border-border hover:bg-muted hover:text-foreground transition-colors">

                  {l}
                </a>
              )}
            </div>
            <div className="mt-5 flex items-center gap-4">
              <p className="text-xs text-muted-foreground/50">
                © {new Date().getFullYear()} RentRefi. All rights reserved.
              </p>
              <div className="flex gap-2">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-2 rounded-lg bg-muted/50 border border-border text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Clock size={15} className="text-primary shrink-0" />
                <span>Mon–Fri: 9am – 5pm CST</span>
              </li>
              <li>
                <a href="mailto:info@rentrefi.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <Mail size={15} className="text-primary shrink-0" />
                  <span>info@rentrefi.com</span>
                </a>
              </li>
              <li>
                <a href="tel:1234567890" className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <Phone size={15} className="text-primary shrink-0" />
                  <span>123.456.7890</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>);

};

export default SiteFooter;