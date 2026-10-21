/**
 * projects-data.js
 * ---------------------------------------------------------------------------
 * Single source of truth for the project/case-study cards shown on the
 * homepage (featured) and on projects/index.html (grouped by category).
 *
 * To add a new project later:
 *   1. Create projects/your-new-project.html (copy an existing project page
 *      as a starting template).
 *   2. Add one object to the PROJECTS array below.
 * That's it — both listing pages pick it up automatically via main.js.
 *
 * Fields:
 *   slug      - unique id, used for nothing but your own reference
 *   title     - card title
 *   tag       - short label shown on the card itself, e.g. "MSc Thesis"
 *   category  - one of "Biostatistics" / "Product" / "AI & Self-built" —
 *               used to group cards into sections on projects/index.html
 *   summary   - 1-2 sentence description
 *   href      - link to the project's detail page
 *   featured  - true = also show on the homepage
 */

const PROJECTS = [
  {
    slug: "keto-cta",
    title: "KETO-CTA Re-Analysis",
    tag: "MSc Thesis",
    category: "Biostatistics",
    summary:
      "Re-analysis of a retracted imaging study: how I chose and stress-tested a regression model, and built a tool to rebuild missing data.",
    href: "projects/keto-cta.html",
    featured: true,
  },
  {
    slug: "survival-sim",
    title: "Survival Analysis Simulation",
    tag: "Simulation study",
    category: "Biostatistics",
    summary:
      "A from-scratch simulation comparing the Cox, log-rank and RMST tests when a treatment effect changes over time.",
    href: "projects/survival-sim.html",
    featured: true,
  },
  {
    slug: "lung-survival",
    title: "Lung Cancer Survival (R and SAS)",
    tag: "Practice case",
    category: "Biostatistics",
    summary:
      "The same survival analysis of 228 lung cancer patients run in both R and SAS: Kaplan-Meier curves, log-rank test and a Cox model, with every result checked across the two programs.",
    href: "projects/lung-survival.html",
    featured: false,
  },
  {
    slug: "bank-marketing",
    title: "Bank Marketing (R and SAS)",
    tag: "Practice case",
    category: "Biostatistics",
    summary:
      "Who subscribes to a term deposit? A logistic regression on 45,211 bank phone calls, run in both R and SAS, with a train-test check and a target-leakage trap.",
    href: "projects/bank-marketing.html",
    featured: false,
  },
  {
    slug: "pm-system",
    title: "Project Management System",
    tag: "Product",
    category: "Product",
    summary:
      "Led an internal project-management system end to end: compared four tools, worked out requirements departments could not state, and designed a flow for each project type.",
    href: "projects/pm-system.html",
    featured: true,
  },
  {
    slug: "ietm",
    title: "IETM: Interactive Technical Manual System",
    tag: "Work project",
    category: "Product",
    summary:
      "What makes a shared technical-manual system hard: standards as rules, one source for many manuals, versions, offline edits and old content, and how I approach each.",
    href: "projects/ietm.html",
    featured: false,
  },
  {
    slug: "ietp",
    title: "IETP: Interactive Technical Manual Reader",
    tag: "Work project",
    category: "Product",
    summary:
      "Designed the reading side of an interactive technical publication system: requirements, a prototype of more than 40 screens, access control and delivery with developers and testers.",
    href: "projects/ietp.html",
    featured: false,
  },
  {
    slug: "ehs-product",
    title: "EHS Management Product",
    tag: "Product",
    category: "Product",
    summary:
      "Benchmarked the market and compared three systems to design a standard EHS product, then adjusted it for one customer.",
    href: "projects/ehs-product.html",
    featured: false,
  },
  {
    slug: "checkup-planner",
    title: "Check-up Planner",
    tag: "Product",
    category: "Product",
    summary:
      "Turns published screening guidelines into a personal check-up plan from age, sex, habits, work and family history, with an evidence level and a source for every item.",
    href: "projects/checkup-planner.html",
    featured: false,
  },
  {
    slug: "short-story-expander",
    title: "Short Story Expander",
    tag: "AI tool",
    category: "AI & Self-built",
    summary:
      "Writing skills distilled from my own reading, plus a local workbench that uses them: a short story now takes about two hours instead of six.",
    href: "projects/short-story-expander.html",
    featured: false,
  },
  {
    slug: "job-pilot",
    title: "JobPilot",
    tag: "Web app",
    category: "AI & Self-built",
    summary:
      "Built to fix the mess of a job search: every job in one place, dated statuses, interview rounds and a reflection for each.",
    href: "projects/job-pilot.html",
    featured: false,
  },
  {
    slug: "scatter-plot-digitiser",
    title: "Scatter Plot Digitiser",
    tag: "Tool",
    category: "AI & Self-built",
    summary:
      "Reads data values back from a published scatter plot and checks its own accuracy against known values.",
    href: "projects/scatter-plot-digitiser.html",
    featured: false,
  },
];
