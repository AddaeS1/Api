const express = require('express');
const biblioteca = require('./controladores/biblioteca');

const rotas = express();

rotas.get('/biblioteca', biblioteca.listarLivros);
rotas.get('/biblioteca/:id', biblioteca.obterLivro);
rotas.post('/biblioteca', biblioteca.cadastrarLivro);
rotas.put('/biblioteca/:id', biblioteca.atualizarLivro);
rotas.delete('/biblioteca/:id', biblioteca.excluirLivro);


module.exports = rotas;