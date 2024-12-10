import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import '../styles/main.css';
import '../styles/categories.css'
const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        // Llamada a la API para obtener las categorías
        const fetchCategories = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products/categories');
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);

    return (
        <div className="categories-container">
            <div
                className="categories-header"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
                Categorías{' '}
                <FontAwesomeIcon
                    icon={isDropdownOpen ? faAngleUp : faAngleDown}
                    className="icons"
                />
            </div>
            {isDropdownOpen && (
                <ul className="categories-dropdown">
                    {categories.map((category, index) => (
                        <li key={index} className="category-item">
                            {category}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Categories;
