import Link from 'next/link';
import { products } from '../data/products';

const categories = [
  'Audio',
  'Gaming',
  'Smart Home',
  'Laptops',
  'Accessories',
  'Wearables',
];

export default function HomePage() {
  const featured = products.slice(0, 4);

  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">NEW ARRIVALS</p>
            <h1>Power up your everyday with premium tech.</h1>
            <p className="hero-copy">
              Discover next-gen laptops, audio, gaming gear, and smart home essentials built to
              elevate your lifestyle.
            </p>
            <div className="hero-actions">
              <Link href="/products" className="primary-btn">
                Shop now
              </Link>
              <Link href="/admin" className="secondary-btn">
                View dashboard
              </Link>
            </div>
            <div className="stat-row">
              <div>
                <strong>24k+</strong>
                <span>Happy customers</span>
              </div>
              <div>
                <strong>4.9/5</strong>
                <span>Average rating</span>
              </div>
              <div>
                <strong>2-day</strong>
                <span>Free shipping</span>
              </div>
            </div>
          </div>
          <div className="hero-card">
            <div className="product-badge">Best Seller</div>
            <img
              src="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=900&q=80"
              alt="Premium headphones"
            />
            <div className="hero-card-info">
              <div>
                <span>Noise Cancelling</span>
                <h3>Quantum X Pro</h3>
              </div>
              <strong>$349</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="container section-block">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Categories</p>
            <h2>Shop by essentials</h2>
          </div>
        </div>
        <div className="category-grid">
          {categories.map((category, index) => (
            <div key={category} className="category-card">
              <span>{index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
              <h3>{category}</h3>
              <p>Curated products for modern living.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container section-block">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Featured</p>
            <h2>Top picks this week</h2>
          </div>
          <Link href="/products" className="text-link">
            View all products
          </Link>
        </div>
        <div className="product-grid">
          {featured.map((product) => (
            <article key={product.id} className="product-card">
              <div className="product-image-wrap">
                <img src={product.image} alt={product.name} />
                <span className="tag">{product.category}</span>
              </div>
              <div className="product-body">
                <div className="product-meta">
                  <h3>{product.name}</h3>
                  <strong>${product.price}</strong>
                </div>
                <p>{product.description}</p>
                <div className="product-footer">
                  <span>⭐ {product.rating}</span>
                  <Link href="/products" className="mini-btn">
                    Buy now
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="promo-band">
        <div className="container promo-inner">
          <div>
            <p className="eyebrow">Limited offer</p>
            <h2>Save up to 30% on premium bundles.</h2>
          </div>
          <Link href="/products" className="primary-btn">
            Explore deals
          </Link>
        </div>
      </section>
    </>
  );
}
