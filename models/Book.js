var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
    year: String,
    name: String
});

module.exports = mongoose.model('Book', bookSchema);