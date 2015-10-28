/**
 * Node Module to create just one instance in Thinky models
 */
var config = require('./../config/secrets.js');
var thinky = require('thinky')(config.rethinkdb);
module.exports = thinky;