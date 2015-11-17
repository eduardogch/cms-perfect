var request = require('supertest');
var app = require('../../app.js').app;

describe('General Routes', function () {
    it('should return 200 in GET /', function (done) {
        request(app)
            .get('/')
            .expect(200, done);
    });
    it('should return 404 in GET /random-url', function (done) {
        request(app)
            .get('/reset')
            .expect(404, done);
    });
});

describe('Login and Signup Routes', function () {
    it('should return 200 in GET in /login', function (done) {
        request(app)
            .get('/login')
            .expect(200, done);
    });
    it('should return 200 OK in GET /signup', function (done) {
        request(app)
            .get('/signup')
            .expect(200, done);
    });
    it('should return 200 OK in GET /forgot', function (done) {
        request(app)
            .get('/forgot')
            .expect(200, done);
    });
    it('should return 302 OK in GET /logout', function (done) {
        request(app)
            .get('/logout')
            .expect(302, done);
    });
});

describe('BackEnd Routes', function () {
    it('should return 200 in GET /dashboard', function (done) {
        request(app)
            .get('/dashboard')
            .expect(302, done);
    });
    it('should return 200 in GET /account', function (done) {
        request(app)
            .get('/account')
            .expect(302, done);
    });
    it('should return 200 in GET /admin', function (done) {
        request(app)
            .get('/admin')
            .expect(302, done);
    });
    it('should return 200 in GET /payment', function (done) {
        request(app)
            .get('/payment')
            .expect(302, done);
    });
});