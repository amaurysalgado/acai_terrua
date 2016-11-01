"use strict";
var db = require('./../lib/db_connection');
class Model {

  constructor(table_name){
    this.table_name = table_name;
    this.query_finish = false;
  }

//   findVid(callback) {
//     for(var a = 0; a < videoIds.length; a++){
//         if(videoIds){
//             findVideo(videoIds[a], function(thumbnailPath, videoName){ // findVideo is the async function
//                 // it returns 2 values, thumbnailPath and videoName
//                 videoNames[a] = videoName; // and then these 2 values are written in the arrays
//                 thumbnaildPaths[a] = thumbnailPath;
//                 console.log('1');
//                 if (callback) callback(); //This will be called once it has returned
//             });
//         }
//     }
// }
  _execute_query(callback,query){
    var result_rows = [];
    this.query_finish = false;
    db.query(query, function(err, rows, fields){
      if(err) {
        this.query_finish = true;
        throw err;
      }
      if(callback) callback(rows, fields);
    });

  };

  getTableName(){
    return this.table_name;
  };

  get(callback, id){
    var query = 'SELECT * FROM '+this.table_name;
    this._execute_query(callback,query);
  };

  where(column, value){
    return "retorna um array com os item da tabela"
  }



}

module.exports = Model;
