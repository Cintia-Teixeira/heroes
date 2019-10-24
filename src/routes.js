const express = require('express');


const SpotController = require('./controllers/SpotController');

const routes = express.Router();


routes.get('/spots', SpotController.index);
routes.post('/spots', SpotController.store);

module.exports = routes;