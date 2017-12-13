'use strict'

/**
 * IMPORTAMOS LOS MODELOS DEL MAPEO
 */
var Favorito = require('../models/favorito');


/**
 * CONTROLLERS
 * METODOS QUE SE ASOCIARAN A RUTAS
 */

//0. metodo prueba
function prueba(req, res) {
    //recibimos el parametro nombre y lo concatenamos al texto de la response
    var nombreparam;
    if (req.params.nombre) {
        nombreparam = req.params.nombre;
    } else {
        nombreparam = 'SIN NOMBRE';
    }
    res.status(200).send({
        data: [2, 3, 4],
        texto: 'Hola mundo con node js y express --> ' + nombreparam
    });
}

//1. metodo que obtiene un favorito
function getFavorito(req, res) {
    var favoritoId = req.params.id;

    Favorito.findById(favoritoId, function(err, favorito) {
        if (err) {
            res.status(500).send({ message: 'Error al devolver el marcador' });
        } else {
            if (!favorito) {
                res.status(404).send({ message: 'No hay marcador' });
            } else {
                res.status(200).send({ favoritoRecuperadoDB: favorito });
            }
        }
    })
}
//2. metodo que obtiene una lista de favoritos
function getFavoritos(req, res) {
    //buscamos todos los favoritos y los ordenamos por un criterio antes de retornarlos
    Favorito.find({}).sort('_id').exec((err, favoritosList) => {
        if (err) {
            res.status(500).send({ message: 'Error al devolver los marcadores' })
        } else {
            if (!favoritosList) {
                res.status(404).send({ message: 'No hay marcadores' });
            } else {
                res.status(200).send({ favoritosList });
            }
        }
    })
}
//3. metodo que guarda un favorito
function saveFavorito(req, res) {
    //creamos el objeto a guardar
    var favorito = new Favorito();

    var params = req.body;

    //seteamos el objeto para db con lo que viene por la request
    favorito.title = params.title;
    favorito.description = params.description;
    favorito.url = params.url;

    //guardamos en mongodb
    favorito.save((err, favoritoStored) => {
        if (err) {
            res.status(500).send({ message: 'Error al guardar el marcador' });
        } else {
            //con send, en la respuesta devolvemos lo que hemos pasado por el post
            res.status(200).send({ favorito: favoritoStored });
        }
    })
}

//4. metodo que actualiza un favorito
function updateFavorito(req, res) {
    var updateParams = req.body;
    var favoritoId = req.params.id;

    Favorito.findByIdAndUpdate(favoritoId, updateParams, (err, favoritoUpdated) => {
        if (err) {
            res.status(500).send({ message: 'Error al actualizar el marcador' });
        } else {
            //cono send, en la respuesta devolvemos lo que hemos pasado por el post
            //y un booleano que indica que se a actualizado
            res.status(200).send({ update: true, returnedFavorito: favoritoUpdated });
        }
    });

}
//5. metodo que elimina un favorito
function deleteFavorito(req, res) {
    var favoritoId = req.params.id;
    Favorito.findById(favoritoId, function(err, favoritoDB) {
        if (err) {
            res.status(500).send({ message: 'Error al devolver el marcador' });
        }
        if (!favoritoDB) {
            res.status(404).send({ message: 'No hay marcador' });
        } else {
            favoritoDB.remove(err => {
                if (err) {
                    res.status(500).send({ message: 'El marcador no se ha eliminado' });
                } else {
                    res.status(200).send({ message: 'El marcador se ha eliminado' });
                }
            });
        }
    })
}


//exportamos un objeto con todas las funciones
module.exports = {
    prueba,
    getFavorito,
    getFavoritos,
    saveFavorito,
    updateFavorito,
    deleteFavorito
}