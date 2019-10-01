const path = require('path'); // core node.js module to return paths

const express = require('express');

// const rootDir = require('../util/path');

const adminController = require('../controllers/admin');

// stores all routes
const router = express.Router();

// /admin/add-product => GET
router.get( '/add-product', adminController.getAddProduct );

// /admin/add-product => GET
router.get( '/products', adminController.getProducts );

// /admin/add-product => POST
router.post( '/add-product', adminController.postAddProduct );

module.exports = router;
/*
exports.routes = router;
exports.products = products;
*/