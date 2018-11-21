// npmjs.com/package/stripe -> Documentation
//  example: var stripe = require("stripe")("sk_test_CMOk7Zw6xQRBDUyvzGhK08Ab");

const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = (app) => {

    // you can pass as many middlewares as you want here, but one of them has to send a response 
    // that's a requirement of express
    app.post('/api/stripe', requireLogin, async (req, res) => {
        // console.log(req.body);
        const charge = await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: '$5 for 5 credits',
            source: req.body.id
        });
        // console.log(charge);
        
        // add five credits 
        req.user.credits += 5;
        const user = await req.user.save();
        
        // send back to browser
        res.send(user);
    });
};
