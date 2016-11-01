"use strict";

// var Model = function(class_name){
//   var class_name = class_name;
//
//   this.getTableName = function(){
//     return class_name;
//   };
//
//   this.get = function(id){
//     return "método do model";
//   };
// }

class Model {
  constructor(table_name){
    this.table_name = table_name;
  }

  getTableName(){
    return this.table_name;
  };

  get(id){
    return "método do model";
  };
}

module.exports = Model;
