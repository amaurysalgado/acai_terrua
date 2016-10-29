'use strict';

var express = require('express');
var app = express();
var morgan = require('morgan');
var port = process.env.port || 3000

app.set('view engine', 'ejs');
app.use(function(req, res, next){
  console.log();
  next();
})
app.use(morgan('tiny'));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res,next){
  res.render('index');
});

app.listen(port, function(){
  console.log('Example app listening on port '+port+'!');
});
