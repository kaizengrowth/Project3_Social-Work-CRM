const express = require('express');
const studentRoutes = express.Router();

const studentsController = require('../controllers/students-controller');
const authHelpers = require('./services/auth/auth-helpers');

// COMMENTED OUT BELOW UNTIL AUTH WORKS
studentRoutes.get('/', authHelpers.loginRequired, studentsController.index);

studentRoutes.get('/', studentsController.index);
studentRoutes.post('/', studentsController.create);

studentRoutes.get('/:email', studentsController.show);
studentRoutes.put('/:email', studentsController.update);
// studentRoutes.delete('/:id', studentsController.delete)

module.exports = studentRoutes;