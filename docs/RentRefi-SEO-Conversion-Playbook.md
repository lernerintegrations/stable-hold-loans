# RentRefi SEO + Conversion Architecture Playbook
## Implementation-Ready Spec for Developer Handoff
**Prepared by Lerner Integrations | March 2026**

---

## Table of Contents

1. [Competitor Teardowns](#1-competitor-teardowns)
2. [The SPA Problem & Technical Fix](#2-the-spa-problem--technical-fix)
3. [Complete Site Architecture](#3-complete-site-architecture)
4. [Keyword-to-Page Mapping](#4-keyword-to-page-mapping)
5. [Page Templates & Content Specs](#5-page-templates--content-specs)
6. [Conversion Optimization](#6-conversion-optimization)
7. [SEO Content Strategy](#7-seo-content-strategy)
8. [Schema Markup Specifications](#8-schema-markup-specifications)
9. [Generative Engine Optimization (GEO)](#9-generative-engine-optimization-geo)
10. [Phased Implementation Plan](#10-phased-implementation-plan)

---

## 1. Competitor Teardowns

### 1.1 Griffin Funding (griffinfunding.com) — Ranks #1 "DSCR loan Missouri"

**Site Architecture:**
- URL pattern: `/[state]-mortgage-lender/dscr-loans-[state]/`
- Nested state pages: `/missouri-mortgage-lender/dscr-loans-missouri/`, `/missouri-mortgage-lender/missouri-investment-property-loans/`
- National DSCR pillar: `/non-qm-mortgages/dscr-loans/`
- Secondary pillar: `/non-qm-mortgages/debt-service-coverage-ratio-investor-loans/`
- Calculator page: `/non-qm-mortgages/dscr-loans/dscr-calculator/`
- State pages for all 50 states + D.C.

**What Makes Them Rank:**
- Massive domain authority from national presence
- Deep state-level pages (2,000+ words) with DSCR-specific content
- FAQ sections targeting long-tail questions (good for featured snippets)
- AI-driven underwriting messaging differentiator (LIA)
- DSCR calculator as lead magnet
- Rates page updated frequently (signals freshness to Google)

**Form Strategy:**
- CTAs: "Apply Now," "Contact us today to find out!"
- Multi-step application form (longer but segmented)
- Forms appear at top of page and after major content sections
- Griffin Gold App promoted as secondary conversion path

**Weaknesses / Gaps RentRefi Can Exploit:**
- Missouri page is generic. Zero mention of Columbia, no neighborhood-level content
- No market data (cap rates, renter-occupied rates, university market specifics)
- No case studies from Missouri-specific deals
- No blog content targeting Missouri investor keywords
- Cookie-cutter state page template with swapped state names
- No BRRRR-specific or student-housing-specific content

---

### 1.2 Visio Lending (visiolending.com) — Largest National DSCR Lender by Volume

**Site Architecture:**
- Primary pillar: `/dscr-loans/`
- State location pages: `/resources/location/[state]/` (e.g., `/resources/location/maine/`)
- Legacy DSCR state pages: `/dscr/[state]` (e.g., `/dscr/maine`)
- Resource hub: `/resources/` with guides, calculators, and educational content
- Calculator: `/resources/dscr-calculator/`
- Process page: `/lending-process/`
- Extensive blog under `/resources/`: converting primary to rental, starting rental business, long-term rental guide, short-term rental guide

**Content Strategy:**
- 3,500-6,000 word pillar guides targeting educational intent
- Lender reviews (not applicable to RentRefi but shows content breadth)
- Step-by-step process transparency (4-step visualization)
- Strong testimonials page with named reviewers
- Blog content follows investor lifecycle (start > buy > finance > manage > scale)

**What Makes Them Rank:**
- $3.5B+ funded (massive trust signals)
- Deep educational content that ranks for informational queries
- Clean site architecture with clear pillar/cluster model
- Strong internal linking between guides

**Weaknesses:**
- No city-level pages. State pages only
- No Missouri-specific content beyond state template
- No market data or local investment analysis
- Heavy on national brand, zero local presence
- No interactive tools beyond basic calculator

---

### 1.3 Easy Street Capital (easystreetcap.com) — BiggerPockets Presence

**Site Architecture:**
- URL pattern: `/dscr-loans-[state]/` (e.g., `/dscr-loans-missouri/`)
- Each state page showcases recently funded loans with photos and details
- National products page structure
- BiggerPockets forum presence drives referral traffic

**Content Strategy:**
- State pages feature real deal case studies with property photos
- Each case study includes loan amount, type (acquisition/refi/cash-out), and neighborhood
- Rate transparency: "Rates from 5.75%"

**What Makes Them Rank:**
- BiggerPockets community engagement (referral traffic, not just organic)
- Social proof through real funded deal examples
- State pages with actual local property examples

**Weaknesses:**
- State pages only, no city-level targeting
- Missouri page mentions St. Louis and Kansas City but NOT Columbia
- No blog content
- Limited educational content
- Single CTA approach ("Click here now to get started")

**RentRefi Exploit:**
- Easy Street has zero Columbia presence
- Their case studies could be replicated at city level with even more local detail
- No student housing / university market content

---

### 1.4 Longleaf Lending (longleaflending.com) — Has City-Level Pages

**Site Architecture:**
- State page: `/dscr-loans/dscr-loan-missouri`
- City pages: `/dscr-loans/dscr-loan-st-louis-missouri`, `/dscr-loans/dscr-loan-columbia-missouri` (if exists)
- Veteran-owned messaging throughout
- DSCR calculator embedded on state/city pages
- URL pattern: `/dscr-loans/dscr-loan-[city]-[state]`

**What Makes Them Rank:**
- City-level page creation (one of the few competitors doing this)
- "Veteran-owned" trust differentiator
- Inline calculator on landing pages
- Rates listed prominently ("starting at 6.6%")

**Weaknesses:**
- City pages are thin templates. St. Louis page swaps city name but keeps identical structure
- No unique local market data per city
- No blog, no educational content
- Weak internal linking
- No investor persona targeting (BRRRR, student housing, out-of-state)

**RentRefi Exploit:**
- Their city pages exist but are thin. RentRefi can build 3x the depth per city
- No Columbia-specific market analysis despite having a Columbia page URL
- No differentiation between investor types

---

### 1.5 LYNK Capital (lynkcapital.com) — Claims Lowest Rates

**Site Architecture:**
- URL pattern: `/states-dscr/dscr-loans-[state]` (e.g., `/states-dscr/dscr-loans-missouri`)
- Single state page per state, no city pages
- Rates from 6.00% messaging
- Simple application-first UX

**What Makes Them Rank:**
- Rate-competitive messaging
- Pre-approval in minutes promise
- Orlando-based lender with national reach

**Weaknesses:**
- No city pages. Missouri page mentions KC, STL, Springfield but no dedicated pages
- Generic state content
- No blog or educational resources
- No market data

---

### 1.6 Kiavi (kiavi.com) — $12B+ Funded, Largest Private Lender

**Site Architecture:**
- Product pages: `/solutions/`, `/atlas` (products page)
- Resource hub with blog content
- No state pages (pure national play)
- Uses "rental loans" terminology more than "DSCR"
- Clean tech-forward UX with self-service portal

**What Makes Them Rank:**
- Massive domain authority ($27B+ total funded)
- Tech-first brand story ("LendingHome is now Kiavi")
- Webinar strategy for lead generation
- Strong LinkedIn and PR presence
- Customer testimonials with video

**Weaknesses:**
- Zero local targeting. No state pages, no city pages
- No educational content targeting "DSCR loan" specifically (uses "rental loan" branding)
- Minimum loan amount $100K excludes some Missouri markets
- No presence in SERP for any Missouri-specific query

**RentRefi Exploit:**
- Kiavi's size is actually a weakness locally. They can't talk about Mizzou student rentals or NGA West Campus
- Their minimum loan amount excludes deals that are bread and butter in Columbia and St. Louis

---

### 1.7 HouseMax Funding (housemaxfunding.com)

**Site Architecture:**
- State page: `/dscr-loans-missouri`
- "2-minute quote" application CTA
- Founded by team that flipped 2,700+ homes
- Direct lender, no middleman messaging

**Content Strategy:**
- Missouri page includes current market data (median home price $283K, rents $1,113/mo statewide)
- Lists specific metro markets (STL, KC, Springfield, Columbia, Jeff City)
- Rate transparency: "starting at 5.5%"

**Weaknesses:**
- Single state page, no city breakdowns
- Market data is thin (one paragraph)
- No blog content
- No educational DSCR guides

---

### 1.8 Ridge Street Capital (ridgestreetcap.com) — Ranks for "DSCR loan St Louis"

**Site Architecture:**
- State page: `/dscr-loan-missouri`
- City-level content within state page (not separate pages)
- DSCR calculator inline
- "2 Min Quick App" CTA
- Neighborhood-level mentions (Tower Grove, The Hill, Central West End, Brookside, Crossroads)

**What Makes Them Rank:**
- Neighborhood-level content on Missouri page
- Specific actionable tips (increase down payment, rate buydown, insurance negotiation)
- BRRRR strategy mention with DSCR context
- Self-proclaimed "#1 DSCR Rental Property Lender in Missouri"
- 14-21 day closing timeline

**Weaknesses:**
- All city content on one page (no dedicated city URLs)
- No Columbia content at all
- No blog or educational resources
- Neighborhoods mentioned but not developed into deep content

**RentRefi Exploit:**
- Ridge Street names neighborhoods but doesn't build separate pages. RentRefi should build dedicated neighborhood/area guides
- Zero Columbia presence
- Their "14-21 day" closing is beatable messaging-wise with local knowledge

---

### 1.9 HonestCasa (honestcasa.com) — Content-Only, Not a Lender

**Site Architecture:**
- Blog-only model: `/blog/[topic-slug]`
- Programmatic content at scale (100+ DSCR articles)
- Topics cover: lender reviews, strategy guides, property type guides, refinance strategies
- DSCR calculator as lead capture tool
- "Pre-qualify in minutes" CTA connecting users to lender network

**Content Strategy — THIS IS THE MODEL TO STUDY:**
- Templated content engine: Many articles use identical framework sections ("Why investors choose DSCR," "Lender comparison," "Step-by-step process") with topic-specific headers
- Evidence of template leakage: "[tailored answer based on topic]" and "Loan Interest Only Strategy" placeholder text appearing in published content
- Massive keyword coverage through programmatic content (dscr-loan-office-building, dscr-loan-waterfall-analysis, dscr-loan-lease-agreement-essentials, etc.)
- Lender review pages (Kiavi, Lima One, New Silver) driving comparison traffic
- Long-form guides (3,000-5,000 words)
- Strong FAQ sections for featured snippet capture

**What Makes Them Rank:**
- Pure content volume. They rank for DSCR keywords they don't even offer loans for
- Deep keyword coverage across every DSCR sub-topic
- Blog structure with proper H1/H2/H3 hierarchy
- FAQ markup
- Internal linking between related articles

**Weaknesses (and Exploits for RentRefi):**
- THEY ARE NOT A LENDER. They can't close deals. Every page is a referral play
- Template content is clearly AI-generated with visible artifacts
- No local content. Zero Missouri, zero Columbia, zero St. Louis
- No real case studies, no actual loan data, no market expertise
- Content is generic nationally; RentRefi can outrank them locally by being specific
- Their model proves that content alone can rank. Imagine what content + being the actual lender does

---

## 2. The SPA Problem & Technical Fix

### 2.1 The Problem

RentRefi runs on Vite + React (client-side SPA) hosted on Lovable. This means:

- Googlebot receives an empty `<div id="root"></div>` with no content
- No meta tags, no headings, no text for crawlers to index
- React renders content only after JavaScript executes in the browser
- Google's JavaScript rendering queue can delay or fail indexing entirely
- Social media previews show nothing (no OG tags in initial HTML)
- Core Web Vitals suffer from JavaScript-dependent rendering (poor LCP)

This is a **fundamental blocker** to any SEO strategy. Nothing else matters until this is solved.

### 2.2 Recommended Solutions (In Priority Order)

**Option A: Migrate to Next.js on Vercel (STRONGLY RECOMMENDED)**

This is the correct long-term solution. Next.js provides:

- Server-Side Rendering (SSR) or Static Site Generation (SSG) out of the box
- Automatic sitemap generation
- Built-in image optimization
- Incremental Static Regeneration (ISR) for pages that need periodic updates
- Edge middleware for dynamic meta tags
- Native Vercel deployment with analytics

Migration path:
1. Create new Next.js project with App Router
2. Port existing React components (most will work as-is)
3. Convert pages to use `generateMetadata()` for dynamic SEO
4. Deploy to Vercel with custom domain
5. Set up redirects from old URLs to new

Estimated migration effort: 2-3 days for a site this size.

**Option B: Pre-rendering Service (Quick Fix if Migration Isn't Possible)**

If staying on Lovable is non-negotiable short-term:

- Use Prerender.io or similar service to generate static HTML snapshots
- Configure server to serve pre-rendered HTML to bot user agents
- Costs ~$10-50/mo depending on page count
- Not ideal but functional as a bridge solution

**Option C: Vite SSG with Vike (formerly vite-plugin-ssr)**

If staying in the Vite ecosystem:
- Install Vike (the successor to vite-plugin-ssr)
- Configure pre-rendering for all static pages
- Deploy pre-rendered HTML to static host
- More complex than Next.js, fewer community resources

### 2.3 Recommendation

**Migrate to Next.js on Vercel.** The Lovable/Vite SPA approach is fundamentally incompatible with a content-driven SEO strategy. Every competitor that ranks uses server-rendered HTML. There is no way to compete from a JavaScript-only SPA.

---

## 3. Complete Site Architecture

### 3.1 URL Structure

```
rentrefi.com/
├── / (homepage)
├── /dscr-loans/ (pillar page)
├── /dscr-loans/missouri/ (state overview)
├── /dscr-loans/columbia-mo/ (city landing page)
├── /dscr-loans/st-louis-mo/ (city landing page)
├── /apply/ (application page)
├── /calculator/ (DSCR calculator + lead capture)
├── /rates/ (current rates page, updated weekly)
├── /how-it-works/ (process explainer)
├── /about/ (company + Shelby bio)
├── /contact/
├── /blog/ (blog index)
├── /blog/[slug]/ (individual posts)
├── /guides/
│   ├── /guides/dscr-loans-explained/
│   ├── /guides/brrrr-financing-missouri/
│   ├── /guides/student-housing-investment-columbia-mo/
│   ├── /guides/dscr-vs-conventional-loans/
│   ├── /guides/no-income-verification-rental-loans/
│   ├── /guides/out-of-state-investing-missouri/
│   └── /guides/llc-rental-property-loans-missouri/
├── /areas/
│   ├── /areas/columbia-mo/downtown-columbia/
│   ├── /areas/columbia-mo/east-campus/
│   ├── /areas/columbia-mo/south-providence/
│   ├── /areas/st-louis-mo/tower-grove/
│   ├── /areas/st-louis-mo/central-west-end/
│   ├── /areas/st-louis-mo/the-hill/
│   ├── /areas/st-louis-mo/soulard/
│   └── /areas/st-louis-mo/north-city/
├── /resources/
│   ├── /resources/missouri-landlord-laws/
│   ├── /resources/missouri-investor-tax-guide/
│   └── /resources/dscr-glossary/
├── /reviews/ (testimonials page)
├── /faq/
├── /privacy/
├── /terms/
└── /sitemap.xml
```

### 3.2 Page Count by Phase

| Phase | Timeline | New Pages | Cumulative Total |
|-------|----------|-----------|------------------|
| Phase 1 (Launch) | Weeks 1-4 | 15 | 15 |
| Phase 2 (Market Expansion) | Weeks 5-8 | 10 | 25 |
| Phase 3 (Content Depth) | Weeks 9-16 | 15 | 40 |
| Phase 4 (Authority Building) | Weeks 17-52 | 20+ blog posts | 60+ |

### 3.3 Internal Linking Strategy

**Hub-and-Spoke Model:**

- **Hub (pillar):** `/dscr-loans/` links to all spoke pages
- **Spokes:** City pages, guide pages, and blog posts link back to pillar
- **Cross-links:** City pages link to relevant guides. Guides link to calculator and application

**Linking Rules:**
1. Every page links to `/dscr-loans/` (pillar) and `/apply/` (conversion)
2. Every city page links to its corresponding area/neighborhood pages
3. Every blog post includes 2-3 contextual links to service pages
4. Calculator page links to every city page (run your numbers for Columbia, St. Louis)
5. Footer navigation includes: DSCR Loans, Columbia MO, St. Louis MO, Calculator, Apply, Blog
6. Breadcrumb navigation on all pages (Home > DSCR Loans > Columbia MO)

---

## 4. Keyword-to-Page Mapping

### 4.1 Primary Keyword Targets

| Page | Primary Keyword | Secondary Keywords | Est. Monthly Search Volume | Competition |
|------|----------------|-------------------|--------------------------|-------------|
| `/dscr-loans/` | DSCR loan | DSCR loans, debt service coverage ratio loan, DSCR mortgage | 18,100 (national) | High |
| `/dscr-loans/missouri/` | DSCR loan Missouri | DSCR loans Missouri, Missouri DSCR lender | 320 | Medium |
| `/dscr-loans/columbia-mo/` | DSCR loan Columbia MO | rental property loan Columbia MO, investment property loan Columbia Missouri | ~30 (uncontested) | ZERO |
| `/dscr-loans/st-louis-mo/` | DSCR loan St Louis | DSCR loan St Louis MO, rental property loan St Louis | 170 | Low-Medium |
| `/calculator/` | DSCR calculator, DSCR loan calculator | calculate DSCR ratio | 5,400 (national) | Medium |
| `/rates/` | DSCR loan rates, DSCR loan rates 2026 | current DSCR rates Missouri | 4,400 (national) | Medium |
| `/guides/brrrr-financing-missouri/` | BRRRR financing Missouri | BRRRR strategy Missouri, BRRRR loans | ~50 | Low |
| `/guides/student-housing-investment-columbia-mo/` | student housing investment Columbia MO | Mizzou rental investment, student rental loans | ~20 (uncontested) | ZERO |
| `/guides/dscr-vs-conventional-loans/` | DSCR vs conventional loan | DSCR loan vs traditional mortgage | 590 | Medium |
| `/guides/no-income-verification-rental-loans/` | no income verification rental loan | no doc rental property loan | 390 | Low-Medium |
| `/guides/out-of-state-investing-missouri/` | out of state investing Missouri | invest in Missouri real estate from out of state | ~30 | Low |
| `/guides/llc-rental-property-loans-missouri/` | LLC rental property loan Missouri | buy rental property with LLC Missouri | ~40 | Low |
| `/blog/` (various) | DSCR loan requirements, how to qualify DSCR loan, DSCR loan down payment | Various long-tail | Varies | Varies |

### 4.2 Long-Tail Blog Keyword Targets (Priority Order)

| Blog Post Title | Target Keyword | Volume | Priority |
|----------------|---------------|--------|----------|
| How DSCR Loans Work: The Complete 2026 Guide | how do DSCR loans work | 2,900 | P1 |
| DSCR Loan Requirements: What You Need to Qualify | DSCR loan requirements | 2,400 | P1 |
| DSCR Loan Down Payment: How Much Do You Need? | DSCR loan down payment | 1,600 | P1 |
| DSCR Loan Rates in 2026: What to Expect | DSCR loan rates 2026 | 1,300 | P1 |
| DSCR Loan vs Conventional: Which Is Right for Investors? | DSCR loan vs conventional | 590 | P1 |
| How to Buy Rental Property in Columbia, MO with a DSCR Loan | buy rental property Columbia MO | ~30 | P1 (local) |
| St. Louis Real Estate Investing: Why DSCR Loans Are the Edge | St Louis real estate investing DSCR | ~50 | P1 (local) |
| NGA West Campus: Why St. Louis Is About to Boom for Investors | NGA West St Louis real estate | ~40 | P2 |
| Columbia MO Student Housing: A DSCR Investor's Guide | Columbia MO student housing investment | ~20 | P2 |
| BRRRR Strategy with DSCR Loans: Step-by-Step | BRRRR DSCR loan | 170 | P2 |
| Can You Get a DSCR Loan with Bad Credit? | DSCR loan bad credit | 480 | P2 |
| DSCR Loans for Self-Employed Investors | DSCR loan self employed | 260 | P2 |
| How to Finance an Airbnb with a DSCR Loan | DSCR loan Airbnb | 260 | P3 |
| DSCR Loan for Duplex: What You Need to Know | DSCR loan duplex | 170 | P3 |
| Missouri Landlord-Friendly Laws: What Investors Need to Know | Missouri landlord laws | 210 | P3 |

---

## 5. Page Templates & Content Specs

### 5.1 Homepage (`/`)

**Target word count:** 800-1,200 words
**Primary keyword:** DSCR rental loans Missouri, DSCR loan Columbia MO, DSCR loan St Louis

**Sections (in order):**

1. **Hero Section**
   - H1: "Missouri's DSCR Loan Specialist"
   - Subhead: "Qualify on your property's income. No tax returns. No W-2s. Close in 21 days."
   - Primary CTA button: "Get Your Free Rate Quote"
   - Secondary CTA: "Calculate Your DSCR"
   - Trust bar: "Serving Columbia MO & St. Louis | Locally Owned | DSCR Loans from [rate]%"

2. **Problem/Solution Block** (150 words)
   - "Traditional lenders look at your income. We look at your property's income."
   - Bullet benefits: No income verification, close in LLC, no property limit, 30-year fixed terms

3. **Markets We Serve** (200 words)
   - Columbia MO card with key stats (51% renter-occupied, Mizzou 31K students)
   - St. Louis MO card with key stats (20.6% investor purchase share, NGA West catalyst)
   - Each card links to respective city page

4. **How It Works** (150 words)
   - 3-step visual: Apply (10 min) > Underwrite (property income reviewed) > Close (21 days)
   - Link to `/how-it-works/`

5. **DSCR Calculator Preview** (embedded widget)
   - Simplified 3-field version (purchase price, monthly rent, estimated rate)
   - Shows estimated DSCR
   - CTA: "See Your Full Rate Quote" (links to `/calculator/`)

6. **Who We Help** (200 words)
   - Investor personas: BRRRR investors, W-2 workers with rentals, portfolio builders (5+), out-of-state investors, self-employed investors
   - Each links to a relevant guide page

7. **Social Proof Block**
   - Testimonials (2-3)
   - Trust badges (NMLS, state licensing)
   - Stats: deals funded, average closing time

8. **Footer CTA**
   - "Ready to grow your rental portfolio? Get your free DSCR rate quote in 10 minutes."
   - Form or link to `/apply/`

**Schema:** Organization, FinancialService, LocalBusiness

---

### 5.2 DSCR Loans Pillar Page (`/dscr-loans/`)

**Target word count:** 3,000-4,000 words
**Primary keyword:** DSCR loan, DSCR loans, what is a DSCR loan

**Sections:**

1. **H1:** "DSCR Loans: The Complete Guide for Rental Property Investors"
2. **What Is a DSCR Loan?** (400 words) — Definition, how it differs from conventional, who it's for
3. **How DSCR Is Calculated** (300 words) — Formula with example using Missouri numbers (Columbia property: $340K purchase, $1,500/mo rent)
4. **DSCR Loan Requirements** (400 words) — Credit score, down payment, DSCR minimums, property types, LLC eligibility
5. **DSCR Loan Rates in 2026** (300 words) — Current rate ranges, what affects your rate, link to `/rates/`
6. **Types of Properties That Qualify** (300 words) — SFR, 2-4 unit, condos, short-term rentals, student housing
7. **DSCR vs Conventional Loans** (comparison table + 300 words)
8. **The DSCR Loan Process at RentRefi** (300 words) — Step-by-step with timeline
9. **Who Should Use a DSCR Loan?** (300 words) — Investor persona descriptions linking to guides
10. **DSCR Loans in Missouri** (400 words) — Why Missouri is ideal (no rent control, non-judicial foreclosure, eliminated capital gains tax 2025, landlord-friendly courts). Links to city pages
11. **FAQ Section** (10-15 questions, FAQ schema markup)
12. **CTA Block** — "Calculate your DSCR" + "Apply now"

**Schema:** FAQPage, Article, BreadcrumbList

---

### 5.3 City Landing Page Template (`/dscr-loans/columbia-mo/` and `/dscr-loans/st-louis-mo/`)

**Target word count:** 2,000-2,500 words
**These pages are THE priority.** Columbia has ZERO competition.

**Template Sections:**

1. **H1:** "DSCR Loans in [City], Missouri — Rental Property Financing for [City] Investors"

2. **City Market Overview** (400 words)
   - Current median home price with YoY change
   - Average rent range by property type
   - Renter-occupied rate vs national average
   - Key economic drivers
   - Months of supply / inventory data
   - Cap rate ranges
   - **THIS IS THE CONTENT NO COMPETITOR HAS. It's what makes RentRefi pages 10x better.**

3. **Why [City] for DSCR Investors** (300 words)
   - Columbia-specific: University of Missouri (31,100+ students), 51-54% renter-occupied rate, student housing demand, healthcare anchor (MU Health)
   - St. Louis-specific: NGA West Campus ($1.7B, 3,000 employees arriving 2026), Cortex Innovation District, $2.8B airport replacement, 20.6% investor purchase share (#2 metro nationally), SFR rent growth +6.1% YoY (#2 nationally)

4. **Sample DSCR Deal Analysis** (300 words)
   - Walk through a real-looking deal example using actual city numbers
   - Columbia example: $340K SFR near Mizzou, $1,500/mo rent, calculate DSCR, show cash flow
   - St. Louis example: $235K SFR in Tower Grove, $1,400/mo rent, calculate DSCR

5. **Neighborhoods & Areas for Investors** (300 words)
   - Link to area pages if they exist
   - Columbia: Downtown, East Campus, South Providence, Old Southwest
   - St. Louis: Tower Grove, Central West End, The Hill, Soulard, North City

6. **RentRefi's DSCR Loan Terms** (200 words)
   - Rate range, LTV, min DSCR, closing timeline, LLC-friendly, 30-year fixed
   - Comparison table vs competitor offerings

7. **How to Get Started** (200 words)
   - 3-step process with CTA
   - Embedded calculator or link to `/calculator/`

8. **FAQ Section** (8-10 city-specific questions)
   - "What is a good DSCR for a rental property in Columbia, MO?"
   - "Can I get a DSCR loan for student housing near Mizzou?"
   - "What credit score do I need for a DSCR loan in St. Louis?"
   - "Can I buy an investment property in Columbia with an LLC?"

9. **CTA Block**
   - "Get your personalized DSCR rate for [City]"

**Schema:** FinancialService, FAQPage, LoanOrCredit, BreadcrumbList

---

### 5.4 Guide/Resource Page Template (`/guides/[slug]/`)

**Target word count:** 2,500-3,500 words

**Template Sections:**

1. **H1:** "[Topic]: [Benefit-Driven Subtitle]"
2. **TL;DR Summary** — 3-4 sentence overview with key takeaway
3. **What Is [Topic]?** — Definition + context
4. **How It Works** — Step-by-step or process explanation
5. **[Topic] in Missouri** — Local relevance, Missouri-specific data or regulations
6. **Example / Case Study** — Worked example using Missouri numbers
7. **Pros and Cons** or **Comparison Table** — Structured data
8. **How RentRefi Helps** — Soft product tie-in (150 words max)
9. **FAQ Section** (5-8 questions)
10. **Related Resources** — Internal links to other guides and city pages
11. **CTA Block** — Calculator + Apply

---

### 5.5 Blog Post Template (`/blog/[slug]/`)

**Target word count:** 1,500-2,500 words

**Template Sections:**

1. **H1:** Keyword-targeted title
2. **Publish date + estimated read time**
3. **Introduction** (100-150 words) — Hook + thesis
4. **Body Content** — H2/H3 structured, Missouri examples where possible
5. **Key Takeaways** — Bullet summary
6. **CTA Block** — "Ready to run the numbers?" links to calculator
7. **Author bio** — Shelby Reed, with NMLS number and photo
8. **Related posts** — 3 related articles

**Schema:** Article, BreadcrumbList, Author (Person)

---

## 6. Conversion Optimization

### 6.1 Form Strategy

**Form Type: Multi-Step (3 steps), Not Single-Page**

Research across mortgage/lending sites shows multi-step forms convert 12-25% better than single-page forms for financial products. Each step should feel achievable.

**Step 1: Property Info (3 fields)**
- Property type (SFR, duplex, triplex, 4-plex, condo) — dropdown
- Property location (city/zip) — text field
- Purchase price OR estimated value — number field
- Button: "Next: Loan Details"

**Step 2: Loan Details (3 fields)**
- Loan purpose (purchase, rate/term refi, cash-out refi) — dropdown
- Estimated monthly rent — number field
- Down payment percentage — slider (15%-30%)
- Button: "Next: Get Your Quote"

**Step 3: Contact Info (4 fields)**
- Full name
- Email
- Phone
- Best time to call (morning, afternoon, evening) — dropdown
- Button: "Get My Free Rate Quote"

**Form Placement by Page Type:**

| Page | Form Location | Form Type |
|------|-------------|-----------|
| Homepage | Sticky CTA in hero + bottom | Link to `/apply/` |
| City pages | Inline after market data + bottom | Embedded multi-step |
| Pillar page | After "How to Get Started" section | Embedded multi-step |
| Calculator | Gated results (show DSCR free, gate rate/payment behind form) | Partial-gate |
| Blog posts | Bottom CTA only | Link to `/calculator/` or `/apply/` |
| Rates page | Top + bottom | Embedded Step 3 only (pre-fill loan type) |

### 6.2 CTA Copy Recommendations

**Primary CTAs (buttons):**
- "Get Your Free Rate Quote" (highest-performing for mortgage leads)
- "Calculate Your DSCR" (for calculator)
- "See If You Qualify" (softer ask for educational pages)
- "Start Your Application" (for ready-to-act visitors)

**Secondary CTAs (text links):**
- "Not ready to apply? Use our DSCR calculator first."
- "See what your investment property could qualify for."
- "Talk to a DSCR specialist — no commitment."

**CTAs to AVOID:**
- "Apply Now" alone (too aggressive for educational content)
- "Contact Us" (too vague, doesn't convey value)
- "Learn More" (no urgency or specificity)
- "Submit" (clinical, no benefit)

### 6.3 Calculator Strategy (`/calculator/`)

The calculator page is a **critical lead generation tool.** Every competitor has one, and they all gate results differently.

**Recommended approach: Partial Gating**

1. **Free (no form required):**
   - DSCR ratio calculation
   - Visual indicator (green/yellow/red) showing qualification likelihood
   - Basic "Does this property cash flow?" answer

2. **Gated (requires email):**
   - Estimated interest rate
   - Monthly payment breakdown
   - Cash flow projection
   - "Get my personalized rate" sends full quote

This approach maximizes top-of-funnel engagement (investors love running numbers) while capturing leads at the moment of highest intent.

**Calculator fields:**
- Purchase price
- Down payment %
- Estimated interest rate (pre-fill with current rate)
- Monthly rent
- Annual property taxes
- Annual insurance
- Monthly HOA (if applicable)

**Output:**
- DSCR ratio with visual indicator
- Monthly PITIA breakdown
- Estimated monthly cash flow
- "Your DSCR is 1.25 — This property qualifies!" messaging

### 6.4 Speed-to-Lead Integration

After form submission, the following should happen within 60 seconds:

1. **Instant (0-5 seconds):** Thank you page with "What happens next" timeline
2. **Immediate (0-30 seconds):** Automated email with:
   - Confirmation of submission
   - Preliminary rate range based on form inputs
   - Link to book a call via Cal.com or GoHighLevel
   - PDF "DSCR Loan Buyer's Guide" attachment
3. **Fast (0-60 seconds):** GoHighLevel webhook triggers:
   - SMS to Shelby with lead details
   - Lead added to GHL pipeline
   - Automated SMS to lead: "Hey [name], this is Shelby from RentRefi. I just got your quote request for [city]. I'll have your personalized numbers ready within 2 hours. Any questions in the meantime?"
4. **Follow-up sequence:** GHL workflow for non-responsive leads (Day 1, 3, 7 touchpoints)

### 6.5 Trust Signals

Place on every page (footer or sidebar):
- NMLS number
- State licensing info
- "Missouri's Only Dedicated DSCR Specialist"
- Funded loan count (update monthly)
- Average closing time
- Review stars (Google, BBB, or collected via GHL)
- "Veteran-owned" if applicable, or "Family-owned"
- Secure application badges

---

## 7. SEO Content Strategy

### 7.1 Pillar-Cluster Content Model

```
PILLAR: /dscr-loans/
├── CLUSTER: /dscr-loans/missouri/
│   ├── /dscr-loans/columbia-mo/
│   └── /dscr-loans/st-louis-mo/
├── CLUSTER: /guides/dscr-loans-explained/
│   ├── /blog/dscr-loan-requirements/
│   ├── /blog/dscr-loan-down-payment/
│   ├── /blog/dscr-loan-rates-2026/
│   └── /blog/dscr-loan-bad-credit/
├── CLUSTER: /guides/brrrr-financing-missouri/
│   ├── /blog/brrrr-strategy-dscr-loans/
│   └── /blog/fix-and-refinance-dscr/
├── CLUSTER: /guides/student-housing-investment-columbia-mo/
│   ├── /blog/columbia-mo-student-housing-guide/
│   └── /blog/mizzou-rental-property-dscr/
└── CLUSTER: /guides/out-of-state-investing-missouri/
    ├── /blog/invest-missouri-from-out-of-state/
    └── /blog/missouri-landlord-friendly-laws/
```

### 7.2 Content Publishing Cadence

| Phase | Timeline | Frequency | Content Type |
|-------|----------|-----------|-------------|
| Phase 1 | Weeks 1-4 | 3 pages/week | Core service pages + city pages |
| Phase 2 | Weeks 5-8 | 2 pages/week | Guide pages + first blog posts |
| Phase 3 | Weeks 9-16 | 1-2 posts/week | Blog content targeting long-tail keywords |
| Phase 4 | Weeks 17-52 | 1 post/week + monthly updates | Blog + rates page updates + city data refreshes |

### 7.3 Location Page Strategy

**City-Level Pages (Phase 1):**
- `/dscr-loans/columbia-mo/` — ZERO competition, immediate #1 opportunity
- `/dscr-loans/st-louis-mo/` — Low-medium competition, beatable

**Neighborhood/Area Pages (Phase 2-3):**
These provide hyper-local depth no national competitor can match.

Each area page needs 1,000-1,500 words with:
- Neighborhood overview (demographics, property types, price range)
- Rental demand drivers (proximity to university, employer, transit)
- Average rents for the area (with property type breakdown)
- Sample DSCR calculation for a typical property
- Links to city page and pillar page
- Embedded form

---

## 8. Schema Markup Specifications

### 8.1 Organization (site-wide, in JSON-LD)

```json
{
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "name": "RentRefi",
  "url": "https://rentrefi.com",
  "logo": "https://rentrefi.com/logo.png",
  "description": "Missouri's dedicated DSCR loan specialist. Rental property loans qualified on property income, not personal income.",
  "telephone": "[phone]",
  "email": "[email]",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Columbia",
    "addressRegion": "MO",
    "addressCountry": "US"
  },
  "areaServed": [
    { "@type": "State", "name": "Missouri" },
    { "@type": "City", "name": "Columbia, MO" },
    { "@type": "City", "name": "St. Louis, MO" }
  ],
  "sameAs": ["[social links]"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "DSCR Loan Products",
    "itemListElement": [
      {
        "@type": "LoanOrCredit",
        "name": "DSCR Purchase Loan",
        "loanType": "DSCR",
        "currency": "USD"
      },
      {
        "@type": "LoanOrCredit",
        "name": "DSCR Cash-Out Refinance",
        "loanType": "DSCR",
        "currency": "USD"
      }
    ]
  }
}
```

### 8.2 FAQ Pages (on pillar, city, and guide pages)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a DSCR loan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A DSCR loan qualifies borrowers based on the rental property's income instead of personal income. No tax returns, W-2s, or DTI ratio required."
      }
    }
  ]
}
```

### 8.3 Article Schema (blog posts)

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[Post Title]",
  "author": {
    "@type": "Person",
    "name": "Shelby Reed",
    "jobTitle": "DSCR Loan Specialist",
    "worksFor": { "@type": "Organization", "name": "RentRefi" }
  },
  "publisher": {
    "@type": "Organization",
    "name": "RentRefi",
    "logo": { "@type": "ImageObject", "url": "https://rentrefi.com/logo.png" }
  },
  "datePublished": "[date]",
  "dateModified": "[date]"
}
```

### 8.4 BreadcrumbList (all pages)

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rentrefi.com/" },
    { "@type": "ListItem", "position": 2, "name": "DSCR Loans", "item": "https://rentrefi.com/dscr-loans/" },
    { "@type": "ListItem", "position": 3, "name": "Columbia MO", "item": "https://rentrefi.com/dscr-loans/columbia-mo/" }
  ]
}
```

### 8.5 HowTo Schema (process page, calculator page)

```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Get a DSCR Loan with RentRefi",
  "step": [
    { "@type": "HowToStep", "name": "Calculate Your DSCR", "text": "Use our calculator..." },
    { "@type": "HowToStep", "name": "Submit Your Application", "text": "Complete our 10-minute application..." },
    { "@type": "HowToStep", "name": "Close in 21 Days", "text": "Our team handles underwriting..." }
  ]
}
```

---

## 9. Generative Engine Optimization (GEO)

AI search tools (ChatGPT, Perplexity, Claude, Google AI Overviews) increasingly surface answers from well-structured, authoritative content. Here's how to get cited:

### 9.1 Structural Requirements for AI Citation

1. **Clear, factual statements early in content.** AI models extract concise definitions and facts from the first 200 words of a page. Lead with specifics, not fluff.

2. **Use the question-answer pattern.** AI models love pulling from FAQ sections. Every FAQ answer should be self-contained (makes sense without reading the question).

3. **Include specific numbers and data.** AI models prefer citing sources with concrete data: "Columbia MO's renter-occupied rate is 51-54%, nearly 20 points above the national average of 36%."

4. **Name the entity clearly.** Every page should clearly state "RentRefi is Missouri's dedicated DSCR loan specialist" within the first 300 words so AI can attribute properly.

5. **Create "snippet-ready" definitions.** For key terms, write 1-2 sentence definitions that AI can extract verbatim: "A DSCR loan qualifies borrowers based on the rental property's cash flow rather than personal income. The debt service coverage ratio divides monthly rent by monthly PITIA (principal, interest, taxes, insurance, and association dues)."

### 9.2 Content Patterns That Get Cited

- **"Best of" and comparison content:** "DSCR loan rates in Missouri currently range from X% to Y%..." gets cited in response to "What are DSCR loan rates?"
- **Local market data with context:** "Columbia, MO has a renter-occupied rate of 51-54%, driven by the University of Missouri's 31,100+ students..." answers "Is Columbia MO good for rental property investment?"
- **Process explanations:** Step-by-step content answers "How do I get a DSCR loan?"
- **Regulatory/legal facts:** "Missouri offers non-judicial foreclosure (~60 days), no rent control, and eliminated state capital gains tax in 2025" answers "Is Missouri landlord-friendly?"

### 9.3 GEO-Specific Page: "About DSCR Loans"

Create a comprehensive resource at `/guides/dscr-loans-explained/` that AI models will treat as an authoritative source. Structure it as a reference document with clear definitions, formulas, examples, and Missouri-specific data. This single page, done well, could become the source AI cites for Missouri DSCR queries.

---

## 10. Phased Implementation Plan

### Phase 1: Foundation (Weeks 1-4) — Fastest Path to Rankings

**Week 1: Technical Foundation**
- [ ] Migrate from Vite SPA to Next.js (or implement pre-rendering solution)
- [ ] Set up Vercel deployment with custom domain
- [ ] Configure robots.txt and XML sitemap
- [ ] Set up Google Search Console and Google Analytics 4
- [ ] Implement site-wide schema markup (Organization, BreadcrumbList)

**Week 2: Core Pages Launch**
- [ ] Homepage (new, SEO-optimized)
- [ ] `/dscr-loans/` (pillar page, 3,000+ words)
- [ ] `/dscr-loans/columbia-mo/` (PRIORITY: zero competition)
- [ ] `/dscr-loans/st-louis-mo/`
- [ ] `/calculator/` (DSCR calculator with partial gating)
- [ ] `/apply/` (multi-step form)

**Week 3: Supporting Pages**
- [ ] `/dscr-loans/missouri/` (state overview)
- [ ] `/how-it-works/` (process page)
- [ ] `/rates/` (current rates, plan for weekly/monthly updates)
- [ ] `/about/` (Shelby bio, NMLS, company story)
- [ ] `/faq/` (standalone FAQ page with 20+ questions)

**Week 4: First Content Push**
- [ ] Blog post: "How DSCR Loans Work: The Complete 2026 Guide"
- [ ] Blog post: "DSCR Loan Requirements: What You Need to Qualify"
- [ ] Blog post: "How to Buy Rental Property in Columbia, MO with a DSCR Loan"
- [ ] Submit sitemap to Google Search Console
- [ ] Submit URLs for indexing via Google Search Console URL Inspection tool
- [ ] Set up GoHighLevel speed-to-lead workflows (form > email > SMS > pipeline)

**Phase 1 Expected Outcome:** Columbia MO page should begin indexing and approaching page 1 within 2-4 weeks given ZERO competition. State and pillar pages will take longer (6-12 weeks).

---

### Phase 2: Market Expansion (Weeks 5-8)

**Week 5-6: Guide Pages**
- [ ] `/guides/brrrr-financing-missouri/`
- [ ] `/guides/student-housing-investment-columbia-mo/`
- [ ] `/guides/dscr-vs-conventional-loans/`
- [ ] `/guides/no-income-verification-rental-loans/`

**Week 7-8: Area Pages + Blog**
- [ ] `/areas/columbia-mo/east-campus/` (student housing hotspot)
- [ ] `/areas/columbia-mo/downtown-columbia/`
- [ ] `/areas/st-louis-mo/tower-grove/`
- [ ] `/areas/st-louis-mo/central-west-end/`
- [ ] Blog post: "St. Louis Real Estate Investing: Why DSCR Loans Are the Edge"
- [ ] Blog post: "NGA West Campus: Why St. Louis Is About to Boom for Investors"
- [ ] Blog post: "DSCR Loan Down Payment: How Much Do You Need?"
- [ ] Blog post: "DSCR Loan Rates in 2026: What to Expect"

**Phase 2 Expected Outcome:** Multiple pages indexing. Columbia MO page should be page 1. Guide pages begin ranking for informational queries.

---

### Phase 3: Content Depth (Weeks 9-16)

**Remaining Area Pages:**
- [ ] `/areas/st-louis-mo/the-hill/`
- [ ] `/areas/st-louis-mo/soulard/`
- [ ] `/areas/st-louis-mo/north-city/`
- [ ] `/areas/columbia-mo/south-providence/`
- [ ] `/areas/columbia-mo/old-southwest/`

**Additional Guides:**
- [ ] `/guides/out-of-state-investing-missouri/`
- [ ] `/guides/llc-rental-property-loans-missouri/`
- [ ] `/resources/missouri-landlord-laws/`
- [ ] `/resources/missouri-investor-tax-guide/`
- [ ] `/resources/dscr-glossary/`

**Blog Posts (1-2/week):**
- BRRRR Strategy with DSCR Loans
- Can You Get a DSCR Loan with Bad Credit?
- DSCR Loans for Self-Employed Investors
- How to Finance an Airbnb with a DSCR Loan
- DSCR Loan for Duplex
- Missouri Landlord-Friendly Laws
- Columbia MO Student Housing: A DSCR Investor's Guide
- DSCR Loan Closing Costs: What to Expect

**Phase 3 Expected Outcome:** 40+ indexed pages. Ranking page 1 for Columbia keywords, page 1-2 for St. Louis keywords, page 2-3 for state-level keywords.

---

### Phase 4: Authority Building (Weeks 17-52)

**Ongoing Content (1 post/week):**
- Rotate between educational DSCR content, Missouri market updates, and investor strategy content
- Monthly market data updates on city pages (refresh with new median prices, rent data)
- Quarterly rates page updates
- Case study posts as deals close (with permission)

**Off-Page SEO & Authority:**
- [ ] BiggerPockets forum participation (answer Missouri DSCR questions, link to guides)
- [ ] Local real estate investor meetup sponsorship or participation
- [ ] Columbia MO Chamber of Commerce listing
- [ ] St. Louis real estate investor association presence
- [ ] Guest posts on investor-focused blogs
- [ ] PR/press for Missouri capital gains tax elimination angle
- [ ] HARO / Connectively responses for real estate and lending queries
- [ ] YouTube content (optional): "DSCR loan explained in 5 minutes" style videos
- [ ] Update Google Business Profile weekly

**Technical Maintenance:**
- [ ] Monitor Core Web Vitals monthly
- [ ] Audit internal links quarterly
- [ ] Refresh content on pages older than 6 months
- [ ] Expand FAQ sections based on actual client questions
- [ ] A/B test form layouts and CTA copy quarterly
- [ ] Monitor competitor moves monthly (new pages, ranking changes)

**Phase 4 Expected Outcome:** Domain authority growing. Ranking page 1 for most target keywords. Beginning to appear in AI search citations. Consistent lead flow from organic search.

---

## Appendix A: Competitor URL Quick Reference

| Competitor | Missouri Page URL | City Pages? | Blog? | Calculator? |
|-----------|------------------|-------------|-------|------------|
| Griffin Funding | griffinfunding.com/missouri-mortgage-lender/dscr-loans-missouri/ | No | No | Yes |
| Visio Lending | visiolending.com/resources/location/missouri/ | No | Yes (extensive) | Yes |
| Easy Street Capital | easystreetcap.com/dscr-loans-missouri/ | No | No | No |
| Longleaf Lending | longleaflending.com/dscr-loans/dscr-loan-missouri | Yes (St. Louis, possibly Columbia) | No | Yes (inline) |
| LYNK Capital | lynkcapital.com/states-dscr/dscr-loans-missouri | No | No | No |
| Kiavi | No Missouri page | No | Yes | Pricing tool |
| HouseMax Funding | housemaxfunding.com/dscr-loans-missouri | No | No | No |
| Ridge Street Capital | ridgestreetcap.com/dscr-loan-missouri | No (mentions neighborhoods inline) | No | Yes (inline) |
| HonestCasa | No Missouri page (blog only) | No | Yes (100+ posts) | Yes |

---

## Appendix B: Missouri Regulatory Advantages (Use in Content)

These facts should appear across multiple pages for reinforcement:

- **Non-judicial foreclosure:** ~60 days (vs 12-18 months in judicial states)
- **No rent control:** Statewide prohibition on rent control ordinances
- **Business-purpose LLC loans:** Exempt from Missouri usury cap
- **State capital gains tax eliminated:** Effective 2025
- **Landlord-friendly courts:** Missouri strongly favors property owners in eviction proceedings
- **No state income tax phase-out:** Missouri is reducing state income tax rates, trending toward elimination
- **Property tax rates:** Below national average, particularly in Columbia and outstate markets

---

## Appendix C: Content Differentiation Checklist

Before publishing any page, verify it includes at least 3 of these elements that NO competitor page has:

- [ ] Specific market data with source and date (median price, rent, cap rate)
- [ ] Named neighborhoods or sub-markets
- [ ] A worked DSCR calculation using local numbers
- [ ] Missouri-specific regulatory advantage mention
- [ ] Named economic catalyst (NGA West, Mizzou, Cortex, etc.)
- [ ] Investor persona targeting (BRRRR, student housing, out-of-state, etc.)
- [ ] Comparison to a specific competitor's offering
- [ ] A specific closing timeline commitment
- [ ] Local property management or inspector recommendation (future)
- [ ] Embedded calculator with pre-filled local data

---

*End of playbook. All content, architecture, and technical recommendations are implementation-ready. Prioritize Phase 1 ruthlessly: solve the SPA problem, launch the Columbia MO page, and get indexed.*
