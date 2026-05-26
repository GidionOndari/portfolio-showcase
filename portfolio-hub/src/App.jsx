const featuredProjects = [
  {
    name: 'Portfolio Hub',
    category: 'Personal Product',
    status: 'Live Hub',
    level: 'Level 5 — Live System',
    proofScore: 94,
    stage: 'Live',
    description:
      'The central portfolio hub presenting identity, skills, featured projects, build process, experience, and contact details with clear project progress states.',
    tags: ['React', 'Vite', 'Portfolio', 'Deployment Ready'],
    features: ['Live project index', 'Status-led cards', 'Roadmap visibility', 'Contact pathway'],
    liveUrl: 'https://portfolio-hub-delta.vercel.app/',
    repoUrl: 'https://github.com/GidionOndari/portfolio-showcase/tree/main/portfolio-hub',
    caseStudy: 'Case Study Ready',
    sourceNote:
      'Built as the live evolution of earlier personal portfolio drafts and refocused into a roadmap-driven proof-of-skill hub.',
  },
  {
    name: 'TradeWise Dashboard',
    category: 'Analytics Product',
    status: 'Live Frontend Prototype',
    level: 'Level 4 — Live Frontend Prototype',
    proofScore: 88,
    stage: 'Active',
    description:
      'A trading advisory dashboard prototype focused on clear decision-support patterns for summaries, risk posture, and strategy tracking.',
    tags: ['React', 'Dashboard UI', 'Risk Logic', 'Data UX'],
    features: ['Risk monitor', 'Signal cards', 'Strategy status', 'Trade journal UI'],
    liveUrl: 'https://tradewise-dashboard-one.vercel.app/',
    repoUrl: 'https://github.com/GidionOndari/portfolio-showcase/tree/main/tradewise-dashboard',
    caseStudy: 'Built as the first flagship dashboard proof project in the portfolio roadmap.',
    sourceNote:
      'Created from earlier trading dashboard and advisory decision-support concepts, refocused as a frontend-only portfolio prototype with mock data.',
    truthfulNote:
      'This is not a live trading bot. It has no broker execution, no MT5 connection, and no live market API.',
  },
  {
    name: 'Event Landing Page',
    category: 'Marketing Platform',
    status: 'Live Frontend Prototype',
    level: 'Level 2 — Live Frontend Prototype',
    proofScore: 43,
    stage: 'Active',
    description:
      'A sponsor-ready event website concept designed to communicate story, program flow, and conversion CTA with a clean responsive structure.',
    tags: ['Landing Page', 'Responsive Design', 'Sponsor UI', 'Event Website'],
    features: ['Sponsor sections', 'Program flow', 'RSVP/contact CTA', 'Venue/event storytelling'],
    liveUrl: 'https://event-landing-page-sage-xi.vercel.app/',
    repoUrl: 'https://github.com/GidionOndari/portfolio-showcase/tree/main/event-landing-page',
    caseStudy: 'Built as a sponsor-facing event campaign prototype for the portfolio roadmap.',
    sourceNote:
      'Created from earlier event planning, sponsor visibility, and youth activation concepts, refocused as a premium frontend campaign landing page.',
    truthfulNote:
      'This is a frontend portfolio prototype. It is not a live ticketing/payment platform and does not represent confirmed sponsor or venue agreements.',
  },
  {
    name: 'Business Website',
    category: 'Business Presence',
    status: 'Live Frontend Prototype',
    level: 'Level 3 — Live Business Prototype',
    proofScore: 76,
    stage: 'Active',
    description:
      'A responsive small-business website prototype centered on services, pricing confidence, and direct inquiry conversion.',
    tags: ['Business Website', 'Services UI', 'Contact Flow', 'Responsive Design'],
    features: ['Service sections', 'Pricing/product cards', 'WhatsApp CTA', 'Trust-building layout'],
    liveUrl: 'https://business-website-smoky-phi.vercel.app/',
    repoUrl: 'https://github.com/GidionOndari/portfolio-showcase/tree/main/business-website',
    caseStudy: 'Built as a client-ready small-business website prototype for the portfolio roadmap.',
    sourceNote:
      'Created from earlier local-business and product website ideas, refocused as a fresh black/green/red/white skincare business prototype with direct WhatsApp inquiry flow.',
    truthfulNote:
      'This is a frontend portfolio prototype. It is not a live ecommerce/payment platform and does not include checkout, payment processing, or live inventory.',
  },
  {
    name: 'BreedFinder API App',
    category: 'API Application',
    status: 'API Prototype',
    level: 'Level 2 — API Prototype',
    proofScore: 46,
    stage: 'Queued',
    description:
      'An API-based mini app for discovering dog breeds with practical data handling, state management, and UI feedback patterns.',
    tags: ['JavaScript', 'API Fetching', 'Search', 'Local Storage'],
    features: ['API fetching', 'Search/filter', 'Favorites', 'Loading/error states'],
    liveUrl: '',
    repoUrl: '',
    caseStudy: 'Coming Soon',
    sourceNote:
      'Started from prior API practice builds and re-scoped as a polished frontend-plus-data handling prototype for portfolio proof.',
  },
]

