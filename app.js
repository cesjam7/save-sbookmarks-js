'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var api = require('./routes/favorito');

// Vamos a ejecutar el middleware, el cual se ejecuta antes que se realize la petición http
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/api', api);

module.exports = app;
