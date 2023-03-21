const express = require ('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express();
const morgan = require('morgan');

//Configuraciones
app.set('port', 3000)
app.set('json spaces' ,2);

//middlewares
app.use(morgan('dev'));
app.use(express.json());

//rutas
app.use('/api/juegos' ,require('./routes/rutas'))


//Empenzando el servidor
app.listen(app.get('port'));
console.log("mi primer servidor");