const roadmapItems = [
  { name: 'Portfolio Hub', phase: 'Live', lane: 'Live', progress: 100 },
  { name: 'TradeWise Dashboard', phase: 'Live Frontend Prototype', lane: 'Active', progress: 84 },
  { name: 'Event Landing Page', phase: 'Live Frontend Prototype', lane: 'Active', progress: 35 },
  { name: 'Business Website', phase: 'Live Frontend Prototype', lane: 'Active', progress: 76 },
  { name: 'BreedFinder API App', phase: 'Queued', lane: 'Queued', progress: 34 },
  { name: 'MatchPulse / AgriSeason / RIO', phase: 'Secondary Roadmap', lane: 'Roadmap', progress: 20 },
]

const skillCategories = [
  { title: 'Frontend', skills: ['React', 'JavaScript', 'HTML', 'CSS', 'Responsive UI'] },
  { title: 'Backend', skills: ['Node.js', 'Express', 'Flask', 'REST APIs'] },
  { title: 'Databases', skills: ['PostgreSQL', 'SQLite', 'Prisma', 'SQLAlchemy'] },
  { title: 'Tools', skills: ['Git', 'GitHub', 'VS Code', 'Vercel', 'GitHub Pages'] },
  { title: 'Product Thinking', skills: ['Dashboards', 'Landing Pages', 'Automation Tools', 'Admin Panels', 'API Apps'] },
]

const heroMetrics = ['5 Showcase Builds', '3 Live Prototypes', 'Recruiter-Ready Portfolio']

const quickInfo = [
  'Role: Full-Stack Developer',
  'Focus: Web Platforms + Dashboards',
  'Availability: Internship / Junior / Freelance',
  'Location: Kenya / Remote',
  'Flagship: TradeWise Dashboard Live',
]

function ProjectActionButton({ href, variant, activeLabel, inactiveLabel, name }) {
  if (href) {
    return <a href={href} className={`btn ${variant}`} target="_blank" rel="noreferrer" aria-label={`${name} ${activeLabel}`}>{activeLabel}</a>
  }
  return <span className={`btn ${variant} btn-disabled`} role="status" aria-label={`${name} ${inactiveLabel}`}>{inactiveLabel}</span>
}

function ProjectCard({ project }) {
  return (
    <article className={`card project-card stage-${project.stage.toLowerCase()}`}>
      <div className="project-accent" />
      <div className="project-top">
        <span className="badge">{project.status}</span>
        <span className="category-label">{project.category}</span>
      </div>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <div className="project-gamified">
        <p className="project-level">{project.level}</p>
        <div className="proof-row"><span>Proof Score</span><strong>{project.proofScore}%</strong></div>
        <div className="progress-track"><span style={{ width: `${project.proofScore}%` }} /></div>
        <span className={`stage-chip ${project.stage.toLowerCase()}`}>{project.stage}</span>
      </div>
      <ul className="project-features">
        {project.features.map((feature) => <li key={`${project.name}-${feature}`}>{feature}</li>)}
      </ul>
      <div className="tag-list">
        {project.tags.map((tag) => <span className="tag" key={`${project.name}-${tag}`}>✓ {tag}</span>)}
      </div>
      <div className="project-meta">
        <p><span>Case Study:</span> {project.caseStudy}</p>
        <p><span>Source Note:</span> {project.sourceNote}</p>
        {project.truthfulNote ? <p><span>Truthful Note:</span> {project.truthfulNote}</p> : null}
      </div>
      <div className="project-actions">
        <ProjectActionButton href={project.liveUrl} variant="btn-primary" activeLabel="Live Demo" inactiveLabel="Demo Coming Soon" name={project.name} />
        <ProjectActionButton href={project.repoUrl} variant="btn-outline" activeLabel="GitHub Repo" inactiveLabel="Repo Pending" name={project.name} />
      </div>
    </article>
  )
}

