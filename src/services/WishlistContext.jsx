import React, { createContext, useContext, useState } from 'react';

const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState([]);

    const addToWishlist = (product) => {
        setWishlist((prevWishlist) => {
            // Evitar duplicados
            if (prevWishlist.some((item) => item.id === product.id)) {
                return prevWishlist;
            }
            return [...prevWishlist, product];
        });
    };

    const removeFromWishlist = (productId) => {
        setWishlist((prevWishlist) =>
            prevWishlist.filter((item) => item.id !== productId)
        );
    };

    return (
        <WishlistContext.Provider
            value={{ wishlist, addToWishlist, removeFromWishlist }}
        >
            {children}
        </WishlistContext.Provider>
    );
};
