const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// Parses req.body (has next included to go to next route)
app.use(bodyParser.urlencoded({extended: false}));
// Serves static files (only read access), every request as import css automatically fowards it to specified folder (public)
app.use(express.static(path.join(__dirname, 'public')))

// Uses all adminRoutes (order matters if route.use is used, not post or get)
app.use( '/admin', adminRoutes);
// Uses all shopRoutes (order matters if route.use is used, not post or get)
app.use(shopRoutes);

// If no match in routes it will go to default '/' and display a 404 page
app.use((req, res, next) => {
	res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

app.listen(3000)