export default function App() {
  return (
    <div className="site-shell">
      <header className="navbar">
        <div className="brand gradient-text-soft">Gidion Ondari</div>
        <nav>
          <a href="#about">About</a><a href="#projects">Projects</a><a href="#experience">Experience</a><a href="#contact">Contact</a>
        </nav>
      </header>
      <main>
        <section className="hero">
          <div className="hero-content">
            <span className="status-pill">Available for internships, junior roles, and freelance builds</span>
            <p className="eyebrow gradient-text-soft">Full-Stack Developer</p>
            <h1>I&apos;m <span className="hero-name">Gidion Ondari</span></h1>
            <p className="hero-subheadline">I build practical <span className="highlight-text">web platforms</span>, dashboards, automation tools, and intelligent decision systems for real user outcomes.</p>
            <p className="hero-location">Kenya / Remote · Open to product-focused development work.</p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">View Projects</a>
              <a href="#contact" className="btn btn-outline">Contact Me</a>
            </div>
            <div className="metric-grid">{heroMetrics.map((metric) => <article className="metric-card" key={metric}><span className="metric-dot">●</span><p className="gradient-text-soft">{metric}</p></article>)}</div>
          </div>
          <div className="hero-side card">
            <h3 className="gradient-text">Recruiter Quick Info</h3>
            <ul className="quick-info-list">{quickInfo.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        </section>

        <section id="about" className="section card about-card">
          <h2 className="gradient-text">About</h2>
          <p>I&apos;m a full-stack developer focused on practical, recruiter-verifiable product builds across web platforms, dashboards, automation tools, and intelligent systems.</p>
        </section>

        <section className="section">
          <h2 className="gradient-text">Tech Capability Stack</h2>
          <div className="grid skills-grid">
            {skillCategories.map((category) => (
              <article className="card skill-group" key={category.title}>
                <h3>{category.title}</h3>
                <ul className="tick-list">{category.skills.map((skill) => <li key={`${category.title}-${skill}`}>{skill}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section card recruiter-scan">
          <h2 className="gradient-text">Recruiter Quick Scan</h2>
          <div className="scan-grid">
            <p><span>Who:</span> Gidion Ondari</p>
            <p><span>Role:</span> Full-Stack Developer</p>
            <p><span>Focus:</span> Web platforms, dashboards, automation tools, intelligent systems</p>
            <p><span>Strongest live proof:</span> TradeWise Dashboard</p>
            <p><span>Experience edge:</span> Safaricom Hook brand activation + product/event planning</p>
            <p><span>Open to:</span> internships, junior roles, freelance builds, collaborations</p>
            <p><span>Contact:</span> ondarigidion@gmail.com · +254742917779</p>
          </div>
        </section>

        <section id="projects" className="section">
          <h2 className="gradient-text">Featured Projects</h2>
          <div className="grid projects-grid">{featuredProjects.map((project) => <ProjectCard key={project.name} project={project} />)}</div>
        </section>

        <section className="section card roadmap-section">
          <h2 className="gradient-text">Portfolio Roadmap</h2>
          <p>Build progression system showing what is live, active, queued, and on secondary roadmap.</p>
          <ul className="roadmap-list">
            {roadmapItems.map((item) => (
              <li key={item.name} className={`lane-${item.lane.toLowerCase()}`}>
                <div><span>{item.name}</span><strong>{item.phase}</strong></div>
                <span className={`stage-chip ${item.lane.toLowerCase()}`}>{item.lane}</span>
                <div className="progress-track"><span style={{ width: `${item.progress}%` }} /></div>
              </li>
            ))}
          </ul>
        </section>

        <section id="experience" className="section">
          <h2 className="gradient-text">Experience</h2>
          <div className="grid experience-grid">
            <article className="card experience-card"><h3>Safaricom Hook Brand Activation</h3><p>Supported youth engagement and communication flows in live event contexts with practical coordination discipline.</p></article>
            <article className="card experience-card"><h3>Full-Stack Development Training</h3><p>Built frontend/backend/API/database projects while improving deployment and maintainability habits.</p></article>
            <article className="card experience-card"><h3>Product & Event Planning</h3><p>Worked on planning, audience communication, and product/event execution structure.</p></article>
          </div>
        </section>

        <section id="contact" className="section card contact-section">
          <h2 className="gradient-text">Contact</h2>
          <p className="contact-cta">Reach out for internships, junior full-stack roles, freelance websites, dashboard builds, or product-focused collaboration.</p>
          <div className="contact-grid">
            <a className="contact-item" href="mailto:ondarigidion@gmail.com"><span className="contact-label">Email</span><span className="contact-value">ondarigidion@gmail.com</span></a>
            <a className="contact-item" href="tel:+254742917779"><span className="contact-label">WhatsApp / Phone</span><span className="contact-value">+254742917779</span></a>
            <a className="contact-item" href="https://github.com/GidionOndari" target="_blank" rel="noreferrer"><span className="contact-label">GitHub</span><span className="contact-value">github.com/GidionOndari</span></a>
            <div className="contact-item contact-static"><span className="contact-label">Location</span><span className="contact-value">Kenya / Remote</span></div>
          </div>
        </section>
      </main>
      <footer className="footer"><span>© {new Date().getFullYear()} Gidion Ondari</span><span>Designed and built with React + Vite</span></footer>
    </div>
  )
}
