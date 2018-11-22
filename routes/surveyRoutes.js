const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits')

const Survey = mongoose.model('surveys');
// check if user is logged in
// check if user has enough credits, needs at least one
module.exports = app => {
    // this request creates a survey and sends out a big email
    app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {
        const { title, subject, body, recipients } = req.body;

        // ES6 if the parameters are the same "title: title" can just be "title"
        const survey = new Survey({
            title,
            body,
            subjects,
            recipients: recipients.split(',').map(email => ({ email: email.trim() })), // recipient not needed because it defaults to false
            _user: req.user.id, // yes, no key/values not needed, defaults
            dateSent: Date.now()
        })
    });
};
