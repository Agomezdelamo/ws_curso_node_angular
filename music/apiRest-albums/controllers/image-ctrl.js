'use strict'

//cargamos los modelos
var path = require('path');
var album = require('../models/album');
var image = require('../models/image');
var fs = require('fs');

function pruebas(req, res) {
    res.status(200).send({ message: 'pruebas de controlador de imagenes' });
}

function getImage(req, res) {
    var imageId = req.params.id;

    image.findById(imageId, (err, image) => {
        if (err) {
            res.status(500).send({ message: "Error en la petición" });
        } else {
            if (!image) {
                res.status(404).send({ message: "No existe la imagen" });
            } else {
                //el metodo populate es la manera de enganchar la relacioin entre image y album
                //recibe 2 parametros
                //el objeto que tiene la forein key del album,
                //y cual es la propiedad de ese objeto que tiene la forein key
                album.populate(image, { path: 'album' }, (err, imageWithAlbum) => {
                    if (err) {
                        res.status(500).send({ message: "Error en la petición" });
                    } else {
                        res.status(200).send({ imageAlbum: imageWithAlbum });
                    }
                });
            }
        }
    })
}

function getImages(req, res) {
    var albumId = req.params.albumId;

    if (!albumId) {
        var find = image.find({}).sort('title');
    } else {
        //dentro del find estoy haciendo un where,
        //dame todas las imagenes donde su propiedad album,
        //coincida con el id de album que recibimos por la request
        var find = image.find({ album: albumId }).sort('title');
    }



    find.exec((err, images) => {
        if (err) {
            res.status(500).send({ message: 'Error en la petición' });
        } else {
            if (!images) {
                res.status(404).send({ message: 'No hay imagenes en este album' });
            } else {


                album.populate(images, { path: 'album' }, (err, imageWithAlbums) => {
                    if (err) {
                        res.status(500).send({ message: 'Error en la petición' });
                    } else {
                        res.status(200).send({ images: imageWithAlbums });
                    }
                })
            }
        }
    })
}

function updateImage(req, res) {
    var imageId = req.params.imageId;
    var imageUpdate = req.body;

    image.findByIdAndUpdate(imageId, imageUpdate, (err, imageUpdated) => {
        if (err) {
            res.status(500).send({ message: 'Error en la petición' });
        } else {
            if (!imageUpdated) {
                res.status(404).send({ message: 'No se ha actualizado la imagen !!' });
            } else {
                res.status(200).send({ image: imageUpdated });
            }
        }

    })
}

function deleteImage(req, res) {
    var imageId = req.params.imageId;

    image.findByIdAndRemove(imageId, (err, imageRemoved) => {
        if (err) {
            res.status(500).send({ message: 'Error en la petición' });
        } else {
            if (!imageRemoved) {
                res.status(404).send({ message: 'No se ha borrado la imagen !!' });
            } else {
                res.status(200).send({ image: imageRemoved });
            }
        }

    })
}

function saveImage(req, res) {
    var imageDb = new image();
    var params = req.body;
    imageDb.title = params.title;
    imageDb.picture = null;
    imageDb.album = params.album;

    imageDb.save((err, imageStored) => {
        if (err) {
            res.status(500).send({ message: 'Error en la petición' });
        } else {
            if (!imageStored) {
                res.status(404).send({ message: 'No se ha guardado la imagen !!' });
            } else {
                res.status(200).send({ image: imageStored });
            }
        }
    })
}

function uploadImage(req, res) {
    var imageId = req.params.imageId;
    var filename = 'no subido...';

    //accedemos a los ficheros enviados por http post
    if (req.file) {
        var file_name = req.file.originalname;

        fs.rename(req.file.destination + '/' + req.file.filename, req.file.destination + '/' + file_name, (err) => {
            if (err) {
                res.status(500).send({ message: 'Error en el servidor' });
            } else {
                image.findByIdAndUpdate(imageId, { picture: file_name }, (err, imageUpdated) => {
                    if (err) {
                        res.status(500).send({ message: 'Error en la petición' });
                    } else {
                        if (!imageUpdated) {
                            res.status(404).send({ message: 'No se ha actualizado la imagen !!' });
                        } else {
                            res.status(200).send({ image: imageUpdated });
                        }
                    }
                })
            }
        })
    } else {
        res.status(200).send({ message: 'no ha subido ninguna imagen' })
    }
}

function getImageFile(req, res) {
    var imageFile = req.params.imageFile;
    fs.exists('./uploads/' + imageFile, function(exists) {
        if (exists) {
            //devolver un archivo por cabecera http
            //path resolve indica la ruta de donde coger la imagen
            res.sendFile(path.resolve('./uploads/' + imageFile));
        } else {
            res.status(200).send({ message: 'No existe la imagen !!' });
        }
    })
}

module.exports = {
    pruebas,
    getImage,
    getImages,
    updateImage,
    uploadImage,
    getImageFile,
    deleteImage,
    saveImage
};