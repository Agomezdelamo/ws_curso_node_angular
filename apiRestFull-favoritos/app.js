'use strict'

/** APP * DEFINIMOS LOS SETTINGS DE EXPRESS
 * 1. ROUTES | 2. BODYPARSERS */

//cargamos el paquete ya instalado express y body parser
var express = require('express');
var bodyParser = require('body-parser');
//cargamos el fichero que define las rutas y los metodos que se ejecutan por cada una
var api = require('./routes/favoritos-routes');
//inicializamos express, ejecutamos el constructor
var app = express();

//MIDDLEWARES
//ANTES DE RECIBIR LA PETICION HTTP SE EJECUTA ESTE CODIGO
//este middleware analiza un post con contentype urlencoded, y lo transfomra a un objeto javascript
app.use(bodyParser.urlencoded({ extended: false }));
//este middleware analiza un post con contentype json, y lo transfomra a un objeto javascript
app.use(bodyParser.json());
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

/** RUTAS */
//asociamos un prefijo de ruta, al objeto que almacena todas las rutas,
//una vez accedes por el navegador al prefijo, todo el ruteo por debajo esta 
//cargado
app.use('/api', api);

//exportamos el modulo app(express) para poder importarlo por otros ficheros
module.exports = app;