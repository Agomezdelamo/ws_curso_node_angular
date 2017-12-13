'use strict'

var mongoose = require('mongoose');
var schema = mongoose.Schema;

var imageSchema = schema({
    title: String,
    picture: String,
    // relacion imagen y album, 
    //creamos un campo llamado album de tipo ObjectId de clase Album
    album: {
        type: schema.ObjectId, //propiedad del schema a la que apuntamos
        ref: 'Album' //entidad de schema en mongo a la que  apuntamos
    }
})

//mongodb luego lo guarda pluralizado, es decir, como una colección llamada images
module.exports = mongoose.model('Image', imageSchema);