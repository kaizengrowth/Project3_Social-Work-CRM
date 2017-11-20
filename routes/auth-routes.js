const express = require('express');
const authRouter = express.Router();
const passport = require('../services/auth/local');
const authHelpers = require('../services/auth/auth-helpers');
const studentsController = require('../controllers/students-controller');

authRouter.get('/login', authHelpers.loginRedirect, (req, res) => {
    res.render('auth/login');
});
authRouter.post('/login', passport.authenticate('local', {
    successRedirect: '/student',
    failureRedirect: '/auth/login',
    failureFlash: true,
}));

authRouter.get('/register', authHelpers.loginRedirect, (req, res) => {
    res.render('auth/register');
});
authRouter.post('/register', studentsController.create);

authRouter.get('/logout', (req, res) => {
    req.logout();
    res.redirect('back');
});

module.exports = authRouter;