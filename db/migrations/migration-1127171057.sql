DROP TABLE IF EXISTS social_workers CASCADE;
DROP TABLE IF EXISTS students CASCADE;
DROP TABLE IF EXISTS referrals CASCADE;
DROP TABLE IF EXISTS intake CASCADE;
DROP TABLE IF EXISTS resources CASCADE;
DROP TABLE IF EXISTS case_conferences CASCADE;


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
  password_digest VARCHAR(255),
  phone VARCHAR(255),
  cycle VARCHAR(255),
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
  jobsearch BOOLEAN,
  jobsearchnotes TEXT,
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
CREATE TABLE IF NOT EXISTS resources (
  resourceid SERIAL PRIMARY KEY,
  category VARCHAR(255),
  renderquestion TEXT,
  resourcename TEXT,
  resource_url VARCHAR
);
CREATE TABLE IF NOT EXISTS case_conferences (
  casemtgid SERIAL PRIMARY KEY,
  swid INT REFERENCES social_workers(swid),
  studid INT REFERENCES students(studid),
  todaysdate DATE,
  strengths TEXT,
  challenges TEXT,
  challenge_steps TEXT,
  help TEXT,
  pershcolas_support TEXT,
  interest_outside TEXT,
  ifyes_what TEXT,
  follow_ups TEXT,
  fu_student TEXT,
  fu_perscholas TEXT,
  final_notes TEXT
)

