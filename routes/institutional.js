"use strict";
var express = require('express');
var router = express.Router();

router.get('/who-we-are',function(req, res){
  res.render('institutional/who_we_are');
});

router.get('/what-we-do',function(req, res){
  res.render('institutional/what_we_do');
});

router.get('/how-we-work',function(req, res){
  res.render('institutional/how_we_work');
});

router.get('/social-responsability',function(req, res){
  res.render('institutional/social_responsability');
});


module.exports = router;
