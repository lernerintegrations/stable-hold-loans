# CLAUDE.md - RentRefi Website Project

> Context file for Claude Code. Read this at the start of every session.
> Last updated: March 26, 2026

---

## Project Overview

RentRefi (rentrefi.com) is a DSCR-only private real estate lender based in Columbia, Missouri. This project is a full website rebuild: homepage, blog, landing pages, DSCR calculator integration, and SEO optimization.

The site is built on **Lovable** (Vite + React + TypeScript + Tailwind) with 2-way GitHub sync. Lovable auto-deploys from the `main` branch.

**Repository:** github.com/lernerintegrations/stable-hold-loans
**Hosting:** Lovable CDN (185.158.133.1)
**Domain:** rentrefi.com (DNS on GoDaddy, A records point to Lovable)

---

## Critical Constraints

- **DO NOT remove `lovable-tagger` dev dependency.** It is required for Lovable sync.
- **No server-side code.** All form submissions go to GHL webhooks or n8n webhooks.
- **No backend, database, or auth dependencies.**
- **Build output must remain standard Vite SPA.**
- **Site stays on Lovable.** Do not suggest migration to Vercel, Next.js, or any other stack.
- **Work on `dev` branch.** Only merge to `main` when ready to deploy to production.
- **Never use em dashes (--) in any copy.** Use commas, periods, or colons instead. Em dashes are flagged as AI-sounding.

---

## Tech Stack

| Tool | Version/Detail |
|------|----------------|
| Framework | Vite 5 + React 18 + TypeScript |
| Styling | Tailwind CSS 3.4 + tailwindcss-animate |
| UI Components | shadcn/ui (60+ component files in src/components/ui/) |
| Routing | react-router-dom v6 |
| State | @tanstack/react-query (installed, not heavily used yet) |
| Icons | lucide-react |
| Build | Vite with SWC plugin |
| Dev dependency | lovable-tagger (DO NOT remove) |

---

## Design System

### Color Tokens (use these exact values)
```
Background:    #0A0F1E  (dark navy)        hsl(220, 52%, 8%)
Accent green:  #00E5A0  (mint/teal)        hsl(160, 100%, 45%)  -- primary CTA color
Accent darker: #00C77A                     -- hover state
Text primary:  #E8EAF2
Text muted:    #6B7594
Border:        #1E2A44
Card bg:       #111829
```

