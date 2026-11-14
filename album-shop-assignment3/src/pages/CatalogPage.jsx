import React, { useState } from "react";
import AlbumCard from "../components/AlbumCard";

function CatalogPage({ albums, onAddToCart }) {
  const genres = ["All", "Jazz", "Electronic", "Rock", "Classical"];
  const [selectedGenre, setSelectedGenre] = useState("All");

  const validAlbums = albums || [];

  const filteredGenres =
    selectedGenre == "All"
      ? validAlbums
      : validAlbums.filter((a) => a.genre === selectedGenre);

  return (
    <div className="main-content">
      <header className="catalog-hero">
        <h1>Modern Vinyl Record Storefront</h1>
        <p>
          Explore a curated collection of vinyl records, discover albums by
          genre, manage your shopping cart, and complete your purchase with
          ease.
        </p>
      </header>

      <div className="filter-bar">
        {genres.map((gen) => (
          <button
            key={gen}
            className={`filter-pill ${selectedGenre === gen ? "active" : ""}`}
            onClick={() => setSelectedGenre(gen)}
          >
            {gen}
          </button>
        ))}
      </div>

      <div className="album-grid">
        {filteredGenres.map((album) => (
          <AlbumCard key={album.id} album={album} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
}

export default CatalogPage;
