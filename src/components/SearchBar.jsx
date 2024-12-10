// SearchBar.jsx
import React, { useState } from 'react';

function SearchBar({ onSearch }) {
    const [inputValue, setInputValue] = useState('');

    const handleSearchChange = (e) => {
        setInputValue(e.target.value);
        onSearch(e.target.value); // Llama la función onSearch que viene como prop
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Buscar productos..."
                value={inputValue}
                onChange={handleSearchChange}
            />
        </div>
    );
}

export default SearchBar;
