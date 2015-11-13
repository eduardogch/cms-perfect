var gulp = require('gulp');
var r = require('rethinkdb');
var secrets = require('./config/secrets');
var thinky = require('thinky')(secrets.rethinkDB);
var type = thinky.type;

gulp.task('dbdrop', function() {
    r.connect({host: secrets.rethinkDB.host, port: secrets.rethinkDB.port, db: secrets.rethinkDB.db}, function(error, connection){
        r.dbDrop(secrets.rethinkDB.db).run(connection, function(error, result){
            if (error) console.log(error);
            if (result != null) {
                console.log('Database '+secrets.rethinkDB.db+' deleted');
            }
            else {
                console.log('Error: Database '+secrets.rethinkDB.db+' not deleted');
            }
        });
    });
});

gulp.task('dbpop', function() {
    // Create a model - the table is automatically created
    var Post = thinky.createModel("Post", {
        id: type.string(),
        title: type.string(),
        content: type.string(),
        idAuthor: type.string()
    });

    // Create a new post
    var post = new Post({
        title: "Hello World!",
        content: "This is an example."
    });

    // Save a new post
    post.saveAll(function(error, result) {
        if (error) {
            console.log(error);
        }
        else {
            console.log(result);
        }
    });
});

gulp.task('default', function(){
    gulp.start('dbpop');
});