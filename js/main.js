/**
 * main.js
 * ---------------------------------------------------------------------------
 * Renders project cards from projects-data.js into any page that has a
 * container element:
 *   <div id="project-grid" data-featured-only="true"></div>
 *
 * data-featured-only="true"  -> flat grid of featured cards only (homepage)
 * data-featured-only="false" -> every project, grouped into sections by
 *                                 category (projects/index.html)
 *
 * Each page must set `const BASE_PATH = "./";` or `"../";` (same variable
 * partials.js reads) BEFORE this script runs, so project links resolve
 * correctly regardless of the page's folder depth.
 */

const CATEGORY_ORDER = ["Biostatistics", "Product", "AI & Self-built"];

function projectHref(project) {
  const root = typeof BASE_PATH !== "undefined" ? BASE_PATH : "./";
  return `${root}${project.href}`;
}

function projectCardHTML(project) {
  return `
    <article class="card">
      <span class="tag">${project.tag}</span>
      <h3>${project.title}</h3>
      <p>${project.summary}</p>
      <a class="card-link" href="${projectHref(project)}">View case study &rarr;</a>
    </article>
  `;
}

function groupByCategory(items) {
  const groups = {};
  items.forEach((p) => {
    const cat = p.category || "Other";
    (groups[cat] = groups[cat] || []).push(p);
  });
  return CATEGORY_ORDER.filter((cat) => groups[cat]).map((cat) => ({
    category: cat,
    items: groups[cat],
  }));
}

function renderProjectGrid() {
  const mount = document.getElementById("project-grid");
  if (!mount || typeof PROJECTS === "undefined") return;

  const featuredOnly = mount.dataset.featuredOnly === "true";

  if (featuredOnly) {
    const items = PROJECTS.filter((p) => p.featured);
    mount.innerHTML = items.map(projectCardHTML).join("");
    return;
  }

  const groups = groupByCategory(PROJECTS);
  mount.innerHTML = groups
    .map(
      (g) => `
        <div class="project-category">
          <h3 class="category-heading">${g.category}</h3>
          <div class="grid">${g.items.map(projectCardHTML).join("")}</div>
        </div>
      `
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", renderProjectGrid);
