import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../services/apiService';
import '../../styles/main.css';
import '../../styles/productDetails.css';

function ProductDetails() {
    const { id } = useParams(); // Obtiene el ID de la URL
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const data = await getProductById(id);
                setProduct(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchProduct();
    }, [id]);

    if (!product) return <p>Cargando producto...</p>;

    return (
        <div className="product-details">
            <img src={product.image} alt={product.title} />
            <h1>{product.title}</h1>
            <p className="category-product">{product.category}</p>
            <p>{product.description}</p>
            <p className="price-product">$ {product.price}</p>
        </div>
    );
}

export default ProductDetails;
