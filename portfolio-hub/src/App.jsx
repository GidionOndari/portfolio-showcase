const featuredProjects = [
  {
    name: 'Portfolio Hub',
    category: 'Personal Product',
    status: 'Live Hub',
    description:
      'The central portfolio hub presenting identity, skills, featured projects, build process, experience, and contact details with clear project progress states.',
    tags: ['React', 'Vite', 'Portfolio', 'Deployment Ready'],
    features: ['Live project index', 'Status-led cards', 'Roadmap visibility', 'Contact pathway'],
    liveUrl: 'https://gidionondari.github.io/portfolio-hub/',
    repoUrl: 'https://github.com/GidionOndari/portfolio-showcase/tree/main/portfolio-hub',
    caseStudy: 'Case Study Ready',
    image: '/images/gidion-hackathon.jpg',
    sourceNote:
      'Built as the live evolution of earlier personal portfolio drafts and refocused into a roadmap-driven proof-of-skill hub.',
  },
  {
    name: 'TradeWise Dashboard',
    category: 'Analytics Product',
    status: 'Frontend Prototype',
    description:
      'A trading advisory dashboard prototype focused on clear decision-support patterns for summaries, risk posture, and strategy tracking.',
    tags: ['React', 'Dashboard UI', 'Risk Logic', 'Data UX'],
    features: ['Risk monitor', 'Signal cards', 'Strategy status', 'Trade journal UI'],
    liveUrl: '',
    repoUrl: 'https://github.com/GidionOndari/portfolio-showcase/tree/main/tradewise-dashboard',
    caseStudy: 'Built as the first flagship dashboard proof project in the portfolio roadmap.',
    image: '/images/gidion-legal-awareness.jpg',
    sourceNote:
      'Created from earlier trading dashboard and advisory decision-support concepts, refocused as a frontend-only portfolio prototype with mock data.',
    liveLabelPending: 'Deploy Pending',
    truthfulNote:
      'This is not a live trading bot. It has no broker execution, no MT5 connection, and no live market API.',
  },
  {
    name: 'Event Landing Page',
    category: 'Marketing Platform',
    status: 'Frontend Prototype',
    description:
      'A sponsor-ready event website concept designed to communicate story, program flow, and conversion CTA with a clean responsive structure.',
    tags: ['Landing Page', 'Responsive Design', 'Sponsor UI', 'Event Website'],
    features: [
      'Sponsor sections',
      'Program flow',
      'RSVP/contact CTA',
      'Venue/event storytelling',
    ],
    liveUrl: '',
    repoUrl: '',
    caseStudy: 'Coming Soon',
    image: '/images/gidion-safaricom-hook.jpg',
    sourceNote:
      'Derived from earlier event branding and planning work, now scoped into a production-ready landing page blueprint.',
  },
  {
    name: 'Business Website',
    category: 'Business Presence',
    status: 'Case Study Ready',
    description:
      'A responsive small-business website prototype centered on services, pricing confidence, and direct inquiry conversion.',
    tags: ['Business Website', 'Services UI', 'Contact Flow', 'Responsive Design'],
    features: ['Service sections', 'Pricing/product cards', 'WhatsApp CTA', 'Trust-building layout'],
    liveUrl: '',
    repoUrl: '',
    caseStudy: 'Case Study Ready',
    image: '/images/gidion-safaricom-hook.jpg',
    sourceNote:
      'Refined from earlier local-business website concepts into a conversion-focused and trust-oriented service platform case.',
  },
  {
    name: 'BreedFinder API App',
    category: 'API Application',
    status: 'API Prototype',
    description:
      'An API-based mini app for discovering dog breeds with practical data handling, state management, and UI feedback patterns.',
    tags: ['JavaScript', 'API Fetching', 'Search', 'Local Storage'],
    features: ['API fetching', 'Search/filter', 'Favorites', 'Loading/error states'],
    liveUrl: '',
    repoUrl: '',
    caseStudy: 'Coming Soon',
    image: '/images/gidion-hackathon.jpg',
    sourceNote:
      'Started from prior API practice builds and re-scoped as a polished frontend-plus-data handling prototype for portfolio proof.',
  },
]

const roadmapItems = [
  { name: 'Portfolio Hub', phase: 'live' },
  { name: 'TradeWise Dashboard', phase: 'built locally, deploy pending' },
  { name: 'Event Landing Page', phase: 'queued' },
  { name: 'Business Website', phase: 'queued' },
  { name: 'BreedFinder API App', phase: 'queued' },
  { name: 'MatchPulse / AgriSeason / RIO', phase: 'secondary roadmap' },
]

