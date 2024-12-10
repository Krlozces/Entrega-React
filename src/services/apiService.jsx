// Make a request to the next endpoint: https://fakestoreapi.com/products
// const response = await fetch('https://fakestoreapi.com/products');
// const data = await response.json();

export const getProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    return await response.json();
}

export const getCategories = async () => {
    const response = await fetch('https://fakestoreapi.com/products/categories');
    return await response.json();
}

export const getProductById  = async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    return await response.json();
}