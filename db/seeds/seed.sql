INSERT INTO social_workers (first_name,last_name,email,phone) VALUES (
'Phoebe','Buffay','pheebs@email.com','212-555-1111');
INSERT INTO social_workers (first_name,last_name,email,phone) VALUES
('Joey','Tribbiani','imdisgusting@email.com','212-555-2222');
INSERT INTO social_workers (first_name,last_name,email,phone) VALUES ('Chandler','Bing','chanandlerbong@email.com','212-555-3333');
INSERT INTO students (first_name,last_name,email,phone, class, aboutme, ispriority, image, studentnotes) VALUES
('Oscar The','Grouch','trashcan@email.com','212-555-4444', '289', 'i hate everything but garbage.', true, 'https://i.pinimg.com/736x/8a/3b/19/8a3b199e25edb39c7e9021d875566ae8--oscar-the-grouch-green-goddess.jpg','no student notes at this time');
INSERT INTO students (first_name,last_name,email,phone, class, aboutme, ispriority, image, studentnotes) VALUES
('Big','Bird','feathers@gmail.com','212-555-5555', '300', 'Hi! I love everybody!', false, 'https://media1.britannica.com/eb-media/67/128667-004-2B4EFBF7.jpg', 'no student notes at this time');
INSERT INTO students (first_name,last_name,email,phone, class, aboutme, ispriority, image, studentnotes) VALUES
('The','Count','ninetynine@gmail.com','212-555-6666', '289', 'one million two thousand eight hundred and fourteen!  OR nine.', false, 'https://vignette2.wikia.nocookie.net/muppet/images/2/22/CountVonCount.png/revision/latest?cb=20150116064552', 'no student notes at this time');
INSERT INTO intake (swid, studid, intakedate,  intakenotes,
  food,foodnotes,intclothing,finances,financenotes)
VALUES (1, 2, '2017-01-30', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, laudantium, ipsa. Exercitationem similique quasi voluptatibus magnam quae minus, nihil rem provident quam recusandae distinctio reiciendis eligendi. Error ratione maxime earum.', true, 'having trouble with foodstamps', true, true,'my unemployment is running out');
INSERT INTO intake (swid, studid, intakedate,  intakenotes,
  food,foodnotes,intclothing,finances,financenotes)
VALUES (2, 3, '2017-05-21', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, laudantium, ipsa. Exercitationem similique quasi voluptatibus magnam quae minus, nihil rem provident quam recusandae distinctio reiciendis eligendi. Error ratione maxime earum.', true, 'having trouble with foodstamps', false, true, 'my unemployment is running out');
INSERT INTO intake (swid, studid, intakedate,  intakenotes,
  food,foodnotes,intclothing,finances,financenotes)
VALUES (3, 1, '2017-06-08', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore quod nobis, iste adipisci soluta nulla minima sit quaerat veniam, temporibus deleniti tempore voluptatem ex dolorum nemo veritatis architecto quibusdam officia!', false,'', true, true, 'I need additional help.');
