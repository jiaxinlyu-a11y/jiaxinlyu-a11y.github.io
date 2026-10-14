/**
 * pagoda.js
 * ---------------------------------------------------------------------------
 * The tower illustration, used in two different ways on this page:
 *
 *  - Cover: the whole tower as one flat artwork file (img/pagoda-tower.png),
 *    cropped/zoomed with a CSS transform computed from a pixel box measured
 *    on the source image (WHOLE_TOWER_BOX below).
 *    API: renderPagoda(container), focusPagodaWhole(container)
 *
 *  - Tower detail (floor by floor): the SAME source artwork, but pre-sliced
 *    into one PNG per tier (img/pagoda-tier-0.png … -5.png, plus a spire cap
 *    and a base-plinth cap) and stacked back into a column with zero gap, so
 *    it reads as one continuous tower. The current floor is highlighted —
 *    not re-cropped — by toggling a CSS class on its slot; a solid-color
 *    silhouette (CSS mask, same artwork as the alpha mask) fades in, the
 *    slot scales up and gets extra margin, and the label switches from dark
 *    text on pale fill to white text on the solid fill. All of that is a
 *    plain CSS transition, so switching floors animates smoothly instead of
 *    jumping — no image swapping or re-cropping involved.
 *    API: renderPagodaStack(container, floorTitles), setPagodaActiveFloor(container, floorIndex)
 *
 * Usage:
 *   renderPagoda(document.getElementById("cover-pagoda"));
 *   focusPagodaWhole(document.getElementById("cover-pagoda"));
 *
 *   renderPagodaStack(document.getElementById("detail-pagoda"), TOWER_TIERS.map(t => t.title));
 *   setPagodaActiveFloor(document.getElementById("detail-pagoda"), 0); // floor 0 = top of TOWER_TIERS
 */

const PAGODA_BASE_PATH = typeof BASE_PATH !== "undefined" ? BASE_PATH : "./";
const PAGODA_IMAGE_SRC = PAGODA_BASE_PATH + "img/pagoda-tower.png";

// The source PNG's own pixel size — needed to turn WHOLE_TOWER_BOX (also in
// source-image pixels) into fractions when computing a CSS transform.
const PAGODA_IMAGE_SIZE = { width: 1600, height: 2210 };

// Tight crop around the whole tower (spire tip to the ground shadow),
// used for the cover's static whole-tower shot.
const WHOLE_TOWER_BOX = { x: [150, 1450], y: [50, 2158] };

function renderPagoda(container) {
  if (!container) return;
  container.innerHTML = `<img class="pagoda-img" src="${PAGODA_IMAGE_SRC}" alt="Illustration of a six-tier pagoda, one tier per section of this page" draggable="false"/>`;
}

// Fits `box` (in source-image pixels) into the container, centered, without
// stretching — same "meet" behavior the old SVG viewBox technique gave, just
// computed as a CSS transform on the <img> instead of a viewBox swap. Reads
// the container's CURRENT on-screen size every time, so it stays correct
// across any viewport/layout — not baked into fixed units the way an early
// version of this (a plain CSS transform using SVG-coordinate numbers)
// would have been.
function setPagodaBoxTransform(container, box, pad, offsetXFrac) {
  if (!container) return;
  const img = container.querySelector(".pagoda-img");
  if (!img || !box) return;
  const frame = container.getBoundingClientRect();
  if (!frame.width || !frame.height) return;
  const padding = typeof pad === "number" ? pad : 1.0;
  const nudgeX = typeof offsetXFrac === "number" ? offsetXFrac * frame.width : 0;

  const boxW = box.x[1] - box.x[0];
  const boxH = box.y[1] - box.y[0];
  const boxCx = (box.x[0] + box.x[1]) / 2;
  const boxCy = (box.y[0] + box.y[1]) / 2;

  const scale = Math.min(frame.width / boxW, frame.height / boxH) * padding;
  const tx = frame.width / 2 - boxCx * scale + nudgeX;
  const ty = frame.height / 2 - boxCy * scale;

  img.style.width = `${PAGODA_IMAGE_SIZE.width}px`;
  img.style.height = `${PAGODA_IMAGE_SIZE.height}px`;
  img.style.transform = `translate(${tx.toFixed(2)}px, ${ty.toFixed(2)}px) scale(${scale.toFixed(4)})`;

  // Re-apply on resize so the crop stays correct — store what to redo so a
  // later resize can just replay it without the caller needing to track it.
  container.dataset.pagodaBox = JSON.stringify(box);
  container.dataset.pagodaPad = String(padding);
  container.dataset.pagodaOffsetX = String(typeof offsetXFrac === "number" ? offsetXFrac : 0);
}

