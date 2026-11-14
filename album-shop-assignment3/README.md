# 3A - AlbumShop

## 1. Project Setup & Execution Instructions

### Prerequisites

Before running the project locally, ensure the following software is installed:

- **Node.js:** Version 20.x or later (LTS recommended).
- **npm:** Node Package Manager, included with Node.js.
- **Git:** Required to clone the project repository.

To verify your installations, run:
(These commands are for bash shell, Windows command prompt, Mac Terminal)

```bash
node -v
npm -v
git --version
```

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/DaniRomaya/CSI3150-F26-Assignment3.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd album-shop-assignment3
   ```

3. **Install project dependencies:**

   ```bash
   npm install
   ```

   This command installs the dependencies listed in `package.json`.

## Running the Development Server

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Once the server starts, the terminal will display a local development URL, typically:

   ```text
   http://localhost:5173/
   ```

3. Open the provided URL in your web browser to access the application.

4. Ensure that the project loads correctly and that the user interface is displayed. Keep the terminal running while using the application. Press `Ctrl + C` to stop the development server.

## Project Directory Structure

```text
album-shop-assignment3/
├── public/          # Static assets
├── src/             # Application source code
│   ├── assets/      # Images and other assets
│   ├── components/  # Reusable React components
│   │    └── AlbumCard.jsx
│   │    └── CartDrawer.jsx
│   │    └── NavBar.jsx
│   ├── pages/
│   │    └── CatalogPage.jsx
│   │    └── CheckoutPage.jsx
│   │    └── AlbumDetailPage.jsx
│   ├── data/
│   │    └── album.js
│   ├── App.jsx      # Main application component
│   ├── main.jsx     # Application entry point
│   └── style.css    # Global styles
│
├── index.html       # Main HTML file
├── README.md        # README file
├── package.json     # Dependencies and project scripts
├── package-lock.json
└── vite.config.js   # Vite configuration
```

The `src` directory contains the main React application code, including reusable components, styling, pages, and the application entry point. The `public` directory stores any static assets, while `package.json` defines project dependencies and available scripts. The Vite configuration file contains settings for the development environment.

## 2. React Component Hierarchy & State Flow Architecture

```text

<React.StrictMode> → src/main.jsx (**State**: None, **Props**: None, **Callback Handlers & Events**: None, **Route**: Application root wrapper)
└── <BrowserRouter> → react-router-dom (**State**: None, **Props**: None, **Callback Handlers & Events**: None, **Route**: Provides routing context)
    └── <App> → src/App.jsx (State: cart [Array] - stores cart items, isCartOpen [Boolean]  - controls cart drawer visibility, Props: None, Callbacks: handleAddToCart(album, quantity), handleUpdateQuantity(albumId, delta), handleRemoveFromCart(albumId), handleClearCart(), Route: Application root)
        │
        ├── <NavBar> → src/components/NavBar.jsx (**State**: None, **Props**: cartCount [Number] - displays total cart quantity, onOpenCart [Function] - opens cart drawer, **Callback Handlers & Events**: onOpenCart(), **Route**: Shared component displayed across all pages)
        │
        ├── <Routes> → react-router-dom (**State**: None, **Props**: None, **Callbacks**: None, **Route**: Contains application page routes)
        │   │
        │   ├── <Route path="/" element={<CatalogPage />} />
        │   │   └── <CatalogPage> → src/pages/CatalogPage.jsx (**State**: selectedGenre [String] - stores selected album genre, default = "All", **Props**: albums [Array] - contains available albums, onAddToCart [Function], **Callback Handlers & Events**: setSelectedGenre(genre), onAddToCart(album), **Route**: "/" - catalog page)
        │   │       │
        │   │       └── <AlbumCard> → src/components/AlbumCard.jsx (**State**: None, **Props**: album [Object] - individual album information, onAddToCart [Function], **Callback Handlers & Events**: onAddToCart(album), **Route**: Not a routed page; links to "/album/:albumId")
        │   │
        │   ├── <Route path="/album/:albumId" element={<AlbumDetailsPage />} />
        │   │   └── <AlbumDetailsPage> → src/pages/AlbumDetailsPage.jsx (**State**: qty [Number] - stores selected album quantity, default = 1, **Props**: albums [Array] - contains available album data, onAddToCart [Function], **Callback Handlers & Events**: setQty(value), onAddToCart(album, qty), **Route**: "/album/:albumId" - useParams() retrieves albumId from URL)
        │   │
        │   └── <Route path="/checkout" element={<CheckoutPage />} />
        │       └── <CheckoutPage> → src/pages/CheckoutPage.jsx (**State**: isSubmitted [Boolean] - tracks order submission, default = false, formData [Object] - stores fullName, email, shippingAddress, zipCode, **Props**: cart [Array] - contains cart items, onClearCart [Function], **Callback Handlers & Events**: handleChange(event), handleSubmit(event), setFormData(value), setIsSubmitted(value), onClearCart(), **Route**: "/checkout" - checkout and order confirmation page)
        │
        └── <CartDrawer> → src/components/CartDrawer.jsx (**State**: None, Props: isOpen [Boolean] - controls drawer visibility, cart [Array] - contains cart items, onClose [Function], onUpdateQuantity [Function], onRemove [Function], **Callback Handlers & Events**: onClose(), onUpdateQuantity(albumId, -1), onUpdateQuantity(albumId, 1), onRemove(albumId), handleProceedToCheckout(), **Route**: Not a routed page; rendered conditionally based on isOpen, useNavigate() navigates to "/checkout")

```
