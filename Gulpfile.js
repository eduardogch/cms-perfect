var gulp = require('gulp');
var secrets = require('./config/secrets');
var thinky = require('thinky')(secrets.rethinkDB);
var r = thinky.r;
var type = thinky.type;

gulp.task('dbdrop', function() {
    r.dbDrop(secrets.rethinkDB.db).run().then(function(result) {
        if (result.dbs_dropped == 1) {
            console.log('Database '+secrets.rethinkDB.db+' deleted');
        }
        else {
            console.log('Error: Database '+secrets.rethinkDB.db+' not deleted');
        }
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