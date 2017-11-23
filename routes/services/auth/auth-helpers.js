const bcrypt = require('bcryptjs');

function comparePass(userPassword, databasePassword) {
    return bcrypt.compareSync(userPassword, databasePassword);
}

function loginRedirect(req, res, next) {
    if (req.user) return res.redirect('/students');
    return next();
}

function loginRequired(req, res, next) {
    if (!req.user) return res.redirect('/home');
    return next();
}

module.exports = {
    comparePass: comparePass,
    loginRedirect: loginRedirect,
    loginRequired: loginRequired,
}