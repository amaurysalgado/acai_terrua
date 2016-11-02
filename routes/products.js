var express = require('express');
var router = express.Router();
// var product = require('./../models/product');
router.route('/')
  .get(function(req, res){
    prod = {name: "meu produto", descriptions: "um produto que é meu", value: 10.1 }
    product.insert(prod,function(err, data){
      res.render('contact');
    });

  });

module.exports = router;
