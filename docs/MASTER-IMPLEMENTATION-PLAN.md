# RentRefi: Master Implementation Plan
## Merging SEO Playbook + Existing Restructure Spec into Claude Code Phases

> This document bridges the SEO research playbook with the actual codebase.
> Save to docs/ in the repo so Claude Code can reference it.
> Created: March 26, 2026

---

## What's Already Done or In Progress

| Item | Status |
|------|--------|
| Homepage restructure (DSCR-first copy, new sections) | In progress (12-prompt sequence) |
| Privacy Policy page | Built |
| Terms of Service page | Built |
| SMS consent on hero form | Built |
| Footer legal links | Built |
| Brand colors fixed in CSS | In progress |
| Syne + DM Sans fonts imported | In progress |
| A2P compliance doc in repo | Done |
| CLAUDE.md in project root | Done |
| WORKFLOW.md in docs/ | Done |

**Finish the current 12-prompt homepage restructure before starting anything below.**

---

## Phase A: Homepage + Technical Foundation (Current Sprint)

This is the existing 12-prompt restructure. Complete it first.

After it's done, add these technical items via Claude Code:

### A1. SEO Meta Tags + Schema Markup (Site-Wide)

```
Prompt for Claude Code:

Add SEO infrastructure to the site. Create a reusable SEO component 
and add schema markup.

1. Create src/components/SEOHead.tsx that uses react-helmet-async 
   (install it: npm install react-helmet-async). This component should accept:
   - title (string)
   - description (string)
   - url (string, canonical URL)
   - ogImage (string, optional)
   - schema (object, optional JSON-LD)

   It should render:
   - <title>{title}</title>
   - <meta name="description" content={description} />
   - <meta property="og:title" content={title} />
   - <meta property="og:description" content={description} />
   - <meta property="og:url" content={url} />
   - <meta property="og:image" content={ogImage} />
   - <meta property="og:type" content="website" />
   - <meta name="twitter:card" content="summary_large_image" />
   - <link rel="canonical" href={url} />
   - If schema is provided, render a <script type="application/ld+json">

2. Wrap the app in HelmetProvider in main.tsx

3. Add SEOHead to the homepage (pages/Index.tsx) with:
   - Title: "RentRefi | DSCR Rental Loans, Simplified | Missouri"
   - Description: "Missouri's dedicated DSCR loan specialist. Qualify 
     on your rental property's income, not your tax returns. Serving 
     Columbia MO and St. Louis. Close in 10 to 21 days."
   - URL: "https://rentrefi.com"

4. Add Organization + FinancialService schema to the homepage:
   (see docs/RentRefi-SEO-Conversion-Playbook.md Section 8.1 for the 
   exact JSON-LD structure)

5. Add SEOHead to Privacy Policy and Terms of Service pages too.

6. Add BreadcrumbList schema to all pages.
```

### A2. Sitemap + Robots.txt

```
Prompt for Claude Code:

Create a sitemap.xml and robots.txt for the site.

1. Create public/sitemap.xml with entries for all current routes:
   - https://rentrefi.com/
   - https://rentrefi.com/privacy-policy
   - https://rentrefi.com/terms-of-service
   Set lastmod to today's date. Priority 1.0 for homepage, 0.5 for legal pages.
   We will add new URLs as pages are built.

2. Create public/robots.txt:
   User-agent: *
   Allow: /
   Sitemap: https://rentrefi.com/sitemap.xml

   # Allow AI crawlers
   User-agent: GPTBot
   Allow: /

   User-agent: ChatGPT-User
   Allow: /

   User-agent: PerplexityBot
   Allow: /

   User-agent: ClaudeBot
   Allow: /

   User-agent: Google-Extended
   Allow: /
```

### A3. Pre-Rendering for SEO (If Needed)

If Google Search Console shows indexing issues after deploying to main:

```
Prompt for Claude Code:

Install and configure react-snap for pre-rendering.

npm install react-snap --save-dev

Add to package.json scripts:
"postbuild": "react-snap"

Add to package.json:
"reactSnap": {
  "source": "dist",
  "minifyHtml": { "collapseWhitespace": false }
}

This generates static HTML files at build time so crawlers see 
rendered content instead of an empty div.
```

---

## Phase B: Core SEO Pages (Weeks 2-3)

