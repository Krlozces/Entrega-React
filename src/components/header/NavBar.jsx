// NavBar.jsx
import React from 'react';
import SearchBar from '../SearchBar';
import Categories from '../Categories';
import Account from '../Account';
import Favourites from '../Favourites';
import Cart from '../Cart';
import '../../styles/navBar.css';

function NavBar({ onSearch }) {
    return (
        <nav className="nav">
            <SearchBar onSearch={onSearch} />  {/* Pasa la función de búsqueda */}
            <Account />
            <Favourites />
            <Cart />
        </nav>
    );
}

export default NavBar;
