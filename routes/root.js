var express = require('express');
var router = express.Router();

router.route('/')
  .get(function(req, res){
    res.render('index',{layout: false, index: true});
  });


module.exports = router;
