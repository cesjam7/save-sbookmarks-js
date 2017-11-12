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

    Favorito.findById(favoritoId, (error, favorito) => {
        if (error) {
            response.status(500).send({
                message: 'Error al devolver el marcador'
            });
        }

        if (!favorito) {
            response.status(404).send({message:'No hay marcador'});
        }

        response.status(200).send({favorito});

    })
}

function getFavoritos (request, response) {

    Favorito.find({}).sort('-_id').exec((error, favoritos) => {
        if (error) {
            response.status(500).send({
                message: 'Error al devolver los marcadores'
            });
        }

        if (!favoritos) {
            response.status(404).send({message:'No hay marcadores'});
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
    var favoritoId = request.params.id;
    var update = request.body;

    // id, datos a modificar y callback
    Favorito.findByIdAndUpdate(favoritoId, update, (error, favoritoUpdated) => {
        if (error) {
            response.status(500).send({
                message: 'Error al actualizar el marcador'
            });
        }
        // Va a devolver el anterior objeto, pero SI fue actualizado. Verificar.
        response.status(200).send({favoritoUpdated});

    });
}

function deleteFavorito (request, response) {
    var favoritoId = request.params.id;

    Favorito.findById(favoritoId, (error, favorito) => {
        if (error) {
            response.status(500).send({
                message: 'Error al devolver el marcador'
            });
        }

        if (!favorito) {
            response.status(404).send({message:'No hay marcador'});
        }

        favorito.remove(error => {
            if (error) {
                response.status(500).send({
                    message: 'Error al borrar'
                });
            } else {
                response.status(200).send(
                    {message : 'El marcador se ha borrado'}
                )
            }
        })
    })

}

module.exports = {
    prueba,
    getFavorito,
    getFavoritos,
    saveFavorito,
    updateFavorito,
    deleteFavorito
}
