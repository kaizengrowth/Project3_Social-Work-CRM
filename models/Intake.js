const db = require('../db/config');

const Intake = {};

//I have no idea why anyone would need to see an index of all the intake forms...but here it is?
Intake.findAll = () => {
    return db.manyOrNone('SELECT * FROM students, intake WHERE students.studid = intake.studid');
    conosole.log(findAll);
};
//THIS IS NOT GOING TO WORK, SELF.  SINCE THIS IS A JOINED TABLE...?
Intake.findbyEmail = (email) => {
    return db.oneOrNone(`
    SELECT * FROM students, intake
    WHERE students.studid = intake.studid AND students.email = $1
  `, [email]);
};

Intake.create = (intake) => {
  return db.one(`
    INSERT INTO intake
    (housing, food, finances, domesticviolence, childcare, mentalhealth, legalsvcs, substanceabuse, physicalhealth, jobsearch, completehighschool, completecollege, advdegree, testingaccommodations, transportation, insurance, studentexpectations)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17)
    RETURNING *
  `, [intake.housing, intake.food, intake.finances, intake.domesticviolence, intake.childcare, intake.mentalhealth, intake.legalsvcs, intake.substanceabuse, intake.physicalhealth, intake.jobsearch, intake.completehighschool, intake.completecollege, intake.advdegree, intake.testingaccommodations, intake.transportation, intake.insurance, intake.studentexpectations]);
};

// //THIS IS NOT GOING TO WORK, SELF.  SINCE THIS IS A JOINED TABLE...?
Intake.update = (intake, email) => {
  return db.one(`
    UPDATE intake SELECT
    housing = $1,
    food = $2,
    finances = $3,
    domesticviolence = $4,
    childcare = $5,
    mentalhealth = $6,
    legalsvcs = $7,
    substanceabuse = $8,
    physicalhealth = $9,
    jobsearch = $10,
    completehighschool = $11,
    completecollege = $12,
    advdegree = $13,
    testingaccommodations = $14,
    transportation = $15,
    insurance = $16,
    RETURNING *
    `, [intake.housing, intake.food, intake.fincances, intake.domesticviolence, intake.childcare, intake.mentalhealth, intake.legalsvcs, intake.substanceabuse, intake.physicalhealth, intake.jobsearch, intake.completehighschool, intake.completecollege, intake.advdegree, intake.testingaccommodations, intake.transportation, intake.insurance, intake.studentexpectations], email);
};

//this should basically never happen for reporting purposes
Intake.update = (email) => {
  return db.none('DELETE FROM intake WHERE ')
}

module.exports = Intake;
