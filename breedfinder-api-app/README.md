# BreedFinder API App

## Purpose
BreedFinder is a frontend API prototype that demonstrates practical, recruiter-verifiable React data interactions through a dog breed discovery experience.

## Tech Stack
- React
- Vite
- Plain CSS
- Browser Fetch API
- localStorage

## API Used
- Dog CEO API
  - `https://dog.ceo/api/breeds/list/all`
  - `https://dog.ceo/api/breed/{breed}/images/random`

## Features
- Live breed list fetching from public API
- Search and filter behavior as users type
- Breed cards with sub-breed counts
- On-demand random image preview fetching
- Favorites add/remove flow
- API status indicator (Loading / Online / Fallback / Error)
- Responsive layout and interaction-focused UI

## localStorage Usage
Favorites are persisted using browser localStorage key `breedfinder-favorites-v1`, so saved breeds remain available across reloads.

## Fallback and Error Handling
If live breed API calls fail, the app loads fallback demo breed data and clearly informs users. Image preview fetches include loading and error states per breed card.

## Run Locally
```bash
cd breedfinder-api-app
npm install
npm run dev
```

To validate production build:
```bash
npm run build
```

## Portfolio Relevance
This is a frontend API prototype designed to prove practical React state management, API integration, resilient loading/error UX, and persistence behavior without backend infrastructure.

> This app does not use a backend or private database.
