'use strict'

var express = require('express');
var router = express.Router();
var ctrl = require('../controllers/image-ctrl');


//modulo para subida de archivos
var multer = require('multer');

//definimos donde se va a subir el archivo
var multerMiddleware = multer({ dest: './uploads' });

router.get('/pruebas', ctrl.pruebas);
router.get('/image/:id', ctrl.getImage);
router.get('/images/:albumId?', ctrl.getImages);
router.post('/image', ctrl.saveImage);
router.put('/image/:imageId', ctrl.updateImage);
router.delete('/image/:imageId', ctrl.deleteImage);
//definimos la ruta y le metemos el middleware de multipart
router.post('/upload-image/:imageId', multerMiddleware.single('image'), ctrl.uploadImage);
router.get('/get-image/:imageFile', multerMiddleware.single('image'), ctrl.getImageFile);

module.exports = router;