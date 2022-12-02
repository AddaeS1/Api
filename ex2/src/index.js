const express = require('express');
const rotas = require('./rotas');
const instrutores = require('./controladores/instrutores');

const app = express();
app.use(express.json());
app.use(rotas);

app.listen(9000);