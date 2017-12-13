'use strict'
/**
 * DOCUMENTO PRINCIPAL
 * CARGA LA APP CON
 * 1. LAS SETTINGS
 * 2. LAS RUTAS
 * 3. LOS CONTROLLERS
 * 4. CONECTAMOS LA BASE DATOS Y ENTONCES
 * LA PONEMOS A ESCUCHAR EN UN PUERTO DENTRO DE LA MAQUINA
 */

//nos traemos el paquete de mongodb para orm mongoose
var mongoose = require('mongoose');
var app = require('./app');
//EL OBJETO [PROCESS] CONTROLA EL HILO DE FLUJO DE NODEJS
//esto coje una variable de entorno del sistema(env) que tenga el numero de puerto
var port = process.env.PORT || 3678;

//establecemos la conexion entre el orm y la base de datos del curso que esta en mongodb
mongoose.connect('mongodb://localhost:27017/cursoFavoritos', (err, res) => {
    if (err) {
        throw err;
    } else {
        console.log('conexion a MongoDb correcta');
        app.listen(port, function() {
            console.log('API REST ejecutandonse en servidor localhost:' + port);
            console.log('la variable de entorno de puerto es ' + process.env.PORT);
        });
    }
});