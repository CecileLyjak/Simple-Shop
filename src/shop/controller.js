const { response } = require('express');
const pool = require('../../db');
const queries = require('./queries');


const getProducts = (req,res) => {
    pool.query(queries.getProducts, (error, results) => {
        if (error) throw error;
        res.render("shopPage", { products: results.rows });
    });
};

const getProductById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getProductById, [id], (error, results) => {
        if (error) throw error;
        res.render("productPage", { products: results.rows[0] });
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

const removeProduct = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getProductById, [id], (error, results) => {
        const noProductFound = !results.rows.length;
        if (noProductFound) {
            res.send("Product does not exist in the database");
        }
        pool.query(queries.removeProduct, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Product removed successfully");
        });
    });
};

const updateProduct = (req, res) => {
    const id = parseInt(req.params.id);
    const { price } = req.body;

    pool.query(queries.getProductById, [id], (error, results) => {
        const noProductFound = !results.rows.length;
        if (noProductFound) {
            res.send("Product does not exist in the database");
        }

        pool.query(queries.updateProduct, [price, id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Product updated successfully");
        });
    });
};

module.exports = {
    getProducts,
    getProductById,
    addProduct,
    removeProduct,
    updateProduct,
};