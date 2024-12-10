import React from 'react';
import { useWishlist } from '../services/WishlistContext';
import '../styles/whisList.css';

function WishList() {
    const { wishlist, removeFromWishlist } = useWishlist();

    return (
        <div className="wishlist-container">
            <h2 className="wishlist-header">Lista de Deseos</h2>
            {wishlist.length === 0 ? (
                <div className="wishlist-empty-state">
                    <p>No tienes productos en tu lista de deseos.</p>
                </div>
            ) : (
                wishlist.map((product) => (
                    <div key={product.id} className="wishlist-product">
                        <div className="wishlist-product-image-container">
                            <img 
                                src={product.image} 
                                alt={product.title} 
                                className="wishlist-img-product" 
                            />
                        </div>
                        <div className="wishlist-product-details">
                            <h3 className="wishlist-product-title">{product.title}</h3>
                            <p className="wishlist-category">{product.category}</p>
                            <p className="wishlist-description">{product.description}</p>
                            <p className="wishlist-price">$ {product.price}</p>
                            <button
                                className="wishlist-remove-button"
                                onClick={() => removeFromWishlist(product.id)}
                            >
                                Eliminar de la lista
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}

export default WishList;