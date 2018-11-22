const requireLogin = require('../middlewares/requireLogin');

// check if user is logged in
// check if user has enough credits, needs at least one
module.exports = app => {
    app.post('/api/surveys', requireLogin, (req, res) => {

    });
};
