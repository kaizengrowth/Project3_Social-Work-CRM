CREATE TABLE IF NOT EXISTS resources (
  resourceid SERIAL PRIMARY KEY,
  category VARCHAR(255),
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
