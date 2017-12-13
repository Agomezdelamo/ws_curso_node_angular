'use strict'

/**
 * mapeo orm del dominio que representa la entidad favoritos 
 * 
 * PARA MONGOOSE, LAS ENTIDADES EN DB SE GUARDAN EN PLURALES 
 * en este caso 'favoritos'
 */

//1. traemos el orm mongoose
var mongoose = require('mongoose');
//2. objeto para definir schemas(mapeos)
var Schema = mongoose.Schema;

//3. definimos el schema de la entidad favorito
var FavoritoSchema = Schema({
    title: String,
    description: String,
    url: String
});

//4. exportamos el modelo, asociando un string al mapeo, para poder llamar 
//al modelo favorito y que tire del schema que define una entidad 'favorito'
module.exports = mongoose.model('Favorito', FavoritoSchema);