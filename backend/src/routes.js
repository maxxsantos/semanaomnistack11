const express = require('express');
const OngController = require('./controllers/OngController');
const InsidentsController = require('./controllers/IncidentsController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController')
const routes = express.Router();

routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)

routes.post('/incidents', InsidentsController.create)
routes.get('/incidents', InsidentsController.index)
routes.delete('/incidents/:id',InsidentsController.delete)

routes.get('/profile', ProfileController.index)

module.exports = routes;