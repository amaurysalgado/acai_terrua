'use strict';

var port = process.env.PORT || 3000;
var express = require('express');
var app = express();
var bodyParser = require('body-parser')


app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

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
var gallery = require('./routes/gallery');
var sustentability = require('./routes/sustentability');
var institutional = require('./routes/institutional');
app.use('/', root_path);
app.use('/contact', contacts);
app.use('/gallery', gallery);
app.use('/sustentability', sustentability);
app.use('/institutional', institutional);

// redirect to root undefined routs
app.get('*', function(req, res){
  res.redirect('/');
});


/* start server in a specific port */
app.listen(port, function(){
  console.log('Listening on port '+port+'!');
});
