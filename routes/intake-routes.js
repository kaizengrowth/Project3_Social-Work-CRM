const express = require('express');
const intakeRoutes = express.Router();

const intakeController = require('../controllers/intake-controller');

//when will anyone ever need index?
intakeRoutes.get('/intake', intakeController.index);
intakeRoutes.post('/intake', intakeController.create);

intakeRoutes.get('/:email', intakeController.show);
intakeRoutes.get('/:email', intakeController.update);
intakeRoutes.delete('/:email', intakeController.delete);

module.exports = intakeRoutes;
