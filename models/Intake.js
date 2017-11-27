const db = require('../db/config');

const Intake = {};

//I have no idea why anyone would need to see an index of all the intake forms...but here it is?
Intake.findAll = () => {
    return db.manyOrNone('SELECT * FROM students, intake WHERE students.studid = intake.studid');
    console.log(findAll);
};
//THIS IS NOT GOING TO WORK, SELF.  SINCE THIS IS A JOINED TABLE...?
Intake.findbyEmail = (email) => {
    return db.oneOrNone(`
    SELECT * FROM intake
    JOIN students
    ON intake.studid = students.id WHERE students.email = email
  `, [email]);
};

// Intake.create = (intake) => {
//   return db.one(`
//     INSERT INTO intake
//     (intakedate, intakenotes, housing, food, finances, domesticviolence, childcare, mentalhealth, legalsvcs, substanceabuse, physicalhealth, intclothing, completehighschool, completecollege, advdegree, testingaccommodations, transportation, insurance, studentexpectations, nextsteps)
//     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20)
//     RETURNING *
//   `, [intake.intakedate, intake.intakenotes, intake.housing, intake.food, intake.fincances, intake.domesticviolence, intake.childcare, intake.mentalhealth, intake.legalsvcs, intake.substanceabuse, intake.physicalhealth, intake.intclothing, intake.completehighschool, intake.completecollege, intake.advdegree, intake.testingaccommodations, intake.transportation, intake.insurance, intake.studentexpectations, intake.nextsteps]);
// };

// //THIS IS NOT GOING TO WORK, SELF.  SINCE THIS IS A JOINED TABLE...?
// Intake.update = (intake, email) => {
//   return db.one(`
//     UPDATE intake SELECT
//     intakenotes = $1,
//     housing = $2,
//     food = $3,
//     finances = $4,
//     domesticviolence = $5,
//     childcare = $6,
//     mentalhealth = $7,
//     legalsvcs = $8,
//     substanceabuse = $9,
//     physicalhealth = $10,
//     intclothing = $11,
//     completehighschool = $12,
//     completecollege = $13,
//     advdegree = $14,
//     testingaccommodations = $15,
//     transportation = $,16
//     insurance = $17,
//     studentexpectations = $18,
//     nextsteps = $19
//     RETURNING *
//     `, [intake.intakenotes, intake.housing, intake.food, intake.fincances, intake.domesticviolence, intake.childcare, intake.mentalhealth, intake.legalsvcs, intake.substanceabuse, intake.physicalhealth, intake.intclothing, intake.completehighschool, intake.completecollege, intake.advdegree, intake.testingaccommodations, intake.transportation, intake.insurance, intake.studentexpectations, intake.nextsteps], email);
// };

// //this should basically never happen for reporting purposes
// Intake.update = (email) => {
//   return db.none('DELETE FROM intake WHERE ')
// }

module.exports = Intake;
