'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';

const cartItems = [
  {
    id: 1,
    name: 'Quantum X Pro',
    price: 349,
    qty: 1,
    image:
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    name: 'AeroBook 14',
    price: 1299,
    qty: 1,
    image:
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80',
  },
];

export default function CartPage() {
  const [items, setItems] = useState(cartItems);

  const subtotal = useMemo(
    () => items.reduce((acc, item) => acc + item.price * item.qty, 0),
    [items],
  );
  const shipping = subtotal > 0 ? 24 : 0;
  const total = subtotal + shipping;

  const updateQty = (id, delta) => {
    setItems((current) =>
      current
        .map((item) => {
          if (item.id !== id) return item;
          return { ...item, qty: Math.max(0, item.qty + delta) };
        })
        .filter((item) => item.qty > 0),
    );
  };

  return (
    <div className="container page-section cart-layout">
      <div className="cart-list">
        <div className="section-heading compact">
          <div>
            <p className="eyebrow">Shopping bag</p>
            <h2>Your cart</h2>
          </div>
        </div>

        {items.length === 0 ? (
          <div className="empty-state">
            <h3>Your cart is empty.</h3>
            <Link href="/products" className="text-link">
              Continue shopping
            </Link>
          </div>
        ) : (
          items.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-item-content">
                <div>
                  <h3>{item.name}</h3>
                  <p>${item.price}</p>
                </div>
                <div className="qty-controls">
                  <button type="button" onClick={() => updateQty(item.id, -1)}>
                    -
                  </button>
                  <span>{item.qty}</span>
                  <button type="button" onClick={() => updateQty(item.id, 1)}>
                    +
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <aside className="summary-box">
        <h3>Order summary</h3>
        <div className="summary-row">
          <span>Subtotal</span>
          <strong>${subtotal}</strong>
        </div>
        <div className="summary-row">
          <span>Shipping</span>
          <strong>${shipping}</strong>
        </div>
        <div className="summary-row total-row">
          <span>Total</span>
          <strong>${total}</strong>
        </div>
        <Link href="/checkout" className="primary-btn full-width">
          Proceed to checkout
        </Link>
      </aside>
    </div>
  );
}
