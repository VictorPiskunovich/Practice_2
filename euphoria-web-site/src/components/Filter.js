import React, { useState } from 'react';
import CategoryFilter from './CategoryFilter';
import PriceFilter from './PriceFilter';
import ColorFilter from './ColorFilter';
import SizeFilter from './SizeFilter';
import StyleFilter from './StyleFilter';
import '../styles/filter.scss';

const Filter = ({ updateFilters }) => {
    const [activeSections, setActiveSections] = useState({
        categories: true,
        price: true,
        colors: true,
        size: true,
        style: true,
    });

    const [filters, setFilters] = useState({
        categories: [],
        price: [0, 1000],
        colors: [],
        size: [],
        style: [],
    });

    const toggleSection = (section) => {
        setActiveSections({
            ...activeSections,
            [section]: !activeSections[section],
        });
    };

    const updateFiltersSection = (section, value) => {
        const newFilters = {
            ...filters,
            [section]: value,
        };
        setFilters(newFilters);
        updateFilters(newFilters);
    };

    const resetFilters = () => {
        const initialFilters = {
            categories: [],
            price: [0, 1000],
            colors: [],
            size: [],
            style: [],
        };
        setFilters(initialFilters);
        updateFilters(initialFilters);
    };

    return (
        <div className="filter">
            <h1>Filter</h1>
            <div className="filter-section-line"></div>
            <CategoryFilter active={activeSections.categories} toggle={() => toggleSection('categories')} arrow="/arrow-right.png" updateFilters={updateFiltersSection} />
            <PriceFilter active={activeSections.price} toggle={() => toggleSection('price')} updateFilters={updateFiltersSection} />
            <ColorFilter active={activeSections.colors} toggle={() => toggleSection('colors')} arrow="/arrow-right.png" updateFilters={updateFiltersSection} />
            <SizeFilter active={activeSections.size} toggle={() => toggleSection('size')} arrow="/arrow-right.png" updateFilters={updateFiltersSection} />
            <StyleFilter active={activeSections.style} toggle={() => toggleSection('style')} arrow="/arrow-right.png" updateFilters={updateFiltersSection} />
            <button className="reset-button" onClick={resetFilters}>Reset</button>
        </div>
    );
};

export default Filter;