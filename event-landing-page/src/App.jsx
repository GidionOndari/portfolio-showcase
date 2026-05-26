const valueCards = [
  {
    title: 'Celebration Experience',
    label: 'Atmosphere',
    description:
      'A polished finalist dinner journey blending fashion, storytelling, and memorable social moments.'
  },
  {
    title: 'Sponsor Visibility',
    label: 'Brand Reach',
    description:
      'Integrated sponsor touchpoints across stage mentions, activations, signage, and digital highlights.'
  },
  {
    title: 'Fashion & Costume Showcase',
    label: 'Runway',
    description:
      'Costume-forward experiences featuring curated entry moments, runway reveals, and award recognition.'
  },
  {
    title: 'Media / Content Moments',
    label: 'Content Engine',
    description:
      'Designed visual opportunities for interviews, photos, and short-form social content production.'
  }
];

const schedule = [
  ['17:00', 'Arrival & costume photo moments', 'Arrival Stage'],
  ['17:45', 'Guest welcome', 'Opening Pulse'],
  ['18:00', 'Sponsor village interaction', 'Brand Zone'],
  ['18:45', 'Main program opening', 'Main Stage'],
  ['19:15', 'Interviews and live activities', 'Live Moments'],
  ['20:00', 'Runway / costume showcase', 'Runway Spotlight'],
  ['20:45', 'Best Costume highlight', 'Award Moment'],
  ['21:15', 'Networking and closing', 'Closing Connect']
];

const sponsorBenefits = [
  'Brand placement',
  'Sponsor village activation',
  'Product sampling',
  'Social media visibility',
  'Stage mentions',
  'Youth audience engagement',
  'Content/photo moments'
];

const galleryMoments = [
  'Arrival Costume Shots',
  'Sponsor Booth Moments',
  'Runway Highlights',
  'Award Announcement',
  'Networking Frames',
  'Social Content Clips'
];

export default function App() {
  return (
    <div className="page">
      <header className="hero panel-glass">
        <div className="status-row">
          <span className="status-pill">Sponsor-ready concept</span>
          <span className="readiness">Event readiness: Level 4 / 5</span>
        </div>
        <p className="eyebrow">Finalist Costume Dinner</p>
        <h1>Class of 2026 Kenya</h1>
        <p className="positioning">
          A premium finalist celebration experience built around fashion, networking,
          sponsor visibility, media moments, and youth-centered brand activation.
        </p>
        <div className="event-meta">
          <div><strong>Date:</strong> 27 June 2026</div>
          <div><strong>Location:</strong> Nairobi, Kenya</div>
        </div>
        <div className="cta-row">
          <a className="btn btn-primary" href="#program">View Program</a>
          <a className="btn btn-secondary" href="#sponsors">Sponsor Interest</a>
        </div>
      </header>

      <section className="scores grid-3">
        <article className="panel-glass score-card"><h3>Experience Score</h3><p>92 / 100</p></article>
        <article className="panel-glass score-card"><h3>Sponsor Impact Meter</h3><p>High Potential</p></article>
        <article className="panel-glass score-card"><h3>Moment Badges</h3><p>Runway • Media • Networking</p></article>
      </section>

      <section className="section" id="value">
        <h2>Event Value Stack</h2>
        <div className="grid-4">
          {valueCards.map((card) => (
            <article className="panel-glass value-card" key={card.title}>
              <span className="badge">{card.label}</span>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="program">
        <h2>Program Flow</h2>
        <div className="panel-glass table-wrap">
          <table>
            <thead><tr><th>Time</th><th>Program Segment</th><th>Stage Label</th></tr></thead>
            <tbody>
              {schedule.map((row) => (
                <tr key={row[1]}><td>{row[0]}</td><td>{row[1]}</td><td><span className="stage-tag">{row[2]}</span></td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section" id="sponsors">
        <h2>Sponsor Visibility Engine</h2>
        <div className="panel-glass sponsor-panel">
          <p>
            This campaign concept is built for sponsor-facing activation with intentional
            checkpoints for brand discovery, audience engagement, and content capture.
          </p>
          <ul className="checklist">
            {sponsorBenefits.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      <section className="section">
        <h2>Venue Layout Concept</h2>
        <div className="grid-3">
          {[
            'Main stage + VIP + runway',
            'Sponsor Village 1',
            'Sponsor Village 2',
            'Community / interaction zones',
            'Media/photo area',
            'Guest movement flow'
          ].map((item) => (
            <article key={item} className="panel-glass layout-card">{item}</article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Audience & Impact</h2>
        <div className="panel-glass">
          <p><strong>Target audience:</strong> Finalists, Class of 2026, and the wider youth community.</p>
          <p><strong>Purpose:</strong> Celebration, connection, confidence-building, and meaningful brand interaction.</p>
          <p><strong>Sponsor value:</strong> Direct youth engagement and memorable experience placement.</p>
        </div>
      </section>

      <section className="section">
        <h2>Gallery / Visual Moments</h2>
        <div className="grid-3">
          {galleryMoments.map((moment) => (
            <article key={moment} className="panel-glass gallery-card">
              <span className="badge">Moment Badge</span>
              <h3>{moment}</h3>
              <p>Styled placeholder for campaign photography/video storytelling.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="panel-glass final-cta">
          <h2>Partner with the experience</h2>
          <div className="grid-3 cta-cards">
            <article><h3>Register interest</h3><p>Status: Open for collaboration</p></article>
            <article><h3>Contact organizer</h3><p>Email: ondarigidion@gmail.com</p></article>
            <article><h3>WhatsApp / Phone</h3><p>+254742917779</p></article>
          </div>
        </div>
      </section>

      <footer>
        Event Landing Page is a frontend portfolio prototype by Gidion Ondari. It demonstrates campaign storytelling, sponsor-facing layout, responsive UI, and conversion-focused event presentation.
      </footer>
    </div>
  );
}
