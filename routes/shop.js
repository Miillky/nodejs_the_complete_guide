const path = require('path'); // core node.js module to return paths

const express = require('express');

/* const rootDir = require('../util/path');
const adminData = require('./admin') */

const shopController = require('../controllers/shop');

const router = express.Router();

// __dirname absolute path to this project folder
// path.join will create a path to work on linux (/) and on windows (\) server paths
// .. because after __dirname we are in routes folder
router.get( '/', shopController.getIndex );

router.get( '/products', shopController.getProducts );

router.get( '/cart', shopController.getCart );

router.get( '/orders', shopController.getOrders );

router.get( '/checkout',  shopController.getCheckout );

module.exports = router;