const heroStats = [
  { label: 'Session readiness', value: '82%', tone: 'strong' },
  { label: 'Risk discipline', value: 'Level 4 — Controlled', tone: 'steady' },
  { label: 'Streak', value: '5 disciplined sessions', tone: 'calm' },
]

const readinessMetrics = [
  { name: 'Readiness Score', value: 82 },
  { name: 'Bias Clarity', value: 76 },
  { name: 'Risk Discipline', value: 91 },
  { name: 'Journal Consistency', value: 68 },
  { name: 'News Caution', value: 84 },
]

const badgeItems = ['Risk First', 'No Overtrade', 'Journal Keeper', 'News Aware', 'Setup Hunter', 'Advisory Mode']

const missionItems = [
  { task: 'Review high-impact news before session', status: 'Completed' },
  { task: 'Limit risk exposure below 2%', status: 'Active' },
  { task: 'Validate bias before watching entries', status: 'Watch' },
  { task: 'Journal every completed setup', status: 'Active' },
  { task: 'Stop after max daily limit', status: 'Locked' },
]

const signalCards = [
  {
    symbol: 'EUR/USD',
    setup: 'Trend Pullback',
    bias: 'Bullish continuation bias',
    confidence: 78,
    entryZone: '1.0858 - 1.0865',
    invalidation: 'Below 1.0843',
    rr: '1:2.4',
    riskTag: 'Low risk window',
    setupQuality: 84,
    status: 'Watching',
  },
  {
    symbol: 'XAU/USD',
    setup: 'Breakout-Retest',
    bias: 'Bullish with caution',
    confidence: 72,
    entryZone: '2338 - 2342',
    invalidation: 'Below 2331',
    rr: '1:2.1',
    riskTag: 'Event-sensitive',
    setupQuality: 79,
    status: 'Validating',
  },
  {
    symbol: 'GBP/USD',
    setup: 'Range Fade',
    bias: 'Cautious sell bias',
    confidence: 61,
    entryZone: '1.2768 - 1.2780',
    invalidation: 'Above 1.2792',
    rr: '1:1.8',
    riskTag: 'Avoid if spread expands',
    setupQuality: 58,
    status: 'Avoid',
  },
  {
    symbol: 'BTC/USD',
    setup: 'Structure Reclaim',
    bias: 'Recovery monitoring only',
    confidence: 69,
    entryZone: '67600 - 68100',
    invalidation: 'Below 66800',
    rr: '1:2.7',
    riskTag: 'Volatility elevated',
    setupQuality: 74,
    status: 'Completed',
  },
]

const performanceStats = [
  { label: 'Mock win rate', value: '64%', progress: 64 },
  { label: 'Average R:R', value: '1:2.1', progress: 70 },
  { label: 'Discipline score', value: '88/100', progress: 88 },
  { label: 'Best setup', value: 'Breakout-Retest', progress: 82 },
  { label: 'Review streak', value: '5 sessions', progress: 76 },
  { label: 'Weekly lesson count', value: '12 notes', progress: 66 },
]

const governanceItems = [
  'Advisory-only mode',
  'Mock data source',
  'No broker execution',
  'No live trading',
  'Risk-first logic',
  'Journal-first improvement loop',
]

const getStatusClass = (status) => status.toLowerCase().replace(/\s+/g, '-')

