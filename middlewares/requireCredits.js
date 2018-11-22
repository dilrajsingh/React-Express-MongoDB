// checks to see if user has zero or more credits, otherwise don't let them proceed
module.exports = (req, res, next) => {
    if (req.user.credits < 1) {
        // 403, forbidden
        return res.status(403).send( { error: 'Not enough credits!' } );
    }

    next();
};
