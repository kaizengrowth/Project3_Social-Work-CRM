CREATE TABLE IF NOT EXISTS social_workers (
  swid SERIAL PRIMARY KEY,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  email VARCHAR(255),
  phone VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS students (
  swid INT REFERENCES social_workers(swid),
  studid SERIAL PRIMARY KEY,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  email VARCHAR(255),
  phone VARCHAR(255),
  class VARCHAR(255),
  aboutme TEXT,
  ispriority BOOLEAN,
  inprogress BOOLEAN,
  image VARCHAR,
  studentnotes TEXT
);

CREATE TABLE IF NOT EXISTS  referrals (
  referralid SERIAL PRIMARY KEY,
  swid INT REFERENCES social_workers(swid),
  studid INT REFERENCES students(studid),
  item TEXT,
  isdone BOOLEAN
);

CREATE TABLE IF NOT EXISTS intake (
  intakeid SERIAL PRIMARY KEY,
  swid INT REFERENCES social_workers(swid),
  studid INT REFERENCES students(studid),
  intakedate DATE,
  intakenotes TEXT,
  food BOOLEAN,
  foodnotes TEXT,
  intclothing BOOLEAN,
  finances BOOLEAN,
  financenotes TEXT,
  childcare BOOLEAN,
  childcarenotes TEXT,
  insurance BOOLEAN,
  insurancenotes TEXT,
  housing BOOLEAN,
  housingnotes TEXT,
  transportation BOOLEAN,
  legalsvcs BOOLEAN,
  legalnotes TEXT,
  substanceabuse BOOLEAN,
  substancenotes TEXT,
  mentalhealth BOOLEAN,
  mentalhealthnotes TEXT,
  physicalhealth BOOLEAN,
  physicalhealthnotes TEXT,
  completehighschool BOOLEAN,
  highschoolnotes TEXT,
  completecollege BOOLEAN,
  collegenotes TEXT,
  advdegree BOOLEAN,
  advdegreenotes TEXT,
  testingaccommodations BOOLEAN,
  testingnotes TEXT,
  domesticviolence BOOLEAN,
  domesticnotes TEXT,
  studentexpectations TEXT,
  nextsteps TEXT
);
