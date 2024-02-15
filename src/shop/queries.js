const getProducts = "SELECT * FROM products";
const getProductById = "SELECT * FROM products WHERE id = $1";
const checkNameExists = "SELECT s FROM products s WHERE s.name = $1";
const addProduct = 
"INSERT INTO products (name, description, imglink, price) VALUES ($1, $2, $3, $4)";
const removeProduct = "DELETE FROM products WHERE id = $1";
const updateProduct = "UPDATE products SET price = $1 WHERE id = $2";
const getProductByName = "SELECT * FROM products WHERE name ILIKE $1";

module.exports = {
    getProducts,
    getProductById,
    checkNameExists,
    addProduct,
    removeProduct,
    updateProduct,
    getProductByName,
}