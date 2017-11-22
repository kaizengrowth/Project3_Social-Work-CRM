const express = require('express');
const authRouter = express.Router();
const passport = require('./services/auth/local');
const authHelpers = require('./services/auth/auth-helpers');
const studentsController = require('../controllers/students-controller');

// authRouter.get('/login', authHelpers.loginRedirect, (req, res) => {
//     res.render('auth/login');
// });
authRouter.post('/login', passport.authenticate('local', {
    successRedirect: '/api/auth/verify',
    failureRedirect: '/api/auth/verify',
    failureFlash: true,
}));

authRouter.get('/verify', (req, res) => {
    if (req.student) return res.status(200).json({
        message: 'ok',
        auth: true,
        data: {
            student: req.student,
        }
    });
    else return res.status(400).json({
        message: 'Login failed',
        auth: false,
        data: {
            student: null,
        }
    });
});

// authRouter.get('/register', authHelpers.loginRedirect, (req, res) => {
//     res.render('auth/register');
// });
authRouter.post('/register', studentsController.create);

authRouter.get('/logout', (req, res) => {
    req.logout();
    res.json({
        message: 'logged out',
        auth: false,
        data: {
            student: null,
        }
    })
});

module.exports = authRouter;
