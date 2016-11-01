"use_strict";

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'acai_terrua',
  password : 'acai',
  database : 'acai_terrua'
});


module.exports = connection;
