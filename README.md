# Personal site — maintenance guide

A plain HTML/CSS/JS static site. No build step, no framework, no dependencies to install — open it in a browser and it works.

## Structure

```
├── index.html                  Single-page homepage: cover + a tower of floors
├── projects/
│   ├── index.html               Full project list (generated from projects-data.js)
│   ├── keto-cta.html             KETO-CTA case study
│   ├── survival-sim.html         Survival analysis simulation study
│   ├── checkup-planner.html      Check-up Planner (tool)
│   ├── ehs-product.html          EHS management product
│   ├── pm-system.html            Project-management system (product)
│   ├── scatter-plot-digitiser.html   Scatter Plot Digitiser (tool)
│   ├── job-pilot.html            JobPilot (web app)
│   └── short-story-expander.html Short Story Expander (tool)
├── css/
│   ├── style.css                 Homepage and shared styling (colors, type, layout, dark mode)
│   └── case.css                  Case-study page styling
├── js/
│   ├── partials.js               Shared top bar + footer, site name, contact links, resume link
│   ├── tower-content.js          Content of each floor (basic info, education, skills, work, products, tools built with AI)
│   ├── pagoda.js                 Draws the tower
│   ├── projects-data.js          Project card data (title/summary/link)
│   └── main.js                   Renders project cards from projects-data.js
├── img/                          Tower graphics
├── resume.html                   Resume page: lists the four PDF versions (opened by the Resume buttons)
├── assets/resume-*.pdf           The four resume PDFs (biostatistician / data analyst, English / Chinese)
├── assets/resume.pdf             Copy of the biostatistician English resume, kept so old links still work
├── STATUS.md                     Version/change log — add an entry each time you make a real update
└── README.md                     This file
```

## How to preview locally

Because the site is plain files with no server-side code, you can just double-click `index.html` to open it in a browser. Everything (including the shared nav/footer) is written to work directly from disk — no local server required.

If you ever add something that does need a local server (rare for this setup), the simplest option is, from this folder:

```
python3 -m http.server 8000
```

then open `http://localhost:8000` in a browser.

## How to update content

- **Basic info / education / skills / work experience** → edit the matching floor in `js/tower-content.js`.
- **Contact links** → edit `SOCIAL_LINKS` near the top of `js/partials.js`, and the Contact card on the Basic Info floor in `js/tower-content.js`.
- **Resume** → replace the matching PDF in `assets/` (same name): `resume-biostatistician-en.pdf`, `resume-biostatistician-zh.pdf`, `resume-data-analyst-en.pdf`, `resume-data-analyst-zh.pdf`. Also replace `resume.pdf` if you update the biostatistician English one.
- **Add a new project / case study:**
  1. Copy `projects/pm-system.html` (or `survival-sim.html`) to `projects/your-new-project.html` as a starting template.
  2. Fill in its content. Figures are inline SVG that use the classes in `css/case.css`.
  3. Add one entry to the `PROJECTS` array in `js/projects-data.js` pointing at the new file. It will automatically show up on the homepage (if `featured: true`) and on `projects/index.html`.
  4. Add a row to the matching floor (Products or Built with AI) in `js/tower-content.js`.
- **Site name / nav labels** → `js/partials.js`, top of the file (`SITE_NAME`).
- **Colors / fonts / spacing** → `css/style.css`, the `:root { ... }` block at the top defines every color and spacing value used across the site (including a dark-mode variant).

After any meaningful update, add a short entry to `STATUS.md` (date + what changed).

## Deploying to GitHub Pages

1. Create a new GitHub repository (for a user site, name it `your-username.github.io`) and push this folder's contents to it as the repo root, not nested in a subfolder. Use `git push` rather than drag-and-drop so `.gitignore` is respected.
2. In the repo: **Settings → Pages → Source**, choose the branch you pushed (`master` or `main`) and the `/ (root)` folder, then save.
3. GitHub gives you a URL: `https://your-username.github.io/` for a user site, or `https://your-username.github.io/repo-name/` for a project site.

**Note on link paths:** every page's CSS/JS/nav links use *relative* paths (`css/style.css`, `../css/style.css`, etc.), not paths starting with `/`. This means the site works correctly no matter what subpath it's hosted under — you don't need to change anything whether you deploy to `your-username.github.io` (root) or `your-username.github.io/repo-name/` (project subpath).

### Using a custom domain later

If you buy a custom domain later (Namecheap, Google Domains, etc.), GitHub Pages supports pointing it at your site for free — add a `CNAME` file with your domain name to the repo root and configure DNS as GitHub's docs describe. No changes needed to the site's own files since all internal links are relative.

### Switching to Netlify/Vercel instead

Both accept this folder as-is (no build command needed — it's a static site). Just connect the repo and deploy; both offer free custom-domain support too.
