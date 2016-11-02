'use strict';

var port = process.env.PORT || 3000
var express = require('express');
var app = express();


/* set layout render */
var expressLayouts = require('express-ejs-layouts');
app.set('view engine', 'ejs');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);


/* console logs */
var morgan = require('morgan');
app.use(morgan('tiny'))


/* public files */
app.use(express.static(__dirname + '/public'));


/* routes */
var root_path = require('./routes/root');
var contacts = require('./routes/contacts');
var products = require('./routes/products');
app.use('/', root_path);
app.get('*', function(req, res){
  res.redirect('/');
});
app.use('/contact', contacts);
app.use('/products', products);


/* start server in a specific port */
app.listen(port, function(){
  console.log('Example app listening on port '+port+'!');
});
