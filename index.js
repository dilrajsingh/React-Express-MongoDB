const express = require('express'); 

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

const keys = require.apply('./config/keys')

 
// This was just for testing, I'll leave it in for fun
app.get('/', (req, res) => {
    res.send({ test: 'testing change 2'});
});


// creates a new instance of the Google strategy
passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback' // route handler will be added here
    }, (accessToken) => {
        console.log(accessToken);
    })
); 

// route user is sent to when granted permission


const PORT = process.env.PORT || 5000;
app.listen(PORT);