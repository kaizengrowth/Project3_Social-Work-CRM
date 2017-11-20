const bcrypt = require('bcryptjs');
const Student = require('../models/student');

const studentsController = {};

studentsController.index = (req, res) => {
  Student.findAll()
    .then(students => {
      res.status(200).json({
        message: 'Put a student profile page on this route',
        data: {students},
      })
    }).catch(err => {
      console.log(err);
      res.status(400).json({message: '400', err});
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
