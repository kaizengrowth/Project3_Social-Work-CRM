const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const init = require('./passport');
const Student = require('../../../models/Student');
const authHelpers = require('./auth-helpers');

const options = {};

init();

passport.use(
    new LocalStrategy( /*options, */ (email, password, done) => {
        console.log("In local strategy: " + email + " | " + password);
        Student.findbyEmail(email)
            .then(student => {
                console.log('Found student: ' + student);
                if (!student) {
                    return done(null, false);
                }
                if (!authHelpers.comparePass(password, student.password_digest)) {
                    return done(null, false);
                } else {
                    return done(null, student);
                }
            }).catch(err => {
                console.log(err);
                return done(err);
            });
    })
);

module.exports = passport;
