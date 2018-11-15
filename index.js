const express = require('express');
const mongoose = require('mongoose');

const cookieSession = require('cookie-session');
const passport = require('passport');

const keys = require('./config/keys');

require('./models/User'); // order matters!
require('./services/passport');


mongoose.connect(keys.mongoURI);

const app = express();

// code for cookies
app.use(
    cookieSession({ // configuration object
        maxAge: 30 * 24 * 60 * 60 * 1000, // cookie to last 30 days, kept in milliseconds
        keys: [keys.cookieKey] // cookie encrypted
    })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);


const PORT = process.env.PORT || 5000;
app.listen(PORT);
