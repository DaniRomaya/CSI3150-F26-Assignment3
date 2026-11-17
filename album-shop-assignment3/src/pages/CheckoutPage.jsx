import React, { useState } from "react";
import { Link } from "react-router-dom";

function CheckoutPage({ cart, onClearCart }) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    cardName: "",
    cardNumber: "",
    cardExpDate: "",
  });

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const taxes = subtotal * 0.06;
  const total = subtotal + taxes;

  //   Handle change in form input fields
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    onClearCart();
  };

  if (isSubmitted) {
    return (
      <div className="checkout-success">
        <h2>Order Placed Successfully</h2>
        <p>
          Thank you, {formData.fullName}! A confirmation email with a receipt is
          sent to {formData.email}
        </p>
        <Link className="btn btn-primary" to="/">
          Return to MarketPlace
        </Link>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="empty-cart-page">
        <h2>Your Cart is Empty</h2>
        <Link className="btn btn-secondary" to="/">
          Checkout albums being sold!
        </Link>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>

      <div className="checkout-grid">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <h2>Shipping Information</h2>
          <div className="form-group">
            <label htmlFor="fullName">Full Name *</label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="John Doe"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="text"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="jdoe@gmail.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Shipping Address *</label>
            <input
              type="text"
              name="address"
              id="address"
              required
              value={formData.address}
              onChange={handleChange}
              placeholder="1234 Wilmington Dr."
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">City *</label>
            <input
              type="text"
              name="city"
              id="city"
              required
              value={formData.city}
              onChange={handleChange}
              placeholder="Detroit"
            />
          </div>
          <div className="form-group">
            <label htmlFor="postalCode">Postal Code *</label>
            <input
              type="text"
              name="postalCode"
              id="postalCode"
              required
              value={formData.postalCode}
              onChange={handleChange}
              placeholder="48313"
            />
          </div>
          <h3>Card Details</h3>
          <div className="form-group">
            <label htmlFor="cardName">Card Holder Name *</label>
            <input
              type="text"
              name="cardName"
              id="cardName"
              required
              value={formData.cardName}
              onChange={handleChange}
              placeholder="John Doe"
            />
          </div>
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number *</label>
            <input
              type="text"
              name="cardNumber"
              id="cardNumber"
              required
              value={formData.cardNumber}
              onChange={handleChange}
              placeholder="1234 5678 9101 1213"
            />
          </div>
          <div className="form-group">
            <label htmlFor="cardExpDate">Card Expiration Date *</label>
            <input
              type="month"
              name="cardExpDate"
              id="cardExpDate"
              required
              value={formData.cardExpDate}
              onChange={handleChange}
              placeholder="05/29"
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block btn-large">
            Complete Order (${total.toFixed(2)})
          </button>
        </form>

        <aside className="order-summary-card">
          <h3>Order Summary</h3>
          <ul className="summary-list">
            {cart.map((item) => (
              <li key={item.id} className="summary-row">
                <span>
                  {item.title} &times; {item.quantity}
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <hr />
          <div className="summary-row">
            <span>Subtotal:</span> <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Estimated Tax (6%):</span> <span>${taxes.toFixed(2)}</span>
          </div>
          <div className="summary-row total-row">
            <span>Total:</span> <span>${total.toFixed(2)}</span>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default CheckoutPage;
