import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import CatalogPage from "./pages/CatalogPage";
import { ALBUMS } from "./data/albums";

function App() {
  return (
    <div className="app-container">
      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <CatalogPage albums={ALBUMS} /*onAddToCart={handleAddToCart}*/ />
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
