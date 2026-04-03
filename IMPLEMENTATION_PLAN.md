# Practical AI Workflows Website - Implementation Plan

## 0. Assumptions

- Working business name for this build: **Practical AI Workflows**
- Primary market: U.S. small businesses
- Initial wedge: home services businesses
- Primary CTA: **Get a workflow audit**
- Contact capture will use a static-site-friendly form endpoint strategy with a configurable provider such as Formspree, plus direct email fallback in site config
- This website is a fresh build, not a redesign of the existing pain-coach product

---

## 1. Repo and deployment audit

### Current workspace state

Relevant existing projects in the workspace:

- `pain-coach-mvp`
  - framework: Next.js 16 App Router
  - styling: Tailwind CSS v4
  - build path: `next build`
  - deployment posture: likely Vercel-friendly first, not GitHub Pages first
  - business mismatch: pain coaching product, unrelated domain, unrelated copy, unrelated UX architecture
- `safe-agent-shell`
  - unrelated internal tooling project
- `snorenudge-mvp`
  - unrelated iOS/watchOS project

### Current framework and deployment mismatch

`pain-coach-mvp` is technically capable as a web app, but it is not the best base for this business website because:

- it is built for a different product and audience
- the information architecture is app-like, not high-conversion marketing-site-first
- Next.js 16 can be made to statically export, but GitHub Pages is not its easiest or cleanest default deployment path
- reusing it would introduce unnecessary code, package weight, and conceptual debt
- it would be harder to maintain a clean premium brochure-site architecture inside an unrelated app repo

### GitHub Pages compatibility analysis

#### Option A - reuse existing Next.js repo with static export
Pros:
- modern framework already present
- React component model available

Cons:
- unrelated codebase baggage
- more configuration friction for static export and GitHub Pages pathing
- larger dependency surface than needed
- higher risk of framework-specific gotchas for a simple marketing site

Verdict:
- technically possible
- strategically and operationally suboptimal

#### Option B - new Astro static site
Pros:
- static-first by design
- excellent SEO defaults
- strong component model without React overhead for every page
- very good performance profile
- easy multi-page content architecture
- GitHub Pages friendly via static build plus GitHub Actions
- clean separation from unrelated workspace projects

Cons:
- introduces a new framework to the workspace
- requires a new repo/folder and package install

Verdict:
- best balance of performance, maintainability, and GitHub compatibility

#### Option C - plain static HTML/CSS/JS
Pros:
- maximum GitHub Pages simplicity
- near-zero tooling risk

Cons:
- weaker component reuse
- more repetitive multi-page maintenance
- harder to scale cleanly as new niche pages are added

Verdict:
- viable, but less maintainable than Astro for this scope

### Recommended deployment approach

- create a **new dedicated Astro static site repo**
- deploy to **GitHub Pages via GitHub Actions**
- keep the build fully static
- store brand/contact settings in a single site config module for easy editing

### Tradeoffs

- Astro is slightly more setup than plain HTML, but far easier to maintain as the site grows
- GitHub Actions deployment is a bit more configuration than manual branch deployment, but cleaner, repeatable, and better for future edits
- avoiding the existing Next.js repo is the least disruptive path overall because it prevents domain confusion and technical debt from day one

---

## 2. Strategic translation

### Site positioning

**Practical AI workflows for small businesses. Installed, trained, and optimized.**

Not:
- generic AI consulting
- enterprise transformation theater
- custom software shop first
- replacement-for-your-staff messaging

### Target user priorities

Primary buyer concerns:
- missed leads from slow response times
- admin work eating owner and manager time
- inconsistent follow-up
- unclear processes across office and field teams
- uncertainty about where AI is actually safe and useful
- desire for practical ROI without betting the company on hype

### Conversion goals

Primary conversion:
- submit a workflow audit request

Secondary conversions:
- book a discovery call
- email the business
- review services and trust materials before contacting

### Content hierarchy

1. what this company does
2. who it helps
3. flagship workflow offer
4. how implementation works
5. why this is different from vague AI consulting
6. trust and safety posture
7. proof of practical specificity through concrete workflow examples
8. CTA to get a workflow audit

### Trust-building requirements

The site must communicate:
- bounded scope
- practical use of existing tools and systems
- human review where needed
- data handling awareness
- no fake compliance theater
- no unsupported ROI or automation claims
- implementation-first credibility

### CTA structure

Primary CTA language:
- Get a workflow audit