These are new pages to build after the homepage is solid. Each one 
gets its own Claude Code prompt session.

### B1. DSCR Loans Pillar Page (/dscr-loans)

**URL:** /dscr-loans
**Target keywords:** DSCR loan, DSCR loans, what is a DSCR loan
**Word count:** 3,000-4,000 words
**Template:** See SEO Playbook Section 5.2

This is the most important SEO page on the site. It links to 
everything and everything links back to it.

**Sections to build:**
1. H1: "DSCR Loans: The Complete Guide for Rental Property Investors"
2. What Is a DSCR Loan? (400 words with formula + example)
3. DSCR Loan Requirements (400 words with table)
4. Current Rate Ranges (300 words, link to rates page later)
5. Property Types That Qualify (300 words)
6. DSCR vs Conventional comparison table (300 words)
7. The RentRefi DSCR Process (300 words, 3 steps)
8. Who Should Use a DSCR Loan? (300 words, persona cards)
9. Why Missouri for DSCR (400 words, regulatory advantages)
10. FAQ section (10-15 questions with FAQPage schema)
11. CTA block

**Internal links from this page:**
- /dscr-loans/columbia-mo (when built)
- /dscr-loans/st-louis-mo (when built)
- /calculator (when built)
- All future blog posts link back here

### B2. Columbia MO Landing Page (/dscr-loans/columbia-mo)

**URL:** /dscr-loans/columbia-mo
**Target keywords:** DSCR loan Columbia MO, rental property loan Columbia MO
**Word count:** 2,000-2,500 words
**Competition:** ZERO. This is the #1 priority page.
**Template:** See SEO Playbook Section 5.3

**Sections to build:**
1. H1: "DSCR Loans in Columbia, MO: Rental Property Financing for Columbia Investors"
2. Columbia Market Overview (400 words):
   - Median home price: $340,000 (up 7.9% YoY)
   - Average rent: $1,395-$1,656/mo
   - Renter-occupied rate: 51-54% (vs 36% national)
   - Key driver: Mizzou, 31,100+ students, 18% enrollment surge
   - Inventory: ~725 listings, 1.9 months supply
3. Why Columbia for DSCR Investors (300 words):
   - University anchor, student housing demand
   - Healthcare anchor (MU Health)
   - Low vacancy, strong rent growth
4. Sample DSCR Deal Analysis (300 words):
   - Walk through: $340K SFR near Mizzou, $1,500/mo rent
   - Calculate DSCR step by step
   - Show qualification tier and estimated rate
5. Columbia Neighborhoods for Investors (300 words):
   - Downtown Columbia, East Campus, South Providence, Old Southwest
   - Price ranges and rent estimates per neighborhood
6. RentRefi DSCR Loan Terms (200 words)
7. How to Get Started (200 words + CTA)
8. FAQ section (8-10 Columbia-specific questions, FAQPage schema)
9. CTA: "Get your personalized DSCR rate for Columbia, MO"

**Schema:** FinancialService, FAQPage, LoanOrCredit, BreadcrumbList

### B3. St. Louis Landing Page (/dscr-loans/st-louis-mo)

