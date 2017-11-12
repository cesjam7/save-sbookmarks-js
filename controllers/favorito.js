'use strict'

var Favorito = require('../models/favorito');

function prueba (request, response) {
    if (request.params.nombre) {
        var nombre = request.params.nombre;
    } else {
        var nombre = 'sin nombre';
    }
    response.status(200).send({
        text: 'Hola '+nombre
    });
}

function getFavorito (request, response) {
    var favoritoId = request.params.id;
    response.status(200).send({data: favoritoId});
}

function getFavoritos (request, response) {

    Favorito.find({}).sort('-_id').exec((error, favoritos) => {
        if (error) {
            response.status(500).send({
                message: 'Error al devolver los marcadores'
            });
        }

        if (!favoritos) {
            response.status(404).send({message:'N hay marcadores'});
        }

        response.status(200).send({favoritos});
    })

}

function saveFavorito (request, response) {
    var favorito = new Favorito();

    var params = request.body;
    favorito.title = params.title;
    favorito.description = params.description;
    favorito.url = params.url;

    favorito.save((error, favoritoStored) => {
        if (error) {
            response.status(500).send({
                message: 'Error al guardar el marcador'
            });
        }

        response.status(200).send({
            favorito : favoritoStored
        });
    })

}

function updateFavorito (request, response) {
    var params = request.body;
    response.status(200).send({update : true, favorito : params});
}

function deleteFavorito (request, response) {
    var favoritoId = request.params.id;
    response.status(200).send({delete : true, data: favoritoId});
}

module.exports = {
    prueba,
    getFavorito,
    getFavoritos,
    saveFavorito,
    updateFavorito,
    deleteFavorito
}
