import React, { useState } from 'react';

const CategoryFilter = ({ active, toggle, arrow, updateFilters }) => {
    const [selectedCategories, setSelectedCategories] = useState([]);

    const toggleCategory = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter(cat => cat !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    const handleShow = () => {
        updateFilters('categories', selectedCategories);
    };

    return (
        <div className={`filter-section ${active ? 'active' : ''}`}>
            <div className="filter-header" onClick={toggle}>
                <span>Categories</span>
                <img src={arrow} className="arrow" alt="Arrow" />
            </div>
            <div className="filter-section-line"></div>
            {active && (
                <div className="filter-content">
                    {['Tops', 'Printed T-shirts', 'Plain T-shirts', 'Kurti', 'Boxers','Full sleeve T-shirts', 'Joggers', 'Payjamas', 'Jeans', 'Sweatshirts', 'Hoodies'].map(category => (
                        <div key={category} className="category-option-container">
                            <div
                                className={`category-option ${selectedCategories.includes(category) ? 'selected' : ''}`}
                                onClick={() => toggleCategory(category)}
                            >
                                <span>{category}</span>
                            </div>
                            {selectedCategories.includes(category) && (
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

export default CategoryFilter;