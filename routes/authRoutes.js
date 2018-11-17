const passport = require('passport');

module.exports = (app) => {

    app.get(
        '/auth/google', 
        passport.authenticate('google', {
        scope: ['profile', 'email']
        })
    );

    app.get(
        '/auth/google/callback', 
        passport.authenticate('google'),
        (req, res) => {
            res.redirect('/surveys');
        }
    ); 

    app.get('/api/logout', (req, res) => {
        req.logout();
        // res.send(req.user); // should get back undefined if logged out
        res.redirect('/');
    });

    // Is user signed in or not? Also used earlier to test if authentication succeeded
    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
}