const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const passport = require('passport');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const cors = require('cors');

const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Chillin on PORT ${PORT} 😎`);
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const authCheck = jwt({
    secret: jws.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: "https://perscholas.auth0.com/.well-known/jwks.json"
    }),
    audience: "https://perscholas.auth0.com/api/v2/",
    issuer: "https://perscholas.auth0.com",
    algorithms: ['RS256']
})

app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static('public'));

// app.get('/', (req, res) => {
//     res.render('index');
// })

const authRoutes = require('./routes/auth-routes');
app.use('/api/auth', authRoutes);
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