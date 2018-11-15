
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.use(new GoogleStrategy(
    {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, 
    (accessToken, refreshToken, profile, done) => {
        // async action, this returns a promise
        User.findOne({ googleId: profile.id })
            .then((existingUser) => {
                // record found
                if (existingUser) {
                    
                    // tells passport that we are finished here
                    done(null, existingUser);
                }
                //create user
                else {
                    // new model instance of a user, .save() saves it to db
                    new User({ googleId: profile.id })
                        .save()
                        .then(user => done(null, user)); // do not call done until the async operation completes
                }
            });
        // console.log('access token', accessToken);
        // console.log('refersh token', refreshToken);
        // console.log('profile', profile);
    }
 )
);
