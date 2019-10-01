const path = require('path'); // core node.js module to return paths

const express = require('express');

// const rootDir = require('../util/path');

const productsController = require('../controllers/products');

// stores all routes
const router = express.Router();

// /admin/add-product => GET
router.get( '/add-product', productsController.getAddProduct );

// /admin/add-product => POST
router.post( '/add-product', productsController.postAddProduct );

module.exports = router;
/*
exports.routes = router;
exports.products = products;
*/