Secondary CTA language:
- See services
- See how it works
- Talk through your workflow

### Future expansion path

Architecture should support clean expansion into:
- home services - primary now
- property management - next
- independent insurance agencies - next

Should avoid early expansion into higher-friction categories like healthcare and legal until positioning, process, and trust assets are stronger.

---

## 3. Recommended technical approach

### Stack

- **Astro**
- TypeScript
- CSS with custom properties and utility classes in a small global stylesheet
- no heavy UI library unless needed
- static assets in `public/`
- semantic HTML first

### Why this stack

- static-first and GitHub Pages friendly
- excellent performance and SEO
- easy multi-page structure
- reusable layout/component model
- low JavaScript by default
- easier long-term maintenance than plain multi-page HTML without introducing unnecessary app complexity

### Deployment path

- GitHub repository for the site
- GitHub Actions workflow that:
  - installs dependencies
  - builds Astro output
  - deploys `dist/` to GitHub Pages
- add `site` config and base-path awareness for Pages

### Contact form strategy

- use a static-site-compatible form endpoint such as Formspree
- store endpoint in a site config constant
- support direct email fallback link
- if endpoint is not configured, document the remaining launch step in `DEPLOY.md`

### Analytics plan

- keep analytics off by default in code
- include a documented slot for Plausible or GA4
- prefer privacy-aware analytics like Plausible for this brand position
- capture only pageviews and CTA clicks, not invasive behavior tracking

### SEO plan

- unique page titles and descriptions for each page
- canonical URLs
- Open Graph metadata
- Twitter/X cards
- sitemap
- robots.txt
- organization schema and service schema where appropriate
- keyword focus around:
  - AI workflows for small businesses
  - practical AI implementation for small businesses
  - AI workflow automation for home services
  - missed call recovery automation
  - speed to lead automation for small business

---

## 4. Sitemap

- `/` - Home
- `/services` - Services
- `/how-it-works` - How It Works
- `/industries` - Industries
- `/trust-and-safety` - Trust and Safety
- `/about` - About
- `/contact` - Contact

Supporting assets:
- `/robots.txt`
- `/sitemap-index.xml` or generated `/sitemap.xml`
- social preview image
- favicon and touch icons

---

## 5. Page-by-page goals and section outlines

## Home
### Goal
Make a serious small business owner understand the offer within 5 seconds and move them toward a workflow audit.

### Sections
- hero
- proof-of-practicality strip
- flagship offer section - speed-to-lead, missed-call recovery, booking automation
- workflow example grid
- how it works overview
- service cards
- why this is different
- industries focus
- trust and safety preview
- FAQ
- final CTA and contact capture

### Acceptance criteria
- hero clearly states practical AI workflow implementation
- flagship offer is visible above the fold or immediately after
- CTA appears in hero and at end
- no vague consultancy language

## Services
### Goal
Clarify the offer stack and show bounded, productized delivery.

### Sections
- page intro
- AI Workflow Audit
- Implementation Sprints
- Ongoing AI Ops Support
- Team Training within implementation
- Trust and Safety support
- who each service is for
- CTA block

### Acceptance criteria
- every service has what it is, who it is for, what outcome it drives
- implementation is framed as repeatable and ROI-aware

## How It Works
### Goal
Reduce perceived complexity and risk.

### Sections
- engagement overview
- step 1 audit
- step 2 implementation sprint
- step 3 team training
- step 4 optimization and monitoring
- timeline / engagement expectations
- CTA

### Acceptance criteria
- process feels simple and concrete
- low-risk framing without fake guarantees

## Industries
### Goal
Show specificity without bloating the site.

### Sections
- home services lead section
- workflow examples for home services
- future-ready sections for property management and independent insurance
- note on fit and non-fit
- CTA

### Acceptance criteria
- home services is clearly the primary focus
- future niches are architected cleanly but do not distract from the wedge

## Trust and Safety
### Goal
Build trust without pretending to be a compliance firm.

### Sections
- practical AI safety philosophy
- human review
- data handling boundaries
- system access principles
- documentation and AI use policy support
- what the company does not do
- CTA

### Acceptance criteria
- plain-English trust language
- no fake compliance badges or unsupported legal claims

## About
### Goal
Position the company as practical, credible, and implementation-first.

### Sections
- company philosophy
- why implementation matters
- how the company works with existing tools
- what clients can expect
- CTA

### Acceptance criteria
- no self-important agency fluff
- practical credibility over grandiosity

## Contact
### Goal
Make it easy to request a workflow audit.

