export default function CheckoutPage() {
  return (
    <div className="container page-section checkout-layout">
      <div className="checkout-card">
        <div className="section-heading compact">
          <div>
            <p className="eyebrow">Checkout</p>
            <h2>Complete your order</h2>
          </div>
        </div>

        <div className="payment-options">
          <label>
            <input type="radio" name="payment" defaultChecked />
            <span>Stripe</span>
          </label>
          <label>
            <input type="radio" name="payment" />
            <span>Razorpay</span>
          </label>
          <label>
            <input type="radio" name="payment" />
            <span>Cash on Delivery</span>
          </label>
        </div>

        <form className="checkout-form">
          <label>
            Full name
            <input type="text" placeholder="Your full name" />
          </label>
          <label>
            Email address
            <input type="email" placeholder="name@email.com" />
          </label>
          <label>
            Shipping address
            <textarea rows="4" placeholder="Street, city, country" />
          </label>
          <button type="submit" className="primary-btn full-width">
            Pay now
          </button>
        </form>
      </div>

      <aside className="summary-box">
        <h3>Order summary</h3>
        <div className="summary-row">
          <span>Quantum X Pro</span>
          <strong>$349</strong>
        </div>
        <div className="summary-row">
          <span>AeroBook 14</span>
          <strong>$1,299</strong>
        </div>
        <div className="summary-row total-row">
          <span>Total</span>
          <strong>$1,673</strong>
        </div>
      </aside>
    </div>
  );
}
