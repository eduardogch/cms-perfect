var should = require('chai').should();
var request = require('request');
var net = require('net');
var actionhero = require('../../app.js').actionhero;
var api;
var client = {};
var client2 = {};
var client3 = {};

describe('TCP Socket Test', function() {
    before(function(done){
        actionhero.initialize(function(err, apiFromCallback){
            if(err) return console.error(err);
            api = apiFromCallback;
            connectClients(done)
        });
    });
    after(function(done){
        client.write('quit\r\n');
        client2.write('quit\r\n');
        client3.write('quit\r\n');
        done();
    });
    it('should single string message are treated as actions', function(done){
        makeSocketRequest(client, 'status', function(response){
            response.should.be.an.instanceOf(Object);
            response.id.should.equal(api.id);
            done();
        });
    });
    it('should stringified JSON can also be sent as actions', function(done){
        makeSocketRequest(client, JSON.stringify({action: 'status', params: {something: 'else'}}), function(response){
            response.should.be.an.instanceOf(Object);
            response.id.should.equal(api.id);
            done();
        });
    });
    it('should can get my details', function(done){
        makeSocketRequest(client2, 'detailsView', function(response){
            response.status.should.equal('OK');
            response.data.should.be.an.instanceOf(Object);
            response.data.params.should.be.an.instanceOf(Object);
            response.data.connectedAt.should.be.within(10, new Date().getTime());
            done();
        });
    });
    it('should a new param can be added', function(done){
        makeSocketRequest(client, 'paramAdd key=socketTestKey', function(response){
            response.status.should.equal('OK');
            done();
        });
    });
    it('should another new param can be added', function(done){
        makeSocketRequest(client, 'paramAdd value=abc123', function(response){
            response.status.should.equal('OK');
            done();
        });
    });
});

function makeSocketRequest(thisClient, message, cb){
    var lines = [];
    var rsp = function(d){
        d.split('\n').forEach(function(l){
            lines.push(l);
        });
        lines.push()
    };
    setTimeout(function(){
        var lastLine = lines[(lines.length - 1)];
        if(lastLine === ''){ lastLine = lines[(lines.length - 2)] }
        var parsed = null;
        try { parsed = JSON.parse(lastLine) } catch(e){}
        thisClient.removeListener('data', rsp);
        if(typeof cb === 'function'){ cb(parsed) }
    }, 100);
    thisClient.on('data', rsp);
    thisClient.write(message + '\r\n');
}

var connectClients = function(callback){
    setTimeout(function(){
        callback();
    }, 1000);
    client = net.connect(api.config.servers.socket.port, function(){
        client.setEncoding('utf8');
    });
    client2 = net.connect(api.config.servers.socket.port, function(){
        client2.setEncoding('utf8');
    });
    client3 = net.connect(api.config.servers.socket.port, function(){
        client3.setEncoding('utf8');
    });
};