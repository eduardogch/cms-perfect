/**
 * Script to play with some fake data.
 * run: node deleteDB.js
 */
var r = require('rethinkdb');
var secrets = require('../config/secrets');
var connection;

// Connect
var connect = function() {
    r.connect({
        host: secrets.rethinkDB.host,
        port: secrets.rethinkDB.port,
          db: secrets.rethinkDB.db
    }, function(error, conn) {
        if (error) throw error;
        connection = conn;
        deleteDatabase();
    });
};

// Delete the database
var deleteDatabase = function() {
    r.dbDrop(secrets.rethinkDB.db).run(connection, function(error, result) {
        if (error) console.log(error);
        if (result != null) {
            console.log('Database '+secrets.rethinkDB.db+' deleted');
        }
        else {
            console.log('Error: Database '+secrets.rethinkDB.db+' not deleted');
        }
    })
};

// Roll out everything
connect();