const secondaryProjects = ['MatchPulse', 'AgriSeason Planner', 'RIO Assistant UI']

const skillCategories = [
  { title: 'Frontend', skills: 'React, JavaScript, HTML, CSS, Responsive UI' },
  { title: 'Backend', skills: 'Node.js, Express, Flask, REST APIs' },
  { title: 'Databases', skills: 'PostgreSQL, SQLite, Prisma, SQLAlchemy' },
  { title: 'Tools', skills: 'Git, GitHub, VS Code, Vercel, GitHub Pages' },
  {
    title: 'Product Thinking',
    skills: 'Dashboards, Landing Pages, Automation Tools, Admin Panels, API Apps',
  },
]

const heroMetrics = ['5 Showcase Builds', 'Full-Stack Focus', 'Deployment Ready']
const aboutHighlights = ['Web Platforms', 'Dashboards', 'Intelligent Systems']

function ProjectActionButton({ href, variant, activeLabel, inactiveLabel, name }) {
  if (href) {
    return (
      <a href={href} className={`btn ${variant}`} target="_blank" rel="noreferrer" aria-label={`${name} ${activeLabel}`}>
        {activeLabel}
      </a>
    )
  }

  return (
    <span className={`btn ${variant} btn-disabled`} role="status" aria-label={`${name} ${inactiveLabel}`}>
      {inactiveLabel}
    </span>
  )
}

function ProjectCard({ project, stage = 'Coming Soon' }) {
  const status = project.status || stage

  return (
    <article className="card project-card">
      <div className="project-accent" />
      <div className="project-top">
        <span className="badge">{status}</span>
        <span className="category-label">{project.category || 'Portfolio Build'}</span>
      </div>
      <h3>{project.name}</h3>
      <p>{project.description}</p>

      {project.features?.length ? (
        <ul className="project-features">
          {project.features.map((feature) => (
            <li key={`${project.name}-${feature}`}>{feature}</li>
          ))}
        </ul>
      ) : null}

      <div className="project-meta">
        <p>
          <span>Case Study:</span> {project.caseStudy || 'Coming Soon'}
        </p>
        {project.sourceNote ? (
          <p>
            <span>Source Note:</span> {project.sourceNote}
          </p>
        ) : null}
        {project.truthfulNote ? (
          <p>
            <span>Truthful Note:</span> {project.truthfulNote}
          </p>
        ) : null}
      </div>

      {project.tags ? (
        <div className="tag-list">
          {project.tags.map((tag) => (
            <span className="tag" key={`${project.name}-${tag}`}>
              {tag}
            </span>
          ))}
        </div>
      ) : null}

      <div className="project-actions">
        <ProjectActionButton
          href={project.liveUrl}
          variant="btn-primary"
          activeLabel="Live Demo"
          inactiveLabel={project.liveLabelPending || 'Demo Coming Soon'}
          name={project.name}
        />
        <ProjectActionButton
          href={project.repoUrl}
          variant="btn-outline"
          activeLabel="GitHub Repo"
          inactiveLabel={project.repoLabelPending || 'Repo Pending'}
          name={project.name}
        />
      </div>
    </article>
  )
}

