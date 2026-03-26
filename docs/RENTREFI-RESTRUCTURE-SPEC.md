# RentRefi Homepage Restructuring Spec

> Full audit + exact rebuild spec for Claude Code.
> Created: March 26, 2026

---

## PART 1: WHAT'S WRONG (Section-by-Section Audit)

### Global Issues (affect entire site)

1. **ZERO DSCR identity.** The word "DSCR" does not appear once in the hero, bullets, form, footer tagline, or any visible copy. The entire brand exists because of DSCR lending. This is the #1 problem.

2. **Wrong CSS colors.** Every color in index.css is off-brand:
   - Background: `hsl(215, 35%, 18%)` = ~#1E2D4D. Should be #0A0F1E (`hsl(220, 52%, 8%)`)
   - Primary green: `hsl(155, 68%, 39%)` = ~#20A66B. Should be #00E5A0 (`hsl(160, 100%, 45%)`)
   - All hardcoded HSL values in .bg-scene, .glass, .glass-lift, .usp-card, .icon-circle also use wrong values
   - The green reads as a dull forest green. The brand green is a bright mint/teal.

3. **No brand fonts.** Syne (headings) and DM Sans (body) are not imported. Site falls back to system fonts, looking generic.

4. **Encoding corruption throughout.** Multiple characters render as garbled text:
   - `â†'` instead of `→` (arrow)
   - `â€"` instead of `—` (em dash, which should be removed anyway)
   - `â€¦` instead of `...` (ellipsis)
   - `Â©` instead of `©` in footer
   - `Â ` (non-breaking space artifacts)
   These are UTF-8 encoding issues. Every instance needs to be found and fixed.

5. **Placeholder phone number.** Footer still shows 123.456.7890 with a tel: link to it.

6. **Logo not used.** SVG logo exists at src/assets/RentRefi_Logo_Primary.svg but SiteHeader renders text-only "RENT" + "Refi".

7. **No SEO.** No <title> tag on homepage, no meta description, no OG tags, no structured data.

---

### Section Audit

#### 1. HeroSection.tsx - REWRITE COMPLETELY
- **H1:** "30-Year Fixed Rental Loans: Built for Real Estate Investors" -- generic, no DSCR
- **Subhead:** Talks about "short-term or retail bank financing" -- doesn't explain what RentRefi does
- **Bullets:** "30-Year Amortization," "Fixed Rate, No Balloon" -- these describe features, not differentiators. Every mortgage has these.
- **Form title:** "Get Rental Loan Terms" -- should be DSCR-specific
- **CTA button:** "Request Rental Loan Terms" -- weak, generic
- **Form fields:** name, email, phone, address, rent, entity -- decent but missing property value and loan amount for DSCR context
- **Encoding issues:** Arrow characters garbled, "Sending..." garbled
- **SMS consent:** Present and correctly implemented (good, from previous work)
- **Webhook:** Looks correct, error handling exists (good)

#### 2. ComparisonSection.tsx - REPLACE
- "Retail Banks vs Hard Money" framing -- this isn't RentRefi's comparison. DSCR vs Conventional is the comparison that matters.

#### 3. WhatItIsSection.tsx - REPLACE
- "This is NOT / This IS" structure without ever explaining what DSCR actually is. A first-time visitor leaves confused.

#### 4. HowItWorksSection.tsx - KEEP STRUCTURE, REWRITE COPY
- 3-step process is fine structure. Copy needs to be DSCR-specific.

#### 5. PortfolioBuildersSection.tsx - REPLACE
- Only speaks to one persona. Should be a "Who It's For" section showing 3-4 persona cards (BRRRR, Side Investor, Portfolio Builder, Out-of-State).

#### 6. OutcomesSection.tsx - CONSOLIDATE
- 6 generic benefit cards. Most overlap with other sections. Cut or merge into the comparison section.

#### 7. TwoChoicesSection.tsx - REMOVE
- Vague "Option 1 vs Option 2" comparison that doesn't add value. Remove entirely.

#### 8. CalculatorSection.tsx - KEEP AS PLACEHOLDER
- Basic refi comparison calculator. Not the DSCR pre-qual engine. Keep for now but plan to replace with the real calculator later.

#### 9. FaqSection.tsx - REWRITE ALL QUESTIONS
- Generic questions. Need DSCR-specific FAQs that real investors ask.

#### 10. FinalCtaSection.tsx - REWRITE COPY
- Generic CTA. Needs DSCR hook and urgency.

---

