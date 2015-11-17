var should = require('chai').should();
var request = require('request');
var actionhero = require('../../app.js').actionhero;
var api;
var url;

describe('WebSocket Test', function() {
    before(function(done){
        actionhero.initialize(function(err, apiFromCallback){
            if(err) return console.error(err);
            api = apiFromCallback;
            url = 'http://localhost:' + api.config.servers.web.port;
            done();
        });
    });
    it("Test Websocket", function (done) {
        //TODO test in Websockets
        true.should.be.true;
        done();
    });
});