### Sections
- workflow audit CTA
- short lead form
- optional direct email
- expectations for next steps
- brief fit guidance

### Acceptance criteria
- one clear conversion action
- form works with static hosting strategy
- clear response expectation language

---

## 6. Information architecture

### Primary nav
- Home
- Services
- How It Works
- Industries
- Trust and Safety
- About
- Contact

### CTA in nav
- Get a workflow audit

### Internal linking strategy
- hero to contact
- service cards to services page
- industry mentions to industries page
- trust previews to trust page
- how it works snippets to process page
- contact CTA in every page footer and end section

---

## 7. Messaging framework

### Core message
We install practical AI workflows for small businesses.

### Supporting value points
- respond faster
- miss fewer leads
- reduce admin work
- use the tools you already have
- train your team while implementing
- start with one workflow, measure it, expand carefully

### Differentiation
- implementation-first
- workflow-specific
- outcome-aware
- trust-conscious
- productized and bounded
- not a custom-software-first offer

### Copy tone
- plain English
- commercially useful
- direct
- calm confidence
- no fluff

---

## 8. Design system direction

### Visual direction
- premium but restrained
- bright, clean, spacious
- deep neutral text with one strong accent color
- subtle gradients or panel treatments, not flashy effects
- tasteful iconography and simple process diagrams

### UX direction
- mobile-first
- strong typographic scale
- compact but readable sections
- clear CTA hierarchy
- low-friction scrolling experience
- subtle hover and reveal motion only where useful

### Accessibility direction
- semantic landmarks
- visible focus states
- strong color contrast
- large enough tap targets
- reduced-motion respect

---

## 9. SEO and metadata plan

### Shared requirements
- title template
- per-page descriptions
- canonical URLs
- OG title, description, image
- Twitter/X card metadata
- generated sitemap
- robots.txt

### Target search themes
- practical AI workflows for small businesses
- AI implementation for home services
- missed call recovery automation
- speed to lead automation
- AI workflow audit for small business

### On-page SEO requirements
- one H1 per page
- semantic heading structure
- descriptive anchor text
- concise scannable copy

---

## 10. Analytics plan

MVP analytics events:
- page view
- primary CTA click
- contact form submit
- navigation CTA click
- flagship offer CTA click

Implementation approach:
- optional Plausible script hook in layout
- disabled by default unless configured

---

## 11. Acceptance criteria summary

### Site-wide
- fully static build
- mobile responsive
- Lighthouse-friendly
- no broken routes
- no placeholder lorem ipsum
- no fake testimonials or fake metrics
- no console errors
- clean semantic HTML
- GitHub Pages deployment config present

### Conversion
- primary CTA visible on every page
- home page states the offer clearly within 5 seconds
- flagship offer is explicit and concrete
- trust language is present without compliance cosplay

---

## 12. Implementation sequence

1. create dedicated site repo/folder
2. initialize Astro static project
3. create global layout, site config, design tokens, shared components
4. write and commit all launch copy based on strategy
5. build core pages
6. add metadata, sitemap, robots, schema, social preview config
7. add contact form and CTA system
8. polish responsive behavior and accessibility
9. configure GitHub Actions deployment for Pages
10. push repo and deploy if permissions allow
11. document any final manual steps in `DEPLOY.md`

---

## 13. Risks and mitigations

### Risk - no brand assets provided
Mitigation:
- use a clean text-first wordmark treatment and a config-driven site name
- keep brand easily renameable later

### Risk - no real contact endpoint provided
Mitigation:
- build a static-compatible form strategy
- document exact endpoint configuration step in `DEPLOY.md`
- keep email/contact values centralized in config

### Risk - over-generic AI agency feel
Mitigation:
- lead with workflow outcomes and bounded offers
- emphasize home services wedge and concrete workflow examples
- remove vague transformation language during copy review

### Risk - GitHub Pages path/base issues
Mitigation:
- use Astro site config and Pages workflow from the start
- test local build output before push

### Risk - site gets bloated with too many niches
Mitigation:
- keep home services primary
- include only future-ready architecture for property management and insurance
- avoid deep expansion into high-friction sectors in v1

---

## 14. Recommended execution decision

Proceed with a **new Astro static site** in a dedicated repo/folder, deploy via **GitHub Actions to GitHub Pages**, and position the business around **practical AI workflows for small businesses**, with **home services** as the first sharp wedge and **Get a workflow audit** as the primary conversion action.
