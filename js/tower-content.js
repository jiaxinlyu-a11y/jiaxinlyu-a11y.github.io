/**
 * tower-content.js
 * ---------------------------------------------------------------------------
 * Content for the floor-by-floor tower detail section, one entry per floor,
 * top of the tower to bottom: 0 Basic Info, 1 Education, 2 Skills,
 * 3 Work Experience, 4 Products, 5 AI Tools.
 *
 * `title`    is shown directly on the tower artwork itself (see pagoda.js's
 *            renderPagodaStack).
 * `headline` is a short phrase shown as the heading of the right-hand panel —
 *            deliberately NOT the floor title again (that's already on the
 *            tower), just a few words describing what the floor is.
 * `body`     is plain HTML for the right-hand panel: one `.dcard` per item
 *            (a degree, a job, a skill group…). index.html draws a connector
 *            line from the highlighted tier to every `.dcard`, so keep each
 *            item as its own top-level `.dcard`.
 *
 * Card building blocks (styled in css/style.css):
 *   <div class="dcard">
 *     <p class="dcard-label">Small uppercase label</p>
 *     <h3>Main line</h3>  <p class="dcard-sub">Secondary line</p>
 *     <span class="dcard-date">[Start] – [End]</span>      (job/degree cards)
 *     <ul class="dcard-list"><li>…</li></ul>
 *     <div class="chips"><span class="chip">…</span></div>
 *     <a class="dcard-row">…</a>                           (contact rows)
 *   </div>
 * Products and AI Tools use a different item: `<a class="dcard pitem">` — a
 * single-line row (tag + title + arrow) that expands on hover to show a
 * short blurb and chips, and links to the item's own page on click.
 * Replace placeholders with real content later.
 */
