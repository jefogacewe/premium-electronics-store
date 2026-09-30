'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { products } from '../../data/products';

const filters = ['All', 'Audio', 'Gaming', 'Smart Home', 'Laptops', 'Accessories', 'Wearables'];

export default function ProductsPage() {
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = useMemo(() => {
    const normalized = search.toLowerCase();
    const result = products.filter((product) => {
      const categoryMatch = activeFilter === 'All' || product.category === activeFilter;
      const searchMatch =
        !normalized ||
        product.name.toLowerCase().includes(normalized) ||
        product.description.toLowerCase().includes(normalized);
      return categoryMatch && searchMatch;
    });

    if (sortBy === 'price-low') {
      return [...result].sort((a, b) => a.price - b.price);
    }

    if (sortBy === 'price-high') {
      return [...result].sort((a, b) => b.price - a.price);
    }

    if (sortBy === 'rating') {
      return [...result].sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [search, activeFilter, sortBy]);

  return (
    <div className="container page-section">
      <div className="section-heading compact">
        <div>
          <p className="eyebrow">Catalog</p>
          <h2>All products</h2>
        </div>
      </div>

      <div className="catalog-toolbar">
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search products..."
        />
        <select value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Rating</option>
        </select>
      </div>

      <div className="chip-row">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={filter === activeFilter ? 'chip active' : 'chip'}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
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
                <button type="button" className="mini-btn">
                  Add to cart
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="empty-state">
          <h3>No products match your search.</h3>
          <Link href="/products" className="text-link">
            Clear filters
          </Link>
        </div>
      )}
    </div>
  );
}
