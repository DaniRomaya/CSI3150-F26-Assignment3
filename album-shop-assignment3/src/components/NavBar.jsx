import React from "react";
import { Link } from "react-router-dom";

function NavBar({ cartCount, onOpenCart }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand-logo" to="/">
          💽VinylVault{" "}
        </Link>
        <nav className="nav-actions">
          <Link className="nav-link" to="/">
            Catalog
          </Link>
          <button
            className="btn-cart-badge"
            type="button"
            onClick={onOpenCart}
            aria-label={`Shipping cart with ${cartCount} items`}
          >
            🛒 Cart{" "}
            {cartCount > 0 && <span className="badge-pill">{cartCount}</span>}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
