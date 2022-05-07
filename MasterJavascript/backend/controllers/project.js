'use strict'

var Project = require('../models/project');
var fs = require('fs');
var path = require('path');

var controller = {
    home: function (req, res) {
        return res.status(200).send({
            message: 'Soy la home'
        });
    },

    test: function (req, res) {
        return res.status(200).send({
            message: 'Soy el metodo o accion test del controlador de project'
        });
    },

    saveProject: function (req, res) {
        var project = new Project();

        var params = req.body;
        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.year = params.year;
        project.langs = params.langs;
        project.image = null;

        project.save((error, projectStored) => {
            if (error) return res.status(500).send({ message: 'Error al guardar el documento.' });
            if (!projectStored) return res.status(404).send({ message: 'No se ha podido guardar' });
            return res.status(200).send({ project: projectStored });
        });
    },

    getProject: function (req, res) {
        var projectId = req.params.id;

        if (projectId == null) return res.status(404).send({ message: 'El proyecto no existe.' });

        Project.findById(projectId, (error, project) => {
            if (error) return res.status(500).send({ message: 'Error al devolver los datos.' });
            if (!project) return res.status(404).send({ message: 'El proyecto no existe.' })
            return res.status(200).send({
                project
            });
        });
    },

    getProjects: function (req, res) {
        Project.find().sort('-year').exec((error, projects) => {
            if (error) return res.status(500).send({ message: 'Error al devolver los datos.' });
            if (!projects) return res.status(404).send({ message: 'Proyectos no encontrados.' });
            return res.status(200).send({
                projects
            })
        });
    },

    updateProject: function (req, res) {
        var projectId = req.params.id;
        var update = req.body;
        //El {new: true} es porque por defecto devuelve el documento antiguo y no el actualizado
        Project.findByIdAndUpdate(projectId, update, { new: true }, (error, projectUpdated) => {
            if (error) return res.status(500).send({ message: 'Error al actualizar los datos.' });
            if (!projectUpdated) return res.status(404).send({ message: 'Proyecto no encontrado.' });
            return res.status(200).send({
                project: projectUpdated
            })
        });
    },

    deleteProject: function (req, res) {
        var projectId = req.params.id;
        Project.findByIdAndRemove(projectId, (error, projectDeleted) => {
            if (error) return res.status(500).send({ message: 'Error al borrar los datos.' });
            if (!projectDeleted) return res.status(404).send({ message: 'Proyecto no encontrado.' });
            return res.status(200).send({
                project: projectDeleted
            });
        });
    },

    uploadImage: function (req, res) {
        var projectId = req.params.id;
        var fileName = 'Imagen no subida...';
        //requiere middleware multiparty en projects routes
        if (req.files) {
            var filePath = req.files.image.path;
            var fileSplit = filePath.split('\\');
            var fileName = fileSplit[1];
            var extSplit = fileName.split('\.'); //Extensión
            var fileExt = extSplit[1];
            fileExt = fileExt.toLowerCase();

            if (fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif') {
                Project.findByIdAndUpdate(projectId, { image: fileName }, { new: true }, (error, projectUpdated) => {
                    if (error) return res.status(500).send({ message: 'Error al actualizar la imagen.' });
                    if (!projectUpdated) return res.status(404).send({ message: 'Proyecto no encontrado.' });
                    return res.status(200).send({
                        project: projectUpdated
                    });
                });
            } else {
                // fs => librería para borrar archivos. Si la extensión no es válida, borrará el archivo
                fs.unlink(filePath, (error) => {
                    return res.status(200).send({ message: 'La extensión no es válida' });
                });
            }


        } else {
            return res.status(200).send({
                message: fileName
            });
        }
    },

    getImageFile: function (req, res) {
        var file = req.params.image;
        var path_file = './uploads/' + file;

        console.log('Funcion getImageFile');

        // Check if the file exists in the current directory.
        fs.access(path_file, fs.constants.F_OK, (err) => {
            if (!err)
                return res.sendFile(path.resolve(path_file))
            else
                return res.status(200).send({ message: "No existe la imagen..." });
        });
    }
};

module.exports = controller;