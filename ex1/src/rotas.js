const express = require('express');
const alunos = require('./controladores/alunos');


const rotas = express();

rotas.post('/alunos', alunos.cadastrarAluno);







module.exports = rotas;