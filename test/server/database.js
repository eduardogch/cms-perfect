var should = require('chai').should();
var request = require('supertest');
var secrets = require('../../config/secrets');
var thinky = require('../../app.js').thinky;
var r = thinky.r;
var tableName = 'test'+ Math.floor(Math.random() * 100) + 1;

describe('Admin RethinkDB database', function() {
    it('should return name of the database', function (done) {
        r.db(secrets.rethinkDB.db).info().run().then(function(result) {
            result.name.should.equal(secrets.rethinkDB.db);
            done();
        });
    });
    it('should return type of the database', function (done) {
        r.db(secrets.rethinkDB.db).info().run().then(function(result) {
            result.type.should.equal('DB');
            done();
        });
    });
    it('should create a table in the database', function (done) {
        r.db(secrets.rethinkDB.db).tableCreate(tableName).run().then(function(result) {
            result.tables_created.should.equal(1);
            done();
        });
    });
    it('should read a table in the database', function (done) {
        var data = {
            id: 1,
            title: "Lorem ipsum",
            content: "Dolor sit amet"
        };
        r.db(secrets.rethinkDB.db).table(tableName).insert(data).run().then(function(result) {
            result.errors.should.equal(0);
            done();
        });
    });
    it('should update a table in the database', function (done) {
        r.db(secrets.rethinkDB.db).table(tableName).update({title: "Updated"}).run().then(function(result) {
            result.errors.should.equal(0);
            done();
        });
    });
    it('should delete a table in the database', function (done) {
        r.db(secrets.rethinkDB.db).tableDrop(tableName).run().then(function(result) {
            result.tables_dropped.should.equal(1);
            done();
        });
    });
});