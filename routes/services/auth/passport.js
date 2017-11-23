const passport = require('passport');
const User = require('../../../models/Student');
const Student = require('../../../models/Student');

module.exports = () => {
    passport.serializeUser((student, done) => {
        done(null, student.email);
    });

    passport.deserializeUser((email, done) => {
        Student.findbyEmail(email)
            .then(student => {
                done(null, student);
            }).catch(err => {
                done(err, null);
            });
    });
};