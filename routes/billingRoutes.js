// npmjs.com/package/stripe -> Documentation
//  example: var stripe = require("stripe")("sk_test_CMOk7Zw6xQRBDUyvzGhK08Ab");

const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

module.exports = (app) => {

    // check if user is logged in
    if (!req.user) {
        return res.status(401).send({ error: 'You must log in!'});
    }

    app.post('/api/stripe', async (req, res) => {
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
