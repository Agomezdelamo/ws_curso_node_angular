'use strict'
/**
 * ROUTER
 * ASOCIAMOS EL ENRUTADOR DE EXPRESS
 * CON LOS CONTROLLERS, METODOS QUE SE EJECUTAN
 * SEGUN LA RUTA
 */

//traemos express
var express = require('express');

//traemos el controlador con los metodos 
//a ejecutar por cada ruta
var favoritoCtrl = require('../controllers/favoritos');

//arrancamos el enrutador
var api = express.Router();

//y unimos ruta y controlador
api.get('/prueba/:nombre', favoritoCtrl.prueba);
api.get('/favorito/:id', favoritoCtrl.getFavorito);
api.get('/favoritos', favoritoCtrl.getFavoritos);
api.post('/favorito', favoritoCtrl.saveFavorito);
api.put('/favorito/:id', favoritoCtrl.updateFavorito);
api.delete('/favorito/:id', favoritoCtrl.deleteFavorito);

//exportamos el enrutador
module.exports = api;