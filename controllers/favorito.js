'use strict'

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

}

function saveFavorito (request, response) {
    var params = request.body;
    response.status(200).send({favorito : params});
}

function updateFavorito (request, response) {
}

function deleteFavorito (request, response) {
}

module.exports = {
    prueba,
    getFavorito,
    saveFavorito,
    updateFavorito,
    deleteFavorito
}
