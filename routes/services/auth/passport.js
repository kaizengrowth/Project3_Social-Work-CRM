const passport = require('passport');
const Student = require('../../../models/Student');

module.exports = () => {
    passport.serializeUser((student, done) => {
        done(null, student.email);
    });

    passport.deserializeUser((email, done) => {
        console.log("deserialize user: " + email);
        Student.findbyEmail(email)
            .then(student => {
                done(null, student);
            }).catch(err => {
                done(err, null);
            });
    });
};