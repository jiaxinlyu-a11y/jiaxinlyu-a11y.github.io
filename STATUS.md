# Status

Version log for this site. Add a new entry at the top each time something meaningful changes. Keep entries short — what changed, not why.

---

## v0.18 — Fix: refresh no longer stuck on one floor

**Date:** 2026-10-13

**`index.html`**

- The "← Home" link opens `index.html#products`, and the hash stayed in the address bar, so every refresh jumped back to the Products floor. The hash is now removed once it has been used, so a refresh starts on the cover.

## v0.17 — AI Tools: JobPilot and Short Story Expander rewritten

**Date:** 2026-10-13

Changed the focus of two case pages and moved the digitiser to the bottom of the AI Tools floor. The 6 h to 2 h figures on the Short Story Expander page are my own estimates and are labelled that way; the other numbers come from the Fanqie author dashboard.

**`projects/job-pilot.html`**

- Now about the problem: why I built it, one feature per problem (Figure 1 maps problem to feature, Figure 2 keeps the dashboard schematic), and whether it solved the problem. Build details are cut to two sentences, with the GitHub link.

**`projects/short-story-expander.html`**

- Now about the skills: where they come from (my reading and good stories, refined one point at a time), the five rule sets, then the evidence: time per story and the dashboard numbers, worded as reader response rather than proof. Tool mechanics shortened to one figure.

**`js/tower-content.js`**, **`js/projects-data.js`**

- AI Tools order is now Short Story Expander, JobPilot, Scatter Plot Digitiser. Card blurbs for the first two rewritten to match.

## v0.16 — Clean-up: placeholders removed

**Date:** 2026-10-13

Removed the placeholder project entries that were still showing on the homepage "Featured work" grid and on the Projects page.

**`js/projects-data.js`**

- Replaced the four placeholder entries with the seven real projects (two Biostatistics, two Product, three AI & Self-built). Featured on the homepage: KETO-CTA, Survival Analysis Simulation, Project Management System.

**`index.html`**

- Removed the "cards below are placeholders" note above the Featured work grid.

**`README.md`**

- Updated the file tree and the "add a new project" steps to match the current pages.

**To delete by hand (not removed automatically):** `projects/ai-tool-one.html`, `projects/product-case-one.html`, `projects/product-case-two.html`, the out-of-date `design-mockups/` folder, and the git-ignored `Claude outputs/` screenshot folder.

## v0.15 — AI Tools floor: three case pages

**Date:** 2026-10-13

Replaced the AI Tools placeholder with three real tools, each with a short case page (three sections, one or two figures, no limitations section). Numbers on the digitiser page come from the two reconstructed-point CSVs; the Short Story Expander figures come from the Fanqie author dashboard. JobPilot figures are schematics drawn after the real dashboard, with sample jobs only.

**`projects/scatter-plot-digitiser.html`**, **`projects/job-pilot.html`**, **`projects/short-story-expander.html`** (new)

- Built from the `pm-system.html` layout. Each ends with "Skills shown"; the first two link to their GitHub repositories.
- Short Story Expander states that generation is done by an AI assistant in VS Code; the app itself calls no AI API.

**`css/case.css`**

- Status colours for the JobPilot figures: `st-s`, `st-p`, `st-a`, `st-i`, `st-o`, `st-r`, with dark-mode variants.

**`js/tower-content.js`**

- AI Tools floor now has three rows: Scatter Plot Digitiser, JobPilot, Short Story Expander.

**`projects/keto-cta.html`**

- Digitiser sentence under Figure 11 now reports mean error as a share of the axis for both plots and the hand-added points, instead of "92 of 100 within 0.5 mm³".

## v0.14 — Fourth case page: survival simulation study

**Date:** 2026-10-13

Added the survival-analysis simulation study as a case page and linked it from the Products floor. Every number on the page and in the figures comes from `results2.csv` of the public `survival-sim` repository.

**`projects/survival-sim.html`** (new)

