// src/components/NewRec.js
import React from 'react';
import '../styles/index.scss';

const NewRec = () => {
  return (
    <div className="new-rec">
      <div className="left-section">Women’s Clothing</div>
      <div className="right-section">
        <span className="new-link">New</span>
        <span className="recommended-link">Recommended</span>
      </div>
    </div>
  );
};

export default NewRec;