'use strict'

//Configuración de express
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//Archivos de rutas
var project_routes = require('./routes/project');

//Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CORS
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//Rutas
app.use('/api', project_routes);


/* app.get('/', (req, res) => {
    res.status(200).send(
        "<h1>Pagina de Inicio</h1>"
    );
});

app.post('/test/:id', (req, res) => {
    //Para una petición post http://localhost:3700/test/88?web=victorrobles.es
    //Que en el body tiene {nombre: 'Javier'}
    //Devuelve
    // Javier
    // Javier
    // victorrobles.es
    // 88

    //Deprecated
    console.log(req.param('nombre'));
    //New way
    console.log(req.body.nombre);
    console.log(req.query.web);
    console.log(req.params.id);

    res.status(200).send({
        message: "Hola mundo desde mi api nodeJS"
    });
}); */

//Exportar
module.exports = app;