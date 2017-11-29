const express = require('express');
const authRouter = express.Router();
const passport = require('./services/auth/local');
const authHelpers = require('./services/auth/auth-helpers');
const studentsController = require('../controllers/students-controller');

authRouter.get('/login', authHelpers.loginRedirect, (req, res) => {
    res.render('auth/login');
});
authRouter.post('/login', passport.authenticate('local', {
    successRedirect: '/api/auth/verify',
    failureRedirect: '/api/auth/verify',
    failureFlash: true
        // successRedirect: '/api/students',
        // failureRedirect: '/home'
}));

authRouter.get('/verify', (req, res) => {
    console.log('In /verify')
    if (req.user) {
        console.log('/verify: found user, sending back 200');
        // return res.redirect(`/student/${req.user.email}`)
        return res.status(200).json({
            message: 'ok',
            auth: true,
            data: {
                student: req.user,
            }
        })
    } else {
        console.log('/verify: didn\'t find user, sending back 400');
        return res.status(400).json({
            message: 'Login failed',
            auth: false,
            data: {
                student: null,
            }
        });
    }
});

authRouter.get('/register', (req, res) => {
    res.render('auth/register');
});
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