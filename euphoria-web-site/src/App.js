// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Shop from './pages/Shop';
import Men from './pages/Men';
import Women from './pages/Women';
import Combos from './pages/Combos';
import Joggers from './pages/Joggers';
import SignInPage from './pages/SignInPage';
import ProductDetailPage from './pages/ProductDetailPage';
// import './styles/index.scss';

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("userToken");
    setToken(storedToken);
  },
);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInPage token={token} setToken={setToken}/>} />
        <Route path="/shop" element={token ? <Shop /> : <Navigate to="/" />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/product/:productId" element={<ProductDetailPage />} />
        <Route path="/combos" element={<Combos />} />
        <Route path="/joggers" element={<Joggers />} />
      </Routes>
    </Router>
  );
}
export default App;