const TOWER_TIERS = [
  {
    title: "Basic Info",
    headline: "About me",
    body: `
      <div class="dcard">
        <p class="dcard-label">Information</p>
        <h3>Lyu Jiaxin</h3>
        <p class="dcard-sub">Statistician &amp; Data Scientist &middot; Guangzhou, China</p>
        <p class="dcard-text">I have an MSc in Statistical Data Science from
        University College Dublin and almost two years of product work before
        it. I am looking for biostatistics roles first, and I am also open to
        data analyst and AI product manager roles.</p>
        <div class="chips">
          <span class="chip">MSc Statistical Data Science</span>
          <span class="chip">Biostatistics</span>
          <span class="chip">Product background</span>
          <span class="chip">AI product</span>
        </div>
      </div>
      <div class="dcard">
        <p class="dcard-label">Contact</p>
        <a class="dcard-row" href="mailto:18224734143@163.com">
          <span class="k">Email</span><span class="v">18224734143@163.com</span><span class="go">&nearr;</span>
        </a>
        <a class="dcard-row" href="https://www.linkedin.com/in/jiaxin-lyu81" target="_blank" rel="noopener">
          <span class="k">LinkedIn</span><span class="v">linkedin.com/in/jiaxin-lyu81</span><span class="go">&nearr;</span>
        </a>
        <a class="dcard-row" href="https://github.com/jiaxinlyu-a11y" target="_blank" rel="noopener">
          <span class="k">GitHub</span><span class="v">github.com/jiaxinlyu-a11y</span><span class="go">&nearr;</span>
        </a>
      </div>
    `,
  },
  {
    title: "Education",
    headline: "Where I studied",
    body: `
      <div class="dcard">
        <div class="dcard-top">
          <div>
            <h3>MSc in Statistical Data Science</h3>
            <p class="dcard-sub">University College Dublin &middot; Dublin, Ireland</p>
          </div>
          <span class="dcard-date">Sep 2025 – Present</span>
        </div>
        <p class="dcard-text">Thesis: a re-analysis of the retracted KETO-CTA
        imaging study. Courses include Survival Models, Mathematical
        Statistics, MCMC, Machine Learning, Advanced Predictive Analytics and
        Bioinformatics.</p>
      </div>
      <div class="dcard">
        <div class="dcard-top">
          <div>
            <h3>BSc in Statistics</h3>
            <p class="dcard-sub">Harbin University of Commerce &middot; China</p>
          </div>
          <span class="dcard-date">Sep 2019 – Jun 2023</span>
        </div>
      </div>
    `,
  },
  {
    title: "Skills",
    headline: "What I work with",
    body: `
      <div class="dcard">
        <p class="dcard-label">Statistics</p>
        <div class="chips chips-flush">
          <span class="chip">Regression modelling</span>
          <span class="chip">Survival analysis</span>
          <span class="chip">Simulation studies</span>
          <span class="chip">Sensitivity analysis</span>
          <span class="chip">Machine learning</span>
        </div>
      </div>
      <div class="dcard">
        <p class="dcard-label">Programming</p>
        <div class="chips chips-flush">
          <span class="chip">R</span><span class="chip">Python</span>
          <span class="chip">SQL</span><span class="chip">SAS</span>
        </div>
      </div>
      <div class="dcard">
        <p class="dcard-label">Tools</p>
        <div class="chips chips-flush">
          <span class="chip">Git / GitHub</span><span class="chip">Quarto</span>
          <span class="chip">Figma</span><span class="chip">Axure</span>
        </div>
      </div>
      <div class="dcard">
        <p class="dcard-label">Bioinformatics</p>
        <div class="chips chips-flush">
          <span class="chip">Sequence alignment</span>
          <span class="chip">BLAST</span>
          <span class="chip">Phylogenetic trees</span>
        </div>
        <p class="dcard-sub">Needleman-Wunsch and Smith-Waterman in R:
          <a href="https://github.com/jiaxinlyu-a11y/sequence-alignment-r" target="_blank" rel="noopener">code on GitHub &#8599;</a></p>
      </div>
      <div class="dcard">
        <p class="dcard-label">Practice</p>
        <div class="chips chips-flush">
          <span class="chip">Product management</span>
          <span class="chip">Requirements analysis</span>
          <span class="chip">Stakeholder communication</span>
        </div>
      </div>
    `,
  },
  {
    title: "Work Experience",
    headline: "Where I've worked",
    body: `
      <div class="dcard">
        <div class="dcard-top">
          <div>
            <h3>Product Assistant &amp; Delivery Engineer</h3>
            <p class="dcard-sub">Technology company &middot; Chengdu, China</p>
          </div>
          <span class="dcard-date">Jul 2023 – Mar 2025</span>
        </div>
        <ul class="dcard-list">
          <li>Led an internal project-management system from a survey of four existing tools through requirements, process design and delivery.</li>
          <li>Defined functional requirements with clients and wrote design specifications, project plans and technical documentation.</li>
          <li>Delivered product training and worked with developers on iterations based on user feedback.</li>
        </ul>
        <div class="chips"><span class="chip">Product management</span><span class="chip">Requirements analysis</span></div>
      </div>
    `,
  },
  {
    title: "Products",
    headline: "Projects & case studies",
    hint: "Hover a project for a short summary. Click it to open the full case study.",
    body: `
      <a class="dcard pitem" href="projects/keto-cta.html">
        <div class="pitem-head">
          <span class="pitem-tag">MSc thesis</span>
          <span class="pitem-title">KETO-CTA Re-Analysis</span>
          <span class="pitem-go">Case study &rarr;</span>
        </div>
        <div class="pitem-more"><div class="pitem-more-inner">
          <p>Re-analysis of a retracted imaging study: how I chose and stress-tested a regression model, and built a tool to rebuild missing data.</p>
          <div class="chips"><span class="chip">R</span><span class="chip">Regression modelling</span><span class="chip">Model selection</span></div>
        </div></div>
      </a>
      <a class="dcard pitem" href="projects/survival-sim.html">
        <div class="pitem-head">
          <span class="pitem-tag">Simulation study</span>
          <span class="pitem-title">Survival Analysis Simulation</span>
          <span class="pitem-go">Case study &rarr;</span>
        </div>
        <div class="pitem-more"><div class="pitem-more-inner">
          <p>A from-scratch simulation comparing the Cox, log-rank and RMST tests when a treatment effect changes over time. Reproducible R project on GitHub.</p>
          <div class="chips"><span class="chip">R</span><span class="chip">Survival analysis</span><span class="chip">Simulation (ADEMP)</span></div>
        </div></div>
      </a>
      <a class="dcard pitem" href="projects/checkup-planner.html">
        <div class="pitem-head">
          <span class="pitem-tag">Product</span>
          <span class="pitem-title">Check-up Planner</span>
          <span class="pitem-go">Case study &rarr;</span>
        </div>
        <div class="pitem-more"><div class="pitem-more-inner">
          <p>Turns published screening guidelines into a personal check-up plan from age, sex, habits, work and family history, with an evidence level and a source for every item.</p>
          <div class="chips"><span class="chip">Screening guidelines</span><span class="chip">JavaScript</span><span class="chip">English &amp; Chinese</span></div>
        </div></div>
      </a>
      <a class="dcard pitem" href="projects/ehs-product.html">
        <div class="pitem-head">
          <span class="pitem-tag">Product</span>
          <span class="pitem-title">EHS Management Product</span>
          <span class="pitem-go">Case study &rarr;</span>
        </div>
        <div class="pitem-more"><div class="pitem-more-inner">
          <p>Benchmarked the market and compared three systems to design a standard EHS product, then adjusted it for one customer.</p>
          <div class="chips"><span class="chip">Product management</span><span class="chip">Competitive benchmarking</span><span class="chip">Requirements design</span></div>
        </div></div>
      </a>
      <a class="dcard pitem" href="projects/pm-system.html">
        <div class="pitem-head">
          <span class="pitem-tag">Product</span>
          <span class="pitem-title">Project Management System</span>
          <span class="pitem-go">Case study &rarr;</span>
        </div>
        <div class="pitem-more"><div class="pitem-more-inner">
          <p>Led an internal project-management system end to end: compared four tools, worked out requirements departments could not state, and designed a flow for each project type.</p>
          <div class="chips"><span class="chip">Product ownership</span><span class="chip">Requirements elicitation</span><span class="chip">Process design</span></div>
        </div></div>
      </a>
    `,
  },
  {
    title: "Built with AI",
    headline: "Tools and videos I made with AI",
    hint: "Hover an item for a short summary. Click it to open its page; the videos open on TapNow.",
    body: `
      <a class="dcard pitem" href="projects/short-story-expander.html">
        <div class="pitem-head">
          <span class="pitem-tag">AI tool</span>
          <span class="pitem-title">Short Story Expander</span>
          <span class="pitem-go">Case study &rarr;</span>
        </div>
        <div class="pitem-more"><div class="pitem-more-inner">
          <p>Writing skills distilled from my own reading, plus a local workbench that uses them: a short story now takes about two hours instead of six.</p>
          <div class="chips"><span class="chip">Next.js</span><span class="chip">SQLite</span><span class="chip">Skill design</span></div>
        </div></div>
      </a>
      <a class="dcard pitem" href="projects/job-pilot.html">
        <div class="pitem-head">
          <span class="pitem-tag">Web app</span>
          <span class="pitem-title">JobPilot</span>
          <span class="pitem-go">Case study &rarr;</span>
        </div>
        <div class="pitem-more"><div class="pitem-more-inner">
          <p>Built to fix the mess of a job search: every job in one place, dated statuses, interview rounds and a reflection for each.</p>
          <div class="chips"><span class="chip">Next.js</span><span class="chip">TypeScript</span><span class="chip">Supabase</span></div>
        </div></div>
      </a>
      <a class="dcard pitem" href="projects/scatter-plot-digitiser.html">
        <div class="pitem-head">
          <span class="pitem-tag">Tool</span>
          <span class="pitem-title">Scatter Plot Digitiser</span>
          <span class="pitem-go">Case study &rarr;</span>
        </div>
        <div class="pitem-more"><div class="pitem-more-inner">
          <p>Reads data values back from a published scatter plot and checks its own accuracy against known values.</p>
          <div class="chips"><span class="chip">Python</span><span class="chip">OpenCV</span><span class="chip">Streamlit</span></div>
        </div></div>
      </a>
      <div class="dcard">
        <p class="dcard-sub">The two below are videos, made with TapNow.</p>
      </div>
      <a class="dcard pitem" href="https://app.tapnow.ai/home/taptv/5/106488c8-7fba-4d65-aac7-d530c082bccd?order=final_score" target="_blank" rel="noopener">
        <div class="pitem-head">
          <span class="pitem-tag">AI video</span>
          <span class="pitem-title">unihorse</span>
          <span class="pitem-go">Watch &nearr;</span>
        </div>
        <div class="pitem-more"><div class="pitem-more-inner">
          <p>An animated short of about one minute, made for the HappyHorse video-model contest. A foal dreams of becoming a unicorn. After it helps a bird whose head feathers stick up, its reflection in the lake shows that it now looks like one. I designed the plot, character and environment images and storyboard and refined the prompts; TapNow generated the footage.</p>
          <div class="chips"><span class="chip">TapNow</span><span class="chip">Storyboard</span><span class="chip">Prompt design</span></div>
        </div></div>
      </a>
      <a class="dcard pitem" href="https://app.tapnow.ai/home/taptv/3/6abec6cb-53b9-4280-9092-2a0ec9aab74f?order=final_score" target="_blank" rel="noopener">
        <div class="pitem-head">
          <span class="pitem-tag">AI video</span>
          <span class="pitem-title">门外的牵挂</span>
          <span class="pitem-go">Watch &nearr;</span>
        </div>
        <div class="pitem-more"><div class="pitem-more-inner">
          <p>A film of about two and a half minutes for the Kaadas i60 smart lock, made as a contest entry, not a client project, and not affiliated with Kaadas. After a quarrel and leaving home, a young woman living alone fits a smart lock and notices a &ldquo;suspicious figure&rdquo; lingering at her door every day. When the truth comes out, the lock that guarded against strangers opens onto her mother&rsquo;s love. Same way of working: my plot, images, storyboard and prompts, generated in TapNow.</p>
          <div class="chips"><span class="chip">TapNow</span><span class="chip">Storyboard</span><span class="chip">Prompt design</span></div>
        </div></div>
      </a>
    `,
  },
];
