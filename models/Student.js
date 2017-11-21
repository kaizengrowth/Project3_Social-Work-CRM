const db = require('../db/config');

const Student = {};

Student.findAll = () => {
    return db.manyOrNone('SELECT * FROM students');
  }

//should this be email and not id?
Student.findbyUserName = (email) => {
    return db.oneOrNone(`
        SELECT * FROM students
        WHERE email = $1
    `, [email]);
};

// TO DO - Update create model method below with password field when auth routes are done.

//this was email i changed it to student
Student.create = (student) => {
    return db.one(`
        INSERT INTO students
        (first_name, last_name, phone, cycle, aboutme)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *
    `, [student.email, student.first_name, student.last_name, student.phone, student.cycle, student.aboutme]);
};

Student.update = (student, id) => {
  return db.one(`
    UPDATE students SET
    first_name = $1,
    last_name = $2,
    phone = $3,
    cycle = $4,
    aboutme = $5
    WHERE id = $6
    RETURNING *
  `,[student.first_name, student.last_name, student.phone, student.cycle, student.aboutme, id);
};

Student.destroy = (id) => {
  return db.none('DELETE FROM students WHERE id = $1', id);
};

module.exports = Student;
