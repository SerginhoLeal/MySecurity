const express = require('express');

const routes = express.Router();

const IncControllers = require('./controllers/IncControllers');

routes.get('/8dr7YKjlJ3aXKcnwGJrm', IncControllers.index);
routes.post('/NRBQlog6f2Pwnqe3adQJ', IncControllers.store);

module.exports = routes;