
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

// user coming from OAuth flow
passport.serializeUser((user, done) => {
    done(null, user.id); // this id is NOT the google profile ID, it's the mongoDB one because we can't assume everyone has a google id
});

passport.deserializeUser((id, done) =>{
    User.findById(id)
        .then(user => {
            done(null, user);
    });
});

passport.use(new GoogleStrategy(
    {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
    }, 
    async (accessToken, refreshToken, profile, done) => {
        // async action, this returns a promise
        const existingUser = await User.findOne({ googleId: profile.id })

        // record found
        if (existingUser) {
            // callback tells passport that we are finished here
            return done(null, existingUser);

        }
        //create user, new model instance of a user, .save() saves it to db
        const user = await new User({ googleId: profile.id }).save()
        done(null, user); 
         
        // console.log('access token', accessToken);
        // console.log('refersh token', refreshToken);
        // console.log('profile', profile);
    }
 )
);
