const passport = require('passport');
const Student = require('../../../models/Student');

module.exports = () => {
    passport.serializeUser((user, done) => {
        done(null, user.username);
    });

    passport.deserializeUser((username, done) => {
        Student.findByUserName(username)
            .then(user => {
                done(null, user);
            }).catch(err => {
                done(err, null);
            });
    });
};