export default function App() {
  return (
    <div className="site-shell">
      <header className="navbar">
        <div className="brand">Gidion Ondari</div>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <span className="status-pill">Available for full-stack opportunities</span>
            <p className="eyebrow">Full-Stack Developer</p>
            <h1>I build practical web platforms, dashboards, and intelligent systems.</h1>
            <p className="hero-subheadline">
              I’m Gidion Ondari, a full-stack developer creating clean, usable digital
              products with frontend, backend, API, database, and system design thinking.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                View Projects
              </a>
              <a href="#contact" className="btn btn-outline">
                Contact Me
              </a>
            </div>
            <div className="metric-grid">
              {heroMetrics.map((metric) => (
                <article className="metric-card" key={metric}>
                  <span className="metric-dot">•</span>
                  <p>{metric}</p>
                </article>
              ))}
            </div>
          </div>

          <figure className="hero-visual image-frame premium-image">
            <img
              src="/images/gidion-hackathon.jpg"
              alt="Gidion Ondari standing beside a Design Thinking Hackathon banner, representing practical innovation and problem-solving work."
            />
            <figcaption>Hackathon participation shaping practical product thinking.</figcaption>
          </figure>
        </section>

        <section id="about" className="section card about-card">
          <div className="about-grid">
            <div>
              <h2>About</h2>
              <p>
                I’m a full-stack developer building practical, usable software products across web
                platforms, dashboards, automation tools, and intelligent systems. My current focus
                is turning earlier learning and prototype work into clean, deployed,
                portfolio-ready projects.
              </p>
              <div className="highlight-chips">
                {aboutHighlights.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <figure className="image-frame snapshot-image premium-image">
              <img
                src="/images/gidion-legal-awareness.jpg"
                alt="Gidion Ondari during a legal awareness event, reflecting professional communication and public engagement experience."
              />
              <figcaption>Professional snapshot from legal awareness engagement.</figcaption>
            </figure>
          </div>
        </section>

        <section className="section">
          <h2>Skills</h2>
          <div className="grid skills-grid">
            {skillCategories.map((category) => (
              <article className="card skill-group" key={category.title}>
                <span className="skill-accent">// {category.title}</span>
                <h3>{category.title}</h3>
                <p>{category.skills}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <h2>Featured Projects</h2>
          <div className="grid projects-grid">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </section>

        <section className="section card roadmap-section">
          <h2>Portfolio Roadmap</h2>
          <p>
            This portfolio is being built intentionally in phases, starting from the live hub and
            progressing through prioritized product builds.
          </p>
          <ul className="roadmap-list">
            {roadmapItems.map((item) => (
              <li key={item.name}>
                <span>{item.name}</span>
                <strong>{item.phase}</strong>
              </li>
            ))}
          </ul>
        </section>

        <section className="section">
          <h2>Secondary Projects</h2>
          <div className="grid projects-grid secondary-grid">
            {secondaryProjects.map((project) => (
              <ProjectCard
                key={project}
                project={{
                  name: project,
                  category: 'Roadmap Concept',
                  status: 'Coming Soon',
                  description:
                    'Planned portfolio build in discovery and design phase. Scope and implementation details will be published as development begins.',
                  features: ['Scope definition', 'Wireframe direction', 'Build milestones'],
                  caseStudy: 'Coming Soon',
                  sourceNote:
                    'Roadmap concept from earlier project idea notes; implementation details will be published once active build starts.',
                }}
              />
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <h2>Experience</h2>
          <div className="grid experience-grid">
            <article className="card experience-card feature-experience">
              <figure className="image-frame experience-image premium-image">
                <img
                  src="/images/gidion-safaricom-hook.jpg"
                  alt="Gidion Ondari at a Safaricom Hook event activation, supporting youth engagement and brand communication."
                />
                <figcaption>Safaricom Hook activation experience.</figcaption>
              </figure>
              <h3>Safaricom Hook Brand Ambassador</h3>
              <p>
                Supported campus activations, community engagement, and program communication with
                a focus on youth-oriented digital experiences.
              </p>
            </article>
            <article className="card experience-card">
              <h3>Full-Stack Development Training</h3>
              <p>
                Built foundational and intermediate projects across frontend, backend, API
                workflows, and database integration while strengthening deployment and
                maintainability discipline.
              </p>
            </article>
            <article className="card experience-card">
              <h3>Product & Event Planning</h3>
              <p>
                Coordinated planning flows, audience communication, and structured execution for
                community and event initiatives that required clear user journeys and practical
                outcomes.
              </p>
            </article>
          </div>
        </section>

        <section className="section card">
          <h2>Build Process</h2>
          <ol>
            <li>Define practical problem and user-facing goals.</li>
            <li>Design clean interfaces and data flows.</li>
            <li>Implement frontend and backend in incremental iterations.</li>
            <li>Test, refine, and document outcomes transparently.</li>
          </ol>
        </section>

        <section id="contact" className="section card contact-section">
          <h2>Contact</h2>
          <p>
            Open to collaboration, internships, junior full-stack roles, freelance websites,
            dashboard builds, and product-focused development work.
          </p>

          <div className="contact-grid">
            <a className="contact-item" href="mailto:ondarigidion@gmail.com">
              <span className="contact-label">Email</span>
              <span className="contact-value">ondarigidion@gmail.com</span>
            </a>
            <a className="contact-item" href="tel:+254705749265">
              <span className="contact-label">Phone</span>
              <span className="contact-value">+254 705 749 265</span>
            </a>
            <a
              className="contact-item"
              href="https://www.linkedin.com/in/gidion-ondari-6a9410324"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-label">LinkedIn</span>
              <span className="contact-value">gidion-ondari-6a9410324</span>
            </a>
            <a
              className="contact-item"
              href="https://github.com/GidionOndari"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-label">GitHub</span>
              <span className="contact-value">github.com/GidionOndari</span>
            </a>
            <div className="contact-item contact-static">
              <span className="contact-label">Location</span>
              <span className="contact-value">Nairobi, Kenya</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Gidion Ondari</span>
        <span>Designed and built with React + Vite</span>
      </footer>
    </div>
  )
}