- Five sections: the question and design (ADEMP), four kinds of true effect, power by method, false-alarm and bias checks, conclusion with limits. Four inline-SVG figures, a "Skills shown" list and a link to the GitHub repository.
- Built from the `pm-system.html` layout.

**`css/case.css`**

- New figure classes for line and dot plots: `ln1`, `ln2`, `dsh`, `vref`, `dot1`, `dot2`, `dotk`, `whisk`.

**`js/tower-content.js`**

- New Products card as the second item (between KETO-CTA and EHS): tag "Simulation study", title "Survival Analysis Simulation", short blurb and three chips.

## v0.13 — Third case page: project-management system

**Date:** 2026-10-07

Added the project-management system case page and linked it from the Products floor. Same layout as the other case pages. Names of the four compared tools are public product names (PingCode, Jiandaoyun, Worktile, ZenTao); nothing about internal units is named. The training + test platform page is the only product placeholder left.

**`projects/pm-system.html`** (new)

- Six sections: the problems, choosing a management approach (four systems), requirements nobody stated, one process per project type, delivery and archiving, conclusion. Eight inline-SVG figures that use the `case.css` classes (so dark mode works), a single "Skills shown" list at the end, no per-section skill chips. A second project phase is mentioned only as a reserved interface.
- Built from the earlier mockup in `design-mockups/pm-system-case.html`, which is now out of date.

**`js/tower-content.js`**

- The second product placeholder card now links to the new page: tag "Product", title "Project Management System", short blurb and three chips.

## v0.12 — "← Home" link on every inner page

**Date:** 2026-10-07

Every page except the home page now shows a small "← Home" link at the left of the top bar. It returns to the home page with the tower already open on the Products floor, so a reader coming back from a case page does not have to go through the cover again.

**`js/partials.js`**

- `renderNav()` adds the link unless `<body data-page="home">`. It uses the page's `BASE_PATH`, so it works from root pages and from `projects/`.

**`css/style.css`**

- New `.nav-back` style (small outlined button, accent colour on hover). The nav bar height is unchanged. From 1100px wide up it is pinned to the far left of the bar (the centred content column leaves wide empty margins there); below that it stays in the normal flow next to the greeting.

**`index.html`**

- Reads the URL hash on load: `index.html#products` jumps to the tower-detail screen with that floor selected (floor names, lower-cased, spaces as hyphens). Without a hash the home page behaves exactly as before.

## v0.11 — Second case page: EHS management product

**Date:** 2026-10-07

Added the EHS product case page and linked it from the Products floor. Layout reuses `css/case.css`. Names of customers, partners, vendors and internal project codes are anonymised (systems appear as A, B, C). The page is ordered as standard product first, then adjustment for one customer; it does not claim that was the historical sequence. The remaining product pages (project-management system, training + test platform) are still placeholders.

**`projects/ehs-product.html`** (new)

- Six sections: why a standard product, benchmarking the market (about 196 functions, five vendors), three systems compared (137 functions), design decisions (plans, entries, states), tailoring to a customer, conclusion. Seven inline-SVG figures, a single "Skills shown" list at the end, no reflection section.

**`js/tower-content.js`**

- The first product placeholder card now links to the new page: tag "Product", title "EHS Management Product", short blurb and three chips.

## v0.10 — First real case-study page: KETO-CTA

**Date:** 2026-10-07

Replaced the KETO-CTA placeholder with the finished case page (content and layout agreed in preview first; structure then realigned to the defence slides). Other case pages (EHS, project-management system, training + test platform) are still placeholders; they will reuse this template.

**`projects/keto-cta.html`** (rewritten)