// A small rightward nudge (as a fraction of the frame's own width, so it
// scales sensibly at any size) — purely a visual centering preference for
// the cover, not needed for correctness.
const COVER_NUDGE_X = 0.035;

function focusPagodaWhole(container, pad) {
  setPagodaBoxTransform(container, WHOLE_TOWER_BOX, typeof pad === "number" ? pad : 0.96, COVER_NUDGE_X);
}

// Keep the cover's crop correct when the viewport/layout changes — re-run
// whatever box was last set on each mount.
window.addEventListener("resize", () => {
  document.querySelectorAll(".pagoda-mount").forEach((container) => {
    const raw = container.dataset.pagodaBox;
    if (!raw) return;
    const box = JSON.parse(raw);
    const pad = parseFloat(container.dataset.pagodaPad || "1");
    const offsetX = parseFloat(container.dataset.pagodaOffsetX || "0");
    setPagodaBoxTransform(container, box, pad, offsetX);
  });
});

// ---------------------------------------------------------------------------
// Tower detail: stacked tiers with a highlighted floor
// ---------------------------------------------------------------------------

// 6 tiers, pre-sliced from the same source artwork (see img/pagoda-tier-*.png
// — cut with scripts/slice_tiers.py, re-measured directly off the PNG: a
// width-profile scan down the tower finds each eave's widest point, which is
// how the missing 6th tier was caught — the old 5-tier measurement had
// mistaken the bottom tier for the base plinth). Slot 0 is the bottom/widest
// tier, slot 5 is the top/narrowest tier under the spire — this is image
// order, not reading order.
const PAGODA_TIER_COUNT = 6;
const pagodaTierSrc = (slot) => `${PAGODA_BASE_PATH}img/pagoda-tier-${slot}.png`;
// The active-floor "solid fill" used to be a CSS mask (the line-art PNG
// used as an alpha mask over a solid background color) — elegant and
// automatically theme-aware, but it silently renders as fully invisible on
// some browsers/GPU combinations (confirmed: a user saw the active tier's
// fill never appear, with everything else — including the label's own
// color switch, which doesn't depend on the mask — working correctly).
// mask-image + filter (the drop-shadow) together is a known-flaky
// combination. Pre-baked solid-color PNGs sidestep CSS masking entirely —
// just plain images with an opacity transition, which is about as
// cross-browser-safe as it gets. Two variants per tier (light/dark mode
// accent color baked in) since a static raster can't pick up a CSS
// variable the way `background: var(--color-accent)` could.
const pagodaTierFillSrc = (slot, mode) => `${PAGODA_BASE_PATH}img/pagoda-tier-${slot}-fill-${mode}.png`;
const PAGODA_SPIRE_SRC = `${PAGODA_BASE_PATH}img/pagoda-spire.png`;
const PAGODA_BASE_SRC = `${PAGODA_BASE_PATH}img/pagoda-base.png`;

// Every sliced PNG shares the same 1600px-wide canvas (just cropped to a
// different height band), so the whole stack's shape is fixed: total height
// 2094px (spire 395 + the 6 tiers below + base 41) at a constant 1600px
// width. layoutPagodaStack (below) uses these to compute one pixel scale and
// sets every piece's size directly in JS — a flex item's "auto" width
// doesn't reliably derive from an <img>'s intrinsic ratio + a percentage
// height the way a plain block-level image does (confirmed by testing: it
// resolved to 0 here), so this sidesteps that by never asking the browser to
// infer a size — same technique as setPagodaBoxTransform above, just for a
// stack of pieces instead of one crop.
const PAGODA_CANVAS_WIDTH = 1600;
const PAGODA_SPIRE_HEIGHT = 395;
const PAGODA_BASE_HEIGHT = 41;
// slot 0 = bottom/widest … slot 5 = top/narrowest (see comment above).
const PAGODA_TIER_HEIGHTS = [296, 280, 280, 280, 280, 242];
const PAGODA_STACK_TOTAL_HEIGHT =
  PAGODA_SPIRE_HEIGHT + PAGODA_BASE_HEIGHT + PAGODA_TIER_HEIGHTS.reduce((a, b) => a + b, 0);

