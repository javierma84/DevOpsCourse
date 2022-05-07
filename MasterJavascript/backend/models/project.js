'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Modelo de un proyecto en BD
var ProjectSchema = Schema({
    name: String,
    description: String,
    category: String,
    year: Number,
    langs: String,
    image: String
});

//Si mongoose no encuentra 'Project' en la BD lo pluraliza y lo pone en minúsculas => 'projects'
module.exports = mongoose.model('Project', ProjectSchema);