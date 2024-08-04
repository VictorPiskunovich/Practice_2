import React, { useState } from 'react';

const StyleFilter = ({ active, toggle, arrow, updateFilters }) => {
    const [selectedStyles, setSelectedStyles] = useState([]);

    const styles = ['Classic', 'Casual', 'Business', 'Sport', 'Elegant', 'Formal (evening)'];

    const toggleStyle = (style) => {
        if (selectedStyles.includes(style)) {
            setSelectedStyles(selectedStyles.filter(stl => stl !== style));
        } else {
            setSelectedStyles([...selectedStyles, style]);
        }
    };

    const handleShow = () => {
        updateFilters('style', selectedStyles);
    };

    return (
        <div className={`filter-section ${active ? 'active' : ''}`}>
            <div className="filter-header" onClick={toggle}>
                <span>Dress Style</span>
                <img src={arrow} className="arrow" alt="Arrow" />
            </div>
            <div className="filter-section-line"></div>
            {active && (
                <div className="filter-content">
                    {styles.map(style => (
                        <div key={style} className="style-option-container">
                            <div
                                className={`style-option ${selectedStyles.includes(style) ? 'selected' : ''}`}
                                onClick={() => toggleStyle(style)}
                            >
                                <span>{style}</span>
                            </div>
                            {selectedStyles.includes(style) && (
                                <button className="show-button" onClick={handleShow}>Show</button>
                            )}
                        </div>
                    ))}
                    <div className="filter-content-line"></div>
                </div>
            )}
        </div>
    );
};

export default StyleFilter;