var should = require('chai').should();
var request = require('supertest');
var actionhero = require('../app.js').actionhero;
var api;

describe('Actionhero.js Tests', function(){
    before(function(done){
        actionhero.initialize(function(err, apiFromCallback){
            if(err) return console.error(err);
            api = apiFromCallback;
            done();
        });
    });
    it('should Actionhero.js Server be up and running', function(done){
        actionhero.api.running.should.true;
        done();
    });
    it('should Actionhero.js Server be initialized', function(done){
        actionhero.api.initialized.should.true;
        done();
    });
    it('should TCP Socket Server be up and running', function(done){
        api.config.servers.socket.enabled.should.true;
        done();
    });
    it('should TCP Web Server be up and running', function(done){
        api.config.servers.web.enabled.should.true;
        done();
    });
    it('should TCP WebSocket Server be up and running', function(done){
        api.config.servers.websocket.enabled.should.true;
        done();
    });
});