const products = [
  { name: 'Aloe Fresh Soap', category: 'Daily Care Bar', benefit: 'Hydrating cleanse for everyday freshness', price: 'KES 280', status: 'In Showcase' },
  { name: 'Charcoal Detox Bar', category: 'Detox Bar', benefit: 'Deep clean feel for oily-prone skin routines', price: 'KES 320', status: 'Popular Pick' },
  { name: 'Honey Glow Soap', category: 'Glow Care', benefit: 'Soft skin finish with nourishing feel', price: 'KES 300', status: 'Customer Favorite' },
  { name: 'Shea Butter Care', category: 'Moisture Bar', benefit: 'Comforting moisture support for dry skin', price: 'KES 340', status: 'Gentle Formula' },
  { name: 'Lavender Calm Bar', category: 'Calm Blend', benefit: 'Relaxing wash experience for evening use', price: 'KES 310', status: 'Evening Care' },
  { name: 'Citrus Morning Bar', category: 'Fresh Start Bar', benefit: 'Bright scent profile for morning energy', price: 'KES 295', status: 'Morning Boost' },
]

const trustCards = ['Natural Ingredients', 'Handmade Care', 'Gentle Daily Use', 'Direct WhatsApp Orders']
const offers = ['Retail product orders', 'Gift package orders', 'Event/corporate package inquiry', 'Custom scent inquiry']
const trustPoints = ['Clear product descriptions', 'Direct communication', 'Simple ordering process', 'Locally focused brand experience', 'Freshness and care positioning']
const orderSteps = ['Browse products', 'Ask questions on WhatsApp', 'Confirm order details', 'Arrange pickup or delivery']

const testimonials = [
  'Demo testimonial: “I loved how easy it was to ask questions and choose the right soap blend for my skin.”',
  'Demo testimonial: “The product descriptions are clear and the WhatsApp process feels quick and personal.”',
  'Demo testimonial: “PureGlow Naturals presents a premium and trustworthy small-business experience.”',
]

export default function App() {
  return (
    <div className="site-shell">
      <header className="hero card">
        <p className="pill">Small business website prototype</p>
        <p className="eyebrow">PureGlow Naturals</p>
        <h1>Handmade soaps and skincare essentials</h1>
        <p className="subtitle">Natural personal care products crafted for everyday freshness, confidence, and skin-friendly routines.</p>
        <p className="contact-chip">WhatsApp: +254742917779</p>
        <div className="cta-row">
          <a href="#products" className="btn btn-primary">View Products</a>
          <a href="https://wa.me/254742917779" className="btn btn-outline" target="_blank" rel="noreferrer">Order on WhatsApp</a>
        </div>
      </header>

      <section className="section">
        <h2>Trust & Value</h2>
        <div className="grid grid-4">
          {trustCards.map((item) => <article key={item} className="card mini-card"><h3>{item}</h3></article>)}
        </div>
      </section>

      <section className="section" id="products">
        <h2>Product Showcase</h2>
        <div className="grid grid-3">
          {products.map((product) => (
            <article className="card product-card" key={product.name}>
              <span className="status">{product.status}</span>
              <h3>{product.name}</h3>
              <p className="meta">{product.category}</p>
              <p>{product.benefit}</p>
              <p className="price">{product.price}</p>
              <a href="https://wa.me/254742917779" target="_blank" rel="noreferrer" className="btn btn-outline">Ask on WhatsApp</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Services / Business Offers</h2>
        <div className="grid grid-2">{offers.map((offer) => <article className="card" key={offer}>{offer}</article>)}</div>
      </section>

      <section className="section card">
        <h2>Why Customers Trust Us</h2>
        <ul className="list">{trustPoints.map((point) => <li key={point}>{point}</li>)}</ul>
      </section>

      <section className="section card">
        <h2>How Ordering Works</h2>
        <ol className="list">{orderSteps.map((step) => <li key={step}>{step}</li>)}</ol>
      </section>

      <section className="section">
        <h2>Testimonials / Social Proof</h2>
        <div className="grid grid-3">{testimonials.map((item) => <article className="card" key={item}><p>{item}</p></article>)}</div>
      </section>

      <section className="section">
        <h2>Business Metrics / Trust Layer</h2>
        <div className="grid grid-4">
          <article className="card metric"><span>Product clarity score</span><strong>92%</strong></article>
          <article className="card metric"><span>Trust readiness</span><strong>Level 4 / 5</strong></article>
          <article className="card metric"><span>Inquiry flow</span><strong>WhatsApp-ready</strong></article>
          <article className="card metric"><span>Customer journey</span><strong>4 steps</strong></article>
        </div>
      </section>

      <section className="section card">
        <h2>Contact / CTA</h2>
        <p>WhatsApp / Phone: +254742917779</p>
        <p>Email: ondarigidion@gmail.com</p>
        <div className="cta-row">
          <a href="https://wa.me/254742917779" target="_blank" rel="noreferrer" className="btn btn-primary">Order on WhatsApp</a>
          <a href="mailto:ondarigidion@gmail.com" className="btn btn-outline">Send Email</a>
        </div>
      </section>

      <footer className="footer">
        Business Website is a frontend portfolio prototype by Gidion Ondari. It demonstrates small-business website design, product presentation, trust-building layout, and direct inquiry conversion.
      </footer>
    </div>
  )
}
