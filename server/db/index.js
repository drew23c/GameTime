var pg = require('pg-promise')({});
var connection = 'postgres://localhost/gametime';
var db = pg(connection);

module.exports = db;