### Footer (SiteFooter.tsx) Audit
- RENTREFI, LLC visible: GOOD
- Privacy/Terms links present: GOOD
- info@rentrefi.com present: GOOD
- Phone is placeholder: FIX
- Tagline "30-Year Fixed Rental Loans" with no DSCR: FIX
- Encoding artifacts: FIX
- Social links work: GOOD

### Header (SiteHeader.tsx) Audit
- Text-only logo, no SVG: FIX
- No navigation to other pages: FIX (add when pages exist)
- Sticky behavior: GOOD

---

## PART 2: RESTRUCTURED HOMEPAGE SPEC

### New Section Order (9 sections, down from 10)

```
1. HeroSection         -- DSCR-first headline + lead capture form
2. TrustStripSection   -- NEW: stats/speed/local credibility
3. WhatIsDSCRSection   -- NEW: education section replacing WhatItIsSection
4. ComparisonSection   -- REWRITTEN: DSCR vs Conventional side-by-side
5. WhoItsForSection    -- NEW: replaces PortfolioBuildersSection + OutcomesSection
6. MissouriSection     -- NEW: local market data (Columbia + STL)
7. HowItWorksSection   -- REWRITTEN: 3 steps with DSCR specifics
8. FaqSection          -- REWRITTEN: DSCR-specific questions
9. FinalCtaSection     -- REWRITTEN: strong DSCR close + form repeat
```

**Removed:** TwoChoicesSection (adds nothing), OutcomesSection (merged into other sections)

---

### Section 1: HeroSection (REWRITE)

**H1:** "DSCR Rental Loans, Simplified."

**Subhead:** "Qualify on your property's rental income, not your personal tax returns. No W-2s. No DTI ratio. Close in 10 to 21 days."

**Bullets (left column):**
- "Qualify on rental income, not personal income"
- "No tax returns, W-2s, or pay stubs required"
- "No property count limit (banks cap at 4-10)"
- "Close in LLC name directly"
- "10 to 21 day close (vs 30-45 conventional)"

**Primary CTA:** "See If You Qualify" (links to form)
**Secondary CTA:** "Learn How DSCR Works" (scrolls to WhatIsDSCR section)

**Form title:** "Get Your DSCR Pre-Qualification"
**Form subtitle:** "Takes 3 minutes. We'll follow up with your rate range and qualification tier."
**Form fields:** name, email, phone, property address, estimated monthly rent, entity name (optional)
**Submit button:** "Get My DSCR Rate"
**SMS consent:** Keep exactly as-is (already correct)

**Bottom disclaimer:** "For investment properties only. Not a commitment to lend. NMLS licensed in Missouri."

---

### Section 2: TrustStripSection (NEW)

A clean horizontal strip with 4 stats. No glass cards, just numbers.

| Stat | Value |
|------|-------|
| Close time | "10-21 Days to Close" |
| Property limit | "No Property Count Limit" |
| Documentation | "Zero Tax Returns Required" |
| Location | "Missouri's DSCR Specialist" |

Compact, one line on desktop, 2x2 grid on mobile. Accent green numbers, muted labels.

---

### Section 3: WhatIsDSCRSection (NEW, replaces WhatItIsSection)

**Heading:** "What is a DSCR Loan?"

**Paragraph:** "DSCR stands for Debt Service Coverage Ratio. It measures whether your rental property's income covers its mortgage payment. If your property cash flows, you qualify. Your personal income, tax returns, and W-2s are irrelevant."

**Visual: DSCR formula breakdown**
Show the formula visually:
```
DSCR = Monthly Rent / Monthly Mortgage Payment (PITIA)
```
With a simple example:
- Monthly rent: $2,500
- PITIA: $1,800
- DSCR: 1.39 (Strong, Likely Approved)

**3 key differentiators (inline, not cards):**
- "Qualify on property cash flow, not personal income"
- "No W-2s, no tax returns, no pay stubs"
- "Close in your LLC or entity name"

---

### Section 4: ComparisonSection (REWRITE)

**Heading:** "DSCR vs. Conventional: Why Investors Switch"

Side-by-side comparison table:

| Feature | Conventional | DSCR (RentRefi) |
|---------|-------------|-----------------|
| Income verification | Full W-2s, tax returns, pay stubs | None. Property income only. |
| DTI ratio required | Yes, 43-50% max | No DTI calculation |
| Property count limit | 4-10 properties | No limit |
| Close in LLC | Rarely, complex process | Yes, standard |
| Close time | 30-45 days | 10-21 days |
| Tax return impact | Write-offs hurt qualification | Tax strategy irrelevant |

