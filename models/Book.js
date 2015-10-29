/**
 * Model: Book
 */
var thinky = require('../app.js');
var type = thinky.type;

var Book = thinky.createModel("Book", {
    id: type.string(),
    name: type.string(),
    age: type.number()
});

module.exports = Book;