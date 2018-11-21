const express = require('express');
const mongoose = require('mongoose');

const cookieSession = require('cookie-session');
const passport = require('passport');

const bodyParser = require('body-parser');

const keys = require('./config/keys');

require('./models/User'); // order matters!
require('./services/passport');


mongoose.connect(keys.mongoURI);

const app = express();

// middlewares:
// code for cookies
app.use(bodyParser.json()); // used to parse POST requests
app.use(
    cookieSession({ // configuration object
        maxAge: 30 * 24 * 60 * 60 * 1000, // cookie to last 30 days, kept in milliseconds
        keys: [keys.cookieKey] // cookie encrypted
    })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

// if in  production / heroku, order matters
if (process.env.NODE_ENV === 'production'){
    // Express will serve up Production Assets like the main.js/main.css file here
    app.use(express.static('client/build'));
    // Express will serve up the index.html file if it doesn't recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
