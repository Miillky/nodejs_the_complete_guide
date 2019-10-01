const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const app = express();

// Register template engine's
// PUG
//app.set('view engine', 'pug'); // build in express support, autoregisters itself

//HANDLEBARS
/* const expressHbs = require('express-handlebars'); // not part of express so we need to require it
app.engine(
  'hbs',
  expressHbs({
    layoutsDir: 'views/layouts/',
    defaultLayout: 'main-layout',
    extname: 'hbs'
  })
);
app.set('view engine', 'hbs'); */

//EJS
app.set('view engine', 'ejs');

app.set('views', 'views'); // compile templates with puck as views (default) in foolder views

//const adminRoutes = require('./routes/admin');
//const adminData = require('./routes/admin');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// Parses req.body (has next included to go to next route)
app.use(bodyParser.urlencoded({extended: false}));
// Serves static files (only read access), every request as import css automatically fowards it to specified folder (public)
app.use(express.static(path.join(__dirname, 'public')))

// Uses all adminRoutes (order matters if route.use is used, not post or get)
//app.use( '/admin', adminRoutes);
//app.use( '/admin', adminData.routes);
app.use( '/admin', adminRoutes );
// Uses all shopRoutes (order matters if route.use is used, not post or get)
app.use(shopRoutes);

// If no match in routes it will go to default '/' and display a 404 page
app.use(errorController.get404)

app.listen(3000)