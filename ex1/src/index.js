const express = require('express');
const rotas = require('./rotas');
const alunos = require('./controladores/alunos');

const app = express();



app.use(express.json());
app.use(rotas);


module.exports = app;
app.listen(8080);

