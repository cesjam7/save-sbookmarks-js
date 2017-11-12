'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3678;

// puerto por default 27017
// tengo una base de datos ya creada llamada 'cursofavoritos'
mongoose.connect('mongodb://localhost:27017.cursofavoritos', (error, response) => {

    if (error) {
        throw error;
    } else {
        console.log('Conexion a MongoDB correcta');
        app.listen(port, () => {
            console.log(`API REST FAVORITOS funcionando en http://localhost:${port}`);
        })
    }

});
