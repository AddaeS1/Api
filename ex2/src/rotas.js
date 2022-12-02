const express = require('express');
const convidados = require('./controladores/convidados');

const rotas = express();

rotas.get('/convidados/:convidado', convidados.obterConvidado);
rotas.get('/convidados', convidados.listarConvidados);
rotas.post('/convidados', convidados.cadastrarConvidado);
rotas.delete('convidados/:convidado', convidados.excluirConvidado);


module.exports = rotas;