Bottom line: "If your property cash flows, you qualify. Period."

---

### Section 5: WhoItsForSection (NEW, replaces PortfolioBuilders + Outcomes)

**Heading:** "Built for Missouri Rental Investors"

4 persona cards, each with an icon, hook, and one-line description:

**Card 1: BRRRR Investors**
Hook: "Stuck on the refinance step?"
"Close your DSCR refi in 10 to 21 days. Bridge to DSCR, one lender, zero friction."

**Card 2: W-2 Investors with Rentals**
Hook: "Great cash flow. Bad tax returns."
"Qualify on your property, not your 1040. No income docs needed."

**Card 3: Portfolio Builders**
Hook: "Banks say no after 4 properties."
"No property count limit. Scale from 5 to 50 on rental income alone."

**Card 4: Out-of-State Investors**
Hook: "Missouri cash flow, from anywhere."
"St. Louis: 9-11% cash-on-cash returns. Remote-friendly by design."

---

### Section 6: MissouriSection (NEW)

**Heading:** "Why Missouri. Why Now."

Two columns: Columbia and St. Louis, each with key stats.

**Columbia, MO:**
- Median home price: $340,000 (up 7.9% YoY)
- Average rent: $1,395-$1,656/mo
- Renter-occupied rate: 51-54%
- Key driver: Mizzou, 31,100+ students
- "Zero DSCR lenders have a Columbia-specific page. We're local."

