import React, { useState } from 'react';

const SizeFilter = ({ active, toggle, arrow, updateFilters }) => {
    const [selectedSizes, setSelectedSizes] = useState([]);

    const sizes = ['XXS', 'XL', 'XS', 'S', 'M', 'L', 'XXL', '3XL', '4XL'];

    const toggleSize = (size) => {
        if (selectedSizes.includes(size)) {
            setSelectedSizes(selectedSizes.filter(sz => sz !== size));
        } else {
            setSelectedSizes([...selectedSizes, size]);
        }
    };

    const handleShow = () => {
        updateFilters('size', selectedSizes);
    };

    return (
        <div className={`filter-section ${active ? 'active' : ''}`}>
            <div className="filter-header" onClick={toggle}>
                <span>Size</span>
                <img src={arrow} className="arrow" alt="Arrow" />
            </div>
            <div className="filter-section-line"></div>
            {active && (
                <div className="filter-content">
                    <div className="size-grid">
                        {sizes.map((size, index) => (
                            <div key={index} className="size-button-container">
                                <button
                                    className={`size-button ${selectedSizes.includes(size) ? 'selected' : ''}`}
                                    onClick={() => toggleSize(size)}
                                >
                                    {size}
                                </button>
                                {selectedSizes.includes(size) && (
                                    <button className="show-button" onClick={handleShow}>Show</button>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="filter-content-line"></div>
                </div>
            )}
        </div>
    );
};

export default SizeFilter;