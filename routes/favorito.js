'use strict'

var express = require('express');
var FavoritoController = require('../controllers/favorito');
var api = express.Router();

// Si ponemos un ? al final, hacemos que ese parametro personalizado sea opcional
api.get('/prueba/:nombre?', FavoritoController.prueba);

module.exports = api;
