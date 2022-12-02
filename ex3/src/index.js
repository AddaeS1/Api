const express = require('express');
const rotas = require('./rotas');
const biblioteca = require('./controladores/biblioteca');

const app = express();
app.use(express.json());
app.use(rotas);

app.listen(9000);