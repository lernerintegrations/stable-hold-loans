import { XCircle, CheckCircle } from "lucide-react";

const WhatItIsSection = () => {
  return (
    <section className="container py-20">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Long-Term Rental Financing — Designed Specifically for Investors
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          This is not a bridge loan. Not hard money. Not a homeowner mortgage.
          It's stable, long-term rental debt built to support portfolio growth.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <div className="glass p-7">
          <div className="icon-circle mx-auto mb-5">
            <XCircle className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-lg mb-4 text-center">This is NOT</h3>
          <ul className="space-y-2 text-muted-foreground text-[15px] list-disc pl-5">
            <li>Hard money</li>
            <li>A short-term bridge loan</li>
            <li>A homeowner mortgage product</li>
          </ul>
        </div>
        <div className="glass p-7">
          <div className="icon-circle mx-auto mb-5">
            <CheckCircle className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-lg mb-4 text-center">This IS</h3>
          <ul className="space-y-2 text-muted-foreground text-[15px] list-disc pl-5">
            <li>30-year amortized rental loan</li>
            <li>Fixed rate stability</li>
            <li>Non-owner occupied focus</li>
            <li>Structured for real estate investors</li>
          </ul>
        </div>
      </div>

      <div className="usp-card p-7 mt-8 text-center max-w-3xl mx-auto">
        
        <p className="text-[15px] text-foreground/85">
          We provide 30-year fixed rental loans underwritten for real estate investors — not retail homeowners —
          so you can scale your portfolio without short-term refinance risk or retail banking limitations.
        </p>
      </div>
    </section>);

};

export default WhatItIsSection;