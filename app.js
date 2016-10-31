'use strict';

var express = require('express');
var app = express();
// var morgan = require('morgan');
var expressLayouts = require('express-ejs-layouts');
var port = process.env.port || 3000

// set layout render
app.set('view engine', 'ejs');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);


app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res,next){
  res.render('index');
});

app.get('/contact', function(req, res,next){
  res.render('contact');
});

app.listen(port, function(){
  console.log('Example app listening on port '+port+'!');
});