### Current CSS Issue
The existing index.css has close-but-wrong color values:
- Primary green is `155 68% 39%` (~#20A66B), should be `160 100% 45%` (#00E5A0)
- Background is `215 35% 18%` (~#1E2D4D), should be `220 52% 8%` (#0A0F1E)
These need to be reconciled throughout index.css.

### Typography
- **Headings:** Syne (weights 700, 800) via Google Fonts. NOT currently imported.
- **Body:** DM Sans via Google Fonts. NOT currently imported.
- Current site uses system defaults. Both fonts need to be added.

### Component Patterns
- Glass card system exists: `.glass`, `.glass-lift`, `.usp-card` CSS classes in index.css
- Dark theme throughout, green accent for CTAs and highlights
- Responsive layout (mobile/desktop) is partially working

---

## Brand Identity

**Brand:** RentRefi
**Tagline:** "DSCR rental loans, simplified."
**Positioning:** Missouri's only dedicated DSCR-first private lender
**4 Pillars:** Expertise, Simplicity, Transparency, Speed
**Sister brand:** Minnow Loan (bridge/fix-flip loans, separate brand, do not mix)

### Voice & Copy Rules
- Direct, knowledgeable, not salesy. Think knowledgeable friend, not loan officer pushing product.
- DSCR is always capitalized.
- "RentRefi" is one word, capital R capital R.
- Never use em dashes in copy.
- Missouri-specific content should reference real market data (see Market Data section).
- All legal disclaimers must stay (investment purposes only, not a commitment to lend, etc.).

---

## Project Structure

```
src/
├── App.tsx                    # Router: only "/" and 404 routes exist
├── main.tsx                   # Entry point
├── index.css                  # CSS variables, glass card styles, animations
├── App.css                    # Minimal additional styles
├── assets/
│   └── RentRefi_Logo_Primary.svg   # Logo exists but header uses text-only
├── components/
│   ├── SiteHeader.tsx         # Sticky nav: text logo "RENT" + "Refi"
│   ├── HeroSection.tsx        # Hero + lead capture form (GHL webhook)
│   ├── ComparisonSection.tsx  # Retail Banks vs Hard Money
│   ├── WhatItIsSection.tsx    # "This is NOT / This IS"
│   ├── HowItWorksSection.tsx  # 3-step process
│   ├── PortfolioBuildersSection.tsx  # "Built for Portfolio Builders"
│   ├── OutcomesSection.tsx    # 6 benefit cards
│   ├── TwoChoicesSection.tsx  # Option 1 vs Option 2
│   ├── CalculatorSection.tsx  # Refi comparison calculator (NOT DSCR pre-qual)
│   ├── FaqSection.tsx         # 5 FAQ accordion items
│   ├── FinalCtaSection.tsx    # Bottom CTA
│   ├── SiteFooter.tsx         # Footer with contact, social, legal
│   ├── NavLink.tsx            # Unused
│   └── ui/                    # Full shadcn/ui library
├── hooks/
│   ├── use-mobile.tsx
│   └── use-toast.ts
├── lib/
│   └── utils.ts               # cn() utility
├── pages/
│   ├── Index.tsx              # Homepage: assembles all 10 sections
│   └── NotFound.tsx           # 404 page
└── test/
    ├── setup.ts
    └── example.test.ts
```

---

## What Currently Works

- Single-page homepage renders with all 10 sections
- Dark theme with green accent (close to brand but needs color fix)
- Glass card component system
- Lead capture form posts to GHL webhook:
  `https://services.leadconnectorhq.com/hooks/BFpydo68ZM7YR9ezSPDb/webhook-trigger/98421fc2-c4b7-4d2d-8ff0-48857b3b6371`
- Form fields: name, email, phone, property address, estimated rent, entity name
- Refi comparison calculator with P&I math, DSCR calculation, cash flow display
- Responsive layout (mobile/desktop)
- Smooth scroll navigation
- FAQ accordion with animation

---

## What's Wrong (Fix These)

### Brand Alignment
- NO mention of "DSCR" anywhere on the site. The entire brand is built around DSCR lending.
- Copy reads as generic "30-year fixed rental loans" instead of DSCR-first positioning
- No local market positioning (Columbia, St. Louis not mentioned)
- No investor persona targeting
- Logo SVG exists in src/assets/ but SiteHeader uses text-only logo
- Phone number is placeholder: 123.456.7890
- Fonts are system defaults (Syne and DM Sans not imported)
- CSS color variables are close but not exact brand tokens (see Design System above)

### Missing Pages
- No Columbia, MO landing page (#1 SEO priority, zero competition)
- No St. Louis, MO landing page
- No blog or content system
- No "About" or "How DSCR Works" educational page
- No routing infrastructure for multi-page site (only "/" exists)

### Missing Functionality
- Calculator is basic refi comparison, NOT the DSCR pre-qualification engine
- No integration with existing DSCR pre-qual calculator (separate Vercel app)
- No SEO meta tags, Open Graph tags, or structured data
- No sitemap.xml
- No analytics

---

## Build Roadmap (Priority Order)

### Phase 1: Fix the Homepage
1. Update ALL copy to DSCR-first positioning and RentRefi brand voice
2. Fix CSS color variables to exact brand tokens
3. Import Google Fonts: Syne (headings) and DM Sans (body)
4. Use SVG logo from src/assets/ in SiteHeader
5. Replace placeholder phone (get real number from client)
6. Rewrite FAQ content to be DSCR-specific
7. Add proper `<title>`, meta description, OG tags

### Phase 2: Multi-Page Architecture
1. Add react-router routes for all new pages
2. Create shared layout component (SiteHeader + SiteFooter wrapper)
3. Build page templates: landing page, blog post, educational content
4. Add navigation links in header

### Phase 3: DSCR Calculator Integration
Options (TBD):
- A: Embed existing Vercel pre-qual app via iframe
- B: Rebuild calculator as component, point to same n8n webhook
- C: Keep refi calc AND add DSCR pre-qual as separate page

The existing pre-qual app connects to:
- n8n webhook: `https://sldigitalmedia.app.n8n.cloud/webhook/rentrefi-prequal`
- Anthropic API for AI deal summaries
- RentCast API for rent comps

### Phase 4: SEO Landing Pages
1. Columbia, MO DSCR page (zero competition)
2. St. Louis, MO DSCR page
3. Target keywords: "DSCR loan Missouri," "DSCR loan Columbia MO," "DSCR loan St. Louis"

### Phase 5: Blog System
1. Blog index + post template
2. 10-post content roadmap (titles listed in SEO section below)

---

## DSCR Product Details

### Formula
```
effectiveRent = monthlyRent x 0.75 (vacancy factor)
P&I = loan amortized at 7% over 30 years (base calc rate)
PITIA = P&I + monthly taxes + monthly insurance
DSCR = effectiveRent / PITIA
LTV = loanAmount / propertyValue x 100
```

### Qualification Tiers
| Tier | DSCR Range | Max LTV | Label |
|------|-----------|---------|-------|
| Strong | >= 1.25 | 75% | Likely Approved |
| Conditional | >= 1.00 | 70% | Conditionally Qualified |
| Specialty | >= 0.75 | 65% | Specialty Program |
| Review | < 0.75 | Case-by-case | Manual Review |

### Base Rate Table (before LLPAs)
| DSCR Tier | LTV Bucket | Credit Tier | Rate Low | Rate High |
|-----------|-----------|-------------|----------|-----------|
| Strong | low (<=65%) | prime (740+) | 6.25% | 6.75% |
| Strong | mid (<=80%) | prime | 6.50% | 7.00% |
| Strong | low | standard (<740) | 6.50% | 7.00% |
| Conditional | low | prime | 7.00% | 7.50% |
| Conditional | mid | prime | 7.25% | 7.75% |
| Specialty | low | prime | 7.50% | 8.25% |
| Specialty | low | standard | 8.00% | 8.75% |

### LLPAs (add to base rate)
- SFR: +0.000% / 2-4 unit: +0.250% / Condo: +0.125% / STR/Airbnb: +0.375% / Rural: +0.250%
- Individual: +0.000% / LLC (single): +0.125% / LLC (multi): +0.250% / Trust: +0.125% / Corp/LP: +0.250%
- Purchase: +0.000% / Rate/Term refi: +0.125% / Cash-out refi: +0.375%
- Loan < $150K: +0.500% / $150K-$250K: +0.250% / > $250K: +0.000%

---

## Target Investor Personas

### 1. BRRRR Investor (Highest Priority)
- Already understands DSCR, has a property in mind
- The refinance step of BRRRR is why DSCR loans exist
- Many leads from Minnow Loan bridge pipeline
- Hook: "Stuck on the refinance step? Close your DSCR refi in 10-21 days."

### 2. Side Investor / W-2 + Rentals (Education-First)
- W-2 employed, 1-3 rentals, never heard of DSCR
- Hitting DTI walls, property count limits
- Hook: "Great cash flow. Bad tax returns. Sound familiar?"

### 3. Portfolio Builder
- Owns 5+ properties, banks won't lend anymore
- Hook: "Banks say no after 4 properties. We say yes to 20+."

### 4. Out-of-State Investor
- Investing in Missouri remotely for cash flow
- Hook: "St. Louis: 9-11% cash-on-cash. Finance from anywhere."

### 5. Self-Employed Investor
- Business owner showing low income on returns after deductions
- Hook: "Write off everything. Still qualify. That's DSCR."

---

## Market Data (Use in Copy)

### Columbia, MO
- Median home price: $340,000 (up 7.9% YoY)
- Average rent: $1,395-$1,656/mo
- Rent growth: +5-7% YoY
- Renter-occupied rate: 51-54% (vs 36% national)
- Key driver: Mizzou, 31,100+ students, 18% enrollment surge 2024-25
- Inventory: ~725 listings, 1.9 months supply
- SEO opportunity: Zero "DSCR loan Columbia MO" pages from any competitor

### St. Louis, MO
- Median home price (city): $235,000 (up 6.8% YoY)
- Average rent: $1,250-$1,390/mo
- SFR rent growth: +6.1% YoY (#2 nationally)
- Investor purchase share: 20.6% (#2 metro in USA)
- Cap rates: 5.0-7.6%
- Key catalysts: NGA West Campus ($1.7B, 3,000 employees 2026), Cortex Innovation District (5,000+ tech jobs), $2.8B airport replacement, Missouri eliminated state capital gains tax 2025

### Missouri Regulatory Context
- Non-judicial foreclosure: ~60 days (one of fastest in US)
- Business-purpose LLC loans exempt from usury cap
- No rent control statewide
- Eviction timeline: 3-6 weeks
- Property tax assessment: 19% of market value for investment properties
- Very landlord-friendly state

---

## SEO Target Keywords

| Keyword | Competition | Priority |
|---------|-------------|----------|
| "DSCR loan Columbia MO" | None | Launch immediately |
| "Student housing loan Columbia MO" | None | Launch immediately |
| "Rental property loan Columbia MO" | None | Launch immediately |
| "DSCR loan St Louis" | Low-Moderate | Month 1 |
| "No income verification rental loan Missouri" | Low | Month 1 |
| "BRRRR financing Missouri" | Low | Month 1-2 |
| "DSCR loan Missouri" | High | Build authority over time |

### Blog Content Titles (Build Order)
1. "DSCR Loans in Columbia, MO: How to Finance Rental Properties Near Mizzou"
2. "DSCR Loans in St. Louis: Neighborhood-by-Neighborhood Cash Flow Guide"
3. "DSCR Loan Requirements in Missouri: Everything Investors Need to Know (2026)"
4. "Best Neighborhoods to Invest in Columbia, MO (2026 Investor Guide)"
5. "The BRRRR Strategy in Missouri: A Complete Guide"
6. "No Income Verification Rental Property Loans in Missouri: DSCR Explained"
7. "Hit the Fannie Mae 10-Property Limit? Here's Your Next Move"
8. "Missouri Property Tax Rates by County: How They Impact Your DSCR Ratio"
9. "How to Finance an Airbnb/STR in Missouri with a DSCR Loan"
10. "The Out-of-State Investor's Guide to St. Louis Real Estate 2026"

---

## GHL Integration Notes

### Lead Capture Webhook
Current hero form posts to:
`https://services.leadconnectorhq.com/hooks/BFpydo68ZM7YR9ezSPDb/webhook-trigger/98421fc2-c4b7-4d2d-8ff0-48857b3b6371`

### Tags to Apply on Forms
audience:brrrr, audience:side-investor, source:prequal, source:lead-magnet, source:meta-ad, source:organic

### Custom Fields to Populate
DSCR Ratio, DSCR Tier, Property Value, Loan Amount, Monthly Rent, LTV, Rate Range, Credit Range, Property Type, Loan Purpose, Entity Type, Lead Magnet Downloaded, Audience Type, Property Address, Property City, Property State

---

## Contact & Social

- Email: info@rentrefi.com
- Phone: (placeholder, needs real number from Shelby)
- Instagram: instagram.com/rentrefi
- Facebook: facebook.com/profile.php?id=61550981867034
- Website: rentrefi.com
- GHL pages: get.rentrefi.com

---
## ============================================================
## APPEND EVERYTHING BELOW TO THE BOTTOM OF CLAUDE.md
## (above the Changelog section)
## ============================================================

---

## PRIORITY: A2P SMS Compliance (Do Before Anything Else)

RentRefi needs A2P 10DLC campaign approval in GoHighLevel before SMS workflows can go live. The site must have the following before the campaign can be submitted. Full compliance spec is in `docs/A2P-COMPLIANCE.md`.

### Pages to Create
1. **`/privacy-policy`** - Full privacy policy for RENTREFI, LLC. Content is in docs/A2P-COMPLIANCE.md Section 3.
2. **`/terms-of-service`** - Full terms of service. Content is in docs/A2P-COMPLIANCE.md Section 4.

Both pages should:
- Use the same SiteHeader + SiteFooter layout as the rest of the site
- Match the dark theme and brand tokens
- Be simple, clean, readable legal text (no glass cards or fancy components)
- Have proper `<title>` and meta description tags
- Be added to react-router in App.tsx

### Footer Updates
Add to SiteFooter.tsx:
- "Privacy Policy" link to `/privacy-policy`
- "Terms of Service" link to `/terms-of-service`
These must appear sitewide.

### Hero Form: SMS Consent
Add to HeroSection.tsx form, below the phone field and above submit:
- Unchecked checkbox with SMS consent disclosure text
- "Privacy Policy" and "Terms of Service" as clickable links within the text
- Checkbox must NOT be pre-checked
- See docs/A2P-COMPLIANCE.md Section 2 for exact copy

### Hero Form: Fix Broken Submission
The hero form currently posts to a GHL webhook but nothing arrives in GHL. Debug checklist:
1. Open browser DevTools Network tab, submit the form, check if the POST request fires
2. Check if the webhook URL is still valid: `https://services.leadconnectorhq.com/hooks/BFpydo68ZM7YR9ezSPDb/webhook-trigger/98421fc2-c4b7-4d2d-8ff0-48857b3b6371`
3. Check if the payload format matches what GHL expects (field names, content types)
4. Check for CORS errors in the console
5. Check if there's error handling (or if errors are silently swallowed)

### Business Identity on Site
Ensure the following are visible somewhere on the site (footer is fine):
- Full legal name: RENTREFI, LLC
- Email: info@rentrefi.com
- Phone: (needs real number from Shelby)

---

## Route Map (Current + Planned)

| Route | Status | Component |
|-------|--------|-----------|
| `/` | Exists | pages/Index.tsx |
| `/privacy-policy` | Needs to be built | A2P requirement |
| `/terms-of-service` | Needs to be built | A2P requirement |
| `*` | Exists | pages/NotFound.tsx |
| `/columbia-mo` | Planned (Phase 4) | SEO landing page |
| `/st-louis-mo` | Planned (Phase 4) | SEO landing page |
| `/blog` | Planned (Phase 5) | Blog index |
| `/blog/:slug` | Planned (Phase 5) | Blog post |
---

## Changelog

| Date | Changes |
|------|---------|
| 2026-03-26 | Initial CLAUDE.md created from project context documents |
