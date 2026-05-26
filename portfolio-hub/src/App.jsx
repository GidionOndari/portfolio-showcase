const featuredProjects = [
  {
    name: 'TradeWise Dashboard',
    description:
      'A trading advisory dashboard prototype showing market summaries, signal cards, risk status, strategy state, and trade journal data in a clean decision-support interface.',
    tags: ['React', 'Dashboard UI', 'Risk Logic', 'Data UX'],
  },
  {
    name: 'Event Landing Page',
    description:
      'A sponsor-ready event website for a finalist costume dinner, designed to present the event concept, program flow, venue, sponsors, and attendee call-to-action.',
    tags: ['Landing Page', 'Responsive Design', 'Sponsor UI', 'Event Website'],
  },
  {
    name: 'Business Website',
    description:
      'A responsive business website prototype for a local brand, focused on services, pricing, trust-building content, and contact conversion.',
    tags: ['Business Website', 'Services UI', 'Contact Flow', 'Responsive Design'],
  },
  {
    name: 'BreedFinder API App',
    description:
      'An API-based mini app for searching dog breeds, viewing breed images, filtering results, and saving favorites in a clean responsive interface.',
    tags: ['JavaScript', 'API Fetching', 'Search', 'Local Storage'],
  },
  {
    name: 'Portfolio Website',
    description:
      'The central portfolio hub presenting identity, skills, featured projects, build process, experience, and contact information in one professional page.',
    tags: ['React', 'Vite', 'Portfolio', 'Deployment Ready'],
  },
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

function ProjectCard({ project, stage = 'Active Build' }) {
  return (
    <article className="card project-card">
      <div className="badge">{stage}</div>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
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
        <a href="#" className="btn btn-primary" aria-label={`${project.name} live demo placeholder`}>
          Live Demo
        </a>
        <a href="#" className="btn btn-outline" aria-label={`${project.name} repository placeholder`}>
          GitHub Repo
        </a>
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
          <div>
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
          </div>

          <figure className="hero-visual image-frame">
            <img
              src="/images/gidion-hackathon.jpg"
              alt="Gidion Ondari standing beside a Design Thinking Hackathon banner, representing practical innovation and problem-solving work."
            />
            <figcaption>Hackathon participation shaping practical product thinking.</figcaption>
          </figure>
        </section>

        <section id="about" className="section card">
          <div className="about-grid">
            <div>
              <h2>About</h2>
              <p>
                I’m a full-stack developer building practical, usable software products
                across web platforms, dashboards, automation tools, and intelligent
                systems. My current focus is turning earlier learning and prototype work
                into clean, deployed, portfolio-ready projects.
              </p>
            </div>
            <figure className="image-frame snapshot-image">
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

        <section className="section">
          <h2>Secondary Projects</h2>
          <div className="grid projects-grid secondary-grid">
            {secondaryProjects.map((project) => (
              <ProjectCard
                key={project}
                project={{
                  name: project,
                  description:
                    'Planned portfolio build in discovery and design phase. Scope and implementation details will be published as development begins.',
                }}
                stage="Coming Soon"
              />
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <h2>Experience</h2>
          <div className="grid experience-grid">
            <article className="card experience-card">
              <figure className="image-frame experience-image">
                <img
                  src="/images/gidion-safaricom-hook.jpg"
                  alt="Gidion Ondari at a Safaricom Hook event activation, supporting youth engagement and brand communication."
                />
                <figcaption>Safaricom Hook activation experience.</figcaption>
              </figure>
              <h3>Safaricom Hook Brand Ambassador</h3>
              <p>
                Supported campus activations, community engagement, and program
                communication with a focus on youth-oriented digital experiences.
              </p>
            </article>
            <article className="card">
              <h3>Full-Stack Development Training</h3>
              <p>
                Built foundational and intermediate projects across frontend, backend,
                API workflows, and database integration while strengthening deployment
                and maintainability discipline.
              </p>
            </article>
            <article className="card">
              <h3>Product & Event Planning</h3>
              <p>
                Coordinated planning flows, audience communication, and structured
                execution for community and event initiatives that required clear user
                journeys and practical outcomes.
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

        <section id="contact" className="section card">
          <h2>Contact</h2>
          <p>
            Open to collaboration, internships, and full-stack engineering
            opportunities.
          </p>
          <a className="btn btn-primary" href="#">
            Send Email
          </a>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Gidion Ondari</p>
        <p>Portfolio Hub — Practical full-stack builds in progress.</p>
      </footer>
    </div>
  )
}