- Eight figure-led sections that follow the structure of the thesis defence slides: why re-analyse, question and strategy, overlapping signals, main models on the raw scale, sensitivity checks (log scale and change score), diagnostics, rebuilding ApoB, conclusion. 13 figures, all inline SVG. The conclusion compares the original study with the re-analysis (Fig 13) and ends with a single "Skills shown" list (five items); the per-section skill chips were removed. The raw-scale models are the main analysis; the log and change-score models are presented as checks. The final section also reports the ApoB result (no clear association detected). Numbers come from the defence slides and thesis appendix (final AIC 908.355; the slide text shows 906.355, a typo). Right-hand rail with an "At a glance" card and a scroll-synced "On this page" list (the active section shows a one-line summary). Links to the two public GitHub repositories; no thesis PDF link for now.

**`css/case.css`** (new)

- Fix: below 1100px the single column now uses `minmax(0, 1fr)`, so wide figures scroll inside their card instead of stretching the whole page on phones.

- Layout and figure styles for case pages (`<body class="case">`). Figures use CSS classes tied to the site tokens, so dark mode works with no per-figure colours. Below 1100px the rail collapses to the "At a glance" card above the text; below 720px figures scroll sideways rather than shrinking.

**`js/tower-content.js`**

- Products row for KETO-CTA now has real copy and tags (removed the wrong "Survival analysis" chip there; the Skills floor still has one at line 96 and needs real tags).

---

## v0.9 — Card layout for the tower-detail panel (placeholder content)

**Date:** 2026-10-04

