"use_strict";

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : process.env.HOST || 'localhost',
  user     : process.env.DB_USER || 'acai_terrua',
  password : process.env.PASS || 'acai',
  database : process.env.BASE || 'acai_terrua'
});

module.exports = connection;
