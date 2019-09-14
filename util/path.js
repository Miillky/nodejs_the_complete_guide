const path = require('path');

// process.mainModule.filename returns where the main module is, our app.js file and with path.dirname we return path of this directory
module.exports = path.dirname(process.mainModule.filename)