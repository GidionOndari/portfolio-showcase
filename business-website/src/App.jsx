const products = [
  { name: 'Aloe Fresh Soap', category: 'Daily Care Bar', benefit: 'Hydrating cleanse for everyday freshness', price: 'KES 280', status: 'In Showcase', image: '/images/pureglow-aloe.jpg' },
  { name: 'Charcoal Detox Bar', category: 'Detox Bar', benefit: 'Deep clean feel for oily-prone skin routines', price: 'KES 320', status: 'Popular Pick', image: '/images/pureglow-charcoal.jpg' },
  { name: 'Honey Glow Soap', category: 'Glow Care', benefit: 'Soft skin finish with nourishing feel', price: 'KES 300', status: 'Customer Favorite', image: '/images/pureglow-honey.jpg' },
  { name: 'Shea Butter Care', category: 'Moisture Bar', benefit: 'Comforting moisture support for dry skin', price: 'KES 340', status: 'Gentle Formula', image: '/images/pureglow-shea.jpg' },
]
const trustCards=['Natural Ingredients','Handmade Care','Gentle Daily Use','Direct WhatsApp Orders']
const offers=['Retail product orders','Gift package orders','Event/corporate package inquiry','Custom scent inquiry']
const trustPoints=['Clear product descriptions','Direct communication','Simple ordering process','Locally focused brand experience','Freshness and care positioning']
const orderSteps=['Browse products','Ask questions on WhatsApp','Confirm order details','Arrange pickup or delivery']
const testimonials=['Demo testimonial: “I loved how easy it was to ask questions and choose the right soap blend for my skin.”','Demo testimonial: “The product descriptions are clear and the WhatsApp process feels quick and personal.”','Demo testimonial: “PureGlow Naturals presents a premium and trustworthy small-business experience.”']

import { useState } from 'react'

function SafeImage({ src, alt, placeholder, className = '', eager = false }) { const [ok, setOk] = useState(true); return ok ? <img src={src} alt={alt} className={className} loading={eager ? undefined : 'lazy'} onError={() => setOk(false)} /> : <div className="image-fallback">{placeholder}</div> }

export default function App(){return <div className="site-shell">
  <header className="hero card"><div><p className="pill">Small business website prototype</p><p className="eyebrow">PureGlow Naturals</p><h1>Premium handmade soaps and skincare essentials</h1><p className="subtitle">Luxury-style presentation for modern beauty and business credibility.</p><div className="cta-row"><a href="#products" className="btn btn-primary">View Products</a><a href="https://wa.me/254742917779" className="btn btn-outline" target="_blank" rel="noreferrer">Order on WhatsApp</a></div></div><div className="hero-visual media-card"><SafeImage src="/images/pureglow-lifestyle-1.jpg" alt="PureGlow premium skincare lifestyle hero" placeholder="PureGlow lifestyle image slot" eager/></div></header>
  <section className="section"><h2>Lifestyle Gallery</h2><div className="grid grid-3">{['/images/pureglow-lifestyle-1.jpg','/images/pureglow-lifestyle-2.jpg','/images/pureglow-lifestyle-3.jpg'].map((src)=><article className="card media-card" key={src}><SafeImage src={src} alt="PureGlow lifestyle gallery" placeholder="PureGlow lifestyle image slot"/></article>)}</div></section>
  <section className="section"><h2>Trust & Value</h2><div className="grid grid-4">{trustCards.map((i)=><article key={i} className="card mini-card">{i}</article>)}</div></section>
  <section className="section" id="products"><h2>Product Showcase</h2><div className="grid grid-3">{products.map((p)=><article className="card product-card" key={p.name}><div className="media-wrap"><SafeImage src={p.image} alt={`${p.name} product`} placeholder="PureGlow product image slot"/><span className="status">{p.status}</span></div><h3>{p.name}</h3><p className="meta">{p.category}</p><p>{p.benefit}</p><p className="price">{p.price}</p><a href="https://wa.me/254742917779" target="_blank" rel="noreferrer" className="btn btn-outline shine">Ask on WhatsApp</a></article>)}</div></section>
  <section className="section"><h2>Services / Business Offers</h2><div className="grid grid-2">{offers.map((o)=><article className="card" key={o}>{o}</article>)}</div></section>
  <section className="section card"><h2>Why Customers Trust Us</h2><ul className="list">{trustPoints.map((p)=><li key={p}>{p}</li>)}</ul></section>
  <section className="section card"><h2>How Ordering Works</h2><ol className="list">{orderSteps.map((s)=><li key={s}>{s}</li>)}</ol></section>
  <section className="section"><h2>Testimonials / Social Proof</h2><div className="grid grid-3">{testimonials.map((t)=><article className="card" key={t}><p>{t}</p></article>)}</div></section>
  <section className="section"><h2>Business Metrics / Trust Layer</h2><div className="grid grid-4"><article className="card metric"><span>Product clarity score</span><strong>92%</strong></article><article className="card metric"><span>Trust readiness</span><strong>Level 4 / 5</strong></article><article className="card metric"><span>Inquiry flow</span><strong>WhatsApp-ready</strong></article><article className="card metric"><span>Client confidence</span><strong>High</strong></article></div></section>
  <section className="section card"><h2>Contact / CTA</h2><p>Open to customer inquiries, gift packages, and collaboration-ready product showcase builds.</p><a className="btn btn-primary" href="https://wa.me/254742917779" target="_blank" rel="noreferrer">Chat on WhatsApp</a></section>
  <footer className="footer">PureGlow business website is a frontend portfolio prototype demonstrating premium business presentation, product storytelling, and conversion-focused UX.</footer>
</div>}
