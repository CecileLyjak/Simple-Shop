const getProducts = "SELECT * FROM products";
const getProductById = "SELECT * FROM products WHERE id = $1";
const checkNameExists = "SELECT s FROM products s WHERE s.name = $1";
const addProduct = 
"INSERT INTO products (name, description, imglink, price) VALUES ($1, $2, $3, $4)";

module.exports = {
    getProducts,
    getProductById,
    checkNameExists,
    addProduct,
}