"use strict";
var db = require('./../lib/db_connection');
class Model {

  constructor(table_name){
    this.table_name = table_name;
    this.fields = [];
    var self = this;
    var query = "SELECT * FROM "+ this.table_name+" limit 1; ";
    this._execute_query(query, function(err, rows, fields){
      var i = 0;
      var length = fields.length;
      for (i; i < length; i++){
        self.fields.push(fields[i].name)
      }
      console.log(self.fields);
    });

  }

  _execute_query(query,callback){
    db.query(query, function(err, rows, fields){
      if(err) throw err;

      callback(err, rows, fields);
    });
  };

  getTableName(){
    return this.table_name;
  };

  getColumns(){
    return this.fields;
  }
  get(id, callback){
    var query = 'SELECT * FROM '+this.table_name+' WHERE id = '+db.escape(id)+' limit 1;';
    console.log(query);
    this._execute_query(query, function (err, data, fields) {
      if (data.length > 0){
        callback(err, data[0],fields);
      }else{
        callback(err, [],fields);
      }
    });
  };

  where(column, value, callback){
    var query = 'SELECT * FROM '+this.table_name+' '+db.escape(column)+' = '+db.escape(value)+';';
    console.log(query);

    this._execute_query(query, function(err, data, fields){
      if (data.length > 0){
        callback(err, data[0],fields);
      }else{
        callback(err, [],fields);
      }
    });
  };

  save(){
    var query = 'SELECT * FROM '+this.table_name+' '+db.escape(column)+' = '+db.escape(value)+';';
    console.log(query);
  }

}

module.exports = Model;