**St. Louis, MO:**
- Median home price: $235,000 (up 6.8% YoY)
- SFR rent growth: +6.1% (#2 nationally)
- Investor purchase share: 20.6% (#2 metro in US)
- Cap rates: 5.0-7.6%
- Key catalyst: NGA West, $1.7B federal investment, 3,000 employees arriving 2026

**Bottom line:** "Missouri eliminated state capital gains tax in 2025. No rent control. Landlord-friendly courts. 60-day foreclosure timeline."

---

### Section 7: HowItWorksSection (REWRITE COPY)

**Heading:** "Three Steps to Your DSCR Loan"

**Step 1: "Tell Us About Your Property"**
"Share your property details and estimated rent. Takes 3 minutes."

**Step 2: "Get Your DSCR Qualification"**
"We calculate your DSCR ratio, rate range, and qualification tier. No credit pull."

**Step 3: "Close in 10 to 21 Days"**
"Lock your rate, submit docs, close in your LLC. That's it."

CTA: "Start Your Pre-Qualification" (scrolls to hero form)

---

### Section 8: FaqSection (REWRITE ALL QUESTIONS)

**Heading:** "Common DSCR Questions"

**Q: What DSCR ratio do I need to qualify?**
A: A DSCR of 1.25 or higher qualifies for our best terms (up to 75% LTV). A DSCR of 1.00 or higher still qualifies with adjusted terms. We also have specialty programs for ratios down to 0.75.

**Q: Do I need to show my tax returns or W-2s?**
A: No. DSCR loans qualify based on your property's rental income, not your personal income. No tax returns, W-2s, pay stubs, or DTI calculation.

**Q: Can I close in my LLC?**
A: Yes. Single-member LLCs, multi-member LLCs, trusts, and corporations are all eligible. Most investors close in an LLC for liability protection.

**Q: How long does it take to close?**
A: Typical close time is 10 to 21 days, compared to 30 to 45 days for conventional loans.

**Q: Is there a limit on how many properties I can finance?**
A: No. Unlike conventional loans that cap at 4 to 10 properties, DSCR loans have no property count limit. Finance your 5th property the same way you finance your 50th.

**Q: What are the rates?**
A: Rates depend on your DSCR ratio, LTV, credit tier, and property type. Current ranges start at 6.25% for strong qualifications. Submit a pre-qualification to get your specific rate range.

**Q: Do you lend in Missouri only?**
A: Yes. RentRefi is Missouri's dedicated DSCR lender. We specialize in Columbia and St. Louis markets with deep local knowledge.

---

### Section 9: FinalCtaSection (REWRITE)

**Heading:** "Your Property Cash Flows. Let's Get It Financed."

**Subhead:** "Submit your details and get your DSCR qualification tier, rate range, and next steps."

**CTA button:** "Get My DSCR Rate" (scrolls to hero form)

**Secondary text:** "Questions? Email info@rentrefi.com or call [phone number]."

---

## PART 3: CSS FIXES

### index.css Color Variable Overhaul

Replace ALL color variables in :root with:

```css
:root {
  --background: 220 52% 8%;           /* #0A0F1E */
  --foreground: 230 20% 93%;          /* #E8EAF2 */

  --card: 222 35% 12%;                /* #111829 */
  --card-foreground: 230 20% 93%;     /* #E8EAF2 */

  --popover: 222 35% 12%;
  --popover-foreground: 230 20% 93%;

  --primary: 160 100% 45%;            /* #00E5A0 */
  --primary-foreground: 220 52% 8%;   /* dark text on green buttons */

  --secondary: 220 40% 15%;
  --secondary-foreground: 230 20% 93%;

  --muted: 222 25% 18%;
  --muted-foreground: 225 15% 50%;    /* #6B7594 */

  --accent: 160 100% 45%;             /* #00E5A0 */
  --accent-foreground: 220 52% 8%;

  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 100%;

  --border: 220 30% 17%;              /* #1E2A44 */
  --input: 222 35% 12%;
  --ring: 160 100% 45%;

  --radius: 0.75rem;
}
```

### Also fix all hardcoded HSL values in:
- .bg-scene (background gradient, circle borders, radial gradients)
- .glass (background, border, box-shadow)
- .glass-soft
- .glass-lift hover state
- .usp-card
- .icon-circle

Replace every instance of `hsl(155, 68%, 39%)` with `hsl(160, 100%, 45%)`.
Replace every instance of `hsl(215, 35%, 18%)` with `hsl(220, 52%, 8%)`.
Replace `hsl(155, 68%, 28%)` with `hsl(160, 100%, 35%)`.

---

## PART 4: FONT IMPORT

Add to the top of index.css (before @tailwind directives):

```css
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&family=Syne:wght@700;800&display=swap');
```

Then in tailwind.config.ts, update fontFamily:
```
fontFamily: {
  sans: ['DM Sans', 'system-ui', 'sans-serif'],
  heading: ['Syne', 'system-ui', 'sans-serif'],
}
```

Apply `font-heading` class to all h1, h2, h3 elements.

---

## PART 5: ENCODING FIXES

Search and replace across ALL files:
- `â†'` replace with `→` (or just use the word, or use an SVG arrow icon)
- `â€"` replace with `,` or `:` (em dashes banned, use commas/colons)
- `â€¦` replace with `...`
- `Â©` replace with `©`
- `Â ` (non-breaking space artifact) replace with regular space
- Any other `Â` or `â€` artifacts

---

## PART 6: FOOTER FIXES

1. Replace tagline "30-Year Fixed Rental Loans, built for investors" with "DSCR rental loans, simplified."
2. Replace phone 123.456.7890 with real number (get from Shelby) or remove the phone line until real number is available
3. Fix all encoding artifacts
4. Keep: RENTREFI, LLC, info@rentrefi.com, Privacy Policy link, Terms link, socials, copyright

---

## PART 7: HEADER FIXES

1. Import and use SVG logo from src/assets/RentRefi_Logo_Primary.svg
2. Keep sticky behavior
3. Add navigation links as pages are built (for now, just anchor links to homepage sections)

---

## PART 8: FILE CHANGES SUMMARY

### Files to DELETE (components no longer needed):
- src/components/TwoChoicesSection.tsx
- src/components/OutcomesSection.tsx
- src/components/PortfolioBuildersSection.tsx (replaced by WhoItsForSection)
- src/components/WhatItIsSection.tsx (replaced by WhatIsDSCRSection)

### Files to CREATE:
- src/components/TrustStripSection.tsx
- src/components/WhatIsDSCRSection.tsx
- src/components/WhoItsForSection.tsx
- src/components/MissouriSection.tsx

### Files to REWRITE:
- src/components/HeroSection.tsx (complete rewrite)
- src/components/ComparisonSection.tsx (complete rewrite)
- src/components/HowItWorksSection.tsx (copy rewrite)
- src/components/FaqSection.tsx (all new questions)
- src/components/FinalCtaSection.tsx (copy rewrite)
- src/components/SiteFooter.tsx (tagline, phone, encoding)
- src/components/SiteHeader.tsx (SVG logo)
- src/index.css (colors, fonts)

### Files to UPDATE:
- src/pages/Index.tsx (new section imports and order)
- tailwind.config.ts (font family)

### New Index.tsx section order:
```tsx
<SiteHeader />
<main>
  <HeroSection />
  <TrustStripSection />
  <WhatIsDSCRSection />
  <ComparisonSection />
  <WhoItsForSection />
  <MissouriSection />
  <HowItWorksSection />
  <FaqSection />
  <FinalCtaSection />
</main>
<SiteFooter />
```
