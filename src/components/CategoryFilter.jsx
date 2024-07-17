import React from 'react';
import './CategoryFilter.css';

const CategoryFilter = ({ onFilterChange }) => {
  return (
    <div className="category-filter-container">
      <p className="filter-description">Seleccione categorías:</p>
      <div className="category-filter">
        <button onClick={() => onFilterChange('all')}>Todas</button>
        <button onClick={() => onFilterChange('crash')}>Crashes</button>
        <button onClick={() => onFilterChange('hi-hat')}>Hi-Hats</button>
      </div>
    </div>
  );
};

export default CategoryFilter;
