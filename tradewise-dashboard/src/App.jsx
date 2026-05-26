const marketOverview = [
  { symbol: 'EUR/USD', price: '1.0874', trend: 'Bullish', bias: 'London bullish continuation', volatility: 'Moderate' },
  { symbol: 'GBP/USD', price: '1.2741', trend: 'Neutral-Bullish', bias: 'Range with upside pressure', volatility: 'Elevated' },
  { symbol: 'XAU/USD', price: '2348.60', trend: 'Bullish', bias: 'Pullback-buy preference', volatility: 'High' },
  { symbol: 'BTC/USD', price: '68420', trend: 'Bearish retrace', bias: 'Wait for structure reclaim', volatility: 'Very High' },
]

const signalCards = [
  {
    symbol: 'EUR/USD',
    setup: 'Trend Pullback',
    bias: 'Bullish',
    confidence: '78%',
    entryZone: '1.0858 - 1.0865',
    invalidation: 'Below 1.0843',
    rr: '1:2.4',
    status: 'Watching',
  },
  {
    symbol: 'XAU/USD',
    setup: 'Breakout-Retest',
    bias: 'Bullish',
    confidence: '72%',
    entryZone: '2338 - 2342',
    invalidation: 'Below 2331',
    rr: '1:2.1',
    status: 'Validating',
  },
  {
    symbol: 'GBP/USD',
    setup: 'Range Fade',
    bias: 'Cautious Sell',
    confidence: '61%',
    entryZone: '1.2768 - 1.2780',
    invalidation: 'Above 1.2792',
    rr: '1:1.8',
    status: 'Avoid',
  },
  {
    symbol: 'BTC/USD',
    setup: 'Structure Reclaim',
    bias: 'Recovery Long',
    confidence: '69%',
    entryZone: '67600 - 68100',
    invalidation: 'Below 66800',
    rr: '1:2.7',
    status: 'Completed',
  },
]

const strategyModes = [
  { mode: 'Scalping', state: 'Paused until clean momentum windows' },
  { mode: 'Swing', state: 'Primary mode: active bias planning' },
  { mode: 'News-aware', state: 'High-impact events flagged pre-session' },
  { mode: 'Risk-first', state: 'Strict 2% daily risk cap enforced' },
  { mode: 'Advisory-only', state: 'No broker execution, analysis UI only' },
]

const journalRows = [
  { date: '2026-05-22', symbol: 'EUR/USD', setup: 'Trend Pullback', result: '+1.8R', notes: 'Waited for confirmation candle before entry.' },
  { date: '2026-05-21', symbol: 'XAU/USD', setup: 'Breakout-Retest', result: '+1.2R', notes: 'Volatility expanded after NY open.' },
  { date: '2026-05-20', symbol: 'GBP/USD', setup: 'Range Fade', result: '-1.0R', notes: 'Invalidation hit quickly; discipline maintained.' },
  { date: '2026-05-19', symbol: 'BTC/USD', setup: 'Structure Reclaim', result: '+2.3R', notes: 'Strong reclaim with trend continuation.' },
]

const principles = [
  'Risk comes first',
  'No forced trades',
  'Confirm bias before entry',
  'Journal every setup',
  'Avoid high-impact news uncertainty',
  'Advisory-only, no execution',
]

export default function App() {
  return (
    <div className="dashboard-shell">
      <header className="topbar card">
        <div>
          <p className="eyebrow">TradeWise Dashboard</p>
          <h1>Trading advisory dashboard prototype</h1>
          <p className="subtitle">Built for portfolio demonstration of analysis workflows, risk framing, and decision-support UI.</p>
        </div>
        <div className="topbar-meta">
          <span className="pill">Advisory-only prototype</span>
          <p>No live trading or broker execution.</p>
        </div>
      </header>

      <section>
        <h2>Market Overview</h2>
        <div className="grid market-grid">
          {marketOverview.map((item) => (
            <article className="card market-card" key={item.symbol}>
              <h3>{item.symbol}</h3>
              <p className="price">{item.price}</p>
              <ul>
                <li><span>Trend</span><strong>{item.trend}</strong></li>
                <li><span>Session Bias</span><strong>{item.bias}</strong></li>
                <li><span>Volatility</span><strong>{item.volatility}</strong></li>
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="grid split-grid">
        <article className="card risk-card">
          <h2>Risk Monitor</h2>
          <div className="risk-items">
            <p><span>Daily risk limit</span><strong>2%</strong></p>
            <p><span>Current risk used</span><strong>1.1%</strong></p>
            <p><span>Max trades per day</span><strong>4</strong></p>
            <p><span>Open advisory setups</span><strong>2</strong></p>
            <p><span>Risk status</span><strong className="safe">Safe</strong></p>
          </div>
          <small>Mock advisory metrics for UI demonstration only.</small>
        </article>

        <article className="card strategy-card">
          <h2>Strategy Status</h2>
          <ul>
            {strategyModes.map((item) => (
              <li key={item.mode}>
                <span>{item.mode}</span>
                <strong>{item.state}</strong>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section>
        <h2>Advisory Signals</h2>
        <p className="section-note">All signals below are mock advisory examples and not execution instructions.</p>
        <div className="grid signal-grid">
          {signalCards.map((signal) => (
            <article className="card signal-card" key={`${signal.symbol}-${signal.setup}`}>
              <div className="signal-head">
                <h3>{signal.symbol}</h3>
                <span className="status">{signal.status}</span>
              </div>
              <p>{signal.setup}</p>
              <ul>
                <li><span>Bias</span><strong>{signal.bias}</strong></li>
                <li><span>Confidence</span><strong>{signal.confidence}</strong></li>
                <li><span>Entry zone</span><strong>{signal.entryZone}</strong></li>
                <li><span>Invalidation</span><strong>{signal.invalidation}</strong></li>
                <li><span>Risk/Reward</span><strong>{signal.rr}</strong></li>
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2>Performance Summary</h2>
        <div className="grid perf-grid">
          <article className="card perf-card"><h3>Win rate (mock)</h3><p>64%</p></article>
          <article className="card perf-card"><h3>Average R:R</h3><p>1:2.1</p></article>
          <article className="card perf-card"><h3>Weekly review</h3><p>3 disciplined sessions / 1 overtrade alert</p></article>
          <article className="card perf-card"><h3>Best-performing setup</h3><p>Breakout-Retest</p></article>
          <article className="card perf-card"><h3>Lessons tracked</h3><p>12 notes logged this week</p></article>
        </div>
      </section>

      <section className="card">
        <h2>Trade Journal</h2>
        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>Date</th><th>Symbol</th><th>Setup</th><th>Result</th><th>Notes</th></tr>
            </thead>
            <tbody>
              {journalRows.map((row) => (
                <tr key={`${row.date}-${row.symbol}`}>
                  <td>{row.date}</td><td>{row.symbol}</td><td>{row.setup}</td><td>{row.result}</td><td>{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="card principles">
        <h2>Advisory Principles</h2>
        <ul>
          {principles.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <footer className="footer">
        TradeWise Dashboard is a portfolio prototype by Gidion Ondari. It demonstrates dashboard UI, trading logic presentation, and advisory decision-support design.
      </footer>
    </div>
  )
}
