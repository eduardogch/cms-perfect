var should = require('chai').should();
var request = require('request');
var actionhero = require('../app.js').actionhero;
var api;
var url;

describe('REST Webservice Test', function() {
    before(function(done){
        actionhero.initialize(function(err, apiFromCallback){
            if(err) return console.error(err);
            api = apiFromCallback;
            url = 'http://localhost:' + api.config.servers.web.port;
            done();
        });
    });
    it('Server should be up and return data', function(done){
        request.get(url + '/api/randomNumber', function(err, response, body){
            body = JSON.parse(body);
            body.should.be.an.instanceOf(Object);
            done();
        });
    });
    it('Server basic response should be JSON and have basic data', function(done){
        request.get(url + '/api/', function(err, response, body){
            body = JSON.parse(body);
            body.should.be.an.instanceOf(Object);
            body.requesterInformation.should.be.an.instanceOf(Object);
            done();
        });
    });
    it('params are ignored unless they are in the whitelist', function(done){
        request.get(url + '/api?crazyParam123=something', function(err, response, body){
            body = JSON.parse(body);
            should.not.exist(body.requesterInformation.receivedParams.crazyParam123);
            done();
        });
    });
});