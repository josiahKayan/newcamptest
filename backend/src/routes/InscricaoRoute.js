const express = require('express');

const InscricaoController = require('../controllers/InscricaoController');

const routesInscricao = express.Router();

routesInscricao.post('/',InscricaoController.store);

routesInscricao.get('/',InscricaoController.show);


module.exports = routesInscricao;