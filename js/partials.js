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

// To update the resume, replace assets/resume.pdf (keep the file name).
// Opens in a new tab rather than forcing a download — most browsers show
// their own PDF viewer, which already has a download button in its toolbar,
// so this covers "preview first" and "download" without building a custom
// viewer. See the comment on renderNav() below for the reasoning.
const RESUME_HREF = `${ROOT}assets/resume.pdf`;

// No Home/About/Projects/Contact page-tab menu — this is a single page.
// The bar at the top is the greeting and the always-there Resume button.
// Every page except the home page also gets a "← Home" link on the left,
// which returns to the home page with the tower open on the Products floor
// (index.html reads the #products hash). The home page itself has no back
// link — it's the page being returned to.
function renderNav() {
  const mount = document.getElementById("site-nav");
  if (!mount) return;

  const isHome = document.body.dataset.page === "home";
  const backLink = isHome
    ? ""
    : `<a class="nav-back" href="${ROOT}index.html#products" aria-label="Back to the home page">&larr;<span class="nav-back-text"> Home</span></a>`;

  mount.innerHTML = `
    <div class="container">
      ${backLink}<span class="brand">${NAV_NAME}<span class="brand-sub"> &middot; ${NAV_SUB}</span></span>
      <a class="nav-resume-btn" href="${RESUME_HREF}" target="_blank" rel="noopener">Resume</a>
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
