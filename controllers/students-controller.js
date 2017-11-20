const bcrypt = require('bcryptjs');
const Student = require('../models/student');

const studentsController = {};

studentsController.index = (req, res) => {
    res.json({
        message: 'Put a student profile page on this route',
        data: {
            student: req.student,
        },
    });
};

studentsController.create = (req, res) => {
    // const salt = bcrypt.genSaltSync();
    // const hash = bcrypt.hashSync(req.body.password, salt);
    Student.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone,
        class: req.body.class,
        aboutme: req.body.aboutme,
    }).then(student => {
        req.login(student, (err) => {
            if (err) return next(err);
            res.redirect('/student');
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
};

module.exports = studentsController;