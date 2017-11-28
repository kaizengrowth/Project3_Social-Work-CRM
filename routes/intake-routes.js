const express = require('express');
const intakeRoutes = express.Router();

const intakeController = require('../controllers/intake-controller');

//when will anyone ever need index?
intakeRoutes.get('/', intakeController.index);
intakeRoutes.post('/', intakeController.create);

// intakeRoutes.get('/:email', intakeController.show);
// intakeRoutes.get('/:email', intakeController.update);
// intakeRoutes.delete('/:email', intakeController.delete);

module.exports = intakeRoutes;
