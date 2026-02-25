import { useState, useCallback } from "react";

function pmt(principal: number, annualRatePct: number, years: number) {
  const r = (annualRatePct / 100) / 12;
  const n = Math.max(0, Math.round(years * 12));
  if (principal <= 0 || n <= 0) return 0;
  if (r === 0) return principal / n;
  const pow = Math.pow(1 + r, n);
  return principal * (r * pow) / (pow - 1);
}

function fmtMoney(n: number) {
  if (!isFinite(n)) return "$—";
  return n.toLocaleString(undefined, { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

const defaults = {
  curBalance: 200000, curRate: 7.5, curYears: 25, tiMonthly: 300,
  newAmount: 220000, newRate: 6.75, newYears: 30, closingCosts: 4500, cashOut: 20000,
  monthlyRent: 2200, otherIncome: 0,
};

type Fields = typeof defaults;

const CalculatorSection = () => {
  const [f, setF] = useState<Fields>({ ...defaults });
  const [calculated, setCalculated] = useState(false);

  const set = (key: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setF(prev => ({ ...prev, [key]: Number(e.target.value) || 0 }));

  const curPI = pmt(f.curBalance, f.curRate, f.curYears);
  const curPITI = curPI + f.tiMonthly;
  const newPI = pmt(f.newAmount, f.newRate, f.newYears);
  const newPITI = newPI + f.tiMonthly;
  const totalIncome = f.monthlyRent + f.otherIncome;
  const newCashflow = totalIncome - newPITI;
  const curCashflow = totalIncome - curPITI;
  const delta = newCashflow - curCashflow;
  const dscr = newPITI > 0 ? totalIncome / newPITI : 0;

  const handleCalc = useCallback(() => setCalculated(true), []);
  const handleReset = useCallback(() => { setF({ ...defaults }); setCalculated(false); }, []);

  const inputClass = "w-full rounded-lg border border-border bg-input px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring";
  const labelClass = "block text-xs font-medium text-muted-foreground mb-1.5";

  return (
    <section id="calculator" className="container py-20">
      <div className="text-center max-w-2xl mx-auto mb-4">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Rental Refinance Calculator</h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Compare your current loan vs a new 30-year fixed rental loan. Estimate payment, cash flow, and DSCR.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Inputs */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Current Loan */}
          <div className="glass p-6">
            <h3 className="text-base font-semibold text-foreground mb-4">Current Loan</h3>
            <div className="space-y-3">
              <div><label className={labelClass}>Current Loan Balance ($)</label><input type="number" className={inputClass} value={f.curBalance} onChange={set("curBalance")} /></div>
              <div><label className={labelClass}>Current Interest Rate (%)</label><input type="number" step="0.01" className={inputClass} value={f.curRate} onChange={set("curRate")} /></div>
              <div><label className={labelClass}>Years Remaining</label><input type="number" className={inputClass} value={f.curYears} onChange={set("curYears")} /></div>
              <div><label className={labelClass}>Monthly Taxes + Insurance ($)</label><input type="number" className={inputClass} value={f.tiMonthly} onChange={set("tiMonthly")} /></div>
            </div>
          </div>

          {/* New Loan */}
          <div className="glass p-6">
            <h3 className="text-base font-semibold text-foreground mb-4">New Loan (RentRefi Scenario)</h3>
            <div className="space-y-3">
              <div><label className={labelClass}>New Loan Amount ($)</label><input type="number" className={inputClass} value={f.newAmount} onChange={set("newAmount")} /></div>
              <div><label className={labelClass}>New Interest Rate (%)</label><input type="number" step="0.01" className={inputClass} value={f.newRate} onChange={set("newRate")} /></div>
              <div><label className={labelClass}>New Term (Years)</label><input type="number" className={inputClass} value={f.newYears} onChange={set("newYears")} /></div>
              <div><label className={labelClass}>Estimated Closing Costs ($)</label><input type="number" className={inputClass} value={f.closingCosts} onChange={set("closingCosts")} /></div>
              <div><label className={labelClass}>Cash Out Amount ($)</label><input type="number" className={inputClass} value={f.cashOut} onChange={set("cashOut")} /></div>
            </div>
          </div>

          {/* Rental Income */}
          <div className="glass p-6 flex flex-col">
            <h3 className="text-base font-semibold text-foreground mb-4">Rental Income</h3>
            <div className="space-y-3">
              <div><label className={labelClass}>Monthly Rent ($)</label><input type="number" className={inputClass} value={f.monthlyRent} onChange={set("monthlyRent")} /></div>
              <div><label className={labelClass}>Other Monthly Income ($) <span className="opacity-60">(optional)</span></label><input type="number" className={inputClass} value={f.otherIncome} onChange={set("otherIncome")} /></div>
            </div>
            <div className="mt-auto pt-6 flex gap-3">
              <button onClick={handleCalc} className="flex-1 rounded-lg bg-primary text-primary-foreground font-semibold py-2.5 text-sm hover:opacity-90 transition-opacity">Calculate</button>
              <button onClick={handleReset} className="flex-1 rounded-lg border border-border text-muted-foreground font-semibold py-2.5 text-sm hover:text-foreground transition-colors">Reset</button>
            </div>
          </div>
        </div>

        {/* Results */}
        {calculated && (
          <div className="space-y-6 animate-fade-up">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="glass p-5 text-center">
                <p className="text-xs font-medium text-muted-foreground mb-1">Current Payment</p>
                <p className="text-2xl font-bold text-foreground">{fmtMoney(curPITI)}</p>
                <p className="text-xs text-muted-foreground mt-1">P&I: {fmtMoney(curPI)} • Taxes/Ins: {fmtMoney(f.tiMonthly)}</p>
              </div>
              <div className="glass p-5 text-center">
                <p className="text-xs font-medium text-muted-foreground mb-1">New Payment</p>
                <p className="text-2xl font-bold text-foreground">{fmtMoney(newPITI)}</p>
                <p className="text-xs text-muted-foreground mt-1">P&I: {fmtMoney(newPI)} • Taxes/Ins: {fmtMoney(f.tiMonthly)}</p>
              </div>
              <div className="glass p-5 text-center">
                <p className="text-xs font-medium text-muted-foreground mb-1">Cash Flow (Rent − PITI)</p>
                <p className={`text-2xl font-bold ${newCashflow >= 0 ? "text-accent" : "text-destructive"}`}>{fmtMoney(newCashflow)}</p>
                <p className="text-xs text-muted-foreground mt-1">Change vs current: {delta >= 0 ? "+" : "−"}{fmtMoney(Math.abs(delta))} / mo</p>
              </div>
              <div className="glass p-5 text-center">
                <p className="text-xs font-medium text-muted-foreground mb-1">DSCR (Rent / PITI)</p>
                <p className="text-2xl font-bold text-foreground">{isFinite(dscr) ? dscr.toFixed(2) : "—"}</p>
                <p className="text-xs text-muted-foreground mt-1">Estimate only; underwriting may differ.</p>
              </div>
            </div>

            <p className="text-xs text-muted-foreground text-center max-w-3xl mx-auto">
              Disclaimer: This calculator provides estimates for educational purposes only and does not constitute a rate quote, approval, or commitment to lend. Actual terms, payments, and qualification metrics vary by borrower, property, and underwriting guidelines.
            </p>

            <div className="glass p-6 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-2xl mx-auto">
              <div>
                <p className="font-semibold text-foreground">Want exact terms for this deal?</p>
                <p className="text-sm text-muted-foreground">Submit your rental property and we'll run real numbers for your scenario.</p>
              </div>
              <a href="#get-terms" className="shrink-0 rounded-lg bg-primary text-primary-foreground font-semibold px-6 py-2.5 text-sm hover:opacity-90 transition-opacity">
                Submit Your Deal
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CalculatorSection;