The right-hand panel was plain stacked text, which looked bare and gave multi-item floors (several jobs, degrees) no visual boundaries. Replaced with one card per item, plus a connector line from the highlighted tier to every card (from the user's sketch). Content is still placeholder — this is layout only.

**`js/tower-content.js`** (restructured)

- Each floor now has a `headline` (a few words describing the floor — "About me", "Where I studied", "What I work with", "Where I've worked", "Projects & case studies", "Tools I've built") shown as the panel heading, instead of repeating the floor title already on the tower. `body` is now a set of `.dcard`s: Basic Info = Information + Contact cards; Education / Work Experience = one card per entry (date pill, sub-line, bullets, tag chips); Skills = one card per group with chips; Products / AI Tools = one card per project/tool with a case-study link.

**`index.html`**

- `renderTier` renders `<h2 class="panel-title">` + `.dcards` from the above.
- New `drawConnector`: an SVG overlay on `.tower-detail-layout` — dot on the active tier's body edge, horizontal line to a shared vertical trunk, a stub + dot into each card. The tier body's right edge is computed as `0.6431 + 0.03 × floorIndex` of the slot width (measured from the tier PNGs' alpha: it narrows by exactly 3% per floor). Redrawn 480 ms after a floor change (after the pop-out transition settles), on resize/load, and on panel scroll; only cards whose attach point is visible in the panel get a stub.

**`css/style.css`**

- New `.dcard` / `.dcard-*` / `.chip` / `.dcard-row` / `.panel-title` / `.tower-connector` styles; panel now `width: 100%` with wide right padding so cards clear the fixed page-nav arrows. Dark mode covered via existing tokens plus a darker shadow. Connector hidden and cards unindented under 780px.

**Products / AI Tools use a different item (added later the same day).** Instead of full cards, each project/tool is a one-line row (tag pill + title + arrow, `<a class="dcard pitem">`) that expands on hover/keyboard focus to show a short blurb and chips, and links to the item's own page on click (`projects/*.html`). Single column, no cover image. Expansion animates `grid-template-rows: 0fr → 1fr`. Because expanding a row moves every row below it, `index.html` redraws the connector each frame for 480 ms after any hover/focus change inside a `.pitem` (`trackConnector`). Products now lists three rows (KETO-CTA + the two product case studies from `projects-data.js`); AI Tools has one placeholder row.

---

## v0.8 — Replace scroll-snap with a JS paginator; always reset to cover on refresh

**Date:** 2026-10-02

Two reports after v0.7 shipped: refreshing the page didn't return to the cover (it kept whatever scroll position the browser had before), and `proximity` snapping made it easy to scroll past a section and land stopped half-scrolled between two of them — the opposite problem from `mandatory`'s stiffness in v0.7. Root-caused the overshoot while testing: with a native `scrollTo(behavior: "smooth")`/CSS snap animation in flight, more wheel input arriving mid-animation stops it short of the target, even with that input's own default prevented — the cancellation happens below where JS can intercept it. Replaced CSS scroll-snap on desktop with a hand-driven paginator that can't be interrupted that way.

**`index.html`**

- Removed `nextSection.scrollIntoView(...)` from `enterSite()`; cover → tower-detail now goes through the same paginator as everything else.
- Added a wheel-driven paginator: `PAGES` is every `main > section`; a wheel tick resolves to a full jump to the next/previous page, never a partial scroll — driven by `animateScrollTo`, a `requestAnimationFrame` loop that sets `window.scrollTo({..., behavior: "instant"})` every frame by hand instead of calling the browser's native smooth scroll once. Because each frame is a complete, instant position-set rather than one ongoing animation, further wheel input during the jump (now ignored via a short lock) can't cancel it partway — confirmed by testing: the previous approach reliably landed short of the target under a fast repeated flick, this one always lands exactly on it.
- A wheel gesture over something that can still scroll on its own (the tower-detail text panel) scrolls that normally instead of jumping pages — only once that panel's hit its own top/bottom does further scrolling move to the next/previous section.
- Added `#page-up` / `#page-down` buttons (new `.page-nav`, fixed right-center) that call the same paginator — same jump as the wheel, always full-page, never partial.
- `history.scrollRestoration = "manual"` plus an explicit `scrollTo(0, 0)` (on script start and again on `load`) — a browser restoring the previous scroll position on refresh, which `file://` pages do too, is what made "refresh always lands on the cover" not true before.

**`css/style.css`**

- Removed `scroll-snap-type` from the global `html` rule (the JS paginator replaces it on desktop) — kept it, still `proximity`, scoped to `@media (max-width: 780px)` only, since touch swipes don't fire `wheel` events and have nothing to conflict with.
- Added `.page-nav` / `.page-nav-btn` — same pill language as the tower's own floor-nav, parked opposite it (right-center, vs. top-center) and away from the contact corner (bottom-left). Hidden under 780px — a desktop affordance for a desktop (wheel) interaction.

---

## v0.7 — Scroll-snap between sections

**Date:** 2026-10-02

Small addition: scrolling past roughly the midpoint of a section now snaps to show the next (or previous) one fully, instead of leaving the page stopped half-scrolled between two sections.

**`css/style.css`**

- `html { scroll-snap-type: y proximity; }` (tried `mandatory` first — see below), plus `scroll-snap-align: start;` on `.cover`, `.tower-detail`, and `#featured-work` — each one "pages" to fully on screen. `.cover` and `.tower-detail` were already `height: 100vh` so this just formalizes the snap points that already matched the page's own full-viewport sections; `#featured-work` isn't full-height (its content decides that) but still gets a clean top-aligned landing spot.
- Shipped as `mandatory` first, reported as feeling stiff — `mandatory` forces every scroll to resolve to a full section even mid-flick, fighting short scroll gestures. Switched to `proximity`: a scroll that lands well short of a boundary (tested: `scrollTo(400)` out of a 900px section) now just stays put instead of being pulled all the way, and only scrolls that are already close to a boundary snap the rest of the way.

---

## v0.6 — Fix invisible active-tier fill (replace CSS mask with baked PNGs)

**Date:** 2026-10-02

After v0.5 synced, the active tier's solid-color fill (the dark-blue block behind the white label) never appeared on the user's actual browser — just the white label floating over the pale line art, confirmed not a caching issue (reproduced after a hard refresh). It rendered correctly in every one of this session's own test screenshots, which pointed at a CSS `mask-image` + `filter: drop-shadow` combination being the kind of thing that can silently fail on a real browser/GPU combo even when it works in testing.

**`img/`** (new assets)

- `pagoda-tier-{0..5}-fill-light.png` / `-fill-dark.png` — 12 new pre-baked solid-silhouette PNGs (one pair per tier), generated from each tier's existing alpha channel with the accent color burned in directly (`#1d4e89` light / `#6fa8e0` dark) — replaces using the tier's own line-art PNG as a live CSS mask.

**`js/pagoda.js`**

- `renderPagodaStack` now renders two plain `<img>` elements per tier (`.tier-fill-light` / `.tier-fill-dark`) instead of one `mask-image`-based `<div>`. Picking the right one for the current color scheme is pure CSS (next point) — JS just points both at their respective files.

**`css/style.css`**

- `.tier-fill` dropped every mask-related property — it's just `position: absolute; inset: 0;` plus the existing opacity transition and drop-shadow now, no different from any other image overlay.
- Found and fixed a second bug while testing this: the dark-mode variant's `display: none` wasn't taking effect at all (both images stayed visible, dark painted over light) because the generic `.tier-slot img { display: block; }` rule has higher CSS specificity (class+element) than a plain `.tier-fill-dark` rule, and wins regardless of source order. Fixed by matching that specificity: `.tier-slot img.tier-fill-dark`.

**Not yet done** — unchanged from v0.4 (see below).

---

## v0.5 — Fix auto-scroll bug, switch to hover, size tower to fit (no scrollbar)

**Date:** 2026-10-02

v0.4 shipped with a real bug: the cover page jumped down on every load, and switching floors kept nudging the page — both traced to one `scrollIntoView()` call. Fixing it properly meant rethinking how the tower is sized, since the old approach relied on an internal scrollbar to handle overflow. This entry also covers a false start on the "CLICK HERE" label that was reported as crooked and then reverted.

**`js/pagoda.js`**

- Removed the `scrollIntoView()` call in `setPagodaActiveFloor` entirely — it fired on every floor change, including the very first one on page load, which is what was pushing the cover page down on every refresh.
- Rewrote tower sizing from CSS percentages to JS-computed pixels (new `layoutPagodaStack`, called on render and on resize): a flex item's `width: auto` didn't reliably derive from an `<img>`'s intrinsic ratio via a percentage `height` (tested directly — it resolved to `0`), so each piece's pixel size is now set explicitly, the same technique `setPagodaBoxTransform` already used for the cover crop.
- The whole stack (spire + 6 tiers + base) now has a fixed pixel size that never changes when a floor becomes active — the active tier pops out via `transform: scale()` only, which doesn't affect layout. That's what makes a tier's growth never shift anything else, which in turn is what makes hover-to-switch (next point) stable instead of jittery.
- Added `enablePagodaHoverFloors(container, onFloorHover)` — moving the mouse over a tier switches straight to it, no click needed.

**`index.html`**

- Wired the hover helper above to the same `renderTier` function the buttons/dots already called, so hovering and clicking stay in sync (same active state, same text panel, same disabled states).

**`css/style.css`**

- `.tower-column` no longer scrolls (`overflow: hidden` on the mount, no internal scrollbar) — it's sized by JS to fit the panel's height with headroom reserved for the active tier's scale-up, so the whole tower is always fully visible.
- Active-tier separation from its neighbors is now done with `transform: translateY()` on the adjacent siblings (`.tier-slot.is-active + .tier-slot` / `:has(+ .tier-slot.is-active)`) instead of `margin`, since margin changes layout (which is what the fixed-size approach above needed to avoid).
- Tried and reverted: added `margin-right: -0.1em` to `.cover-enter-label` to compensate for `letter-spacing` adding tracking after the last character. Pixel-measured both ways — turns out Chrome doesn't add that trailing tracking, so the label was already centered on the tower's true axis (within 0.04px) and the "fix" had actually introduced a small real offset. Reverted; the crooked look reported was most likely the "C" (round, open) vs "E" (flat stroke) glyph shapes reading as unevenly spaced next to the pillar lines, not an actual position bug.

**Not yet done** — unchanged from v0.4 (see below).

---

## v0.4 — Tower detail redesign: stacked tiers, not zoom-per-floor

**Date:** 2026-10-02

Replaced the "zoom into one tier" interaction from v0.3 with a different one: the whole tower is always shown, stacked tier by tier with no gaps so it reads as one continuous building, and the current floor is highlighted in place (pops out, turns solid color, gets a drop shadow) instead of the camera zooming into it. Also caught and fixed a measurement bug: the tower is actually 6 tiers, not 5 — the true bottom tier had been mistaken for the base plinth, so it was silently dropped from every crop. Added a 6th content category, AI Tools, to fill the recovered tier.

**`img/`** (new assets, replacing the single-crop approach)

- `pagoda-tier-0.png` … `pagoda-tier-5.png` — the tower re-measured and re-sliced into its actual 6 tiers (0 = bottom/widest, 5 = top/narrowest), cut from `pagoda-tower.png`
- `pagoda-spire.png` / `pagoda-base.png` — the finial/spire above tier 5 and the base plinth below tier 0; fixed caps, not part of any floor's content

**`js/pagoda.js`** (rewritten — detail-section half only; the cover's whole-tower crop is untouched)

- Removed `TIER_BOXES` / `focusPagodaTier` / `setActiveTier` (the old per-tier crop-and-zoom)
- Added `renderPagodaStack(container, floorTitles)` — builds the spire + 6 tier slots + base once; each slot carries a `data-floor` index and its own label
- Added `setPagodaActiveFloor(container, floorIndex)` — switching floors is just moving a CSS class between slots (no re-crop, no image swap), so the existing CSS `transition` on transform/margin/color animates it smoothly; also scrolls the newly active tier into view, since the full stack is taller than the mount once a floor pops out

**`js/tower-content.js`**

- `TOWER_TIERS` reordered top-to-bottom to match the tower's new visual order: Basic Info → Education → Skills → Work Experience → Products → AI Tools (was Basic Info → Education → Work Experience → Products → Skills)
- Added the 6th entry, **AI Tools** (placeholder body copy — tools you've built)

**`css/style.css`**

- New `.tier-slot` / `.tier-fill` / `.tier-label` rules: non-active tiers show the pale line art with a muted label; the active tier fades in a solid-color silhouette (CSS `mask-image`, the tier's own artwork as the alpha mask) underneath a bg-colored "cutout" label, scales up, and gets extra margin so it visibly separates from its neighbors — all transitionable, ~0.4s
- Label font-size uses `cqw` (container query width), not `rem` — the mount is roughly half the page on desktop but the full width on mobile, and a fixed size either overflowed the panel or looked oversized on the other breakpoint; `container-type: inline-size` set on `.pagoda-mount-detail`
- Per-floor font-size tuning (`[data-floor="0"]` … `[data-floor="5"]`) since each tier is a different width and "Work Experience" is long enough to need extra shrinkage beyond its tier's width alone
- `.pagoda-mount.pagoda-mount-detail` overrides `.pagoda-mount`'s `overflow: hidden` to `overflow-y: auto` (two classes beats one regardless of source order) — the stack scrolls instead of being clipped
- Removed `.tower-detail-title` (the old floating title overlay) — each tier now shows its own label directly, so a second label floating on top was redundant
- New `--color-tier-label-muted` token (`color-mix` of accent + bg) so the muted label color adapts to light/dark automatically

**`index.html`**

- Detail section: `renderPagoda` + `focusPagodaTier`/`setActiveTier` calls replaced with `renderPagodaStack`/`setPagodaActiveFloor`; removed the now-redundant `#tower-detail-title` element and its JS
- Cover section untouched

**Not yet done**

- [ ] Real bio/CV content to replace all floor placeholder text, including the new AI Tools floor
- [ ] Decide how the Products/projects section (currently just a link to the KETO-CTA case study) fits in
- [ ] Reconcile or retire `about.html` and `projects/*.html` — `about.html`'s own script (`js/about-interactions.js`) still calls `focusPagodaOnTier`, which doesn't exist in `pagoda.js` at all now; harmless while nothing links to that page, but will need fixing if it's revived
- [ ] Real resume PDF (currently a placeholder file)
- [ ] Real contact links in `SOCIAL_LINKS` (`js/partials.js`) — currently placeholders
- [ ] Favicon + og:image
- [ ] Deploy to GitHub Pages

---

## v0.3 — Floor-by-floor tower detail + redesigned tower artwork
**Date:** 2026-10-02

Added the floor-by-floor "tower detail" section below the cover (previously just scrolled to an empty placeholder target), and replaced the tower illustration entirely. Several hand-coded SVG redesigns were tried and discarded this round (flared eave rooflines between every tier, dougong-style bracket details, a few full from-scratch structure rewrites) before settling on a single flat artwork file supplied directly by you, recolored and wired in as a static image instead of SVG.

**`index.html`**
- Added the tower-detail section: left column shows the tower zoomed into one floor at a time, right column shows that floor's text, switched only via up/down buttons + a dot indicator (no scroll-to-change-floor, since a floor's own text can scroll on its own)
- Wired floor switching to `TOWER_TIERS` (`js/tower-content.js`) and to `focusPagodaTier` / `setActiveTier` (`js/pagoda.js`)

**`js/tower-content.js`** (new)
- `TOWER_TIERS`: 5 floors, order Basic Info → Education → Work Experience → Products → Skills. All placeholder copy — structure only.

**`js/pagoda.js`** (rewritten)
- The tower is now a single flat artwork file (`img/pagoda-tower.png`), not hand-drawn SVG. Public API kept identical (`renderPagoda`, `focusPagodaWhole`, `focusPagodaTier`, `setActiveTier`) so `index.html`'s own script didn't need to change.
- Internally, "zooming to a tier" is now a JS-computed CSS transform on that one `<img>` (`setPagodaBoxTransform`), using pixel boxes measured directly off the artwork (`TIER_BOXES`, `WHOLE_TOWER_BOX`) — same idea as the old SVG-viewBox crop, just in image pixels instead of viewBox units.
- Small rightward nudge (`COVER_NUDGE_X`) on the cover's whole-tower crop, cosmetic only.

**`img/pagoda-tower.png`** (new)
- The tower artwork itself, supplied by you. Recolored lighter in two passes per feedback; background converted from a near-white opaque fill to actually transparent (the opaque fill was showing as a faint box edge against the page).

**`css/style.css`**
- Replaced all the old SVG-specific tower rules (`.pagoda-svg`, `.pagoda-fill`, `.pagoda-railing`, `.pagoda-pillar`, `.pagoda-bracket`, `.pagoda-eave`, …) with `.pagoda-img` rules for the image-based renderer.
- Added `.tower-detail*` rules for the new section (layout grid, floating nav pill, full-frame title overlay).
- Cover: darkened the "CLICK HERE" glow, enlarged the label, nudged both to stay centered on the tower's new (slightly right-shifted) position.
- The site-wide `img { max-width: 100%; }` reset was clamping the absolutely-sized tower image before its transform could run — `.pagoda-img` now overrides it (`max-width: none`).

**Not yet done**
- [ ] Real bio/CV content to replace all floor placeholder text
- [ ] Decide how the Products/projects section (currently just a link to the KETO-CTA case study) fits in
- [ ] Reconcile or retire `about.html` and `projects/*.html` — `about.html`'s own script (`js/about-interactions.js`) still calls `focusPagodaOnTier`, which no longer exists in the rewritten `pagoda.js`; harmless while nothing links to that page, but will need fixing if it's revived
- [ ] Real resume PDF (currently a placeholder file)
- [ ] Real contact links in `SOCIAL_LINKS` (`js/partials.js`) — currently placeholders
- [ ] Favicon + og:image
- [ ] Deploy to GitHub Pages

---

## v0.2 — Cover page (single-page pivot)
**Date:** 2026-10-02

Dropped the multi-page nav structure in favor of a single continuous page built around the tower illustration. This entry covers the cover/landing screen only — everything below it is still undecided (next step).

**Structure**
- Decision: no more Home / About / Projects / Contact page-tab menu. The site is one page; `about.html`, `projects/*.html`, `contact.html` still exist from the old scaffold but are **not yet reconciled** with this — treat them as stale until the rest of the single page is built.

**`index.html`**
- Replaced the old text-only hero with a full-viewport **Cover** section: tower illustration (large, filling the frame) on the right, name + one-line positioning text on the left.
- Removed the top nav bar entirely on this page (nothing to navigate to yet on a single page).
- Added a "Download Resume" link directly in the intro text column (opens the PDF in a new tab — browser's own viewer covers preview + download).
- Added click-to-enter interaction: a glowing "CLICK HERE" sits over the tower; clicking it (or the tower itself) zooms + fades the tower and smooth-scrolls past the cover. Currently scrolls to a placeholder "Featured work" section — the real content that should follow is next up.
- All cover copy is still placeholder (`[Your Name]`, generic positioning paragraph) — pending real bio content.

**`css/style.css`**
- New `.cover` / `.cover-layout` / `.cover-text` / `.cover-stage-wrap` / `.cover-stage` rules for the cover layout, with a mobile breakpoint (stacks text above tower).
- `.cover-resume-btn` — the resume link's styling.
- `.cover-enter-hint` / `.cover-enter-shadow` / `.cover-enter-label` — the glowing "CLICK HERE" effect over the tower, with a synced breathing (scale) animation on both the glow and the text.
- `.contact-corner` — fixed, always-visible bottom-left pill (Email / LinkedIn / GitHub); contact info should never require scrolling to find.
- Old multi-page `.hero` block kept at the bottom of the file as unused reference only.

**`js/partials.js`**
- Removed the Home/About/Projects/Contact page-tab menu (`NAV_LINKS` + old `renderNav()`); nav bar is no longer rendered at all on the cover page (the `<header id="site-nav">` element was removed from `index.html`, so `renderNav()` just no-ops there). The function itself is still used by the old scaffold pages until those are reconciled.
- Added `renderContactCorner()` — injects the fixed contact pill on every page that loads this script.

**`js/pagoda.js`**
- Added a tight "whole tower" crop (`WHOLE_TOWER_BOX`, `setPagodaViewBox`, `focusPagodaWhole`) so the cover's tower fills its frame edge-to-edge instead of sitting inside the illustration's original canvas, which had a lot of empty sky/margin around the actual building.

**Not yet done**
- [ ] Decide how scrolling past the cover reveals the rest of the content (self-build narrative: work / education / thesis / skills) via the tower structure
- [ ] Decide how the Projects/products section fits into the single page
- [ ] Reconcile or retire `about.html` and `projects/*.html` (still built for the old multi-page structure)
- [ ] Real bio/CV content to replace cover placeholder text
- [ ] Real resume PDF (currently a placeholder file)
- [ ] Real contact links in `SOCIAL_LINKS` (`js/partials.js`) — currently placeholders
- [ ] Favicon + og:image
- [ ] Deploy to GitHub Pages

---

## v0.1 — Scaffold (initial structure)
**Date:** 2026-09-29

- Created project structure: multi-page site (`index.html`, `about.html`, `contact.html`, `projects/`), shared `css/style.css`, shared nav/footer via `js/partials.js`, project cards driven by `js/projects-data.js` + `js/main.js`.
- All page content is placeholder text (`<!-- PLACEHOLDER -->` comments and bracketed `[...]` fields) — no real content yet.
- Pages scaffolded: Home, About, Contact, Projects index, KETO-CTA case study, 2 product case studies (generic placeholders).
- Not yet done: real bio/CV content, KETO-CTA write-up, product case studies, redesigned product graphics, headshot/favicon, deployment to GitHub Pages.
