var gulp = require('gulp');
var secrets = require('./config/secrets');
var mongoose = require('mongoose');
var User = require('./models/User');

gulp.task('dbdrop', function() {
    mongoose.connect(secrets.mongoDB, function(){
        mongoose.connection.db.dropDatabase();
    });
});

gulp.task('dbpop', function() {
    mongoose.connect(secrets.mongoDB);
    var user = new User({
        email: 'eduardo.gch@gmail.com',
        password: '1234'
    });
    user.save(function(err) {
        if (err) console.log(err);
    });
});

gulp.task('default', function(){
    gulp.start('dbpop');
});