'use strict'

var express = require('express');
var controllers = require('../controllers/album-ctrl');
var api = express.Router();

api.get('/album/:id', controllers.getAlbum);
api.get('/albums', controllers.getAlbums);
api.post('/album', controllers.saveAlbum);
api.put('/album/:id', controllers.updateAlbum);
api.delete('/album/:id', controllers.deleteAlbum);

//publicamos el router
module.exports = api;