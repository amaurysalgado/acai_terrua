'use strict';
var Model = require("./model");

class Post extends Model{
  getItem(){
    return "função do post";
  };
};

module.exports = new Post("posts");