Same template as Columbia but with St. Louis data:
- Median home price: $235,000 (up 6.8% YoY)
- SFR rent growth: +6.1% YoY (#2 nationally)
- Investor purchase share: 20.6% (#2 metro in US)
- Cap rates: 5.0-7.6%
- NGA West, Cortex, airport replacement catalysts
- Neighborhoods: Tower Grove, Central West End, The Hill, Soulard

### B4. Missouri State Page (/dscr-loans/missouri)

Hub page linking to Columbia and St. Louis city pages.
Overview of Missouri regulatory advantages.
Links to all city pages and relevant blog content.

### B5. DSCR Calculator Page (/calculator)

Dedicated calculator page with:
- Full DSCR calculator (property value, loan amount, rent, taxes, insurance)
- Partial gating: show DSCR ratio free, gate personalized rate behind form
- 1,500+ words of educational content below calculator
- FAQ section with calculator-specific questions
- Internal links to pillar page and city pages

---

## Phase C: Content Expansion (Weeks 4-8)

### Blog Posts (Priority Order)

Build a blog index page at /blog and individual post pages at /blog/[slug].

**P1 blog posts (build first):**
1. "How DSCR Loans Work: The Complete 2026 Guide"
2. "DSCR Loan Requirements: What You Need to Qualify"
3. "How to Buy Rental Property in Columbia, MO with a DSCR Loan"
4. "DSCR Loan vs Conventional: Which Is Right for Investors?"
5. "St. Louis Real Estate Investing: Why DSCR Loans Are the Edge"

**P2 blog posts:**
6. "DSCR Loan Rates in 2026: What to Expect"
7. "DSCR Loan Down Payment: How Much Do You Need?"
8. "NGA West Campus: Why St. Louis Is About to Boom for Investors"
9. "BRRRR Strategy with DSCR Loans: Step-by-Step"
10. "Columbia MO Student Housing: A DSCR Investor's Guide"

### Guide Pages

Build at /guides/[slug]:
1. /guides/brrrr-financing-missouri
2. /guides/student-housing-investment-columbia-mo
3. /guides/dscr-vs-conventional-loans
4. /guides/no-income-verification-rental-loans
5. /guides/out-of-state-investing-missouri
6. /guides/llc-rental-property-loans-missouri

### Additional Pages

- /about (Shelby bio, company story, NMLS info)
- /how-it-works (3-step process, detailed)
- /rates (current rate ranges, updated regularly)
- /faq (standalone comprehensive FAQ, 20+ questions)
- /contact (with scheduling embed)
- /reviews (testimonials page)

---

## Phase D: Neighborhood Pages (Weeks 9-16)

Build at /areas/[city]/[neighborhood]:

**Columbia neighborhoods:**
- /areas/columbia-mo/east-campus
- /areas/columbia-mo/downtown-columbia
- /areas/columbia-mo/south-providence
- /areas/columbia-mo/old-southwest

**St. Louis neighborhoods:**
- /areas/st-louis-mo/tower-grove
- /areas/st-louis-mo/central-west-end
- /areas/st-louis-mo/the-hill
- /areas/st-louis-mo/soulard
- /areas/st-louis-mo/north-city

Each needs 1,000-1,500 words of unique content with local data.

---

## Internal Linking Rules (Apply to Every Page)

1. Every page links to /dscr-loans (pillar) and the hero form (conversion)
2. Every city page links to its neighborhood pages and back to /dscr-loans/missouri
3. Every blog post includes: 1 link to pillar page, 1 link to most relevant city page, 2-3 links to related blog posts, 1 link to calculator
4. Every guide page links to pillar, relevant city pages, and related blog posts
5. Footer nav includes: DSCR Loans, Columbia MO, St. Louis MO, Calculator, Blog, Apply
6. Breadcrumb navigation on all pages (Home > DSCR Loans > Columbia MO)
7. Target 5-10 internal links per 2,000 words of content

---

## Content Differentiation Checklist (From Playbook Appendix C)

Before publishing any page, include at least 3 of these:

- [ ] Specific market data with source and date
- [ ] Named neighborhoods or sub-markets
- [ ] A worked DSCR calculation using local numbers
- [ ] Missouri-specific regulatory advantage mention
- [ ] Named economic catalyst (NGA West, Mizzou, Cortex)
- [ ] Investor persona targeting
- [ ] A specific closing timeline commitment
- [ ] Embedded calculator with pre-filled local data

---

## Multi-Step Form Upgrade (Phase B or C)

The playbook recommends converting the hero form to a multi-step form.
This is a significant UX change. Build it when the calculator page is built.

**Step 1:** Property type + location (icon buttons, low friction)
**Step 2:** Loan purpose + estimated rent + property value
**Step 3:** Contact info (name, email, phone)
**Result:** Show DSCR estimate + CTA for full quote

This replaces the current single-page 6-field form.

---

## Key Decision: SPA vs SSR

The playbook recommends migrating to Next.js. The project constraint 
says stay on Lovable (Vite SPA).

**Current plan:** Stay on Lovable, launch content, monitor Google 
Search Console for indexing. If indexing is a problem:

1. First try: react-snap pre-rendering
2. Second try: Prerender.io service
3. Last resort: Migrate to Next.js on Vercel

Do not let the perfect technical stack delay getting the Columbia MO 
page live. Zero competition means even imperfect indexing wins.
