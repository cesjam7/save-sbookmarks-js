'use strict'

var mongoose = require('mongoose');
// esto permite definir schemas u objetos de tipo schema para trabajar con un tipo de dato concreto
var Schema = mongoose.Schema;

var FavoritosSchema = Schema({
    title : String,
    description : String,
    url : String
});

// Mongoose pluraliza siempre el nombre de la coleccion siempre y cuando no lleve un numero al final
module.exports = mongoose.model('Favorito', FavoritosSchema);
