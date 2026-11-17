import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

function AlbumDetailPage({ albums, onAddToCart }) {
  const { albumId } = useParams();
  const [qty, setQty] = useState(1);

  const album = albums.find((a) => a.id === albumId);

  // Check if any album products are missing
  if (!album) {
    return (
      <div className="detail-error">
        <h2>Album Not Found</h2>
        <Link className="btn btn-secondary" to="/">
          Return to Catalog
        </Link>
      </div>
    );
  }

  return (
    <div className="detail-container">
      <nav className="breadcrumb">
        <Link to="/">Catalog</Link> &gt; <span>{album.title}</span>
      </nav>

      <div className="detail-grid">
        <div className="detail-left">
          <img src={album.image} alt={album.title} className="detail-img" />

          <div className="detail-actions">
            <div className="qty-input-group">
              <label htmlFor="detail-qty">Quantity:</label>
              <input
                type="number"
                id="detail-qty"
                min="1"
                max={album.stock}
                value={qty}
                onChange={(e) =>
                  setQty(Math.max(1, parseInt(e.target.value, 10) || 1))
                }
              />
            </div>

            <button
              className="btn btn-primary"
              disabled={album.stock <= 0}
              onClick={() => onAddToCart(album, qty)}
            >
              Add {qty} to Cart
            </button>
          </div>
        </div>

        <div className="detail-info">
          <span className="album-genre">{album.genre}</span>

          <h1 className="album-detail-title">{album.title}</h1>

          <h3>{album.artist}</h3>

          <p className="album-detail-price">${album.price.toFixed(2)}</p>

          <div className="stock-tag">
            {album.stock > 0
              ? `✔️ In Stock (${album.stock} units available)`
              : "Out of Stock"}
          </div>

          <p className="album-detail-desc">{album.description}</p>

          <div className="album-detail-specs">
            <p>
              <strong>Catalog Number:</strong> {album.specs.catalogNumber}
            </p>
            <p>
              <strong>Pressing Weight:</strong> {album.specs.weight}
            </p>
            <p>
              <strong>Speed:</strong> {album.specs.speed}
            </p>
            <p>
              <strong>Label:</strong> {album.specs.label}
            </p>
          </div>

          <div className="album-detail-tracklist">
            <h3>Tracklist</h3>
            <ol>
              {album.tracklist.map((track, index) => (
                <li key={index}>{track}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlbumDetailPage;
