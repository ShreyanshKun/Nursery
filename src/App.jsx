import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./LandingPage";
import ProductPage from "./ProductPage";
import CartPage from "./CartPage";
import Header from "./Header";

import { useEffect } from "react";

function AppWrapper() {
  const location = useLocation();

  // Check if current path is NOT the landing page
  const showHeader = location.pathname !== "/";

  return (
    <>
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
