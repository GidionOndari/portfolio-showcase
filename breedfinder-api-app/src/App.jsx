import { useEffect, useMemo, useState } from 'react'

const BREEDS_ENDPOINT = 'https://dog.ceo/api/breeds/list/all'
const IMAGES_ENDPOINT = 'https://dog.ceo/api/breed'
const FAVORITES_KEY = 'breedfinder-favorites-v1'

const FALLBACK_BREEDS = [
  { id: 'beagle', breed: 'beagle', subBreeds: [] },
  { id: 'husky', breed: 'husky', subBreeds: [] },
  { id: 'retriever', breed: 'retriever', subBreeds: ['golden', 'labrador'] },
  { id: 'bulldog', breed: 'bulldog', subBreeds: ['boston', 'english', 'french'] },
  { id: 'sheepdog', breed: 'sheepdog', subBreeds: ['english', 'shetland'] },
]

const normalizeBreedName = (value) => value.split('-').map((word) => word[0].toUpperCase() + word.slice(1)).join(' ')

const buildApiPath = (breed, subBreed) => {
  if (subBreed) return `${IMAGES_ENDPOINT}/${breed}/${subBreed}/images/random`
  return `${IMAGES_ENDPOINT}/${breed}/images/random`
}

const loadStoredFavorites = () => {
  try {
    const parsed = JSON.parse(localStorage.getItem(FAVORITES_KEY) || '[]')
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export default function App() {
  const [breeds, setBreeds] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [favorites, setFavorites] = useState(() => loadStoredFavorites())
  const [apiStatus, setApiStatus] = useState('Loading')
  const [appError, setAppError] = useState('')
  const [previewState, setPreviewState] = useState({})

  useEffect(() => {
    let active = true

    const fetchBreeds = async () => {
      setApiStatus('Loading')
      setAppError('')
      try {
        const response = await fetch(BREEDS_ENDPOINT)
        if (!response.ok) throw new Error(`HTTP ${response.status}`)
        const json = await response.json()
        if (json.status !== 'success' || !json.message) throw new Error('Invalid API payload')

        const normalized = Object.entries(json.message).map(([breed, subBreeds]) => ({
          id: breed,
          breed,
          subBreeds,
        }))

        if (!active) return
        setBreeds(normalized)
        setApiStatus('Online')
      } catch {
        if (!active) return
        setBreeds(FALLBACK_BREEDS)
        setApiStatus('Fallback')
        setAppError('Live API fetch failed. Showing fallback demo breeds so interactions still work.')
      }
    }

    fetchBreeds()
    return () => {
      active = false
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))
  }, [favorites])

  const filteredBreeds = useMemo(() => {
    const query = searchTerm.trim().toLowerCase()
    if (!query) return breeds
    return breeds.filter((item) => {
      const fullName = `${item.breed} ${item.subBreeds.join(' ')}`.toLowerCase()
      return fullName.includes(query)
    })
  }, [breeds, searchTerm])

  const toggleFavorite = (breed) => {
    setFavorites((prev) => (prev.includes(breed) ? prev.filter((fav) => fav !== breed) : [...prev, breed]))
  }

  const fetchPreview = async (breed, subBreeds = []) => {
    const fallbackSub = subBreeds[0] || null
    setPreviewState((prev) => ({ ...prev, [breed]: { loading: true, error: '', imageUrl: prev[breed]?.imageUrl || '' } }))

    try {
      const response = await fetch(buildApiPath(breed, fallbackSub))
      if (!response.ok) throw new Error(`HTTP ${response.status}`)
      const json = await response.json()
      if (json.status !== 'success' || !json.message) throw new Error('Invalid image response')

      setPreviewState((prev) => ({ ...prev, [breed]: { loading: false, error: '', imageUrl: json.message } }))
      if (apiStatus !== 'Fallback') setApiStatus('Online')
    } catch {
      setPreviewState((prev) => ({
        ...prev,
        [breed]: { loading: false, error: 'Image preview unavailable right now. Please retry.', imageUrl: prev[breed]?.imageUrl || '' },
      }))
      if (apiStatus === 'Online') setApiStatus('Error')
    }
  }

  return (
    <div className="app-shell">
      <header className="hero card">
        <div className="hero-visual media-frame"><img src="/images/breedfinder-hero.jpg" alt="Premium dog portrait hero visual for BreedFinder" /><p>Breed discovery experience</p></div>
        <p className="status-pill">API Prototype</p>
        <h1>BreedFinder</h1>
        <p className="tagline">API-powered dog breed explorer</p>
        <p className="positioning">Search breeds, preview images, save favorites, and explore API-driven data interactions in a clean responsive interface.</p>
        <p className="note">Uses public dog breed data where available.</p>
      </header>

      <section className="metrics-grid">
        <article className="metric card"><h3>Total breeds loaded</h3><p>{breeds.length}</p></article>
        <article className="metric card"><h3>Favorites saved</h3><p>{favorites.length}</p></article>
        <article className="metric card"><h3>Current filter count</h3><p>{filteredBreeds.length}</p></article>
        <article className="metric card"><h3>API status</h3><p className={`status-${apiStatus.toLowerCase()}`}>{apiStatus}</p></article>
      </section>

      <section className="card search-panel">
        <h2>Breed Search</h2>
        <div className="search-row">
          <input
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search breeds like husky, beagle, retriever..."
            aria-label="Search dog breeds"
          />
          <button className="btn btn-outline" onClick={() => setSearchTerm('')}>Clear Search</button>
        </div>
        {appError ? <p className="app-error">{appError}</p> : null}
      </section>

      <section className="card media-support">
        <div className="media-frame"><img src="/images/breedfinder-app-mockup.jpg" alt="BreedFinder application mockup showing search-driven API interaction" loading="lazy" /><p>Search-driven API interaction</p></div>
      </section>

      <section className="card">
        <h2>Breed Cards</h2>
        {apiStatus === 'Loading' ? <p>Loading breed list...</p> : null}
        <div className="breed-grid">
          {filteredBreeds.map((item) => {
            const isFavorite = favorites.includes(item.breed)
            const preview = previewState[item.breed] || { loading: false, error: '', imageUrl: '' }
            return (
              <article className="breed-card" key={item.id}>
                <h3>{normalizeBreedName(item.breed)}</h3>
                <p>Sub-breeds: {item.subBreeds.length}</p>
                <p className={`favorite-state ${isFavorite ? 'is-favorite' : ''}`}>{isFavorite ? 'Saved in favorites' : 'Not in favorites'}</p>
                <div className="card-actions">
                  <button className="btn btn-primary" onClick={() => fetchPreview(item.breed, item.subBreeds)} disabled={preview.loading}>
                    {preview.loading ? 'Loading...' : 'Preview Image'}
                  </button>
                  <button className={`btn ${isFavorite ? 'btn-danger' : 'btn-outline'}`} onClick={() => toggleFavorite(item.breed)}>
                    {isFavorite ? 'Remove Favorite' : 'Add Favorite'}
                  </button>
                </div>
                {preview.error ? <p className="preview-error">{preview.error}</p> : null}
                {preview.imageUrl ? <img src={preview.imageUrl} alt={`${item.breed} preview`} className="preview-image" loading="lazy" /> : null}
              </article>
            )
          })}
        </div>
      </section>

      <section className="card favorites">
        <h2>Favorites</h2>
        {favorites.length === 0 ? (
          <p className="empty-state">No favorites saved yet. Add a breed to persist it in localStorage.</p>
        ) : (
          <ul>
            {favorites.map((breed) => (
              <li key={breed}>
                <span>{normalizeBreedName(breed)}</span>
                <button className="btn btn-danger" onClick={() => toggleFavorite(breed)}>Remove Favorite</button>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="card media-support">
        <div className="media-frame"><img src="/images/breedfinder-premium-dogs.jpg" alt="Premium breed showcase featuring elegant dog portraits" loading="lazy" /><p>Premium breed showcase</p></div>
      </section>

      <section className="card learning-section">
        <h2>API Interaction Notes</h2>
        <ul>
          <li>Fetches live breed inventory from Dog CEO API.</li>
          <li>Manages search/filter state for dynamic breed discovery.</li>
          <li>Persists favorite breeds in localStorage across sessions.</li>
          <li>Requests random breed image previews on demand.</li>
          <li>Handles loading, API errors, and fallback demo data.</li>
          <li>Uses responsive layout and status-aware UI styling for clarity.</li>
        </ul>
      </section>
    </div>
  )
}