export default function App() {
  return (
    <div className="dashboard-shell">
      <header className="hero card">
        <div className="hero-main">
          <p className="eyebrow">TradeWise Dashboard</p>
          <h1>Advisory trading command center prototype</h1>
          <p className="subtitle">Mission-focused frontend concept for session preparedness, risk discipline, and structured review habits.</p>
          <div className="hero-pills">
            <span className="pill">Advisory-only</span>
            <span className="pill ghost">London / New York Review</span>
          </div>
          <p className="hero-disclaimer">Mock data only. No live trading or broker execution.</p>
        </div>

        <div className="hero-stats">
          {heroStats.map((item) => (
            <article className={`hero-stat ${item.tone}`} key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </article>
          ))}
        </div>
      </header>

      <section className="grid command-grid">
        <article className="card readiness-card">
          <div className="section-head">
            <h2>Trader Readiness</h2>
            <span className="chip">Command Layer</span>
          </div>
          <div className="score-ring" style={{ '--score': 82 }}>
            <div>
              <strong>82%</strong>
              <span>Readiness</span>
            </div>
          </div>
          <div className="metric-list">
            {readinessMetrics.map((metric) => (
              <div key={metric.name} className="metric-item">
                <div className="metric-row"><span>{metric.name}</span><strong>{metric.value}%</strong></div>
                <div className="bar"><span style={{ width: `${metric.value}%` }} /></div>
              </div>
            ))}
          </div>
        </article>

        <article className="card mission-card">
          <div className="section-head">
            <h2>Today&apos;s Mission</h2>
            <span className="chip">Discipline Objectives</span>
          </div>
          <ul className="mission-list">
            {missionItems.map((item) => (
              <li key={item.task} className={getStatusClass(item.status)}>
                <p>{item.task}</p>
                <span>{item.status}</span>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="card badge-panel">
        <div className="section-head">
          <h2>Achievement Badges</h2>
          <span className="chip">Gamified Progress</span>
        </div>
        <div className="badge-grid">
          {badgeItems.map((badge) => <span key={badge} className="badge-chip">{badge}</span>)}
        </div>
      </section>

      <section>
        <div className="section-head inline-head">
          <h2>Advisory Signals</h2>
          <p className="section-note">Mock analysis states for portfolio demonstration only.</p>
        </div>
        <div className="grid signal-grid">
          {signalCards.map((signal) => (
            <article className={`card signal-card ${getStatusClass(signal.status)}`} key={`${signal.symbol}-${signal.setup}`}>
              <div className="signal-head">
                <h3>{signal.symbol}</h3>
                <span className="status-pill">{signal.status}</span>
              </div>
              <p className="setup-name">{signal.setup}</p>
              <p className="bias-note">{signal.bias}</p>

              <div className="signal-metrics">
                <div>
                  <span>Confidence</span>
                  <strong>{signal.confidence}%</strong>
                </div>
                <div className="bar"><span style={{ width: `${signal.confidence}%` }} /></div>
              </div>

              <ul>
                <li><span>Entry zone</span><strong>{signal.entryZone}</strong></li>
                <li><span>Invalidation</span><strong>{signal.invalidation}</strong></li>
                <li><span>Risk/Reward</span><strong>{signal.rr}</strong></li>
                <li><span>Risk tag</span><strong>{signal.riskTag}</strong></li>
                <li><span>Setup quality</span><strong>{signal.setupQuality}%</strong></li>
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="grid split-grid">
        <article className="card risk-card">
          <div className="section-head">
            <h2>Risk Monitor</h2>
            <span className="chip">Governance Monitor</span>
          </div>
          <div className="risk-state-row"><span>Risk state</span><strong className="safe">Safe</strong></div>
          <div className="metric-item">
            <div className="metric-row"><span>Risk usage</span><strong>1.1% / 2.0%</strong></div>
            <div className="bar"><span style={{ width: '55%' }} /></div>
          </div>
          <div className="guard-grid">
            <p><span>Daily loss guard</span><strong>Enabled</strong></p>
            <p><span>Trade limit guard</span><strong>3 / 4 used</strong></p>
            <p><span>Kill switch</span><strong>Inactive</strong></p>
            <p><span>Open advisory setups</span><strong>2</strong></p>
          </div>
          <small>Mock governance display for risk process training. No execution or order routing.</small>
        </article>

        <article className="card performance-card">
          <div className="section-head">
            <h2>Performance Summary</h2>
            <span className="chip">Mock Analytics</span>
          </div>
          <div className="performance-grid">
            {performanceStats.map((item) => (
              <article key={item.label} className="perf-item">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
                <div className="bar"><span style={{ width: `${item.progress}%` }} /></div>
              </article>
            ))}
          </div>
        </article>
      </section>

      <section className="card governance-card">
        <div className="section-head">
          <h2>Advisory Governance</h2>
          <span className="chip">Trust Layer</span>
        </div>
        <p>This interface is intentionally advisory-focused. It demonstrates decision-support UX and disciplined review behavior using mock static data.</p>
        <div className="governance-grid">
          {governanceItems.map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <footer className="footer">TradeWise Dashboard is a frontend portfolio prototype by Gidion Ondari. It is advisory-only and built to showcase product thinking, not live trading execution.</footer>
    </div>
  )
}
