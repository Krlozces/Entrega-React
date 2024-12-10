import React, { useState, useEffect } from 'react';
import '../styles/cart.css';
function CartPage() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    const removeFromCart = (productId) => {
        // Filtrar los productos para eliminar el seleccionado
        const updatedCart = cart.filter((item) => item.id !== productId);
        setCart(updatedCart);
        // Actualizar localStorage
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    return (
        <div className="cart-container">
            <div className="cart-header">
                <h2>Mi Carrito</h2>
            </div>
            {cart.length === 0 ? (
                <div className="cart-empty-state">
                    <p>El carrito está vacío</p>
                </div>
            ) : (
                <ul className="cart-items-list">
                    {cart.map((item) => (
                        <li key={item.id} className="cart-item">
                            <div className="cart-item-details">
                                <strong className="cart-item-title">{item.title}</strong>
                                <span className="cart-item-price">${item.price}</span>
                            </div>
                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="cart-remove-button"
                            >
                                Eliminar
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default CartPage;
