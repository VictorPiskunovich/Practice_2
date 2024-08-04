import React, { useState } from 'react';

const ColorFilter = ({ active, toggle, arrow, updateFilters }) => {
    const [selectedColors, setSelectedColors] = useState([]);

    const colors = [
        { name: 'Purple', color: '#8434E1' },
        { name: 'Black', color: '#252525' },
        { name: 'Red', color: '#F35528' },
        { name: 'Orange', color: '#F16F2B' },
        { name: 'Navy', color: '#345EFF' },
        { name: 'White', color: '#FFFFFF' },
        { name: 'Broom', color: '#D67E3B' },
        { name: 'Green', color: '#48BC4E' },
        { name: 'Yellow', color: '#FDC761' },
        { name: 'Grey', color: '#E4E5E8' },
        { name: 'Pink', color: '#E08D9D' },
        { name: 'Blue', color: '#3FDEFF' },
    ];

    const toggleColor = (color) => {
        if (selectedColors.includes(color)) {
            setSelectedColors(selectedColors.filter(col => col !== color));
        } else {
            setSelectedColors([...selectedColors, color]);
        }
    };

    const handleShow = () => {
        updateFilters('colors', selectedColors);
    };

    return (
        <div className={`filter-section ${active ? 'active' : ''}`}>
            <div className="filter-header" onClick={toggle}>
                <span>Colors</span>
                <img src={arrow} className="arrow" alt="Arrow" />
            </div>
            <div className="filter-section-line"></div>
            {active && (
                <div className="filter-content">
                    <div className="color-grid">
                        {colors.map(color => (
                            <div key={color.name} className="color-item-container">
                                <div
                                    className={`color-item ${selectedColors.includes(color.name) ? 'selected' : ''}`}
                                    onClick={() => toggleColor(color.name)}
                                >
                                    <div className="color-box" style={{ backgroundColor: color.color }}></div>
                                    <span className="color-name">{color.name}</span>
                                </div>
                                {selectedColors.includes(color.name) && (
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

export default ColorFilter;