import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Filter from '../components/Filter';
import NewRec from '../components/NewRec';
import SimilarProducts from '../components/SimilarProducts';
import TitleProduct from '../components/TitleProduct';
import TextFrame from '../components/TextFrame';
import '../styles/pages/Women.css';

function App() {
  const [filters, setFilters] = useState({
    categories: [],
    price: [0, 1000],
    colors: [],
    size: [],
    style: [],
  });

  const updateFilters = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="wrapper">
      <Header />
      <main>
        <div className="main-content">
          <Filter updateFilters={updateFilters} />
          <div className="content-section">
            <NewRec />
            <SimilarProducts filters={filters} />
          </div>
        </div>
        <TitleProduct />
        <TextFrame />
      </main>
      <Footer />
    </div>
  );
}

export default App;