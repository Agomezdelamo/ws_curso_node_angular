'use strict'

var Album = require('../models/album');

function getAlbum(req, res) {
    //cojemos el parametro de la request llamado "id"
    var albumId = req.params.id;

    //Accedemos al dao 
    Album.findById(albumId, (err, album) => {
        //si hay un error
        if (err) {
            //el servidor devuelve una respuesta codigo 500 con un objeto que lleva un mensaje
            return res.status(500).send({ message: 'Error en la petición' });
        } else {
            if (!album) {
                return res.status(404).send({ message: 'El album no existe' });
            } else {
                res.status(200).send({ album })
            }
        }

    });
}

function getAlbums(req, res) {

    //Accedemos al dao 
    Album.find({}, (err, albums) => {
        //si hay un error
        if (err) {
            //el servidor devuelve una respuesta codigo 500 con un objeto que lleva un mensaje
            return res.status(500).send({ message: 'Error en la petición' });
        } else {
            if (!albums) {
                return res.status(404).send({ message: 'No hay albums' });
            } else {
                res.status(200).send({ albums })
            }
        }

    });
}

function saveAlbum(req, res) {
    var album = new Album();

    var params = req.body;
    album.title = params.title;
    album.description = params.description;

    album.save((err, albumStored) => {
        if (err) {
            return res.status(500).send({ message: 'Error al guardar el album' });
        } else {
            if (!albumStored) {
                res.status(404).send({ message: 'No se ha guardado albums' });
            } else {
                res.status(200).send({ album: albumStored });
            }
        }
    })

}

function updateAlbum(req, res) {
    var albumId = req.params.id;
    var body = req.body;

    Album.findByIdAndUpdate(albumId, body, (err, albumStored) => {
        if (err) {
            res.status(500).send({ message: "Error al guardar el album" });
        } else {
            if (!albumStored) {
                res.status(404).send({ message: "No se ha guardado el album" });
            } else {
                res.status(200).send({ album: albumStored });
            }
        }
    })
}

function deleteAlbum(req, res) {
    var albumId = req.params.id;

    Album.findByIdAndRemove(albumId, (err, albumRemoved) => {
        if (err) {
            res.status(500).send({ message: "Error al borrar el album" });
        } else {
            if (!albumRemoved) {
                res.status(404).send({ message: "No se ha borrado el album" });
            } else {
                res.status(200).send({ album: albumRemoved });
            }
        }
    });
}
//publicamos los metodos del api rest
module.exports = {
    getAlbum,
    saveAlbum,
    updateAlbum,
    deleteAlbum,
    getAlbums
}