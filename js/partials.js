/**
 * partials.js
 * ---------------------------------------------------------------------------
 * Injects the shared navigation bar and footer into every page.
 * Edit the NAV_LINKS / SITE_NAME / FOOTER content below and every page
 * updates automatically — you never have to touch nav/footer markup
 * inside individual HTML files.
 *
 * Uses plain string templates (not fetch()) on purpose, so pages preview
 * correctly even when opened directly from disk (file://) with no local
 * server running.
 */

const SITE_NAME = "Lyu Jiaxin"; // used in the footer/copyright

// What shows in the nav bar on every inner page: name, plus a short line
// that is hidden on narrow screens. Edit the wording freely.
const NAV_NAME = "Lyu Jiaxin";
const NAV_SUB = "Biostatistics &amp; Data Science";

// Every page sets `const BASE_PATH = "./";` (root pages) or `"../"`
// (pages one level down, e.g. projects/*.html) BEFORE loading this script.
// That's the only thing that has to match a page's folder depth — nothing
// else in this file needs to change when you add new pages.
const ROOT = typeof BASE_PATH !== "undefined" ? BASE_PATH : "./";

const SOCIAL_LINKS = [
  { href: "mailto:18224734143@163.com", label: "Email" },
  { href: "https://www.linkedin.com/in/jiaxin-lyu81", label: "LinkedIn" },
  { href: "https://github.com/jiaxinlyu-a11y", label: "GitHub" },
];

// The Resume button opens resume.html, which lists the four PDF versions
// (biostatistics and data analyst, each in English and Chinese). To update
// a resume, replace the matching PDF in assets/ (keep the file name).
const RESUME_HREF = `${ROOT}resume.html`;

// No Home/About/Projects/Contact page-tab menu — this is a single page.
// The bar at the top is the greeting and the always-there Resume button.
// Every page except the home page also gets a "← Home" link on the left,
// which returns to the home page with the tower open on the floor that page
// belongs to (index.html reads the hash, e.g. #work-experience). The home page
// itself has no back link — it's the page being returned to.
const FLOOR_BY_PAGE = {
  "ietm.html": "work-experience",
  "ietp.html": "work-experience",
  "ehs-product.html": "work-experience",
  "pm-system.html": "work-experience",
  "keto-cta.html": "data-&-code",
  "survival-sim.html": "data-&-code",
  "lung-survival.html": "data-&-code",
  "bank-marketing.html": "data-&-code",
};
function backFloor() {
  const file = location.pathname.split("/").pop() || "";
  return FLOOR_BY_PAGE[file] || "ai-products";
}
function renderNav() {
  const mount = document.getElementById("site-nav");
  if (!mount) return;

  const isHome = document.body.dataset.page === "home";
  const backLink = isHome
    ? ""
    : `<a class="nav-back" href="${ROOT}index.html${document.body.dataset.page === "resume" ? "" : "#" + backFloor()}" aria-label="Back to the home page">&larr;<span class="nav-back-text"> Home</span></a>`;

  mount.innerHTML = `
    <div class="container">
      ${backLink}<span class="brand">${NAV_NAME}<span class="brand-sub"> &middot; ${NAV_SUB}</span></span>
      <a class="nav-resume-btn" href="${RESUME_HREF}">Resume</a>
    </div>
  `;
}

// Small fixed widget, bottom-left, on every page — contact info should
// never require scrolling to find. Reuses the same SOCIAL_LINKS as the
// in-page footer, just always-visible instead of only-at-the-bottom.
function renderContactCorner() {
  if (document.getElementById("contact-corner")) return;

  const el = document.createElement("div");
  el.id = "contact-corner";
  el.className = "contact-corner";
  el.innerHTML = SOCIAL_LINKS.map(
    (link) => `<a href="${link.href}">${link.label}</a>`
  ).join("");
  document.body.appendChild(el);
}

function renderFooter() {
  const mount = document.getElementById("site-footer");
  if (!mount) return;

  const year = new Date().getFullYear();
  mount.innerHTML = `
    <div class="container">
      <span>&copy; ${year} ${SITE_NAME}</span>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  renderNav();
  renderFooter();
  renderContactCorner();
});
