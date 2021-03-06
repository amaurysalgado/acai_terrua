"use strict";
var db = require('./../lib/db_connection');
class Model {

  constructor(table_name){
    this.table_name = table_name;
    this.fields = [];
    var self = this;
    var query = "SELECT * FROM "+ this.table_name +" limit 1; ";
    this._execute_query(query, function(err, rows, fields){
      var i = 0;
      var length = fields.length;
      for (i; i < length; i++){
        // save the columns of the table
        self.fields.push(fields[i].name)
      }
    });

  }

  _execute_query(query,callback){
    console.log("SQL - "+query);
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
      if (data.length > 0){
        callback(err, data[0],fields);
      }else{
        callback(err, [],fields);
      }
    });
  };

  insert(data, callback){
    delete data['id'];
    var fields_to_set = [];
    var key = "";
    for (key in data){
      if (this.fields.includes(key)){
        fields_to_set.push(key+" = "+ db.escape(data[key]));
      }
    }

    if(fields_to_set.length > 0){
      var query = "INSERT INTO "+this.table_name+" SET ";
      fields_to_set = fields_to_set.join(", ");
      query = query+fields_to_set;
      this._execute_query(query, callback);
    }else {
      callback(false, [])
    }
  };

  update(id, data,callback){
    delete data["id"];
    var fields_to_set = [];
    var key = "";
    for (key in data){
      if (this.fields.includes(key)){
        fields_to_set.push(key+" = "+ db.escape(data[key]));
      }
    }

    if(fields_to_set.length > 0){
      var query = "UPDATE "+this.table_name+" SET ";
      fields_to_set = fields_to_set.join(", ");
      query = query+fields_to_set;
      query = query+" WHERE id = "+db.escape(id);
      this._execute_query(query, callback);
    }else {
      callback(false, [])
    }
  };

  delete_by_id(id, callback){
    var query = "DELETE FROM "+this.table_name+" WHERE ID = " + db.escape(id)+";"
    this._execute_query(query, callback);
  };

  // @condition - should be escaped before call this function
  delete_by_condition(condition, callback){
    var query = "DELETE FROM "+this.table_name+" WHERE " + condition +";"
    this._execute_query(query, callback);
  };
}

module.exports = Model;
