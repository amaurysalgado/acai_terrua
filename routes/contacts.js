var express = require('express');
var router = express.Router();
var product = require('./../models/product');
router.route('/')
  .get(function(req, res){
    var products = product.get(function(data){
      console.log(data[0]);
      res.render('contact');
    });
  });

module.exports = router;
