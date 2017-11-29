const express = require('express');
const studentRoutes = express.Router();

const studentsController = require('../controllers/students-controller');
const authHelpers = require('./services/auth/auth-helpers');

// COMMENTED OUT BELOW UNTIL AUTH WORKS
// studentRoutes.get('/', authHelpers.loginRequired, studentsController.index);

const studentAuth = (req, res, next) => {
    console.log('studentAuth: ' + req.url);
    // if (req.params.email === res.user.email) {
    next();
    // } else {
    //     res.status(401).send('You are not authorized to view this page.');
    // }
}

studentRoutes.get('/', studentsController.index);
studentRoutes.post('/', studentsController.create);

studentRoutes.use('/:email', studentAuth);

studentRoutes.get('/:email', studentsController.show);
studentRoutes.put('/:email', studentsController.update);
// studentRoutes.delete('/:id', studentsController.delete)

module.exports = studentRoutes;