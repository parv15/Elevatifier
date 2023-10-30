import { useState } from 'react';
import '../Styles/CategoryFilter.css';

function CategoryFilter({ selectedCategory, setSelectedCategory }) {
  const categories = ['All', 'Entertainment', 'Sports', 'Global', 'Technology', 'Health'];

  return (
    <div className="category-filter">
      {categories.map((category, index) => (
        <button
          className={category === selectedCategory ? "active" : "category"}
          key={index}
          value={category}
          onClick={(e) => setSelectedCategory(e.target.value)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
