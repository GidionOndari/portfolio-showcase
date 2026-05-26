# TradeWise Dashboard

TradeWise Dashboard is a premium-styled frontend advisory command-center prototype built for portfolio demonstration.

## Purpose

This project showcases product-level dashboard design, gamified readiness UX, and risk-governance presentation for trading analysis workflows. It is intentionally advisory-only and does **not** execute trades.

## Tech Stack

- React
- Vite
- Plain CSS (no extra UI dependencies)

## Features

- Command-center hero with session context (`London / New York Review`), readiness score, risk discipline level, streak metric, and visible advisory disclaimer
- **Trader Readiness** panel with a CSS score ring + progress meters:
  - Readiness Score
  - Bias Clarity
  - Risk Discipline
  - Journal Consistency
  - News Caution
- Premium **Achievement Badges** layer:
  - Risk First, No Overtrade, Journal Keeper, News Aware, Setup Hunter, Advisory Mode
- **Today’s Mission** objectives with status states:
  - Completed, Active, Locked, Watch
- Upgraded advisory signal cards with:
  - confidence bars
  - status color treatment (Watching / Validating / Avoid / Completed)
  - risk tags
  - setup quality scores
- Enhanced **Risk Monitor** with risk usage bar, guards, kill-switch status, and mock governance note
- Dynamic **Performance Summary** with stronger stat hierarchy and metric bars
- Distinct **Advisory Governance** section for trust-building product framing

## Important Disclaimer

This is **not** a live trading bot.

- No broker execution
- No MT5/Binance/broker integrations
- No live market API feeds
- No financial promises

All data in the dashboard is mock/static advisory data for UI/UX and product demonstration only.

## Run Locally

```bash
npm install
npm run dev
```

To build production assets:

```bash
npm run build
```

## Portfolio Relevance

TradeWise Dashboard is a flagship recruiter-facing concept in Gidion Ondari's portfolio roadmap. It demonstrates frontend execution, dashboard UX depth, and disciplined product thinking for advisory decision-support interfaces.
