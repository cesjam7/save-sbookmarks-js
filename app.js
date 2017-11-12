'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Vamos a ejecutar el middleware, el cual se ejecuta antes que se realize la petición http
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Si ponemos un ? al final, hacemos que ese parametro personalizado sea opcional
app.get('/prueba/:nombre?', (request, response) => {
    if (request.params.nombre) {
        var nombre = request.params.nombre;
    } else {
        var nombre = 'sin nombre';
    }
    response.status(200).send({
        text: 'Hola '+nombre
    });
});

module.exports = app;
