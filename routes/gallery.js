"use strict";
var express = require('express');
var router = express.Router();
var glob = require("glob");

router.route('/')
  .get(function(req, res){
    glob("public/images/*", function (er, files) {
      var photos = [];
      var temp = null;
      while (files.length > 3) {
        temp = files.splice(3);
        photos.push(files);
        files = temp
      }
      res.render('gallery/index', {photos: photos });
    });
  });

module.exports = router;
