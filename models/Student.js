const db = require('../db/config');

const Student = {};

Student.findAll = () => {
    return db.manyOrNone('SELECT * FROM students');
  }

Student.findbyUserName = userName => {
    return db.oneOrNone(`
        SELECT * FROM users
        WHERE username = $1
    `, [userName]);
};

// TO DO - Update create model method below with password field when auth routes are done.

Student.create = email => {
    return db.one(`
        INSERT INTO students
        (first_name, last_name, phone, email, class, aboutme)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING *
<<<<<<< HEAD
    `, [student.first_name, student.last_name, student.phone, student.class, student.aboutme]);
};

module.exports = Student;
=======
    `, [student.first_name, student.last_name, student.phone, student.email, student.class, student.aboutme]);
};
>>>>>>> Set up Router on React App.js. Moved Home components to container Home.
