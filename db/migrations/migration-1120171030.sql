CREATE TABLE IF NOT EXISTS resources (
  resourceid SERIAL PRIMARY KEY,
  category VARCHAR(255),
  resourcename TEXT,
  resource_url VARCHAR
);

CREATE TABLE IF NOT EXISTS case_conferences (

)
