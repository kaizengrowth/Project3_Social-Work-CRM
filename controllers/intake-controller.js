const Intake = require('../models/Intake');

const intakeController = {};

intakeController.index = (req, res)  => {
    Intake.findAll()
      .then(intakes => {
        res.status(200).json({
            message: 'INTAKE FORM GOES HERE',
            data: { intakes },
        });
      }).catch(err => {
        console.log(err);
        res.status(400).json({ message: '400', err });
      });
};

intakeController.show = (req, res, next) => {
  Intake.findByEmail(req.params.email)
      .then(intake => {
        res.status(200).json({
            message: 'ok-show one intake by email',
            data: {
                intake: intake,
            }
        });
      }).catch(err => {
        console.log(err);
        res.status(400).json({ message: '400', err});
      });
};

// intakeController.create = (req, res, next) => {
//   Intake.create({
//     intakedate: req.body.intakedate,
//     intakenotes: req.body.intakenotes,
//     housing: req.body.housing,
//     food: req.body.food,
//     finances: req.body.finances,
//     domesticviolence: req.body.domesticviolence,
//     childcare: req.body.childcare,
//     mentalhealth: req.body.mentalhealth,
//     legalsvcs: req.body.legalsvcs,
//     substanceabuse: req.body.substanceabuse,
//     physicalhealth: req.body.physicalhealth,
//     jobsearch: req.body.jobsearch,
//     completehighschool: req.body.completehighschool,
//     completecollege: req.body.completecollege,
//     advdegree: req.body.advdegree,
//     testingaccommodations: req.body.testingaccommodations,
//     transportation: req.body.transportation,
//     insurance: req.body.insurance,
//     studentexpectations: req.body.studentexpectations,
//     nextsteps: req.body.nextsteps,
//   }).then(intake => {
//     res.status(201).json({
//       message: 'intake recorded successfully--where does this route to next?',
//       data: {
//         intake: intake,
//       }
//     });
//   }).catch(err => {
//     console.log(err);
//     res.status(500).json(err);
//   });
// };

// intakeController.update = (req, res, next) => {
//   Student.update({
//     intakenotes: req.body.intakenotes,
//     housing: req.body.housing,
//     food: req.body.food,
//     finances: req.body.finances,
//     domesticviolence: req.body.domesticviolence,
//     childcare: req.body.childcare,
//     mentalhealth: req.body.mentalhealth,
//     legalsvcs: req.body.legalsvcs,
//     substanceabuse: req.body.substanceabuse,
//     physicalhealth: req.body.physicalhealth,
//     jobsearch: req.body.jobsearch,
//     completehighschool: req.body.completehighschool,
//     completecollege: req.body.completecollege,
//     advdegree: req.body.advdegree,
//     testingaccommodations: req.body.testingaccommodations,
//     transportation: req.body.transportation,
//     insurance: req.body.insurance,
//     studentexpectations: req.body.studentexpectations,
//     nextsteps: req.body.nextsteps,
//   }, req.params.id)
//       res.status(202).json({
//         message: 'Updated Intake Successfully',
//         data: {
//           intake: intake,
//         },
//       }).then(intake => {
//         res.redirect('/profile')
//       });
// };

// intakeController.delete = (req, res, next) => {
//   intake.destroy(req.params.email)
//     .then(() => {
//         res.redirect('/index');
//     }).catch(err => {
//         res.status(500).json({
//           err,
//         });
//     });
// }

module.exports = intakeController;
