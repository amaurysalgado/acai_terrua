var express = require('express');
var router = express.Router();
// var product = require('./../models/product');
// var post = require('./../models/post');


router.route('/')
  .get(function(req, res){
    res.render('contact');
  });

module.exports = router;
