"use strict";
var express = require('express');
var router = express.Router();


router.route('/')
  .get(function(req, res){
    res.render('galery/index');
  });

module.exports = router;
