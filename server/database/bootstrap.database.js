const massive = require('massive');
//const connectionString = require('./connection.database.js');

let db;

massive(connectionString)
    .then( dbInstance => db = dbInstance )
    .catch( err => {throw err});