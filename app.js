'use strict';

var port = process.env.port || 3000

var express = require('express');
var app = express();


var morgan = require('morgan');
var expressLayouts = require('express-ejs-layouts');


// set layout render
app.set('view engine', 'ejs');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);

/* routes */

app.use(morgan('tiny'))
app.use(express.static(__dirname + '/public'));

var contacts = require('./routes/contacts');
var products = require('./routes/products');
app.use('/contact', contacts);
app.use('/products', products);


app.get('/', function(req, res){
  res.render('index');
});



app.listen(port, function(){
  console.log('Example app listening on port '+port+'!');
});
