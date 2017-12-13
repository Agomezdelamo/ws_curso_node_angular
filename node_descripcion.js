'use strict'

//NODE JS es un [ENTORNO DE PROGRAMACION] O [PLATAFORMA DE DESARROLLO]
//GRACIAS AL V8, tu escribes en javascript la parte de servidor
//pero el v8 lo compila y traduce a c++, con lo que las operaciones
//en el ordenador son mucho mas rapidas, puesto que es un lenguaje más 
//facil de manejar para el ordenador

/* un entorno de programación tiene:
1. sintaxis
2. compilador que lo interpreta y ejecuta
3. mecanismos para interactuar con el exterior(acceso a ficheros, sistema operativo, acceder a ftp, mandar mail, etc...)
4. libreria estandar
5. utilidades (pruebas unitarias, paquetes, interprete)

//una de las ventajas de node es que una conexión no bloquea la ejecucion en el servidor,
//mediante eventos con callbacks, nunca te quedas esperando, la ejecución continua.

*******************************************
*******[ENTORNO DE PROGRAMACION]***********
*******************************************
1.1. MAQUINA VIRTUAL DE CHROME V8 se encarga de la parte 1 y 2 del entorno de programacion.
    la maquina virtual V8 de node (escrita en c++) 
    -LENGUAJE, tiene la gramatica javascript, 
    -MAQUINA VIRTUAL, la compila y la ejecuta.
1.2 NODE JS se encarga de la 3, 4 y 5.
    -EXTERIOR, Acceder al sistema operativo
    -CORE, Tiene las librerias estandar, clases definidas para crear un servidor, acceder a ficheros, crear sockets
    -UTILIDADES, node package manager para instalar librerias o frameworks.

*******************************************
*******[FRAMEWORK]*************************
*******************************************
Nodejs tiene
    -LENGUAJE, JS
    -MOTOR, V8
    -ENTORNO, MODULOS DEL CORE
    -FRAMEWORKS, EXPRESS
*/

//******LIBRERIAS IMPORTADAS***********//
//cargamos el paquete ya instalado express
var express = require('express');
//middleware, metodo que se ejecuta antes que lo que pase en node
//parsea los parametros del body de la request a objeto javascript
var bodyParser = require('body-parser');

//inicializamos express, ejecutamos el constructor
var app = express();

//EL OBJETO [PROCESS] CONTROLA EL HILO DE FLUJO DE NODEJS
//esto coje una variable de entorno del sistema(env) que tenga el numero de puerto
var port = process.env.PORT || 4441;

//ejecutamos un middleware para arrancar un modulo antes que la peticion http
//a traves de un middleware que se ejecuta antes que http
app.use(function() {
    bodyParser.urlencoded({ extended: false });
});

//observamos la peticion y aqui devolvemos un json 
app.use(bodyParser.json());


app.listen(port, function() {
    console.log('API REST ejecutandonse en servidor funcionando localhost:' + port);
});