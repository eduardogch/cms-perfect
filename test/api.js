var should = require('chai').should();
var request = require('supertest');

var actionhero = require('../app.js').actionhero;
var api = actionhero.api;
var url;

describe('actionhero Tests', function(){

    //before(function(done){
    //        url = 'http://localhost:' + api.config.servers.web.port;
    //});
    //
    //after(function(done){
    //    actionhero.stop(function(){
    //        done();
    //    });
    //});

    //it('Server should be up and return data', function(done){
    //    request.get(url + '/api/', function(err, response, body){
    //        body = JSON.parse(body);
    //        body.should.be.an.instanceOf(Object);
    //        done();
    //    });
    //});
    //
    //it('Server basic response should be JSON and have basic data', function(done){
    //    request.get(url + '/api/', function(err, response, body){
    //        body = JSON.parse(body);
    //        body.should.be.an.instanceOf(Object);
    //        body.requesterInformation.should.be.an.instanceOf(Object);
    //        done();
    //    });
    //});
    //
    //it('params work', function(done){
    //    request.get(url + '/api?key=value', function(err, response, body){
    //        body = JSON.parse(body);
    //        body.requesterInformation.receivedParams.key.should.equal('value')
    //        done();
    //    });
    //});

});