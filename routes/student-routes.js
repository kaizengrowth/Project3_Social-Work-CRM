const express = require('express');
const studentRoutes = express.Router();

const studentsController = require('../controllers/students-controller');
// const authHelpers = require('../services/auth/auth-helpers');

// COMMENTED OUT BELOW UNTIL AUTH WORKS 
// studentRoutes.get('/', authHelpers.loginRequired, studentsController.index);

studentRoutes.get('/', studentsController.index);

module.exports = studentRoutes;
