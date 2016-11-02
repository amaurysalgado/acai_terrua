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
  };

  get(id, callback){
    var query = 'SELECT * FROM '+this.table_name+' WHERE id = '+db.escape(id)+' limit 1;';
    this._execute_query(query, function (err, data, fields) {
      console.log(query);
      if (data.length > 0){
        callback(err, data[0],fields);
      }else{
        callback(err, [],fields);
      }
    });
  };

  where(column, value, callback){
    var query = 'SELECT * FROM '+this.table_name+' '+db.escape(column)+' = '+db.escape(value)+';';

    this._execute_query(query, function(err, data, fields){
      console.log(query);
      if (data.length > 0){
        callback(err, data[0],fields);
      }else{
        callback(err, [],fields);
      }
    });
  };

  insert(data, callback){
    var fields_to_set = [];
    var key = "";
    var fields = this.getColumns();
    for (key in data){
      // console.log(this.fields.contains("name"));
      if (this.fields.includes(key)){
        fields_to_set.push(key+" = "+ db.escape(data[key]));
      }
    }

    if(fields_to_set.length > 0){
      var query = "INSERT INTO "+this.table_name+" SET ";
      fields_to_set = fields_to_set.join(", ");
      query = query+fields_to_set;
      console.log(query);
      this._execute_query(query, callback);
    }else {
      callback(false, [])
    }

  }

}

module.exports = Model;
