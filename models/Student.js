const db = require('../db/config');

const Student = {};

Student.findAll = () => {
    return db.manyOrNone('SELECT * FROM students');
}

//should this be email and not id?
Student.findbyEmail = (email) => {
    return db.oneOrNone(`
        SELECT * FROM students
        WHERE email = $1
    `, [email]);
};

// TO DO - Update create model method below with password field when auth routes are done

//this was email i changed it to student
//ispriority is already set to false in the controller...
Student.create = (student) => {
    return db.one(`
        INSERT INTO students
        (email, password_digest, first_name, last_name, phone, cycle, aboutme, ispriority)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        RETURNING *
    `, [student.email, student.password_digest, student.first_name, student.last_name, student.phone, student.cycle, student.aboutme, student.ispriority]);
};

Student.update = (student, email) => {
    return db.one(`
    UPDATE students SET
    phone = $1,
    aboutme = $2
    WHERE email = $3
    RETURNING *
  `, [student.phone, student.aboutme], email);
};

Student.destroy = (email) => {
    return db.none('DELETE FROM students WHERE id = $1', email);
};

module.exports = Student;
