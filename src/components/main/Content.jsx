// Content.jsx
import React, { useEffect, useState } from 'react';
import { getProducts } from '../../services/apiService';
import '../../styles/main.css';
import '../../styles/content.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useWishlist } from '../../services/WishlistContext';
import NavBar from '../header/NavBar';  {/* Cambia a importación por defecto */}

function Content() {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState(''); // Estado del término de búsqueda
    const { addToWishlist, removeFromWishlist, wishlist } = useWishlist();
    const navigate = useNavigate();

    const [cart, setCart] = useState(() => {
        const user = sessionStorage.getItem('user');
        if (user) {
            const savedCart = localStorage.getItem('cart');
            return savedCart ? JSON.parse(savedCart) : [];
        }
        return [];
    });

    const isAuthenticated = () => {
        return sessionStorage.getItem('user') !== null;
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProducts();
                setProducts(data);
            } catch (error) {
                console.error('Error al cargar los productos', error);
            }
        };
        fetchProducts();
    }, []);

    const addToCart = (product) => {
        if (!isAuthenticated()) {
            alert('Por favor, inicie sesión para agregar al carrito');
            return;
        }

        const updatedCart = [...cart, product];
        setCart(updatedCart);

        if (isAuthenticated()) {
            localStorage.setItem('cart', JSON.stringify(updatedCart));
        }
    };

    const addToWishlistHandler = (product) => {
        if (!isAuthenticated()) {
            alert('Por favor, inicie sesión para agregar a la lista de deseos');
            return;
        }

        const productInWishlist = wishlist.some((item) => item.id === product.id);
        if (productInWishlist) {
            removeFromWishlist(product.id);
        } else {
            addToWishlist(product);
        }
    };

    // Filtrar productos
    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            {/* <NavBar onSearch={setSearchTerm} /> Pasa la función de búsqueda a NavBar - coso duplicado - Sirve para filtrar los productos, pero ns como quitarle el duplicado */}
            <div className="content">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="product">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="img-product"
                            onClick={() => navigate(`/product/${product.id}`)}
                        />
                        <h3>{product.title}</h3>
                        <p className="category-product">{product.category}</p>
                        <p>{product.description}</p>
                        <p className="price-product">$ {product.price}</p>
                        <div>
                            <FontAwesomeIcon
                                icon={faHeart}
                                className={`icons ${wishlist.some((item) => item.id === product.id) ? 'active' : ''}`}
                                onClick={() => addToWishlistHandler(product)}
                            />
                            <FontAwesomeIcon
                                icon={faCartShopping}
                                className="icons"
                                onClick={() => addToCart(product)}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Content;
