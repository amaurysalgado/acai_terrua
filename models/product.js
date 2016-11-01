'use strict';
var Model = require("./model");

class  Product extends Model{
  getItem(){
    return "função do produto";
  };
};
module.exports = new Product("products");