// Builds the full stack once: spire cap, 6 tier slots (top to bottom in the
// DOM, matching the artwork's own taper), base-plinth cap. `floorTitles` is
// in READING order (floor 0 = top of the tower, e.g. "Basic Info" … floor 5
// = bottom, e.g. "AI Tools") — slot = PAGODA_TIER_COUNT - 1 - floorIndex,
// since the DOM/image order runs top(narrow)-to-bottom(wide) while slot 0 is
// defined bottom-up in the source measurements.
function renderPagodaStack(container, floorTitles) {
  if (!container) return;
  const titles = floorTitles || [];
  // Everything (spire + stack + base) lives inside .tower-column, which
  // layoutPagodaStack gives a fixed pixel width/height — the active floor
  // pops out purely via `transform: scale()`, which never changes layout,
  // so this column's size never changes no matter which floor is active.
  // That's what lets it be sized to fill the panel once and never need to
  // scroll, and what makes hover-to-switch stable (nothing moves under the
  // cursor when a floor becomes active).
  let html = `<div class="tower-column">`;
  html += `<img class="tower-spire" src="${PAGODA_SPIRE_SRC}" alt="" draggable="false" />`;
  html += `<div class="tower-stack">`;
  for (let slot = PAGODA_TIER_COUNT - 1; slot >= 0; slot--) {
    const floorIndex = PAGODA_TIER_COUNT - 1 - slot;
    const title = titles[floorIndex] || "";
    const src = pagodaTierSrc(slot);
    html += `
      <div class="tier-slot" data-floor="${floorIndex}">
        <img src="${src}" alt="" draggable="false" />
        <img class="tier-fill tier-fill-light" src="${pagodaTierFillSrc(slot, "light")}" alt="" draggable="false" />
        <img class="tier-fill tier-fill-dark" src="${pagodaTierFillSrc(slot, "dark")}" alt="" draggable="false" />
        <div class="tier-label">${title}</div>
      </div>`;
  }
  html += `</div>`;
  html += `<img class="tower-base" src="${PAGODA_BASE_SRC}" alt="" draggable="false" />`;
  html += `</div>`;
  container.innerHTML = html;
  layoutPagodaStack(container);
}

// Sizes .tower-column (and each piece inside it) in pixels, computed from
// the container's CURRENT on-screen size — same "read the live box, don't
// bake in fixed units" approach as setPagodaBoxTransform. Scale is picked so
// the stack fits both the available height (leaving headroom for the active
// tier's scale-up to overflow into without clipping) and the available
// width, whichever is tighter.
const PAGODA_STACK_HEIGHT_FRACTION = 0.88; // leaves ~12% headroom for the active-tier scale overflow
function layoutPagodaStack(container) {
  if (!container) return;
  const column = container.querySelector(".tower-column");
  if (!column) return;
  const frame = container.getBoundingClientRect();
  if (!frame.width || !frame.height) return;

  const scale = Math.min(
    (frame.height * PAGODA_STACK_HEIGHT_FRACTION) / PAGODA_STACK_TOTAL_HEIGHT,
    frame.width / PAGODA_CANVAS_WIDTH
  );
  column.style.width = `${(scale * PAGODA_CANVAS_WIDTH).toFixed(2)}px`;
  column.style.height = `${(scale * PAGODA_STACK_TOTAL_HEIGHT).toFixed(2)}px`;
}

// Re-measure on resize, same as the cover's crop.
window.addEventListener("resize", () => {
  document.querySelectorAll(".pagoda-mount-detail").forEach((container) => {
    if (container.querySelector(".tower-column")) layoutPagodaStack(container);
  });
});

// Switching floors is just moving a CSS class — the scale/color transition
// on .tier-slot (see style.css) animates it smoothly, no image swap or
// re-crop involved, and (deliberately) no page/container scrolling: the
// active tier pops out via `transform` only, which doesn't change layout,
// so the tower's total size never changes and there's never anything to
// scroll to.
function setPagodaActiveFloor(container, floorIndex) {
  if (!container) return;
  const slots = container.querySelectorAll(".tier-slot");
  slots.forEach((el) => {
    el.classList.toggle("is-active", Number(el.dataset.floor) === floorIndex);
  });
}

// Wires hover: moving the mouse over a tier switches straight to that
// floor (no click needed). `onFloorHover(floorIndex)` is called with the
// hovered floor's index; the caller (index.html) is what actually updates
// the active class + text panel, so this stays a dumb event binder.
function enablePagodaHoverFloors(container, onFloorHover) {
  if (!container || typeof onFloorHover !== "function") return;
  container.querySelectorAll(".tier-slot").forEach((el) => {
    el.addEventListener("mouseenter", () => onFloorHover(Number(el.dataset.floor)));
  });
}
