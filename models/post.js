'use strict';
var Model = require("./model");

// Model.prototype.getItem = function(){
//   return "função do post";
// };

class Post extends Model{
  getItem(){
    return "função do post";
  };
};

module.exports = new Post("posts");
