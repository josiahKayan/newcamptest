const express = require('express');

const AcampController = require('../controllers/AcampController');

const routesAcamp = express.Router();

routesAcamp.post('/',AcampController.store);

routesAcamp.get('/',AcampController.index);


module.exports = routesAcamp;