'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//carga de rutas
var rutasAlbum = require('./routes/album-router');
var rutasImage = require('./routes/image-router');

//configurar responses post
app.use(bodyParser.urlencoded({ extendend: false }));
app.use(bodyParser.json());

//configurar cabeceras
//funcion que se ejecuta siempre que se haga una peticion a nuestro api, y evita CORS
//next, nos permite salir de la función cuando acabe de hacerse
app.use((req, res, next) => {
    //permite que cualquiera haga peticiones a nuestro apirest (CORS)
    res.header('Access-Control-Allow-Origin', '*');
    //cabeceras permitidas por el api
    res.header('Access-Control-Allow-Headers', 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method');
    //metodos permitidos por el api
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Allow', 'GET, POST, PUT, DELETE, OPTIONS');
    //salimos de la funcion
    next();
});

//rutas base
app.use('/api', rutasAlbum);
app.use('/api', rutasImage);

module.exports = app;