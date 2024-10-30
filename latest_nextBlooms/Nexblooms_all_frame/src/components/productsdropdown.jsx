import React, { useState } from 'react';
import styles from './/productsdropdown.module.css'; // Import your CSS for styling

const ProductsDropdown = ({ Products, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="product-dropdown">
      <div className="product-dropdown-toggle" onClick={toggleDropdown}>
        {Products} Products ▼ {Products}
      </div>
      {isOpen && (
        <div className="product-dropdown-menu">
          {links.map((link, index) => (
            <div key={index} className="product-dropdown-item">
            <a key={index} href={link.url} className="product-dropdown-link">
              {link.text}
            </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsDropdown;