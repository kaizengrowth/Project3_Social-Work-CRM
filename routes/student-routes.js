const express = require('express');
const studentRoutes = express.Router();

const studentsController = require('../controllers/students-controller');
const authHelpers = require('../services/auth/auth-helpers');

studentRoutes.get('/', authHelpers.loginRequired, studentsController.index);

module.exports = studentRoutes;