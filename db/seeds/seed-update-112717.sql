INSERT INTO social_workers (first_name,last_name,email,phone) VALUES (
'Phoebe','Buffay','pheebs@email.com','212-555-1111');
INSERT INTO social_workers (first_name,last_name,email,phone) VALUES
('Joey','Tribbiani','imdisgusting@email.com','212-555-2222');
INSERT INTO social_workers (first_name,last_name,email,phone) VALUES ('Chandler','Bing','chanandlerbong@email.com','212-555-3333');
INSERT INTO students (first_name,last_name,email,phone, cycle, aboutme, ispriority, image, studentnotes, inprogress) VALUES
('Oscar The','Grouch','trashcan@email.com','212-555-4444', '289', 'i hate everything but garbage.', true, 'https://i.pinimg.com/736x/8a/3b/19/8a3b199e25edb39c7e9021d875566ae8--oscar-the-grouch-green-goddess.jpg','no student notes at this time', true);
INSERT INTO students (first_name,last_name,email,phone, cycle, aboutme, ispriority, image, studentnotes, inprogress) VALUES
('Big','Bird','feathers@gmail.com','212-555-5555', '300', 'Hi! I love everybody!', false, 'https://media1.britannica.com/eb-media/67/128667-004-2B4EFBF7.jpg', 'no student notes at this time', false);
INSERT INTO students (first_name,last_name,email,phone, cycle, aboutme, ispriority, image, studentnotes, inprogress) VALUES
('The','Count','ninetynine@gmail.com','212-555-6666', '289', 'one million two thousand eight hundred and fourteen!  OR nine.', false, 'https://vignette2.wikia.nocookie.net/muppet/images/2/22/CountVonCount.png/revision/latest?cb=20150116064552', 'no student notes at this time', true);
INSERT INTO intake (swid, studid, intakedate,  food, jobsearch, finances, housing, domesticviolence, childcare, mentalhealth, legalsvcs, substanceabuse, physicalhealth, completehighschool, completecollege, advdegree, testingaccommodations, transportation, insurance, studentexpectations, nextsteps)
VALUES (1, 2, '2017-01-30', true, true, false, true, true, true, true, true, true, true, true, true, true, true, true, true, 'I need additional help.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, laudantium, ipsa. Exercitationem similique quasi volupt');
INSERT INTO intake (swid, studid, intakedate, food, jobsearch, finances, housing, domesticviolence, childcare, mentalhealth, legalsvcs, substanceabuse, physicalhealth, completehighschool, completecollege, advdegree, testingaccommodations, transportation, insurance, studentexpectations, nextsteps)
VALUES (2, 3, '2017-06-18', true, true, false, true, true, true, true, true, true, true, true, true, true, true, true, true, 'I need additional help.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, laudantium, ipsa. Exercitationem similique quasi volupt');
INSERT INTO intake (swid, studid, intakedate, food, jobsearch, finances, housing, domesticviolence, childcare, mentalhealth, legalsvcs, substanceabuse, physicalhealth, completehighschool, completecollege, advdegree, testingaccommodations, transportation, insurance, studentexpectations, nextsteps)
VALUES (3, 1, '2017-06-08', false, true, true, false, true, true, true, false, false, true, false, false, false, false, false, true, 'I need additional help.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, laudantium, ipsa. Exercitationem similique quasi volupt');
INSERT INTO resources (category, renderquestion, resourcename, resource_url) VALUES ('childcare
','Do you need help with Child Care?','Daycare Council of New York: Childcare Services','https://www.dccnyinc.org/');
INSERT INTO resources (category, renderquestion, resourcename, resource_url) VALUES ('childcare','Do you need help with Child Care?','The Community Service Society: Rental Assistance, Financial Support, Healthcare Navigation/Enrollment','http://www.cssny.org/programs');
INSERT INTO resources (category, resourcename, resource_url) VALUES ('housing','The Community Service Society: Rental Assistance, Financial Support, Healthcare Navigation/Enrollment','http://www.cssny.org/programs');
INSERT INTO resources (category, resourcename, resource_url) VALUES ('housing','The Community Service Society: Rental Assistance, Financial Support, Healthcare Navigation/Enrollment','http://www.cssny.org/programs');
INSERT INTO resources (category, resourcename, resource_url) VALUES ('housing','The Community Service Society: Rental Assistance, Financial Support, Healthcare Navigation/Enrollment','http://www.cssny.org/programs');
INSERT INTO resources (category, resourcename, resource_url) VALUES ('legal','The Next Door Project at the Community Service Society: Rap Sheet Review and Repair, Legal Services 25+','http://www.cssny.org/programs/entry/the-next-door-project');
INSERT INTO resources (category, resourcename, resource_url) VALUES ('legal','Youth Represent: Legal Services 24 and under','http://youthrepresent.org/services/');
INSERT INTO resources (category, resourcename, resource_url) VALUES ('legal','Urban Justice Center: Legal Services','https://www.urbanjustice.org/');
INSERT INTO resources (category, resourcename, resource_url) VALUES ('legal','LegalAid: Legal Services- Immigration Services ','http://www1.nyc.gov/site/dycd/services/immigration.page');
INSERT INTO resources (category, resourcename, resource_url) VALUES ('legal','http://www1.nyc.gov/site/dycd/services/immigration.page','http://www1.cuny.edu/sites/citizenship-now/');
INSERT INTO case_conferences (swid, studid, todaysdate, strengths, challenges, challenge_steps, help, pershcolas_support, interest_outside, ifyes_what, follow_ups, fu_student, fu_perscholas, final_notes) VALUES (1, 3, '2017-11-20', 'strengths and proudest successes go here', 'biggest challenges go here', 'concrete steps you have taken to address those challenges go here', 'who do you go to for help/support & how will you utilize this help/support', 'how can per scholas support your success in our course and beyond', 'are you interested in any outside referrals/suppot', 'if yes, what goes here', 'dates and follow up notes go here', 'student follow up goes here', 'per scholas follow ups go here', 'final notes go here');
INSERT INTO case_conferences (swid, studid, todaysdate, strengths, challenges, challenge_steps, help, pershcolas_support, interest_outside, ifyes_what, follow_ups, fu_student, fu_perscholas, final_notes) VALUES (2, 2, '2017-10-23', 'strengths and proudest successes go here', 'biggest challenges go here', 'concrete steps you have taken to address those challenges go here', 'who do you go to for help/support & how will you utilize this help/support', 'how can per scholas support your success in our course and beyond', 'are you interested in any outside referrals/suppot', 'if yes, what goes here', 'dates and follow up notes go here', 'student follow up goes here', 'per scholas follow ups go here', 'final notes go here');
INSERT INTO case_conferences (swid, studid, todaysdate, strengths, challenges, challenge_steps, help, pershcolas_support, interest_outside, ifyes_what, follow_ups, fu_student, fu_perscholas, final_notes) VALUES (3, 1, '2017-09-05', 'strengths and proudest successes go here', 'biggest challenges go here', 'concrete steps you have taken to address those challenges go here', 'who do you go to for help/support & how will you utilize this help/support', 'how can per scholas support your success in our course and beyond', 'are you interested in any outside referrals/suppot', 'if yes, what goes here', 'dates and follow up notes go here', 'student follow up goes here', 'per scholas follow ups go here', 'final notes go here');

