const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const passport = require('passport');

const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Chillin on PORT ${PORT}`);
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(methodOverride('_method'));
// app.use(cookieParser());
// app.use(session({
//     secret: process.env.SECRET_KEY,
//     resave: false,
//     saveUninitialized: true,
// }));
// app.use(passport.initialize());
// app.use(passport.session());

app.use(express.static('public'));

// app.get('/', (req, res) => {
//     res.render('index');
// })

// const authRoutes = require('./routes/auth-routes');
// app.use('/api/auth', authRoutes);
const studentRoutes = require('./routes/student-routes.js');
app.use('/api/students', studentRoutes);

app.use('*', (req, res) => {
    res.status(404).send('Not Found');
});

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({
        error: err,
        message: err.message,
    });
})
