'use stict'

var mongoose = require('mongoose');
var schema = mongoose.Schema;

var albumSchema = schema({
    title: String,
    description: String
})

module.exports = mongoose.model('Album', albumSchema);