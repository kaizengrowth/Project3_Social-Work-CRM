const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Chillin on PORT ${PORT}`);
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const studentRoutes = require('./routes/student-routes.js');
