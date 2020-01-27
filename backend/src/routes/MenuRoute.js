const express = require('express');

const MenuController = require('../controllers/MenuController');

const routesMenu = express.Router();

routesMenu.post('/',MenuController.store);

routesMenu.get('/',MenuController.show);


module.exports = routesMenu;