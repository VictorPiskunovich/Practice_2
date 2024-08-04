import React, { useState } from 'react';
import Nouislider from 'nouislider-react';
import '../styles/nouislider.scss';
import '../styles/filter.scss';

const PriceFilter = ({ active, toggle, updateFilters }) => {
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [initialPriceRange, setInitialPriceRange] = useState([0, 1000]);
    const [showButton, setShowButton] = useState(false);

    const handleSliderChange = (values) => {
        setPriceRange(values.map(Number));
        if (values[0] !== initialPriceRange[0] || values[1] !== initialPriceRange[1]) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    const handleSliderSet = (values) => {
        setInitialPriceRange(values.map(Number));
        setShowButton(false);
    };

    const handleShow = () => {
        updateFilters('price', priceRange);
    };

    return (
        <div className={`filter-section ${active ? 'active' : ''}`}>
            <div className="filter-header" onClick={toggle}>
                <span>Price</span>
                <img src="arrow-right.png" className="arrow" alt="Arrow" />
            </div>
            <div className="filter-section-line"></div>
            {active && (
                <div className="filter-content">
                    <Nouislider
                        range={{ min: 0, max: 1000 }}
                        start={priceRange}
                        connect
                        onUpdate={handleSliderChange}
                        onSet={handleSliderSet}
                    />
                    <div className="price-inputs">
                        <input type="number" value={priceRange[0]} onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])} />
                        <input type="number" value={priceRange[1]} onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])} />
                    </div>
                    {showButton && (
                        <button className="show-button" onClick={handleShow}>Show</button>
                    )}
                    <div className="filter-content-line"></div>
                </div>
            )}
        </div>
    );
};

export default PriceFilter;