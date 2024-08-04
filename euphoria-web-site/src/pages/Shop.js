// src/pages/Shop.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Shopbody from '../components/Shopbody';

const Shop = () => {
  return (
    <div className="wrapper">
      <Header />
      <Shopbody />
      <Footer />
    </div>
  );
};

export default Shop;