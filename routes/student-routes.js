const express = require('express');
const studentRoutes = express.Router();

const studentsController = require('../controllers/students-controller');
const authHelpers = require('./services/auth/auth-helpers');

// COMMENTED OUT BELOW UNTIL AUTH WORKS
// studentRoutes.get('/', authHelpers.loginRequired, studentsController.index);

function isSocialWorker(req, res, next) {
    if (req.user.email === ccuno @perscholas.org) {
        next();
    } else {
        res.status(401).send('Not Allowed');
    }
}

studentRoutes.use('/', isSocialWorker);

studentRoutes.get('/', authHelpers.loginRequired, studentsController.index);
studentRoutes.post('/', studentsController.create);

function isStudent(req, res, next) {
    if (req.user.email === '/:email') {
        next();
    } else {
        res.status(401).send('Not Allowed');
    }
}

studentRoutes.use('/:email', isStudent);

studentRoutes.get('/:email', authHelpers.loginRequired, studentsController.show);
studentRoutes.put('/:email', studentsController.update);
// studentRoutes.delete('/:id', studentsController.delete)

module.exports = studentRoutes;