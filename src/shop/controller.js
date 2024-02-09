const pool = require('../../db');
const queries = require('./queries');


const getProducts = (req,res) => {
    pool.query(queries.getProducts, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getProductById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getProductById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const addProduct = (req, res) => {
    const { name, description, imglink, price } = req.body;

    // check if name of the product already exists in db
    pool.query(queries.checkNameExists, [name], (error, results) => {
        if (results.rows.length) {
            res.send("That product already exists.");
        }
    // add product to db
    pool.query(queries.addProduct, [name, description, imglink, price], (error, results) => {
        if (error) throw error;
        res.status(201).send("Product created successfully");
    });
    });
};

module.exports = {
    getProducts,
    getProductById,
    addProduct,
};