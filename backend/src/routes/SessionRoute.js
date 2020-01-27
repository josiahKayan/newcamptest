const express = require('express');

const SessionController = require('../controllers/SessionController');

const routes = express.Router();

routes.post('/',SessionController.store);
// routes.post('/spots/create',upload.single('thumbnail'),SpotController.store);
// routes.post('/spots',SpotController.index);
// routes.get('/dashboard',DashboardController.show);
// routes.post('/spots/:spot_id/bookings',BookingController.store);
// routes.post('/spots',upload.array('thumbnail'),SpotController.store);

module.exports = routes;