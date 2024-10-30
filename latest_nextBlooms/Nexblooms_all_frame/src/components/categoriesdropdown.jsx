import React, { useState } from 'react';
import styles from './/categoriesdropdown.module.css'; // Import your CSS for styling

const CategoriesDropdown = ({ Categories, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="category-dropdown">
      <div className="category-dropdown-toggle" onClick={toggleDropdown}>
        {Categories} Categories ▼ {Categories}
      </div>
      {isOpen && (
        <div className="category-dropdown-menu">
          {links.map((link, index) => (
            <div key={index} className="category-dropdown-item">
            <a key={index} href={link.url} className="category-dropdown-link">
              {link.text}
            </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoriesDropdown;