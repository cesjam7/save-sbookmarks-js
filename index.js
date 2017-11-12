'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 3678;

// Vamos a ejecutar el middleware, el cual se ejecuta antes que se realize la petición http
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.listen(port, function() {
    console.log(`API REST FAVORITOS funcionando en http://localhost:${port}`);
})
